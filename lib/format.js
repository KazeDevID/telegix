/**
 * Telegix - Text Formatting Engine (HTML & MarkdownV2)
 * @module telegix/format
 */

/**
 * Escape HTML special characters for Telegram Bot API
 * @param {string} text
 * @returns {string}
 */
export function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Escape MarkdownV2 special characters for Telegram Bot API
 * Characters: _ * [ ] ( ) ~ ` > # + - = | { } . !
 * @param {string} text
 * @returns {string}
 */
export function escapeMarkdown(text) {
  if (text === null || text === undefined) return '';
  return String(text).replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}

/**
 * HTML Formatting Helpers
 */
export const html = {
  escape: escapeHtml,
  bold: (text) => `<b>${escapeHtml(text)}</b>`,
  italic: (text) => `<i>${escapeHtml(text)}</i>`,
  underline: (text) => `<u>${escapeHtml(text)}</u>`,
  strikethrough: (text) => `<s>${escapeHtml(text)}</s>`,
  spoiler: (text) => `<span class="tg-spoiler">${escapeHtml(text)}</span>`,
  code: (text) => `<code>${escapeHtml(text)}</code>`,
  pre: (codeText, language = '') => {
    const langAttr = language ? ` class="language-${escapeHtml(language)}"` : '';
    return `<pre><code${langAttr}>${escapeHtml(codeText)}</code></pre>`;
  },
  link: (text, url) => `<a href="${escapeHtml(url)}">${escapeHtml(text)}</a>`,
  mention: (text, userId) => `<a href="tg://user?id=${userId}">${escapeHtml(text)}</a>`,
  customEmoji: (text, customEmojiId) => `<tg-emoji emoji-id="${customEmojiId}">${escapeHtml(text)}</tg-emoji>`,
  quote: (text) => `<blockquote>${escapeHtml(text)}</blockquote>`,
  expandableBlockquote: (text) => `<blockquote expandable>${escapeHtml(text)}</blockquote>`,
  expandableQuote: (text) => `<blockquote expandable>${escapeHtml(text)}</blockquote>`,
  collapsibleQuote: (text) => `<blockquote expandable>${escapeHtml(text)}</blockquote>`,
};

/**
 * MarkdownV2 Formatting Helpers
 */
export const markdown = {
  escape: escapeMarkdown,
  bold: (text) => `*${escapeMarkdown(text)}*`,
  italic: (text) => `_${escapeMarkdown(text)}_`,
  underline: (text) => `__${escapeMarkdown(text)}__`,
  strikethrough: (text) => `~${escapeMarkdown(text)}~`,
  spoiler: (text) => `||${escapeMarkdown(text)}||`,
  code: (text) => `\`${escapeMarkdown(text)}\``,
  pre: (codeText, language = '') => `\`\`\`${language}\n${codeText.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\n\`\`\``,
  link: (text, url) => `[${escapeMarkdown(text)}](${url.replace(/([)\\])/g, '\\$1')})`,
  mention: (text, userId) => `[${escapeMarkdown(text)}](tg://user?id=${userId})`,
  customEmoji: (text, customEmojiId) => `![${escapeMarkdown(text)}](tg://emoji?id=${customEmojiId})`,
  quote: (text) => text.split('\n').map((line) => `>${escapeMarkdown(line)}`).join('\n'),
  expandableBlockquote: (text) => `**>${escapeMarkdown(text)}||`,
  expandableQuote: (text) => `**>${escapeMarkdown(text)}||`,
  collapsibleQuote: (text) => `**>${escapeMarkdown(text)}||`,
};

/**
 * Tagged template literal for safe HTML formatting
 * Example: fmt`Hello <b>${username}</b>! Your balance is ${100} Stars.`
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {string}
 */
export function fmt(strings, ...values) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      const val = values[i];
      // If it's already an HTML string with formatting or null/undefined
      if (val === null || val === undefined) {
        // do nothing
      } else if (typeof val === 'object' && val.rawHtml) {
        result += val.rawHtml;
      } else {
        result += escapeHtml(String(val));
      }
    }
  }
  return result;
}

// Attach helper methods directly to fmt
fmt.bold = html.bold;
fmt.italic = html.italic;
fmt.underline = html.underline;
fmt.strikethrough = html.strikethrough;
fmt.spoiler = html.spoiler;
fmt.code = html.code;
fmt.pre = html.pre;
fmt.link = html.link;
fmt.mention = html.mention;
fmt.customEmoji = html.customEmoji;
fmt.quote = html.quote;
fmt.expandableBlockquote = html.expandableBlockquote;
fmt.expandableQuote = html.expandableQuote;
fmt.collapsibleQuote = html.collapsibleQuote;
fmt.escape = escapeHtml;
fmt.html = html;
fmt.markdown = markdown;
fmt.raw = (str) => ({ rawHtml: String(str) });

export const Format = fmt;
