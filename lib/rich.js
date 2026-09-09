/**
 * Telegix - Rich Message & Draft Builder Suite (Telegram Bot API 10.3+)
 * Modern structured rich messages, cards, drafts, tables, buttons, and layout blocks.
 * @module telegix/rich
 */

import { escapeHtml, html } from './format.js';
import { Markup } from './markup.js';
import { Table, InputRichBlockTable, RichBlockTable } from './table.js';
import { EphemeralMessageParameters } from './ephemeral.js';

export { Table, InputRichBlockTable, RichBlockTable } from './table.js';
export { EphemeralMessageParameters } from './ephemeral.js';

/**
 * Telegram Bot API 10.3 RichMessageButton class
 * Represents a button in a RichMessage
 */
export class RichMessageButton {
  /**
   * @param {string} text
   * @param {object} [options]
   */
  constructor(text, options = {}) {
    this.text = String(text);
    this.options = options;
  }

  /**
   * Convert to Telegram button object
   */
  toJSON() {
    return {
      text: this.text,
      ...this.options,
    };
  }

  static url(text, url) {
    return new RichMessageButton(text, { url });
  }

  static callback(text, data) {
    return new RichMessageButton(text, { callback_data: String(data) });
  }

  static copyText(text, copyText) {
    return new RichMessageButton(text, { copy_text: { text: String(copyText) } });
  }

  static webApp(text, url) {
    return new RichMessageButton(text, { web_app: { url } });
  }

  static primary(text, dataOrUrl, options = {}) {
    return new RichMessageButton(text, {
      style: 'primary',
      ...RichMessageButton._resolveDataOrUrl(dataOrUrl),
      ...options,
    });
  }

  static danger(text, dataOrUrl, options = {}) {
    return new RichMessageButton(text, {
      style: 'danger',
      ...RichMessageButton._resolveDataOrUrl(dataOrUrl),
      ...options,
    });
  }

  static success(text, dataOrUrl, options = {}) {
    return new RichMessageButton(text, {
      style: 'success',
      ...RichMessageButton._resolveDataOrUrl(dataOrUrl),
      ...options,
    });
  }

  static colored(text, style, dataOrUrl, options = {}) {
    return new RichMessageButton(text, {
      style,
      ...RichMessageButton._resolveDataOrUrl(dataOrUrl),
      ...options,
    });
  }

  static disabled(text) {
    return new RichMessageButton(text, { disabled: true });
  }

  static document(text, documentId) {
    return new RichMessageButton(text, { url: `tg://document?id=${documentId}` });
  }

  static _resolveDataOrUrl(dataOrUrl) {
    if (!dataOrUrl) return {};
    if (typeof dataOrUrl === 'string') {
      if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
        return { url: dataOrUrl };
      }
      return { callback_data: dataOrUrl };
    }
    if (typeof dataOrUrl === 'number') {
      return { callback_data: String(dataOrUrl) };
    }
    if (typeof dataOrUrl === 'object') {
      return dataOrUrl;
    }
    return {};
  }
}

/**
 * Telegram Bot API 10.3 RichTextButton class
 * Represents an inline text button / link inside rich text or blocks
 */
export class RichTextButton {
  /**
   * @param {string} text
   * @param {object} [options]
   */
  constructor(text, options = {}) {
    this.text = String(text);
    this.options = options;
  }

  toJSON() {
    return {
      type: 'rich_text_button',
      text: this.text,
      ...this.options,
    };
  }

  toHtml() {
    if (this.options.url) {
      return `<a href="${escapeHtml(this.options.url)}">${escapeHtml(this.text)}</a>`;
    }
    if (this.options.callback_data) {
      return `<b>[${escapeHtml(this.text)}]</b>`;
    }
    return escapeHtml(this.text);
  }

  static url(text, url) {
    return new RichTextButton(text, { url });
  }

  static callback(text, data) {
    return new RichTextButton(text, { callback_data: String(data) });
  }

  static document(text, documentId) {
    return new RichTextButton(text, { url: `tg://document?id=${documentId}` });
  }

  static user(text, userId) {
    return new RichTextButton(text, { url: `tg://user?id=${userId}` });
  }
}

/**
 * Telegram Bot API 10.3 InputRichBlockButtons class
 * Represents a block containing button rows in a rich message
 */
export class InputRichBlockButtons {
  /**
   * @param {Array<Array<object>>|Array<object>} [buttons=[]]
   */
  constructor(buttons = []) {
    this.type = 'buttons';
    this.buttons = Array.isArray(buttons) ? buttons : [buttons];
  }

  addRow(...buttons) {
    this.buttons.push(buttons.flat());
    return this;
  }

  addButton(button) {
    if (this.buttons.length === 0) {
      this.buttons.push([button]);
    } else {
      this.buttons[this.buttons.length - 1].push(button);
    }
    return this;
  }

  toJSON() {
    return {
      type: 'buttons',
      buttons: this.buttons.map((row) =>
        Array.isArray(row)
          ? row.map((btn) => (typeof btn?.toJSON === 'function' ? btn.toJSON() : btn))
          : typeof row?.toJSON === 'function'
          ? row.toJSON()
          : row
      ),
    };
  }

  toHtml() {
    const lines = [];
    for (const row of this.buttons) {
      if (Array.isArray(row)) {
        const rowTexts = row.map((btn) => {
          const text = btn.text || String(btn);
          if (btn.url) {
            return `<a href="${escapeHtml(btn.url)}">${escapeHtml(text)}</a>`;
          }
          return `[${escapeHtml(text)}]`;
        });
        lines.push(rowTexts.join('  '));
      }
    }
    return lines.join('\n');
  }

  static create(buttons) {
    return new InputRichBlockButtons(buttons);
  }
}

export const RichBlockButtons = InputRichBlockButtons;

/**
 * Telegram Bot API 10.3 InputRichBlockExpandableBlockQuotation class
 * Represents a block quotation, which can be expanded or collapsed back
 */
export class InputRichBlockExpandableBlockQuotation {
  /**
   * @param {string} text
   * @param {object} [options]
   */
  constructor(text, options = {}) {
    this.type = 'expandable_block_quotation';
    this.text = String(text || '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'expandable_block_quotation',
      text: this.text,
      ...this.options,
    };
  }

  toHtml() {
    return `<blockquote expandable>${escapeHtml(this.text)}</blockquote>`;
  }

  static create(text, options) {
    return new InputRichBlockExpandableBlockQuotation(text, options);
  }
}

export const RichBlockExpandableBlockQuotation = InputRichBlockExpandableBlockQuotation;

/**
 * Telegram Bot API 10.3 InputRichBlockDocument class
 * Represents a block containing a file or document link
 */
