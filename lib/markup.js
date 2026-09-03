/**
 * Telegix - Keyboard & Markup Builder
 * @module telegix/markup
 */

export class KeyboardBuilder {
  constructor(buttons = []) {
    this.keyboard = Array.isArray(buttons) ? buttons : [];
    this.is_persistent = false;
    this.resize_keyboard = true;
    this.one_time_keyboard = false;
    this.input_field_placeholder = undefined;
    this.selective = false;
  }

  /**
   * Returns reply_markup object directly
   */
  get reply_markup() {
    return this.toJSON();
  }

  /**
   * Resizes keyboard vertically for optimal fit
   * @param {boolean} [resize=true]
   * @returns {this}
   */
  resize(resize = true) {
    this.resize_keyboard = Boolean(resize);
    return this;
  }

  /**
   * Requests clients to always show the keyboard when the regular keyboard is hidden
   * @param {boolean} [persistent=true]
   * @returns {this}
   */
  persistent(persistent = true) {
    this.is_persistent = Boolean(persistent);
    return this;
  }

  /**
   * Requests clients to hide the keyboard as soon as it's been used
   * @param {boolean} [oneTime=true]
   * @returns {this}
   */
  oneTime(oneTime = true) {
    this.one_time_keyboard = Boolean(oneTime);
    return this;
  }

  /**
   * The placeholder to be shown in the input field when the keyboard is active
   * @param {string} placeholder
   * @returns {this}
   */
  placeholder(placeholder) {
    this.input_field_placeholder = placeholder;
    return this;
  }

  /**
   * Use this parameter if you want to show the keyboard to specific users only
   * @param {boolean} [selective=true]
   * @returns {this}
   */
  selectiveTarget(selective = true) {
    this.selective = Boolean(selective);
    return this;
  }

  /**
   * Returns standard Telegram ReplyKeyboardMarkup object
   * @returns {object}
   */
  toJSON() {
    return {
      keyboard: this.keyboard,
      is_persistent: this.is_persistent,
      resize_keyboard: this.resize_keyboard,
      one_time_keyboard: this.one_time_keyboard,
      input_field_placeholder: this.input_field_placeholder,
      selective: this.selective,
    };
  }
}

export class Markup {
  /**
   * Create custom reply keyboard markup
   * @param {Array<Array<object|string>|object|string>} buttons
   * @param {object} [options]
   * @returns {KeyboardBuilder}
   */
  static keyboard(buttons = [], options = {}) {
    const formatted = Array.isArray(buttons)
      ? buttons.map((row) => {
          const rowArr = Array.isArray(row) ? row : [row];
          return rowArr.map((btn) => (typeof btn === 'string' ? { text: btn } : btn));
        })
      : [];
    const builder = new KeyboardBuilder(formatted);
    if (options.resize !== undefined) builder.resize(options.resize);
    if (options.oneTime !== undefined) builder.oneTime(options.oneTime);
    if (options.persistent !== undefined) builder.persistent(options.persistent);
    if (options.placeholder !== undefined) builder.placeholder(options.placeholder);
    if (options.selective !== undefined) builder.selectiveTarget(options.selective);
    return builder;
  }

  /**
   * Create inline keyboard markup
   * @param {Array<Array<object>|object>} buttons
   * @returns {{ inline_keyboard: Array<Array<object>>, reply_markup: { inline_keyboard: Array<Array<object>> } }}
   */
  static inlineKeyboard(buttons = []) {
    const inline_keyboard = Array.isArray(buttons)
      ? buttons.map((row) => {
          const rowArr = Array.isArray(row) ? row : [row];
          return rowArr.map((btn) => (typeof btn === 'string' ? { text: btn, callback_data: btn } : btn));
        })
      : [];
    return {
      inline_keyboard,
      reply_markup: { inline_keyboard },
    };
  }

  /**
   * Requests clients to remove the custom keyboard
   * @param {boolean} [selective=false]
   * @returns {{ remove_keyboard: true, selective: boolean, reply_markup: { remove_keyboard: true, selective: boolean } }}
   */
  static removeKeyboard(selective = false) {
    const res = {
      remove_keyboard: true,
      selective: Boolean(selective),
    };
    return {
      ...res,
      reply_markup: res,
    };
  }

  /**
   * Displays a reply interface to the user
   * @param {boolean} [selective=false]
   * @param {string} [placeholder]
   * @returns {{ force_reply: true, selective: boolean, input_field_placeholder?: string, reply_markup: object }}
   */
  static forceReply(selective = false, placeholder = undefined) {
    const res = {
      force_reply: true,
      selective: Boolean(selective),
    };
    if (placeholder) {
      res.input_field_placeholder = placeholder;
    }
    return {
      ...res,
      reply_markup: res,
    };
  }

  /**
   * Button builders
   */
  static button = {
    /**
     * Standard text button for reply keyboard
     * @param {string} text
     * @param {object} [options]
     */
    text: (text, options = {}) => ({ text, ...options }),

    /**
     * Inline callback button
     * @param {string} text
     * @param {string|number} data
     * @param {object} [options]
     */
    callback: (text, data, options = {}) => ({ text, callback_data: String(data), ...options }),

    /**
     * Inline URL button
     * @param {string} text
     * @param {string} url
     * @param {object} [options]
     */
    url: (text, url, options = {}) => ({ text, url, ...options }),

    /**
     * Primary colored button (Blue / Main Action - Bot API 9.4+)
     * @param {string} text
     * @param {string|number|object} [dataOrUrl]
     * @param {object} [options]
     */
    primary: (text, dataOrUrl, options = {}) => {
      let base = {};
      if (typeof dataOrUrl === 'string') {
        if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
          base = { url: dataOrUrl };
        } else {
          base = { callback_data: dataOrUrl };
        }
      } else if (typeof dataOrUrl === 'number') {
        base = { callback_data: String(dataOrUrl) };
      } else if (typeof dataOrUrl === 'object' && dataOrUrl !== null) {
        base = dataOrUrl;
      }
      return {
        text,
        style: 'primary',
        ...base,
        ...options,
      };
    },

