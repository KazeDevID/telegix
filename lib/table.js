/**
 * Telegix - Table Generator & Formatting Engine
 * Generates beautiful formatted ASCII / Unicode box tables for Telegram HTML (<pre>)
 * and structured InputRichBlockTable / RichBlockTable for Telegram Bot API 10.3+.
 * @module telegix/table
 */

import { escapeHtml } from './format.js';

// Table Border Box Styles
const STYLES = {
  box: {
    topLeft: '┌',
    topMid: '┬',
    topRight: '┐',
    midLeft: '├',
    midMid: '┼',
    midRight: '┤',
    bottomLeft: '└',
    bottomMid: '┴',
    bottomRight: '┘',
    horizontal: '─',
    vertical: '│',
  },
  ascii: {
    topLeft: '+',
    topMid: '+',
    topRight: '+',
    midLeft: '+',
    midMid: '+',
    midRight: '+',
    bottomLeft: '+',
    bottomMid: '+',
    bottomRight: '+',
    horizontal: '-',
    vertical: '|',
  },
  compact: {
    topLeft: '',
    topMid: ' ',
    topRight: '',
    midLeft: '',
    midMid: '┼',
    midRight: '',
    bottomLeft: '',
    bottomMid: '',
    bottomRight: '',
    horizontal: '─',
    vertical: '│',
  },
  clean: {
    topLeft: '',
    topMid: '',
    topRight: '',
    midLeft: '',
    midMid: '   ',
    midRight: '',
    bottomLeft: '',
    bottomMid: '',
    bottomRight: '',
    horizontal: '─',
    vertical: '   ',
  },
  card: {
    topLeft: '╭',
    topMid: '┬',
    topRight: '╮',
    midLeft: '├',
    midMid: '┼',
    midRight: '┤',
    bottomLeft: '╰',
    bottomMid: '┴',
    bottomRight: '╯',
    horizontal: '─',
    vertical: '│',
  },
};

/**
 * Calculate visual string length (supports basic emojis and numbers)
 * @param {any} val
 * @returns {number}
 */
function visualLength(val) {
  if (val === null || val === undefined) return 0;
  return String(val).length;
}

/**
 * Pad a string to target width with alignment
 * @param {any} val
 * @param {number} width
 * @param {'left'|'center'|'right'} [align='left']
 * @returns {string}
 */
function pad(val, width, align = 'left') {
  const str = val === null || val === undefined ? '' : String(val);
  const diff = width - visualLength(str);
  if (diff <= 0) return str;

  if (align === 'right') {
    return ' '.repeat(diff) + str;
  }
  if (align === 'center') {
    const left = Math.floor(diff / 2);
    const right = diff - left;
    return ' '.repeat(left) + str + ' '.repeat(right);
  }
  return str + ' '.repeat(diff);
}

/**
 * Escape string for SVG XML
 * @param {any} val
 * @returns {string}
 */
