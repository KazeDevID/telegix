/**
 * Telegix - Message & Update Serializer Utility
 * Standardizes raw Telegram updates into a clean, feature-rich structured object.
 */

export function serializeMessage(msg) {
  if (!msg) return null;

  const serialized = {
    id: msg.message_id,
    chatId: msg.chat?.id,
    senderId: msg.from?.id,
    from: msg.from || {},
    chat: msg.chat || {},
    date: msg.date,
    text: msg.text || msg.caption || '',
    type: 'unknown',
    media: null,
    quoted: null,
    mentioned: [],
    raw: msg,
  };

  // Determine message type and extract media/content
  if (msg.text) {
    serialized.type = 'text';
  } else if (msg.photo && msg.photo.length > 0) {
    serialized.type = 'photo';
    const photo = msg.photo[msg.photo.length - 1];
    serialized.media = {
      fileId: photo.file_id,
      fileUniqueId: photo.file_unique_id,
      fileSize: photo.file_size,
      width: photo.width,
      height: photo.height,
    };
  } else if (msg.video) {
    serialized.type = 'video';
    serialized.media = {
      fileId: msg.video.file_id,
      fileUniqueId: msg.video.file_unique_id,
      fileSize: msg.video.file_size,
      duration: msg.video.duration,
      mimeType: msg.video.mime_type,
      width: msg.video.width,
      height: msg.video.height,
    };
  } else if (msg.document) {
    serialized.type = 'document';
    serialized.media = {
      fileId: msg.document.file_id,
      fileUniqueId: msg.document.file_unique_id,
      fileName: msg.document.file_name,
      fileSize: msg.document.file_size,
      mimeType: msg.document.mime_type,
    };
  } else if (msg.audio) {
    serialized.type = 'audio';
    serialized.media = {
      fileId: msg.audio.file_id,
      fileUniqueId: msg.audio.file_unique_id,
      duration: msg.audio.duration,
      performer: msg.audio.performer,
      title: msg.audio.title,
      fileSize: msg.audio.file_size,
      mimeType: msg.audio.mime_type,
    };
  } else if (msg.voice) {
    serialized.type = 'voice';
    serialized.media = {
      fileId: msg.voice.file_id,
      fileUniqueId: msg.voice.file_unique_id,
      duration: msg.voice.duration,
      fileSize: msg.voice.file_size,
      mimeType: msg.voice.mime_type,
    };
  } else if (msg.sticker) {
    serialized.type = 'sticker';
    serialized.media = {
      fileId: msg.sticker.file_id,
      fileUniqueId: msg.sticker.file_unique_id,
      emoji: msg.sticker.emoji,
      isAnimated: msg.sticker.is_animated,
      isVideo: msg.sticker.is_video,
    };
  } else if (msg.contact) {
    serialized.type = 'contact';
    serialized.contact = msg.contact;
  } else if (msg.location) {
    serialized.type = 'location';
    serialized.location = msg.location;
  } else if (msg.poll) {
    serialized.type = 'poll';
    serialized.poll = msg.poll;
  }

  // Handle Quoted / Replied Message
  if (msg.reply_to_message) {
    serialized.quoted = serializeMessage(msg.reply_to_message);
  }

  // Extract mentions from entities
  const entities = msg.entities || msg.caption_entities || [];
  for (const entity of entities) {
    if (entity.type === 'mention') {
      const mentionText = serialized.text.substring(entity.offset, entity.offset + entity.length);
      serialized.mentioned.push(mentionText);
    }
  }

  serialized.isGroup = ['group', 'supergroup'].includes(serialized.chat?.type);
  serialized.isPrivate = serialized.chat?.type === 'private';
  serialized.isChannel = serialized.chat?.type === 'channel';

  return serialized;
}

export function serializeUpdate(update) {
  const result = {
    updateId: update.update_id,
    type: 'unknown',
    message: null,
    callbackQuery: update.callback_query || null,
    inlineQuery: update.inline_query || null,
    raw: update,
  };

  const msg = update.message || update.edited_message || update.channel_post || update.edited_channel_post || update.callback_query?.message;
  if (msg) {
    result.message = serializeMessage(msg);
  }

  if (update.message) result.type = 'message';
  else if (update.callback_query) result.type = 'callback_query';
  else if (update.inline_query) result.type = 'inline_query';
  else if (update.chat_member) result.type = 'chat_member';
  else if (update.chat_boost) result.type = 'chat_boost';
  else if (update.paid_message_price_changed) result.type = 'paid_message_price_changed';

  return result;
}
