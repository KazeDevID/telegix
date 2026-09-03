/**
 * Telegix - Context Handler
 * @module telegix/context
 */

import { serializeMessage, serializeUpdate } from './serialize.js';
import { escapeHtml } from './format.js';
import { validateWebAppInitData } from './webapp.js';
import { LinkPreview } from './link-preview.js';

export class Context {
  /**
   * @param {object} update - Raw Telegram update object
   * @param {import('./api.js').Telegram} telegram - Telegram API Client instance
   * @param {object} [botInfo] - Bot info (from getMe)
   */
  constructor(update, telegram, botInfo = null) {
    this.update = update;
    this.telegram = telegram;
    this.api = telegram; // alias
    this.botInfo = botInfo;
    this.state = {};
    this.match = null;
    this.command = null;
    this.payload = null;
  }

  get msg() {
    const rawMsg = this.message || this.editedMessage || this.channelPost || this.editedChannelPost || this.callbackQuery?.message;
    return serializeMessage(rawMsg);
  }

  get quoted() {
    return this.msg?.quoted || null;
  }

  serialize() {
    return serializeUpdate(this.update);
  }

  /**
   * Inferred type of update
   * @returns {string}
   */
  get updateType() {
    const types = [
      'message',
      'edited_message',
      'channel_post',
      'edited_channel_post',
      'business_connection',
      'business_message',
      'edited_business_message',
      'deleted_business_messages',
      'message_reaction',
      'message_reaction_count',
      'inline_query',
      'chosen_inline_result',
      'callback_query',
      'shipping_query',
      'pre_checkout_query',
      'purchased_paid_media',
      'poll',
      'poll_answer',
      'my_chat_member',
      'chat_member',
      'chat_join_request',
      'chat_boost',
      'removed_chat_boost',
      'paid_message_price_changed',
      'stopped_message_generation',
      'community_chat_joined',
    ];
    for (const type of types) {
      if (type in this.update) return type;
    }
    return 'unknown';
  }

  get message() {
    return this.update.message;
  }

  get editedMessage() {
    return this.update.edited_message;
  }

  get channelPost() {
    return this.update.channel_post;
  }

  get editedChannelPost() {
    return this.update.edited_channel_post;
  }

  get businessConnection() {
    return this.update.business_connection;
  }

  get businessMessage() {
    return this.update.business_message;
  }

  get editedBusinessMessage() {
    return this.update.edited_business_message;
  }

  get deletedBusinessMessages() {
    return this.update.deleted_business_messages;
  }

  get messageReaction() {
    return this.update.message_reaction;
  }

  get messageReactionCount() {
    return this.update.message_reaction_count;
  }

  get purchasedPaidMedia() {
    return this.update.purchased_paid_media;
  }

  get chatBoost() {
    return this.update.chat_boost;
  }

  get removedChatBoost() {
    return this.update.removed_chat_boost;
  }

  get paidMessagePriceChanged() {
    return this.update.paid_message_price_changed;
  }

  get stoppedMessageGeneration() {
    return this.update.stopped_message_generation;
  }

  get communityChatJoined() {
    return this.update.community_chat_joined;
  }

  get callbackQuery() {
    return this.update.callback_query;
  }

  get inlineQuery() {
    return this.update.inline_query;
  }

  get chosenInlineResult() {
    return this.update.chosen_inline_result;
  }

  get shippingQuery() {
    return this.update.shipping_query;
  }

  get preCheckoutQuery() {
    return this.update.pre_checkout_query;
  }

  get poll() {
    return this.update.poll;
  }

  get pollAnswer() {
    return this.update.poll_answer;
  }

  get myChatMember() {
    return this.update.my_chat_member;
  }

  get chatMember() {
    return this.update.chat_member;
  }

  get chatJoinRequest() {
    return this.update.chat_join_request;
  }

  get currentMessage() {
    return (
      this.message ||
      this.editedMessage ||
      this.channelPost ||
      this.editedChannelPost ||
      this.businessMessage ||
      this.editedBusinessMessage ||
      this.callbackQuery?.message
    );
  }