function escapeSvg(val) {
  if (val === null || val === undefined) return '';
  return String(val)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Table builder class for Telegram messages and Rich Blocks
 */
export class Table {
  /**
   * @param {Array<string>|object} [headersOrOptions={}]
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   */
  constructor(headersOrOptions = {}, rows = [], options = {}) {
    this.type = 'table';
    let opts = {};
    if (Array.isArray(headersOrOptions)) {
      this.headers = [...headersOrOptions];
      this.rows = Array.isArray(rows) ? rows.map((r) => [...r]) : [];
      opts = options || {};
    } else {
      opts = headersOrOptions || {};
      this.headers = opts.headers ? [...opts.headers] : [];
      this.rows = opts.rows ? opts.rows.map((r) => [...r]) : [];
    }

    this.is_bordered = Boolean(opts.is_bordered ?? opts.isBordered ?? true);
    this.is_compact = Boolean(opts.is_compact ?? opts.isCompact ?? false);
    this.is_striped = Boolean(opts.is_striped ?? opts.isStriped ?? false);
    this.caption = opts.caption || '';
    this._style = opts.style || 'card';
    this._title = opts.title || '';
    this._alignments = opts.alignments ? [...opts.alignments] : [];
    this.col1Width = opts.col1Width;
    this.asImage = Boolean(opts.asImage || opts.photo || opts.image);
    this._cardOptions = { ...opts };
  }

  /**
   * Set headers
   * @param {Array<string>|...string} headers
   * @returns {this}
   */
  header(...headers) {
    if (headers.length === 1 && Array.isArray(headers[0])) {
      this.headers = [...headers[0]];
    } else {
      this.headers = headers.flat();
    }
    return this;
  }

  /**
   * Set headers (alias)
   * @param {Array<string>} headers
   * @returns {this}
   */
  setHeaders(headers) {
    this.headers = Array.isArray(headers) ? [...headers] : [];
    return this;
  }

  /**
   * Add a row
   * @param {Array<any>|...any} cells
   * @returns {this}
   */
  row(...cells) {
    if (cells.length === 1 && Array.isArray(cells[0])) {
      this.rows.push([...cells[0]]);
    } else {
      this.rows.push(cells.flat());
    }
    return this;
  }

  /**
   * Add multiple rows
   * @param {Array<Array<any>>} rows
   * @returns {this}
   */
  addRows(rows) {
    if (Array.isArray(rows)) {
      for (const r of rows) {
        this.row(r);
      }
    }
    return this;
  }

  /**
   * Set table compact mode (Telegram Bot API 10.3)
   * @param {boolean} [isCompact=true]
   * @returns {this}
   */
  compact(isCompact = true) {
    this.is_compact = Boolean(isCompact);
    return this;
  }

  /**
   * Set visual style ('box' | 'ascii' | 'compact' | 'clean' | 'markdown')
   * @param {string} styleName
   * @returns {this}
   */
  style(styleName) {
    this._style = styleName;
    return this;
  }

  /**
   * Set optional table title
   * @param {string} title
   * @returns {this}
   */
  title(title) {
    this._title = title;
    return this;
  }

  /**
   * Set column alignment
   * @param {number} colIndex
   * @param {'left'|'center'|'right'} align
   * @returns {this}
   */
  columnAlign(colIndex, align) {
    this._alignments[colIndex] = align;
    return this;
  }

  /**
   * Set alignments for all columns
   * @param {Array<'left'|'center'|'right'>} aligns
   * @returns {this}
   */
  alignments(aligns) {
    this._alignments = Array.isArray(aligns) ? [...aligns] : [];
    return this;
  }

  /**
   * Render table as plain formatted monospaced text
   * @param {object} [options]
   * @returns {string}
   */
  format(options = {}) {
    const opts = typeof options === 'string' ? { style: options } : (options || {});
    return Table.format(this.headers, this.rows, {
      style: opts.style || this._style,
      isCompact: opts.is_compact ?? opts.isCompact ?? this.is_compact,
      alignments: opts.alignments || this._alignments,
      title: opts.title || this._title,
      ...opts,
    });
  }

  /**
   * String coercion
   */
  toString() {
    return this.format();
  }

  /**
   * Render table as HTML wrapped in <pre> tags for Telegram
   * @param {object} [options]
   * @returns {string}
   */
  toHtml(options = {}) {
    const formatted = this.format(options);
    const title = options.title || this._title;
    const titleHtml = title ? `<b>${escapeHtml(title)}</b>\n\n` : '';
    return `${titleHtml}<pre>${escapeHtml(formatted)}</pre>`;
  }

  /**
   * Render table as Markdown (or inside ``` code block)
   * @param {object} [options]
   * @returns {string}
   */
  toMarkdown(options = {}) {
    return Table.markdown(this.headers, this.rows, options);
  }

  /**
   * Set table bordered mode (Telegram Bot API 10.3 / Card style)
   * @param {boolean} [isBordered=true]
   * @returns {this}
   */
  bordered(isBordered = true) {
    this.is_bordered = Boolean(isBordered);
    return this;
  }

  /**
   * Set table striped mode (Telegram Bot API 10.3)
   * @param {boolean} [isStriped=true]
   * @returns {this}
   */
  striped(isStriped = true) {
    this.is_striped = Boolean(isStriped);
    return this;
  }

  /**
   * Convert table data into 2D array of RichBlockTableCell for Telegram Bot API 10.3
   * @returns {Array<Array<object>>}
   */
  toCells() {
    const cells = [];
    if (this.headers.length > 0) {
      cells.push(
        this.headers.map((h, i) => ({
          text: String(h ?? ''),
          is_header: true,
          align: this._alignments[i] || 'center',
          valign: 'middle',
        }))
      );
    }
    for (const row of this.rows) {
      cells.push(
        row.map((cell, i) => {
          if (cell && typeof cell === 'object' && cell.text !== undefined) {
            return {
              align: this._alignments[i] || 'left',
              valign: 'middle',
              ...cell,
            };
          }
          return {
            text: String(cell ?? ''),
            align: this._alignments[i] || 'left',
            valign: 'middle',
          };
        })
      );
    }
    return cells;
  }

  /**
   * Render table as SVG vector graphic matching the Telegram Bot Card Table UI
   * (dark rounded container, grid borders, headers, and blue clickable links)
   * @param {object} [options]
   * @returns {string} SVG XML markup string
   */
  toCardSvg(options = {}) {
    const width = Number(options.width || 420);
    const maxLabelLen = Math.max(
      ...this.rows.map((r) => String(r[0] ?? '').length),
      this.headers[0] ? String(this.headers[0]).length : 0,
      10
    );
    const calculatedCol1 = Math.max(130, Math.min(220, maxLabelLen * 9 + 30));
    const col1Width = Number(options.col1Width || this.col1Width || calculatedCol1);
    const headerHeight = Number(options.headerHeight || 38);
    const rowHeight = Number(options.rowHeight || 36);
    const hasHeader = this.headers.length > 0;
    const headerH = hasHeader ? headerHeight : 0;
    const totalHeight = headerH + (this.rows.length * rowHeight);

    const bgColor = options.bgColor || '#18222d';
    const borderColor = options.borderColor || '#2b3d4f';
    const headerBg = options.headerBg || '#1c2836';
    const labelColor = options.labelColor || '#90a4b7';
    const valColor = options.valueColor || '#ffffff';
    const linkColor = options.linkColor || '#5288c1';
    const fontFamily = options.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${totalHeight}" viewBox="0 0 ${width} ${totalHeight}">\n`;
    svg += `  <style>\n`;
    svg += `    .t-lbl { font-family: ${fontFamily}; font-size: 14px; fill: ${labelColor}; font-weight: 400; }\n`;
    svg += `    .t-val { font-family: ${fontFamily}; font-size: 14px; fill: ${valColor}; font-weight: 400; }\n`;
    svg += `    .t-val-bold { font-family: ${fontFamily}; font-size: 14px; fill: ${valColor}; font-weight: 600; }\n`;
    svg += `    .t-link { font-family: ${fontFamily}; font-size: 14px; fill: ${linkColor}; font-weight: 500; cursor: pointer; }\n`;
    svg += `    .t-hdr { font-family: ${fontFamily}; font-size: 14px; fill: #ffffff; font-weight: 700; }\n`;
    svg += `  </style>\n`;

    // Outer rounded card
    svg += `  <rect x="0.5" y="0.5" width="${width - 1}" height="${totalHeight - 1}" rx="12" ry="12" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/>\n`;

    if (hasHeader) {
      const clipId = `clip-top-${Math.floor(Math.random() * 1000000)}`;
      svg += `  <clipPath id="${clipId}">\n`;
      svg += `    <rect x="0.5" y="0.5" width="${width - 1}" height="${totalHeight - 1}" rx="12" ry="12" />\n`;
      svg += `  </clipPath>\n`;
      svg += `  <rect x="0.5" y="0.5" width="${width - 1}" height="${headerH}" fill="${headerBg}" clip-path="url(#${clipId})"/>\n`;
      svg += `  <line x1="0" y1="${headerH}" x2="${width}" y2="${headerH}" stroke="${borderColor}" stroke-width="1"/>\n`;

      const h1 = this.headers[0] ?? '';
      const h2 = this.headers[1] ?? '';
      svg += `  <text x="16" y="${Math.round(headerH / 2 + 5)}" class="t-hdr">${escapeSvg(h1)}</text>\n`;
      if (h2) {
        svg += `  <text x="${col1Width + 16}" y="${Math.round(headerH / 2 + 5)}" class="t-hdr">${escapeSvg(h2)}</text>\n`;
      }
    }

    // Vertical column divider
    svg += `  <line x1="${col1Width}" y1="0" x2="${col1Width}" y2="${totalHeight}" stroke="${borderColor}" stroke-width="1"/>\n`;

    // Data rows
    for (let i = 0; i < this.rows.length; i++) {
      const row = this.rows[i];
      const y = headerH + (i * rowHeight);

      if (i > 0 || hasHeader) {
        svg += `  <line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${borderColor}" stroke-width="1"/>\n`;
      }

      const textY = y + Math.round(rowHeight / 2 + 5);
      const col1Val = row[0] !== undefined ? String(row[0]) : '';
      const col2Val = row[1] !== undefined ? String(row[1]) : '';

      svg += `  <text x="16" y="${textY}" class="t-lbl">${escapeSvg(col1Val)}</text>\n`;

      if (col2Val) {
        const isLink = col2Val.startsWith('@') || col2Val.startsWith('tg://') || col2Val.startsWith('http');
        const isBold = options.boldValues === true || (options.boldValues !== false && (
          ['telegraf.js', 'telegix', 'free user', 'premium', 'active', 'online', 'pro', 'connected', 'operational', 'success', 'ok'].includes(col2Val.toLowerCase()) ||
          i === 0 ||
          !isNaN(Number(col2Val))
        ));
        const cls = isLink ? 't-link' : (isBold ? 't-val-bold' : 't-val');
        svg += `  <text x="${col1Width + 16}" y="${textY}" class="${cls}">${escapeSvg(col2Val)}</text>\n`;
      }
    }

    svg += `</svg>`;
    return svg;
  }

  /**
   * Convert SVG table to Buffer (Node.js) or Uint8Array
   * @param {object} [options]
   * @returns {Buffer|Uint8Array}
   */
  toBuffer(options = {}) {
    const svg = this.toCardSvg(options);
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(svg, 'utf-8');
    }
    return new TextEncoder().encode(svg);
  }

  /**
   * Convert SVG table to base64 Data URL
   * @param {object} [options]
   * @returns {string}
   */
  toDataUrl(options = {}) {
    const svg = this.toCardSvg(options);
    if (typeof Buffer !== 'undefined') {
      return `data:image/svg+xml;base64,${Buffer.from(svg, 'utf-8').toString('base64')}`;
    }
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  /**
   * Convert to Telegram Bot API 10.3 InputRichBlockTable / RichBlockTable payload
   * @returns {object}
   */
  toRichBlock() {
    return {
      type: 'table',
      is_bordered: this.is_bordered,
      is_compact: this.is_compact,
      is_striped: this.is_striped,
      cells: this.toCells(),
      ...(this.caption ? { caption: this.caption } : {}),
      ...(this.headers.length > 0 ? { headers: this.headers } : {}),
      rows: this.rows,
      ...(this._title ? { title: this._title } : {}),
    };
  }

  /**
   * JSON serialization for Bot API 10.3
   */
  toJSON() {
    return this.toRichBlock();
  }

  // ==========================================
  // Static Factory & Formatting Methods
  // ==========================================

  /**
   * Factory method to create a new Table instance
   * @param {object} [options]
   * @returns {Table}
   */
  static create(options) {
    return new Table(options);
  }

  /**
   * Create Table from array of JavaScript objects
   * @param {Array<object>} array
   * @param {Array<string>} [columns] - Optional specific columns or keys
   * @param {object} [options]
   * @returns {Table}
   */
  static fromObjects(array, columns, options = {}) {
    if (!Array.isArray(array) || array.length === 0) {
      return new Table(options);
    }

    const cols = columns && columns.length > 0
      ? columns
      : Object.keys(array[0]);

    const table = new Table({
      headers: cols.map((c) => c.charAt(0).toUpperCase() + c.slice(1).replace(/_/g, ' ')),
      ...options,
    });

    for (const item of array) {
      const row = cols.map((c) => item[c]);
      table.row(row);
    }

    return table;
  }

  /**
   * Format headers and rows into a formatted string
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   * @param {string} [options.style='box'] - 'box', 'ascii', 'compact', 'clean', 'markdown'
   * @param {boolean} [options.isCompact=false]
   * @param {Array<'left'|'center'|'right'>} [options.alignments]
   * @returns {string}
   */
  static format(headers = [], rows = [], options = {}) {
    const opts = typeof options === 'string' ? { style: options } : (options || {});
    const styleName = opts.style || (opts.isCompact || opts.is_compact ? 'compact' : 'box');

    if (styleName === 'markdown') {
      return Table.markdown(headers, rows, opts);
    }

    const border = STYLES[styleName] || STYLES.box;
    const alignments = opts.alignments || [];
    const isCompact = Boolean(opts.isCompact || opts.is_compact);

    const numCols = Math.max(
      headers.length,
      ...rows.map((r) => (Array.isArray(r) ? r.length : 0)),
      1
    );

    // Calculate maximum width for each column
    const colWidths = new Array(numCols).fill(0);

    for (let c = 0; c < numCols; c++) {
      if (headers[c] !== undefined) {
        colWidths[c] = Math.max(colWidths[c], visualLength(headers[c]));
      }
      for (const row of rows) {
        if (row && row[c] !== undefined) {
          colWidths[c] = Math.max(colWidths[c], visualLength(row[c]));
        }
      }
      // Minimum column width of 1 character
      colWidths[c] = Math.max(colWidths[c], 1);
    }

    const padding = isCompact ? 0 : 1;
    const padChar = ' ';
    const lines = [];

    // Helper to format a cell with padding
    const formatCell = (val, colIdx) => {
      const w = colWidths[colIdx];
      const align = alignments[colIdx] || 'left';
      const text = pad(val, w, align);
      return isCompact ? text : `${padChar}${text}${padChar}`;
    };

    // Helper to build a horizontal border row
    const buildBorder = (left, mid, right, horiz) => {
      if (!left && !mid && !right) return '';
      const parts = colWidths.map((w) => horiz.repeat(w + (isCompact ? 0 : 2)));
      return `${left}${parts.join(mid)}${right}`;
    };

    // Top border
    if (border.topLeft || border.topMid || border.topRight) {
      const topRow = buildBorder(border.topLeft, border.topMid, border.topRight, border.horizontal);
      if (topRow) lines.push(topRow);
    }

    // Headers row
    if (headers.length > 0) {
      const headerCells = [];
      for (let c = 0; c < numCols; c++) {
        headerCells.push(formatCell(headers[c] ?? '', c));
      }
      lines.push(`${border.vertical}${headerCells.join(border.vertical)}${border.vertical}`);

      // Mid separator row
      if (border.midLeft || border.midMid || border.midRight || border.horizontal) {
        const midRow = buildBorder(border.midLeft, border.midMid, border.midRight, border.horizontal);
        if (midRow) lines.push(midRow);
      }
    }

    // Data rows
    for (let r = 0; r < rows.length; r++) {
      const row = rows[r] || [];
      const cells = [];
      for (let c = 0; c < numCols; c++) {
        cells.push(formatCell(row[c] ?? '', c));
      }
      lines.push(`${border.vertical}${cells.join(border.vertical)}${border.vertical}`);
    }

    // Bottom border
    if (border.bottomLeft || border.bottomMid || border.bottomRight) {
      const bottomRow = buildBorder(border.bottomLeft, border.bottomMid, border.bottomRight, border.horizontal);
      if (bottomRow) lines.push(bottomRow);
    }

    return lines.join('\n');
  }

  /**
   * Shortcut for box Unicode table
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   */
  static box(headers, rows, options = {}) {
    return Table.format(headers, rows, { ...options, style: 'box' });
  }

  /**
   * Shortcut for ASCII table (+----+----+ etc.)
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   */
  static ascii(headers, rows, options = {}) {
    return Table.format(headers, rows, { ...options, style: 'ascii' });
  }

  /**
   * Shortcut for compact table
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   */
  static compact(headers, rows, options = {}) {
    return Table.format(headers, rows, { ...options, style: 'compact', isCompact: true });
  }

  /**
   * Generate Markdown table format (| Col 1 | Col 2 |)
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   */
  static markdown(headers = [], rows = [], options = {}) {
    const alignments = options.alignments || [];
    const numCols = Math.max(
      headers.length,
      ...rows.map((r) => (Array.isArray(r) ? r.length : 0)),
      1
    );

    const colWidths = new Array(numCols).fill(3);
    for (let c = 0; c < numCols; c++) {
      if (headers[c] !== undefined) {
        colWidths[c] = Math.max(colWidths[c], visualLength(headers[c]));
      }
      for (const row of rows) {
        if (row && row[c] !== undefined) {
          colWidths[c] = Math.max(colWidths[c], visualLength(row[c]));
        }
      }
    }

    const lines = [];

    // Header
    const headerCells = [];
    for (let c = 0; c < numCols; c++) {
      headerCells.push(pad(headers[c] ?? '', colWidths[c], 'left'));
    }
    lines.push(`| ${headerCells.join(' | ')} |`);

    // Separator with alignment indicators
    const sepCells = [];
    for (let c = 0; c < numCols; c++) {
      const align = alignments[c] || 'left';
      const w = colWidths[c];
      if (align === 'center') {
        sepCells.push(`:${'-'.repeat(Math.max(w - 2, 1))}:`);
      } else if (align === 'right') {
        sepCells.push(`${'-'.repeat(Math.max(w - 1, 1))}:`);
      } else {
        sepCells.push(`:${'-'.repeat(Math.max(w - 1, 1))}`);
      }
    }
    lines.push(`| ${sepCells.join(' | ')} |`);

    // Rows
    for (const row of rows) {
      const cells = [];
      for (let c = 0; c < numCols; c++) {
        const align = alignments[c] || 'left';
        cells.push(pad(row[c] ?? '', colWidths[c], align));
      }
      lines.push(`| ${cells.join(' | ')} |`);
    }

    return lines.join('\n');
  }

  /**
   * Helper to format table directly into HTML with <pre> tag for Telegram
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   */
  static html(headers, rows, options = {}) {
    const formatted = Table.format(headers, rows, options);
    const title = options.title ? `<b>${escapeHtml(options.title)}</b>\n\n` : '';
    return `${title}<pre>${escapeHtml(formatted)}</pre>`;
  }

  /**
   * Create a Card Table matching modern Telegram Bot Card Table UI
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   * @returns {Table}
   */
  static card(headers, rows = [], options = {}) {
    return new Table(headers, rows, {
      style: 'card',
      is_bordered: true,
      ...options,
    });
  }

  /**
   * Create a pre-configured System Status Card Table (matching Telegram bot screenshot)
   * @param {object} [data]
   * @param {object} [options]
   * @returns {Table}
   */
  static systemStatus(data = {}, options = {}) {
    const defaultData = {
      engine: 'Telegix',
      runtime: '0h 19m 32s',
      node: typeof process !== 'undefined' && process.version ? process.version : 'v23.11',
      features: 514,
      groups: 168,
      users: 9528,
      ...data,
    };

    return new Table(
      ['🤖 SYSTEM', 'Status'],
      [
        ['Engine', defaultData.engine],
        ['Runtime', defaultData.runtime],
        ['Node', defaultData.node],
        ['Features', defaultData.features],
        ['Groups', defaultData.groups],
        ['Users', defaultData.users],
      ],
      {
        style: 'card',
        is_bordered: true,
        title: options.title || '',
        ...options,
      }
    );
  }

  /**
   * Create a pre-configured User Profile Card Table (matching Telegram bot screenshot)
   * @param {object} [data]
   * @param {object} [options]
   * @returns {Table}
   */
  static userProfile(data = {}, options = {}) {
    const defaultData = {
      username: '@seventynn',
      status: 'Free User',
      limit: 0,
      points: 0,
      time: 'Selasa, 8 September 2026',
      ...data,
    };

    return new Table(
      ['👤 PROFILE', 'Info'],
      [
        ['Username', defaultData.username],
        ['Status', defaultData.status],
        ['Limit', defaultData.limit],
        ['Points', defaultData.points],
        ['Time', defaultData.time],
      ],
      {
        style: 'card',
        is_bordered: true,
        title: options.title || '',
        ...options,
      }
    );
  }

  /**
   * Render multiple stacked card tables into a single SVG graphic
   * (e.g. Card 1 SYSTEM and Card 2 PROFILE like in the Telegram bot screenshot)
   * @param {Array<Table|object>} tables
   * @param {object} [options]
   * @returns {string} SVG XML markup string
   */
  static multiCardSvg(tables, options = {}) {
    const list = Array.isArray(tables) ? tables : [tables];
    const width = Number(options.width || 420);
    const gap = Number(options.gap || 14);
    const padding = Number(options.padding || 0);

    const instances = list.map((t) => {
      if (t instanceof Table) return t;
      if (t && typeof t.toCardSvg === 'function') return t;
      if (t && Array.isArray(t.headers) && Array.isArray(t.rows)) return new Table(t);
      if (Array.isArray(t)) return new Table(t[0], t[1]);
      return new Table(t);
    });

    let currentY = padding;
    const renderedParts = [];

    for (let idx = 0; idx < instances.length; idx++) {
      const t = instances[idx];
      const headerH = t.headers.length > 0 ? (options.headerHeight || 38) : 0;
      const tHeight = headerH + (t.rows.length * (options.rowHeight || 36));
      const col1Width = Number(options.col1Width || t.col1Width || Math.round(width * 0.36));
      const headerHeight = Number(options.headerHeight || 38);
      const rowHeight = Number(options.rowHeight || 36);
      const hasHeader = t.headers.length > 0;

      const bgColor = options.bgColor || '#18222d';
      const borderColor = options.borderColor || '#2b3d4f';
      const headerBg = options.headerBg || '#1c2836';

      let g = `  <g transform="translate(${padding}, ${currentY})">\n`;
      g += `    <rect x="0.5" y="0.5" width="${width - 1}" height="${tHeight - 1}" rx="12" ry="12" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/>\n`;

      if (hasHeader) {
        const clipId = `multi-clip-${idx}-${currentY}`;
        g += `    <clipPath id="${clipId}">\n`;
        g += `      <rect x="0.5" y="0.5" width="${width - 1}" height="${tHeight - 1}" rx="12" ry="12" />\n`;
        g += `    </clipPath>\n`;
        g += `    <rect x="0.5" y="0.5" width="${width - 1}" height="${headerH}" fill="${headerBg}" clip-path="url(#${clipId})"/>\n`;
        g += `    <line x1="0" y1="${headerH}" x2="${width}" y2="${headerH}" stroke="${borderColor}" stroke-width="1"/>\n`;

        const h1 = t.headers[0] ?? '';
        const h2 = t.headers[1] ?? '';
        g += `    <text x="16" y="${Math.round(headerH / 2 + 5)}" class="t-hdr">${escapeSvg(h1)}</text>\n`;
        if (h2) {
          g += `    <text x="${col1Width + 16}" y="${Math.round(headerH / 2 + 5)}" class="t-hdr">${escapeSvg(h2)}</text>\n`;
        }
      }

      g += `    <line x1="${col1Width}" y1="0" x2="${col1Width}" y2="${tHeight}" stroke="${borderColor}" stroke-width="1"/>\n`;

      for (let i = 0; i < t.rows.length; i++) {
        const row = t.rows[i];
        const y = headerH + (i * rowHeight);

        if (i > 0 || hasHeader) {
          g += `    <line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${borderColor}" stroke-width="1"/>\n`;
        }

        const textY = y + Math.round(rowHeight / 2 + 5);
        const col1Val = row[0] !== undefined ? String(row[0]) : '';
        const col2Val = row[1] !== undefined ? String(row[1]) : '';

        g += `    <text x="16" y="${textY}" class="t-lbl">${escapeSvg(col1Val)}</text>\n`;

        if (col2Val) {
          const isLink = col2Val.startsWith('@') || col2Val.startsWith('tg://') || col2Val.startsWith('http');
          const isBold = options.boldValues !== false && (
            ['Telegraf.js', 'Telegix', 'Free User', 'Premium', 'Active', 'Online', 'PRO'].includes(col2Val) ||
            i === 0
          );
          const cls = isLink ? 't-link' : (isBold ? 't-val-bold' : 't-val');
          g += `    <text x="${col1Width + 16}" y="${textY}" class="${cls}">${escapeSvg(col2Val)}</text>\n`;
        }
      }
      g += `  </g>\n`;

      renderedParts.push(g);
      currentY += tHeight + gap;
    }

    const totalWidth = width + (padding * 2);
    const totalHeight = currentY - gap + padding;
    const fontFamily = options.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
    const labelColor = options.labelColor || '#90a4b7';
    const valColor = options.valueColor || '#ffffff';
    const linkColor = options.linkColor || '#5288c1';

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}">\n`;
    svg += `  <style>\n`;
    svg += `    .t-lbl { font-family: ${fontFamily}; font-size: 14px; fill: ${labelColor}; font-weight: 400; }\n`;
    svg += `    .t-val { font-family: ${fontFamily}; font-size: 14px; fill: ${valColor}; font-weight: 400; }\n`;
    svg += `    .t-val-bold { font-family: ${fontFamily}; font-size: 14px; fill: ${valColor}; font-weight: 600; }\n`;
    svg += `    .t-link { font-family: ${fontFamily}; font-size: 14px; fill: ${linkColor}; font-weight: 500; cursor: pointer; }\n`;
    svg += `    .t-hdr { font-family: ${fontFamily}; font-size: 14px; fill: #ffffff; font-weight: 700; }\n`;
    svg += `  </style>\n`;

    svg += renderedParts.join('\n');
    svg += `</svg>`;
    return svg;
  }
}

