/**
 * Telegix - Pure JavaScript Telegram Bot API Client
 * @module telegix/api
 */

import { TelegramError, NetworkError } from './errors.js';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Checks if value is a file/stream/buffer that needs multipart/form-data upload
 * @param {any} value
 * @returns {boolean}
 */
export function isUploadableFile(value) {
  if (!value) return false;
  if (typeof value === 'string') return false;
  if (value instanceof Blob || value instanceof Uint8Array || Buffer.isBuffer(value)) return true;
  if (typeof value === 'object' && ('source' in value || 'url' in value)) return true;
  if (typeof value === 'object' && typeof value.pipe === 'function') return true; // Stream
  return false;
}

/**
 * Normalizes input source into a Blob/File suitable for FormData
 * @param {any} input
 * @param {string} [defaultFilename='file']
 * @returns {Promise<{ blob: Blob|string, filename?: string }>}
 */
export async function normalizeFileSource(input, defaultFilename = 'file') {
  if (typeof input === 'string') {
    // If it's a file path on local filesystem
    if (fs.existsSync(input)) {
      const buffer = await fs.promises.readFile(input);
      const filename = path.basename(input) || defaultFilename;
      return {
        blob: new Blob([buffer]),
        filename,
      };
    }
    // Otherwise it's a file_id or URL string
    return { blob: input };
  }

  if (Buffer.isBuffer(input) || input instanceof Uint8Array) {
    return {
      blob: new Blob([input]),
      filename: defaultFilename,
    };
  }

  if (input instanceof Blob) {
    return {
      blob: input,
      filename: defaultFilename,
    };
  }

  if (typeof input === 'object') {
    const filename = input.filename || defaultFilename;

    if (input.url && typeof input.url === 'string') {
      return { blob: input.url };
    }

    if (input.source) {
      if (typeof input.source === 'string') {
        if (fs.existsSync(input.source)) {
          const buffer = await fs.promises.readFile(input.source);
          return {
            blob: new Blob([buffer]),
            filename: input.filename || path.basename(input.source) || defaultFilename,
          };
        }
        return { blob: input.source };
      }
      if (Buffer.isBuffer(input.source) || input.source instanceof Uint8Array) {
        return {
          blob: new Blob([input.source]),
          filename,
        };
      }
      if (input.source instanceof Blob) {
        return {
          blob: input.source,
          filename,
        };
      }
      // Stream
      if (typeof input.source.pipe === 'function') {
        const chunks = [];
        for await (const chunk of input.source) {
          chunks.push(chunk);
        }
        return {
          blob: new Blob(chunks),
          filename,
        };
      }
    }

    if (typeof input.pipe === 'function') {
      const chunks = [];
      for await (const chunk of input) {
        chunks.push(chunk);
      }
      return {
        blob: new Blob(chunks),
        filename,
      };
    }
  }

  return { blob: input };
}

/**
 * Normalizes payload and handles automatic wrapping of keyboards and builders into reply_markup
 * @param {object} payload
 * @returns {object}
 */
export function normalizeTelegramPayload(payload) {
  if (!payload || typeof payload !== 'object') return payload;

  let norm = { ...payload };

  // Always delete any stray toJSON property from root payload to prevent JSON.stringify hijacking
  if ('toJSON' in norm) {
    delete norm.toJSON;
  }

  // 1. If payload contains top-level keyboard
  if (norm.keyboard) {
    const keyboard = norm.keyboard;
    const is_persistent = Boolean(norm.is_persistent);
    const resize_keyboard = norm.resize_keyboard ?? true;
    const one_time_keyboard = Boolean(norm.one_time_keyboard);
    const input_field_placeholder = norm.input_field_placeholder;
    const selective = Boolean(norm.selective);

    delete norm.keyboard;
    delete norm.is_persistent;
    delete norm.resize_keyboard;
    delete norm.one_time_keyboard;
    delete norm.input_field_placeholder;
    delete norm.selective;

    if (!norm.reply_markup) {
      norm.reply_markup = {
        keyboard,
        is_persistent,
        resize_keyboard,
        one_time_keyboard,
        input_field_placeholder,
        selective,
      };
    }
  }

  // 2. If payload contains top-level inline_keyboard
  if (norm.inline_keyboard) {
    const inline_keyboard = norm.inline_keyboard;
    delete norm.inline_keyboard;
    if (!norm.reply_markup) {
      norm.reply_markup = { inline_keyboard };
    }
  }

  // 3. If payload contains top-level remove_keyboard
  if (norm.remove_keyboard) {
    const selective = Boolean(norm.selective);
    delete norm.remove_keyboard;
    delete norm.selective;
    if (!norm.reply_markup) {
      norm.reply_markup = { remove_keyboard: true, selective };
    }
  }

  // 4. If payload contains top-level force_reply
  if (norm.force_reply) {
    const selective = Boolean(norm.selective);
    const input_field_placeholder = norm.input_field_placeholder;
    delete norm.force_reply;
    delete norm.selective;
    delete norm.input_field_placeholder;
    if (!norm.reply_markup) {
      norm.reply_markup = { force_reply: true, selective, input_field_placeholder };
    }
  }

  // 5. If reply_markup is an object with toJSON or nested reply_markup
  if (norm.reply_markup) {
    if (typeof norm.reply_markup.toJSON === 'function') {
      norm.reply_markup = norm.reply_markup.toJSON();
    }
    while (norm.reply_markup && typeof norm.reply_markup === 'object' && norm.reply_markup.reply_markup) {
      norm.reply_markup = norm.reply_markup.reply_markup;
      if (typeof norm.reply_markup?.toJSON === 'function') {
        norm.reply_markup = norm.reply_markup.toJSON();
      }
    }
  }

  return norm;
}

