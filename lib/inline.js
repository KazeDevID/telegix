/**
 * Telegix - Inline Query Pagination & Result Builders
 */

export class InlineQueryResultBuilder {
  static article(id, title, messageText, options = {}) {
    return {
      type: 'article',
      id: String(id),
      title,
      input_message_content: {
        message_text: messageText,
        parse_mode: options.parseMode || 'HTML',
        ...options.inputMessageContent,
      },
      description: options.description,
      thumb_url: options.thumbUrl,
      thumb_width: options.thumbWidth,
      thumb_height: options.thumbHeight,
      reply_markup: options.replyMarkup,
    };
  }

  static photo(id, photoUrl, options = {}) {
    return {
      type: 'photo',
      id: String(id),
      photo_url: photoUrl,
      thumb_url: options.thumbUrl || photoUrl,
      caption: options.caption,
      parse_mode: options.parseMode || 'HTML',
      caption_entities: options.captionEntities,
      description: options.description,
      title: options.title,
      reply_markup: options.replyMarkup,
      photo_width: options.photoWidth,
      photo_height: options.photoHeight,
    };
  }

  static document(id, documentUrl, title, options = {}) {
    return {
      type: 'document',
      id: String(id),
      title,
      document_url: documentUrl,
      mime_type: options.mimeType || 'application/pdf',
      caption: options.caption,
      description: options.description,
      reply_markup: options.replyMarkup,
    };
  }
}

/**
 * Helper to paginate and answer inline queries easily
 * @param {object} ctx - Context
 * @param {Array} items - All items to paginate
 * @param {Function} formatterFn - Function(item, index) returning InlineQueryResult
 * @param {object} [options] - { limit: 10, cacheTime: 300, isPersonal: true }
 */
export async function paginateInlineQuery(ctx, items, formatterFn, options = {}) {
  const limit = options.limit || 10;
  const cacheTime = options.cacheTime !== undefined ? options.cacheTime : 300;
  const isPersonal = options.isPersonal !== undefined ? options.isPersonal : true;

  const offset = parseInt(ctx.inlineQuery?.offset || '0', 10) || 0;
  const pageItems = items.slice(offset, offset + limit);

  const results = pageItems.map((item, index) => formatterFn(item, offset + index));
  const nextOffset = offset + limit < items.length ? String(offset + limit) : '';

  return ctx.answerInlineQuery(results, {
    next_offset: nextOffset,
    cache_time: cacheTime,
    is_personal: isPersonal,
    ...options.extra,
  });
}