export class InputRichBlockDocument {
  /**
   * @param {string|object} document
   * @param {string} [caption='']
   * @param {object} [options={}]
   */
  constructor(document, caption = '', options = {}) {
    this.type = 'document';
    this.document = document;
    this.caption = String(caption || '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'document',
      document: this.document,
      caption: this.caption,
      ...this.options,
    };
  }

  toHtml() {
    if (typeof this.document === 'string' && this.document.startsWith('tg://')) {
      return `<a href="${escapeHtml(this.document)}">📄 ${escapeHtml(this.caption || 'Document')}</a>`;
    }
    return `📄 <b>Document:</b> ${escapeHtml(this.caption || String(this.document))}`;
  }

  static create(document, caption, options) {
    return new InputRichBlockDocument(document, caption, options);
  }
}

export const RichBlockDocument = InputRichBlockDocument;

/**
 * Telegram Bot API 10.2 InputRichBlockParagraph class
 * Represents a standard paragraph of rich text
 */
export class InputRichBlockParagraph {
  /**
   * @param {string} text
   * @param {object} [options={}]
   */
  constructor(text, options = {}) {
    this.type = 'paragraph';
    this.text = String(text ?? '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'paragraph',
      text: this.text,
      ...this.options,
    };
  }

  toHtml() {
    return `<p>${escapeHtml(this.text)}</p>`;
  }

  static create(text, options) {
    return new InputRichBlockParagraph(text, options);
  }
}
export const RichBlockParagraph = InputRichBlockParagraph;

/**
 * Telegram Bot API 10.2 InputRichBlockSectionHeading class
 * Represents a section heading with level 1-6
 */
export class InputRichBlockSectionHeading {
  /**
   * @param {string} text
   * @param {number} [level=2]
   * @param {object} [options={}]
   */
  constructor(text, level = 2, options = {}) {
    this.type = 'section_heading';
    this.text = String(text ?? '');
    this.level = Math.max(1, Math.min(6, Number(level) || 2));
    this.options = options;
  }

  toJSON() {
    return {
      type: 'section_heading',
      text: this.text,
      level: this.level,
      ...this.options,
    };
  }

  toHtml() {
    return `<b>${escapeHtml(this.text)}</b>`;
  }

  static create(text, level, options) {
    return new InputRichBlockSectionHeading(text, level, options);
  }
}
export const RichBlockSectionHeading = InputRichBlockSectionHeading;

/**
 * Telegram Bot API 10.2 InputRichBlockPreformatted class
 * Represents preformatted code or text with optional programming language syntax
 */
export class InputRichBlockPreformatted {
  /**
   * @param {string} text
   * @param {string} [language='']
   * @param {object} [options={}]
   */
  constructor(text, language = '', options = {}) {
    this.type = 'preformatted';
    this.text = String(text ?? '');
    this.language = String(language || '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'preformatted',
      text: this.text,
      ...(this.language ? { language: this.language } : {}),
      ...this.options,
    };
  }

  toHtml() {
    if (this.language) {
      return `<pre><code class="language-${escapeHtml(this.language)}">${escapeHtml(this.text)}</code></pre>`;
    }
    return `<pre>${escapeHtml(this.text)}</pre>`;
  }

  static create(text, language, options) {
    return new InputRichBlockPreformatted(text, language, options);
  }
}
export const RichBlockPreformatted = InputRichBlockPreformatted;

/**
 * Telegram Bot API 10.2 InputRichBlockFooter class
 * Represents small footer or timestamp text
 */
export class InputRichBlockFooter {
  /**
   * @param {string} text
   * @param {object} [options={}]
   */
  constructor(text, options = {}) {
    this.type = 'footer';
    this.text = String(text ?? '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'footer',
      text: this.text,
      ...this.options,
    };
  }

  toHtml() {
    return `<i>${escapeHtml(this.text)}</i>`;
  }

  static create(text, options) {
    return new InputRichBlockFooter(text, options);
  }
}
export const RichBlockFooter = InputRichBlockFooter;

/**
 * Telegram Bot API 10.2 InputRichBlockDivider class
 * Represents a horizontal divider / separator
 */
export class InputRichBlockDivider {
  /**
   * @param {object} [options={}]
   */
  constructor(options = {}) {
    this.type = 'divider';
    this.options = options;
  }

  toJSON() {
    return {
      type: 'divider',
      ...this.options,
    };
  }

  toHtml() {
    return '──────────────────────────────';
  }

  static create(options) {
    return new InputRichBlockDivider(options);
  }
}
export const RichBlockDivider = InputRichBlockDivider;

/**
 * Telegram Bot API 10.2 InputRichBlockMathematicalExpression class
 * Represents LaTeX or mathematical expression
 */
export class InputRichBlockMathematicalExpression {
  /**
   * @param {string} expression
   * @param {object} [options={}]
   */
  constructor(expression, options = {}) {
    this.type = 'mathematical_expression';
    this.expression = String(expression ?? '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'mathematical_expression',
      expression: this.expression,
      ...this.options,
    };
  }

  toHtml() {
    return `<tg-math>${escapeHtml(this.expression)}</tg-math>`;
  }

  static create(expression, options) {
    return new InputRichBlockMathematicalExpression(expression, options);
  }
}
export const RichBlockMathematicalExpression = InputRichBlockMathematicalExpression;
export const RichBlockMath = InputRichBlockMathematicalExpression;

/**
 * Telegram Bot API 10.2 InputRichBlockAnchor class
 * Represents an in-message anchor point for internal linking
 */
export class InputRichBlockAnchor {
  /**
   * @param {string} name
   * @param {string} [text='']
   * @param {object} [options={}]
   */
  constructor(name, text = '', options = {}) {
    this.type = 'anchor';
    this.name = String(name ?? '');
    this.text = String(text ?? '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'anchor',
      name: this.name,
      ...(this.text ? { text: this.text } : {}),
      ...this.options,
    };
  }

  toHtml() {
    return `<a name="${escapeHtml(this.name)}">${escapeHtml(this.text)}</a>`;
  }

  static create(name, text, options) {
    return new InputRichBlockAnchor(name, text, options);
  }
}
export const RichBlockAnchor = InputRichBlockAnchor;

/**
 * Telegram Bot API 10.2 InputRichBlockListItem class
 * Represents a single item inside an InputRichBlockList (bullet, numbered, or checklist)
 */
export class InputRichBlockListItem {
  /**
   * @param {string} text
   * @param {object} [options={}]
   * @param {boolean|null} [options.is_checked] - True for checked checkbox, false for unchecked, null for bullet
   * @param {number|null} [options.number] - Numeric index for numbered lists
   * @param {string} [options.type] - Item type override
   */
  constructor(text, options = {}) {
    this.text = String(text ?? '');
    this.is_checked = options.is_checked ?? options.isChecked ?? null;
    this.number = options.number !== undefined && options.number !== null ? Number(options.number) : null;
    this.type = options.type ?? null;
    this.options = options;
  }