export class Telegram {
  /**
   * @param {string} token - Bot Token from @BotFather
   * @param {object} [options]
   * @param {string} [options.apiRoot='https://api.telegram.org']
   * @param {boolean} [options.testEnv=false]
   * @param {number} [options.timeout=60000] - Request timeout in ms
   */
  constructor(token, options = {}) {
    if (!token || typeof token !== 'string') {
      throw new Error('Telegix: Telegram Bot Token is required and must be a string.');
    }
    this.token = token.trim();
    this.apiRoot = options.apiRoot || 'https://api.telegram.org';
    this.testEnv = Boolean(options.testEnv);
    this.timeout = options.timeout || 60000;
    this.options = options;
  }

  /**
   * Returns base URL for Telegram API calls
   * @returns {string}
   */
  getBaseUrl() {
    return `${this.apiRoot}/bot${this.token}${this.testEnv ? '/test' : ''}`;
  }

  /**
   * Returns base URL for Telegram downloaded files
   * @returns {string}
   */
  getFileBaseUrl() {
    return `${this.apiRoot}/file/bot${this.token}${this.testEnv ? '/test' : ''}`;
  }

  /**
   * Low-level API caller
   * @param {string} method - Telegram API method name (e.g. 'sendMessage', 'sendPhoto')
   * @param {object} [payload={}] - Parameters for the method
   * @param {object} [options={}] - Custom options / abort signal
   * @returns {Promise<any>} Result from Telegram Bot API
   */
  async call(method, payload = {}, options = {}) {
    const url = `${this.getBaseUrl()}/${method}`;
    const normalizedPayload = normalizeTelegramPayload(payload);
    let hasUpload = false;

    // Check if any payload property is an uploadable file
    for (const key of Object.keys(normalizedPayload)) {
      if (isUploadableFile(normalizedPayload[key])) {
        hasUpload = true;
        break;
      }
    }

    let requestInit = {
      method: 'POST',
      signal: options.signal,
    };

    if (hasUpload) {
      const formData = new FormData();
      for (const [key, value] of Object.entries(normalizedPayload)) {
        if (value === undefined || value === null) continue;

        if (isUploadableFile(value)) {
          const { blob, filename } = await normalizeFileSource(value, key);
          if (typeof blob === 'string') {
            formData.append(key, blob);
          } else {
            formData.append(key, blob, filename || 'file');
          }
        } else if (typeof value === 'object') {
          // Serialize nested objects like reply_markup, entities, media arrays
          const serialized = typeof value.toJSON === 'function' ? value.toJSON() : value;
          formData.append(key, JSON.stringify(serialized));
        } else {
          formData.append(key, String(value));
        }
      }
      requestInit.body = formData;
    } else {
      // Serialize any custom toJSON objects (like Markup)
      const cleanPayload = {};
      for (const [key, value] of Object.entries(normalizedPayload)) {
        if (value === undefined || value === null || key === 'toJSON') continue;
        if (typeof value === 'object' && typeof value.toJSON === 'function') {
          cleanPayload[key] = value.toJSON();
        } else {
          cleanPayload[key] = value;
        }
      }
      delete cleanPayload.toJSON;

      requestInit.headers = {
        'Content-Type': 'application/json',
      };
      requestInit.body = JSON.stringify(cleanPayload);
    }

    let response;
    try {
      response = await fetch(url, requestInit);
    } catch (err) {
      throw new NetworkError(err, method);
    }

    let data;
    try {
      data = await response.json();
    } catch (err) {
      throw new TelegramError(
        { error_code: response.status, description: `HTTP ${response.statusText || response.status}` },
        method,
        payload
      );
    }

    if (!data.ok) {
      if (data.error_code === 429 && data.parameters?.retry_after && options.autoRetry !== false) {
        const retryAfter = data.parameters.retry_after;
        await new Promise((resolve) => setTimeout(resolve, (retryAfter + 1) * 1000));
        return this.call(method, payload, options);
      }
      throw new TelegramError(data, method, payload);
    }

    return data.result;
  }

  // ==========================================
  // Telegram Bot API Methods Implementation
  // ==========================================

  /**
   * Get basic information about the bot
   */
  getMe() {
    return this.call('getMe');
  }

  /**
   * Log out from the cloud Bot API server before at-home local server migration
   */
  logOut() {
    return this.call('logOut');
  }

  /**
   * Close the bot instance before moving it between machines
   */
  close() {
    return this.call('close');
  }

  /**
   * Send text message
   * @param {number|string} chatId
   * @param {string} text
   * @param {object} [extra]
   */
  sendMessage(chatId, text, extra = {}) {
    return this.call('sendMessage', { chat_id: chatId, text, ...extra });
  }

  /**
   * Forward a message
   * @param {number|string} chatId
   * @param {number|string} fromChatId
   * @param {number} messageId
   * @param {object} [extra]
   */
  forwardMessage(chatId, fromChatId, messageId, extra = {}) {
    return this.call('forwardMessage', {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_id: messageId,
      ...extra,
    });
  }

  /**
   * Forward multiple messages
   */
  forwardMessages(chatId, fromChatId, messageIds, extra = {}) {
    return this.call('forwardMessages', {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_ids: messageIds,
      ...extra,
    });
  }

  /**
   * Copy a message
   */
  copyMessage(chatId, fromChatId, messageId, extra = {}) {
    return this.call('copyMessage', {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_id: messageId,
      ...extra,
    });
  }

  /**
   * Copy multiple messages
   */
  copyMessages(chatId, fromChatId, messageIds, extra = {}) {
    return this.call('copyMessages', {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_ids: messageIds,
      ...extra,
    });
  }

  /**
   * Send photo
   */
  sendPhoto(chatId, photo, extra = {}) {
    return this.call('sendPhoto', { chat_id: chatId, photo, ...extra });
  }

  /**
   * Send audio
   */
  sendAudio(chatId, audio, extra = {}) {
    return this.call('sendAudio', { chat_id: chatId, audio, ...extra });
  }

  /**
   * Send document
   */
  sendDocument(chatId, document, extra = {}) {
    return this.call('sendDocument', { chat_id: chatId, document, ...extra });
  }

