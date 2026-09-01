/**
 * Telegix - Middleware Composer and Router
 * @module telegix/composer
 */

/**
 * Compose multiple middlewares into a single middleware function
 * @param {Array<Function>} middlewares
 * @returns {Function}
 */
export function compose(middlewares) {
  if (!Array.isArray(middlewares)) {
    throw new TypeError('Middleware stack must be an array of functions');
  }
  for (const fn of middlewares) {
    if (typeof fn !== 'function') {
      throw new TypeError('Middleware must be a function');
    }
  }

  return function (context, next) {
    let index = -1;
    function dispatch(i) {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times in middleware'));
      }
      index = i;
      let fn = middlewares[i];
      if (i === middlewares.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return dispatch(0);
  };
}

/**
 * Check if trigger (string, RegExp, or Function) matches text
 * @param {string|RegExp|Function} trigger
 * @param {string} text
 * @returns {any} Match result or boolean
 */
function matchTrigger(trigger, text) {
  if (!text && text !== '') return null;
  if (typeof trigger === 'string') {
    return text === trigger ? [text] : null;
  }
  if (trigger instanceof RegExp) {
    return text.match(trigger);
  }
  if (typeof trigger === 'function') {
    return trigger(text);
  }
  return null;
}

export class Composer {
  constructor(...middlewares) {
    this.middlewares = [];
    this.use(...middlewares);
  }

  /**
   * Register one or more middleware functions
   * @param {...Function} middlewares
   * @returns {this}
   */
  use(...middlewares) {
    for (const mw of middlewares) {
      if (mw instanceof Composer) {
        this.middlewares.push(mw.middleware());
      } else if (typeof mw === 'function') {
        this.middlewares.push(mw);
      } else {
        throw new TypeError('Composer.use() expects functions or Composer instances');
      }
    }
    return this;
  }

  /**
   * Returns composed middleware function
   * @returns {Function}
   */
  middleware() {
    return (ctx, next) => {
      const fn = compose(this.middlewares);
      return fn(ctx, next);
    };
  }

  /**
   * Filter updates based on updateType or sub-filters (e.g. 'text', 'photo', 'callback_query')
   * @param {string|Array<string>} updateTypes
   * @param {...Function} middlewares
   * @returns {this}
   */
  on(updateTypes, ...middlewares) {
    const types = Array.isArray(updateTypes) ? updateTypes : [updateTypes];
    const handler = compose(middlewares);

    return this.use((ctx, next) => {
      for (const type of types) {
        if (this._matchesUpdateType(ctx, type)) {
          return handler(ctx, next);
        }
      }
      return next();
    });
  }

  /**
   * @private
   */
  _matchesUpdateType(ctx, type) {
    if (!type) return false;

    // Check top-level updateType
    if (ctx.updateType === type || ctx.update[type]) return true;

    const [mainType, subType] = type.split(':');

    // If matching shorthand like 'text', 'photo', 'document', 'sticker', 'video', etc.
    if (!subType) {
      if (ctx.message && mainType in ctx.message) return true;
      if (mainType === 'text' && typeof ctx.message?.text === 'string') return true;
      return false;
    }

    // Match sub-filter like 'message:text', 'message:photo', 'channel_post:text'
    const targetObj = ctx.update[mainType];
    if (targetObj && typeof targetObj === 'object') {
      if (subType in targetObj) return true;
      if (subType === 'text' && typeof targetObj.text === 'string') return true;
    }

    return false;
  }

  /**
   * Handle Telegram slash commands (e.g. /start, /help, /settings)
   * @param {string|RegExp|Array<string|RegExp>} commands
   * @param {...Function} middlewares
   * @returns {this}
   */
  command(commands, ...middlewares) {
    const list = Array.isArray(commands) ? commands : [commands];
    const handler = compose(middlewares);

    return this.use((ctx, next) => {
      const text = ctx.message?.text || ctx.channelPost?.text;
      if (!text || !text.startsWith('/')) return next();

      const [rawCommandWithEntity, ...args] = text.trim().split(/\s+/);
      const rawCommand = rawCommandWithEntity.slice(1);
      const [cmdName, botUsername] = rawCommand.split('@');

      // Check if command is addressed to another bot specifically
      if (botUsername && ctx.botInfo?.username) {
        if (botUsername.toLowerCase() !== ctx.botInfo.username.toLowerCase()) {
          return next();
        }
      }

      for (const trigger of list) {
        let isMatch = false;
        let matchResult = null;

        if (typeof trigger === 'string') {
          const cleanTrigger = trigger.startsWith('/') ? trigger.slice(1) : trigger;
          if (cmdName.toLowerCase() === cleanTrigger.toLowerCase()) {
            isMatch = true;
            matchResult = [rawCommandWithEntity, args.join(' ')];
          }
        } else if (trigger instanceof RegExp) {
          matchResult = cmdName.match(trigger);
          if (matchResult) isMatch = true;
        }

        if (isMatch) {
          ctx.command = cmdName;
          ctx.payload = args.join(' ');
          ctx.match = matchResult;
          return handler(ctx, next);
        }
      }

      return next();
    });
  }

  /**
   * Match string or RegExp against message text or caption
   * @param {string|RegExp|Function|Array<string|RegExp>} triggers
   * @param {...Function} middlewares
   * @returns {this}
   */
  hears(triggers, ...middlewares) {
    const list = Array.isArray(triggers) ? triggers : [triggers];
    const handler = compose(middlewares);

    return this.use((ctx, next) => {
      const text = ctx.message?.text || ctx.message?.caption;
      if (!text) return next();

      for (const trigger of list) {
        const match = matchTrigger(trigger, text);
        if (match) {
          ctx.match = match;
          return handler(ctx, next);
        }
      }

      return next();
    });
  }

  /**
   * Match string or RegExp against callbackQuery.data
   * @param {string|RegExp|Function|Array<string|RegExp>} triggers
   * @param {...Function} middlewares
   * @returns {this}
   */
  action(triggers, ...middlewares) {
    const list = Array.isArray(triggers) ? triggers : [triggers];
    const handler = compose(middlewares);

    return this.use((ctx, next) => {
      const data = ctx.callbackQuery?.data;
      if (data === undefined || data === null) return next();

      for (const trigger of list) {
        const match = matchTrigger(trigger, data);
        if (match) {
          ctx.match = match;
          return handler(ctx, next);
        }
      }

      return next();
    });
  }

  /**
   * Match string or RegExp against inlineQuery.query
   * @param {string|RegExp|Function|Array<string|RegExp>} triggers
   * @param {...Function} middlewares
   * @returns {this}
   */
  inlineQuery(triggers, ...middlewares) {
    const list = Array.isArray(triggers) ? triggers : [triggers];
    const handler = compose(middlewares);

    return this.use((ctx, next) => {
      const query = ctx.inlineQuery?.query;
      if (query === undefined || query === null) return next();

      for (const trigger of list) {
        const match = matchTrigger(trigger, query);
        if (match) {
          ctx.match = match;
          return handler(ctx, next);
        }
      }

      return next();
    });
  }

  /**
   * Conditional middleware execution
   * @param {Function} predicate
   * @param {...Function} middlewares
   */
  filter(predicate, ...middlewares) {
    const handler = compose(middlewares);
    return this.use(async (ctx, next) => {
      const pass = await predicate(ctx);
      if (pass) {
        return handler(ctx, next);
      }
      return next();
    });
  }

  /**
   * Drop updates that match predicate
   * @param {Function} predicate
   * @param {...Function} middlewares
   */
  drop(predicate, ...middlewares) {
    return this.filter(async (ctx) => !(await predicate(ctx)), ...middlewares);
  }

  /**
   * Branch middleware based on predicate
   * @param {Function} predicate
   * @param {Function} trueMiddleware
   * @param {Function} [falseMiddleware]
   */
  branch(predicate, trueMiddleware, falseMiddleware = (ctx, next) => next()) {
    return this.use(async (ctx, next) => {
      const pass = await predicate(ctx);
      return pass ? trueMiddleware(ctx, next) : falseMiddleware(ctx, next);
    });
  }

  /**
   * Filter updates by chat type ('private', 'group', 'supergroup', 'channel')
   * @param {string|Array<string>} types
   * @param {...Function} middlewares
   */
  chatType(types, ...middlewares) {
    const list = Array.isArray(types) ? types : [types];
    return this.filter((ctx) => {
      const chatType = ctx.chat?.type;
      return chatType && list.includes(chatType);
    }, ...middlewares);
  }

  /**
   * Filter Telegram Business updates (business_connection, business_message, edited_business_message)
   * @param {...Function} middlewares
   */
  business(...middlewares) {
    return this.filter((ctx) => {
      return Boolean(
        ctx.businessConnection ||
        ctx.businessMessage ||
        ctx.editedBusinessMessage ||
        ctx.deletedBusinessMessages
      );
    }, ...middlewares);
  }

  /**
   * Filter emoji reaction updates (message_reaction, message_reaction_count)
   * @param {...Function} middlewares
   */
  reaction(...middlewares) {
    return this.filter((ctx) => {
      return Boolean(ctx.messageReaction || ctx.messageReactionCount);
    }, ...middlewares);
  }

  /**
   * Filter chat boost updates (chat_boost, removed_chat_boost)
   * @param {...Function} middlewares
   */
  boost(...middlewares) {
    return this.filter((ctx) => {
      return Boolean(ctx.chatBoost || ctx.removedChatBoost);
    }, ...middlewares);
  }

  /**
   * Filter forum topic updates or messages inside forum topics
   * @param {...Function} middlewares
   */
  forumTopic(...middlewares) {
    return this.filter((ctx) => {
      return Boolean(
        ctx.topicId ||
        ctx.message?.forum_topic_created ||
        ctx.message?.forum_topic_edited ||
        ctx.message?.forum_topic_closed ||
        ctx.message?.forum_topic_reopened ||
        ctx.message?.general_forum_topic_hidden ||
        ctx.message?.general_forum_topic_unhidden
      );
    }, ...middlewares);
  }

  /**
   * Filter paid media updates (purchased_paid_media or messages with paid_media)
   * @param {...Function} middlewares
   */
  paidMedia(...middlewares) {
    return this.filter((ctx) => {
      return Boolean(
        ctx.purchasedPaidMedia ||
        ctx.message?.paid_media ||
        ctx.channelPost?.paid_media
      );
    }, ...middlewares);
  }

  /**
   * Filter messages containing specific entity types (e.g. 'url', 'mention', 'hashtag', 'email', 'custom_emoji')
   * @param {string|Array<string>} entityTypes
   * @param {...Function} middlewares
   */
  entity(entityTypes, ...middlewares) {
    const list = Array.isArray(entityTypes) ? entityTypes : [entityTypes];
    const handler = compose(middlewares);

    return this.use((ctx, next) => {
      const entities = ctx.entities;
      if (!entities || entities.length === 0) return next();

      const matched = entities.filter((e) => list.includes(e.type));
      if (matched.length > 0) {
        ctx.matchedEntities = matched;
        return handler(ctx, next);
      }

      return next();
    });
  }

  /**
   * Static helper to compose middlewares without creating a Composer instance
   */
  static compose = compose;
}