  /**
   * Check this item (for checklists)
   * @param {boolean} [checked=true]
   * @returns {this}
   */
  check(checked = true) {
    this.is_checked = Boolean(checked);
    return this;
  }

  /**
   * Uncheck this item
   * @returns {this}
   */
  uncheck() {
    this.is_checked = false;
    return this;
  }

  toJSON() {
    const res = {
      text: this.text,
    };
    if (this.is_checked !== null && this.is_checked !== undefined) {
      res.is_checked = Boolean(this.is_checked);
    }
    if (this.number !== null && this.number !== undefined) {
      res.number = Number(this.number);
    }
    if (this.type) {
      res.type = this.type;
    }
    return res;
  }

  toHtml() {
    if (this.is_checked === true) {
      return `☑️ ${escapeHtml(this.text)}`;
    }
    if (this.is_checked === false) {
      return `◻️ ${escapeHtml(this.text)}`;
    }
    if (this.number !== null) {
      return `${this.number}. ${escapeHtml(this.text)}`;
    }
    return `• ${escapeHtml(this.text)}`;
  }

  static checked(text, options = {}) {
    return new InputRichBlockListItem(text, { is_checked: true, ...options });
  }

  static unchecked(text, options = {}) {
    return new InputRichBlockListItem(text, { is_checked: false, ...options });
  }

  static bullet(text, options = {}) {
    return new InputRichBlockListItem(text, options);
  }

  static numbered(number, text, options = {}) {
    return new InputRichBlockListItem(text, { number, ...options });
  }
}
export const RichBlockListItem = InputRichBlockListItem;

/**
 * Telegram Bot API 10.2 InputRichBlockList class
 * Represents ordered, unordered, or checklist collections
 */
export class InputRichBlockList {
  /**
   * @param {Array<InputRichBlockListItem|string|object>} [items=[]]
   * @param {object} [options={}]
   * @param {boolean} [options.ordered=false]
   */
  constructor(items = [], options = {}) {
    this.type = 'list';
    this.ordered = Boolean(options.ordered);
    this.options = options;
    this.items = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item instanceof InputRichBlockListItem) {
        this.items.push(item);
      } else if (typeof item === 'object' && item !== null) {
        const itemNumber = this.ordered && item.number === undefined ? i + 1 : item.number;
        this.items.push(new InputRichBlockListItem(item.text ?? item.title ?? '', { number: itemNumber, ...item }));
      } else {
        const itemNumber = this.ordered ? i + 1 : null;
        this.items.push(new InputRichBlockListItem(String(item), { number: itemNumber }));
      }
    }
  }

  /**
   * Add an item to the list
   * @param {InputRichBlockListItem|string|object} item
   * @returns {this}
   */
  addItem(item) {
    if (item instanceof InputRichBlockListItem) {
      this.items.push(item);
    } else if (typeof item === 'object' && item !== null) {
      const itemNumber = this.ordered && item.number === undefined ? this.items.length + 1 : item.number;
      this.items.push(new InputRichBlockListItem(item.text ?? item.title ?? '', { number: itemNumber, ...item }));
    } else {
      const itemNumber = this.ordered ? this.items.length + 1 : null;
      this.items.push(new InputRichBlockListItem(String(item), { number: itemNumber }));
    }
    return this;
  }

  toJSON() {
    return {
      type: 'list',
      items: this.items.map((it) => (typeof it.toJSON === 'function' ? it.toJSON() : it)),
      ...(this.ordered ? { ordered: true } : {}),
      ...this.options,
    };
  }

  toHtml() {
    return this.items.map((it) => (typeof it.toHtml === 'function' ? it.toHtml() : `• ${escapeHtml(it.text || String(it))}`)).join('\n');
  }

  static create(items, options) {
    return new InputRichBlockList(items, options);
  }

  static ordered(items, options = {}) {
    return new InputRichBlockList(items, { ordered: true, ...options });
  }

  static checklist(items, options = {}) {
    const listItems = items.map((it) => {
      if (typeof it === 'object' && it !== null && it.is_checked !== undefined) {
        return it;
      }
      return { text: String(it), is_checked: false };
    });
    return new InputRichBlockList(listItems, options);
  }
}
export const RichBlockList = InputRichBlockList;

/**
 * Telegram Bot API 10.2 InputRichBlockChecklist
 */
export class InputRichBlockChecklist extends InputRichBlockList {
  constructor(items = [], options = {}) {
    super(items, { checklist: true, ...options });
    this.type = 'checklist';
  }

  toJSON() {
    return {
      type: 'checklist',
      items: this.items.map((it) => (typeof it.toJSON === 'function' ? it.toJSON() : it)),
      ...this.options,
    };
  }

  toHtml() {
    return this.items.map((it) => {
      const isChecked = typeof it === 'object' && it !== null && (it.is_checked || it.checked);
      const mark = isChecked ? '☑️' : '◻️';
      const text = typeof it === 'object' && it !== null ? (it.text || String(it)) : String(it);
      return `${mark} ${escapeHtml(text)}`;
    }).join('\n');
  }

  static create(items, options) {
    return new InputRichBlockChecklist(items, options);
  }
}
export const RichBlockChecklist = InputRichBlockChecklist;

/**
 * Telegram Bot API 10.2 InputRichBlockBlockQuotation class
 * Standard block quote block
 */
export class InputRichBlockBlockQuotation {
  /**
   * @param {string} text
   * @param {object} [options={}]
   */
  constructor(text, options = {}) {
    this.type = 'block_quotation';
    this.text = String(text ?? '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'block_quotation',
      text: this.text,
      ...this.options,
    };
  }

  toHtml() {
    return `<blockquote>${escapeHtml(this.text)}</blockquote>`;
  }

  static create(text, options) {
    return new InputRichBlockBlockQuotation(text, options);
  }
}
export const RichBlockBlockQuotation = InputRichBlockBlockQuotation;

/**
 * Telegram Bot API 10.2 InputRichBlockPullQuotation class
 * Pull quote with center emphasis
 */
export class InputRichBlockPullQuotation {
  /**
   * @param {string} text
   * @param {object} [options={}]
   */
  constructor(text, options = {}) {
    this.type = 'pull_quotation';
    this.text = String(text ?? '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'pull_quotation',
      text: this.text,
      ...this.options,
    };
  }

  toHtml() {
    return `<tg-pullquote>${escapeHtml(this.text)}</tg-pullquote>`;
  }

  static create(text, options) {
    return new InputRichBlockPullQuotation(text, options);
  }
}
export const RichBlockPullQuotation = InputRichBlockPullQuotation;
export const RichBlockPullQuote = InputRichBlockPullQuotation;

/**
 * Telegram Bot API 10.2 InputRichBlockCollage class
 * Represents a photo/media collage block
 */