  /**
   * Send video
   */
  sendVideo(chatId, video, extra = {}) {
    return this.call('sendVideo', { chat_id: chatId, video, ...extra });
  }

  /**
   * Send animation / GIF
   */
  sendAnimation(chatId, animation, extra = {}) {
    return this.call('sendAnimation', { chat_id: chatId, animation, ...extra });
  }

  /**
   * Send voice note
   */
  sendVoice(chatId, voice, extra = {}) {
    return this.call('sendVoice', { chat_id: chatId, voice, ...extra });
  }

  /**
   * Send video note (round video)
   */
  sendVideoNote(chatId, videoNote, extra = {}) {
    return this.call('sendVideoNote', { chat_id: chatId, video_note: videoNote, ...extra });
  }

  /**
   * Send media group (album)
   */
  sendMediaGroup(chatId, media, extra = {}) {
    return this.call('sendMediaGroup', { chat_id: chatId, media, ...extra });
  }

  /**
   * Send location
   */
  sendLocation(chatId, latitude, longitude, extra = {}) {
    return this.call('sendLocation', { chat_id: chatId, latitude, longitude, ...extra });
  }

  /**
   * Edit live location
   */
  editMessageLiveLocation(latitude, longitude, extra = {}) {
    return this.call('editMessageLiveLocation', { latitude, longitude, ...extra });
  }

  /**
   * Stop live location
   */
  stopMessageLiveLocation(extra = {}) {
    return this.call('stopMessageLiveLocation', extra);
  }

  /**
   * Send venue
   */
  sendVenue(chatId, latitude, longitude, title, address, extra = {}) {
    return this.call('sendVenue', {
      chat_id: chatId,
      latitude,
      longitude,
      title,
      address,
      ...extra,
    });
  }

  /**
   * Send phone contact
   */
  sendContact(chatId, phoneNumber, firstName, extra = {}) {
    return this.call('sendContact', {
      chat_id: chatId,
      phone_number: phoneNumber,
      first_name: firstName,
      ...extra,
    });
  }

  /**
   * Send poll
   */
  sendPoll(chatId, question, options, extra = {}) {
    return this.call('sendPoll', { chat_id: chatId, question, options, ...extra });
  }

  /**
   * Send dice
   */
  sendDice(chatId, extra = {}) {
    return this.call('sendDice', { chat_id: chatId, ...extra });
  }

  /**
   * Send chat action (typing, upload_photo, record_video, etc.)
   */
  sendChatAction(chatId, action, extra = {}) {
    return this.call('sendChatAction', { chat_id: chatId, action, ...extra });
  }

  /**
   * Set message reaction
   */
  setMessageReaction(chatId, messageId, reaction, extra = {}) {
    const formattedReaction = Array.isArray(reaction)
      ? reaction.map((r) => (typeof r === 'string' ? { type: 'emoji', emoji: r } : r))
      : typeof reaction === 'string'
        ? [{ type: 'emoji', emoji: reaction }]
        : reaction;
    return this.call('setMessageReaction', {
      chat_id: chatId,
      message_id: messageId,
      reaction: formattedReaction,
      ...extra,
    });
  }

  /**
   * Get user profile photos
   */
  getUserProfilePhotos(userId, extra = {}) {
    return this.call('getUserProfilePhotos', { user_id: userId, ...extra });
  }

  /**
   * Get file info
   */
  getFile(fileId) {
    return this.call('getFile', { file_id: fileId });
  }

  /**
   * Helper to get direct download URL of a file
   */
  async getFileLink(fileId) {
    if (typeof fileId === 'object' && fileId.file_path) {
      return `${this.getFileBaseUrl()}/${fileId.file_path}`;
    }
    const file = await this.getFile(fileId);
    return `${this.getFileBaseUrl()}/${file.file_path}`;
  }

  /**
   * Ban chat member
   */
  banChatMember(chatId, userId, extra = {}) {
    return this.call('banChatMember', { chat_id: chatId, user_id: userId, ...extra });
  }

  /**
   * Unban chat member
   */
  unbanChatMember(chatId, userId, extra = {}) {
    return this.call('unbanChatMember', { chat_id: chatId, user_id: userId, ...extra });
  }

  /**
   * Restrict chat member
   */
  restrictChatMember(chatId, userId, permissions, extra = {}) {
    return this.call('restrictChatMember', {
      chat_id: chatId,
      user_id: userId,
      permissions,
      ...extra,
    });
  }

  /**
   * Promote chat member
   */
  promoteChatMember(chatId, userId, rights = {}) {
    return this.call('promoteChatMember', { chat_id: chatId, user_id: userId, ...rights });
  }

  /**
   * Set chat administrator custom title
   */
  setChatAdministratorCustomTitle(chatId, userId, customTitle) {
    return this.call('setChatAdministratorCustomTitle', {
      chat_id: chatId,
      user_id: userId,
      custom_title: customTitle,
    });
  }

  /**
   * Ban chat sender chat
   */
  banChatSenderChat(chatId, senderChatId) {
    return this.call('banChatSenderChat', { chat_id: chatId, sender_chat_id: senderChatId });
  }

  /**
   * Unban chat sender chat
   */
  unbanChatSenderChat(chatId, senderChatId) {
    return this.call('unbanChatSenderChat', { chat_id: chatId, sender_chat_id: senderChatId });
  }

  /**
   * Set chat permissions
   */
  setChatPermissions(chatId, permissions, extra = {}) {
    return this.call('setChatPermissions', { chat_id: chatId, permissions, ...extra });
  }

  /**
   * Export chat invite link
   */
  exportChatInviteLink(chatId) {
    return this.call('exportChatInviteLink', { chat_id: chatId });
  }

  /**
   * Create chat invite link
   */
  createChatInviteLink(chatId, extra = {}) {
    return this.call('createChatInviteLink', { chat_id: chatId, ...extra });
  }

  /**
   * Edit chat invite link
   */
  editChatInviteLink(chatId, inviteLink, extra = {}) {
    return this.call('editChatInviteLink', { chat_id: chatId, invite_link: inviteLink, ...extra });
  }

