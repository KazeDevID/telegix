/**
 * Telegix - Rich Message & Draft Builder Suite
 * Modern structured rich messages, cards, drafts, and layout blocks for Telegram Bot API.
 * @module telegix/rich
 */

import { escapeHtml, html } from './format.js';
import { Markup } from './markup.js';

export class RichMessageBuilder {
  constructor(initialText = '') {
    this.blocks = [];
    this._text = initialText ? String(initialText) : '';
    this._parseMode = 'HTML';
    this._inlineKeyboard = [];
    this._draftId = null;
    this._ephemeral = null;
    this._media = null;
    this._extra = {};
  }

  /**
   * Set parse mode ('HTML', 'MarkdownV2', etc.)
   * @param {string} mode
   * @returns {this}
   */
  parseMode(mode) {
    this._parseMode = mode;
    return this;
  }

  /**
   * Set primary text
   * @param {string} text
   * @returns {this}
   */
  text(text) {
    this._text = String(text);
    return this;
  }

  /**
   * Add a header block with optional emoji
   * @param {string} text
   * @param {string} [emoji]
   * @returns {this}
   */
  header(text, emoji = '') {
    const formatted = emoji ? `${emoji} ${text}` : text;
    this.blocks.push({
      type: 'header',
      content: formatted,
      rawHtml: `<b>${escapeHtml(formatted)}</b>`,
    });
    return this;
  }

  /**
   * Add a paragraph block
   * @param {string} text
   * @returns {this}
   */
  paragraph(text) {
    this.blocks.push({
      type: 'paragraph',
      content: text,
      rawHtml: escapeHtml(text),
    });
    return this;
  }

  /**
   * Add bold text block
   * @param {string} text
   * @returns {this}
   */
  bold(text) {
    this.blocks.push({
      type: 'bold',
      content: text,
      rawHtml: `<b>${escapeHtml(text)}</b>`,
    });
    return this;
  }

  /**
   * Add italic text block
   * @param {string} text
   * @returns {this}
   */
  italic(text) {
    this.blocks.push({
      type: 'italic',
      content: text,
      rawHtml: `<i>${escapeHtml(text)}</i>`,
    });
    return this;
  }

  /**
   * Add underline text block
   * @param {string} text
   * @returns {this}
   */
  underline(text) {
    this.blocks.push({
      type: 'underline',
      content: text,
      rawHtml: `<u>${escapeHtml(text)}</u>`,
    });
    return this;
  }

  /**
   * Add strikethrough text block
   * @param {string} text
   * @returns {this}
   */
  strikethrough(text) {
    this.blocks.push({
      type: 'strikethrough',
      content: text,
      rawHtml: `<s>${escapeHtml(text)}</s>`,
    });
    return this;
  }

  /**
   * Add code block or inline code
   * @param {string} codeText
   * @param {string} [language]
   * @returns {this}
   */
  code(codeText, language = '') {
    const isMultiline = String(codeText).includes('\n') || Boolean(language);
    this.blocks.push({
      type: 'code',
      content: codeText,
      language,
      rawHtml: isMultiline
        ? html.pre(codeText, language)
        : html.code(codeText),
    });
    return this;
  }

  /**
   * Add a blockquote block
   * @param {string} text
   * @param {boolean} [expandable=false]
   * @returns {this}
   */
  quote(text, expandable = false) {
    this.blocks.push({
      type: 'quote',
      content: text,
      expandable,
      rawHtml: expandable
        ? `<blockquote expandable>${escapeHtml(text)}</blockquote>`
        : `<blockquote>${escapeHtml(text)}</blockquote>`,
    });
    return this;
  }

  /**
   * Add an expandable blockquote
   * @param {string} text
   * @returns {this}
   */
  expandableQuote(text) {
    return this.quote(text, true);
  }

  /**
   * Add spoiler block
   * @param {string} text
   * @returns {this}
   */
  spoiler(text) {
    this.blocks.push({
      type: 'spoiler',
      content: text,
      rawHtml: `<span class="tg-spoiler">${escapeHtml(text)}</span>`,
    });
    return this;
  }

  /**
   * Add formatted link
   * @param {string} text
   * @param {string} url
   * @returns {this}
   */
  link(text, url) {
    this.blocks.push({
      type: 'link',
      text,
      url,
      rawHtml: `<a href="${escapeHtml(url)}">${escapeHtml(text)}</a>`,
    });
    return this;
  }

  /**
   * Add user mention
   * @param {string} text
   * @param {number|string} userId
   * @returns {this}
   */
  mention(text, userId) {
    this.blocks.push({
      type: 'mention',
      text,
      userId,
      rawHtml: `<a href="tg://user?id=${userId}">${escapeHtml(text)}</a>`,
    });
    return this;
  }