export class InputRichBlockCollage {
  /**
   * @param {Array<object|string>} [media=[]]
   * @param {object} [options={}]
   */
  constructor(media = [], options = {}) {
    this.type = 'collage';
    this.media = Array.isArray(media) ? media : [media];
    this.options = options;
  }

  toJSON() {
    return {
      type: 'collage',
      media: this.media.map((m) => (typeof m?.toJSON === 'function' ? m.toJSON() : m)),
      ...this.options,
    };
  }

  toHtml() {
    return `🖼️ [Collage: ${this.media.length} media items]`;
  }

  static create(media, options) {
    return new InputRichBlockCollage(media, options);
  }
}
export const RichBlockCollage = InputRichBlockCollage;

/**
 * Telegram Bot API 10.2 InputRichBlockSlideshow class
 * Represents a slideshow media block
 */
export class InputRichBlockSlideshow {
  /**
   * @param {Array<object|string>} [media=[]]
   * @param {object} [options={}]
   */
  constructor(media = [], options = {}) {
    this.type = 'slideshow';
    this.media = Array.isArray(media) ? media : [media];
    this.options = options;
  }

  toJSON() {
    return {
      type: 'slideshow',
      media: this.media.map((m) => (typeof m?.toJSON === 'function' ? m.toJSON() : m)),
      ...this.options,
    };
  }

  toHtml() {
    return `🎞️ [Slideshow: ${this.media.length} items]`;
  }

  static create(media, options) {
    return new InputRichBlockSlideshow(media, options);
  }
}
export const RichBlockSlideshow = InputRichBlockSlideshow;

/**
 * Telegram Bot API 10.2 InputRichBlockDetails class
 * Represents a collapsible disclosure widget (summary and content)
 */
export class InputRichBlockDetails {
  /**
   * @param {string} title
   * @param {string|Array<object>} [content='']
   * @param {object} [options={}]
   */
  constructor(title, content = '', options = {}) {
    this.type = 'details';
    this.title = String(title ?? '');
    this.content = content;
    this.is_open = Boolean(options.is_open ?? options.isOpen);
    this.options = options;
  }

  toJSON() {
    return {
      type: 'details',
      title: this.title,
      content: typeof this.content === 'object' && this.content !== null && typeof this.content.toJSON === 'function'
        ? this.content.toJSON()
        : this.content,
      is_open: this.is_open,
      ...this.options,
    };
  }

  toHtml() {
    const body = typeof this.content === 'string'
      ? escapeHtml(this.content)
      : Array.isArray(this.content)
      ? this.content.map((c) => (typeof c?.toHtml === 'function' ? c.toHtml() : String(c))).join('\n')
      : '';
    return `<details${this.is_open ? ' open' : ''}><summary>${escapeHtml(this.title)}</summary>${body}</details>`;
  }

  static create(title, content, options) {
    return new InputRichBlockDetails(title, content, options);
  }
}
export const RichBlockDetails = InputRichBlockDetails;

/**
 * Telegram Bot API 10.2 InputRichBlockMap class
 * Represents an embedded geographical location card with coordinates
 */
export class InputRichBlockMap {
  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {object} [options={}]
   */
  constructor(latitude, longitude, options = {}) {
    this.type = 'map';
    this.latitude = Number(latitude);
    this.longitude = Number(longitude);
    this.title = options.title || '';
    this.options = options;
  }

  toJSON() {
    return {
      type: 'map',
      latitude: this.latitude,
      longitude: this.longitude,
      ...(this.title ? { title: this.title } : {}),
      ...this.options,
    };
  }

  toHtml() {
    return `📍 <b>${escapeHtml(this.title || 'Location')}</b> (${this.latitude.toFixed(4)}, ${this.longitude.toFixed(4)})`;
  }

  static create(latitude, longitude, options) {
    return new InputRichBlockMap(latitude, longitude, options);
  }
}
export const RichBlockMap = InputRichBlockMap;

/**
 * Telegram Bot API 10.2 InputRichBlockAnimation class
 * Represents an animation or GIF block
 */
export class InputRichBlockAnimation {
  /**
   * @param {string} animation
   * @param {object} [options={}]
   */
  constructor(animation, options = {}) {
    this.type = 'animation';
    this.animation = animation;
    this.caption = options.caption || '';
    this.options = options;
  }

  toJSON() {
    return {
      type: 'animation',
      animation: this.animation,
      ...(this.caption ? { caption: this.caption } : {}),
      ...this.options,
    };
  }

  toHtml() {
    return `🎬 <b>[Animation]</b> ${escapeHtml(this.caption || '')}`;
  }

  static create(animation, options) {
    return new InputRichBlockAnimation(animation, options);
  }
}
export const RichBlockAnimation = InputRichBlockAnimation;

/**
 * Telegram Bot API 10.2 InputRichBlockAudio class
 * Represents an audio track block
 */
export class InputRichBlockAudio {
  /**
   * @param {string} audio
   * @param {object} [options={}]
   */
  constructor(audio, options = {}) {
    this.type = 'audio';
    this.audio = audio;
    this.title = options.title || '';
    this.performer = options.performer || '';
    this.duration = options.duration;
    this.options = options;
  }

  toJSON() {
    return {
      type: 'audio',
      audio: this.audio,
      ...(this.title ? { title: this.title } : {}),
      ...(this.performer ? { performer: this.performer } : {}),
      ...(this.duration !== undefined ? { duration: Number(this.duration) } : {}),
      ...this.options,
    };
  }

  toHtml() {
    const titleStr = this.performer ? `${this.performer} - ${this.title}` : (this.title || 'Audio');
    return `🎵 <b>${escapeHtml(titleStr)}</b>`;
  }

  static create(audio, options) {
    return new InputRichBlockAudio(audio, options);
  }
}
export const RichBlockAudio = InputRichBlockAudio;

/**
 * Telegram Bot API 10.2 InputRichBlockPhoto class
 * Represents a photo block
 */
export class InputRichBlockPhoto {
  /**
   * @param {string} photo
   * @param {string} [caption='']
   * @param {object} [options={}]
   */
  constructor(photo, caption = '', options = {}) {
    this.type = 'photo';
    this.photo = photo;
    this.caption = String(caption || options.caption || '');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'photo',
      photo: this.photo,
      ...(this.caption ? { caption: this.caption } : {}),
      ...this.options,
    };
  }

  toHtml() {
    return `🖼️ <b>[Photo]</b> ${escapeHtml(this.caption || '')}`;
  }

  static create(photo, caption, options) {
    return new InputRichBlockPhoto(photo, caption, options);
  }
}
export const RichBlockPhoto = InputRichBlockPhoto;

/**
 * Telegram Bot API 10.2 InputRichBlockVideo class
 * Represents a video block
 */
export class InputRichBlockVideo {
  /**
   * @param {string} video
   * @param {object} [options={}]
   */
  constructor(video, options = {}) {
    this.type = 'video';
    this.video = video;
    this.caption = options.caption || '';
    this.duration = options.duration;
    this.options = options;
  }