  /**
   * Revoke chat invite link
   */
  revokeChatInviteLink(chatId, inviteLink) {
    return this.call('revokeChatInviteLink', { chat_id: chatId, invite_link: inviteLink });
  }

  /**
   * Approve chat join request
   */
  approveChatJoinRequest(chatId, userId) {
    return this.call('approveChatJoinRequest', { chat_id: chatId, user_id: userId });
  }

  /**
   * Decline chat join request
   */
  declineChatJoinRequest(chatId, userId) {
    return this.call('declineChatJoinRequest', { chat_id: chatId, user_id: userId });
  }

  /**
   * Set chat photo
   */
  setChatPhoto(chatId, photo) {
    return this.call('setChatPhoto', { chat_id: chatId, photo });
  }

  /**
   * Delete chat photo
   */
  deleteChatPhoto(chatId) {
    return this.call('deleteChatPhoto', { chat_id: chatId });
  }

  /**
   * Set chat title
   */
  setChatTitle(chatId, title) {
    return this.call('setChatTitle', { chat_id: chatId, title });
  }

  /**
   * Set chat description
   */
  setChatDescription(chatId, description) {
    return this.call('setChatDescription', { chat_id: chatId, description });
  }

  /**
   * Pin message in chat
   */
  pinChatMessage(chatId, messageId, extra = {}) {
    return this.call('pinChatMessage', { chat_id: chatId, message_id: messageId, ...extra });
  }

  /**
   * Unpin message in chat
   */
  unpinChatMessage(chatId, messageId, extra = {}) {
    return this.call('unpinChatMessage', { chat_id: chatId, message_id: messageId, ...extra });
  }

  /**
   * Unpin all chat messages
   */
  unpinAllChatMessages(chatId) {
    return this.call('unpinAllChatMessages', { chat_id: chatId });
  }

  /**
   * Leave chat
   */
  leaveChat(chatId) {
    return this.call('leaveChat', { chat_id: chatId });
  }

  /**
   * Get chat info
   */
  getChat(chatId) {
    return this.call('getChat', { chat_id: chatId });
  }

  /**
   * Get chat administrators
   */
  getChatAdministrators(chatId) {
    return this.call('getChatAdministrators', { chat_id: chatId });
  }

  /**
   * Get chat member count
   */
  getChatMemberCount(chatId) {
    return this.call('getChatMemberCount', { chat_id: chatId });
  }

  /**
   * Get chat member info
   */
  getChatMember(chatId, userId) {
    return this.call('getChatMember', { chat_id: chatId, user_id: userId });
  }

  /**
   * Set chat sticker set
   */
  setChatStickerSet(chatId, stickerSetName) {
    return this.call('setChatStickerSet', { chat_id: chatId, sticker_set_name: stickerSetName });
  }

  /**
   * Delete chat sticker set
   */
  deleteChatStickerSet(chatId) {
    return this.call('deleteChatStickerSet', { chat_id: chatId });
  }

  /**
   * Answer callback query
   */
  answerCallbackQuery(callbackQueryId, extra = {}) {
    return this.call('answerCallbackQuery', {
      callback_query_id: callbackQueryId,
      ...extra,
    });
  }

