/**
 * Telegix - Ephemeral Messages Engine (Telegram Bot API 10.3)
 * Provides EphemeralMessageParameters class and helpers for temporary / disappearing messages.
 * @module telegix/ephemeral
 */

export class EphemeralMessageParameters {
  /**
   * @param {object|number} [options={}]
   * @param {number} [options.lifetime] - Message lifetime in seconds before disappearing
   * @param {number} [options.lifetime_seconds] - Alias for lifetime
   * @param {number} [options.receiver_user_id] - User identifier who sees the message
   * @param {string} [options.callback_query_id] - Callback query identifier
   * @param {boolean} [options.replace_callback_query_message=false] - Replace original callback message
   */
  constructor(options = {}) {
    if (typeof options === 'number') {
      this.lifetime = options;
      this.receiver_user_id = undefined;
      this.callback_query_id = undefined;
      this.replace_callback_query_message = false;
    } else if (options && typeof options === 'object') {
      this.lifetime = options.lifetime ?? options.lifetime_seconds;
      this.receiver_user_id = options.receiver_user_id ?? options.receiver;
      this.callback_query_id = options.callback_query_id ?? options.callbackQueryId;
      this.replace_callback_query_message = Boolean(
        options.replace_callback_query_message ?? options.replaceMessage ?? false
      );
    }
  }

  /**
   * Set lifetime in seconds
   * @param {number} seconds
   * @returns {this}
   */
  setLifetime(seconds) {
    this.lifetime = seconds;
    return this;
  }

  /**
   * Set lifetime in seconds (fluent alias)
   * @param {number} seconds
   * @returns {this}
   */
  lifetime(seconds) {
    this.lifetime = seconds;
    return this;
  }

  /**
   * Target specific receiver user ID
   * @param {number|string} userId
   * @returns {this}
   */
  receiver(userId) {
    this.receiver_user_id = Number(userId);
    return this;
  }

  /**
   * Associate with callback query
   * @param {string} queryId
   * @returns {this}
   */
  callbackQuery(queryId) {
    this.callback_query_id = String(queryId);
    return this;
  }

  /**
   * Allow bots to show an ephemeral message in place of the original message (Bot API 10.3)
   * @param {boolean} [replace=true]
   * @returns {this}
   */
  replaceCallbackQueryMessage(replace = true) {
    this.replace_callback_query_message = Boolean(replace);
    return this;
  }

  /**
   * Convert to Telegram API payload JSON object
   * @returns {object}
   */
  toJSON() {
    const res = {};
    if (this.lifetime !== undefined && this.lifetime !== null) {
      res.lifetime = Number(this.lifetime);
    }
    if (this.receiver_user_id !== undefined && this.receiver_user_id !== null) {
      res.receiver_user_id = Number(this.receiver_user_id);
    }
    if (this.callback_query_id !== undefined && this.callback_query_id !== null) {
      res.callback_query_id = String(this.callback_query_id);
    }
    if (this.replace_callback_query_message) {
      res.replace_callback_query_message = true;
    }
    return res;
  }

  /**
   * Factory method to create parameters
   * @param {object|number} [options]
   * @returns {EphemeralMessageParameters}
   */
  static create(options) {
    return new EphemeralMessageParameters(options);
  }

  /**
   * Create ephemeral parameters replacing the callback query message
   * @param {string} callbackQueryId
   * @param {object} [options]
   * @returns {EphemeralMessageParameters}
   */
  static replace(callbackQueryId, options = {}) {
    return new EphemeralMessageParameters({
      callback_query_id: callbackQueryId,
      replace_callback_query_message: true,
      ...options,
    });
  }

  /**
   * Create ephemeral parameters for a specific receiver user
   * @param {number|string} userId
   * @param {number} [lifetimeSeconds=60]
   * @param {object} [options]
   * @returns {EphemeralMessageParameters}
   */
  static forUser(userId, lifetimeSeconds = 60, options = {}) {
    return new EphemeralMessageParameters({
      receiver_user_id: userId,
      lifetime: lifetimeSeconds,
      ...options,
    });
  }
}

/**
 * Telegram Bot API ReplyParameters class (Bot API 10.2+)
 * Describes reply parameters for a message, including replying to ephemeral messages.
 */
export class ReplyParameters {
  /**
   * @param {number|object} [messageIdOrOptions]
   * @param {number} [ephemeralMessageId]
   */
  constructor(messageIdOrOptions = {}, ephemeralMessageId) {
    if (typeof messageIdOrOptions === 'number') {
      this.message_id = messageIdOrOptions;
      if (ephemeralMessageId !== undefined) {
        this.ephemeral_message_id = ephemeralMessageId;
      }
    } else if (messageIdOrOptions && typeof messageIdOrOptions === 'object') {
      this.message_id = messageIdOrOptions.message_id ?? messageIdOrOptions.messageId;
      this.chat_id = messageIdOrOptions.chat_id ?? messageIdOrOptions.chatId;
      this.allow_sending_without_reply = Boolean(
        messageIdOrOptions.allow_sending_without_reply ?? messageIdOrOptions.allowSendingWithoutReply
      );
      this.quote = messageIdOrOptions.quote;
      this.quote_parse_mode = messageIdOrOptions.quote_parse_mode ?? messageIdOrOptions.quoteParseMode;
      this.quote_entities = messageIdOrOptions.quote_entities ?? messageIdOrOptions.quoteEntities;
      this.quote_position = messageIdOrOptions.quote_position ?? messageIdOrOptions.quotePosition;
      this.ephemeral_message_id = messageIdOrOptions.ephemeral_message_id ?? messageIdOrOptions.ephemeralMessageId ?? ephemeralMessageId;
      this.checklist_task_id = messageIdOrOptions.checklist_task_id ?? messageIdOrOptions.checklistTaskId;
      this.poll_option_id = messageIdOrOptions.poll_option_id ?? messageIdOrOptions.pollOptionId;
      this.is_ephemeral = messageIdOrOptions.is_ephemeral ?? messageIdOrOptions.isEphemeral;
    }
  }