  toJSON() {
    return {
      type: 'video',
      video: this.video,
      ...(this.caption ? { caption: this.caption } : {}),
      ...(this.duration !== undefined ? { duration: Number(this.duration) } : {}),
      ...this.options,
    };
  }

  toHtml() {
    return `🎥 <b>[Video]</b> ${escapeHtml(this.caption || '')}`;
  }

  static create(video, options) {
    return new InputRichBlockVideo(video, options);
  }
}
export const RichBlockVideo = InputRichBlockVideo;

/**
 * Telegram Bot API 10.2 InputRichBlockVoiceNote class
 * Represents a voice note block
 */
export class InputRichBlockVoiceNote {
  /**
   * @param {string} voiceNote
   * @param {object} [options={}]
   */
  constructor(voiceNote, options = {}) {
    this.type = 'voice_note';
    this.voice_note = voiceNote;
    this.caption = options.caption || '';
    this.duration = options.duration;
    this.options = options;
  }

  toJSON() {
    return {
      type: 'voice_note',
      voice_note: this.voice_note,
      ...(this.caption ? { caption: this.caption } : {}),
      ...(this.duration !== undefined ? { duration: Number(this.duration) } : {}),
      ...this.options,
    };
  }

  toHtml() {
    return `🎤 <b>[Voice Note]</b> ${escapeHtml(this.caption || '')}`;
  }

  static create(voiceNote, options) {
    return new InputRichBlockVoiceNote(voiceNote, options);
  }
}
export const RichBlockVoiceNote = InputRichBlockVoiceNote;

/**
 * Telegram Bot API 10.2 InputRichBlockThinking class
 * Represents an AI thinking / processing indicator block
 */
export class InputRichBlockThinking {
  /**
   * @param {string} [text='Thinking...']
   * @param {object} [options={}]
   */
  constructor(text = 'Thinking...', options = {}) {
    this.type = 'thinking';
    this.text = String(text ?? 'Thinking...');
    this.options = options;
  }

  toJSON() {
    return {
      type: 'thinking',
      text: this.text,
      ...this.options,
    };
  }

  toHtml() {
    return `<tg-thinking>${escapeHtml(this.text)}</tg-thinking>`;
  }

  static create(text, options) {
    return new InputRichBlockThinking(text, options);
  }
}
export const RichBlockThinking = InputRichBlockThinking;

/**
 * Telegram Bot API 10.2 InputRichMessageMedia class
 * Represents a media attachment in rich messages
 */
export class InputRichMessageMedia {
  /**
   * @param {string} media
   * @param {string} [type='photo']
   * @param {object} [options={}]
   */
  constructor(media, type = 'photo', options = {}) {
    if (typeof media === 'object' && media !== null) {
      this.media = media.media;
      this.type = media.type || type || 'photo';
      this.caption = media.caption || options.caption || '';
      this.parse_mode = media.parse_mode || media.parseMode || options.parse_mode;
      this.show_caption_above_media = media.show_caption_above_media ?? media.showCaptionAboveMedia ?? options.show_caption_above_media;
      this.has_spoiler = media.has_spoiler ?? media.hasSpoiler ?? options.has_spoiler;
      this.width = media.width ?? options.width;
      this.height = media.height ?? options.height;
      this.duration = media.duration ?? options.duration;
      this.performer = media.performer ?? options.performer;
      this.title = media.title ?? options.title;
      this.thumbnail = media.thumbnail ?? options.thumbnail;
      this.options = { ...options, ...media };
    } else {
      this.media = media;
      this.type = type;
      this.caption = options.caption || '';
      this.parse_mode = options.parse_mode || options.parseMode;
      this.show_caption_above_media = options.show_caption_above_media ?? options.showCaptionAboveMedia;
      this.has_spoiler = options.has_spoiler ?? options.hasSpoiler;
      this.width = options.width;
      this.height = options.height;
      this.duration = options.duration;
      this.performer = options.performer;
      this.title = options.title;
      this.thumbnail = options.thumbnail;
      this.options = options;
    }
  }

  toJSON() {
    const res = {
      type: this.type,
      media: this.media,
    };
    if (this.caption) res.caption = this.caption;
    if (this.parse_mode) res.parse_mode = this.parse_mode;
    if (this.show_caption_above_media !== undefined) res.show_caption_above_media = Boolean(this.show_caption_above_media);
    if (this.has_spoiler !== undefined) res.has_spoiler = Boolean(this.has_spoiler);
    if (this.width !== undefined) res.width = Number(this.width);
    if (this.height !== undefined) res.height = Number(this.height);
    if (this.duration !== undefined) res.duration = Number(this.duration);
    if (this.performer) res.performer = this.performer;
    if (this.title) res.title = this.title;
    if (this.thumbnail) res.thumbnail = this.thumbnail;
    return res;
  }

  static photo(media, caption = '', options = {}) {
    return new InputRichMessageMedia(media, 'photo', { caption, ...options });
  }

  static video(media, caption = '', options = {}) {
    return new InputRichMessageMedia(media, 'video', { caption, ...options });
  }

  static animation(media, caption = '', options = {}) {
    return new InputRichMessageMedia(media, 'animation', { caption, ...options });
  }

  static audio(media, caption = '', options = {}) {
    return new InputRichMessageMedia(media, 'audio', { caption, ...options });
  }

  static document(media, caption = '', options = {}) {
    return new InputRichMessageMedia(media, 'document', { caption, ...options });
  }

  static voiceNote(media, caption = '', options = {}) {
    return new InputRichMessageMedia(media, 'voice_note', { caption, ...options });
  }
}
export const RichMessageMedia = InputRichMessageMedia;

/**
 * Telegram Bot API 10.2 InputMediaVoiceNote class
 * Represents a voice note to be sent in media methods
 */
export class InputMediaVoiceNote {
  /**
   * @param {string} media
   * @param {object} [options={}]
   */
  constructor(media, options = {}) {
    this.type = 'voice';
    this.media = media;
    this.caption = options.caption || '';
    this.parse_mode = options.parse_mode || options.parseMode;
    this.duration = options.duration;
    this.options = options;
  }

  toJSON() {
    const res = {
      type: this.type,
      media: this.media,
    };
    if (this.caption) res.caption = this.caption;
    if (this.parse_mode) res.parse_mode = this.parse_mode;
    if (this.duration !== undefined) res.duration = Number(this.duration);
    return res;
  }

  static create(media, options = {}) {
    return new InputMediaVoiceNote(media, options);
  }
}
export const MediaVoiceNote = InputMediaVoiceNote;

/**
 * Telegram Bot API 10.2 InputRichMessage class
 * Root container class for structured rich messages
 */