  /**
   * Sender user
   */
  get from() {
    return (
      this.message?.from ||
      this.editedMessage?.from ||
      this.businessMessage?.from ||
      this.editedBusinessMessage?.from ||
      this.businessConnection?.user ||
      this.messageReaction?.user ||
      this.purchasedPaidMedia?.from ||
      this.chatBoost?.boost?.source?.user ||
      this.removedChatBoost?.source?.user ||
      this.callbackQuery?.from ||
      this.inlineQuery?.from ||
      this.chosenInlineResult?.from ||
      this.shippingQuery?.from ||
      this.preCheckoutQuery?.from ||
      this.myChatMember?.from ||
      this.chatMember?.from ||
      this.chatJoinRequest?.from
    );
  }

  /**
   * Sender chat (e.g. for channel posts or anonymous group senders)
   */
  get senderChat() {
    return (
      this.message?.sender_chat ||
      this.editedMessage?.sender_chat ||
      this.channelPost?.sender_chat ||
      this.editedChannelPost?.sender_chat ||
      this.messageReaction?.actor_chat
    );
  }

  /**
   * Current chat object
   */
  get chat() {
    return (
      this.message?.chat ||
      this.editedMessage?.chat ||
      this.channelPost?.chat ||
      this.editedChannelPost?.chat ||
      this.businessMessage?.chat ||
      this.editedBusinessMessage?.chat ||
      this.messageReaction?.chat ||
      this.messageReactionCount?.chat ||
      this.chatBoost?.chat ||
      this.removedChatBoost?.chat ||
      this.callbackQuery?.message?.chat ||
      this.myChatMember?.chat ||
      this.chatMember?.chat ||
      this.chatJoinRequest?.chat
    );
  }

  /**
   * Whether current chat is a forum supergroup
   * @returns {boolean}
   */
  get isForum() {
    return Boolean(this.chat?.is_forum);
  }

  /**
   * Forum topic thread ID (message_thread_id)
   * @returns {number|null}
   */
  get topicId() {
    return (
      this.currentMessage?.message_thread_id ||
      this.message?.message_thread_id ||
      null
    );
  }

  get messageThreadId() {
    return this.topicId;
  }

  /**
   * Current chat ID
   * @returns {number|string|null}
   */
  get chatId() {
    return this.chat?.id ?? null;
  }

  /**
   * Current sender user ID
   * @returns {number|null}
   */
  get userId() {
    return this.from?.id ?? null;
  }

  /**
   * Text or caption of the message
   * @returns {string|null}
   */
  get text() {
    return (
      this.message?.text ||
      this.message?.caption ||
      this.editedMessage?.text ||
      this.editedMessage?.caption ||
      this.channelPost?.text ||
      this.channelPost?.caption ||
      this.callbackQuery?.data ||
      this.inlineQuery?.query ||
      null
    );
  }

  /**
   * Entities in the message or caption
   */
  get entities() {
    return (
      this.message?.entities ||
      this.message?.caption_entities ||
      this.editedMessage?.entities ||
      this.channelPost?.entities ||
      []
    );
  }

  /**
   * Assert chatId exists
   * @private
   */
  _assertChat() {
    if (!this.chatId) {
      throw new Error('Telegix Context: Method requires a chat context, but chatId is null.');
    }
    return this.chatId;
  }

  /**
   * Send a text message to current chat
   * @param {string} text
   * @param {object} [extra]
   */
  reply(text, extra = {}) {
    return this.telegram.sendMessage(this._assertChat(), text, extra);
  }

  /**
   * Send an HTML formatted message
   * @param {string} html
   * @param {object} [extra]
   */
  replyWithHTML(html, extra = {}) {
    return this.reply(html, { parse_mode: 'HTML', ...extra });
  }

  /**
   * Send a MarkdownV2 formatted message
   * @param {string} markdown
   * @param {object} [extra]
   */
  replyWithMarkdown(markdown, extra = {}) {
    return this.reply(markdown, { parse_mode: 'MarkdownV2', ...extra });
  }

  /**
   * Send a photo to current chat
   * @param {any} photo
   * @param {object} [extra]
   */
  replyWithPhoto(photo, extra = {}) {
    return this.telegram.sendPhoto(this._assertChat(), photo, extra);
  }