  /**
   * Set ephemeral message ID to reply to (Bot API 10.2)
   * @param {number} id
   * @returns {this}
   */
  setEphemeralMessageId(id) {
    this.ephemeral_message_id = id;
    return this;
  }

  /**
   * Set ephemeral message ID (fluent alias)
   * @param {number} id
   * @returns {this}
   */
  ephemeralMessageId(id) {
    return this.setEphemeralMessageId(id);
  }

  /**
   * Set target message ID
   * @param {number} id
   * @returns {this}
   */
  messageId(id) {
    this.message_id = id;
    return this;
  }

  /**
   * Set target chat ID
   * @param {number|string} chatId
   * @returns {this}
   */
  chatId(chatId) {
    this.chat_id = chatId;
    return this;
  }

  /**
   * Allow sending without reply if original message is deleted
   * @param {boolean} [allow=true]
   * @returns {this}
   */
  allowWithoutReply(allow = true) {
    this.allow_sending_without_reply = Boolean(allow);
    return this;
  }

  /**
   * Quote a part of the original message
   * @param {string} text
   * @param {object} [options={}]
   * @returns {this}
   */
  quoteText(text, options = {}) {
    this.quote = String(text);
    if (options.parse_mode) this.quote_parse_mode = options.parse_mode;
    if (options.position !== undefined) this.quote_position = options.position;
    return this;
  }

  /**
   * Convert to Telegram API payload JSON object
   * @returns {object}
   */
  toJSON() {
    const res = {};
    if (this.message_id !== undefined && this.message_id !== null) {
      res.message_id = Number(this.message_id);
    }
    if (this.chat_id !== undefined && this.chat_id !== null) {
      res.chat_id = this.chat_id;
    }
    if (this.allow_sending_without_reply) {
      res.allow_sending_without_reply = true;
    }
    if (this.quote !== undefined && this.quote !== null) {
      res.quote = String(this.quote);
    }
    if (this.quote_parse_mode) {
      res.quote_parse_mode = this.quote_parse_mode;
    }
    if (this.quote_entities) {
      res.quote_entities = this.quote_entities;
    }
    if (this.quote_position !== undefined && this.quote_position !== null) {
      res.quote_position = Number(this.quote_position);
    }
    if (this.ephemeral_message_id !== undefined && this.ephemeral_message_id !== null) {
      res.ephemeral_message_id = Number(this.ephemeral_message_id);
    }
    if (this.checklist_task_id !== undefined && this.checklist_task_id !== null) {
      res.checklist_task_id = Number(this.checklist_task_id);
    }
    if (this.poll_option_id !== undefined && this.poll_option_id !== null) {
      res.poll_option_id = this.poll_option_id;
    }
    if (this.is_ephemeral !== undefined && this.is_ephemeral !== null) {
      res.is_ephemeral = Boolean(this.is_ephemeral);
    }
    return res;
  }

  /**
   * Static factory to reply to a standard message
   * @param {number} messageId
   * @param {object} [options]
   * @returns {ReplyParameters}
   */
  static to(messageId, options = {}) {
    return new ReplyParameters({ message_id: messageId, ...options });
  }

  /**
   * Static factory to reply to an ephemeral message (Bot API 10.2)
   * @param {number} ephemeralMessageId
   * @param {object} [options]
   * @returns {ReplyParameters}
   */
  static ephemeral(ephemeralMessageId, options = {}) {
    return new ReplyParameters({ ephemeral_message_id: ephemeralMessageId, ...options });
  }
}

/**
 * Telegram Bot API BotCommand class (Bot API 10.2+)
 * Represents a bot command with optional is_ephemeral support for private bot command visibility.
 */
export class BotCommand {
  /**
   * @param {string} command - Text of the command; 1-32 characters
   * @param {string} description - Description of the command; 1-256 characters
   * @param {boolean} [is_ephemeral=false] - True, if the command should be ephemeral (Bot API 10.2)
   */
  constructor(command, description, is_ephemeral = false) {
    this.command = String(command || '').replace(/^\//, '').toLowerCase();
    this.description = String(description || '');
    this.is_ephemeral = Boolean(is_ephemeral);
  }

  /**
   * Mark command as ephemeral or not (Bot API 10.2)
   * @param {boolean} [val=true]
   * @returns {this}
   */
  ephemeral(val = true) {
    this.is_ephemeral = Boolean(val);
    return this;
  }

  toJSON() {
    return {
      command: this.command,
      description: this.description,
      ...(this.is_ephemeral ? { is_ephemeral: true } : {}),
    };
  }

  /**
   * Create a standard bot command
   * @param {string} command
   * @param {string} description
   * @param {boolean} [is_ephemeral=false]
   * @returns {BotCommand}
   */
  static create(command, description, is_ephemeral = false) {
    return new BotCommand(command, description, is_ephemeral);
  }

  /**
   * Create an ephemeral bot command (Bot API 10.2)
   * @param {string} command
   * @param {string} description
   * @returns {BotCommand}
   */
  static ephemeral(command, description) {
    return new BotCommand(command, description, true);
  }
}
