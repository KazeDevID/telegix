/**
 * Telegix - Adjustable Link Preview Builder (Bot API 7.0+)
 * Provides fluent options to control link preview rendering, media size,
 * positioning above/below text, or disabling link previews.
 * @module telegix/link-preview
 */

export class LinkPreview {
  /**
   * @param {object} [options]
   * @param {boolean} [options.is_disabled]
   * @param {string} [options.url]
   * @param {boolean} [options.prefer_small_media]
   * @param {boolean} [options.prefer_large_media]
   * @param {boolean} [options.show_above_text]
   */
  constructor(options = {}) {
    this._options = { ...options };
  }

  /**
   * Disable the link preview entirely
   * @param {boolean} [disabled=true]
   * @returns {this}
   */
  disable(disabled = true) {
    if (disabled) {
      this._options.is_disabled = true;
    } else {
      delete this._options.is_disabled;
    }
    return this;
  }

  /**
   * Set specific URL to preview
   * @param {string} url
   * @returns {this}
   */
  url(url) {
    this._options.url = String(url);
    return this;
  }

  /**
   * Shrink preview media into a small square thumbnail
   * @param {boolean} [prefer=true]
   * @returns {this}
   */
  smallMedia(prefer = true) {
    if (prefer) {
      this._options.prefer_small_media = true;
      delete this._options.prefer_large_media;
    } else {
      delete this._options.prefer_small_media;
    }
    return this;
  }

  /**
   * Expand preview media into a large preview card
   * @param {boolean} [prefer=true]
   * @returns {this}
   */
  largeMedia(prefer = true) {
    if (prefer) {
      this._options.prefer_large_media = true;
      delete this._options.prefer_small_media;
    } else {
      delete this._options.prefer_large_media;
    }
    return this;
  }

  /**
   * Position the link preview card ABOVE the message text
   * @param {boolean} [above=true]
   * @returns {this}
   */
  showAbove(above = true) {
    if (above) {
      this._options.show_above_text = true;
    } else {
      delete this._options.show_above_text;
    }
    return this;
  }

  /**
   * Position the link preview card ABOVE the message text (alias)
   * @param {boolean} [above=true]
   * @returns {this}
   */
  aboveText(above = true) {
    return this.showAbove(above);
  }

  /**
   * Position the link preview card BELOW the message text
   * @param {boolean} [below=true]
   * @returns {this}
   */
  showBelow(below = true) {
    if (below) {
      delete this._options.show_above_text;
    } else {
      this._options.show_above_text = true;
    }
    return this;
  }

  /**
   * Position the link preview card BELOW the message text (alias)
   * @param {boolean} [below=true]
   * @returns {this}
   */
  belowText(below = true) {
    return this.showBelow(below);
  }

  /**
   * Disable the link preview entirely (alias)
   * @param {boolean} [disabled=true]
   * @returns {this}
   */
  disabled(disabled = true) {
    return this.disable(disabled);
  }

  /**
   * Enable the link preview
   * @returns {this}
   */
  enable() {
    return this.disable(false);
  }

  /**
   * Returns LinkPreviewOptions payload object
   * @returns {object}
   */
  toJSON() {
    const res = {};
    if (this._options.is_disabled !== undefined && this._options.is_disabled !== null) {
      res.is_disabled = Boolean(this._options.is_disabled);
    }
    if (this._options.url) {
      res.url = String(this._options.url);
    }
    if (this._options.prefer_small_media) {
      res.prefer_small_media = true;
    }
    if (this._options.prefer_large_media) {
      res.prefer_large_media = true;
    }
    if (this._options.show_above_text) {
      res.show_above_text = true;
    }
    return res;
  }

  /**
   * Wraps as Telegram extra parameter
   * @returns {{ link_preview_options: object }}
   */
  toExtra() {
    return {
      link_preview_options: this.toJSON(),
    };
  }

  // --- Static Factory Methods ---

  /**
   * Create LinkPreview builder instance
   * @param {string|object} [urlOrOptions]
   * @param {object} [options]
   * @returns {LinkPreview}
   */
  static create(urlOrOptions, options = {}) {
    if (typeof urlOrOptions === 'string') {
      const lp = new LinkPreview(options);
      lp.url(urlOrOptions);
      return lp;
    }
    if (typeof urlOrOptions === 'object' && urlOrOptions !== null) {
      return new LinkPreview({ ...urlOrOptions, ...options });
    }
    return new LinkPreview(options);
  }

  /**
   * Create LinkPreview with options
   * @param {object} options
   * @returns {LinkPreview}
   */
  static options(options = {}) {
    return new LinkPreview(options);
  }

  /**
   * Create disabled link preview options
   * @returns {LinkPreview}
   */
  static disabled() {
    return new LinkPreview({ is_disabled: true });
  }

  /**
   * Create link preview with small media thumbnail
   * @param {string} [url]
   * @param {boolean} [showAbove=false]
   * @returns {LinkPreview}
   */
  static small(url, showAbove = false) {
    const lp = new LinkPreview({ prefer_small_media: true, show_above_text: Boolean(showAbove) });
    if (url) lp.url(url);
    return lp;
  }

  /**
   * Create link preview with large media card
   * @param {string} [url]
   * @param {boolean} [showAbove=false]
   * @returns {LinkPreview}
   */
  static large(url, showAbove = false) {
    const lp = new LinkPreview({ prefer_large_media: true, show_above_text: Boolean(showAbove) });
    if (url) lp.url(url);
    return lp;
  }

  /**
   * Create link preview positioned above message text
   * @param {string} [url]
   * @param {object} [options]
   * @returns {LinkPreview}
   */
  static above(url, options = {}) {
    const lp = new LinkPreview({ show_above_text: true, ...options });
    if (url) lp.url(url);
    return lp;
  }

  /**
   * Create link preview positioned below message text
   * @param {string} [url]
   * @param {object} [options]
   * @returns {LinkPreview}
   */
  static below(url, options = {}) {
    const lp = new LinkPreview({ show_above_text: false, ...options });
    if (url) lp.url(url);
    return lp;
  }
}