  /**
   * Send an audio file
   * @param {any} audio
   * @param {object} [extra]
   */
  replyWithAudio(audio, extra = {}) {
    return this.telegram.sendAudio(this._assertChat(), audio, extra);
  }

  /**
   * Send a document/file
   * @param {any} document
   * @param {object} [extra]
   */
  replyWithDocument(document, extra = {}) {
    return this.telegram.sendDocument(this._assertChat(), document, extra);
  }

  /**
   * Send a video
   * @param {any} video
   * @param {object} [extra]
   */
  replyWithVideo(video, extra = {}) {
    return this.telegram.sendVideo(this._assertChat(), video, extra);
  }

  /**
   * Send an animation / GIF
   * @param {any} animation
   * @param {object} [extra]
   */
  replyWithAnimation(animation, extra = {}) {
    return this.telegram.sendAnimation(this._assertChat(), animation, extra);
  }

  /**
   * Send a voice note
   * @param {any} voice
   * @param {object} [extra]
   */
  replyWithVoice(voice, extra = {}) {
    return this.telegram.sendVoice(this._assertChat(), voice, extra);
  }

  /**
   * Send a video note (round video)
   * @param {any} videoNote
   * @param {object} [extra]
   */
  replyWithVideoNote(videoNote, extra = {}) {
    return this.telegram.sendVideoNote(this._assertChat(), videoNote, extra);
  }

  /**
   * Send media album
   * @param {Array<object>} media
   * @param {object} [extra]
   */
  replyWithMediaGroup(media, extra = {}) {
    return this.telegram.sendMediaGroup(this._assertChat(), media, extra);
  }

  /**
   * Send location coordinates
   * @param {number} latitude
   * @param {number} longitude
   * @param {object} [extra]
   */
  replyWithLocation(latitude, longitude, extra = {}) {
    return this.telegram.sendLocation(this._assertChat(), latitude, longitude, extra);
  }

  /**
   * Send venue
   */
  replyWithVenue(latitude, longitude, title, address, extra = {}) {
    return this.telegram.sendVenue(this._assertChat(), latitude, longitude, title, address, extra);
  }

  /**
   * Send contact
   */
  replyWithContact(phoneNumber, firstName, extra = {}) {
    return this.telegram.sendContact(this._assertChat(), phoneNumber, firstName, extra);
  }

  /**
   * Send poll
   */
  replyWithPoll(question, options, extra = {}) {
    return this.telegram.sendPoll(this._assertChat(), question, options, extra);
  }

  /**
   * Send animated dice
   */
  replyWithDice(extra = {}) {
    return this.telegram.sendDice(this._assertChat(), extra);
  }

  /**
   * Send chat action (e.g. 'typing', 'upload_photo')
   * @param {string} action
   * @param {object} [extra]
   */
  replyWithChatAction(action, extra = {}) {
    return this.telegram.sendChatAction(this._assertChat(), action, extra);
  }

  /**
   * Set reaction on current message
   * @param {string|Array<string|object>} emoji
   */
  react(emoji) {
    const messageId = this.currentMessage?.message_id;
    if (!messageId) {
      throw new Error('Telegix Context: react() requires a message context.');
    }
    return this.telegram.setMessageReaction(this._assertChat(), messageId, emoji);
  }

  /**
   * Answer callback query
   * @param {string} [text]
   * @param {object} [options]
   */
  answerCallbackQuery(text = '', options = {}) {
    if (!this.callbackQuery) {
      throw new Error('Telegix Context: answerCallbackQuery() requires callback_query context.');
    }
    return this.telegram.answerCallbackQuery(this.callbackQuery.id, {
      text,
      ...options,
    });
  }

  /**
   * Answer callback query (alias for answerCallbackQuery)
   * @param {string} [text]
   * @param {object} [options]
   */
  answerCbQuery(text = '', options = {}) {
    return this.answerCallbackQuery(text, options);
  }

  /**
   * Answer inline query
   * @param {Array<object>} results
   * @param {object} [options]
   */
  answerInlineQuery(results = [], options = {}) {
    if (!this.inlineQuery) {
      throw new Error('Telegix Context: answerInlineQuery() requires inline_query context.');
    }
    return this.telegram.answerInlineQuery(this.inlineQuery.id, results, options);
  }

