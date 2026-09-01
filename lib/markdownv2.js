/**
 * Telegix - MarkdownV2 Escape Utility
 */

/**
 * Escapes special characters for Telegram MarkdownV2 format.
 * Characters to escape: _ * [ ] ( ) ~ ` > # + - = | { } . !
 * @param {string} str - Raw text string to escape
 * @returns {string} Escaped string safe for MarkdownV2
 */
export function escapeMarkdownV2(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
}

/**
 * Helper to build safe MarkdownV2 snippets
 */
export const mdv2 = {
  escape: escapeMarkdownV2,
  bold: (text) => `*${escapeMarkdownV2(text)}*`,
  italic: (text) => `_${escapeMarkdownV2(text)}_`,
  underline: (text) => `__${escapeMarkdownV2(text)}__`,
  strikethrough: (text) => `~${escapeMarkdownV2(text)}~`,
  spoiler: (text) => `||${escapeMarkdownV2(text)}||`,
  code: (text) => `\`${text.replace(/`/g, '\\`')}\``,
  pre: (text, language = '') => `\`\`\`${language}\n${text}\n\`\`\``,
  link: (text, url) => `[${escapeMarkdownV2(text)}](${url})`,
};