    /**
     * Danger colored button (Red / Destructive Action - Bot API 9.4+)
     * @param {string} text
     * @param {string|number|object} [dataOrUrl]
     * @param {object} [options]
     */
    danger: (text, dataOrUrl, options = {}) => {
      let base = {};
      if (typeof dataOrUrl === 'string') {
        if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
          base = { url: dataOrUrl };
        } else {
          base = { callback_data: dataOrUrl };
        }
      } else if (typeof dataOrUrl === 'number') {
        base = { callback_data: String(dataOrUrl) };
      } else if (typeof dataOrUrl === 'object' && dataOrUrl !== null) {
        base = dataOrUrl;
      }
      return {
        text,
        style: 'danger',
        ...base,
        ...options,
      };
    },

    /**
     * Success colored button (Green / Positive Action - Bot API 9.4+)
     * @param {string} text
     * @param {string|number|object} [dataOrUrl]
     * @param {object} [options]
     */
    success: (text, dataOrUrl, options = {}) => {
      let base = {};
      if (typeof dataOrUrl === 'string') {
        if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
          base = { url: dataOrUrl };
        } else {
          base = { callback_data: dataOrUrl };
        }
      } else if (typeof dataOrUrl === 'number') {
        base = { callback_data: String(dataOrUrl) };
      } else if (typeof dataOrUrl === 'object' && dataOrUrl !== null) {
        base = dataOrUrl;
      }
      return {
        text,
        style: 'success',
        ...base,
        ...options,
      };
    },

    /**
     * Generic colored button helper (Bot API 9.4+)
     * @param {string} text
     * @param {'primary'|'danger'|'success'} style
     * @param {string|number|object} [dataOrUrl]
     * @param {object} [options]
     */
    colored: (text, style, dataOrUrl, options = {}) => {
      let base = {};
      if (typeof dataOrUrl === 'string') {
        if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
          base = { url: dataOrUrl };
        } else {
          base = { callback_data: dataOrUrl };
        }
      } else if (typeof dataOrUrl === 'number') {
        base = { callback_data: String(dataOrUrl) };
      } else if (typeof dataOrUrl === 'object' && dataOrUrl !== null) {
        base = dataOrUrl;
      }
      return {
        text,
        style,
        ...base,
        ...options,
      };
    },

    /**
     * Web App button
     * @param {string} text
     * @param {string} url
     */
    webApp: (text, url) => ({ text, web_app: { url } }),

    /**
     * Request user contact (reply keyboard only)
     * @param {string} text
     */
    contactRequest: (text) => ({ text, request_contact: true }),

    /**
     * Request user location (reply keyboard only)
     * @param {string} text
     */
    locationRequest: (text) => ({ text, request_location: true }),

    /**
     * Request user poll (reply keyboard only)
     * @param {string} text
     * @param {'quiz'|'regular'|string} [type]
     */
    pollRequest: (text, type) => ({
      text,
      request_poll: type ? { type } : {},
    }),

    /**
     * Switch to inline query button
     * @param {string} text
     * @param {string} [query='']
     */
    switchToChat: (text, query = '') => ({
      text,
      switch_inline_query: query,
    }),

    /**
     * Switch to inline query in current chat button
     * @param {string} text
     * @param {string} [query='']
     */
    switchToCurrentChat: (text, query = '') => ({
      text,
      switch_inline_query_current_chat: query,
    }),

    /**
     * Login URL button
     * @param {string} text
     * @param {string} url
     * @param {object} [options]
     */
    login: (text, url, options = {}) => ({
      text,
      login_url: { url, ...options },
    }),

    /**
     * Pay button (must be the very first button in the first row of an invoice inline keyboard)
     * @param {string} [text='Pay']
     */
    pay: (text = 'Pay') => ({
      text,
      pay: true,
    }),

    /**
     * Copy text button (copies copyText directly to clipboard on click)
     * @param {string} text
     * @param {string} copyText
     */
    copyText: (text, copyText) => ({
      text,
      copy_text: { text: String(copyText) },
    }),

    /**
     * Request users button (reply keyboard only)
     * @param {string} text
     * @param {number} requestId
     * @param {object} [options]
     */
    requestUsers: (text, requestId, options = {}) => ({
      text,
      request_users: { request_id: requestId, ...options },
    }),

    /**
     * Request chat button (reply keyboard only)
     * @param {string} text
     * @param {number} requestId
     * @param {boolean} [chatIsChannel=false]
     * @param {object} [options]
     */
    requestChat: (text, requestId, chatIsChannel = false, options = {}) => ({
      text,
      request_chat: { request_id: requestId, chat_is_channel: Boolean(chatIsChannel), ...options },
    }),

    /**
     * Switch to inline query chosen chat button
     * @param {string} text
     * @param {string} [query='']
     * @param {object} [options]
     */
    switchInlineQueryChosenChat: (text, query = '', options = {}) => ({
      text,
      switch_inline_query_chosen_chat: { query, ...options },
    }),

    /**
     * Play Game button
     * @param {string} [text='Play Game']
     */
    game: (text = 'Play Game') => ({
      text,
      callback_game: {},
    }),

    /**
     * Disabled button (Bot API 10.3)
     * @param {string} text
     */
    disabled: (text) => ({
      text,
      disabled: true,
    }),
  };
}