  /**
   * Edit current message text
   * @param {string} text
   * @param {object} [extra]
   */
  editMessageText(text, extra = {}) {
    const chatId = this.chatId;
    const messageId = this.currentMessage?.message_id;
    const inlineMessageId = this.callbackQuery?.inline_message_id;
    return this.telegram.editMessageText(chatId, messageId, inlineMessageId, text, extra);
  }

  /**
   * Edit current message caption
   * @param {string} caption
   * @param {object} [extra]
   */
  editMessageCaption(caption, extra = {}) {
    const chatId = this.chatId;
    const messageId = this.currentMessage?.message_id;
    const inlineMessageId = this.callbackQuery?.inline_message_id;
    return this.telegram.editMessageCaption(chatId, messageId, inlineMessageId, caption, extra);
  }

  /**
   * Edit current message media
   * @param {object} media
   * @param {object} [extra]
   */
  editMessageMedia(media, extra = {}) {
    const chatId = this.chatId;
    const messageId = this.currentMessage?.message_id;
    const inlineMessageId = this.callbackQuery?.inline_message_id;
    return this.telegram.editMessageMedia(chatId, messageId, inlineMessageId, media, extra);
  }

  /**
   * Edit current message reply markup
   * @param {object} replyMarkup
   * @param {object} [extra]
   */
  editMessageReplyMarkup(replyMarkup, extra = {}) {
    const chatId = this.chatId;
    const messageId = this.currentMessage?.message_id;
    const inlineMessageId = this.callbackQuery?.inline_message_id;
    return this.telegram.editMessageReplyMarkup(chatId, messageId, inlineMessageId, replyMarkup, extra);
  }

  /**
   * Delete message
   * @param {number} [messageId] - Defaults to current message id
   */
  deleteMessage(messageId = this.currentMessage?.message_id) {
    if (!messageId) {
      throw new Error('Telegix Context: deleteMessage() requires messageId.');
    }
    return this.telegram.deleteMessage(this._assertChat(), messageId);
  }

  /**
   * Forward current message to another chat
   * @param {number|string} toChatId
   * @param {object} [extra]
   */
  forwardMessage(toChatId, extra = {}) {
    const messageId = this.currentMessage?.message_id;
    if (!messageId) {
      throw new Error('Telegix Context: forwardMessage() requires current message context.');
    }
    return this.telegram.forwardMessage(toChatId, this._assertChat(), messageId, extra);
  }

  /**
   * Copy current message to another chat
   * @param {number|string} toChatId
   * @param {object} [extra]
   */
  copyMessage(toChatId, extra = {}) {
    const messageId = this.currentMessage?.message_id;
    if (!messageId) {
      throw new Error('Telegix Context: copyMessage() requires current message context.');
    }
    return this.telegram.copyMessage(toChatId, this._assertChat(), messageId, extra);
  }

  /**
   * Pin a message
   * @param {number} [messageId]
   * @param {object} [extra]
   */
  pinChatMessage(messageId = this.currentMessage?.message_id, extra = {}) {
    if (!messageId) {
      throw new Error('Telegix Context: pinChatMessage() requires messageId.');
    }
    return this.telegram.pinChatMessage(this._assertChat(), messageId, extra);
  }

  /**
   * Unpin a message
   * @param {number} [messageId]
   */
  unpinChatMessage(messageId = this.currentMessage?.message_id) {
    return this.telegram.unpinChatMessage(this._assertChat(), messageId);
  }

  /**
   * Unpin all messages
   */
  unpinAllChatMessages() {
    return this.telegram.unpinAllChatMessages(this._assertChat());
  }

  /**
   * Leave current chat
   */
  leaveChat() {
    return this.telegram.leaveChat(this._assertChat());
  }

  /**
   * Get current chat info
   */
  getChat() {
    return this.telegram.getChat(this._assertChat());
  }

  /**
   * Get current chat administrators
   */
  getChatAdministrators() {
    return this.telegram.getChatAdministrators(this._assertChat());
  }