/**
 * Telegram Bot API 10.3 InputRichBlockTable class
 * Represents a structured table block in rich messages
 */
export class InputRichBlockTable {
  /**
   * @param {Array<string>|object} [headersOrOptions]
   * @param {Array<Array<any>>} [rows]
   * @param {object} [options]
   */
  constructor(headersOrOptions = [], rows = [], options = {}) {
    this.type = 'table';
    if (headersOrOptions && !Array.isArray(headersOrOptions) && typeof headersOrOptions === 'object') {
      const opt = headersOrOptions;
      this.headers = opt.headers || [];
      this.rows = opt.rows || [];
      this.is_compact = Boolean(opt.is_compact ?? opt.isCompact ?? false);
      this.is_bordered = Boolean(opt.is_bordered ?? opt.isBordered ?? true);
      this.is_striped = Boolean(opt.is_striped ?? opt.isStriped ?? false);
      this.caption = opt.caption || '';
      this.alignments = opt.alignments || [];
      this.title = opt.title || '';
      this.style = opt.style || (this.is_compact ? 'compact' : 'box');
      this.col1Width = opt.col1Width;
    } else {
      this.headers = Array.isArray(headersOrOptions) ? [...headersOrOptions] : [];
      this.rows = Array.isArray(rows) ? rows.map((r) => [...r]) : [];
      this.is_compact = Boolean(options.is_compact ?? options.isCompact ?? false);
      this.is_bordered = Boolean(options.is_bordered ?? options.isBordered ?? true);
      this.is_striped = Boolean(options.is_striped ?? options.isStriped ?? false);
      this.caption = options.caption || '';
      this.alignments = options.alignments || [];
      this.title = options.title || '';
      this.style = options.style || (this.is_compact ? 'compact' : 'box');
      this.col1Width = options.col1Width;
    }
  }