  /**
   * Add bullet list
   * @param {Array<string>} items
   * @param {string} [bullet='•']
   * @returns {this}
   */
  list(items, bullet = '•') {
    const listItems = Array.isArray(items) ? items : [items];
    const htmlLines = listItems.map((item) => `${bullet} ${escapeHtml(item)}`).join('\n');
    this.blocks.push({
      type: 'list',
      items: listItems,
      bullet,
      rawHtml: htmlLines,
    });
    return this;
  }

  /**
   * Add numbered list
   * @param {Array<string>} items
   * @returns {this}
   */
  numberedList(items) {
    const listItems = Array.isArray(items) ? items : [items];
    const htmlLines = listItems.map((item, idx) => `<b>${idx + 1}.</b> ${escapeHtml(item)}`).join('\n');
    this.blocks.push({
      type: 'numbered_list',
      items: listItems,
      rawHtml: htmlLines,
    });
    return this;
  }

  /**
   * Add badge / stat item
   * @param {string} label
   * @param {string|number} value
   * @param {string} [icon]
   * @returns {this}
   */
  badge(label, value, icon = '') {
    const iconPrefix = icon ? `${icon} ` : '';
    this.blocks.push({
      type: 'badge',
      label,
      value,
      rawHtml: `${iconPrefix}<b>${escapeHtml(label)}:</b> <code>${escapeHtml(value)}</code>`,
    });
    return this;
  }

  /**
   * Add divider line
   * @returns {this}
   */
  divider() {
    this.blocks.push({
      type: 'divider',
      rawHtml: '───────────────',
    });
    return this;
  }

  /**
   * Attach photo or media
   * @param {string} url
   * @param {string} [caption]
   * @returns {this}
   */
  photo(url, caption = '') {
    this._media = { type: 'photo', url, caption };
    return this;
  }

  /**
   * Set ephemeral parameters (disappearing message)
   * @param {number|object} lifetimeSecondsOrParams
   * @returns {this}
   */
  ephemeral(lifetimeSecondsOrParams = 60) {
    if (typeof lifetimeSecondsOrParams === 'number') {
      this._ephemeral = { lifetime: lifetimeSecondsOrParams };
    } else {
      this._ephemeral = lifetimeSecondsOrParams;
    }
    return this;
  }

  /**
   * Set draft ID or configure as draft
   * @param {number} [draftId]
   * @returns {this}
   */
  draftId(draftId) {
    this._draftId = draftId ?? Math.floor(Math.random() * 2147483647) + 1;
    return this;
  }

  /**
   * Mark as draft with auto-generated ID
   * @returns {this}
   */
  asDraft() {
    return this.draftId();
  }

  /**
   * Add a single inline button or row of buttons
   * @param {object|Array<object>} buttons
   * @returns {this}
   */
  button(buttons) {
    if (Array.isArray(buttons)) {
      this._inlineKeyboard.push(buttons);
    } else {
      this._inlineKeyboard.push([buttons]);
    }
    return this;
  }

  /**
   * Add a row of inline buttons
   * @param {...object} buttons
   * @returns {this}
   */
  row(...buttons) {
    if (buttons.length > 0) {
      this._inlineKeyboard.push(buttons);
    }
    return this;
  }

  /**
   * Add callback query button
   * @param {string} text
   * @param {string} data
   * @returns {this}
   */
  callback(text, data) {
    return this.button(Markup.button.callback(text, data));
  }

  /**
   * Add URL button
   * @param {string} text
   * @param {string} url
   * @returns {this}
   */
  url(text, url) {
    return this.button(Markup.button.url(text, url));
  }

  /**
   * Add Bot API 10.3 disabled button
   * @param {string} text
   * @returns {this}
   */
  disabled(text) {
    return this.button(Markup.button.disabled(text));
  }

  /**
   * Add Web App button
   * @param {string} text
   * @param {string} webAppUrl
   * @returns {this}
   */
  webApp(text, webAppUrl) {
    return this.button(Markup.button.webApp(text, webAppUrl));
  }

  /**
   * Add Copy Text button
   * @param {string} text
   * @param {string} textToCopy
   * @returns {this}
   */
  copyText(text, textToCopy) {
    return this.button(Markup.button.copyText(text, textToCopy));
  }

  /**
   * Add full inline keyboard matrix
   * @param {Array<Array<object>>} matrix
   * @returns {this}
   */
  keyboard(matrix) {
    if (Array.isArray(matrix)) {
      this._inlineKeyboard = matrix;
    }
    return this;
  }

  /**
   * Set custom reply markup (e.g. from Markup helper)
   * @param {object} markup
   * @returns {this}
   */
  replyMarkup(markup) {
    this._customReplyMarkup = markup;
    return this;
  }