  /**
   * Get chat member info
   * @param {number} [userId]
   */
  getChatMember(userId = this.userId) {
    if (!userId) {
      throw new Error('Telegix Context: getChatMember() requires userId.');
    }
    return this.telegram.getChatMember(this._assertChat(), userId);
  }

  /**
   * Ban chat member
   * @param {number} userId
   * @param {object} [extra]
   */
  banChatMember(userId, extra = {}) {
    return this.telegram.banChatMember(this._assertChat(), userId, extra);
  }

  /**
   * Unban chat member
   * @param {number} userId
   * @param {object} [extra]
   */
  unbanChatMember(userId, extra = {}) {
    return this.telegram.unbanChatMember(this._assertChat(), userId, extra);
  }

  /**
   * Restrict chat member
   * @param {number} userId
   * @param {object} permissions
   * @param {object} [extra]
   */
  restrictChatMember(userId, permissions, extra = {}) {
    return this.telegram.restrictChatMember(this._assertChat(), userId, permissions, extra);
  }

  /**
   * Promote chat member
   * @param {number} userId
   * @param {object} rights
   */
  promoteChatMember(userId, rights = {}) {
    return this.telegram.promoteChatMember(this._assertChat(), userId, rights);
  }

  // ==========================================
  // Context Shortcuts for Latest Telegram Features
  // ==========================================

  /**
   * Send invoice (Telegram Stars XTR or standard currencies)
   * @param {string} title
   * @param {string} description
   * @param {string} payload
   * @param {string} currency - e.g. 'XTR'
   * @param {Array<{label: string, amount: number}>} prices
   * @param {object} [extra]
   */
  replyWithInvoice(title, description, payload, currency, prices, extra = {}) {
    return this.telegram.sendInvoice(
      this._assertChat(),
      title,
      description,
      payload,
      currency,
      prices,
      extra
    );
  }

  /**
   * Send paid media requiring Telegram Stars
   * @param {number} starCount
   * @param {Array<object>} media
   * @param {object} [extra]
   */
  replyWithPaidMedia(starCount, media, extra = {}) {
    return this.telegram.sendPaidMedia(this._assertChat(), starCount, media, extra);
  }

  /**
   * Send sticker
   * @param {any} sticker
   * @param {object} [extra]
   */
  replyWithSticker(sticker, extra = {}) {
    return this.telegram.sendSticker(this._assertChat(), sticker, extra);
  }

  /**
   * Send game
   * @param {string} gameShortName
   * @param {object} [extra]
   */
  replyWithGame(gameShortName, extra = {}) {
    return this.telegram.sendGame(this._assertChat(), gameShortName, extra);
  }

  /**
   * Create a topic in current forum chat
   * @param {string} name
   * @param {object} [extra]
   */
  createForumTopic(name, extra = {}) {
    return this.telegram.createForumTopic(this._assertChat(), name, extra);
  }

  /**
   * Edit forum topic in current chat
   * @param {number} [messageThreadId=this.topicId]
   * @param {object} [extra]
   */
  editForumTopic(messageThreadId = this.topicId, extra = {}) {
    if (!messageThreadId) {
      throw new Error('Telegix Context: editForumTopic() requires messageThreadId.');
    }
    return this.telegram.editForumTopic(this._assertChat(), messageThreadId, extra);
  }

  /**
   * Close forum topic in current chat
   * @param {number} [messageThreadId=this.topicId]
   */
  closeForumTopic(messageThreadId = this.topicId) {
    if (!messageThreadId) {
      throw new Error('Telegix Context: closeForumTopic() requires messageThreadId.');
    }
    return this.telegram.closeForumTopic(this._assertChat(), messageThreadId);
  }

  /**
   * Reopen forum topic in current chat
   * @param {number} [messageThreadId=this.topicId]
   */
  reopenForumTopic(messageThreadId = this.topicId) {
    if (!messageThreadId) {
      throw new Error('Telegix Context: reopenForumTopic() requires messageThreadId.');
    }
    return this.telegram.reopenForumTopic(this._assertChat(), messageThreadId);
  }