  /**
   * Set compact mode
   * @param {boolean} [isCompact=true]
   * @returns {this}
   */
  compact(isCompact = true) {
    this.is_compact = Boolean(isCompact);
    return this;
  }

  /**
   * Set bordered mode
   * @param {boolean} [isBordered=true]
   * @returns {this}
   */
  bordered(isBordered = true) {
    this.is_bordered = Boolean(isBordered);
    return this;
  }

  /**
   * Set striped mode
   * @param {boolean} [isStriped=true]
   * @returns {this}
   */
  striped(isStriped = true) {
    this.is_striped = Boolean(isStriped);
    return this;
  }

  /**
   * Add a row of cells
   * @param {...any} cells
   * @returns {this}
   */
  addRow(...cells) {
    if (cells.length === 1 && Array.isArray(cells[0])) {
      this.rows.push([...cells[0]]);
    } else {
      this.rows.push(cells.flat());
    }
    return this;
  }

  /**
   * Convert table data into 2D array of RichBlockTableCell for Bot API 10.3
   */
  toCells() {
    const cells = [];
    if (this.headers.length > 0) {
      cells.push(
        this.headers.map((h, i) => ({
          text: String(h ?? ''),
          is_header: true,
          align: this.alignments[i] || 'center',
          valign: 'middle',
        }))
      );
    }
    for (const row of this.rows) {
      cells.push(
        row.map((cell, i) => {
          if (cell && typeof cell === 'object' && cell.text !== undefined) {
            return {
              align: this.alignments[i] || 'left',
              valign: 'middle',
              ...cell,
            };
          }
          return {
            text: String(cell ?? ''),
            align: this.alignments[i] || 'left',
            valign: 'middle',
          };
        })
      );
    }
    return cells;
  }