  /**
   * Edit message text
   */
  editMessageText(chatId, messageId, inlineMessageId, text, extra = {}) {
    const payload = { text, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call('editMessageText', payload);
  }

  /**
   * Edit message caption
   */
  editMessageCaption(chatId, messageId, inlineMessageId, caption, extra = {}) {
    const payload = { caption, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call('editMessageCaption', payload);
  }

  /**
   * Edit message media
   */
  editMessageMedia(chatId, messageId, inlineMessageId, media, extra = {}) {
    const payload = { media, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call('editMessageMedia', payload);
  }

  /**
   * Edit message reply markup
   */
  editMessageReplyMarkup(chatId, messageId, inlineMessageId, replyMarkup, extra = {}) {
    const payload = { reply_markup: replyMarkup, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call('editMessageReplyMarkup', payload);
  }

  /**
   * Stop poll
   */
  stopPoll(chatId, messageId, extra = {}) {
    return this.call('stopPoll', { chat_id: chatId, message_id: messageId, ...extra });
  }

  /**
   * Delete single message
   */
  deleteMessage(chatId, messageId) {
    return this.call('deleteMessage', { chat_id: chatId, message_id: messageId });
  }

  /**
   * Delete multiple messages
   */
  deleteMessages(chatId, messageIds) {
    return this.call('deleteMessages', { chat_id: chatId, message_ids: messageIds });
  }

  /**
   * Answer inline query
   */
  answerInlineQuery(inlineQueryId, results, extra = {}) {
    return this.call('answerInlineQuery', {
      inline_query_id: inlineQueryId,
      results,
      ...extra,
    });
  }

  /**
   * Answer web app query
   */
  answerWebAppQuery(webAppQueryId, result) {
    return this.call('answerWebAppQuery', {
      web_app_query_id: webAppQueryId,
      result,
    });
  }

  /**
   * Set webhook
   */
  setWebhook(url, extra = {}) {
    return this.call('setWebhook', { url, ...extra });
  }

  /**
   * Delete webhook
   */
  deleteWebhook(extra = {}) {
    return this.call('deleteWebhook', extra);
  }

  /**
   * Get webhook info
   */
  getWebhookInfo() {
    return this.call('getWebhookInfo');
  }

  /**
   * Get updates via polling
   */
  getUpdates(offset, limit, timeout, allowedUpdates) {
    const payload = {};
    if (offset !== undefined) payload.offset = offset;
    if (limit !== undefined) payload.limit = limit;
    if (timeout !== undefined) payload.timeout = timeout;
    if (allowedUpdates !== undefined) payload.allowed_updates = allowedUpdates;
    return this.call('getUpdates', payload);
  }

  /**
   * Bot commands and metadata
   */
  setMyCommands(commands, extra = {}) {
    return this.call('setMyCommands', { commands, ...extra });
  }

  deleteMyCommands(extra = {}) {
    return this.call('deleteMyCommands', extra);
  }

  getMyCommands(extra = {}) {
    return this.call('getMyCommands', extra);
  }

  setMyName(name, extra = {}) {
    return this.call('setMyName', { name, ...extra });
  }

  getMyName(extra = {}) {
    return this.call('getMyName', extra);
  }

  setMyDescription(description, extra = {}) {
    return this.call('setMyDescription', { description, ...extra });
  }

  getMyDescription(extra = {}) {
    return this.call('getMyDescription', extra);
  }

  setMyShortDescription(shortDescription, extra = {}) {
    return this.call('setMyShortDescription', { short_description: shortDescription, ...extra });
  }

  getMyShortDescription(extra = {}) {
    return this.call('getMyShortDescription', extra);
  }

  setChatMenuButton(extra = {}) {
    return this.call('setChatMenuButton', extra);
  }

  getChatMenuButton(extra = {}) {
    return this.call('getChatMenuButton', extra);
  }

  setMyDefaultAdministratorRights(extra = {}) {
    return this.call('setMyDefaultAdministratorRights', extra);
  }

  getMyDefaultAdministratorRights(extra = {}) {
    return this.call('getMyDefaultAdministratorRights', extra);
  }

  // ==========================================
  // Forum Topics Management (Telegram API)
  // ==========================================

  /**
   * Create a topic in a forum supergroup chat
   * @param {number|string} chatId
   * @param {string} name
   * @param {object} [extra] - icon_color, icon_custom_emoji_id
   */
  createForumTopic(chatId, name, extra = {}) {
    return this.call('createForumTopic', { chat_id: chatId, name, ...extra });
  }

  /**
   * Edit name and icon of a forum topic
   * @param {number|string} chatId
   * @param {number} messageThreadId
   * @param {object} [extra] - name, icon_custom_emoji_id
   */
  editForumTopic(chatId, messageThreadId, extra = {}) {
    return this.call('editForumTopic', {
      chat_id: chatId,
      message_thread_id: messageThreadId,
      ...extra,
    });
  }

  /**
   * Close an open topic in a forum supergroup chat
   * @param {number|string} chatId
   * @param {number} messageThreadId
   */
  closeForumTopic(chatId, messageThreadId) {
    return this.call('closeForumTopic', {
      chat_id: chatId,
      message_thread_id: messageThreadId,
    });
  }

  /**
   * Reopen a closed topic in a forum supergroup chat
   * @param {number|string} chatId
   * @param {number} messageThreadId
   */
  reopenForumTopic(chatId, messageThreadId) {
    return this.call('reopenForumTopic', {
      chat_id: chatId,
      message_thread_id: messageThreadId,
    });
  }

  /**
   * Delete a forum topic along with all its messages
   * @param {number|string} chatId
   * @param {number} messageThreadId
   */
  deleteForumTopic(chatId, messageThreadId) {
    return this.call('deleteForumTopic', {
      chat_id: chatId,
      message_thread_id: messageThreadId,
    });
  }

  /**
   * Unpin all messages in a forum topic
   * @param {number|string} chatId
   * @param {number} messageThreadId
   */
  unpinAllForumTopicMessages(chatId, messageThreadId) {
    return this.call('unpinAllForumTopicMessages', {
      chat_id: chatId,
      message_thread_id: messageThreadId,
    });
  }

  /**
   * Edit General forum topic
   * @param {number|string} chatId
   * @param {string} name
   */
  editGeneralForumTopic(chatId, name) {
    return this.call('editGeneralForumTopic', { chat_id: chatId, name });
  }

  /**
   * Close General forum topic
   * @param {number|string} chatId
   */
  closeGeneralForumTopic(chatId) {
    return this.call('closeGeneralForumTopic', { chat_id: chatId });
  }

  /**
   * Reopen General forum topic
   * @param {number|string} chatId
   */
  reopenGeneralForumTopic(chatId) {
    return this.call('reopenGeneralForumTopic', { chat_id: chatId });
  }

  /**
   * Hide General forum topic
   * @param {number|string} chatId
   */
  hideGeneralForumTopic(chatId) {
    return this.call('hideGeneralForumTopic', { chat_id: chatId });
  }

  /**
   * Unhide General forum topic
   * @param {number|string} chatId
   */
  unhideGeneralForumTopic(chatId) {
    return this.call('unhideGeneralForumTopic', { chat_id: chatId });
  }

  // ==========================================
  // Telegram Stars & Payments
  // ==========================================

  /**
   * Send invoice (Supports Telegram Stars XTR and standard currencies)
   * @param {number|string} chatId
   * @param {string} title
   * @param {string} description
   * @param {string} payload
   * @param {string} currency - e.g. 'XTR' for Telegram Stars, or 'USD', 'EUR', 'IDR'
   * @param {Array<{label: string, amount: number}>} prices
   * @param {object} [extra]
   */
  sendInvoice(chatId, title, description, payload, currency, prices, extra = {}) {
    return this.call('sendInvoice', {
      chat_id: chatId,
      title,
      description,
      payload,
      currency,
      prices,
      ...extra,
    });
  }

  /**
   * Create an invoice link that can be paid in Telegram
   * @param {string} title
   * @param {string} description
   * @param {string} payload
   * @param {string} currency - e.g. 'XTR'
   * @param {Array<{label: string, amount: number}>} prices
   * @param {object} [extra]
   * @returns {Promise<string>}
   */
  createInvoiceLink(title, description, payload, currency, prices, extra = {}) {
    return this.call('createInvoiceLink', {
      title,
      description,
      payload,
      currency,
      prices,
      ...extra,
    });
  }

  /**
   * Answer shipping query
   * @param {string} shippingQueryId
   * @param {boolean} ok
   * @param {object} [extra]
   */
  answerShippingQuery(shippingQueryId, ok, extra = {}) {
    return this.call('answerShippingQuery', {
      shipping_query_id: shippingQueryId,
      ok: Boolean(ok),
      ...extra,
    });
  }

  /**
   * Answer pre checkout query
   * @param {string} preCheckoutQueryId
   * @param {boolean} ok
   * @param {string} [errorMessage]
   */
  answerPreCheckoutQuery(preCheckoutQueryId, ok, errorMessage = undefined) {
    const payload = {
      pre_checkout_query_id: preCheckoutQueryId,
      ok: Boolean(ok),
    };
    if (!ok && errorMessage) {
      payload.error_message = errorMessage;
    }
    return this.call('answerPreCheckoutQuery', payload);
  }

  /**
   * Get transactions of the bot in Telegram Stars
   * @param {object} [extra] - offset, limit
   */
  getStarTransactions(extra = {}) {
    return this.call('getStarTransactions', extra);
  }

  /**
   * Refund a successful payment in Telegram Stars
   * @param {number} userId
   * @param {string} telegramPaymentChargeId
   */
  refundStarPayment(userId, telegramPaymentChargeId) {
    return this.call('refundStarPayment', {
      user_id: userId,
      telegram_payment_charge_id: telegramPaymentChargeId,
    });
  }

  /**
   * Edit user Star subscription status
   * @param {number} userId
   * @param {string} telegramPaymentChargeId
   * @param {boolean} isCanceled
   */
  editUserStarSubscription(userId, telegramPaymentChargeId, isCanceled) {
    return this.call('editUserStarSubscription', {
      user_id: userId,
      telegram_payment_charge_id: telegramPaymentChargeId,
      is_canceled: Boolean(isCanceled),
    });
  }

  // ==========================================
  // Paid Media (Telegram Stars)
  // ==========================================

  /**
   * Send paid media (photos/videos requiring Telegram Stars to unlock)
   * @param {number|string} chatId
   * @param {number} starCount - Number of Telegram Stars required
   * @param {Array<object>} media - Array of InputPaidMediaPhoto / InputPaidMediaVideo
   * @param {object} [extra]
   */
  sendPaidMedia(chatId, starCount, media, extra = {}) {
    return this.call('sendPaidMedia', {
      chat_id: chatId,
      star_count: starCount,
      media,
      ...extra,
    });
  }

  /**
   * Edit message paid media
   * @param {number|string} chatId
   * @param {number} [messageId]
   * @param {string} [inlineMessageId]
   * @param {Array<object>} media
   * @param {object} [extra]
   */
  editMessagePaidMedia(chatId, messageId, inlineMessageId, media, extra = {}) {
    const payload = { media, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call('editMessagePaidMedia', payload);
  }

  // ==========================================
  // Gifts & Verifications
  // ==========================================

  /**
   * Send a gift to a given user
   * @param {number} userId
   * @param {string} giftId
   * @param {object} [extra] - text, text_parse_mode, text_entities, pay_for_upgrade
   */
  sendGift(userId, giftId, extra = {}) {
    return this.call('sendGift', {
      user_id: userId,
      gift_id: giftId,
      ...extra,
    });
  }

  /**
   * Get list of gifts that can be sent by the bot to users
   */
  getAvailableGifts() {
    return this.call('getAvailableGifts');
  }

  /**
   * Get gifts received by a user
   * @param {number} userId
   * @param {object} [extra] - offset, limit
   */
  getUserGifts(userId, extra = {}) {
    return this.call('getUserGifts', { user_id: userId, ...extra });
  }

  /**
   * Verify a user on behalf of the organization
   * @param {number} userId
   * @param {string} [customDescription='']
   */
  verifyUser(userId, customDescription = '') {
    return this.call('verifyUser', {
      user_id: userId,
      custom_description: customDescription,
    });
  }

  /**
   * Verify a chat on behalf of the organization
   * @param {number|string} chatId
   * @param {string} [customDescription='']
   */
  verifyChat(chatId, customDescription = '') {
    return this.call('verifyChat', {
      chat_id: chatId,
      custom_description: customDescription,
    });
  }

  /**
   * Remove verification from a user
   * @param {number} userId
   */
  removeUserVerification(userId) {
    return this.call('removeUserVerification', { user_id: userId });
  }

  /**
   * Remove verification from a chat
   * @param {number|string} chatId
   */
  removeChatVerification(chatId) {
    return this.call('removeChatVerification', { chat_id: chatId });
  }

  // ==========================================
  // Telegram Business API
  // ==========================================

  /**
   * Get information about the connection of the bot with a business account
   * @param {string} businessConnectionId
   */
  getBusinessConnection(businessConnectionId) {
    return this.call('getBusinessConnection', {
      business_connection_id: businessConnectionId,
    });
  }

  // ==========================================
  // Boosts & Prepared Inline Messages
  // ==========================================

  /**
   * Get list of boosts added to a chat by a user
   * @param {number|string} chatId
   * @param {number} userId
   */
  getUserChatBoosts(chatId, userId) {
    return this.call('getUserChatBoosts', {
      chat_id: chatId,
      user_id: userId,
    });
  }

  /**
   * Save prepared inline message for mini-app sharing
   * @param {number} userId
   * @param {object} result - InlineQueryResult
   * @param {object} [extra] - allow_user_chats, allow_bot_chats, allow_group_chats, allow_channel_chats
   */
  savePreparedInlineMessage(userId, result, extra = {}) {
    return this.call('savePreparedInlineMessage', {
      user_id: userId,
      result,
      ...extra,
    });
  }

  // ==========================================
  // Stickers & Custom Emojis
  // ==========================================

  /**
   * Send a sticker
   * @param {number|string} chatId
   * @param {any} sticker - file_id, url, path, Buffer, Stream
   * @param {object} [extra]
   */
  sendSticker(chatId, sticker, extra = {}) {
    return this.call('sendSticker', { chat_id: chatId, sticker, ...extra });
  }

  /**
   * Get sticker set by name
   * @param {string} name
   */
  getStickerSet(name) {
    return this.call('getStickerSet', { name });
  }

  /**
   * Get custom emoji stickers by IDs
   * @param {Array<string>} customEmojiIds
   */
  getCustomEmojiStickers(customEmojiIds) {
    return this.call('getCustomEmojiStickers', {
      custom_emoji_ids: customEmojiIds,
    });
  }

  /**
   * Upload sticker file
   * @param {number} userId
   * @param {any} sticker
   * @param {'static'|'animated'|'video'} stickerFormat
   */
  uploadStickerFile(userId, sticker, stickerFormat) {
    return this.call('uploadStickerFile', {
      user_id: userId,
      sticker,
      sticker_format: stickerFormat,
    });
  }

  /**
   * Create new sticker set
   * @param {number} userId
   * @param {string} name
   * @param {string} title
   * @param {Array<object>} stickers
   * @param {object} [extra]
   */
  createNewStickerSet(userId, name, title, stickers, extra = {}) {
    return this.call('createNewStickerSet', {
      user_id: userId,
      name,
      title,
      stickers,
      ...extra,
    });
  }

  /**
   * Add sticker to existing set
   * @param {number} userId
   * @param {string} name
   * @param {object} sticker
   */
  addStickerToSet(userId, name, sticker) {
    return this.call('addStickerToSet', {
      user_id: userId,
      name,
      sticker,
    });
  }

  /**
   * Set sticker position in set
   * @param {string} sticker
   * @param {number} position
   */
  setStickerPositionInSet(sticker, position) {
    return this.call('setStickerPositionInSet', {
      sticker,
      position,
    });
  }

  /**
   * Delete sticker from set
   * @param {string} sticker
   */
  deleteStickerFromSet(sticker) {
    return this.call('deleteStickerFromSet', { sticker });
  }

  /**
   * Set sticker set title
   * @param {string} name
   * @param {string} title
   */
  setStickerSetTitle(name, title) {
    return this.call('setStickerSetTitle', { name, title });
  }

  /**
   * Delete sticker set
   * @param {string} name
   */
  deleteStickerSet(name) {
    return this.call('deleteStickerSet', { name });
  }

  // ==========================================
  // Games & Passport
  // ==========================================

  /**
   * Send game
   * @param {number|string} chatId
   * @param {string} gameShortName
   * @param {object} [extra]
   */
  sendGame(chatId, gameShortName, extra = {}) {
    return this.call('sendGame', {
      chat_id: chatId,
      game_short_name: gameShortName,
      ...extra,
    });
  }

  /**
   * Set user score in game
   * @param {number} userId
   * @param {number} score
   * @param {object} [extra]
   */
  setGameScore(userId, score, extra = {}) {
    return this.call('setGameScore', {
      user_id: userId,
      score,
      ...extra,
    });
  }

  /**
   * Get game high scores
   * @param {number} userId
   * @param {object} [extra]
   */
  getGameHighScores(userId, extra = {}) {
    return this.call('getGameHighScores', {
      user_id: userId,
      ...extra,
    });
  }

  /**
   * Set passport data errors
   * @param {number} userId
   * @param {Array<object>} errors
   */
  setPassportDataErrors(userId, errors) {
    return this.call('setPassportDataErrors', {
      user_id: userId,
      errors,
    });
  }

  // ==========================================
  // Bot API 10.3 (August 24, 2026) Updates
  // ==========================================

  /**
   * Send a rich message
   * @param {number|string} chatId
   * @param {object|Array} richMessage
   * @param {object} [extra]
   */
  sendRichMessage(chatId, richMessage, extra = {}) {
    const rm = typeof richMessage?.compile === 'function'
      ? richMessage.compile()
      : (typeof richMessage?.build === 'function' ? richMessage.build() : richMessage);

    const payload = {
      chat_id: chatId,
      rich_message: rm,
      ...(rm?.reply_markup ? { reply_markup: rm.reply_markup } : {}),
      ...extra,
    };

    return this.call('sendRichMessage', payload).catch(async (err) => {
      // Graceful fallback for environments/servers with standard sendMessage
      if (
        err.errorCode === 404 ||
        err.description?.includes('Method not found') ||
        err.description?.includes('Unknown method') ||
        err.description?.includes('Bad Request')
      ) {
        const text = rm?.text || (typeof rm === 'string' ? rm : ' ');
        const parseMode = rm?.parse_mode || extra.parse_mode || 'HTML';
        const replyMarkup = rm?.reply_markup || extra.reply_markup;
        return this.sendMessage(chatId, text, {
          parse_mode: parseMode,
          ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
          ...extra,
        });
      }
      throw err;
    });
  }

  /**
   * Send a rich message draft
   * @param {number|string} chatId
   * @param {object|Array} draft
   * @param {object} [extra]
   */
  sendRichMessageDraft(chatId, draft, extra = {}) {
    const d = typeof draft?.compile === 'function'
      ? draft.compile()
      : (typeof draft?.build === 'function' ? draft.build() : draft);

    const draftId = extra.draft_id ?? d?.draft_id ?? Math.floor(Math.random() * 2147483647) + 1;

    return this.call('sendRichMessageDraft', {
      chat_id: chatId,
      draft_id: draftId,
      draft: d,
      ...extra,
    }).catch(async (err) => {
      // Fallback: If draft method is not supported, attempt standard sendMessageDraft
      if (
        err.errorCode === 404 ||
        err.description?.includes('Method not found') ||
        err.description?.includes('Unknown method')
      ) {
        const text = d?.text || (typeof d === 'string' ? d : ' ');
        return this.sendMessageDraft(chatId, text, {
          draft_id: draftId,
          ...extra,
        }).catch(() => null);
      }
      throw err;
    });
  }

  /**
   * Edit rich message text
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {object|Array} richMessage
   * @param {object} [extra]
   */
  editRichMessageText(chatId, messageId, richMessage, extra = {}) {
    const rm = typeof richMessage?.compile === 'function'
      ? richMessage.compile()
      : (typeof richMessage?.build === 'function' ? richMessage.build() : richMessage);

    const payload = {
      chat_id: chatId,
      message_id: messageId,
      rich_message: rm,
      ...(rm?.reply_markup ? { reply_markup: rm.reply_markup } : {}),
      ...extra,
    };

    return this.call('editRichMessageText', payload).catch(async (err) => {
      if (
        err.errorCode === 404 ||
        err.description?.includes('Method not found') ||
        err.description?.includes('Unknown method') ||
        err.description?.includes('Bad Request')
      ) {
        const text = rm?.text || (typeof rm === 'string' ? rm : ' ');
        const parseMode = rm?.parse_mode || extra.parse_mode || 'HTML';
        const replyMarkup = rm?.reply_markup || extra.reply_markup;
        return this.editMessageText(chatId, messageId, undefined, text, {
          parse_mode: parseMode,
          ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
          ...extra,
        });
      }
      throw err;
    });
  }

  /**
   * Edit rich message caption
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {string} caption
   * @param {object} [extra]
   */
  editRichMessageCaption(chatId, messageId, caption, extra = {}) {
    return this.call('editRichMessageCaption', {
      chat_id: chatId,
      message_id: messageId,
      caption,
      ...extra,
    }).catch(async (err) => {
      if (
        err.errorCode === 404 ||
        err.description?.includes('Method not found') ||
        err.description?.includes('Unknown method') ||
        err.description?.includes('Bad Request')
      ) {
        return this.editMessageCaption(chatId, messageId, undefined, caption, extra);
      }
      throw err;
    });
  }

  /**
   * Send an ephemeral message
   * @param {number|string} chatId
   * @param {string} text
   * @param {object|number} [ephemeralParameters={}]
   * @param {object} [extra={}]
   */
  sendEphemeralMessage(chatId, text, ephemeralParameters = {}, extra = {}) {
    let params = ephemeralParameters;
    if (typeof ephemeralParameters === 'number') {
      params = { lifetime: ephemeralParameters };
    }
    const payload = {
      chat_id: chatId,
      text,
      ...(params && typeof params === 'object' ? { ephemeral_parameters: params } : {}),
      ...extra,
    };

    const autoDeleteSeconds =
      params?.autoDeleteSeconds ||
      params?.lifetime ||
      (typeof ephemeralParameters === 'number' ? ephemeralParameters : null);

    return this.call('sendEphemeralMessage', payload).catch(async (err) => {
      // Fallback: If method is not supported or rejected by Bot API, send message and auto-delete
      if (
        err.errorCode === 404 ||
        err.description?.includes('Method not found') ||
        err.description?.includes('Unknown method') ||
        err.description?.includes('Bad Request')
      ) {
        const msg = await this.sendMessage(chatId, text, extra);
        if (autoDeleteSeconds && msg?.message_id) {
          setTimeout(() => {
            this.deleteMessage(chatId, msg.message_id).catch(() => {});
          }, autoDeleteSeconds * 1000);
        }
        return msg;
      }
      throw err;
    });
  }

  /**
   * Edit ephemeral message text
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {string} text
   * @param {object} [extra]
   */
  editEphemeralMessageText(chatId, messageId, text, extra = {}) {
    return this.call('editEphemeralMessageText', {
      chat_id: chatId,
      message_id: messageId,
      text,
      ...extra,
    });
  }

  /**
   * Edit ephemeral message media
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {object} media
   * @param {object} [extra]
   */
  editEphemeralMessageMedia(chatId, messageId, media, extra = {}) {
    return this.call('editEphemeralMessageMedia', {
      chat_id: chatId,
      message_id: messageId,
      media,
      ...extra,
    });
  }

  /**
   * Edit ephemeral message caption
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {string} caption
   * @param {object} [extra]
   */
  editEphemeralMessageCaption(chatId, messageId, caption, extra = {}) {
    return this.call('editEphemeralMessageCaption', {
      chat_id: chatId,
      message_id: messageId,
      caption,
      ...extra,
    });
  }

  /**
   * Delete an ephemeral message
   * @param {number|string} chatId
   * @param {number} messageId
   */
  deleteEphemeralMessage(chatId, messageId) {
    return this.call('deleteEphemeralMessage', {
      chat_id: chatId,
      message_id: messageId,
    });
  }

  /**
   * Get managed bot access settings
   * @param {number} userId - Unique identifier of the target user who manages the bot
   * @param {object} [extra]
   */
  getManagedBotAccessSettings(userId, extra = {}) {
    if (!userId) {
      throw new Error('Telegram.getManagedBotAccessSettings(userId) requires a valid userId.');
    }
    return this.call('getManagedBotAccessSettings', {
      user_id: userId,
      ...extra,
    });
  }

  /**
   * Set managed bot access settings
   * @param {number} userId - Unique identifier of the target user who manages the bot
   * @param {object} [settings={}]
   * @param {object} [extra={}]
   */
  setManagedBotAccessSettings(userId, settings = {}, extra = {}) {
    if (!userId) {
      throw new Error('Telegram.setManagedBotAccessSettings(userId, settings) requires a valid userId.');
    }
    return this.call('setManagedBotAccessSettings', {
      user_id: userId,
      ...settings,
      ...extra,
    });
  }

  /**
   * Get user personal chat messages
   * @param {number} userId
   * @param {object} [extra]
   */
  getUserPersonalChatMessages(userId, extra = {}) {
    return this.call('getUserPersonalChatMessages', {
      user_id: userId,
      ...extra,
    });
  }

  /**
   * Send message draft
   * @param {number|string} chatId
   * @param {string} text
   * @param {object} [extra]
   */
  sendMessageDraft(chatId, text, extra = {}) {
    const draftId = extra.draft_id ?? Math.floor(Math.random() * 2147483647) + 1;
    return this.call('sendMessageDraft', {
      chat_id: chatId,
      draft_id: draftId,
      text,
      ...extra,
    });
  }
}