  /**
   * Delete forum topic in current chat
   * @param {number} [messageThreadId=this.topicId]
   */
  deleteForumTopic(messageThreadId = this.topicId) {
    if (!messageThreadId) {
      throw new Error('Telegix Context: deleteForumTopic() requires messageThreadId.');
    }
    return this.telegram.deleteForumTopic(this._assertChat(), messageThreadId);
  }

  /**
   * Unpin all messages in a forum topic
   * @param {number} [messageThreadId=this.topicId]
   */
  unpinAllForumTopicMessages(messageThreadId = this.topicId) {
    if (!messageThreadId) {
      throw new Error('Telegix Context: unpinAllForumTopicMessages() requires messageThreadId.');
    }
    return this.telegram.unpinAllForumTopicMessages(this._assertChat(), messageThreadId);
  }

  /**
   * Send gift to user
   * @param {string} giftId
   * @param {object} [extra]
   */
  sendGift(giftId, extra = {}) {
    if (!this.userId) {
      throw new Error('Telegix Context: sendGift() requires user context.');
    }
    return this.telegram.sendGift(this.userId, giftId, extra);
  }

  /**
   * Verify sender user
   * @param {string} [customDescription='']
   */
  verifyUser(customDescription = '') {
    if (!this.userId) {
      throw new Error('Telegix Context: verifyUser() requires user context.');
    }
    return this.telegram.verifyUser(this.userId, customDescription);
  }

  /**
   * Verify current chat
   * @param {string} [customDescription='']
   */
  verifyChat(customDescription = '') {
    return this.telegram.verifyChat(this._assertChat(), customDescription);
  }

  /**
   * Get user chat boosts
   * @param {number} [userId=this.userId]
   */
  getUserChatBoosts(userId = this.userId) {
    if (!userId) {
      throw new Error('Telegix Context: getUserChatBoosts() requires userId.');
    }
    return this.telegram.getUserChatBoosts(this._assertChat(), userId);
  }

  /**
   * Get business connection info
   */
  getBusinessConnection() {
    const connId = this.businessConnection?.id || this.businessMessage?.business_connection_id;
    if (!connId) {
      throw new Error('Telegix Context: getBusinessConnection() requires business connection context.');
    }
    return this.telegram.getBusinessConnection(connId);
  }

  /**
   * Send a rich message
   * @param {object|Array} richMessage
   * @param {object} [extra]
   */
  replyWithRichMessage(richMessage, extra = {}) {
    return this.telegram.sendRichMessage(this._assertChat(), richMessage, extra);
  }

  /**
   * Edit rich message text
   * @param {object|Array} richMessage
   * @param {object} [extra]
   */
  editRichMessageText(richMessage, extra = {}) {
    const msgId = this._assertMessage();
    return this.telegram.editRichMessageText(this._assertChat(), msgId, richMessage, extra);
  }

  /**
   * Edit rich message caption
   * @param {string} caption
   * @param {object} [extra]
   */
  editRichMessageCaption(caption, extra = {}) {
    const msgId = this._assertMessage();
    return this.telegram.editRichMessageCaption(this._assertChat(), msgId, caption, extra);
  }

  /**
   * Send an ephemeral message
   * @param {string} text
   * @param {object} ephemeralParameters
   * @param {object} [extra]
   */
  sendEphemeralMessage(text, ephemeralParameters, extra = {}) {
    return this.telegram.sendEphemeralMessage(this._assertChat(), text, ephemeralParameters, extra);
  }

  /**
   * Get user personal chat messages
   * @param {number} [userId=this.userId]
   * @param {object} [extra]
   */
  getUserPersonalChatMessages(userId = this.userId, extra = {}) {
    if (!userId) {
      throw new Error('Telegix Context: getUserPersonalChatMessages() requires userId.');
    }
    return this.telegram.getUserPersonalChatMessages(userId, extra);
  }

  /**
   * Send message draft
   * @param {string} text
   * @param {object} [extra]
   */
  sendMessageDraft(text, extra = {}) {
    return this.telegram.sendMessageDraft(this._assertChat(), text, extra);
  }

  /**
   * Send rich message draft
   * @param {object|Array} draft
   * @param {object} [extra]
   */
  sendRichMessageDraft(draft, extra = {}) {
    return this.telegram.sendRichMessageDraft(this._assertChat(), draft, extra);
  }