  /**
   * Render table as SVG Card
   * @param {object} [options]
   * @returns {string}
   */
  toCardSvg(options = {}) {
    const t = new Table({
      headers: this.headers,
      rows: this.rows,
      col1Width: this.col1Width,
      ...options,
    });
    return t.toCardSvg(options);
  }

  /**
   * Render HTML representation
   */
  toHtml(options = {}) {
    const tableStr = Table.format(this.headers, this.rows, {
      style: options.style || this.style,
      isCompact: this.is_compact,
      alignments: this.alignments,
      ...options,
    });
    const titleHtml = this.title ? `<b>${escapeHtml(this.title)}</b>\n\n` : '';
    return `${titleHtml}<pre>${escapeHtml(tableStr)}</pre>`;
  }

  /**
   * Convert to Bot API 10.3 JSON payload
   */
  toJSON() {
    return {
      type: 'table',
      is_bordered: this.is_bordered,
      is_compact: this.is_compact,
      is_striped: this.is_striped,
      cells: this.toCells(),
      ...(this.caption ? { caption: this.caption } : {}),
      ...(this.headers.length > 0 ? { headers: this.headers } : {}),
      rows: this.rows,
      ...(this.title ? { title: this.title } : {}),
    };
  }

  static create(headers, rows, options) {
    return new InputRichBlockTable(headers, rows, options);
  }
}

/**
 * Alias for Telegram Bot API 10.3 RichBlockTable
 */
export const RichBlockTable = InputRichBlockTable;