export class InputRichMessage {
  /**
   * @param {object|string} [options={}]
   */
  constructor(options = {}) {
    if (typeof options === 'string') {
      this.text = options;
      this.blocks = [];
      this.media = [];
      this.is_rtl = false;
    } else {
      this.text = options.text || options.html || '';
      this.blocks = options.blocks ? [...options.blocks] : [];
      this.media = options.media ? [...options.media] : [];
      this.is_rtl = Boolean(options.is_rtl ?? options.isRtl);
      this.draft_id = options.draft_id ?? options.draftId;
      this.ephemeral_message_parameters = options.ephemeral_message_parameters ?? options.ephemeral;
      this.reply_markup = options.reply_markup;
    }
  }

  /**
   * Add a block to the rich message
   * @param {object} block
   * @returns {this}
   */
  addBlock(block) {
    this.blocks.push(block);
    return this;
  }

  /**
   * Add a media attachment
   * @param {InputRichMessageMedia|object} mediaItem
   * @returns {this}
   */
  addMedia(mediaItem) {
    this.media.push(mediaItem);
    return this;
  }

  /**
   * Set right-to-left text direction
   * @param {boolean} [rtl=true]
   * @returns {this}
   */
  setRtl(rtl = true) {
    this.is_rtl = Boolean(rtl);
    return this;
  }

  toJSON() {
    return {
      text: this.text,
      blocks: this.blocks.map((b) => (typeof b?.toJSON === 'function' ? b.toJSON() : b)),
      media: this.media.map((m) => (typeof m?.toJSON === 'function' ? m.toJSON() : m)),
      ...(this.is_rtl ? { is_rtl: true } : {}),
      ...(this.draft_id !== undefined ? { draft_id: this.draft_id } : {}),
      ...(this.ephemeral_message_parameters ? { ephemeral_message_parameters: this.ephemeral_message_parameters } : {}),
      ...(this.reply_markup ? { reply_markup: this.reply_markup } : {}),
    };
  }

  static create(options) {
    return new InputRichMessage(options);
  }
}


/**
 * Comprehensive Rich Message Builder
 */
export class RichMessageBuilder {
  constructor(initialText = '') {
    this.blocks = [];
    this._text = initialText ? String(initialText) : '';
    this._parseMode = 'HTML';
    this._inlineKeyboard = [];
    this._draftId = null;
    this._ephemeral = null;
    this._media = [];
    this._isRtl = false;
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
    if (expandable) {
      return this.expandableBlockQuotation(text);
    }
    this.blocks.push({
      type: 'quote',
      content: text,
      expandable: false,
      rawHtml: `<blockquote>${escapeHtml(text)}</blockquote>`,
    });
    return this;
  }

  /**
   * Add an expandable blockquote (Telegram Bot API 10.3)
   * @param {string} text
   * @returns {this}
   */
  expandableQuote(text) {
    return this.expandableBlockQuotation(text);
  }

  /**
   * Add a collapsible / expandable blockquote (alias)
   * @param {string} text
   * @returns {this}
   */
  collapsibleQuote(text) {
    return this.expandableBlockQuotation(text);
  }