  /**
   * Get bot info (getMe)
   */
  getMe() {
    return this.telegram.getMe();
  }

  /**
   * Get managed bot access settings
   * @param {number} [userId=this.userId]
   */
  getManagedBotAccessSettings(userId = this.userId) {
    if (!userId) {
      throw new Error('Telegix Context: getManagedBotAccessSettings() requires userId.');
    }
    return this.telegram.getManagedBotAccessSettings(userId);
  }

  /**
   * Set managed bot access settings
   * @param {object} settings
   * @param {number} [userId=this.userId]
   */
  setManagedBotAccessSettings(settings, userId = this.userId) {
    if (!userId) {
      throw new Error('Telegix Context: setManagedBotAccessSettings() requires userId.');
    }
    return this.telegram.setManagedBotAccessSettings(userId, settings);
  }

  /**
   * Stream text response to the current chat with rate-limit protection and token buffering
   * @param {AsyncIterable<string>|Iterable<string>|ReadableStream|Array<string>} textStream
   * @param {object} [options]
   * @returns {Promise<{ message_id?: number, text: string, done: boolean }>}
   */
  streamText(textStream, options = {}) {
    return this.telegram.streamText(this._assertChat(), textStream, options);
  }

  /**
   * Stream live draft response to the current chat
   * @param {AsyncIterable<string>|Iterable<string>|ReadableStream|Array<string>} textStream
   * @param {object} [options]
   * @returns {Promise<{ message_id?: number, text: string, done: boolean }>}
   */
  streamDraft(textStream, options = {}) {
    return this.telegram.streamDraft(this._assertChat(), textStream, options);
  }

  /**
   * Reply with customizable link preview options (Bot API 7.0+)
   * @param {string} text
   * @param {LinkPreview|object} linkPreviewOptions
   * @param {object} [extra]
   */
  replyWithLinkPreview(text, linkPreviewOptions, extra = {}) {
    const previewOptions = typeof linkPreviewOptions?.toJSON === 'function'
      ? linkPreviewOptions.toJSON()
      : linkPreviewOptions;
    return this.reply(text, {
      link_preview_options: previewOptions,
      ...extra,
    });
  }

  /**
   * Reply with collapsible quote blockquote (HTML format)
   * @param {string} text - Quoted text content
   * @param {object} [extra]
   */
  replyWithCollapsibleQuote(text, extra = {}) {
    const formatted = `<blockquote expandable>${escapeHtml(text)}</blockquote>`;
    return this.reply(formatted, {
      parse_mode: 'HTML',
      ...extra,
    });
  }

  /**
   * Reply with expandable quote blockquote (alias for replyWithCollapsibleQuote)
   * @param {string} text
   * @param {object} [extra]
   */
  replyWithExpandableQuote(text, extra = {}) {
    return this.replyWithCollapsibleQuote(text, extra);
  }

  /**
   * Save a prepared inline message for the current user (Bot API 8.0+)
   * @param {object} result - InlineQueryResult object
   * @param {object} [options]
   * @returns {Promise<{ id: string, expiration_date: number }>}
   */
  savePreparedInlineMessage(result, options = {}) {
    if (!this.userId) {
      throw new Error('Telegix Context: savePreparedInlineMessage() requires user context.');
    }
    return this.telegram.savePreparedInlineMessage(this.userId, result, options);
  }

  /**
   * Validate Web App initData string with the bot token
   * @param {string} initDataStr
   * @param {object} [options]
   * @returns {object|null}
   */
  validateWebAppInitData(initDataStr, options = {}) {
    return validateWebAppInitData(initDataStr, this.telegram.token, options);
  }

  /**
   * Reply with a message containing a Telegram Mini App button
   * @param {string} text
   * @param {string} webAppUrl
   * @param {string} [buttonText='Open App']
   * @param {object} [extra]
   */
  replyWithWebApp(text, webAppUrl, buttonText = 'Open App', extra = {}) {
    return this.reply(text, {
      reply_markup: {
        inline_keyboard: [
          [{ text: buttonText, web_app: { url: webAppUrl } }],
        ],
      },
      ...extra,
    });
  }
}