  /**
   * Set extra options
   * @param {object} extra
   * @returns {this}
   */
  extra(extra) {
    this._extra = { ...this._extra, ...extra };
    return this;
  }

  /**
   * Compile all rich blocks into standard HTML text for compatibility
   * @returns {string}
   */
  compileHtml() {
    const parts = [];
    if (this._text) {
      parts.push(this._text);
    }
    for (const block of this.blocks) {
      if (block.rawHtml) {
        parts.push(block.rawHtml);
      }
    }
    return parts.join('\n\n');
  }

  /**
   * Compile payload ready for Telegram Bot API
   * @returns {object}
   */
  compile() {
    const compiledText = this.compileHtml();
    const replyMarkup =
      this._customReplyMarkup ||
      (this._inlineKeyboard.length > 0
        ? { inline_keyboard: this._inlineKeyboard }
        : undefined);

    const payload = {
      text: compiledText || ' ',
      parse_mode: this._parseMode,
      blocks: this.blocks.map((b) => ({
        type: b.type,
        content: b.content,
        language: b.language,
        expandable: b.expandable,
        items: b.items,
        label: b.label,
        value: b.value,
      })),
      ...this._extra,
    };

    if (replyMarkup) {
      payload.reply_markup = replyMarkup;
    }

    if (this._ephemeral) {
      payload.ephemeral_parameters = this._ephemeral;
    }

    if (this._draftId !== null) {
      payload.draft_id = this._draftId;
    }

    return payload;
  }

  /**
   * Build plain structured Rich Message object
   * @returns {object}
   */
  build() {
    return this.compile();
  }

  /**
   * JSON serialization
   */
  toJSON() {
    return this.compile();
  }

  /**
   * Send this rich message to a chat
   * @param {import('./context.js').Context} ctx
   * @param {number|string} [chatId]
   * @param {object} [extra]
   */
  async send(ctx, chatId, extra = {}) {
    const targetChatId = chatId || ctx.chat?.id || ctx.chatId;
    if (!targetChatId) {
      throw new Error('RichMessage.send() requires a target chatId or active Context.');
    }
    const compiled = this.compile();
    return ctx.telegram.sendRichMessage(targetChatId, compiled, extra);
  }

  /**
   * Send this rich message as a draft
   * @param {import('./context.js').Context} ctx
   * @param {number|string} [chatId]
   * @param {object} [extra]
   */
  async sendDraft(ctx, chatId, extra = {}) {
    const targetChatId = chatId || ctx.chat?.id || ctx.chatId;
    if (!targetChatId) {
      throw new Error('RichMessage.sendDraft() requires a target chatId or active Context.');
    }
    const compiled = this.compile();
    return ctx.telegram.sendRichMessageDraft(targetChatId, compiled, extra);
  }

  /**
   * Edit an existing message with this rich message
   * @param {import('./context.js').Context} ctx
   * @param {number} [messageId]
   * @param {object} [extra]
   */
  async edit(ctx, messageId, extra = {}) {
    const targetChatId = ctx.chat?.id || ctx.chatId;
    const targetMessageId = messageId || ctx.message?.id || ctx.msg?.id;
    if (!targetChatId || !targetMessageId) {
      throw new Error('RichMessage.edit() requires chatId and messageId.');
    }
    const compiled = this.compile();
    return ctx.telegram.editRichMessageText(targetChatId, targetMessageId, compiled, extra);
  }

  // ==========================================
  // Static Factory Methods
  // ==========================================

  /**
   * Create a new RichMessage instance
   * @param {string} [initialText]
   * @returns {RichMessageBuilder}
   */
  static create(initialText) {
    return new RichMessageBuilder(initialText);
  }

  /**
   * Create a pre-configured interactive Card
   * @param {string} title
   * @param {string} description
   * @param {Array<object>} [buttons=[]]
   * @returns {RichMessageBuilder}
   */
  static card(title, description, buttons = []) {
    const builder = new RichMessageBuilder();
    builder.header(title);
    if (description) {
      builder.paragraph(description);
    }
    if (buttons.length > 0) {
      builder.row(...buttons);
    }
    return builder;
  }

  /**
   * Create a draft message builder
   * @param {string} text
   * @param {number} [draftId]
   * @returns {RichMessageBuilder}
   */
  static draft(text, draftId) {
    const builder = new RichMessageBuilder(text);
    return builder.draftId(draftId);
  }

  /**
   * Create an ephemeral disappearing message builder
   * @param {string} text
   * @param {number} [lifetimeSeconds=60]
   * @returns {RichMessageBuilder}
   */
  static ephemeral(text, lifetimeSeconds = 60) {
    const builder = new RichMessageBuilder(text);
    return builder.ephemeral(lifetimeSeconds);
  }
}

export const RichMessage = RichMessageBuilder;