  /**
   * Add expandable block quotation (Bot API 10.3 InputRichBlockExpandableBlockQuotation)
   * @param {string} text
   * @param {object} [options]
   * @returns {this}
   */
  expandableBlockQuotation(text, options = {}) {
    const block = new InputRichBlockExpandableBlockQuotation(text, options);
    this.blocks.push(block);
    return this;
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
   * Add document link using tg://document?id= (Bot API 10.3)
   * @param {string} documentId
   * @param {string} [text='Document']
   * @returns {this}
   */
  documentLink(documentId, text = 'Document') {
    return this.link(text, `tg://document?id=${documentId}`);
  }

  /**
   * Add bullet list
   * @param {Array<string>} items
   * @param {string|object} [bulletOrOptions='•']
   * @returns {this}
   */
  list(items, bulletOrOptions = '•') {
    if (typeof bulletOrOptions === 'object') {
      this.blocks.push(new InputRichBlockList(items, bulletOrOptions));
      return this;
    }
    const listItems = Array.isArray(items) ? items : [items];
    const bullet = typeof bulletOrOptions === 'string' ? bulletOrOptions : '•';
    const htmlLines = listItems.map((item) => `${bullet} ${escapeHtml(item)}`).join('\n');
    this.blocks.push(new InputRichBlockList(listItems, { bullet, rawHtml: htmlLines }));
    return this;
  }

  /**
   * Add a checklist block with check states (Bot API 10.2+)
   * @param {Array<any>} items
   * @param {object} [options={}]
   * @returns {this}
   */
  checklist(items, options = {}) {
    this.blocks.push(new InputRichBlockChecklist(items, options));
    return this;
  }

  /**
   * Add section heading block (Bot API 10.2+)
   * @param {string} text
   * @param {number} [level=2]
   * @param {object} [options={}]
   * @returns {this}
   */
  sectionHeading(text, level = 2, options = {}) {
    this.blocks.push(new InputRichBlockSectionHeading(text, level, options));
    return this;
  }

  /**
   * Add heading alias (Bot API 10.2+)
   * @param {string} text
   * @param {number} [level=2]
   * @param {object} [options={}]
   * @returns {this}
   */
  heading(text, level = 2, options = {}) {
    return this.sectionHeading(text, level, options);
  }

  /**
   * Add preformatted code/text block (Bot API 10.2+)
   * @param {string} text
   * @param {string} [language='']
   * @param {object} [options={}]
   * @returns {this}
   */
  preformatted(text, language = '', options = {}) {
    this.blocks.push(new InputRichBlockPreformatted(text, language, options));
    return this;
  }

  /**
   * Add footer block (Bot API 10.2+)
   * @param {string} text
   * @param {object} [options={}]
   * @returns {this}
   */
  footer(text, options = {}) {
    this.blocks.push(new InputRichBlockFooter(text, options));
    return this;
  }

  /**
   * Add horizontal divider block (Bot API 10.2+)
   * @param {object} [options={}]
   * @returns {this}
   */
  divider(options = {}) {
    this.blocks.push(new InputRichBlockDivider(options));
    return this;
  }

  /**
   * Add mathematical expression / LaTeX block (Bot API 10.2+)
   * @param {string} expression
   * @param {object} [options={}]
   * @returns {this}
   */
  math(expression, options = {}) {
    this.blocks.push(new InputRichBlockMathematicalExpression(expression, options));
    return this;
  }

  /**
   * Add mathematical expression alias (Bot API 10.2+)
   * @param {string} expression
   * @param {object} [options={}]
   * @returns {this}
   */
  mathematicalExpression(expression, options = {}) {
    return this.math(expression, options);
  }

  /**
   * Add in-message anchor block (Bot API 10.2+)
   * @param {string} name
   * @param {string} [text='']
   * @param {object} [options={}]
   * @returns {this}
   */
  anchor(name, text = '', options = {}) {
    this.blocks.push(new InputRichBlockAnchor(name, text, options));
    return this;
  }

  /**
   * Add block quotation block (Bot API 10.2+)
   * @param {string} text
   * @param {object} [options={}]
   * @returns {this}
   */
  blockQuotation(text, options = {}) {
    this.blocks.push(new InputRichBlockBlockQuotation(text, options));
    return this;
  }

  /**
   * Add pull quotation block with center emphasis (Bot API 10.2+)
   * @param {string} text
   * @param {object} [options={}]
   * @returns {this}
   */
  pullQuote(text, options = {}) {
    this.blocks.push(new InputRichBlockPullQuotation(text, options));
    return this;
  }

  /**
   * Add pull quotation alias (Bot API 10.2+)
   * @param {string} text
   * @param {object} [options={}]
   * @returns {this}
   */
  pullQuotation(text, options = {}) {
    return this.pullQuote(text, options);
  }

  /**
   * Add collage block (Bot API 10.2+)
   * @param {Array<any>} media
   * @param {object} [options={}]
   * @returns {this}
   */
  collage(media, options = {}) {
    this.blocks.push(new InputRichBlockCollage(media, options));
    return this;
  }

  /**
   * Add slideshow block (Bot API 10.2+)
   * @param {Array<any>} media
   * @param {object} [options={}]
   * @returns {this}
   */
  slideshow(media, options = {}) {
    this.blocks.push(new InputRichBlockSlideshow(media, options));
    return this;
  }

  /**
   * Add details / expandable disclosure block (Bot API 10.2+)
   * @param {string} title
   * @param {string|Array<any>} [content='']
   * @param {object} [options={}]
   * @returns {this}
   */
  details(title, content = '', options = {}) {
    this.blocks.push(new InputRichBlockDetails(title, content, options));
    return this;
  }

  /**
   * Add interactive map block (Bot API 10.2+)
   * @param {number} latitude
   * @param {number} longitude
   * @param {object} [options={}]
   * @returns {this}
   */
  map(latitude, longitude, options = {}) {
    this.blocks.push(new InputRichBlockMap(latitude, longitude, options));
    return this;
  }

  /**
   * Add animation / GIF block (Bot API 10.2+)
   * @param {string} animation
   * @param {object} [options={}]
   * @returns {this}
   */
  animation(animation, options = {}) {
    this.blocks.push(new InputRichBlockAnimation(animation, options));
    return this;
  }

  /**
   * Add audio track block (Bot API 10.2+)
   * @param {string} audio
   * @param {object} [options={}]
   * @returns {this}
   */
  audio(audio, options = {}) {
    this.blocks.push(new InputRichBlockAudio(audio, options));
    return this;
  }

  /**
   * Add photo block (Bot API 10.2+)
   * @param {string} photo
   * @param {string} [caption='']
   * @param {object} [options={}]
   * @returns {this}
   */
  photo(photo, caption = '', options = {}) {
    this.blocks.push(new InputRichBlockPhoto(photo, caption, options));
    return this;
  }

  /**
   * Add video block (Bot API 10.2+)
   * @param {string} video
   * @param {object} [options={}]
   * @returns {this}
   */
  video(video, options = {}) {
    this.blocks.push(new InputRichBlockVideo(video, options));
    return this;
  }

  /**
   * Add voice note block (Bot API 10.2+)
   * @param {string} voiceNote
   * @param {object} [options={}]
   * @returns {this}
   */
  voiceNote(voiceNote, options = {}) {
    this.blocks.push(new InputRichBlockVoiceNote(voiceNote, options));
    return this;
  }

  /**
   * Add AI thinking indicator block (Bot API 10.2+)
   * @param {string} [text='Thinking...']
   * @param {object} [options={}]
   * @returns {this}
   */
  thinking(text = 'Thinking...', options = {}) {
    this.blocks.push(new InputRichBlockThinking(text, options));
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
   * Add table block (Bot API 10.3 InputRichBlockTable / RichBlockTable)
   * Supports standard headers, rows, is_bordered, and is_compact mode
   * @param {Array<string>|Table|InputRichBlockTable|object} headersOrTable
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   * @returns {this}
   */
  table(headersOrTable, rows = [], options = {}) {
    let block;
    if (headersOrTable instanceof InputRichBlockTable) {
      block = headersOrTable;
    } else if (headersOrTable instanceof Table) {
      block = new InputRichBlockTable(headersOrTable.headers, headersOrTable.rows, {
        is_compact: headersOrTable.is_compact,
        is_bordered: headersOrTable.is_bordered,
        is_striped: headersOrTable.is_striped,
        caption: headersOrTable.caption,
        alignments: headersOrTable._alignments,
        title: headersOrTable._title,
        style: headersOrTable._style,
        col1Width: headersOrTable.col1Width,
        ...options,
      });
    } else if (headersOrTable && typeof headersOrTable === 'object' && !Array.isArray(headersOrTable)) {
      block = new InputRichBlockTable(headersOrTable);
    } else {
      block = new InputRichBlockTable(headersOrTable, rows, { is_bordered: true, ...options });
    }
    this.blocks.push(block);
    return this;
  }

  /**
   * Add a card table block (matching Telegram Bot Card Table UI with rounded container and grid lines)
   * @param {Array<string>|Table|object} headersOrTable
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   * @returns {this}
   */
  cardTable(headersOrTable, rows = [], options = {}) {
    return this.table(headersOrTable, rows, { is_bordered: true, ...options });
  }

  /**
   * Add pre-configured system status card table (matching Telegram bot screenshot)
   * @param {object} [data={}]
   * @param {object} [options={}]
   * @returns {this}
   */
  systemStatus(data = {}, options = {}) {
    const table = Table.systemStatus(data, options);
    return this.table(table);
  }

  /**
   * Add pre-configured user profile card table (matching Telegram bot screenshot)
   * @param {object} [data={}]
   * @param {object} [options={}]
   * @returns {this}
   */
  userProfile(data = {}, options = {}) {
    const table = Table.userProfile(data, options);
    return this.table(table);
  }

  /**
   * Add compact table block (Bot API 10.3 is_compact table)
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   * @returns {this}
   */
  compactTable(headers, rows = [], options = {}) {
    return this.table(headers, rows, { ...options, is_compact: true });
  }

  /**
   * Add document block (Bot API 10.3 InputRichBlockDocument)
   * @param {string|object} document
   * @param {string} [caption='']
   * @param {object} [options={}]
   * @returns {this}
   */
  document(document, caption = '', options = {}) {
    const block = new InputRichBlockDocument(document, caption, options);
    this.blocks.push(block);
    return this;
  }

  /**
   * Add buttons block to the rich message (Bot API 10.3 InputRichBlockButtons)
   * @param {Array<Array<object>>|Array<object>} buttonsMatrix
   * @returns {this}
   */
  buttons(buttonsMatrix) {
    const block = new InputRichBlockButtons(buttonsMatrix);
    this.blocks.push(block);
    return this;
  }

  /**
   * Add buttons block (alias)
   */
  addButtonsBlock(buttonsMatrix) {
    return this.buttons(buttonsMatrix);
  }

  /**
   * Set ephemeral parameters (Bot API 10.3 EphemeralMessageParameters)
   * @param {number|object|EphemeralMessageParameters} lifetimeSecondsOrParams
   * @returns {this}
   */
  ephemeral(lifetimeSecondsOrParams = 60) {
    if (lifetimeSecondsOrParams instanceof EphemeralMessageParameters) {
      this._ephemeral = lifetimeSecondsOrParams;
    } else if (typeof lifetimeSecondsOrParams === 'number') {
      this._ephemeral = new EphemeralMessageParameters(lifetimeSecondsOrParams);
    } else {
      this._ephemeral = new EphemeralMessageParameters(lifetimeSecondsOrParams);
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
   * Add primary colored button (Blue - Bot API 9.4+)
   * @param {string} text
   * @param {string|number|object} dataOrUrl
   * @param {object} [options]
   * @returns {this}
   */
  primary(text, dataOrUrl, options = {}) {
    return this.button(Markup.button.primary(text, dataOrUrl, options));
  }

  /**
   * Add danger colored button (Red - Bot API 9.4+)
   * @param {string} text
   * @param {string|number|object} dataOrUrl
   * @param {object} [options]
   * @returns {this}
   */
  danger(text, dataOrUrl, options = {}) {
    return this.button(Markup.button.danger(text, dataOrUrl, options));
  }

  /**
   * Add success colored button (Green - Bot API 9.4+)
   * @param {string} text
   * @param {string|number|object} dataOrUrl
   * @param {object} [options]
   * @returns {this}
   */
  success(text, dataOrUrl, options = {}) {
    return this.button(Markup.button.success(text, dataOrUrl, options));
  }

  /**
   * Add generic colored button (Bot API 9.4+)
   * @param {string} text
   * @param {'primary'|'danger'|'success'} style
   * @param {string|number|object} dataOrUrl
   * @param {object} [options]
   * @returns {this}
   */
  colored(text, style, dataOrUrl, options = {}) {
    return this.button(Markup.button.colored(text, style, dataOrUrl, options));
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
   * Add raw custom block
   * @param {object} block
   * @returns {this}
   */
  addBlock(block) {
    this.blocks.push(block);
    return this;
  }

  /**
   * Compile HTML string representation for Telegram HTML mode
   * @returns {string}
   */
  compileHtml() {
    const parts = [];
    if (this._text) {
      parts.push(this._text);
    }
    for (const block of this.blocks) {
      if (typeof block?.toHtml === 'function') {
        parts.push(block.toHtml());
      } else if (block?.rawHtml) {
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
      blocks: this.blocks.map((b) => {
        if (typeof b?.toJSON === 'function') {
          return b.toJSON();
        }
        return { ...b };
      }),
      ...this._extra,
    };

    if (this._media && this._media.length > 0) {
      payload.media = this._media.map((m) => (typeof m?.toJSON === 'function' ? m.toJSON() : m));
    }

    if (this._isRtl !== undefined) {
      payload.is_rtl = Boolean(this._isRtl);
    }

    if (replyMarkup) {
      payload.reply_markup = replyMarkup;
    }

    if (this._ephemeral) {
      const ephemeralObj = typeof this._ephemeral.toJSON === 'function'
        ? this._ephemeral.toJSON()
        : this._ephemeral;
      payload.ephemeral_message_parameters = ephemeralObj;
      payload.ephemeral_parameters = ephemeralObj;
    }

    if (this._draftId !== null) {
      payload.draft_id = this._draftId;
    }

    return payload;
  }

  /**
   * Set right-to-left layout mode (Bot API 10.2+)
   * @param {boolean} [rtl=true]
   * @returns {this}
   */
  isRtl(rtl = true) {
    this._isRtl = Boolean(rtl);
    return this;
  }

  /**
   * Add media attachments to the rich message (Bot API 10.2+)
   * @param {...(object|string|Array<object|string>)} items
   * @returns {this}
   */
  media(...items) {
    for (const item of items.flat()) {
      this.addMedia(item);
    }
    return this;
  }

  /**
   * Add a single media attachment
   * @param {object|string} item
   * @param {object} [options={}]
   * @returns {this}
   */
  addMedia(item, options = {}) {
    if (item instanceof InputRichMessageMedia) {
      this._media.push(item);
    } else if (typeof item === 'string') {
      this._media.push(new InputRichMessageMedia(item, options.type || 'photo', options));
    } else if (typeof item === 'object' && item !== null) {
      this._media.push(new InputRichMessageMedia(item, item.type || options.type || 'photo', { ...options, ...item }));
    } else {
      this._media.push(item);
    }
    return this;
  }

  /**
   * Export as an InputRichMessage instance
   * @returns {InputRichMessage}
   */
  toInputRichMessage() {
    return new InputRichMessage(this.compile());
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
   * Create a rich message pre-populated with a table
   * @param {Array<string>|Table|InputRichBlockTable} headers
   * @param {Array<Array<any>>} [rows]
   * @param {object} [options]
   * @returns {RichMessageBuilder}
   */
  static table(headers, rows = [], options = {}) {
    const builder = new RichMessageBuilder();
    builder.table(headers, rows, options);
    return builder;
  }

  /**
   * Create a rich message pre-populated with a compact table
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} [rows]
   * @param {object} [options]
   * @returns {RichMessageBuilder}
   */
  static compactTable(headers, rows = [], options = {}) {
    const builder = new RichMessageBuilder();
    builder.compactTable(headers, rows, options);
    return builder;
  }

  /**
   * Create a rich message with buttons block
   * @param {Array<Array<object>>|Array<object>} buttonsMatrix
   * @returns {RichMessageBuilder}
   */
  static buttons(buttonsMatrix) {
    const builder = new RichMessageBuilder();
    builder.buttons(buttonsMatrix);
    return builder;
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
   * @param {number|object|EphemeralMessageParameters} [lifetimeSecondsOrParams=60]
   * @returns {RichMessageBuilder}
   */
  static ephemeral(text, lifetimeSecondsOrParams = 60) {
    const builder = new RichMessageBuilder(text);
    return builder.ephemeral(lifetimeSecondsOrParams);
  }

  /**
   * Helper to format a tg://document?id= link
   * @param {string} documentId
   * @param {string} [text='Document']
   */
  static documentLink(documentId, text = 'Document') {
    return `<a href="tg://document?id=${escapeHtml(documentId)}">${escapeHtml(text)}</a>`;
  }
}

export const RichMessage = RichMessageBuilder;
