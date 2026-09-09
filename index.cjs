var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.js
var index_exports = {};
__export(index_exports, {
  BaseScene: () => BaseScene,
  BotCommand: () => BotCommand,
  Composer: () => Composer,
  Context: () => Context,
  EphemeralMessageParameters: () => EphemeralMessageParameters,
  FileSessionStore: () => FileSessionStore,
  Format: () => Format,
  I18n: () => I18n,
  InlineQueryResultBuilder: () => InlineQueryResultBuilder,
  InputMediaVoiceNote: () => InputMediaVoiceNote,
  InputRichBlockAnchor: () => InputRichBlockAnchor,
  InputRichBlockAnimation: () => InputRichBlockAnimation,
  InputRichBlockAudio: () => InputRichBlockAudio,
  InputRichBlockBlockQuotation: () => InputRichBlockBlockQuotation,
  InputRichBlockButtons: () => InputRichBlockButtons,
  InputRichBlockChecklist: () => InputRichBlockChecklist,
  InputRichBlockCollage: () => InputRichBlockCollage,
  InputRichBlockDetails: () => InputRichBlockDetails,
  InputRichBlockDivider: () => InputRichBlockDivider,
  InputRichBlockDocument: () => InputRichBlockDocument,
  InputRichBlockExpandableBlockQuotation: () => InputRichBlockExpandableBlockQuotation,
  InputRichBlockFooter: () => InputRichBlockFooter,
  InputRichBlockList: () => InputRichBlockList,
  InputRichBlockListItem: () => InputRichBlockListItem,
  InputRichBlockMap: () => InputRichBlockMap,
  InputRichBlockMathematicalExpression: () => InputRichBlockMathematicalExpression,
  InputRichBlockParagraph: () => InputRichBlockParagraph,
  InputRichBlockPhoto: () => InputRichBlockPhoto,
  InputRichBlockPreformatted: () => InputRichBlockPreformatted,
  InputRichBlockPullQuotation: () => InputRichBlockPullQuotation,
  InputRichBlockSectionHeading: () => InputRichBlockSectionHeading,
  InputRichBlockSlideshow: () => InputRichBlockSlideshow,
  InputRichBlockTable: () => InputRichBlockTable,
  InputRichBlockThinking: () => InputRichBlockThinking,
  InputRichBlockVideo: () => InputRichBlockVideo,
  InputRichBlockVoiceNote: () => InputRichBlockVoiceNote,
  InputRichMessage: () => InputRichMessage,
  InputRichMessageMedia: () => InputRichMessageMedia,
  InvoiceBuilder: () => InvoiceBuilder,
  KeyboardBuilder: () => KeyboardBuilder,
  LinkPreview: () => LinkPreview,
  Markup: () => Markup,
  MediaVoiceNote: () => MediaVoiceNote,
  MemorySessionStore: () => MemorySessionStore,
  MiniApp: () => MiniApp,
  MiniAppLoadingScreen: () => MiniAppLoadingScreen,
  NetworkError: () => NetworkError,
  Polling: () => Polling,
  PollingError: () => PollingError,
  RateLimiter: () => RateLimiter,
  ReplyParameters: () => ReplyParameters,
  RichBlockAnchor: () => RichBlockAnchor,
  RichBlockAnimation: () => RichBlockAnimation,
  RichBlockAudio: () => RichBlockAudio,
  RichBlockBlockQuotation: () => RichBlockBlockQuotation,
  RichBlockButtons: () => RichBlockButtons,
  RichBlockChecklist: () => RichBlockChecklist,
  RichBlockCollage: () => RichBlockCollage,
  RichBlockDetails: () => RichBlockDetails,
  RichBlockDivider: () => RichBlockDivider,
  RichBlockDocument: () => RichBlockDocument,
  RichBlockExpandableBlockQuotation: () => RichBlockExpandableBlockQuotation,
  RichBlockFooter: () => RichBlockFooter,
  RichBlockList: () => RichBlockList,
  RichBlockListItem: () => RichBlockListItem,
  RichBlockMap: () => RichBlockMap,
  RichBlockMath: () => RichBlockMath,
  RichBlockMathematicalExpression: () => RichBlockMathematicalExpression,
  RichBlockParagraph: () => RichBlockParagraph,
  RichBlockPhoto: () => RichBlockPhoto,
  RichBlockPreformatted: () => RichBlockPreformatted,
  RichBlockPullQuotation: () => RichBlockPullQuotation,
  RichBlockPullQuote: () => RichBlockPullQuote,
  RichBlockSectionHeading: () => RichBlockSectionHeading,
  RichBlockSlideshow: () => RichBlockSlideshow,
  RichBlockTable: () => RichBlockTable,
  RichBlockThinking: () => RichBlockThinking,
  RichBlockVideo: () => RichBlockVideo,
  RichBlockVoiceNote: () => RichBlockVoiceNote,
  RichMessage: () => RichMessage,
  RichMessageBuilder: () => RichMessageBuilder,
  RichMessageButton: () => RichMessageButton,
  RichMessageMedia: () => RichMessageMedia,
  RichTextButton: () => RichTextButton,
  Scene: () => Scene,
  Stage: () => Stage,
  Table: () => Table,
  Telegix: () => Telegix,
  TelegixError: () => TelegixError,
  TelegixManager: () => TelegixManager,
  Telegram: () => Telegram,
  TelegramError: () => TelegramError,
  WizardScene: () => WizardScene,
  albumMiddleware: () => albumMiddleware,
  answerPreCheckoutQuery: () => answerPreCheckoutQuery,
  answerShippingQuery: () => answerShippingQuery,
  chatActionMiddleware: () => chatActionMiddleware,
  compose: () => compose,
  createMiniAppLaunchUrl: () => createMiniAppLaunchUrl,
  createWebhookCallback: () => createWebhookCallback,
  default: () => index_default,
  escapeHtml: () => escapeHtml,
  escapeMarkdown: () => escapeMarkdown,
  escapeMarkdownV2: () => escapeMarkdownV2,
  fmt: () => fmt,
  generateMiniAppLoadingScreen: () => generateMiniAppLoadingScreen,
  html: () => html,
  inlineDebounceMiddleware: () => inlineDebounceMiddleware,
  markdown: () => markdown,
  mdv2: () => mdv2,
  normalizeTelegramPayload: () => normalizeTelegramPayload,
  paginateInlineQuery: () => paginateInlineQuery,
  parseWebAppInitData: () => parseWebAppInitData,
  promptMiddleware: () => promptMiddleware,
  rateLimit: () => rateLimit,
  serializeMessage: () => serializeMessage,
  serializeUpdate: () => serializeUpdate,
  session: () => session,
  streamText: () => streamText,
  toTextStream: () => toTextStream,
  validateWebAppInitData: () => validateWebAppInitData
});
module.exports = __toCommonJS(index_exports);

// lib/composer.js
function compose(middlewares) {
  if (!Array.isArray(middlewares)) {
    throw new TypeError("Middleware stack must be an array of functions");
  }
  for (const fn of middlewares) {
    if (typeof fn !== "function") {
      throw new TypeError("Middleware must be a function");
    }
  }
  return function(context, next) {
    let index = -1;
    function dispatch(i) {
      if (i <= index) {
        return Promise.reject(new Error("next() called multiple times in middleware"));
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
function matchTrigger(trigger, text) {
  if (!text && text !== "") return null;
  if (typeof trigger === "string") {
    return text === trigger ? [text] : null;
  }
  if (trigger instanceof RegExp) {
    return text.match(trigger);
  }
  if (typeof trigger === "function") {
    return trigger(text);
  }
  return null;
}
var Composer = class _Composer {
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
      if (mw instanceof _Composer) {
        this.middlewares.push(mw.middleware());
      } else if (typeof mw === "function") {
        this.middlewares.push(mw);
      } else {
        throw new TypeError("Composer.use() expects functions or Composer instances");
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
    if (ctx.updateType === type || ctx.update[type]) return true;
    const [mainType, subType] = type.split(":");
    if (!subType) {
      if (ctx.message && mainType in ctx.message) return true;
      if (mainType === "text" && typeof ctx.message?.text === "string") return true;
      return false;
    }
    const targetObj = ctx.update[mainType];
    if (targetObj && typeof targetObj === "object") {
      if (subType in targetObj) return true;
      if (subType === "text" && typeof targetObj.text === "string") return true;
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
      if (!text || !text.startsWith("/")) return next();
      const [rawCommandWithEntity, ...args] = text.trim().split(/\s+/);
      const rawCommand = rawCommandWithEntity.slice(1);
      const [cmdName, botUsername] = rawCommand.split("@");
      if (botUsername && ctx.botInfo?.username) {
        if (botUsername.toLowerCase() !== ctx.botInfo.username.toLowerCase()) {
          return next();
        }
      }
      for (const trigger of list) {
        let isMatch = false;
        let matchResult = null;
        if (typeof trigger === "string") {
          const cleanTrigger = trigger.startsWith("/") ? trigger.slice(1) : trigger;
          if (cmdName.toLowerCase() === cleanTrigger.toLowerCase()) {
            isMatch = true;
            matchResult = [rawCommandWithEntity, args.join(" ")];
          }
        } else if (trigger instanceof RegExp) {
          matchResult = cmdName.match(trigger);
          if (matchResult) isMatch = true;
        }
        if (isMatch) {
          ctx.command = cmdName;
          ctx.payload = args.join(" ");
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
      if (data === void 0 || data === null) return next();
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
      if (query === void 0 || query === null) return next();
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
    return this.filter(async (ctx) => !await predicate(ctx), ...middlewares);
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
        ctx.businessConnection || ctx.businessMessage || ctx.editedBusinessMessage || ctx.deletedBusinessMessages
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
        ctx.topicId || ctx.message?.forum_topic_created || ctx.message?.forum_topic_edited || ctx.message?.forum_topic_closed || ctx.message?.forum_topic_reopened || ctx.message?.general_forum_topic_hidden || ctx.message?.general_forum_topic_unhidden
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
        ctx.purchasedPaidMedia || ctx.message?.paid_media || ctx.channelPost?.paid_media
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
};

// lib/errors.js
var TelegixError = class extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = "TelegixError";
  }
};
var TelegramError = class extends TelegixError {
  /**
   * @param {object} response - Telegram API response
   * @param {number} [response.error_code] - HTTP/Telegram error code (e.g. 400, 401, 403, 404, 429)
   * @param {string} [response.description] - Description from Telegram
   * @param {object} [response.parameters] - Extra parameters (e.g. retry_after, migrate_to_chat_id)
   * @param {string} [method] - The Telegram method that was called
   * @param {object} [payload] - The payload that was sent
   */
  constructor(response, method = "", payload = {}) {
    const errorCode = response?.error_code || 500;
    const description = response?.description || "Unknown Telegram API Error";
    super(`Telegram API Error [${errorCode}]: ${description} (Method: ${method})`);
    this.name = "TelegramError";
    this.errorCode = errorCode;
    this.description = description;
    this.parameters = response?.parameters || {};
    this.method = method;
    this.payload = payload;
    if (this.parameters.retry_after) {
      this.retryAfter = this.parameters.retry_after;
    }
    if (this.parameters.migrate_to_chat_id) {
      this.migrateToChatId = this.parameters.migrate_to_chat_id;
    }
  }
};
var NetworkError = class extends TelegixError {
  /**
   * @param {Error} error - Underlying network error
   * @param {string} [method] - The Telegram method
   */
  constructor(error, method = "") {
    super(`Network Error while calling ${method}: ${error.message}`);
    this.name = "NetworkError";
    this.cause = error;
    this.method = method;
  }
};
var PollingError = class extends TelegixError {
  /**
   * @param {Error} error - Original error
   */
  constructor(error) {
    super(`Polling Error: ${error.message}`);
    this.name = "PollingError";
    this.cause = error;
  }
};

// lib/stream.js
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function* toTextStream(input) {
  if (!input) return;
  if (typeof input === "string") {
    yield input;
    return;
  }
  if (typeof input.getReader === "function") {
    const reader = input.getReader();
    const decoder = new TextDecoder();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (typeof value === "string") {
          yield value;
        } else if (value) {
          yield decoder.decode(value, { stream: true });
        }
      }
    } finally {
      reader.releaseLock();
    }
    return;
  }
  if (typeof input[Symbol.asyncIterator] === "function") {
    for await (const chunk of input) {
      if (chunk === null || chunk === void 0) continue;
      if (typeof chunk === "string") {
        yield chunk;
      } else if (typeof chunk?.text === "string") {
        yield chunk.text;
      } else if (typeof chunk?.content === "string") {
        yield chunk.content;
      } else if (chunk?.choices?.[0]?.delta?.content) {
        yield chunk.choices[0].delta.content;
      } else if (chunk?.candidates?.[0]?.content?.parts?.[0]?.text) {
        yield chunk.candidates[0].content.parts[0].text;
      } else {
        yield String(chunk);
      }
    }
    return;
  }
  if (typeof input[Symbol.iterator] === "function") {
    for (const chunk of input) {
      if (chunk !== null && chunk !== void 0) {
        yield String(chunk);
      }
    }
    return;
  }
  yield String(input);
}
async function streamText(telegram, chatId, textStream, options = {}) {
  const {
    initialPlaceholder = "\u23F3 Thinking...",
    intervalMs = 600,
    minDeltaChars = 1,
    parse_mode,
    reply_markup,
    useDraft = false,
    signal,
    onChunk,
    onEdit,
    ...extra
  } = options;
  if (!telegram || typeof telegram.call !== "function") {
    throw new Error("Telegix streamText: valid telegram API instance is required.");
  }
  if (!chatId) {
    throw new Error("Telegix streamText: chatId is required.");
  }
  let accumulatedText = "";
  let lastSentText = "";
  let messageId = null;
  let lastEditTime = 0;
  let draftId = useDraft ? Math.floor(Math.random() * 2147483647) + 1 : null;
  const sendMsg = (cid, txt, opt = {}) => {
    if (typeof telegram.sendMessage === "function") {
      return telegram.sendMessage(cid, txt, opt);
    }
    return telegram.call("sendMessage", { chat_id: cid, text: txt, ...opt });
  };
  const editMsg = (cid, mid, txt, opt = {}) => {
    if (typeof telegram.editMessageText === "function") {
      return telegram.editMessageText(cid, mid, null, txt, opt);
    }
    return telegram.call("editMessageText", { chat_id: cid, message_id: mid, text: txt, ...opt });
  };
  const sendDraftMsg = (cid, txt, opt = {}) => {
    if (typeof telegram.sendMessageDraft === "function") {
      return telegram.sendMessageDraft(cid, txt, opt);
    }
    return telegram.call("sendMessageDraft", { chat_id: cid, text: txt, ...opt });
  };
  if (useDraft) {
    for await (const chunk of toTextStream(textStream)) {
      if (signal?.aborted) break;
      accumulatedText += chunk;
      if (typeof onChunk === "function") onChunk(accumulatedText, chunk);
      const now = Date.now();
      if (now - lastEditTime >= intervalMs && accumulatedText.length - lastSentText.length >= minDeltaChars) {
        lastEditTime = now;
        lastSentText = accumulatedText;
        try {
          await sendDraftMsg(chatId, accumulatedText, { draft_id: draftId, ...extra });
        } catch {
        }
      }
    }
    const finalMsg = await sendMsg(chatId, accumulatedText || "...", {
      parse_mode,
      reply_markup,
      ...extra
    });
    return {
      message_id: finalMsg?.message_id,
      text: accumulatedText,
      done: true,
      message: finalMsg
    };
  }
  const initialMsg = await sendMsg(chatId, initialPlaceholder, {
    ...extra
  });
  messageId = initialMsg?.message_id;
  try {
    for await (const chunk of toTextStream(textStream)) {
      if (signal?.aborted) break;
      accumulatedText += chunk;
      if (typeof onChunk === "function") onChunk(accumulatedText, chunk);
      const now = Date.now();
      const timeSinceLastEdit = now - lastEditTime;
      const charDelta = accumulatedText.length - lastSentText.length;
      if (timeSinceLastEdit >= intervalMs && charDelta >= minDeltaChars) {
        lastEditTime = now;
        lastSentText = accumulatedText;
        try {
          await editMsg(chatId, messageId, accumulatedText);
          if (typeof onEdit === "function") onEdit(messageId, accumulatedText);
        } catch (err) {
          if (!err?.message?.includes("message is not modified")) {
            if (err?.parameters?.retry_after) {
              await sleep(err.parameters.retry_after * 1e3);
            }
          }
        }
      }
    }
    const finalText = accumulatedText.trim() || " ";
    if (finalText !== lastSentText || reply_markup || parse_mode) {
      try {
        await editMsg(chatId, messageId, finalText, {
          parse_mode,
          reply_markup,
          ...extra
        });
      } catch (err) {
        if (!err?.message?.includes("message is not modified")) {
        }
      }
    }
    return {
      message_id: messageId,
      text: accumulatedText,
      done: true,
      message: initialMsg
    };
  } catch (err) {
    if (messageId && accumulatedText) {
      try {
        await telegram.editMessageText(chatId, messageId, null, accumulatedText);
      } catch {
      }
    }
    throw err;
  }
}

// lib/format.js
function escapeHtml(text) {
  if (text === null || text === void 0) return "";
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeMarkdown(text) {
  if (text === null || text === void 0) return "";
  return String(text).replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, "\\$1");
}
var html = {
  escape: escapeHtml,
  bold: (text) => `<b>${escapeHtml(text)}</b>`,
  italic: (text) => `<i>${escapeHtml(text)}</i>`,
  underline: (text) => `<u>${escapeHtml(text)}</u>`,
  strikethrough: (text) => `<s>${escapeHtml(text)}</s>`,
  spoiler: (text) => `<span class="tg-spoiler">${escapeHtml(text)}</span>`,
  code: (text) => `<code>${escapeHtml(text)}</code>`,
  pre: (codeText, language = "") => {
    const langAttr = language ? ` class="language-${escapeHtml(language)}"` : "";
    return `<pre><code${langAttr}>${escapeHtml(codeText)}</code></pre>`;
  },
  link: (text, url) => `<a href="${escapeHtml(url)}">${escapeHtml(text)}</a>`,
  documentLink: (documentId, text = "Document") => `<a href="tg://document?id=${escapeHtml(documentId)}">${escapeHtml(text)}</a>`,
  mention: (text, userId) => `<a href="tg://user?id=${userId}">${escapeHtml(text)}</a>`,
  userLink: (userIdOrText, textOrUserId) => {
    let userId;
    let text;
    if (typeof userIdOrText === "number" || /^\d+$/.test(String(userIdOrText))) {
      userId = userIdOrText;
      text = textOrUserId || "User";
    } else {
      text = userIdOrText;
      userId = textOrUserId;
    }
    return `<a href="tg://user?id=${userId}">${escapeHtml(text)}</a>`;
  },
  customEmoji: (text, customEmojiId) => `<tg-emoji emoji-id="${customEmojiId}">${escapeHtml(text)}</tg-emoji>`,
  quote: (text) => `<blockquote>${escapeHtml(text)}</blockquote>`,
  expandableBlockquote: (text) => `<blockquote expandable>${escapeHtml(text)}</blockquote>`,
  expandableQuote: (text) => `<blockquote expandable>${escapeHtml(text)}</blockquote>`,
  collapsibleQuote: (text) => `<blockquote expandable>${escapeHtml(text)}</blockquote>`
};
var markdown = {
  escape: escapeMarkdown,
  bold: (text) => `*${escapeMarkdown(text)}*`,
  italic: (text) => `_${escapeMarkdown(text)}_`,
  underline: (text) => `__${escapeMarkdown(text)}__`,
  strikethrough: (text) => `~${escapeMarkdown(text)}~`,
  spoiler: (text) => `||${escapeMarkdown(text)}||`,
  code: (text) => `\`${escapeMarkdown(text)}\``,
  pre: (codeText, language = "") => `\`\`\`${language}
${codeText.replace(/\\/g, "\\\\").replace(/`/g, "\\`")}
\`\`\``,
  link: (text, url) => `[${escapeMarkdown(text)}](${url.replace(/([)\\])/g, "\\$1")})`,
  documentLink: (documentId, text = "Document") => `[${escapeMarkdown(text)}](tg://document?id=${documentId})`,
  mention: (text, userId) => `[${escapeMarkdown(text)}](tg://user?id=${userId})`,
  userLink: (userIdOrText, textOrUserId) => {
    let userId;
    let text;
    if (typeof userIdOrText === "number" || /^\d+$/.test(String(userIdOrText))) {
      userId = userIdOrText;
      text = textOrUserId || "User";
    } else {
      text = userIdOrText;
      userId = textOrUserId;
    }
    return `[${escapeMarkdown(text)}](tg://user?id=${userId})`;
  },
  customEmoji: (text, customEmojiId) => `![${escapeMarkdown(text)}](tg://emoji?id=${customEmojiId})`,
  quote: (text) => text.split("\n").map((line) => `>${escapeMarkdown(line)}`).join("\n"),
  expandableBlockquote: (text) => `**>${escapeMarkdown(text)}||`,
  expandableQuote: (text) => `**>${escapeMarkdown(text)}||`,
  collapsibleQuote: (text) => `**>${escapeMarkdown(text)}||`
};
function fmt(strings, ...values) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      const val = values[i];
      if (val === null || val === void 0) {
      } else if (typeof val === "object" && val.rawHtml) {
        result += val.rawHtml;
      } else {
        result += escapeHtml(String(val));
      }
    }
  }
  return result;
}
fmt.bold = html.bold;
fmt.italic = html.italic;
fmt.underline = html.underline;
fmt.strikethrough = html.strikethrough;
fmt.spoiler = html.spoiler;
fmt.code = html.code;
fmt.pre = html.pre;
fmt.link = html.link;
fmt.documentLink = html.documentLink;
fmt.mention = html.mention;
fmt.userLink = html.userLink;
fmt.customEmoji = html.customEmoji;
fmt.quote = html.quote;
fmt.expandableBlockquote = html.expandableBlockquote;
fmt.expandableQuote = html.expandableQuote;
fmt.collapsibleQuote = html.collapsibleQuote;
fmt.escape = escapeHtml;
fmt.html = html;
fmt.markdown = markdown;
fmt.raw = (str) => ({ rawHtml: String(str) });
var Format = fmt;

// lib/table.js
var STYLES = {
  box: {
    topLeft: "\u250C",
    topMid: "\u252C",
    topRight: "\u2510",
    midLeft: "\u251C",
    midMid: "\u253C",
    midRight: "\u2524",
    bottomLeft: "\u2514",
    bottomMid: "\u2534",
    bottomRight: "\u2518",
    horizontal: "\u2500",
    vertical: "\u2502"
  },
  ascii: {
    topLeft: "+",
    topMid: "+",
    topRight: "+",
    midLeft: "+",
    midMid: "+",
    midRight: "+",
    bottomLeft: "+",
    bottomMid: "+",
    bottomRight: "+",
    horizontal: "-",
    vertical: "|"
  },
  compact: {
    topLeft: "",
    topMid: " ",
    topRight: "",
    midLeft: "",
    midMid: "\u253C",
    midRight: "",
    bottomLeft: "",
    bottomMid: "",
    bottomRight: "",
    horizontal: "\u2500",
    vertical: "\u2502"
  },
  clean: {
    topLeft: "",
    topMid: "",
    topRight: "",
    midLeft: "",
    midMid: "   ",
    midRight: "",
    bottomLeft: "",
    bottomMid: "",
    bottomRight: "",
    horizontal: "\u2500",
    vertical: "   "
  },
  card: {
    topLeft: "\u256D",
    topMid: "\u252C",
    topRight: "\u256E",
    midLeft: "\u251C",
    midMid: "\u253C",
    midRight: "\u2524",
    bottomLeft: "\u2570",
    bottomMid: "\u2534",
    bottomRight: "\u256F",
    horizontal: "\u2500",
    vertical: "\u2502"
  }
};
function visualLength(val) {
  if (val === null || val === void 0) return 0;
  return String(val).length;
}
function pad(val, width, align = "left") {
  const str = val === null || val === void 0 ? "" : String(val);
  const diff = width - visualLength(str);
  if (diff <= 0) return str;
  if (align === "right") {
    return " ".repeat(diff) + str;
  }
  if (align === "center") {
    const left = Math.floor(diff / 2);
    const right = diff - left;
    return " ".repeat(left) + str + " ".repeat(right);
  }
  return str + " ".repeat(diff);
}
function escapeSvg(val) {
  if (val === null || val === void 0) return "";
  return String(val).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
var Table = class _Table {
  /**
   * @param {Array<string>|object} [headersOrOptions={}]
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   */
  constructor(headersOrOptions = {}, rows = [], options = {}) {
    this.type = "table";
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
    this.caption = opts.caption || "";
    this._style = opts.style || "card";
    this._title = opts.title || "";
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
    const opts = typeof options === "string" ? { style: options } : options || {};
    return _Table.format(this.headers, this.rows, {
      style: opts.style || this._style,
      isCompact: opts.is_compact ?? opts.isCompact ?? this.is_compact,
      alignments: opts.alignments || this._alignments,
      title: opts.title || this._title,
      ...opts
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
    const titleHtml = title ? `<b>${escapeHtml(title)}</b>

` : "";
    return `${titleHtml}<pre>${escapeHtml(formatted)}</pre>`;
  }
  /**
   * Render table as Markdown (or inside ``` code block)
   * @param {object} [options]
   * @returns {string}
   */
  toMarkdown(options = {}) {
    return _Table.markdown(this.headers, this.rows, options);
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
          text: String(h ?? ""),
          is_header: true,
          align: this._alignments[i] || "center",
          valign: "middle"
        }))
      );
    }
    for (const row of this.rows) {
      cells.push(
        row.map((cell, i) => {
          if (cell && typeof cell === "object" && cell.text !== void 0) {
            return {
              align: this._alignments[i] || "left",
              valign: "middle",
              ...cell
            };
          }
          return {
            text: String(cell ?? ""),
            align: this._alignments[i] || "left",
            valign: "middle"
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
      ...this.rows.map((r) => String(r[0] ?? "").length),
      this.headers[0] ? String(this.headers[0]).length : 0,
      10
    );
    const calculatedCol1 = Math.max(130, Math.min(220, maxLabelLen * 9 + 30));
    const col1Width = Number(options.col1Width || this.col1Width || calculatedCol1);
    const headerHeight = Number(options.headerHeight || 38);
    const rowHeight = Number(options.rowHeight || 36);
    const hasHeader = this.headers.length > 0;
    const headerH = hasHeader ? headerHeight : 0;
    const totalHeight = headerH + this.rows.length * rowHeight;
    const bgColor = options.bgColor || "#18222d";
    const borderColor = options.borderColor || "#2b3d4f";
    const headerBg = options.headerBg || "#1c2836";
    const labelColor = options.labelColor || "#90a4b7";
    const valColor = options.valueColor || "#ffffff";
    const linkColor = options.linkColor || "#5288c1";
    const fontFamily = options.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${totalHeight}" viewBox="0 0 ${width} ${totalHeight}">
`;
    svg += `  <style>
`;
    svg += `    .t-lbl { font-family: ${fontFamily}; font-size: 14px; fill: ${labelColor}; font-weight: 400; }
`;
    svg += `    .t-val { font-family: ${fontFamily}; font-size: 14px; fill: ${valColor}; font-weight: 400; }
`;
    svg += `    .t-val-bold { font-family: ${fontFamily}; font-size: 14px; fill: ${valColor}; font-weight: 600; }
`;
    svg += `    .t-link { font-family: ${fontFamily}; font-size: 14px; fill: ${linkColor}; font-weight: 500; cursor: pointer; }
`;
    svg += `    .t-hdr { font-family: ${fontFamily}; font-size: 14px; fill: #ffffff; font-weight: 700; }
`;
    svg += `  </style>
`;
    svg += `  <rect x="0.5" y="0.5" width="${width - 1}" height="${totalHeight - 1}" rx="12" ry="12" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/>
`;
    if (hasHeader) {
      const clipId = `clip-top-${Math.floor(Math.random() * 1e6)}`;
      svg += `  <clipPath id="${clipId}">
`;
      svg += `    <rect x="0.5" y="0.5" width="${width - 1}" height="${totalHeight - 1}" rx="12" ry="12" />
`;
      svg += `  </clipPath>
`;
      svg += `  <rect x="0.5" y="0.5" width="${width - 1}" height="${headerH}" fill="${headerBg}" clip-path="url(#${clipId})"/>
`;
      svg += `  <line x1="0" y1="${headerH}" x2="${width}" y2="${headerH}" stroke="${borderColor}" stroke-width="1"/>
`;
      const h1 = this.headers[0] ?? "";
      const h2 = this.headers[1] ?? "";
      svg += `  <text x="16" y="${Math.round(headerH / 2 + 5)}" class="t-hdr">${escapeSvg(h1)}</text>
`;
      if (h2) {
        svg += `  <text x="${col1Width + 16}" y="${Math.round(headerH / 2 + 5)}" class="t-hdr">${escapeSvg(h2)}</text>
`;
      }
    }
    svg += `  <line x1="${col1Width}" y1="0" x2="${col1Width}" y2="${totalHeight}" stroke="${borderColor}" stroke-width="1"/>
`;
    for (let i = 0; i < this.rows.length; i++) {
      const row = this.rows[i];
      const y = headerH + i * rowHeight;
      if (i > 0 || hasHeader) {
        svg += `  <line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${borderColor}" stroke-width="1"/>
`;
      }
      const textY = y + Math.round(rowHeight / 2 + 5);
      const col1Val = row[0] !== void 0 ? String(row[0]) : "";
      const col2Val = row[1] !== void 0 ? String(row[1]) : "";
      svg += `  <text x="16" y="${textY}" class="t-lbl">${escapeSvg(col1Val)}</text>
`;
      if (col2Val) {
        const isLink = col2Val.startsWith("@") || col2Val.startsWith("tg://") || col2Val.startsWith("http");
        const isBold = options.boldValues === true || options.boldValues !== false && (["telegraf.js", "telegix", "free user", "premium", "active", "online", "pro", "connected", "operational", "success", "ok"].includes(col2Val.toLowerCase()) || i === 0 || !isNaN(Number(col2Val)));
        const cls = isLink ? "t-link" : isBold ? "t-val-bold" : "t-val";
        svg += `  <text x="${col1Width + 16}" y="${textY}" class="${cls}">${escapeSvg(col2Val)}</text>
`;
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
    if (typeof Buffer !== "undefined") {
      return Buffer.from(svg, "utf-8");
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
    if (typeof Buffer !== "undefined") {
      return `data:image/svg+xml;base64,${Buffer.from(svg, "utf-8").toString("base64")}`;
    }
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }
  /**
   * Convert to Telegram Bot API 10.3 InputRichBlockTable / RichBlockTable payload
   * @returns {object}
   */
  toRichBlock() {
    return {
      type: "table",
      is_bordered: this.is_bordered,
      is_compact: this.is_compact,
      is_striped: this.is_striped,
      cells: this.toCells(),
      ...this.caption ? { caption: this.caption } : {},
      ...this.headers.length > 0 ? { headers: this.headers } : {},
      rows: this.rows,
      ...this._title ? { title: this._title } : {}
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
    return new _Table(options);
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
      return new _Table(options);
    }
    const cols = columns && columns.length > 0 ? columns : Object.keys(array[0]);
    const table = new _Table({
      headers: cols.map((c) => c.charAt(0).toUpperCase() + c.slice(1).replace(/_/g, " ")),
      ...options
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
    const opts = typeof options === "string" ? { style: options } : options || {};
    const styleName = opts.style || (opts.isCompact || opts.is_compact ? "compact" : "box");
    if (styleName === "markdown") {
      return _Table.markdown(headers, rows, opts);
    }
    const border = STYLES[styleName] || STYLES.box;
    const alignments = opts.alignments || [];
    const isCompact = Boolean(opts.isCompact || opts.is_compact);
    const numCols = Math.max(
      headers.length,
      ...rows.map((r) => Array.isArray(r) ? r.length : 0),
      1
    );
    const colWidths = new Array(numCols).fill(0);
    for (let c = 0; c < numCols; c++) {
      if (headers[c] !== void 0) {
        colWidths[c] = Math.max(colWidths[c], visualLength(headers[c]));
      }
      for (const row of rows) {
        if (row && row[c] !== void 0) {
          colWidths[c] = Math.max(colWidths[c], visualLength(row[c]));
        }
      }
      colWidths[c] = Math.max(colWidths[c], 1);
    }
    const padding = isCompact ? 0 : 1;
    const padChar = " ";
    const lines = [];
    const formatCell = (val, colIdx) => {
      const w = colWidths[colIdx];
      const align = alignments[colIdx] || "left";
      const text = pad(val, w, align);
      return isCompact ? text : `${padChar}${text}${padChar}`;
    };
    const buildBorder = (left, mid, right, horiz) => {
      if (!left && !mid && !right) return "";
      const parts = colWidths.map((w) => horiz.repeat(w + (isCompact ? 0 : 2)));
      return `${left}${parts.join(mid)}${right}`;
    };
    if (border.topLeft || border.topMid || border.topRight) {
      const topRow = buildBorder(border.topLeft, border.topMid, border.topRight, border.horizontal);
      if (topRow) lines.push(topRow);
    }
    if (headers.length > 0) {
      const headerCells = [];
      for (let c = 0; c < numCols; c++) {
        headerCells.push(formatCell(headers[c] ?? "", c));
      }
      lines.push(`${border.vertical}${headerCells.join(border.vertical)}${border.vertical}`);
      if (border.midLeft || border.midMid || border.midRight || border.horizontal) {
        const midRow = buildBorder(border.midLeft, border.midMid, border.midRight, border.horizontal);
        if (midRow) lines.push(midRow);
      }
    }
    for (let r = 0; r < rows.length; r++) {
      const row = rows[r] || [];
      const cells = [];
      for (let c = 0; c < numCols; c++) {
        cells.push(formatCell(row[c] ?? "", c));
      }
      lines.push(`${border.vertical}${cells.join(border.vertical)}${border.vertical}`);
    }
    if (border.bottomLeft || border.bottomMid || border.bottomRight) {
      const bottomRow = buildBorder(border.bottomLeft, border.bottomMid, border.bottomRight, border.horizontal);
      if (bottomRow) lines.push(bottomRow);
    }
    return lines.join("\n");
  }
  /**
   * Shortcut for box Unicode table
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   */
  static box(headers, rows, options = {}) {
    return _Table.format(headers, rows, { ...options, style: "box" });
  }
  /**
   * Shortcut for ASCII table (+----+----+ etc.)
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   */
  static ascii(headers, rows, options = {}) {
    return _Table.format(headers, rows, { ...options, style: "ascii" });
  }
  /**
   * Shortcut for compact table
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   */
  static compact(headers, rows, options = {}) {
    return _Table.format(headers, rows, { ...options, style: "compact", isCompact: true });
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
      ...rows.map((r) => Array.isArray(r) ? r.length : 0),
      1
    );
    const colWidths = new Array(numCols).fill(3);
    for (let c = 0; c < numCols; c++) {
      if (headers[c] !== void 0) {
        colWidths[c] = Math.max(colWidths[c], visualLength(headers[c]));
      }
      for (const row of rows) {
        if (row && row[c] !== void 0) {
          colWidths[c] = Math.max(colWidths[c], visualLength(row[c]));
        }
      }
    }
    const lines = [];
    const headerCells = [];
    for (let c = 0; c < numCols; c++) {
      headerCells.push(pad(headers[c] ?? "", colWidths[c], "left"));
    }
    lines.push(`| ${headerCells.join(" | ")} |`);
    const sepCells = [];
    for (let c = 0; c < numCols; c++) {
      const align = alignments[c] || "left";
      const w = colWidths[c];
      if (align === "center") {
        sepCells.push(`:${"-".repeat(Math.max(w - 2, 1))}:`);
      } else if (align === "right") {
        sepCells.push(`${"-".repeat(Math.max(w - 1, 1))}:`);
      } else {
        sepCells.push(`:${"-".repeat(Math.max(w - 1, 1))}`);
      }
    }
    lines.push(`| ${sepCells.join(" | ")} |`);
    for (const row of rows) {
      const cells = [];
      for (let c = 0; c < numCols; c++) {
        const align = alignments[c] || "left";
        cells.push(pad(row[c] ?? "", colWidths[c], align));
      }
      lines.push(`| ${cells.join(" | ")} |`);
    }
    return lines.join("\n");
  }
  /**
   * Helper to format table directly into HTML with <pre> tag for Telegram
   * @param {Array<string>} headers
   * @param {Array<Array<any>>} rows
   * @param {object} [options]
   */
  static html(headers, rows, options = {}) {
    const formatted = _Table.format(headers, rows, options);
    const title = options.title ? `<b>${escapeHtml(options.title)}</b>

` : "";
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
    return new _Table(headers, rows, {
      style: "card",
      is_bordered: true,
      ...options
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
      engine: "Telegix",
      runtime: "0h 19m 32s",
      node: typeof process !== "undefined" && process.version ? process.version : "v23.11",
      features: 514,
      groups: 168,
      users: 9528,
      ...data
    };
    return new _Table(
      ["\u{1F916} SYSTEM", "Status"],
      [
        ["Engine", defaultData.engine],
        ["Runtime", defaultData.runtime],
        ["Node", defaultData.node],
        ["Features", defaultData.features],
        ["Groups", defaultData.groups],
        ["Users", defaultData.users]
      ],
      {
        style: "card",
        is_bordered: true,
        title: options.title || "",
        ...options
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
      username: "@seventynn",
      status: "Free User",
      limit: 0,
      points: 0,
      time: "Selasa, 8 September 2026",
      ...data
    };
    return new _Table(
      ["\u{1F464} PROFILE", "Info"],
      [
        ["Username", defaultData.username],
        ["Status", defaultData.status],
        ["Limit", defaultData.limit],
        ["Points", defaultData.points],
        ["Time", defaultData.time]
      ],
      {
        style: "card",
        is_bordered: true,
        title: options.title || "",
        ...options
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
      if (t instanceof _Table) return t;
      if (t && typeof t.toCardSvg === "function") return t;
      if (t && Array.isArray(t.headers) && Array.isArray(t.rows)) return new _Table(t);
      if (Array.isArray(t)) return new _Table(t[0], t[1]);
      return new _Table(t);
    });
    let currentY = padding;
    const renderedParts = [];
    for (let idx = 0; idx < instances.length; idx++) {
      const t = instances[idx];
      const headerH = t.headers.length > 0 ? options.headerHeight || 38 : 0;
      const tHeight = headerH + t.rows.length * (options.rowHeight || 36);
      const col1Width = Number(options.col1Width || t.col1Width || Math.round(width * 0.36));
      const headerHeight = Number(options.headerHeight || 38);
      const rowHeight = Number(options.rowHeight || 36);
      const hasHeader = t.headers.length > 0;
      const bgColor = options.bgColor || "#18222d";
      const borderColor = options.borderColor || "#2b3d4f";
      const headerBg = options.headerBg || "#1c2836";
      let g = `  <g transform="translate(${padding}, ${currentY})">
`;
      g += `    <rect x="0.5" y="0.5" width="${width - 1}" height="${tHeight - 1}" rx="12" ry="12" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/>
`;
      if (hasHeader) {
        const clipId = `multi-clip-${idx}-${currentY}`;
        g += `    <clipPath id="${clipId}">
`;
        g += `      <rect x="0.5" y="0.5" width="${width - 1}" height="${tHeight - 1}" rx="12" ry="12" />
`;
        g += `    </clipPath>
`;
        g += `    <rect x="0.5" y="0.5" width="${width - 1}" height="${headerH}" fill="${headerBg}" clip-path="url(#${clipId})"/>
`;
        g += `    <line x1="0" y1="${headerH}" x2="${width}" y2="${headerH}" stroke="${borderColor}" stroke-width="1"/>
`;
        const h1 = t.headers[0] ?? "";
        const h2 = t.headers[1] ?? "";
        g += `    <text x="16" y="${Math.round(headerH / 2 + 5)}" class="t-hdr">${escapeSvg(h1)}</text>
`;
        if (h2) {
          g += `    <text x="${col1Width + 16}" y="${Math.round(headerH / 2 + 5)}" class="t-hdr">${escapeSvg(h2)}</text>
`;
        }
      }
      g += `    <line x1="${col1Width}" y1="0" x2="${col1Width}" y2="${tHeight}" stroke="${borderColor}" stroke-width="1"/>
`;
      for (let i = 0; i < t.rows.length; i++) {
        const row = t.rows[i];
        const y = headerH + i * rowHeight;
        if (i > 0 || hasHeader) {
          g += `    <line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${borderColor}" stroke-width="1"/>
`;
        }
        const textY = y + Math.round(rowHeight / 2 + 5);
        const col1Val = row[0] !== void 0 ? String(row[0]) : "";
        const col2Val = row[1] !== void 0 ? String(row[1]) : "";
        g += `    <text x="16" y="${textY}" class="t-lbl">${escapeSvg(col1Val)}</text>
`;
        if (col2Val) {
          const isLink = col2Val.startsWith("@") || col2Val.startsWith("tg://") || col2Val.startsWith("http");
          const isBold = options.boldValues !== false && (["Telegraf.js", "Telegix", "Free User", "Premium", "Active", "Online", "PRO"].includes(col2Val) || i === 0);
          const cls = isLink ? "t-link" : isBold ? "t-val-bold" : "t-val";
          g += `    <text x="${col1Width + 16}" y="${textY}" class="${cls}">${escapeSvg(col2Val)}</text>
`;
        }
      }
      g += `  </g>
`;
      renderedParts.push(g);
      currentY += tHeight + gap;
    }
    const totalWidth = width + padding * 2;
    const totalHeight = currentY - gap + padding;
    const fontFamily = options.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
    const labelColor = options.labelColor || "#90a4b7";
    const valColor = options.valueColor || "#ffffff";
    const linkColor = options.linkColor || "#5288c1";
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}">
`;
    svg += `  <style>
`;
    svg += `    .t-lbl { font-family: ${fontFamily}; font-size: 14px; fill: ${labelColor}; font-weight: 400; }
`;
    svg += `    .t-val { font-family: ${fontFamily}; font-size: 14px; fill: ${valColor}; font-weight: 400; }
`;
    svg += `    .t-val-bold { font-family: ${fontFamily}; font-size: 14px; fill: ${valColor}; font-weight: 600; }
`;
    svg += `    .t-link { font-family: ${fontFamily}; font-size: 14px; fill: ${linkColor}; font-weight: 500; cursor: pointer; }
`;
    svg += `    .t-hdr { font-family: ${fontFamily}; font-size: 14px; fill: #ffffff; font-weight: 700; }
`;
    svg += `  </style>
`;
    svg += renderedParts.join("\n");
    svg += `</svg>`;
    return svg;
  }
};
var InputRichBlockTable = class _InputRichBlockTable {
  /**
   * @param {Array<string>|object} [headersOrOptions]
   * @param {Array<Array<any>>} [rows]
   * @param {object} [options]
   */
  constructor(headersOrOptions = [], rows = [], options = {}) {
    this.type = "table";
    if (headersOrOptions && !Array.isArray(headersOrOptions) && typeof headersOrOptions === "object") {
      const opt = headersOrOptions;
      this.headers = opt.headers || [];
      this.rows = opt.rows || [];
      this.is_compact = Boolean(opt.is_compact ?? opt.isCompact ?? false);
      this.is_bordered = Boolean(opt.is_bordered ?? opt.isBordered ?? true);
      this.is_striped = Boolean(opt.is_striped ?? opt.isStriped ?? false);
      this.caption = opt.caption || "";
      this.alignments = opt.alignments || [];
      this.title = opt.title || "";
      this.style = opt.style || (this.is_compact ? "compact" : "box");
      this.col1Width = opt.col1Width;
    } else {
      this.headers = Array.isArray(headersOrOptions) ? [...headersOrOptions] : [];
      this.rows = Array.isArray(rows) ? rows.map((r) => [...r]) : [];
      this.is_compact = Boolean(options.is_compact ?? options.isCompact ?? false);
      this.is_bordered = Boolean(options.is_bordered ?? options.isBordered ?? true);
      this.is_striped = Boolean(options.is_striped ?? options.isStriped ?? false);
      this.caption = options.caption || "";
      this.alignments = options.alignments || [];
      this.title = options.title || "";
      this.style = options.style || (this.is_compact ? "compact" : "box");
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
          text: String(h ?? ""),
          is_header: true,
          align: this.alignments[i] || "center",
          valign: "middle"
        }))
      );
    }
    for (const row of this.rows) {
      cells.push(
        row.map((cell, i) => {
          if (cell && typeof cell === "object" && cell.text !== void 0) {
            return {
              align: this.alignments[i] || "left",
              valign: "middle",
              ...cell
            };
          }
          return {
            text: String(cell ?? ""),
            align: this.alignments[i] || "left",
            valign: "middle"
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
      ...options
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
      ...options
    });
    const titleHtml = this.title ? `<b>${escapeHtml(this.title)}</b>

` : "";
    return `${titleHtml}<pre>${escapeHtml(tableStr)}</pre>`;
  }
  /**
   * Convert to Bot API 10.3 JSON payload
   */
  toJSON() {
    return {
      type: "table",
      is_bordered: this.is_bordered,
      is_compact: this.is_compact,
      is_striped: this.is_striped,
      cells: this.toCells(),
      ...this.caption ? { caption: this.caption } : {},
      ...this.headers.length > 0 ? { headers: this.headers } : {},
      rows: this.rows,
      ...this.title ? { title: this.title } : {}
    };
  }
  static create(headers, rows, options) {
    return new _InputRichBlockTable(headers, rows, options);
  }
};
var RichBlockTable = InputRichBlockTable;

// lib/ephemeral.js
var EphemeralMessageParameters = class _EphemeralMessageParameters {
  /**
   * @param {object|number} [options={}]
   * @param {number} [options.lifetime] - Message lifetime in seconds before disappearing
   * @param {number} [options.lifetime_seconds] - Alias for lifetime
   * @param {number} [options.receiver_user_id] - User identifier who sees the message
   * @param {string} [options.callback_query_id] - Callback query identifier
   * @param {boolean} [options.replace_callback_query_message=false] - Replace original callback message
   */
  constructor(options = {}) {
    if (typeof options === "number") {
      this.lifetime = options;
      this.receiver_user_id = void 0;
      this.callback_query_id = void 0;
      this.replace_callback_query_message = false;
    } else if (options && typeof options === "object") {
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
    if (this.lifetime !== void 0 && this.lifetime !== null) {
      res.lifetime = Number(this.lifetime);
    }
    if (this.receiver_user_id !== void 0 && this.receiver_user_id !== null) {
      res.receiver_user_id = Number(this.receiver_user_id);
    }
    if (this.callback_query_id !== void 0 && this.callback_query_id !== null) {
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
    return new _EphemeralMessageParameters(options);
  }
  /**
   * Create ephemeral parameters replacing the callback query message
   * @param {string} callbackQueryId
   * @param {object} [options]
   * @returns {EphemeralMessageParameters}
   */
  static replace(callbackQueryId, options = {}) {
    return new _EphemeralMessageParameters({
      callback_query_id: callbackQueryId,
      replace_callback_query_message: true,
      ...options
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
    return new _EphemeralMessageParameters({
      receiver_user_id: userId,
      lifetime: lifetimeSeconds,
      ...options
    });
  }
};
var ReplyParameters = class _ReplyParameters {
  /**
   * @param {number|object} [messageIdOrOptions]
   * @param {number} [ephemeralMessageId]
   */
  constructor(messageIdOrOptions = {}, ephemeralMessageId) {
    if (typeof messageIdOrOptions === "number") {
      this.message_id = messageIdOrOptions;
      if (ephemeralMessageId !== void 0) {
        this.ephemeral_message_id = ephemeralMessageId;
      }
    } else if (messageIdOrOptions && typeof messageIdOrOptions === "object") {
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
    if (options.position !== void 0) this.quote_position = options.position;
    return this;
  }
  /**
   * Convert to Telegram API payload JSON object
   * @returns {object}
   */
  toJSON() {
    const res = {};
    if (this.message_id !== void 0 && this.message_id !== null) {
      res.message_id = Number(this.message_id);
    }
    if (this.chat_id !== void 0 && this.chat_id !== null) {
      res.chat_id = this.chat_id;
    }
    if (this.allow_sending_without_reply) {
      res.allow_sending_without_reply = true;
    }
    if (this.quote !== void 0 && this.quote !== null) {
      res.quote = String(this.quote);
    }
    if (this.quote_parse_mode) {
      res.quote_parse_mode = this.quote_parse_mode;
    }
    if (this.quote_entities) {
      res.quote_entities = this.quote_entities;
    }
    if (this.quote_position !== void 0 && this.quote_position !== null) {
      res.quote_position = Number(this.quote_position);
    }
    if (this.ephemeral_message_id !== void 0 && this.ephemeral_message_id !== null) {
      res.ephemeral_message_id = Number(this.ephemeral_message_id);
    }
    if (this.checklist_task_id !== void 0 && this.checklist_task_id !== null) {
      res.checklist_task_id = Number(this.checklist_task_id);
    }
    if (this.poll_option_id !== void 0 && this.poll_option_id !== null) {
      res.poll_option_id = this.poll_option_id;
    }
    if (this.is_ephemeral !== void 0 && this.is_ephemeral !== null) {
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
    return new _ReplyParameters({ message_id: messageId, ...options });
  }
  /**
   * Static factory to reply to an ephemeral message (Bot API 10.2)
   * @param {number} ephemeralMessageId
   * @param {object} [options]
   * @returns {ReplyParameters}
   */
  static ephemeral(ephemeralMessageId, options = {}) {
    return new _ReplyParameters({ ephemeral_message_id: ephemeralMessageId, ...options });
  }
};
var BotCommand = class _BotCommand {
  /**
   * @param {string} command - Text of the command; 1-32 characters
   * @param {string} description - Description of the command; 1-256 characters
   * @param {boolean} [is_ephemeral=false] - True, if the command should be ephemeral (Bot API 10.2)
   */
  constructor(command, description, is_ephemeral = false) {
    this.command = String(command || "").replace(/^\//, "").toLowerCase();
    this.description = String(description || "");
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
      ...this.is_ephemeral ? { is_ephemeral: true } : {}
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
    return new _BotCommand(command, description, is_ephemeral);
  }
  /**
   * Create an ephemeral bot command (Bot API 10.2)
   * @param {string} command
   * @param {string} description
   * @returns {BotCommand}
   */
  static ephemeral(command, description) {
    return new _BotCommand(command, description, true);
  }
};

// lib/api.js
var import_node_fs = __toESM(require("node:fs"), 1);
var import_node_path = __toESM(require("node:path"), 1);
function isUploadableFile(value, key = "") {
  if (!value) return false;
  if (typeof value === "string") return false;
  if (key === "link_preview_options" || key === "reply_parameters" || key === "reply_markup" || key === "ephemeral_message_parameters" || key === "ephemeral_parameters" || key === "blocks" || key === "media") {
    return false;
  }
  if (value instanceof Blob || value instanceof Uint8Array || Buffer.isBuffer(value)) return true;
  if (typeof value === "object") {
    if (value._options !== void 0 || value.prefer_small_media !== void 0 || value.prefer_large_media !== void 0 || value.show_above_text !== void 0 || value.is_disabled !== void 0) {
      return false;
    }
    if ("source" in value) return true;
    if (typeof value.pipe === "function") return true;
    if ("url" in value && key !== "link_preview_options") return true;
  }
  return false;
}
async function normalizeFileSource(input, defaultFilename = "file") {
  if (typeof input === "string") {
    if (import_node_fs.default.existsSync(input)) {
      const buffer = await import_node_fs.default.promises.readFile(input);
      const filename = import_node_path.default.basename(input) || defaultFilename;
      return {
        blob: new Blob([buffer]),
        filename
      };
    }
    return { blob: input };
  }
  if (Buffer.isBuffer(input) || input instanceof Uint8Array) {
    return {
      blob: new Blob([input]),
      filename: defaultFilename
    };
  }
  if (input instanceof Blob) {
    return {
      blob: input,
      filename: defaultFilename
    };
  }
  if (typeof input === "object") {
    const filename = input.filename || defaultFilename;
    if (input.url && typeof input.url === "string") {
      return { blob: input.url };
    }
    if (input.source) {
      if (typeof input.source === "string") {
        if (import_node_fs.default.existsSync(input.source)) {
          const buffer = await import_node_fs.default.promises.readFile(input.source);
          return {
            blob: new Blob([buffer]),
            filename: input.filename || import_node_path.default.basename(input.source) || defaultFilename
          };
        }
        return { blob: input.source };
      }
      if (Buffer.isBuffer(input.source) || input.source instanceof Uint8Array) {
        return {
          blob: new Blob([input.source]),
          filename
        };
      }
      if (input.source instanceof Blob) {
        return {
          blob: input.source,
          filename
        };
      }
      if (typeof input.source.pipe === "function") {
        const chunks = [];
        for await (const chunk of input.source) {
          chunks.push(chunk);
        }
        return {
          blob: new Blob(chunks),
          filename
        };
      }
    }
    if (typeof input.pipe === "function") {
      const chunks = [];
      for await (const chunk of input) {
        chunks.push(chunk);
      }
      return {
        blob: new Blob(chunks),
        filename
      };
    }
  }
  return { blob: input };
}
function normalizeTelegramPayload(payload) {
  if (!payload || typeof payload !== "object") return payload;
  let norm = { ...payload };
  if ("toJSON" in norm) {
    delete norm.toJSON;
  }
  if (norm.keyboard) {
    const keyboard = norm.keyboard;
    const is_persistent = Boolean(norm.is_persistent);
    const resize_keyboard = norm.resize_keyboard ?? true;
    const one_time_keyboard = Boolean(norm.one_time_keyboard);
    const input_field_placeholder = norm.input_field_placeholder;
    const selective = Boolean(norm.selective);
    delete norm.keyboard;
    delete norm.is_persistent;
    delete norm.resize_keyboard;
    delete norm.one_time_keyboard;
    delete norm.input_field_placeholder;
    delete norm.selective;
    if (!norm.reply_markup) {
      norm.reply_markup = {
        keyboard,
        is_persistent,
        resize_keyboard,
        one_time_keyboard,
        input_field_placeholder,
        selective
      };
    }
  }
  if (norm.inline_keyboard) {
    const inline_keyboard = norm.inline_keyboard;
    delete norm.inline_keyboard;
    if (!norm.reply_markup) {
      norm.reply_markup = { inline_keyboard };
    }
  }
  if (norm.remove_keyboard) {
    const selective = Boolean(norm.selective);
    delete norm.remove_keyboard;
    delete norm.selective;
    if (!norm.reply_markup) {
      norm.reply_markup = { remove_keyboard: true, selective };
    }
  }
  if (norm.force_reply) {
    const selective = Boolean(norm.selective);
    const input_field_placeholder = norm.input_field_placeholder;
    delete norm.force_reply;
    delete norm.selective;
    delete norm.input_field_placeholder;
    if (!norm.reply_markup) {
      norm.reply_markup = { force_reply: true, selective, input_field_placeholder };
    }
  }
  if (norm.reply_markup) {
    if (typeof norm.reply_markup.toJSON === "function") {
      norm.reply_markup = norm.reply_markup.toJSON();
    }
    while (norm.reply_markup && typeof norm.reply_markup === "object" && norm.reply_markup.reply_markup) {
      norm.reply_markup = norm.reply_markup.reply_markup;
      if (typeof norm.reply_markup?.toJSON === "function") {
        norm.reply_markup = norm.reply_markup.toJSON();
      }
    }
  }
  if (norm.link_preview_options && typeof norm.link_preview_options.toJSON === "function") {
    norm.link_preview_options = norm.link_preview_options.toJSON();
  }
  if (norm.disable_web_page_preview !== void 0 && !norm.link_preview_options) {
    norm.link_preview_options = { is_disabled: Boolean(norm.disable_web_page_preview) };
    delete norm.disable_web_page_preview;
  }
  if (norm.reply_parameters && typeof norm.reply_parameters.toJSON === "function") {
    norm.reply_parameters = norm.reply_parameters.toJSON();
  }
  if (!norm.reply_parameters) {
    if (norm.ephemeral_message_id !== void 0 && norm.reply_to_message_id === void 0) {
      norm.reply_parameters = {
        ephemeral_message_id: Number(norm.ephemeral_message_id),
        ...norm.allow_sending_without_reply !== void 0 ? { allow_sending_without_reply: Boolean(norm.allow_sending_without_reply) } : {}
      };
      delete norm.ephemeral_message_id;
      delete norm.allow_sending_without_reply;
    } else if (norm.reply_to_message_id !== void 0) {
      norm.reply_parameters = {
        message_id: Number(norm.reply_to_message_id),
        ...norm.allow_sending_without_reply !== void 0 ? { allow_sending_without_reply: Boolean(norm.allow_sending_without_reply) } : {},
        ...norm.ephemeral_message_id !== void 0 ? { ephemeral_message_id: Number(norm.ephemeral_message_id) } : {}
      };
      delete norm.reply_to_message_id;
      delete norm.allow_sending_without_reply;
      delete norm.ephemeral_message_id;
    }
  } else if (norm.reply_parameters && typeof norm.reply_parameters === "object") {
    if (norm.ephemeral_message_id !== void 0 && norm.reply_parameters.ephemeral_message_id === void 0) {
      norm.reply_parameters.ephemeral_message_id = Number(norm.ephemeral_message_id);
      delete norm.ephemeral_message_id;
    }
  }
  if (norm.ephemeral_message_parameters) {
    if (typeof norm.ephemeral_message_parameters.toJSON === "function") {
      norm.ephemeral_message_parameters = norm.ephemeral_message_parameters.toJSON();
    } else if (typeof norm.ephemeral_message_parameters === "number") {
      norm.ephemeral_message_parameters = { lifetime: norm.ephemeral_message_parameters };
    }
  } else if (norm.ephemeral_parameters) {
    if (typeof norm.ephemeral_parameters.toJSON === "function") {
      norm.ephemeral_message_parameters = norm.ephemeral_parameters.toJSON();
    } else if (typeof norm.ephemeral_parameters === "number") {
      norm.ephemeral_message_parameters = { lifetime: norm.ephemeral_parameters };
    } else {
      norm.ephemeral_message_parameters = { ...norm.ephemeral_parameters };
    }
  } else if (norm.receiver_user_id !== void 0 || norm.callback_query_id !== void 0) {
    norm.ephemeral_message_parameters = {
      ...norm.receiver_user_id !== void 0 ? { receiver_user_id: norm.receiver_user_id } : {},
      ...norm.callback_query_id !== void 0 ? { callback_query_id: norm.callback_query_id } : {}
    };
  }
  return norm;
}
var Telegram = class {
  /**
   * @param {string} token - Bot Token from @BotFather
   * @param {object} [options]
   * @param {string} [options.apiRoot='https://api.telegram.org']
   * @param {boolean} [options.testEnv=false]
   * @param {number} [options.timeout=60000] - Request timeout in ms
   */
  constructor(token, options = {}) {
    if (!token || typeof token !== "string") {
      throw new Error("Telegix: Telegram Bot Token is required and must be a string.");
    }
    this.token = token.trim();
    this.apiRoot = options.apiRoot || "https://api.telegram.org";
    this.testEnv = Boolean(options.testEnv);
    this.timeout = options.timeout || 6e4;
    this.options = options;
  }
  /**
   * Returns base URL for Telegram API calls
   * @returns {string}
   */
  getBaseUrl() {
    return `${this.apiRoot}/bot${this.token}${this.testEnv ? "/test" : ""}`;
  }
  /**
   * Returns base URL for Telegram downloaded files
   * @returns {string}
   */
  getFileBaseUrl() {
    return `${this.apiRoot}/file/bot${this.token}${this.testEnv ? "/test" : ""}`;
  }
  /**
   * Low-level API caller
   * @param {string} method - Telegram API method name (e.g. 'sendMessage', 'sendPhoto')
   * @param {object} [payload={}] - Parameters for the method
   * @param {object} [options={}] - Custom options / abort signal
   * @returns {Promise<any>} Result from Telegram Bot API
   */
  async call(method, payload = {}, options = {}) {
    const url = `${this.getBaseUrl()}/${method}`;
    const normalizedPayload = normalizeTelegramPayload(payload);
    let hasUpload = false;
    for (const key of Object.keys(normalizedPayload)) {
      if (isUploadableFile(normalizedPayload[key], key)) {
        hasUpload = true;
        break;
      }
      if (key === "media" && normalizedPayload[key] && typeof normalizedPayload[key] === "object") {
        if (isUploadableFile(normalizedPayload[key].media, "media")) {
          hasUpload = true;
          break;
        }
      }
    }
    let requestInit = {
      method: "POST",
      signal: options.signal
    };
    if (hasUpload) {
      const formData = new FormData();
      for (const [key, value] of Object.entries(normalizedPayload)) {
        if (value === void 0 || value === null) continue;
        if (key === "media" && typeof value === "object" && value.media && isUploadableFile(value.media, "media")) {
          const { blob, filename } = await normalizeFileSource(value.media, "media");
          const attachName = `media_file_${Date.now()}`;
          if (typeof blob === "string") {
            formData.append(attachName, blob);
          } else {
            formData.append(attachName, blob, filename || "file");
          }
          const mediaObj = { ...value, media: `attach://${attachName}` };
          formData.append("media", JSON.stringify(mediaObj));
        } else if (isUploadableFile(value, key)) {
          const { blob, filename } = await normalizeFileSource(value, key);
          if (typeof blob === "string") {
            formData.append(key, blob);
          } else {
            formData.append(key, blob, filename || "file");
          }
        } else if (typeof value === "object") {
          const serialized = typeof value.toJSON === "function" ? value.toJSON() : value;
          formData.append(key, JSON.stringify(serialized));
        } else {
          formData.append(key, String(value));
        }
      }
      requestInit.body = formData;
    } else {
      const cleanPayload = {};
      for (const [key, value] of Object.entries(normalizedPayload)) {
        if (value === void 0 || value === null || key === "toJSON") continue;
        if (typeof value === "object" && typeof value.toJSON === "function") {
          cleanPayload[key] = value.toJSON();
        } else {
          cleanPayload[key] = value;
        }
      }
      delete cleanPayload.toJSON;
      const jsonStringParams = ["link_preview_options", "reply_parameters", "reply_markup"];
      for (const param of jsonStringParams) {
        if (cleanPayload[param] && typeof cleanPayload[param] === "object") {
          cleanPayload[param] = JSON.stringify(cleanPayload[param]);
        }
      }
      requestInit.headers = {
        "Content-Type": "application/json"
      };
      requestInit.body = JSON.stringify(cleanPayload);
    }
    let response;
    try {
      response = await fetch(url, requestInit);
    } catch (err) {
      throw new NetworkError(err, method);
    }
    let data;
    try {
      data = await response.json();
    } catch (err) {
      throw new TelegramError(
        { error_code: response.status, description: `HTTP ${response.statusText || response.status}` },
        method,
        payload
      );
    }
    if (!data.ok) {
      if (data.error_code === 429 && data.parameters?.retry_after && options.autoRetry !== false) {
        const retryAfter = data.parameters.retry_after;
        await new Promise((resolve) => setTimeout(resolve, (retryAfter + 1) * 1e3));
        return this.call(method, payload, options);
      }
      throw new TelegramError(data, method, payload);
    }
    return data.result;
  }
  // ==========================================
  // Telegram Bot API Methods Implementation
  // ==========================================
  /**
   * Get basic information about the bot
   */
  getMe() {
    return this.call("getMe");
  }
  /**
   * Log out from the cloud Bot API server before at-home local server migration
   */
  logOut() {
    return this.call("logOut");
  }
  /**
   * Close the bot instance before moving it between machines
   */
  close() {
    return this.call("close");
  }
  /**
   * Send text message
   * @param {number|string} chatId
   * @param {string} text
   * @param {object} [extra]
   */
  sendMessage(chatId, text, extra = {}) {
    return this.call("sendMessage", { chat_id: chatId, text, ...extra });
  }
  /**
   * Forward a message
   * @param {number|string} chatId
   * @param {number|string} fromChatId
   * @param {number} messageId
   * @param {object} [extra]
   */
  forwardMessage(chatId, fromChatId, messageId, extra = {}) {
    return this.call("forwardMessage", {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_id: messageId,
      ...extra
    });
  }
  /**
   * Forward multiple messages
   */
  forwardMessages(chatId, fromChatId, messageIds, extra = {}) {
    return this.call("forwardMessages", {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_ids: messageIds,
      ...extra
    });
  }
  /**
   * Copy a message
   */
  copyMessage(chatId, fromChatId, messageId, extra = {}) {
    return this.call("copyMessage", {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_id: messageId,
      ...extra
    });
  }
  /**
   * Copy multiple messages
   */
  copyMessages(chatId, fromChatId, messageIds, extra = {}) {
    return this.call("copyMessages", {
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_ids: messageIds,
      ...extra
    });
  }
  /**
   * Send photo
   */
  sendPhoto(chatId, photo, extra = {}) {
    return this.call("sendPhoto", { chat_id: chatId, photo, ...extra });
  }
  /**
   * Send a live photo (photo with short video - Bot API 10.2+)
   * @param {number|string} chatId
   * @param {any} photo - Photo file_id, URL, or input file
   * @param {any} video - Video loop file_id, URL, or input file (max 10s, 10MB)
   * @param {object} [extra] - Extra parameters (receiver_user_id, callback_query_id, caption, etc.)
   */
  sendLivePhoto(chatId, photo, video, extra = {}) {
    return this.call("sendLivePhoto", {
      chat_id: chatId,
      photo,
      video,
      ...extra
    });
  }
  /**
   * Send audio
   */
  sendAudio(chatId, audio, extra = {}) {
    return this.call("sendAudio", { chat_id: chatId, audio, ...extra });
  }
  /**
   * Send document
   */
  sendDocument(chatId, document, extra = {}) {
    return this.call("sendDocument", { chat_id: chatId, document, ...extra });
  }
  /**
   * Send video
   */
  sendVideo(chatId, video, extra = {}) {
    return this.call("sendVideo", { chat_id: chatId, video, ...extra });
  }
  /**
   * Send animation / GIF
   */
  sendAnimation(chatId, animation, extra = {}) {
    return this.call("sendAnimation", { chat_id: chatId, animation, ...extra });
  }
  /**
   * Send voice note
   */
  sendVoice(chatId, voice, extra = {}) {
    return this.call("sendVoice", { chat_id: chatId, voice, ...extra });
  }
  /**
   * Send video note (round video)
   */
  sendVideoNote(chatId, videoNote, extra = {}) {
    return this.call("sendVideoNote", { chat_id: chatId, video_note: videoNote, ...extra });
  }
  /**
   * Send media group (album)
   */
  sendMediaGroup(chatId, media, extra = {}) {
    return this.call("sendMediaGroup", { chat_id: chatId, media, ...extra });
  }
  /**
   * Send location
   */
  sendLocation(chatId, latitude, longitude, extra = {}) {
    return this.call("sendLocation", { chat_id: chatId, latitude, longitude, ...extra });
  }
  /**
   * Edit live location
   */
  editMessageLiveLocation(latitude, longitude, extra = {}) {
    return this.call("editMessageLiveLocation", { latitude, longitude, ...extra });
  }
  /**
   * Stop live location
   */
  stopMessageLiveLocation(extra = {}) {
    return this.call("stopMessageLiveLocation", extra);
  }
  /**
   * Send venue
   */
  sendVenue(chatId, latitude, longitude, title, address, extra = {}) {
    return this.call("sendVenue", {
      chat_id: chatId,
      latitude,
      longitude,
      title,
      address,
      ...extra
    });
  }
  /**
   * Send phone contact
   */
  sendContact(chatId, phoneNumber, firstName, extra = {}) {
    return this.call("sendContact", {
      chat_id: chatId,
      phone_number: phoneNumber,
      first_name: firstName,
      ...extra
    });
  }
  /**
   * Send poll
   */
  sendPoll(chatId, question, options, extra = {}) {
    return this.call("sendPoll", { chat_id: chatId, question, options, ...extra });
  }
  /**
   * Send dice
   */
  sendDice(chatId, extra = {}) {
    return this.call("sendDice", { chat_id: chatId, ...extra });
  }
  /**
   * Send chat action (typing, upload_photo, record_video, etc.)
   */
  sendChatAction(chatId, action, extra = {}) {
    return this.call("sendChatAction", { chat_id: chatId, action, ...extra });
  }
  /**
   * Set message reaction
   */
  setMessageReaction(chatId, messageId, reaction, extra = {}) {
    const formattedReaction = Array.isArray(reaction) ? reaction.map((r) => typeof r === "string" ? { type: "emoji", emoji: r } : r) : typeof reaction === "string" ? [{ type: "emoji", emoji: reaction }] : reaction;
    return this.call("setMessageReaction", {
      chat_id: chatId,
      message_id: messageId,
      reaction: formattedReaction,
      ...extra
    });
  }
  /**
   * Get user profile photos
   */
  getUserProfilePhotos(userId, extra = {}) {
    return this.call("getUserProfilePhotos", { user_id: userId, ...extra });
  }
  /**
   * Get file info
   */
  getFile(fileId) {
    return this.call("getFile", { file_id: fileId });
  }
  /**
   * Helper to get direct download URL of a file
   */
  async getFileLink(fileId) {
    if (typeof fileId === "object" && fileId.file_path) {
      return `${this.getFileBaseUrl()}/${fileId.file_path}`;
    }
    const file = await this.getFile(fileId);
    return `${this.getFileBaseUrl()}/${file.file_path}`;
  }
  /**
   * Ban chat member
   */
  banChatMember(chatId, userId, extra = {}) {
    return this.call("banChatMember", { chat_id: chatId, user_id: userId, ...extra });
  }
  /**
   * Unban chat member
   */
  unbanChatMember(chatId, userId, extra = {}) {
    return this.call("unbanChatMember", { chat_id: chatId, user_id: userId, ...extra });
  }
  /**
   * Restrict chat member
   */
  restrictChatMember(chatId, userId, permissions, extra = {}) {
    return this.call("restrictChatMember", {
      chat_id: chatId,
      user_id: userId,
      permissions,
      ...extra
    });
  }
  /**
   * Promote chat member
   */
  promoteChatMember(chatId, userId, rights = {}) {
    return this.call("promoteChatMember", { chat_id: chatId, user_id: userId, ...rights });
  }
  /**
   * Set chat administrator custom title
   */
  setChatAdministratorCustomTitle(chatId, userId, customTitle) {
    return this.call("setChatAdministratorCustomTitle", {
      chat_id: chatId,
      user_id: userId,
      custom_title: customTitle
    });
  }
  /**
   * Ban chat sender chat
   */
  banChatSenderChat(chatId, senderChatId) {
    return this.call("banChatSenderChat", { chat_id: chatId, sender_chat_id: senderChatId });
  }
  /**
   * Unban chat sender chat
   */
  unbanChatSenderChat(chatId, senderChatId) {
    return this.call("unbanChatSenderChat", { chat_id: chatId, sender_chat_id: senderChatId });
  }
  /**
   * Set chat permissions
   */
  setChatPermissions(chatId, permissions, extra = {}) {
    return this.call("setChatPermissions", { chat_id: chatId, permissions, ...extra });
  }
  /**
   * Export chat invite link
   */
  exportChatInviteLink(chatId) {
    return this.call("exportChatInviteLink", { chat_id: chatId });
  }
  /**
   * Create chat invite link
   */
  createChatInviteLink(chatId, extra = {}) {
    return this.call("createChatInviteLink", { chat_id: chatId, ...extra });
  }
  /**
   * Edit chat invite link
   */
  editChatInviteLink(chatId, inviteLink, extra = {}) {
    return this.call("editChatInviteLink", { chat_id: chatId, invite_link: inviteLink, ...extra });
  }
  /**
   * Revoke chat invite link
   */
  revokeChatInviteLink(chatId, inviteLink) {
    return this.call("revokeChatInviteLink", { chat_id: chatId, invite_link: inviteLink });
  }
  /**
   * Approve chat join request
   */
  approveChatJoinRequest(chatId, userId) {
    return this.call("approveChatJoinRequest", { chat_id: chatId, user_id: userId });
  }
  /**
   * Decline chat join request
   */
  declineChatJoinRequest(chatId, userId) {
    return this.call("declineChatJoinRequest", { chat_id: chatId, user_id: userId });
  }
  /**
   * Set chat photo
   */
  setChatPhoto(chatId, photo) {
    return this.call("setChatPhoto", { chat_id: chatId, photo });
  }
  /**
   * Delete chat photo
   */
  deleteChatPhoto(chatId) {
    return this.call("deleteChatPhoto", { chat_id: chatId });
  }
  /**
   * Set chat title
   */
  setChatTitle(chatId, title) {
    return this.call("setChatTitle", { chat_id: chatId, title });
  }
  /**
   * Set chat description
   */
  setChatDescription(chatId, description) {
    return this.call("setChatDescription", { chat_id: chatId, description });
  }
  /**
   * Pin message in chat
   */
  pinChatMessage(chatId, messageId, extra = {}) {
    return this.call("pinChatMessage", { chat_id: chatId, message_id: messageId, ...extra });
  }
  /**
   * Unpin message in chat
   */
  unpinChatMessage(chatId, messageId, extra = {}) {
    return this.call("unpinChatMessage", { chat_id: chatId, message_id: messageId, ...extra });
  }
  /**
   * Unpin all chat messages
   */
  unpinAllChatMessages(chatId) {
    return this.call("unpinAllChatMessages", { chat_id: chatId });
  }
  /**
   * Leave chat
   */
  leaveChat(chatId) {
    return this.call("leaveChat", { chat_id: chatId });
  }
  /**
   * Get chat info
   */
  getChat(chatId) {
    return this.call("getChat", { chat_id: chatId });
  }
  /**
   * Get chat administrators
   */
  getChatAdministrators(chatId) {
    return this.call("getChatAdministrators", { chat_id: chatId });
  }
  /**
   * Get chat member count
   */
  getChatMemberCount(chatId) {
    return this.call("getChatMemberCount", { chat_id: chatId });
  }
  /**
   * Get chat member info
   */
  getChatMember(chatId, userId) {
    return this.call("getChatMember", { chat_id: chatId, user_id: userId });
  }
  /**
   * Set chat sticker set
   */
  setChatStickerSet(chatId, stickerSetName) {
    return this.call("setChatStickerSet", { chat_id: chatId, sticker_set_name: stickerSetName });
  }
  /**
   * Delete chat sticker set
   */
  deleteChatStickerSet(chatId) {
    return this.call("deleteChatStickerSet", { chat_id: chatId });
  }
  /**
   * Answer callback query
   */
  answerCallbackQuery(callbackQueryId, extra = {}) {
    return this.call("answerCallbackQuery", {
      callback_query_id: callbackQueryId,
      ...extra
    });
  }
  /**
   * Alias for answerCallbackQuery
   */
  answerCbQuery(callbackQueryId, extra = {}) {
    return this.answerCallbackQuery(callbackQueryId, extra);
  }
  /**
   * Edit message text
   */
  editMessageText(chatId, messageId, inlineMessageId, text, extra = {}) {
    const payload = { text, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call("editMessageText", payload);
  }
  /**
   * Edit message caption
   */
  editMessageCaption(chatId, messageId, inlineMessageId, caption, extra = {}) {
    const payload = { caption, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call("editMessageCaption", payload);
  }
  /**
   * Edit message media
   */
  editMessageMedia(chatId, messageId, inlineMessageId, media, extra = {}) {
    const payload = { media, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call("editMessageMedia", payload);
  }
  /**
   * Edit message reply markup
   */
  editMessageReplyMarkup(chatId, messageId, inlineMessageId, replyMarkup, extra = {}) {
    const payload = { reply_markup: replyMarkup, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call("editMessageReplyMarkup", payload);
  }
  /**
   * Stop poll
   */
  stopPoll(chatId, messageId, extra = {}) {
    return this.call("stopPoll", { chat_id: chatId, message_id: messageId, ...extra });
  }
  /**
   * Delete single message
   */
  deleteMessage(chatId, messageId) {
    return this.call("deleteMessage", { chat_id: chatId, message_id: messageId });
  }
  /**
   * Delete multiple messages
   */
  deleteMessages(chatId, messageIds) {
    return this.call("deleteMessages", { chat_id: chatId, message_ids: messageIds });
  }
  /**
   * Answer inline query
   */
  answerInlineQuery(inlineQueryId, results, extra = {}) {
    return this.call("answerInlineQuery", {
      inline_query_id: inlineQueryId,
      results,
      ...extra
    });
  }
  /**
   * Answer web app query
   */
  answerWebAppQuery(webAppQueryId, result) {
    return this.call("answerWebAppQuery", {
      web_app_query_id: webAppQueryId,
      result
    });
  }
  /**
   * Set webhook
   */
  setWebhook(url, extra = {}) {
    return this.call("setWebhook", { url, ...extra });
  }
  /**
   * Delete webhook
   */
  deleteWebhook(extra = {}) {
    return this.call("deleteWebhook", extra);
  }
  /**
   * Get webhook info
   */
  getWebhookInfo() {
    return this.call("getWebhookInfo");
  }
  /**
   * Get updates via polling
   */
  getUpdates(offset, limit, timeout, allowedUpdates) {
    const payload = {};
    if (offset !== void 0) payload.offset = offset;
    if (limit !== void 0) payload.limit = limit;
    if (timeout !== void 0) payload.timeout = timeout;
    if (allowedUpdates !== void 0) payload.allowed_updates = allowedUpdates;
    return this.call("getUpdates", payload);
  }
  /**
   * Bot commands and metadata
   */
  setMyCommands(commands, extra = {}) {
    const serialized = Array.isArray(commands) ? commands.map((cmd) => typeof cmd?.toJSON === "function" ? cmd.toJSON() : cmd) : commands;
    return this.call("setMyCommands", { commands: serialized, ...extra });
  }
  deleteMyCommands(extra = {}) {
    return this.call("deleteMyCommands", extra);
  }
  getMyCommands(extra = {}) {
    return this.call("getMyCommands", extra);
  }
  setMyName(name, extra = {}) {
    return this.call("setMyName", { name, ...extra });
  }
  getMyName(extra = {}) {
    return this.call("getMyName", extra);
  }
  setMyDescription(description, extra = {}) {
    return this.call("setMyDescription", { description, ...extra });
  }
  getMyDescription(extra = {}) {
    return this.call("getMyDescription", extra);
  }
  setMyShortDescription(shortDescription, extra = {}) {
    return this.call("setMyShortDescription", { short_description: shortDescription, ...extra });
  }
  getMyShortDescription(extra = {}) {
    return this.call("getMyShortDescription", extra);
  }
  setChatMenuButton(extra = {}) {
    return this.call("setChatMenuButton", extra);
  }
  getChatMenuButton(extra = {}) {
    return this.call("getChatMenuButton", extra);
  }
  setMyDefaultAdministratorRights(extra = {}) {
    return this.call("setMyDefaultAdministratorRights", extra);
  }
  getMyDefaultAdministratorRights(extra = {}) {
    return this.call("getMyDefaultAdministratorRights", extra);
  }
  // ==========================================
  // Forum Topics Management (Telegram API)
  // ==========================================
  /**
   * Create a topic in a forum supergroup chat
   * @param {number|string} chatId
   * @param {string} name
   * @param {object} [extra] - icon_color, icon_custom_emoji_id
   */
  createForumTopic(chatId, name, extra = {}) {
    return this.call("createForumTopic", { chat_id: chatId, name, ...extra });
  }
  /**
   * Edit name and icon of a forum topic
   * @param {number|string} chatId
   * @param {number} messageThreadId
   * @param {object} [extra] - name, icon_custom_emoji_id
   */
  editForumTopic(chatId, messageThreadId, extra = {}) {
    return this.call("editForumTopic", {
      chat_id: chatId,
      message_thread_id: messageThreadId,
      ...extra
    });
  }
  /**
   * Close an open topic in a forum supergroup chat
   * @param {number|string} chatId
   * @param {number} messageThreadId
   */
  closeForumTopic(chatId, messageThreadId) {
    return this.call("closeForumTopic", {
      chat_id: chatId,
      message_thread_id: messageThreadId
    });
  }
  /**
   * Reopen a closed topic in a forum supergroup chat
   * @param {number|string} chatId
   * @param {number} messageThreadId
   */
  reopenForumTopic(chatId, messageThreadId) {
    return this.call("reopenForumTopic", {
      chat_id: chatId,
      message_thread_id: messageThreadId
    });
  }
  /**
   * Delete a forum topic along with all its messages
   * @param {number|string} chatId
   * @param {number} messageThreadId
   */
  deleteForumTopic(chatId, messageThreadId) {
    return this.call("deleteForumTopic", {
      chat_id: chatId,
      message_thread_id: messageThreadId
    });
  }
  /**
   * Unpin all messages in a forum topic
   * @param {number|string} chatId
   * @param {number} messageThreadId
   */
  unpinAllForumTopicMessages(chatId, messageThreadId) {
    return this.call("unpinAllForumTopicMessages", {
      chat_id: chatId,
      message_thread_id: messageThreadId
    });
  }
  /**
   * Edit General forum topic
   * @param {number|string} chatId
   * @param {string} name
   */
  editGeneralForumTopic(chatId, name) {
    return this.call("editGeneralForumTopic", { chat_id: chatId, name });
  }
  /**
   * Close General forum topic
   * @param {number|string} chatId
   */
  closeGeneralForumTopic(chatId) {
    return this.call("closeGeneralForumTopic", { chat_id: chatId });
  }
  /**
   * Reopen General forum topic
   * @param {number|string} chatId
   */
  reopenGeneralForumTopic(chatId) {
    return this.call("reopenGeneralForumTopic", { chat_id: chatId });
  }
  /**
   * Hide General forum topic
   * @param {number|string} chatId
   */
  hideGeneralForumTopic(chatId) {
    return this.call("hideGeneralForumTopic", { chat_id: chatId });
  }
  /**
   * Unhide General forum topic
   * @param {number|string} chatId
   */
  unhideGeneralForumTopic(chatId) {
    return this.call("unhideGeneralForumTopic", { chat_id: chatId });
  }
  // ==========================================
  // Telegram Stars & Payments
  // ==========================================
  /**
   * Send invoice (Supports Telegram Stars XTR and standard currencies)
   * @param {number|string} chatId
   * @param {string} title
   * @param {string} description
   * @param {string} payload
   * @param {string} currency - e.g. 'XTR' for Telegram Stars, or 'USD', 'EUR', 'IDR'
   * @param {Array<{label: string, amount: number}>} prices
   * @param {object} [extra]
   */
  sendInvoice(chatId, title, description, payload, currency, prices, extra = {}) {
    return this.call("sendInvoice", {
      chat_id: chatId,
      title,
      description,
      payload,
      currency,
      prices,
      ...extra
    });
  }
  /**
   * Create an invoice link that can be paid in Telegram
   * @param {string} title
   * @param {string} description
   * @param {string} payload
   * @param {string} currency - e.g. 'XTR'
   * @param {Array<{label: string, amount: number}>} prices
   * @param {object} [extra]
   * @returns {Promise<string>}
   */
  createInvoiceLink(title, description, payload, currency, prices, extra = {}) {
    return this.call("createInvoiceLink", {
      title,
      description,
      payload,
      currency,
      prices,
      ...extra
    });
  }
  /**
   * Answer shipping query
   * @param {string} shippingQueryId
   * @param {boolean} ok
   * @param {object} [extra]
   */
  answerShippingQuery(shippingQueryId, ok, extra = {}) {
    return this.call("answerShippingQuery", {
      shipping_query_id: shippingQueryId,
      ok: Boolean(ok),
      ...extra
    });
  }
  /**
   * Answer pre checkout query
   * @param {string} preCheckoutQueryId
   * @param {boolean} ok
   * @param {string} [errorMessage]
   */
  answerPreCheckoutQuery(preCheckoutQueryId, ok, errorMessage = void 0) {
    const payload = {
      pre_checkout_query_id: preCheckoutQueryId,
      ok: Boolean(ok)
    };
    if (!ok && errorMessage) {
      payload.error_message = errorMessage;
    }
    return this.call("answerPreCheckoutQuery", payload);
  }
  /**
   * Get transactions of the bot in Telegram Stars
   * @param {object} [extra] - offset, limit
   */
  getStarTransactions(extra = {}) {
    return this.call("getStarTransactions", extra);
  }
  /**
   * Refund a successful payment in Telegram Stars
   * @param {number} userId
   * @param {string} telegramPaymentChargeId
   */
  refundStarPayment(userId, telegramPaymentChargeId) {
    return this.call("refundStarPayment", {
      user_id: userId,
      telegram_payment_charge_id: telegramPaymentChargeId
    });
  }
  /**
   * Edit user Star subscription status
   * @param {number} userId
   * @param {string} telegramPaymentChargeId
   * @param {boolean} isCanceled
   */
  editUserStarSubscription(userId, telegramPaymentChargeId, isCanceled) {
    return this.call("editUserStarSubscription", {
      user_id: userId,
      telegram_payment_charge_id: telegramPaymentChargeId,
      is_canceled: Boolean(isCanceled)
    });
  }
  // ==========================================
  // Paid Media (Telegram Stars)
  // ==========================================
  /**
   * Send paid media (photos/videos requiring Telegram Stars to unlock)
   * @param {number|string} chatId
   * @param {number} starCount - Number of Telegram Stars required
   * @param {Array<object>} media - Array of InputPaidMediaPhoto / InputPaidMediaVideo
   * @param {object} [extra]
   */
  sendPaidMedia(chatId, starCount, media, extra = {}) {
    return this.call("sendPaidMedia", {
      chat_id: chatId,
      star_count: starCount,
      media,
      ...extra
    });
  }
  /**
   * Edit message paid media
   * @param {number|string} chatId
   * @param {number} [messageId]
   * @param {string} [inlineMessageId]
   * @param {Array<object>} media
   * @param {object} [extra]
   */
  editMessagePaidMedia(chatId, messageId, inlineMessageId, media, extra = {}) {
    const payload = { media, ...extra };
    if (chatId) payload.chat_id = chatId;
    if (messageId) payload.message_id = messageId;
    if (inlineMessageId) payload.inline_message_id = inlineMessageId;
    return this.call("editMessagePaidMedia", payload);
  }
  // ==========================================
  // Gifts & Verifications
  // ==========================================
  /**
   * Send a gift to a given user
   * @param {number} userId
   * @param {string} giftId
   * @param {object} [extra] - text, text_parse_mode, text_entities, pay_for_upgrade
   */
  sendGift(userId, giftId, extra = {}) {
    return this.call("sendGift", {
      user_id: userId,
      gift_id: giftId,
      ...extra
    });
  }
  /**
   * Get list of gifts that can be sent by the bot to users
   */
  getAvailableGifts() {
    return this.call("getAvailableGifts");
  }
  /**
   * Get gifts received by a user
   * @param {number} userId
   * @param {object} [extra] - offset, limit
   */
  getUserGifts(userId, extra = {}) {
    return this.call("getUserGifts", { user_id: userId, ...extra });
  }
  /**
   * Verify a user on behalf of the organization
   * @param {number} userId
   * @param {string} [customDescription='']
   */
  verifyUser(userId, customDescription = "") {
    return this.call("verifyUser", {
      user_id: userId,
      custom_description: customDescription
    });
  }
  /**
   * Verify a chat on behalf of the organization
   * @param {number|string} chatId
   * @param {string} [customDescription='']
   */
  verifyChat(chatId, customDescription = "") {
    return this.call("verifyChat", {
      chat_id: chatId,
      custom_description: customDescription
    });
  }
  /**
   * Remove verification from a user
   * @param {number} userId
   */
  removeUserVerification(userId) {
    return this.call("removeUserVerification", { user_id: userId });
  }
  /**
   * Remove verification from a chat
   * @param {number|string} chatId
   */
  removeChatVerification(chatId) {
    return this.call("removeChatVerification", { chat_id: chatId });
  }
  // ==========================================
  // Telegram Business API
  // ==========================================
  /**
   * Get information about the connection of the bot with a business account
   * @param {string} businessConnectionId
   */
  getBusinessConnection(businessConnectionId) {
    return this.call("getBusinessConnection", {
      business_connection_id: businessConnectionId
    });
  }
  // ==========================================
  // Boosts & Prepared Inline Messages
  // ==========================================
  /**
   * Get list of boosts added to a chat by a user
   * @param {number|string} chatId
   * @param {number} userId
   */
  getUserChatBoosts(chatId, userId) {
    return this.call("getUserChatBoosts", {
      chat_id: chatId,
      user_id: userId
    });
  }
  // ==========================================
  // Stickers & Custom Emojis
  // ==========================================
  /**
   * Send a sticker
   * @param {number|string} chatId
   * @param {any} sticker - file_id, url, path, Buffer, Stream
   * @param {object} [extra]
   */
  sendSticker(chatId, sticker, extra = {}) {
    return this.call("sendSticker", { chat_id: chatId, sticker, ...extra });
  }
  /**
   * Get sticker set by name
   * @param {string} name
   */
  getStickerSet(name) {
    return this.call("getStickerSet", { name });
  }
  /**
   * Get custom emoji stickers by IDs
   * @param {Array<string>} customEmojiIds
   */
  getCustomEmojiStickers(customEmojiIds) {
    return this.call("getCustomEmojiStickers", {
      custom_emoji_ids: customEmojiIds
    });
  }
  /**
   * Upload sticker file
   * @param {number} userId
   * @param {any} sticker
   * @param {'static'|'animated'|'video'} stickerFormat
   */
  uploadStickerFile(userId, sticker, stickerFormat) {
    return this.call("uploadStickerFile", {
      user_id: userId,
      sticker,
      sticker_format: stickerFormat
    });
  }
  /**
   * Create new sticker set
   * @param {number} userId
   * @param {string} name
   * @param {string} title
   * @param {Array<object>} stickers
   * @param {object} [extra]
   */
  createNewStickerSet(userId, name, title, stickers, extra = {}) {
    return this.call("createNewStickerSet", {
      user_id: userId,
      name,
      title,
      stickers,
      ...extra
    });
  }
  /**
   * Add sticker to existing set
   * @param {number} userId
   * @param {string} name
   * @param {object} sticker
   */
  addStickerToSet(userId, name, sticker) {
    return this.call("addStickerToSet", {
      user_id: userId,
      name,
      sticker
    });
  }
  /**
   * Set sticker position in set
   * @param {string} sticker
   * @param {number} position
   */
  setStickerPositionInSet(sticker, position) {
    return this.call("setStickerPositionInSet", {
      sticker,
      position
    });
  }
  /**
   * Delete sticker from set
   * @param {string} sticker
   */
  deleteStickerFromSet(sticker) {
    return this.call("deleteStickerFromSet", { sticker });
  }
  /**
   * Set sticker set title
   * @param {string} name
   * @param {string} title
   */
  setStickerSetTitle(name, title) {
    return this.call("setStickerSetTitle", { name, title });
  }
  /**
   * Delete sticker set
   * @param {string} name
   */
  deleteStickerSet(name) {
    return this.call("deleteStickerSet", { name });
  }
  // ==========================================
  // Games & Passport
  // ==========================================
  /**
   * Send game
   * @param {number|string} chatId
   * @param {string} gameShortName
   * @param {object} [extra]
   */
  sendGame(chatId, gameShortName, extra = {}) {
    return this.call("sendGame", {
      chat_id: chatId,
      game_short_name: gameShortName,
      ...extra
    });
  }
  /**
   * Set user score in game
   * @param {number} userId
   * @param {number} score
   * @param {object} [extra]
   */
  setGameScore(userId, score, extra = {}) {
    return this.call("setGameScore", {
      user_id: userId,
      score,
      ...extra
    });
  }
  /**
   * Get game high scores
   * @param {number} userId
   * @param {object} [extra]
   */
  getGameHighScores(userId, extra = {}) {
    return this.call("getGameHighScores", {
      user_id: userId,
      ...extra
    });
  }
  /**
   * Set passport data errors
   * @param {number} userId
   * @param {Array<object>} errors
   */
  setPassportDataErrors(userId, errors) {
    return this.call("setPassportDataErrors", {
      user_id: userId,
      errors
    });
  }
  // ==========================================
  // Bot API 10.3 (August 24, 2026) Updates
  // ==========================================
  /**
   * Send a rich message
   * @param {number|string} chatId
   * @param {object|Array} richMessage
   * @param {object} [extra]
   */
  sendRichMessage(chatId, richMessage, extra = {}) {
    const rm = typeof richMessage?.compile === "function" ? richMessage.compile() : typeof richMessage?.build === "function" ? richMessage.build() : richMessage;
    const payload = {
      chat_id: chatId,
      rich_message: rm,
      ...rm?.reply_markup ? { reply_markup: rm.reply_markup } : {},
      ...extra
    };
    return this.call("sendRichMessage", payload).catch(async (err) => {
      if (err.errorCode === 404 || err.description?.includes("Method not found") || err.description?.includes("Unknown method") || err.description?.includes("Bad Request")) {
        const text = rm?.text || (typeof rm === "string" ? rm : " ");
        const parseMode = rm?.parse_mode || extra.parse_mode || "HTML";
        const replyMarkup = rm?.reply_markup || extra.reply_markup;
        return this.sendMessage(chatId, text, {
          parse_mode: parseMode,
          ...replyMarkup ? { reply_markup: replyMarkup } : {},
          ...extra
        });
      }
      throw err;
    });
  }
  /**
   * Send a rich message draft
   * @param {number|string} chatId
   * @param {object|Array} draft
   * @param {object} [extra]
   */
  sendRichMessageDraft(chatId, draft, extra = {}) {
    const d = typeof draft?.compile === "function" ? draft.compile() : typeof draft?.build === "function" ? draft.build() : draft;
    const draftId = extra.draft_id ?? d?.draft_id ?? Math.floor(Math.random() * 2147483647) + 1;
    return this.call("sendRichMessageDraft", {
      chat_id: chatId,
      draft_id: draftId,
      draft: d,
      ...extra
    }).catch(async (err) => {
      if (err.errorCode === 404 || err.description?.includes("Method not found") || err.description?.includes("Unknown method")) {
        const text = d?.text || (typeof d === "string" ? d : " ");
        return this.sendMessageDraft(chatId, text, {
          draft_id: draftId,
          ...extra
        }).catch(() => null);
      }
      throw err;
    });
  }
  /**
   * Edit rich message text
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {object|Array} richMessage
   * @param {object} [extra]
   */
  editRichMessageText(chatId, messageId, richMessage, extra = {}) {
    const rm = typeof richMessage?.compile === "function" ? richMessage.compile() : typeof richMessage?.build === "function" ? richMessage.build() : richMessage;
    const payload = {
      chat_id: chatId,
      message_id: messageId,
      rich_message: rm,
      ...rm?.reply_markup ? { reply_markup: rm.reply_markup } : {},
      ...extra
    };
    return this.call("editRichMessageText", payload).catch(async (err) => {
      if (err.errorCode === 404 || err.description?.includes("Method not found") || err.description?.includes("Unknown method") || err.description?.includes("Bad Request")) {
        const text = rm?.text || (typeof rm === "string" ? rm : " ");
        const parseMode = rm?.parse_mode || extra.parse_mode || "HTML";
        const replyMarkup = rm?.reply_markup || extra.reply_markup;
        return this.editMessageText(chatId, messageId, void 0, text, {
          parse_mode: parseMode,
          ...replyMarkup ? { reply_markup: replyMarkup } : {},
          ...extra
        });
      }
      throw err;
    });
  }
  /**
   * Edit rich message caption
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {string} caption
   * @param {object} [extra]
   */
  editRichMessageCaption(chatId, messageId, caption, extra = {}) {
    return this.call("editRichMessageCaption", {
      chat_id: chatId,
      message_id: messageId,
      caption,
      ...extra
    }).catch(async (err) => {
      if (err.errorCode === 404 || err.description?.includes("Method not found") || err.description?.includes("Unknown method") || err.description?.includes("Bad Request")) {
        return this.editMessageCaption(chatId, messageId, void 0, caption, extra);
      }
      throw err;
    });
  }
  /**
   * Send an ephemeral message (Bot API 10.3 EphemeralMessageParameters)
   * @param {number|string} chatId
   * @param {string|object} text
   * @param {object|number} [ephemeralParameters={}]
   * @param {object} [extra={}]
   */
  sendEphemeralMessage(chatId, text, ephemeralParameters = {}, extra = {}) {
    let params = ephemeralParameters;
    if (typeof ephemeralParameters === "number") {
      params = { lifetime: ephemeralParameters };
    } else if (ephemeralParameters && typeof ephemeralParameters.toJSON === "function") {
      params = ephemeralParameters.toJSON();
    }
    const payload = {
      chat_id: chatId,
      text: typeof text === "string" ? text : text?.text || String(text),
      ...params && typeof params === "object" ? {
        ephemeral_message_parameters: params,
        ephemeral_parameters: params
      } : {},
      ...extra
    };
    if (text && typeof text === "object" && (text.blocks || typeof text.compile === "function")) {
      const compiled = typeof text.compile === "function" ? text.compile() : text;
      payload.text = compiled.text;
      if (compiled.blocks) payload.blocks = compiled.blocks;
      if (compiled.reply_markup && !payload.reply_markup) payload.reply_markup = compiled.reply_markup;
    }
    const autoDeleteSeconds = params?.autoDeleteSeconds || params?.lifetime || (typeof ephemeralParameters === "number" ? ephemeralParameters : null);
    return this.call("sendEphemeralMessage", payload).catch(async (err) => {
      if (err.errorCode === 404 || err.description?.includes("Method not found") || err.description?.includes("Unknown method") || err.description?.includes("Bad Request")) {
        const msg = await this.sendMessage(chatId, payload.text, extra);
        if (autoDeleteSeconds && msg?.message_id) {
          setTimeout(() => {
            this.deleteMessage(chatId, msg.message_id).catch(() => {
            });
          }, autoDeleteSeconds * 1e3);
        }
        return msg;
      }
      throw err;
    });
  }
  /**
   * Send a formatted table to a chat (HTML Table or Native Bot API 10.3 Card)
   * @param {number|string} chatId
   * @param {Array<string>|Table|InputRichBlockTable} headersOrTable
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   */
  sendTable(chatId, headersOrTable, rows = [], options = {}) {
    if (options.rich === true || options.card === true || options.style === "card" || options.native === true) {
      return this.sendRichTable(chatId, headersOrTable, rows, options);
    }
    let tableHtml;
    if (headersOrTable instanceof Table || headersOrTable && typeof headersOrTable.toHtml === "function") {
      tableHtml = headersOrTable.toHtml(options);
    } else {
      tableHtml = Table.html(headersOrTable, rows, options);
    }
    return this.sendMessage(chatId, tableHtml, {
      parse_mode: "HTML",
      ...options
    });
  }
  /**
   * Send a native Bot API 10.3 Rich Message Table (renders modern card table UI)
   * @param {number|string} chatId
   * @param {Array<string>|Table|InputRichBlockTable|object} headersOrTable
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   */
  sendRichTable(chatId, headersOrTable, rows = [], options = {}) {
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
        col1Width: headersOrTable.col1Width,
        ...options
      });
    } else if (headersOrTable && typeof headersOrTable === "object" && !Array.isArray(headersOrTable)) {
      block = new InputRichBlockTable(headersOrTable);
    } else {
      block = new InputRichBlockTable(headersOrTable, rows, { is_bordered: true, ...options });
    }
    const titleText = options.title || block.title || "";
    const caption = options.caption || block.caption || "";
    const headerPrefix = titleText ? `<b>${titleText}</b>

` : "";
    const footerSuffix = caption ? `

<i>${caption}</i>` : "";
    return this.sendRichMessage(chatId, {
      text: `${headerPrefix}${block.toHtml()}${footerSuffix}`,
      parse_mode: "HTML",
      blocks: [block.toJSON()]
    }, options);
  }
  /**
   * Send a Card Table to a chat (as Rich Block or styled SVG Card Image)
   * @param {number|string} chatId
   * @param {Array<string>|Table} headersOrTable
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   */
  sendTableCard(chatId, headersOrTable, rows = [], options = {}) {
    if (options.asImage || options.photo || options.image) {
      const table = headersOrTable instanceof Table ? headersOrTable : new Table(headersOrTable, rows, options);
      const svgBuffer = table.toBuffer(options);
      return this.sendPhoto(chatId, {
        source: svgBuffer,
        filename: "table-card.svg"
      }, {
        caption: options.caption || options.title || "",
        parse_mode: options.parse_mode || "HTML",
        ...options
      });
    }
    return this.sendRichTable(chatId, headersOrTable, rows, { is_bordered: true, ...options });
  }
  /**
   * Send multiple stacked card tables (e.g. SYSTEM and PROFILE cards)
   * @param {number|string} chatId
   * @param {Array<Table|object>} tables
   * @param {object} [options={}]
   */
  sendCardTables(chatId, tables, options = {}) {
    if (options.asImage || options.photo || options.image) {
      const svg = Table.multiCardSvg(tables, options);
      const buffer = Buffer.from(svg, "utf-8");
      return this.sendPhoto(chatId, {
        source: buffer,
        filename: "tables-cards.svg"
      }, {
        caption: options.caption || "",
        parse_mode: options.parse_mode || "HTML",
        ...options
      });
    }
    const list = Array.isArray(tables) ? tables : [tables];
    const blocks = list.map((t) => {
      const tableInst = t instanceof Table ? t : t instanceof InputRichBlockTable ? t : new Table(t);
      return tableInst.toRichBlock ? tableInst.toRichBlock() : tableInst.toJSON();
    });
    const htmlParts = list.map((t) => {
      if (typeof t?.toHtml === "function") return t.toHtml();
      return new Table(t).toHtml();
    });
    return this.sendRichMessage(chatId, {
      text: htmlParts.join("\n\n"),
      parse_mode: "HTML",
      blocks
    }, options);
  }
  /**
   * Edit ephemeral message text (Bot API 10.3 supports rich_message)
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {string|object} text
   * @param {object} [extra]
   */
  editEphemeralMessageText(chatId, messageId, text, extra = {}) {
    const payload = {
      chat_id: chatId,
      message_id: messageId,
      ...extra
    };
    if (extra.rich_message) {
      payload.rich_message = typeof extra.rich_message.toJSON === "function" ? extra.rich_message.toJSON() : extra.rich_message;
    } else if (text && typeof text === "object" && (text.blocks || typeof text.compile === "function" || typeof text.toJSON === "function")) {
      payload.rich_message = typeof text.compile === "function" ? text.compile() : typeof text.toJSON === "function" ? text.toJSON() : text;
    } else {
      payload.text = String(text);
    }
    return this.call("editEphemeralMessageText", payload);
  }
  /**
   * Edit ephemeral message media (Bot API 10.3 supports file upload)
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {object} media
   * @param {object} [extra]
   */
  editEphemeralMessageMedia(chatId, messageId, media, extra = {}) {
    return this.call("editEphemeralMessageMedia", {
      chat_id: chatId,
      message_id: messageId,
      media,
      ...extra
    });
  }
  /**
   * Edit ephemeral message caption (Bot API 10.3 supports show_caption_above_media)
   * @param {number|string} chatId
   * @param {number} messageId
   * @param {string} caption
   * @param {object} [extra]
   */
  editEphemeralMessageCaption(chatId, messageId, caption, extra = {}) {
    const payload = {
      chat_id: chatId,
      message_id: messageId,
      caption,
      ...extra
    };
    if (extra.show_caption_above_media !== void 0) {
      payload.show_caption_above_media = Boolean(extra.show_caption_above_media);
    }
    return this.call("editEphemeralMessageCaption", payload);
  }
  /**
   * Delete an ephemeral message
   * @param {number|string} chatId
   * @param {number} messageId
   */
  deleteEphemeralMessage(chatId, messageId) {
    return this.call("deleteEphemeralMessage", {
      chat_id: chatId,
      message_id: messageId
    });
  }
  /**
   * Get managed bot access settings
   * @param {number} userId - Unique identifier of the target user who manages the bot
   * @param {object} [extra]
   */
  getManagedBotAccessSettings(userId, extra = {}) {
    if (!userId) {
      throw new Error("Telegram.getManagedBotAccessSettings(userId) requires a valid userId.");
    }
    return this.call("getManagedBotAccessSettings", {
      user_id: userId,
      ...extra
    });
  }
  /**
   * Set managed bot access settings
   * @param {number} userId - Unique identifier of the target user who manages the bot
   * @param {object} [settings={}]
   * @param {object} [extra={}]
   */
  setManagedBotAccessSettings(userId, settings = {}, extra = {}) {
    if (!userId) {
      throw new Error("Telegram.setManagedBotAccessSettings(userId, settings) requires a valid userId.");
    }
    return this.call("setManagedBotAccessSettings", {
      user_id: userId,
      ...settings,
      ...extra
    });
  }
  /**
   * Get user personal chat messages
   * @param {number} userId
   * @param {object} [extra]
   */
  getUserPersonalChatMessages(userId, extra = {}) {
    return this.call("getUserPersonalChatMessages", {
      user_id: userId,
      ...extra
    });
  }
  /**
   * Send message draft
   * @param {number|string} chatId
   * @param {string} text
   * @param {object} [extra]
   */
  sendMessageDraft(chatId, text, extra = {}) {
    const draftId = extra.draft_id ?? Math.floor(Math.random() * 2147483647) + 1;
    return this.call("sendMessageDraft", {
      chat_id: chatId,
      draft_id: draftId,
      text,
      ...extra
    });
  }
  /**
   * Save a prepared inline message for a Telegram Mini App user (Bot API 8.0+)
   * @param {number} userId - Unique identifier of target user who can send the message
   * @param {object} result - InlineQueryResult object describing the message to be sent
   * @param {object} [options] - Allowed chats options (allow_user_chats, allow_bot_chats, allow_group_chats, allow_channel_chats)
   * @returns {Promise<{ id: string, expiration_date: number }>}
   */
  savePreparedInlineMessage(userId, result, options = {}) {
    if (!userId) {
      throw new Error("Telegram.savePreparedInlineMessage(userId, result) requires a valid userId.");
    }
    if (!result) {
      throw new Error("Telegram.savePreparedInlineMessage(userId, result) requires a valid result object.");
    }
    const payload = {
      user_id: userId,
      result: typeof result.toJSON === "function" ? result.toJSON() : result,
      allow_user_chats: options.allow_user_chats ?? true,
      allow_bot_chats: options.allow_bot_chats ?? true,
      allow_group_chats: options.allow_group_chats ?? true,
      allow_channel_chats: options.allow_channel_chats ?? true,
      ...options
    };
    return this.call("savePreparedInlineMessage", payload);
  }
  /**
   * Stream text response into a Telegram chat with throttling, token buffering, and rate limit protection
   * @param {number|string} chatId
   * @param {AsyncIterable<string>|Iterable<string>|ReadableStream|Array<string>} textStream
   * @param {object} [options]
   * @returns {Promise<{ message_id?: number, text: string, done: boolean }>}
   */
  streamText(chatId, textStream, options = {}) {
    return streamText(this, chatId, textStream, options);
  }
  /**
   * Stream live draft response into a Telegram chat (using Bot API live draft updates)
   * @param {number|string} chatId
   * @param {AsyncIterable<string>|Iterable<string>|ReadableStream|Array<string>} textStream
   * @param {object} [options]
   * @returns {Promise<{ message_id?: number, text: string, done: boolean }>}
   */
  streamDraft(chatId, textStream, options = {}) {
    return streamText(this, chatId, textStream, { ...options, useDraft: true });
  }
};

// lib/serialize.js
function serializeMessage(msg) {
  if (!msg) return null;
  const serialized = {
    id: msg.message_id,
    chatId: msg.chat?.id,
    senderId: msg.from?.id,
    from: msg.from || {},
    chat: msg.chat || {},
    date: msg.date,
    text: msg.text || msg.caption || "",
    type: "unknown",
    media: null,
    quoted: null,
    mentioned: [],
    raw: msg
  };
  if (msg.text) {
    serialized.type = "text";
  } else if (msg.photo && msg.photo.length > 0) {
    serialized.type = "photo";
    const photo = msg.photo[msg.photo.length - 1];
    serialized.media = {
      fileId: photo.file_id,
      fileUniqueId: photo.file_unique_id,
      fileSize: photo.file_size,
      width: photo.width,
      height: photo.height
    };
  } else if (msg.video) {
    serialized.type = "video";
    serialized.media = {
      fileId: msg.video.file_id,
      fileUniqueId: msg.video.file_unique_id,
      fileSize: msg.video.file_size,
      duration: msg.video.duration,
      mimeType: msg.video.mime_type,
      width: msg.video.width,
      height: msg.video.height
    };
  } else if (msg.document) {
    serialized.type = "document";
    serialized.media = {
      fileId: msg.document.file_id,
      fileUniqueId: msg.document.file_unique_id,
      fileName: msg.document.file_name,
      fileSize: msg.document.file_size,
      mimeType: msg.document.mime_type
    };
  } else if (msg.audio) {
    serialized.type = "audio";
    serialized.media = {
      fileId: msg.audio.file_id,
      fileUniqueId: msg.audio.file_unique_id,
      duration: msg.audio.duration,
      performer: msg.audio.performer,
      title: msg.audio.title,
      fileSize: msg.audio.file_size,
      mimeType: msg.audio.mime_type
    };
  } else if (msg.voice) {
    serialized.type = "voice";
    serialized.media = {
      fileId: msg.voice.file_id,
      fileUniqueId: msg.voice.file_unique_id,
      duration: msg.voice.duration,
      fileSize: msg.voice.file_size,
      mimeType: msg.voice.mime_type
    };
  } else if (msg.sticker) {
    serialized.type = "sticker";
    serialized.media = {
      fileId: msg.sticker.file_id,
      fileUniqueId: msg.sticker.file_unique_id,
      emoji: msg.sticker.emoji,
      isAnimated: msg.sticker.is_animated,
      isVideo: msg.sticker.is_video
    };
  } else if (msg.contact) {
    serialized.type = "contact";
    serialized.contact = msg.contact;
  } else if (msg.location) {
    serialized.type = "location";
    serialized.location = msg.location;
  } else if (msg.poll) {
    serialized.type = "poll";
    serialized.poll = msg.poll;
  } else if (msg.live_photo) {
    serialized.type = "live_photo";
    serialized.media = msg.live_photo;
  }
  serialized.receiver_user = msg.receiver_user || null;
  serialized.receiverUser = msg.receiver_user || null;
  serialized.ephemeral_message_id = msg.ephemeral_message_id || null;
  serialized.ephemeralMessageId = msg.ephemeral_message_id || null;
  serialized.is_ephemeral = Boolean(msg.ephemeral_message_id || msg.receiver_user);
  serialized.isEphemeral = Boolean(msg.ephemeral_message_id || msg.receiver_user);
  if (msg.reply_to_message) {
    serialized.quoted = serializeMessage(msg.reply_to_message);
  }
  const entities = msg.entities || msg.caption_entities || [];
  for (const entity of entities) {
    if (entity.type === "mention") {
      const mentionText = serialized.text.substring(entity.offset, entity.offset + entity.length);
      serialized.mentioned.push(mentionText);
    }
  }
  serialized.isGroup = ["group", "supergroup"].includes(serialized.chat?.type);
  serialized.isPrivate = serialized.chat?.type === "private";
  serialized.isChannel = serialized.chat?.type === "channel";
  return serialized;
}
function serializeUpdate(update) {
  const result = {
    updateId: update.update_id,
    type: "unknown",
    message: null,
    callbackQuery: update.callback_query || null,
    inlineQuery: update.inline_query || null,
    raw: update
  };
  const msg = update.message || update.edited_message || update.channel_post || update.edited_channel_post || update.callback_query?.message;
  if (msg) {
    result.message = serializeMessage(msg);
  }
  if (update.message) result.type = "message";
  else if (update.callback_query) result.type = "callback_query";
  else if (update.inline_query) result.type = "inline_query";
  else if (update.chat_member) result.type = "chat_member";
  else if (update.chat_boost) result.type = "chat_boost";
  else if (update.paid_message_price_changed) result.type = "paid_message_price_changed";
  return result;
}

// lib/webapp.js
var import_crypto = __toESM(require("crypto"), 1);
function validateWebAppInitData(initDataStr, botToken, options = {}) {
  if (!initDataStr || !botToken) return null;
  try {
    const params = new URLSearchParams(initDataStr);
    const hash = params.get("hash");
    if (!hash) return null;
    params.delete("hash");
    const entries = [];
    for (const [key, value] of params.entries()) {
      entries.push(`${key}=${value}`);
    }
    entries.sort();
    const dataCheckString = entries.join("\n");
    const secretKey = import_crypto.default.createHmac("sha256", "WebAppData").update(botToken).digest();
    const calculatedHash = import_crypto.default.createHmac("sha256", secretKey).update(dataCheckString).digest("hex");
    if (calculatedHash !== hash) {
      return null;
    }
    const authDate = parseInt(params.get("auth_date") || "0", 10);
    const maxAge = options.maxAgeSeconds !== void 0 ? options.maxAgeSeconds : 86400;
    if (maxAge > 0 && authDate > 0) {
      const now = Math.floor(Date.now() / 1e3);
      if (now - authDate > maxAge) {
        return null;
      }
    }
    const result = {};
    for (const [key, value] of params.entries()) {
      try {
        result[key] = JSON.parse(value);
      } catch {
        result[key] = value;
      }
    }
    return result;
  } catch {
    return null;
  }
}
function parseWebAppInitData(initDataStr) {
  if (!initDataStr || typeof initDataStr !== "string") return {};
  const params = new URLSearchParams(initDataStr);
  const result = {};
  for (const [key, value] of params.entries()) {
    try {
      result[key] = JSON.parse(value);
    } catch {
      result[key] = value;
    }
  }
  return result;
}
function createMiniAppLaunchUrl(botUsername, appShortName, startParam = "") {
  const cleanUsername = String(botUsername).replace(/^@/, "");
  const url = `https://t.me/${cleanUsername}/${appShortName}`;
  return startParam ? `${url}?startapp=${encodeURIComponent(startParam)}` : url;
}
var MiniAppLoadingScreen = class {
  /**
   * @param {object} [options]
   * @param {string} [options.title='Loading Mini App...']
   * @param {string} [options.icon] - Image URL or SVG string for brand icon
   * @param {string} [options.lightColor='#2481cc'] - Primary brand color in light theme
   * @param {string} [options.darkColor='#64b5f6'] - Primary brand color in dark theme
   * @param {string} [options.lightBg='#ffffff'] - Background in light theme
   * @param {string} [options.darkBg='#17212b'] - Background in dark theme
   * @param {boolean} [options.skeleton=true] - Render shimmer skeleton bars below icon
   */
  constructor(options = {}) {
    this.title = options.title ?? "Loading...";
    this.icon = options.icon ?? "";
    this.lightColor = options.lightColor ?? "#2481cc";
    this.darkColor = options.darkColor ?? "#64b5f6";
    this.lightBg = options.lightBg ?? "#ffffff";
    this.darkBg = options.darkBg ?? "#17212b";
    this.skeleton = options.skeleton ?? true;
  }
  /**
   * Set brand icon (URL or SVG)
   * @param {string} icon
   * @returns {this}
   */
  setIcon(icon) {
    this.icon = String(icon);
    return this;
  }
  /**
   * Set loading title
   * @param {string} title
   * @returns {this}
   */
  setTitle(title) {
    this.title = String(title);
    return this;
  }
  /**
   * Set light and dark theme colors
   * @param {string} lightColor
   * @param {string} darkColor
   * @returns {this}
   */
  setColors(lightColor, darkColor) {
    this.lightColor = lightColor;
    this.darkColor = darkColor;
    return this;
  }
  /**
   * Toggle skeleton placeholder display
   * @param {boolean} [enabled=true]
   * @returns {this}
   */
  setSkeleton(enabled = true) {
    this.skeleton = Boolean(enabled);
    return this;
  }
  /**
   * Generate CSS styles for the customized loading screen
   * @returns {string}
   */
  toCSS() {
    return `
:root {
  --tg-loading-bg: ${this.lightBg};
  --tg-loading-color: ${this.lightColor};
  --tg-skeleton-base: #e0e0e0;
  --tg-skeleton-shimmer: #f5f5f5;
}
@media (prefers-color-scheme: dark) {
  :root {
    --tg-loading-bg: ${this.darkBg};
    --tg-loading-color: ${this.darkColor};
    --tg-skeleton-base: #242f3d;
    --tg-skeleton-shimmer: #313d4f;
  }
}
#tg-loading-screen {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--tg-theme-bg-color, var(--tg-loading-bg));
  color: var(--tg-theme-text-color, #222222);
  transition: opacity 0.35s ease, visibility 0.35s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  user-select: none;
}
#tg-loading-screen.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.tg-loading-icon {
  width: 72px;
  height: 72px;
  margin-bottom: 16px;
  animation: tg-bounce 1.6s infinite ease-in-out;
}
.tg-loading-title {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;
  margin-bottom: 24px;
  color: var(--tg-theme-text-color, #222222);
}
.tg-loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid rgba(127, 127, 127, 0.2);
  border-top-color: var(--tg-theme-button-color, var(--tg-loading-color));
  border-radius: 50%;
  animation: tg-spin 0.8s linear infinite;
}
.tg-skeleton-container {
  width: 80%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
}
.tg-skeleton-bar {
  height: 14px;
  border-radius: 6px;
  background: linear-gradient(90deg, var(--tg-skeleton-base) 25%, var(--tg-skeleton-shimmer) 50%, var(--tg-skeleton-base) 75%);
  background-size: 200% 100%;
  animation: tg-shimmer 1.5s infinite;
}
@keyframes tg-spin { to { transform: rotate(360deg); } }
@keyframes tg-bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
@keyframes tg-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
`.trim();
  }
  /**
   * Generate HTML element string for the customized loading screen
   * @returns {string}
   */
  toHTML() {
    const iconHtml = this.icon ? this.icon.startsWith("<svg") ? `<div class="tg-loading-icon">${this.icon}</div>` : `<img src="${this.icon}" alt="Loading" class="tg-loading-icon" />` : `<div class="tg-loading-spinner"></div>`;
    const skeletonHtml = this.skeleton ? `<div class="tg-skeleton-container">
           <div class="tg-skeleton-bar" style="width: 100%;"></div>
           <div class="tg-skeleton-bar" style="width: 75%;"></div>
           <div class="tg-skeleton-bar" style="width: 88%;"></div>
         </div>` : "";
    return `
<style>${this.toCSS()}</style>
<div id="tg-loading-screen">
  ${iconHtml}
  <div class="tg-loading-title">${this.title}</div>
  ${skeletonHtml}
</div>
<script>
  window.addEventListener('load', function() {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
    setTimeout(function() {
      var el = document.getElementById('tg-loading-screen');
      if (el) el.classList.add('hidden');
    }, 200);
  });
</script>
`.trim();
  }
};
function generateMiniAppLoadingScreen(options = {}) {
  return new MiniAppLoadingScreen(options).toHTML();
}
var MiniApp = {
  /**
   * Check if running inside Telegram Mini App environment
   * @returns {boolean}
   */
  isInsideTelegram() {
    return typeof window !== "undefined" && Boolean(window.Telegram?.WebApp);
  },
  /**
   * Returns window.Telegram.WebApp object safely
   * @returns {object|null}
   */
  get webApp() {
    return typeof window !== "undefined" && window.Telegram?.WebApp || null;
  },
  /**
   * Full-Screen Mode Methods (Mini Apps 8.0)
   */
  fullscreen: {
    /**
     * Request full-screen mode for the Mini App
     */
    request() {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.requestFullscreen) {
        window.Telegram.WebApp.requestFullscreen();
        return true;
      }
      return false;
    },
    /**
     * Exit full-screen mode
     */
    exit() {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.exitFullscreen) {
        window.Telegram.WebApp.exitFullscreen();
        return true;
      }
      return false;
    },
    /**
     * Check if currently in full-screen mode
     * @returns {boolean}
     */
    isActive() {
      if (typeof window !== "undefined" && window.Telegram?.WebApp) {
        return Boolean(window.Telegram.WebApp.isFullscreen);
      }
      return false;
    },
    /**
     * Listen for full-screen state changes
     * @param {function(boolean): void} callback
     */
    onChange(callback) {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent("fullscreenChanged", () => {
          callback(Boolean(window.Telegram.WebApp.isFullscreen));
        });
      }
    },
    /**
     * Listen for full-screen request failures
     * @param {function(object): void} callback
     */
    onFailed(callback) {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent("fullscreenFailed", callback);
      }
    }
  },
  /**
   * Device Motion Tracking Methods (Mini Apps 8.0)
   * Tracks Accelerometer, Device Orientation, and Gyroscope
   */
  motion: {
    /**
     * Start tracking accelerometer
     * @param {object} [options]
     * @param {number} [options.refresh_rate=100] - Refresh rate in ms (min: 20ms, default: 100ms)
     * @returns {boolean}
     */
    startAccelerometer(options = { refresh_rate: 100 }) {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.startAccelerometer) {
        window.Telegram.WebApp.startAccelerometer(options);
        return true;
      }
      return false;
    },
    /**
     * Stop tracking accelerometer
     * @returns {boolean}
     */
    stopAccelerometer() {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.stopAccelerometer) {
        window.Telegram.WebApp.stopAccelerometer();
        return true;
      }
      return false;
    },
    /**
     * Listen to accelerometer changes
     * @param {function({ x: number, y: number, z: number }): void} callback
     */
    onAccelerometer(callback) {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent("accelerometerChanged", callback);
      }
    },
    /**
     * Start tracking device orientation
     * @param {object} [options]
     * @param {number} [options.refresh_rate=100]
     * @param {boolean} [options.need_absolute=false]
     * @returns {boolean}
     */
    startDeviceOrientation(options = { refresh_rate: 100, need_absolute: false }) {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.startDeviceOrientation) {
        window.Telegram.WebApp.startDeviceOrientation(options);
        return true;
      }
      return false;
    },
    /**
     * Stop tracking device orientation
     * @returns {boolean}
     */
    stopDeviceOrientation() {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.stopDeviceOrientation) {
        window.Telegram.WebApp.stopDeviceOrientation();
        return true;
      }
      return false;
    },
    /**
     * Listen to device orientation changes (alpha, beta, gamma, absolute)
     * @param {function({ alpha: number, beta: number, gamma: number, absolute: boolean }): void} callback
     */
    onOrientation(callback) {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent("deviceOrientationChanged", callback);
      }
    },
    /**
     * Start tracking gyroscope
     * @param {object} [options]
     * @param {number} [options.refresh_rate=100]
     * @returns {boolean}
     */
    startGyroscope(options = { refresh_rate: 100 }) {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.startGyroscope) {
        window.Telegram.WebApp.startGyroscope(options);
        return true;
      }
      return false;
    },
    /**
     * Stop tracking gyroscope
     * @returns {boolean}
     */
    stopGyroscope() {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.stopGyroscope) {
        window.Telegram.WebApp.stopGyroscope();
        return true;
      }
      return false;
    },
    /**
     * Listen to gyroscope changes
     * @param {function({ x: number, y: number, z: number }): void} callback
     */
    onGyroscope(callback) {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent("gyroscopeChanged", callback);
      }
    }
  },
  /**
   * Home Screen Shortcut Helpers (Mini Apps 8.0)
   */
  homeScreen: {
    /**
     * Prompts user to add Mini App shortcut to homescreen
     */
    addToHomeScreen() {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.addToHomeScreen) {
        window.Telegram.WebApp.addToHomeScreen();
        return true;
      }
      return false;
    },
    /**
     * Check if shortcut was already added or unsupported
     * @param {function('unsupported'|'unknown'|'added'|'missed'): void} callback
     */
    checkStatus(callback) {
      if (typeof window !== "undefined" && window.Telegram?.WebApp?.checkHomeScreenStatus) {
        window.Telegram.WebApp.checkHomeScreenStatus(callback);
      }
    }
  },
  /**
   * Share Prepared Message directly from Mini App (Mini Apps 8.0)
   * @param {string} preparedMessageId - ID obtained via bot.telegram.savePreparedInlineMessage()
   */
  sharePreparedMessage(preparedMessageId) {
    if (typeof window !== "undefined" && window.Telegram?.WebApp?.shareMessage) {
      window.Telegram.WebApp.shareMessage(preparedMessageId);
      return true;
    }
    return false;
  },
  /**
   * Prompt user to download a file (Mini Apps 8.0)
   * @param {object} params - { url: string, file_name: string }
   */
  downloadFile(params) {
    if (typeof window !== "undefined" && window.Telegram?.WebApp?.downloadFile) {
      window.Telegram.WebApp.downloadFile(params);
      return true;
    }
    return false;
  },
  /**
   * Haptic Feedback Shortcuts
   */
  haptics: {
    impact(style = "medium") {
      window.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.(style);
    },
    notification(type = "success") {
      window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred?.(type);
    },
    selection() {
      window.Telegram?.WebApp?.HapticFeedback?.selectionChanged?.();
    }
  }
};

// lib/link-preview.js
var LinkPreview = class _LinkPreview {
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
    if (this._options.is_disabled !== void 0 && this._options.is_disabled !== null) {
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
      link_preview_options: this.toJSON()
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
    if (typeof urlOrOptions === "string") {
      const lp = new _LinkPreview(options);
      lp.url(urlOrOptions);
      return lp;
    }
    if (typeof urlOrOptions === "object" && urlOrOptions !== null) {
      return new _LinkPreview({ ...urlOrOptions, ...options });
    }
    return new _LinkPreview(options);
  }
  /**
   * Create LinkPreview with options
   * @param {object} options
   * @returns {LinkPreview}
   */
  static options(options = {}) {
    return new _LinkPreview(options);
  }
  /**
   * Create disabled link preview options
   * @returns {LinkPreview}
   */
  static disabled() {
    return new _LinkPreview({ is_disabled: true });
  }
  /**
   * Create link preview with small media thumbnail
   * @param {string} [url]
   * @param {boolean} [showAbove=false]
   * @returns {LinkPreview}
   */
  static small(url, showAbove = false) {
    const lp = new _LinkPreview({ prefer_small_media: true, show_above_text: Boolean(showAbove) });
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
    const lp = new _LinkPreview({ prefer_large_media: true, show_above_text: Boolean(showAbove) });
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
    const lp = new _LinkPreview({ show_above_text: true, ...options });
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
    const lp = new _LinkPreview({ show_above_text: false, ...options });
    if (url) lp.url(url);
    return lp;
  }
};

// lib/context.js
var Context = class {
  /**
   * @param {object} update - Raw Telegram update object
   * @param {import('./api.js').Telegram} telegram - Telegram API Client instance
   * @param {object} [botInfo] - Bot info (from getMe)
   */
  constructor(update, telegram, botInfo = null) {
    this.update = update;
    this.telegram = telegram;
    this.api = telegram;
    this.botInfo = botInfo;
    this.state = {};
    this.match = null;
    this.command = null;
    this.payload = null;
  }
  get msg() {
    const rawMsg = this.message || this.editedMessage || this.channelPost || this.editedChannelPost || this.callbackQuery?.message;
    return serializeMessage(rawMsg);
  }
  get quoted() {
    return this.msg?.quoted || null;
  }
  serialize() {
    return serializeUpdate(this.update);
  }
  /**
   * Inferred type of update
   * @returns {string}
   */
  get updateType() {
    const types = [
      "message",
      "edited_message",
      "channel_post",
      "edited_channel_post",
      "business_connection",
      "business_message",
      "edited_business_message",
      "deleted_business_messages",
      "message_reaction",
      "message_reaction_count",
      "inline_query",
      "chosen_inline_result",
      "callback_query",
      "shipping_query",
      "pre_checkout_query",
      "purchased_paid_media",
      "poll",
      "poll_answer",
      "my_chat_member",
      "chat_member",
      "chat_join_request",
      "chat_boost",
      "removed_chat_boost",
      "paid_message_price_changed",
      "stopped_message_generation",
      "community_chat_joined"
    ];
    for (const type of types) {
      if (type in this.update) return type;
    }
    return "unknown";
  }
  get message() {
    return this.update.message;
  }
  get editedMessage() {
    return this.update.edited_message;
  }
  get channelPost() {
    return this.update.channel_post;
  }
  get editedChannelPost() {
    return this.update.edited_channel_post;
  }
  get businessConnection() {
    return this.update.business_connection;
  }
  get businessMessage() {
    return this.update.business_message;
  }
  get editedBusinessMessage() {
    return this.update.edited_business_message;
  }
  get deletedBusinessMessages() {
    return this.update.deleted_business_messages;
  }
  get messageReaction() {
    return this.update.message_reaction;
  }
  get messageReactionCount() {
    return this.update.message_reaction_count;
  }
  get purchasedPaidMedia() {
    return this.update.purchased_paid_media;
  }
  get chatBoost() {
    return this.update.chat_boost;
  }
  get removedChatBoost() {
    return this.update.removed_chat_boost;
  }
  get paidMessagePriceChanged() {
    return this.update.paid_message_price_changed;
  }
  get stoppedMessageGeneration() {
    return this.update.stopped_message_generation;
  }
  get communityChatJoined() {
    return this.update.community_chat_joined;
  }
  get callbackQuery() {
    return this.update.callback_query;
  }
  get inlineQuery() {
    return this.update.inline_query;
  }
  get chosenInlineResult() {
    return this.update.chosen_inline_result;
  }
  get shippingQuery() {
    return this.update.shipping_query;
  }
  get preCheckoutQuery() {
    return this.update.pre_checkout_query;
  }
  get poll() {
    return this.update.poll;
  }
  get pollAnswer() {
    return this.update.poll_answer;
  }
  get myChatMember() {
    return this.update.my_chat_member;
  }
  get chatMember() {
    return this.update.chat_member;
  }
  get chatJoinRequest() {
    return this.update.chat_join_request;
  }
  get currentMessage() {
    return this.message || this.editedMessage || this.channelPost || this.editedChannelPost || this.businessMessage || this.editedBusinessMessage || this.callbackQuery?.message;
  }
  /**
   * Sender user
   */
  get from() {
    return this.message?.from || this.editedMessage?.from || this.businessMessage?.from || this.editedBusinessMessage?.from || this.businessConnection?.user || this.messageReaction?.user || this.purchasedPaidMedia?.from || this.chatBoost?.boost?.source?.user || this.removedChatBoost?.source?.user || this.callbackQuery?.from || this.inlineQuery?.from || this.chosenInlineResult?.from || this.shippingQuery?.from || this.preCheckoutQuery?.from || this.myChatMember?.from || this.chatMember?.from || this.chatJoinRequest?.from;
  }
  /**
   * Sender chat (e.g. for channel posts or anonymous group senders)
   */
  get senderChat() {
    return this.message?.sender_chat || this.editedMessage?.sender_chat || this.channelPost?.sender_chat || this.editedChannelPost?.sender_chat || this.messageReaction?.actor_chat;
  }
  /**
   * Current chat object
   */
  get chat() {
    return this.message?.chat || this.editedMessage?.chat || this.channelPost?.chat || this.editedChannelPost?.chat || this.businessMessage?.chat || this.editedBusinessMessage?.chat || this.messageReaction?.chat || this.messageReactionCount?.chat || this.chatBoost?.chat || this.removedChatBoost?.chat || this.callbackQuery?.message?.chat || this.myChatMember?.chat || this.chatMember?.chat || this.chatJoinRequest?.chat;
  }
  /**
   * Whether current chat is a forum supergroup
   * @returns {boolean}
   */
  get isForum() {
    return Boolean(this.chat?.is_forum);
  }
  /**
   * Forum topic thread ID (message_thread_id)
   * @returns {number|null}
   */
  get topicId() {
    return this.currentMessage?.message_thread_id || this.message?.message_thread_id || null;
  }
  get messageThreadId() {
    return this.topicId;
  }
  /**
   * Current chat ID
   * @returns {number|string|null}
   */
  get chatId() {
    return this.chat?.id ?? null;
  }
  /**
   * Current sender user ID
   * @returns {number|null}
   */
  get userId() {
    return this.from?.id ?? null;
  }
  /**
   * Text or caption of the message
   * @returns {string|null}
   */
  get text() {
    return this.message?.text || this.message?.caption || this.editedMessage?.text || this.editedMessage?.caption || this.channelPost?.text || this.channelPost?.caption || this.callbackQuery?.data || this.inlineQuery?.query || null;
  }
  /**
   * Entities in the message or caption
   */
  get entities() {
    return this.message?.entities || this.message?.caption_entities || this.editedMessage?.entities || this.channelPost?.entities || [];
  }
  /**
   * Assert chatId exists
   * @private
   */
  _assertChat() {
    if (!this.chatId) {
      throw new Error("Telegix Context: Method requires a chat context, but chatId is null.");
    }
    return this.chatId;
  }
  /**
   * Send a text message to current chat
   * @param {string} text
   * @param {object} [extra]
   */
  reply(text, extra = {}) {
    return this.telegram.sendMessage(this._assertChat(), text, extra);
  }
  /**
   * Send an HTML formatted message
   * @param {string} html
   * @param {object} [extra]
   */
  replyWithHTML(html2, extra = {}) {
    return this.reply(html2, { parse_mode: "HTML", ...extra });
  }
  /**
   * Send a MarkdownV2 formatted message
   * @param {string} markdown
   * @param {object} [extra]
   */
  replyWithMarkdown(markdown2, extra = {}) {
    return this.reply(markdown2, { parse_mode: "MarkdownV2", ...extra });
  }
  /**
   * Send a photo to current chat
   * @param {any} photo
   * @param {object} [extra]
   */
  replyWithPhoto(photo, extra = {}) {
    return this.telegram.sendPhoto(this._assertChat(), photo, extra);
  }
  /**
   * Send an audio file
   * @param {any} audio
   * @param {object} [extra]
   */
  replyWithAudio(audio, extra = {}) {
    return this.telegram.sendAudio(this._assertChat(), audio, extra);
  }
  /**
   * Send a document/file
   * @param {any} document
   * @param {object} [extra]
   */
  replyWithDocument(document, extra = {}) {
    return this.telegram.sendDocument(this._assertChat(), document, extra);
  }
  /**
   * Send a video
   * @param {any} video
   * @param {object} [extra]
   */
  replyWithVideo(video, extra = {}) {
    return this.telegram.sendVideo(this._assertChat(), video, extra);
  }
  /**
   * Send an animation / GIF
   * @param {any} animation
   * @param {object} [extra]
   */
  replyWithAnimation(animation, extra = {}) {
    return this.telegram.sendAnimation(this._assertChat(), animation, extra);
  }
  /**
   * Send a voice note
   * @param {any} voice
   * @param {object} [extra]
   */
  replyWithVoice(voice, extra = {}) {
    return this.telegram.sendVoice(this._assertChat(), voice, extra);
  }
  /**
   * Send a video note (round video)
   * @param {any} videoNote
   * @param {object} [extra]
   */
  replyWithVideoNote(videoNote, extra = {}) {
    return this.telegram.sendVideoNote(this._assertChat(), videoNote, extra);
  }
  /**
   * Send media album
   * @param {Array<object>} media
   * @param {object} [extra]
   */
  replyWithMediaGroup(media, extra = {}) {
    return this.telegram.sendMediaGroup(this._assertChat(), media, extra);
  }
  /**
   * Send live photo (Bot API 10.2+)
   * @param {any} photo - Photo file / file_id / url / Buffer / Stream
   * @param {any} video - Paired video file / file_id / url / Buffer / Stream
   * @param {object} [extra]
   */
  replyWithLivePhoto(photo, video, extra = {}) {
    return this.telegram.sendLivePhoto(this._assertChat(), photo, video, extra);
  }
  /**
   * Send location coordinates
   * @param {number} latitude
   * @param {number} longitude
   * @param {object} [extra]
   */
  replyWithLocation(latitude, longitude, extra = {}) {
    return this.telegram.sendLocation(this._assertChat(), latitude, longitude, extra);
  }
  /**
   * Send venue
   */
  replyWithVenue(latitude, longitude, title, address, extra = {}) {
    return this.telegram.sendVenue(this._assertChat(), latitude, longitude, title, address, extra);
  }
  /**
   * Send contact
   */
  replyWithContact(phoneNumber, firstName, extra = {}) {
    return this.telegram.sendContact(this._assertChat(), phoneNumber, firstName, extra);
  }
  /**
   * Send poll
   */
  replyWithPoll(question, options, extra = {}) {
    return this.telegram.sendPoll(this._assertChat(), question, options, extra);
  }
  /**
   * Send animated dice
   */
  replyWithDice(extra = {}) {
    return this.telegram.sendDice(this._assertChat(), extra);
  }
  /**
   * Send chat action (e.g. 'typing', 'upload_photo')
   * @param {string} action
   * @param {object} [extra]
   */
  replyWithChatAction(action, extra = {}) {
    return this.telegram.sendChatAction(this._assertChat(), action, extra);
  }
  /**
   * Set reaction on current message
   * @param {string|Array<string|object>} emoji
   */
  react(emoji) {
    const messageId = this.currentMessage?.message_id;
    if (!messageId) {
      throw new Error("Telegix Context: react() requires a message context.");
    }
    return this.telegram.setMessageReaction(this._assertChat(), messageId, emoji);
  }
  /**
   * Answer callback query
   * @param {string} [text]
   * @param {object} [options]
   */
  answerCallbackQuery(text = "", options = {}) {
    if (!this.callbackQuery) {
      throw new Error("Telegix Context: answerCallbackQuery() requires callback_query context.");
    }
    return this.telegram.answerCallbackQuery(this.callbackQuery.id, {
      text,
      ...options
    });
  }
  /**
   * Answer callback query (alias for answerCallbackQuery)
   * @param {string} [text]
   * @param {object} [options]
   */
  answerCbQuery(text = "", options = {}) {
    return this.answerCallbackQuery(text, options);
  }
  /**
   * Answer inline query
   * @param {Array<object>} results
   * @param {object} [options]
   */
  answerInlineQuery(results = [], options = {}) {
    if (!this.inlineQuery) {
      throw new Error("Telegix Context: answerInlineQuery() requires inline_query context.");
    }
    return this.telegram.answerInlineQuery(this.inlineQuery.id, results, options);
  }
  /**
   * Edit current message text
   * @param {string} text
   * @param {object} [extra]
   */
  editMessageText(text, extra = {}) {
    const chatId = this.chatId;
    const messageId = this.currentMessage?.message_id;
    const inlineMessageId = this.callbackQuery?.inline_message_id;
    return this.telegram.editMessageText(chatId, messageId, inlineMessageId, text, extra);
  }
  /**
   * Edit current message caption
   * @param {string} caption
   * @param {object} [extra]
   */
  editMessageCaption(caption, extra = {}) {
    const chatId = this.chatId;
    const messageId = this.currentMessage?.message_id;
    const inlineMessageId = this.callbackQuery?.inline_message_id;
    return this.telegram.editMessageCaption(chatId, messageId, inlineMessageId, caption, extra);
  }
  /**
   * Edit current message media
   * @param {object} media
   * @param {object} [extra]
   */
  editMessageMedia(media, extra = {}) {
    const chatId = this.chatId;
    const messageId = this.currentMessage?.message_id;
    const inlineMessageId = this.callbackQuery?.inline_message_id;
    return this.telegram.editMessageMedia(chatId, messageId, inlineMessageId, media, extra);
  }
  /**
   * Edit current message reply markup
   * @param {object} replyMarkup
   * @param {object} [extra]
   */
  editMessageReplyMarkup(replyMarkup, extra = {}) {
    const chatId = this.chatId;
    const messageId = this.currentMessage?.message_id;
    const inlineMessageId = this.callbackQuery?.inline_message_id;
    return this.telegram.editMessageReplyMarkup(chatId, messageId, inlineMessageId, replyMarkup, extra);
  }
  /**
   * Delete message
   * @param {number} [messageId] - Defaults to current message id
   */
  deleteMessage(messageId = this.currentMessage?.message_id) {
    if (!messageId) {
      throw new Error("Telegix Context: deleteMessage() requires messageId.");
    }
    return this.telegram.deleteMessage(this._assertChat(), messageId);
  }
  /**
   * Forward current message to another chat
   * @param {number|string} toChatId
   * @param {object} [extra]
   */
  forwardMessage(toChatId, extra = {}) {
    const messageId = this.currentMessage?.message_id;
    if (!messageId) {
      throw new Error("Telegix Context: forwardMessage() requires current message context.");
    }
    return this.telegram.forwardMessage(toChatId, this._assertChat(), messageId, extra);
  }
  /**
   * Copy current message to another chat
   * @param {number|string} toChatId
   * @param {object} [extra]
   */
  copyMessage(toChatId, extra = {}) {
    const messageId = this.currentMessage?.message_id;
    if (!messageId) {
      throw new Error("Telegix Context: copyMessage() requires current message context.");
    }
    return this.telegram.copyMessage(toChatId, this._assertChat(), messageId, extra);
  }
  /**
   * Pin a message
   * @param {number} [messageId]
   * @param {object} [extra]
   */
  pinChatMessage(messageId = this.currentMessage?.message_id, extra = {}) {
    if (!messageId) {
      throw new Error("Telegix Context: pinChatMessage() requires messageId.");
    }
    return this.telegram.pinChatMessage(this._assertChat(), messageId, extra);
  }
  /**
   * Unpin a message
   * @param {number} [messageId]
   */
  unpinChatMessage(messageId = this.currentMessage?.message_id) {
    return this.telegram.unpinChatMessage(this._assertChat(), messageId);
  }
  /**
   * Unpin all messages
   */
  unpinAllChatMessages() {
    return this.telegram.unpinAllChatMessages(this._assertChat());
  }
  /**
   * Leave current chat
   */
  leaveChat() {
    return this.telegram.leaveChat(this._assertChat());
  }
  /**
   * Get current chat info
   */
  getChat() {
    return this.telegram.getChat(this._assertChat());
  }
  /**
   * Get current chat administrators
   */
  getChatAdministrators() {
    return this.telegram.getChatAdministrators(this._assertChat());
  }
  /**
   * Get chat member info
   * @param {number} [userId]
   */
  getChatMember(userId = this.userId) {
    if (!userId) {
      throw new Error("Telegix Context: getChatMember() requires userId.");
    }
    return this.telegram.getChatMember(this._assertChat(), userId);
  }
  /**
   * Ban chat member
   * @param {number} userId
   * @param {object} [extra]
   */
  banChatMember(userId, extra = {}) {
    return this.telegram.banChatMember(this._assertChat(), userId, extra);
  }
  /**
   * Unban chat member
   * @param {number} userId
   * @param {object} [extra]
   */
  unbanChatMember(userId, extra = {}) {
    return this.telegram.unbanChatMember(this._assertChat(), userId, extra);
  }
  /**
   * Restrict chat member
   * @param {number} userId
   * @param {object} permissions
   * @param {object} [extra]
   */
  restrictChatMember(userId, permissions, extra = {}) {
    return this.telegram.restrictChatMember(this._assertChat(), userId, permissions, extra);
  }
  /**
   * Promote chat member
   * @param {number} userId
   * @param {object} rights
   */
  promoteChatMember(userId, rights = {}) {
    return this.telegram.promoteChatMember(this._assertChat(), userId, rights);
  }
  // ==========================================
  // Context Shortcuts for Latest Telegram Features
  // ==========================================
  /**
   * Send invoice (Telegram Stars XTR or standard currencies)
   * @param {string} title
   * @param {string} description
   * @param {string} payload
   * @param {string} currency - e.g. 'XTR'
   * @param {Array<{label: string, amount: number}>} prices
   * @param {object} [extra]
   */
  replyWithInvoice(title, description, payload, currency, prices, extra = {}) {
    return this.telegram.sendInvoice(
      this._assertChat(),
      title,
      description,
      payload,
      currency,
      prices,
      extra
    );
  }
  /**
   * Send paid media requiring Telegram Stars
   * @param {number} starCount
   * @param {Array<object>} media
   * @param {object} [extra]
   */
  replyWithPaidMedia(starCount, media, extra = {}) {
    return this.telegram.sendPaidMedia(this._assertChat(), starCount, media, extra);
  }
  /**
   * Send sticker
   * @param {any} sticker
   * @param {object} [extra]
   */
  replyWithSticker(sticker, extra = {}) {
    return this.telegram.sendSticker(this._assertChat(), sticker, extra);
  }
  /**
   * Send game
   * @param {string} gameShortName
   * @param {object} [extra]
   */
  replyWithGame(gameShortName, extra = {}) {
    return this.telegram.sendGame(this._assertChat(), gameShortName, extra);
  }
  /**
   * Create a topic in current forum chat
   * @param {string} name
   * @param {object} [extra]
   */
  createForumTopic(name, extra = {}) {
    return this.telegram.createForumTopic(this._assertChat(), name, extra);
  }
  /**
   * Edit forum topic in current chat
   * @param {number} [messageThreadId=this.topicId]
   * @param {object} [extra]
   */
  editForumTopic(messageThreadId = this.topicId, extra = {}) {
    if (!messageThreadId) {
      throw new Error("Telegix Context: editForumTopic() requires messageThreadId.");
    }
    return this.telegram.editForumTopic(this._assertChat(), messageThreadId, extra);
  }
  /**
   * Close forum topic in current chat
   * @param {number} [messageThreadId=this.topicId]
   */
  closeForumTopic(messageThreadId = this.topicId) {
    if (!messageThreadId) {
      throw new Error("Telegix Context: closeForumTopic() requires messageThreadId.");
    }
    return this.telegram.closeForumTopic(this._assertChat(), messageThreadId);
  }
  /**
   * Reopen forum topic in current chat
   * @param {number} [messageThreadId=this.topicId]
   */
  reopenForumTopic(messageThreadId = this.topicId) {
    if (!messageThreadId) {
      throw new Error("Telegix Context: reopenForumTopic() requires messageThreadId.");
    }
    return this.telegram.reopenForumTopic(this._assertChat(), messageThreadId);
  }
  /**
   * Delete forum topic in current chat
   * @param {number} [messageThreadId=this.topicId]
   */
  deleteForumTopic(messageThreadId = this.topicId) {
    if (!messageThreadId) {
      throw new Error("Telegix Context: deleteForumTopic() requires messageThreadId.");
    }
    return this.telegram.deleteForumTopic(this._assertChat(), messageThreadId);
  }
  /**
   * Unpin all messages in a forum topic
   * @param {number} [messageThreadId=this.topicId]
   */
  unpinAllForumTopicMessages(messageThreadId = this.topicId) {
    if (!messageThreadId) {
      throw new Error("Telegix Context: unpinAllForumTopicMessages() requires messageThreadId.");
    }
    return this.telegram.unpinAllForumTopicMessages(this._assertChat(), messageThreadId);
  }
  /**
   * Send gift to user
   * @param {string} giftId
   * @param {object} [extra]
   */
  sendGift(giftId, extra = {}) {
    if (!this.userId) {
      throw new Error("Telegix Context: sendGift() requires user context.");
    }
    return this.telegram.sendGift(this.userId, giftId, extra);
  }
  /**
   * Verify sender user
   * @param {string} [customDescription='']
   */
  verifyUser(customDescription = "") {
    if (!this.userId) {
      throw new Error("Telegix Context: verifyUser() requires user context.");
    }
    return this.telegram.verifyUser(this.userId, customDescription);
  }
  /**
   * Verify current chat
   * @param {string} [customDescription='']
   */
  verifyChat(customDescription = "") {
    return this.telegram.verifyChat(this._assertChat(), customDescription);
  }
  /**
   * Get user chat boosts
   * @param {number} [userId=this.userId]
   */
  getUserChatBoosts(userId = this.userId) {
    if (!userId) {
      throw new Error("Telegix Context: getUserChatBoosts() requires userId.");
    }
    return this.telegram.getUserChatBoosts(this._assertChat(), userId);
  }
  /**
   * Get business connection info
   */
  getBusinessConnection() {
    const connId = this.businessConnection?.id || this.businessMessage?.business_connection_id;
    if (!connId) {
      throw new Error("Telegix Context: getBusinessConnection() requires business connection context.");
    }
    return this.telegram.getBusinessConnection(connId);
  }
  /**
   * Send a rich message
   * @param {object|Array} richMessage
   * @param {object} [extra]
   */
  replyWithRichMessage(richMessage, extra = {}) {
    return this.telegram.sendRichMessage(this._assertChat(), richMessage, extra);
  }
  /**
   * Edit rich message text
   * @param {object|Array} richMessage
   * @param {object} [extra]
   */
  editRichMessageText(richMessage, extra = {}) {
    const msgId = this._assertMessage();
    return this.telegram.editRichMessageText(this._assertChat(), msgId, richMessage, extra);
  }
  /**
   * Edit rich message caption
   * @param {string} caption
   * @param {object} [extra]
   */
  editRichMessageCaption(caption, extra = {}) {
    const msgId = this._assertMessage();
    return this.telegram.editRichMessageCaption(this._assertChat(), msgId, caption, extra);
  }
  /**
   * Send an ephemeral message
   * @param {string|object} text
   * @param {object|number} [ephemeralParameters]
   * @param {object} [extra]
   */
  sendEphemeralMessage(text, ephemeralParameters, extra = {}) {
    return this.telegram.sendEphemeralMessage(this._assertChat(), text, ephemeralParameters, extra);
  }
  /**
   * Reply with an ephemeral message
   * @param {string|object} text
   * @param {object|number} [ephemeralParameters]
   * @param {object} [extra]
   */
  replyEphemeral(text, ephemeralParameters, extra = {}) {
    return this.sendEphemeralMessage(text, ephemeralParameters, extra);
  }
  /**
   * Reply with a formatted table (Bot API 10.3 / HTML Table)
   * @param {Array<string>|object} headersOrTable
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   */
  replyWithTable(headersOrTable, rows = [], options = {}) {
    return this.telegram.sendTable(this._assertChat(), headersOrTable, rows, options);
  }
  /**
   * Reply with a formatted table (alias)
   */
  replyTable(headersOrTable, rows = [], options = {}) {
    return this.replyWithTable(headersOrTable, rows, options);
  }
  /**
   * Reply with a native Bot API 10.3 Rich Message Table
   * @param {Array<string>|object} headersOrTable
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   */
  replyWithRichTable(headersOrTable, rows = [], options = {}) {
    return this.telegram.sendRichTable(this._assertChat(), headersOrTable, rows, options);
  }
  /**
   * Reply with a modern Telegram Card Table (matching bot UI with rounded container and grid lines)
   * @param {Array<string>|object} headersOrTable
   * @param {Array<Array<any>>} [rows=[]]
   * @param {object} [options={}]
   */
  replyWithTableCard(headersOrTable, rows = [], options = {}) {
    return this.telegram.sendTableCard(this._assertChat(), headersOrTable, rows, options);
  }
  /**
   * Reply with multiple stacked card tables (e.g. SYSTEM and PROFILE cards)
   * @param {Array<object>} tables
   * @param {object} [options={}]
   */
  replyWithCardTables(tables, options = {}) {
    return this.telegram.sendCardTables(this._assertChat(), tables, options);
  }
  /**
   * Reply with System Status Card (matching Telegram bot screenshot)
   * All fields, labels, titles, and values are fully customizable
   * @param {object|Array<Array<any>>} [data={}] - Custom status fields or rows matrix
   * @param {object} [options={}] - Options including title, subtitle, asImage, etc.
   */
  replyWithSystemStatus(data = {}, options = {}) {
    const title = options.title || data.title || options.header || "\u{1F916} SYSTEM";
    const subtitle = options.subtitle || data.subtitle || options.subHeader || "Status";
    let rows;
    if (Array.isArray(data)) {
      rows = data;
    } else if (data.rows && Array.isArray(data.rows)) {
      rows = data.rows;
    } else if (data.fields && Array.isArray(data.fields)) {
      rows = data.fields;
    } else {
      const keys = Object.keys(data).filter(
        (k) => !["title", "subtitle", "header", "subHeader", "rows", "fields"].includes(k)
      );
      if (keys.length > 0) {
        rows = keys.map((key) => {
          const formattedLabel = key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          return [formattedLabel, data[key]];
        });
      } else {
        rows = [
          ["Engine", data.engine || "Telegix"],
          ["Runtime", data.runtime || "0h 19m 32s"],
          ["Node", data.node || process.version || "v23.11"],
          ["Features", data.features ?? 514],
          ["Groups", data.groups ?? 168],
          ["Users", data.users ?? 9528]
        ];
      }
    }
    return this.replyWithTableCard([title, subtitle], rows, {
      title,
      ...options
    });
  }
  /**
   * Reply with User Profile Card (matching Telegram bot screenshot)
   * All fields, labels, titles, and values are fully customizable
   * @param {object|Array<Array<any>>} [data={}] - Custom profile fields or rows matrix
   * @param {object} [options={}] - Options including title, subtitle, asImage, etc.
   */
  replyWithUserProfile(data = {}, options = {}) {
    const title = options.title || data.title || options.header || "\u{1F464} PROFILE";
    const subtitle = options.subtitle || data.subtitle || options.subHeader || "Info";
    let rows;
    if (Array.isArray(data)) {
      rows = data;
    } else if (data.rows && Array.isArray(data.rows)) {
      rows = data.rows;
    } else if (data.fields && Array.isArray(data.fields)) {
      rows = data.fields;
    } else {
      const keys = Object.keys(data).filter(
        (k) => !["title", "subtitle", "header", "subHeader", "rows", "fields"].includes(k)
      );
      if (keys.length > 0) {
        rows = keys.map((key) => {
          const formattedLabel = key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          return [formattedLabel, data[key]];
        });
      } else {
        const username = data.username || (this.from?.username ? `@${this.from.username}` : "@seventynn");
        rows = [
          ["Username", username],
          ["Status", data.status || "Free User"],
          ["Limit", data.limit ?? 0],
          ["Points", data.points ?? 0],
          ["Time", data.time || "Selasa, 8 September 2026"]
        ];
      }
    }
    return this.replyWithTableCard([title, subtitle], rows, {
      title,
      ...options
    });
  }
  /**
   * Edit ephemeral message text
   * @param {string|object} text
   * @param {object} [extra]
   */
  editEphemeralMessageText(text, extra = {}) {
    const msgId = this._assertMessage();
    return this.telegram.editEphemeralMessageText(this._assertChat(), msgId, text, extra);
  }
  /**
   * Edit ephemeral message media
   * @param {object} media
   * @param {object} [extra]
   */
  editEphemeralMessageMedia(media, extra = {}) {
    const msgId = this._assertMessage();
    return this.telegram.editEphemeralMessageMedia(this._assertChat(), msgId, media, extra);
  }
  /**
   * Edit ephemeral message caption
   * @param {string} caption
   * @param {object} [extra]
   */
  editEphemeralMessageCaption(caption, extra = {}) {
    const msgId = this._assertMessage();
    return this.telegram.editEphemeralMessageCaption(this._assertChat(), msgId, caption, extra);
  }
  /**
   * Delete an ephemeral message
   * @param {number} [messageId]
   */
  deleteEphemeralMessage(messageId) {
    const msgId = messageId || this._assertMessage();
    return this.telegram.deleteEphemeralMessage(this._assertChat(), msgId);
  }
  /**
   * Get user personal chat messages
   * @param {number} [userId=this.userId]
   * @param {object} [extra]
   */
  getUserPersonalChatMessages(userId = this.userId, extra = {}) {
    if (!userId) {
      throw new Error("Telegix Context: getUserPersonalChatMessages() requires userId.");
    }
    return this.telegram.getUserPersonalChatMessages(userId, extra);
  }
  /**
   * Send message draft
   * @param {string} text
   * @param {object} [extra]
   */
  sendMessageDraft(text, extra = {}) {
    return this.telegram.sendMessageDraft(this._assertChat(), text, extra);
  }
  /**
   * Send rich message draft
   * @param {object|Array} draft
   * @param {object} [extra]
   */
  sendRichMessageDraft(draft, extra = {}) {
    return this.telegram.sendRichMessageDraft(this._assertChat(), draft, extra);
  }
  /**
   * Get bot info (getMe)
   */
  getMe() {
    return this.telegram.getMe();
  }
  /**
   * Get managed bot access settings
   * @param {number} [userId=this.userId]
   */
  getManagedBotAccessSettings(userId = this.userId) {
    if (!userId) {
      throw new Error("Telegix Context: getManagedBotAccessSettings() requires userId.");
    }
    return this.telegram.getManagedBotAccessSettings(userId);
  }
  /**
   * Set managed bot access settings
   * @param {object} settings
   * @param {number} [userId=this.userId]
   */
  setManagedBotAccessSettings(settings, userId = this.userId) {
    if (!userId) {
      throw new Error("Telegix Context: setManagedBotAccessSettings() requires userId.");
    }
    return this.telegram.setManagedBotAccessSettings(userId, settings);
  }
  /**
   * Stream text response to the current chat with rate-limit protection and token buffering
   * @param {AsyncIterable<string>|Iterable<string>|ReadableStream|Array<string>} textStream
   * @param {object} [options]
   * @returns {Promise<{ message_id?: number, text: string, done: boolean }>}
   */
  streamText(textStream, options = {}) {
    return this.telegram.streamText(this._assertChat(), textStream, options);
  }
  /**
   * Stream live draft response to the current chat
   * @param {AsyncIterable<string>|Iterable<string>|ReadableStream|Array<string>} textStream
   * @param {object} [options]
   * @returns {Promise<{ message_id?: number, text: string, done: boolean }>}
   */
  streamDraft(textStream, options = {}) {
    return this.telegram.streamDraft(this._assertChat(), textStream, options);
  }
  /**
   * Reply with customizable link preview options (Bot API 7.0+)
   * @param {string} text
   * @param {LinkPreview|object} linkPreviewOptions
   * @param {object} [extra]
   */
  replyWithLinkPreview(text, linkPreviewOptions, extra = {}) {
    const previewOptions = typeof linkPreviewOptions?.toJSON === "function" ? linkPreviewOptions.toJSON() : linkPreviewOptions;
    return this.reply(text, {
      link_preview_options: previewOptions,
      ...extra
    });
  }
  /**
   * Reply with collapsible quote blockquote (HTML format)
   * @param {string} text - Quoted text content
   * @param {object} [extra]
   */
  replyWithCollapsibleQuote(text, extra = {}) {
    const formatted = `<blockquote expandable>${escapeHtml(text)}</blockquote>`;
    return this.reply(formatted, {
      parse_mode: "HTML",
      ...extra
    });
  }
  /**
   * Reply with expandable quote blockquote (alias for replyWithCollapsibleQuote)
   * @param {string} text
   * @param {object} [extra]
   */
  replyWithExpandableQuote(text, extra = {}) {
    return this.replyWithCollapsibleQuote(text, extra);
  }
  /**
   * Save a prepared inline message for the current user (Bot API 8.0+)
   * @param {object} result - InlineQueryResult object
   * @param {object} [options]
   * @returns {Promise<{ id: string, expiration_date: number }>}
   */
  savePreparedInlineMessage(result, options = {}) {
    if (!this.userId) {
      throw new Error("Telegix Context: savePreparedInlineMessage() requires user context.");
    }
    return this.telegram.savePreparedInlineMessage(this.userId, result, options);
  }
  /**
   * Validate Web App initData string with the bot token
   * @param {string} initDataStr
   * @param {object} [options]
   * @returns {object|null}
   */
  validateWebAppInitData(initDataStr, options = {}) {
    return validateWebAppInitData(initDataStr, this.telegram.token, options);
  }
  /**
   * Reply with a message containing a Telegram Mini App button
   * @param {string} text
   * @param {string} webAppUrl
   * @param {string} [buttonText='Open App']
   * @param {object} [extra]
   */
  replyWithWebApp(text, webAppUrl, buttonText = "Open App", extra = {}) {
    return this.reply(text, {
      reply_markup: {
        inline_keyboard: [
          [{ text: buttonText, web_app: { url: webAppUrl } }]
        ]
      },
      ...extra
    });
  }
};

// lib/polling.js
var Polling = class {
  /**
   * @param {import('./api.js').Telegram} telegram
   * @param {Function} updateHandler - (update: object) => Promise<void>
   * @param {object} [options]
   */
  constructor(telegram, updateHandler, options = {}) {
    this.telegram = telegram;
    this.updateHandler = updateHandler;
    this.options = {
      timeout: 30,
      limit: 100,
      allowedUpdates: void 0,
      dropPendingUpdates: false,
      retryInterval: 3e3,
      ...options
    };
    this.offset = 0;
    this.isRunning = false;
    this.abortController = null;
  }
  /**
   * Start long polling loop
   */
  async start() {
    if (this.isRunning) return;
    this.isRunning = true;
    try {
      if (this.options.dropPendingUpdates) {
        await this.telegram.deleteWebhook({ drop_pending_updates: true });
      }
    } catch {
    }
    this._loop();
  }
  /**
   * @private
   */
  async _loop() {
    while (this.isRunning) {
      this.abortController = new AbortController();
      try {
        const updates = await this.telegram.getUpdates(
          this.offset,
          this.options.limit,
          this.options.timeout,
          this.options.allowedUpdates
        );
        if (!this.isRunning) break;
        if (Array.isArray(updates) && updates.length > 0) {
          for (const update of updates) {
            this.offset = update.update_id + 1;
            try {
              await this.updateHandler(update);
            } catch (err) {
              if (this.options.onError) {
                this.options.onError(new PollingError(err));
              }
            }
          }
        }
      } catch (err) {
        if (!this.isRunning) break;
        if (this.options.onError) {
          this.options.onError(new PollingError(err));
        }
        const retryDelay = err.retryAfter ? err.retryAfter * 1e3 : this.options.retryInterval;
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }
  }
  /**
   * Stop polling gracefully
   */
  async stop() {
    this.isRunning = false;
    if (this.abortController) {
      this.abortController.abort();
    }
  }
};

// lib/webhook.js
function createWebhookCallback(bot, path2 = "/", options = {}) {
  const secretToken = options.secretToken;
  return async function webhookCallback(req, res, next) {
    const reqUrl = req.url ? req.url.split("?")[0] : "/";
    if (path2 && path2 !== "/" && reqUrl !== path2) {
      if (typeof next === "function") return next();
      res.statusCode = 404;
      res.end("Not Found");
      return;
    }
    if (req.method !== "POST") {
      res.statusCode = 405;
      res.end("Method Not Allowed");
      return;
    }
    if (secretToken) {
      const receivedToken = req.headers?.["x-telegram-bot-api-secret-token"] || req.headers?.["X-Telegram-Bot-Api-Secret-Token"];
      if (receivedToken !== secretToken) {
        res.statusCode = 403;
        res.end("Forbidden: Invalid Secret Token");
        return;
      }
    }
    let update = null;
    try {
      if (req.body && typeof req.body === "object") {
        update = req.body;
      } else {
        const chunks = [];
        for await (const chunk of req) {
          chunks.push(chunk);
        }
        const rawBody = Buffer.concat(chunks).toString("utf8");
        update = JSON.parse(rawBody);
      }
      if (!update || typeof update !== "object") {
        res.statusCode = 400;
        res.end("Bad Request: Invalid Telegram Update Payload");
        return;
      }
      await bot.handleUpdate(update);
      if (!res.writableEnded) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ ok: true }));
      }
    } catch (err) {
      if (bot.errorHandler) {
        bot.errorHandler(err);
      }
      if (!res.writableEnded) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    }
  };
}

// lib/telegix.js
var Telegix = class extends Composer {
  /**
   * @param {string} token - Telegram Bot Token from @BotFather
   * @param {object} [options]
   * @param {string} [options.apiRoot='https://api.telegram.org']
   * @param {boolean} [options.testEnv=false]
   * @param {number} [options.timeout=60000]
   * @param {object} [options.botInfo] - Pre-fetched bot info
   */
  constructor(token, options = {}) {
    super();
    if (!token || typeof token !== "string") {
      throw new TelegixError("Telegix: Telegram Bot Token is required.");
    }
    this.token = token.trim();
    this.options = options;
    this.telegram = new Telegram(this.token, options);
    this.api = this.telegram;
    this.botInfo = options.botInfo || null;
    this.polling = null;
    this.errorHandler = (err, ctx) => {
      console.error("Telegix Error:", err);
    };
  }
  /**
   * Custom error catcher
   * @param {Function} handler - (err: Error, ctx?: Context) => void
   * @returns {this}
   */
  catch(handler) {
    if (typeof handler !== "function") {
      throw new TypeError("Telegix.catch() expects a function handler");
    }
    this.errorHandler = handler;
    return this;
  }
  /**
   * Handle an incoming Telegram update object
   * @param {object} update
   * @returns {Promise<void>}
   */
  async handleUpdate(update) {
    if (!update || typeof update !== "object") return;
    const ctx = new Context(update, this.telegram, this.botInfo);
    try {
      const fn = this.middleware();
      await fn(ctx, () => Promise.resolve());
    } catch (err) {
      if (this.errorHandler) {
        await this.errorHandler(err, ctx);
      } else {
        throw err;
      }
    }
  }
  /**
   * Start polling for updates
   * @param {object} [options]
   * @returns {Promise<void>}
   */
  async startPolling(options = {}) {
    if (this.polling) {
      await this.polling.stop();
    }
    if (!this.botInfo) {
      try {
        this.botInfo = await this.telegram.getMe();
      } catch (err) {
        console.warn("Telegix: Warning: Could not fetch getMe() before polling:", err.message);
      }
    }
    this.polling = new Polling(
      this.telegram,
      (update) => this.handleUpdate(update),
      {
        onError: (err) => {
          if (this.errorHandler) this.errorHandler(err);
        },
        ...options
      }
    );
    await this.polling.start();
  }
  /**
   * Stop bot polling
   * @param {string} [reason]
   */
  async stop(reason = "manual") {
    if (this.polling) {
      await this.polling.stop();
      this.polling = null;
    }
  }
  /**
   * Launch bot using long-polling or webhook
   * @param {object} [options]
   * @param {object|boolean} [options.polling=true] - Long polling configuration or true
   * @param {object} [options.webhook] - Webhook configuration { domain, hookPath, port, secretToken }
   * @param {boolean} [options.dropPendingUpdates=false]
   * @returns {Promise<object>} Bot Info
   */
  async launch(options = {}) {
    if (!this.botInfo) {
      this.botInfo = await this.telegram.getMe();
    }
    console.log(`\u{1F680} Telegix Bot started: @${this.botInfo.username} (ID: ${this.botInfo.id})`);
    const handleExit = (signal) => {
      console.log(`
\u{1F6D1} Telegix Bot stopping due to ${signal}...`);
      this.stop(signal).then(() => {
        process.exit(0);
      });
    };
    if (typeof process !== "undefined" && process.once) {
      process.once("SIGINT", () => handleExit("SIGINT"));
      process.once("SIGTERM", () => handleExit("SIGTERM"));
    }
    if (options.webhook) {
      const { domain, hookPath = "/telegix-webhook", port = 3e3, secretToken } = options.webhook;
      const url = `${domain.replace(/\/$/, "")}${hookPath.startsWith("/") ? hookPath : `/${hookPath}`}`;
      await this.telegram.setWebhook(url, {
        secret_token: secretToken,
        drop_pending_updates: options.dropPendingUpdates
      });
      console.log(`\u{1F517} Webhook set to: ${url}`);
    } else {
      const pollingOptions = typeof options.polling === "object" ? options.polling : { dropPendingUpdates: options.dropPendingUpdates };
      await this.startPolling(pollingOptions);
    }
    return this.botInfo;
  }
  /**
   * Returns a standard HTTP webhook callback handler
   * @param {string} [path='/']
   * @param {object} [options]
   */
  webhookCallback(path2 = "/", options = {}) {
    return createWebhookCallback(this, path2, options);
  }
};

// lib/markup.js
var KeyboardBuilder = class {
  constructor(buttons = []) {
    this.keyboard = Array.isArray(buttons) ? buttons : [];
    this.is_persistent = false;
    this.resize_keyboard = true;
    this.one_time_keyboard = false;
    this.input_field_placeholder = void 0;
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
      selective: this.selective
    };
  }
};
var Markup = class {
  /**
   * Create custom reply keyboard markup
   * @param {Array<Array<object|string>|object|string>} buttons
   * @param {object} [options]
   * @returns {KeyboardBuilder}
   */
  static keyboard(buttons = [], options = {}) {
    const formatted = Array.isArray(buttons) ? buttons.map((row) => {
      const rowArr = Array.isArray(row) ? row : [row];
      return rowArr.map((btn) => typeof btn === "string" ? { text: btn } : btn);
    }) : [];
    const builder = new KeyboardBuilder(formatted);
    if (options.resize !== void 0) builder.resize(options.resize);
    if (options.oneTime !== void 0) builder.oneTime(options.oneTime);
    if (options.persistent !== void 0) builder.persistent(options.persistent);
    if (options.placeholder !== void 0) builder.placeholder(options.placeholder);
    if (options.selective !== void 0) builder.selectiveTarget(options.selective);
    return builder;
  }
  /**
   * Create inline keyboard markup
   * @param {Array<Array<object>|object>} buttons
   * @returns {{ inline_keyboard: Array<Array<object>>, reply_markup: { inline_keyboard: Array<Array<object>> } }}
   */
  static inlineKeyboard(buttons = []) {
    const inline_keyboard = Array.isArray(buttons) ? buttons.map((row) => {
      const rowArr = Array.isArray(row) ? row : [row];
      return rowArr.map((btn) => typeof btn === "string" ? { text: btn, callback_data: btn } : btn);
    }) : [];
    return {
      inline_keyboard,
      reply_markup: { inline_keyboard }
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
      selective: Boolean(selective)
    };
    return {
      ...res,
      reply_markup: res
    };
  }
  /**
   * Displays a reply interface to the user
   * @param {boolean} [selective=false]
   * @param {string} [placeholder]
   * @returns {{ force_reply: true, selective: boolean, input_field_placeholder?: string, reply_markup: object }}
   */
  static forceReply(selective = false, placeholder = void 0) {
    const res = {
      force_reply: true,
      selective: Boolean(selective)
    };
    if (placeholder) {
      res.input_field_placeholder = placeholder;
    }
    return {
      ...res,
      reply_markup: res
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
      if (typeof dataOrUrl === "string") {
        if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
          base = { url: dataOrUrl };
        } else {
          base = { callback_data: dataOrUrl };
        }
      } else if (typeof dataOrUrl === "number") {
        base = { callback_data: String(dataOrUrl) };
      } else if (typeof dataOrUrl === "object" && dataOrUrl !== null) {
        base = dataOrUrl;
      }
      return {
        text,
        style: "primary",
        ...base,
        ...options
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
      if (typeof dataOrUrl === "string") {
        if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
          base = { url: dataOrUrl };
        } else {
          base = { callback_data: dataOrUrl };
        }
      } else if (typeof dataOrUrl === "number") {
        base = { callback_data: String(dataOrUrl) };
      } else if (typeof dataOrUrl === "object" && dataOrUrl !== null) {
        base = dataOrUrl;
      }
      return {
        text,
        style: "danger",
        ...base,
        ...options
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
      if (typeof dataOrUrl === "string") {
        if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
          base = { url: dataOrUrl };
        } else {
          base = { callback_data: dataOrUrl };
        }
      } else if (typeof dataOrUrl === "number") {
        base = { callback_data: String(dataOrUrl) };
      } else if (typeof dataOrUrl === "object" && dataOrUrl !== null) {
        base = dataOrUrl;
      }
      return {
        text,
        style: "success",
        ...base,
        ...options
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
      if (typeof dataOrUrl === "string") {
        if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
          base = { url: dataOrUrl };
        } else {
          base = { callback_data: dataOrUrl };
        }
      } else if (typeof dataOrUrl === "number") {
        base = { callback_data: String(dataOrUrl) };
      } else if (typeof dataOrUrl === "object" && dataOrUrl !== null) {
        base = dataOrUrl;
      }
      return {
        text,
        style,
        ...base,
        ...options
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
      request_poll: type ? { type } : {}
    }),
    /**
     * Switch to inline query button
     * @param {string} text
     * @param {string} [query='']
     */
    switchToChat: (text, query = "") => ({
      text,
      switch_inline_query: query
    }),
    /**
     * Switch to inline query in current chat button
     * @param {string} text
     * @param {string} [query='']
     */
    switchToCurrentChat: (text, query = "") => ({
      text,
      switch_inline_query_current_chat: query
    }),
    /**
     * Login URL button
     * @param {string} text
     * @param {string} url
     * @param {object} [options]
     */
    login: (text, url, options = {}) => ({
      text,
      login_url: { url, ...options }
    }),
    /**
     * Pay button (must be the very first button in the first row of an invoice inline keyboard)
     * @param {string} [text='Pay']
     */
    pay: (text = "Pay") => ({
      text,
      pay: true
    }),
    /**
     * Copy text button (copies copyText directly to clipboard on click)
     * @param {string} text
     * @param {string} copyText
     */
    copyText: (text, copyText) => ({
      text,
      copy_text: { text: String(copyText) }
    }),
    /**
     * Request users button (reply keyboard only)
     * @param {string} text
     * @param {number} requestId
     * @param {object} [options]
     */
    requestUsers: (text, requestId, options = {}) => ({
      text,
      request_users: { request_id: requestId, ...options }
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
      request_chat: { request_id: requestId, chat_is_channel: Boolean(chatIsChannel), ...options }
    }),
    /**
     * Switch to inline query chosen chat button
     * @param {string} text
     * @param {string} [query='']
     * @param {object} [options]
     */
    switchInlineQueryChosenChat: (text, query = "", options = {}) => ({
      text,
      switch_inline_query_chosen_chat: { query, ...options }
    }),
    /**
     * Play Game button
     * @param {string} [text='Play Game']
     */
    game: (text = "Play Game") => ({
      text,
      callback_game: {}
    }),
    /**
     * Disabled button (Bot API 10.3)
     * @param {string} text
     */
    disabled: (text) => ({
      text,
      disabled: true
    })
  };
};

// lib/session.js
var import_promises = __toESM(require("fs/promises"), 1);
var MemorySessionStore = class {
  constructor(ttl = Infinity) {
    this.map = /* @__PURE__ */ new Map();
    this.ttl = ttl;
  }
  async get(key) {
    const item = this.map.get(key);
    if (!item) return void 0;
    if (Date.now() > item.expiresAt) {
      this.map.delete(key);
      return void 0;
    }
    return item.value;
  }
  async set(key, value) {
    const expiresAt = this.ttl === Infinity ? Infinity : Date.now() + this.ttl;
    this.map.set(key, { value, expiresAt });
  }
  async delete(key) {
    this.map.delete(key);
  }
  async clear() {
    this.map.clear();
  }
};
var FileSessionStore = class {
  constructor(filePath = "telegix_sessions.json", ttl = Infinity) {
    this.filePath = filePath;
    this.ttl = ttl;
    this.cache = null;
    this.loaded = false;
  }
  async _load() {
    if (this.loaded) return;
    try {
      const data = await import_promises.default.readFile(this.filePath, "utf8");
      const parsed = JSON.parse(data);
      this.cache = new Map(Object.entries(parsed));
    } catch {
      this.cache = /* @__PURE__ */ new Map();
    }
    this.loaded = true;
  }
  async _save() {
    if (!this.cache) return;
    try {
      const obj = Object.fromEntries(this.cache.entries());
      await import_promises.default.writeFile(this.filePath, JSON.stringify(obj, null, 2), "utf8");
    } catch (err) {
      console.error("Telegix FileSessionStore save error:", err);
    }
  }
  async get(key) {
    await this._load();
    const item = this.cache.get(key);
    if (!item) return void 0;
    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      await this._save();
      return void 0;
    }
    return item.value;
  }
  async set(key, value) {
    await this._load();
    const expiresAt = this.ttl === Infinity ? Infinity : Date.now() + this.ttl;
    this.cache.set(key, { value, expiresAt });
    await this._save();
  }
  async delete(key) {
    await this._load();
    this.cache.delete(key);
    await this._save();
  }
  async clear() {
    await this._load();
    this.cache.clear();
    await this._save();
  }
};
function session(options = {}) {
  const store = options.store || new MemorySessionStore(options.ttl);
  const getSessionKey = options.getSessionKey || ((ctx) => {
    const chatId = ctx.chatId;
    const userId = ctx.userId;
    if (!chatId && !userId) return null;
    return `${chatId ?? ""}:${userId ?? ""}`;
  });
  const initial = options.initial || (() => ({}));
  return async (ctx, next) => {
    const key = getSessionKey(ctx);
    if (!key) {
      return next();
    }
    let sessionData = await store.get(key);
    if (sessionData === void 0 || sessionData === null) {
      sessionData = initial(ctx);
    }
    ctx.session = sessionData;
    try {
      await next();
    } finally {
      if (ctx.session === null || ctx.session === void 0) {
        await store.delete(key);
      } else {
        await store.set(key, ctx.session);
      }
    }
  };
}

// lib/rich.js
var RichMessageButton = class _RichMessageButton {
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
      ...this.options
    };
  }
  static url(text, url) {
    return new _RichMessageButton(text, { url });
  }
  static callback(text, data) {
    return new _RichMessageButton(text, { callback_data: String(data) });
  }
  static copyText(text, copyText) {
    return new _RichMessageButton(text, { copy_text: { text: String(copyText) } });
  }
  static webApp(text, url) {
    return new _RichMessageButton(text, { web_app: { url } });
  }
  static primary(text, dataOrUrl, options = {}) {
    return new _RichMessageButton(text, {
      style: "primary",
      ..._RichMessageButton._resolveDataOrUrl(dataOrUrl),
      ...options
    });
  }
  static danger(text, dataOrUrl, options = {}) {
    return new _RichMessageButton(text, {
      style: "danger",
      ..._RichMessageButton._resolveDataOrUrl(dataOrUrl),
      ...options
    });
  }
  static success(text, dataOrUrl, options = {}) {
    return new _RichMessageButton(text, {
      style: "success",
      ..._RichMessageButton._resolveDataOrUrl(dataOrUrl),
      ...options
    });
  }
  static colored(text, style, dataOrUrl, options = {}) {
    return new _RichMessageButton(text, {
      style,
      ..._RichMessageButton._resolveDataOrUrl(dataOrUrl),
      ...options
    });
  }
  static disabled(text) {
    return new _RichMessageButton(text, { disabled: true });
  }
  static document(text, documentId) {
    return new _RichMessageButton(text, { url: `tg://document?id=${documentId}` });
  }
  static _resolveDataOrUrl(dataOrUrl) {
    if (!dataOrUrl) return {};
    if (typeof dataOrUrl === "string") {
      if (/^(https?:\/\/|tg:\/\/)/i.test(dataOrUrl)) {
        return { url: dataOrUrl };
      }
      return { callback_data: dataOrUrl };
    }
    if (typeof dataOrUrl === "number") {
      return { callback_data: String(dataOrUrl) };
    }
    if (typeof dataOrUrl === "object") {
      return dataOrUrl;
    }
    return {};
  }
};
var RichTextButton = class _RichTextButton {
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
      type: "rich_text_button",
      text: this.text,
      ...this.options
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
    return new _RichTextButton(text, { url });
  }
  static callback(text, data) {
    return new _RichTextButton(text, { callback_data: String(data) });
  }
  static document(text, documentId) {
    return new _RichTextButton(text, { url: `tg://document?id=${documentId}` });
  }
  static user(text, userId) {
    return new _RichTextButton(text, { url: `tg://user?id=${userId}` });
  }
};
var InputRichBlockButtons = class _InputRichBlockButtons {
  /**
   * @param {Array<Array<object>>|Array<object>} [buttons=[]]
   */
  constructor(buttons = []) {
    this.type = "buttons";
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
      type: "buttons",
      buttons: this.buttons.map(
        (row) => Array.isArray(row) ? row.map((btn) => typeof btn?.toJSON === "function" ? btn.toJSON() : btn) : typeof row?.toJSON === "function" ? row.toJSON() : row
      )
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
        lines.push(rowTexts.join("  "));
      }
    }
    return lines.join("\n");
  }
  static create(buttons) {
    return new _InputRichBlockButtons(buttons);
  }
};
var RichBlockButtons = InputRichBlockButtons;
var InputRichBlockExpandableBlockQuotation = class _InputRichBlockExpandableBlockQuotation {
  /**
   * @param {string} text
   * @param {object} [options]
   */
  constructor(text, options = {}) {
    this.type = "expandable_block_quotation";
    this.text = String(text || "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "expandable_block_quotation",
      text: this.text,
      ...this.options
    };
  }
  toHtml() {
    return `<blockquote expandable>${escapeHtml(this.text)}</blockquote>`;
  }
  static create(text, options) {
    return new _InputRichBlockExpandableBlockQuotation(text, options);
  }
};
var RichBlockExpandableBlockQuotation = InputRichBlockExpandableBlockQuotation;
var InputRichBlockDocument = class _InputRichBlockDocument {
  /**
   * @param {string|object} document
   * @param {string} [caption='']
   * @param {object} [options={}]
   */
  constructor(document, caption = "", options = {}) {
    this.type = "document";
    this.document = document;
    this.caption = String(caption || "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "document",
      document: this.document,
      caption: this.caption,
      ...this.options
    };
  }
  toHtml() {
    if (typeof this.document === "string" && this.document.startsWith("tg://")) {
      return `<a href="${escapeHtml(this.document)}">\u{1F4C4} ${escapeHtml(this.caption || "Document")}</a>`;
    }
    return `\u{1F4C4} <b>Document:</b> ${escapeHtml(this.caption || String(this.document))}`;
  }
  static create(document, caption, options) {
    return new _InputRichBlockDocument(document, caption, options);
  }
};
var RichBlockDocument = InputRichBlockDocument;
var InputRichBlockParagraph = class _InputRichBlockParagraph {
  /**
   * @param {string} text
   * @param {object} [options={}]
   */
  constructor(text, options = {}) {
    this.type = "paragraph";
    this.text = String(text ?? "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "paragraph",
      text: this.text,
      ...this.options
    };
  }
  toHtml() {
    return `<p>${escapeHtml(this.text)}</p>`;
  }
  static create(text, options) {
    return new _InputRichBlockParagraph(text, options);
  }
};
var RichBlockParagraph = InputRichBlockParagraph;
var InputRichBlockSectionHeading = class _InputRichBlockSectionHeading {
  /**
   * @param {string} text
   * @param {number} [level=2]
   * @param {object} [options={}]
   */
  constructor(text, level = 2, options = {}) {
    this.type = "section_heading";
    this.text = String(text ?? "");
    this.level = Math.max(1, Math.min(6, Number(level) || 2));
    this.options = options;
  }
  toJSON() {
    return {
      type: "section_heading",
      text: this.text,
      level: this.level,
      ...this.options
    };
  }
  toHtml() {
    return `<b>${escapeHtml(this.text)}</b>`;
  }
  static create(text, level, options) {
    return new _InputRichBlockSectionHeading(text, level, options);
  }
};
var RichBlockSectionHeading = InputRichBlockSectionHeading;
var InputRichBlockPreformatted = class _InputRichBlockPreformatted {
  /**
   * @param {string} text
   * @param {string} [language='']
   * @param {object} [options={}]
   */
  constructor(text, language = "", options = {}) {
    this.type = "preformatted";
    this.text = String(text ?? "");
    this.language = String(language || "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "preformatted",
      text: this.text,
      ...this.language ? { language: this.language } : {},
      ...this.options
    };
  }
  toHtml() {
    if (this.language) {
      return `<pre><code class="language-${escapeHtml(this.language)}">${escapeHtml(this.text)}</code></pre>`;
    }
    return `<pre>${escapeHtml(this.text)}</pre>`;
  }
  static create(text, language, options) {
    return new _InputRichBlockPreformatted(text, language, options);
  }
};
var RichBlockPreformatted = InputRichBlockPreformatted;
var InputRichBlockFooter = class _InputRichBlockFooter {
  /**
   * @param {string} text
   * @param {object} [options={}]
   */
  constructor(text, options = {}) {
    this.type = "footer";
    this.text = String(text ?? "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "footer",
      text: this.text,
      ...this.options
    };
  }
  toHtml() {
    return `<i>${escapeHtml(this.text)}</i>`;
  }
  static create(text, options) {
    return new _InputRichBlockFooter(text, options);
  }
};
var RichBlockFooter = InputRichBlockFooter;
var InputRichBlockDivider = class _InputRichBlockDivider {
  /**
   * @param {object} [options={}]
   */
  constructor(options = {}) {
    this.type = "divider";
    this.options = options;
  }
  toJSON() {
    return {
      type: "divider",
      ...this.options
    };
  }
  toHtml() {
    return "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";
  }
  static create(options) {
    return new _InputRichBlockDivider(options);
  }
};
var RichBlockDivider = InputRichBlockDivider;
var InputRichBlockMathematicalExpression = class _InputRichBlockMathematicalExpression {
  /**
   * @param {string} expression
   * @param {object} [options={}]
   */
  constructor(expression, options = {}) {
    this.type = "mathematical_expression";
    this.expression = String(expression ?? "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "mathematical_expression",
      expression: this.expression,
      ...this.options
    };
  }
  toHtml() {
    return `<tg-math>${escapeHtml(this.expression)}</tg-math>`;
  }
  static create(expression, options) {
    return new _InputRichBlockMathematicalExpression(expression, options);
  }
};
var RichBlockMathematicalExpression = InputRichBlockMathematicalExpression;
var RichBlockMath = InputRichBlockMathematicalExpression;
var InputRichBlockAnchor = class _InputRichBlockAnchor {
  /**
   * @param {string} name
   * @param {string} [text='']
   * @param {object} [options={}]
   */
  constructor(name, text = "", options = {}) {
    this.type = "anchor";
    this.name = String(name ?? "");
    this.text = String(text ?? "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "anchor",
      name: this.name,
      ...this.text ? { text: this.text } : {},
      ...this.options
    };
  }
  toHtml() {
    return `<a name="${escapeHtml(this.name)}">${escapeHtml(this.text)}</a>`;
  }
  static create(name, text, options) {
    return new _InputRichBlockAnchor(name, text, options);
  }
};
var RichBlockAnchor = InputRichBlockAnchor;
var InputRichBlockListItem = class _InputRichBlockListItem {
  /**
   * @param {string} text
   * @param {object} [options={}]
   * @param {boolean|null} [options.is_checked] - True for checked checkbox, false for unchecked, null for bullet
   * @param {number|null} [options.number] - Numeric index for numbered lists
   * @param {string} [options.type] - Item type override
   */
  constructor(text, options = {}) {
    this.text = String(text ?? "");
    this.is_checked = options.is_checked ?? options.isChecked ?? null;
    this.number = options.number !== void 0 && options.number !== null ? Number(options.number) : null;
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
      text: this.text
    };
    if (this.is_checked !== null && this.is_checked !== void 0) {
      res.is_checked = Boolean(this.is_checked);
    }
    if (this.number !== null && this.number !== void 0) {
      res.number = Number(this.number);
    }
    if (this.type) {
      res.type = this.type;
    }
    return res;
  }
  toHtml() {
    if (this.is_checked === true) {
      return `\u2611\uFE0F ${escapeHtml(this.text)}`;
    }
    if (this.is_checked === false) {
      return `\u25FB\uFE0F ${escapeHtml(this.text)}`;
    }
    if (this.number !== null) {
      return `${this.number}. ${escapeHtml(this.text)}`;
    }
    return `\u2022 ${escapeHtml(this.text)}`;
  }
  static checked(text, options = {}) {
    return new _InputRichBlockListItem(text, { is_checked: true, ...options });
  }
  static unchecked(text, options = {}) {
    return new _InputRichBlockListItem(text, { is_checked: false, ...options });
  }
  static bullet(text, options = {}) {
    return new _InputRichBlockListItem(text, options);
  }
  static numbered(number, text, options = {}) {
    return new _InputRichBlockListItem(text, { number, ...options });
  }
};
var RichBlockListItem = InputRichBlockListItem;
var InputRichBlockList = class _InputRichBlockList {
  /**
   * @param {Array<InputRichBlockListItem|string|object>} [items=[]]
   * @param {object} [options={}]
   * @param {boolean} [options.ordered=false]
   */
  constructor(items = [], options = {}) {
    this.type = "list";
    this.ordered = Boolean(options.ordered);
    this.options = options;
    this.items = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item instanceof InputRichBlockListItem) {
        this.items.push(item);
      } else if (typeof item === "object" && item !== null) {
        const itemNumber = this.ordered && item.number === void 0 ? i + 1 : item.number;
        this.items.push(new InputRichBlockListItem(item.text ?? item.title ?? "", { number: itemNumber, ...item }));
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
    } else if (typeof item === "object" && item !== null) {
      const itemNumber = this.ordered && item.number === void 0 ? this.items.length + 1 : item.number;
      this.items.push(new InputRichBlockListItem(item.text ?? item.title ?? "", { number: itemNumber, ...item }));
    } else {
      const itemNumber = this.ordered ? this.items.length + 1 : null;
      this.items.push(new InputRichBlockListItem(String(item), { number: itemNumber }));
    }
    return this;
  }
  toJSON() {
    return {
      type: "list",
      items: this.items.map((it) => typeof it.toJSON === "function" ? it.toJSON() : it),
      ...this.ordered ? { ordered: true } : {},
      ...this.options
    };
  }
  toHtml() {
    return this.items.map((it) => typeof it.toHtml === "function" ? it.toHtml() : `\u2022 ${escapeHtml(it.text || String(it))}`).join("\n");
  }
  static create(items, options) {
    return new _InputRichBlockList(items, options);
  }
  static ordered(items, options = {}) {
    return new _InputRichBlockList(items, { ordered: true, ...options });
  }
  static checklist(items, options = {}) {
    const listItems = items.map((it) => {
      if (typeof it === "object" && it !== null && it.is_checked !== void 0) {
        return it;
      }
      return { text: String(it), is_checked: false };
    });
    return new _InputRichBlockList(listItems, options);
  }
};
var RichBlockList = InputRichBlockList;
var InputRichBlockChecklist = class _InputRichBlockChecklist extends InputRichBlockList {
  constructor(items = [], options = {}) {
    super(items, { checklist: true, ...options });
    this.type = "checklist";
  }
  toJSON() {
    return {
      type: "checklist",
      items: this.items.map((it) => typeof it.toJSON === "function" ? it.toJSON() : it),
      ...this.options
    };
  }
  toHtml() {
    return this.items.map((it) => {
      const isChecked = typeof it === "object" && it !== null && (it.is_checked || it.checked);
      const mark = isChecked ? "\u2611\uFE0F" : "\u25FB\uFE0F";
      const text = typeof it === "object" && it !== null ? it.text || String(it) : String(it);
      return `${mark} ${escapeHtml(text)}`;
    }).join("\n");
  }
  static create(items, options) {
    return new _InputRichBlockChecklist(items, options);
  }
};
var RichBlockChecklist = InputRichBlockChecklist;
var InputRichBlockBlockQuotation = class _InputRichBlockBlockQuotation {
  /**
   * @param {string} text
   * @param {object} [options={}]
   */
  constructor(text, options = {}) {
    this.type = "block_quotation";
    this.text = String(text ?? "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "block_quotation",
      text: this.text,
      ...this.options
    };
  }
  toHtml() {
    return `<blockquote>${escapeHtml(this.text)}</blockquote>`;
  }
  static create(text, options) {
    return new _InputRichBlockBlockQuotation(text, options);
  }
};
var RichBlockBlockQuotation = InputRichBlockBlockQuotation;
var InputRichBlockPullQuotation = class _InputRichBlockPullQuotation {
  /**
   * @param {string} text
   * @param {object} [options={}]
   */
  constructor(text, options = {}) {
    this.type = "pull_quotation";
    this.text = String(text ?? "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "pull_quotation",
      text: this.text,
      ...this.options
    };
  }
  toHtml() {
    return `<tg-pullquote>${escapeHtml(this.text)}</tg-pullquote>`;
  }
  static create(text, options) {
    return new _InputRichBlockPullQuotation(text, options);
  }
};
var RichBlockPullQuotation = InputRichBlockPullQuotation;
var RichBlockPullQuote = InputRichBlockPullQuotation;
var InputRichBlockCollage = class _InputRichBlockCollage {
  /**
   * @param {Array<object|string>} [media=[]]
   * @param {object} [options={}]
   */
  constructor(media = [], options = {}) {
    this.type = "collage";
    this.media = Array.isArray(media) ? media : [media];
    this.options = options;
  }
  toJSON() {
    return {
      type: "collage",
      media: this.media.map((m) => typeof m?.toJSON === "function" ? m.toJSON() : m),
      ...this.options
    };
  }
  toHtml() {
    return `\u{1F5BC}\uFE0F [Collage: ${this.media.length} media items]`;
  }
  static create(media, options) {
    return new _InputRichBlockCollage(media, options);
  }
};
var RichBlockCollage = InputRichBlockCollage;
var InputRichBlockSlideshow = class _InputRichBlockSlideshow {
  /**
   * @param {Array<object|string>} [media=[]]
   * @param {object} [options={}]
   */
  constructor(media = [], options = {}) {
    this.type = "slideshow";
    this.media = Array.isArray(media) ? media : [media];
    this.options = options;
  }
  toJSON() {
    return {
      type: "slideshow",
      media: this.media.map((m) => typeof m?.toJSON === "function" ? m.toJSON() : m),
      ...this.options
    };
  }
  toHtml() {
    return `\u{1F39E}\uFE0F [Slideshow: ${this.media.length} items]`;
  }
  static create(media, options) {
    return new _InputRichBlockSlideshow(media, options);
  }
};
var RichBlockSlideshow = InputRichBlockSlideshow;
var InputRichBlockDetails = class _InputRichBlockDetails {
  /**
   * @param {string} title
   * @param {string|Array<object>} [content='']
   * @param {object} [options={}]
   */
  constructor(title, content = "", options = {}) {
    this.type = "details";
    this.title = String(title ?? "");
    this.content = content;
    this.is_open = Boolean(options.is_open ?? options.isOpen);
    this.options = options;
  }
  toJSON() {
    return {
      type: "details",
      title: this.title,
      content: typeof this.content === "object" && this.content !== null && typeof this.content.toJSON === "function" ? this.content.toJSON() : this.content,
      is_open: this.is_open,
      ...this.options
    };
  }
  toHtml() {
    const body = typeof this.content === "string" ? escapeHtml(this.content) : Array.isArray(this.content) ? this.content.map((c) => typeof c?.toHtml === "function" ? c.toHtml() : String(c)).join("\n") : "";
    return `<details${this.is_open ? " open" : ""}><summary>${escapeHtml(this.title)}</summary>${body}</details>`;
  }
  static create(title, content, options) {
    return new _InputRichBlockDetails(title, content, options);
  }
};
var RichBlockDetails = InputRichBlockDetails;
var InputRichBlockMap = class _InputRichBlockMap {
  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {object} [options={}]
   */
  constructor(latitude, longitude, options = {}) {
    this.type = "map";
    this.latitude = Number(latitude);
    this.longitude = Number(longitude);
    this.title = options.title || "";
    this.options = options;
  }
  toJSON() {
    return {
      type: "map",
      latitude: this.latitude,
      longitude: this.longitude,
      ...this.title ? { title: this.title } : {},
      ...this.options
    };
  }
  toHtml() {
    return `\u{1F4CD} <b>${escapeHtml(this.title || "Location")}</b> (${this.latitude.toFixed(4)}, ${this.longitude.toFixed(4)})`;
  }
  static create(latitude, longitude, options) {
    return new _InputRichBlockMap(latitude, longitude, options);
  }
};
var RichBlockMap = InputRichBlockMap;
var InputRichBlockAnimation = class _InputRichBlockAnimation {
  /**
   * @param {string} animation
   * @param {object} [options={}]
   */
  constructor(animation, options = {}) {
    this.type = "animation";
    this.animation = animation;
    this.caption = options.caption || "";
    this.options = options;
  }
  toJSON() {
    return {
      type: "animation",
      animation: this.animation,
      ...this.caption ? { caption: this.caption } : {},
      ...this.options
    };
  }
  toHtml() {
    return `\u{1F3AC} <b>[Animation]</b> ${escapeHtml(this.caption || "")}`;
  }
  static create(animation, options) {
    return new _InputRichBlockAnimation(animation, options);
  }
};
var RichBlockAnimation = InputRichBlockAnimation;
var InputRichBlockAudio = class _InputRichBlockAudio {
  /**
   * @param {string} audio
   * @param {object} [options={}]
   */
  constructor(audio, options = {}) {
    this.type = "audio";
    this.audio = audio;
    this.title = options.title || "";
    this.performer = options.performer || "";
    this.duration = options.duration;
    this.options = options;
  }
  toJSON() {
    return {
      type: "audio",
      audio: this.audio,
      ...this.title ? { title: this.title } : {},
      ...this.performer ? { performer: this.performer } : {},
      ...this.duration !== void 0 ? { duration: Number(this.duration) } : {},
      ...this.options
    };
  }
  toHtml() {
    const titleStr = this.performer ? `${this.performer} - ${this.title}` : this.title || "Audio";
    return `\u{1F3B5} <b>${escapeHtml(titleStr)}</b>`;
  }
  static create(audio, options) {
    return new _InputRichBlockAudio(audio, options);
  }
};
var RichBlockAudio = InputRichBlockAudio;
var InputRichBlockPhoto = class _InputRichBlockPhoto {
  /**
   * @param {string} photo
   * @param {string} [caption='']
   * @param {object} [options={}]
   */
  constructor(photo, caption = "", options = {}) {
    this.type = "photo";
    this.photo = photo;
    this.caption = String(caption || options.caption || "");
    this.options = options;
  }
  toJSON() {
    return {
      type: "photo",
      photo: this.photo,
      ...this.caption ? { caption: this.caption } : {},
      ...this.options
    };
  }
  toHtml() {
    return `\u{1F5BC}\uFE0F <b>[Photo]</b> ${escapeHtml(this.caption || "")}`;
  }
  static create(photo, caption, options) {
    return new _InputRichBlockPhoto(photo, caption, options);
  }
};
var RichBlockPhoto = InputRichBlockPhoto;
var InputRichBlockVideo = class _InputRichBlockVideo {
  /**
   * @param {string} video
   * @param {object} [options={}]
   */
  constructor(video, options = {}) {
    this.type = "video";
    this.video = video;
    this.caption = options.caption || "";
    this.duration = options.duration;
    this.options = options;
  }
  toJSON() {
    return {
      type: "video",
      video: this.video,
      ...this.caption ? { caption: this.caption } : {},
      ...this.duration !== void 0 ? { duration: Number(this.duration) } : {},
      ...this.options
    };
  }
  toHtml() {
    return `\u{1F3A5} <b>[Video]</b> ${escapeHtml(this.caption || "")}`;
  }
  static create(video, options) {
    return new _InputRichBlockVideo(video, options);
  }
};
var RichBlockVideo = InputRichBlockVideo;
var InputRichBlockVoiceNote = class _InputRichBlockVoiceNote {
  /**
   * @param {string} voiceNote
   * @param {object} [options={}]
   */
  constructor(voiceNote, options = {}) {
    this.type = "voice_note";
    this.voice_note = voiceNote;
    this.caption = options.caption || "";
    this.duration = options.duration;
    this.options = options;
  }
  toJSON() {
    return {
      type: "voice_note",
      voice_note: this.voice_note,
      ...this.caption ? { caption: this.caption } : {},
      ...this.duration !== void 0 ? { duration: Number(this.duration) } : {},
      ...this.options
    };
  }
  toHtml() {
    return `\u{1F3A4} <b>[Voice Note]</b> ${escapeHtml(this.caption || "")}`;
  }
  static create(voiceNote, options) {
    return new _InputRichBlockVoiceNote(voiceNote, options);
  }
};
var RichBlockVoiceNote = InputRichBlockVoiceNote;
var InputRichBlockThinking = class _InputRichBlockThinking {
  /**
   * @param {string} [text='Thinking...']
   * @param {object} [options={}]
   */
  constructor(text = "Thinking...", options = {}) {
    this.type = "thinking";
    this.text = String(text ?? "Thinking...");
    this.options = options;
  }
  toJSON() {
    return {
      type: "thinking",
      text: this.text,
      ...this.options
    };
  }
  toHtml() {
    return `<tg-thinking>${escapeHtml(this.text)}</tg-thinking>`;
  }
  static create(text, options) {
    return new _InputRichBlockThinking(text, options);
  }
};
var RichBlockThinking = InputRichBlockThinking;
var InputRichMessageMedia = class _InputRichMessageMedia {
  /**
   * @param {string} media
   * @param {string} [type='photo']
   * @param {object} [options={}]
   */
  constructor(media, type = "photo", options = {}) {
    if (typeof media === "object" && media !== null) {
      this.media = media.media;
      this.type = media.type || type || "photo";
      this.caption = media.caption || options.caption || "";
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
      this.caption = options.caption || "";
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
      media: this.media
    };
    if (this.caption) res.caption = this.caption;
    if (this.parse_mode) res.parse_mode = this.parse_mode;
    if (this.show_caption_above_media !== void 0) res.show_caption_above_media = Boolean(this.show_caption_above_media);
    if (this.has_spoiler !== void 0) res.has_spoiler = Boolean(this.has_spoiler);
    if (this.width !== void 0) res.width = Number(this.width);
    if (this.height !== void 0) res.height = Number(this.height);
    if (this.duration !== void 0) res.duration = Number(this.duration);
    if (this.performer) res.performer = this.performer;
    if (this.title) res.title = this.title;
    if (this.thumbnail) res.thumbnail = this.thumbnail;
    return res;
  }
  static photo(media, caption = "", options = {}) {
    return new _InputRichMessageMedia(media, "photo", { caption, ...options });
  }
  static video(media, caption = "", options = {}) {
    return new _InputRichMessageMedia(media, "video", { caption, ...options });
  }
  static animation(media, caption = "", options = {}) {
    return new _InputRichMessageMedia(media, "animation", { caption, ...options });
  }
  static audio(media, caption = "", options = {}) {
    return new _InputRichMessageMedia(media, "audio", { caption, ...options });
  }
  static document(media, caption = "", options = {}) {
    return new _InputRichMessageMedia(media, "document", { caption, ...options });
  }
  static voiceNote(media, caption = "", options = {}) {
    return new _InputRichMessageMedia(media, "voice_note", { caption, ...options });
  }
};
var RichMessageMedia = InputRichMessageMedia;
var InputMediaVoiceNote = class _InputMediaVoiceNote {
  /**
   * @param {string} media
   * @param {object} [options={}]
   */
  constructor(media, options = {}) {
    this.type = "voice";
    this.media = media;
    this.caption = options.caption || "";
    this.parse_mode = options.parse_mode || options.parseMode;
    this.duration = options.duration;
    this.options = options;
  }
  toJSON() {
    const res = {
      type: this.type,
      media: this.media
    };
    if (this.caption) res.caption = this.caption;
    if (this.parse_mode) res.parse_mode = this.parse_mode;
    if (this.duration !== void 0) res.duration = Number(this.duration);
    return res;
  }
  static create(media, options = {}) {
    return new _InputMediaVoiceNote(media, options);
  }
};
var MediaVoiceNote = InputMediaVoiceNote;
var InputRichMessage = class _InputRichMessage {
  /**
   * @param {object|string} [options={}]
   */
  constructor(options = {}) {
    if (typeof options === "string") {
      this.text = options;
      this.blocks = [];
      this.media = [];
      this.is_rtl = false;
    } else {
      this.text = options.text || options.html || "";
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
      blocks: this.blocks.map((b) => typeof b?.toJSON === "function" ? b.toJSON() : b),
      media: this.media.map((m) => typeof m?.toJSON === "function" ? m.toJSON() : m),
      ...this.is_rtl ? { is_rtl: true } : {},
      ...this.draft_id !== void 0 ? { draft_id: this.draft_id } : {},
      ...this.ephemeral_message_parameters ? { ephemeral_message_parameters: this.ephemeral_message_parameters } : {},
      ...this.reply_markup ? { reply_markup: this.reply_markup } : {}
    };
  }
  static create(options) {
    return new _InputRichMessage(options);
  }
};
var RichMessageBuilder = class _RichMessageBuilder {
  constructor(initialText = "") {
    this.blocks = [];
    this._text = initialText ? String(initialText) : "";
    this._parseMode = "HTML";
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
  header(text, emoji = "") {
    const formatted = emoji ? `${emoji} ${text}` : text;
    this.blocks.push({
      type: "header",
      content: formatted,
      rawHtml: `<b>${escapeHtml(formatted)}</b>`
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
      type: "paragraph",
      content: text,
      rawHtml: escapeHtml(text)
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
      type: "bold",
      content: text,
      rawHtml: `<b>${escapeHtml(text)}</b>`
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
      type: "italic",
      content: text,
      rawHtml: `<i>${escapeHtml(text)}</i>`
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
      type: "underline",
      content: text,
      rawHtml: `<u>${escapeHtml(text)}</u>`
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
      type: "strikethrough",
      content: text,
      rawHtml: `<s>${escapeHtml(text)}</s>`
    });
    return this;
  }
  /**
   * Add code block or inline code
   * @param {string} codeText
   * @param {string} [language]
   * @returns {this}
   */
  code(codeText, language = "") {
    const isMultiline = String(codeText).includes("\n") || Boolean(language);
    this.blocks.push({
      type: "code",
      content: codeText,
      language,
      rawHtml: isMultiline ? html.pre(codeText, language) : html.code(codeText)
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
      type: "quote",
      content: text,
      expandable: false,
      rawHtml: `<blockquote>${escapeHtml(text)}</blockquote>`
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
      type: "spoiler",
      content: text,
      rawHtml: `<span class="tg-spoiler">${escapeHtml(text)}</span>`
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
      type: "link",
      text,
      url,
      rawHtml: `<a href="${escapeHtml(url)}">${escapeHtml(text)}</a>`
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
      type: "mention",
      text,
      userId,
      rawHtml: `<a href="tg://user?id=${userId}">${escapeHtml(text)}</a>`
    });
    return this;
  }
  /**
   * Add document link using tg://document?id= (Bot API 10.3)
   * @param {string} documentId
   * @param {string} [text='Document']
   * @returns {this}
   */
  documentLink(documentId, text = "Document") {
    return this.link(text, `tg://document?id=${documentId}`);
  }
  /**
   * Add bullet list
   * @param {Array<string>} items
   * @param {string|object} [bulletOrOptions='•']
   * @returns {this}
   */
  list(items, bulletOrOptions = "\u2022") {
    if (typeof bulletOrOptions === "object") {
      this.blocks.push(new InputRichBlockList(items, bulletOrOptions));
      return this;
    }
    const listItems = Array.isArray(items) ? items : [items];
    const bullet = typeof bulletOrOptions === "string" ? bulletOrOptions : "\u2022";
    const htmlLines = listItems.map((item) => `${bullet} ${escapeHtml(item)}`).join("\n");
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
  preformatted(text, language = "", options = {}) {
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
  anchor(name, text = "", options = {}) {
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
  details(title, content = "", options = {}) {
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
  photo(photo, caption = "", options = {}) {
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
  thinking(text = "Thinking...", options = {}) {
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
    const htmlLines = listItems.map((item, idx) => `<b>${idx + 1}.</b> ${escapeHtml(item)}`).join("\n");
    this.blocks.push({
      type: "numbered_list",
      items: listItems,
      rawHtml: htmlLines
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
  badge(label, value, icon = "") {
    const iconPrefix = icon ? `${icon} ` : "";
    this.blocks.push({
      type: "badge",
      label,
      value,
      rawHtml: `${iconPrefix}<b>${escapeHtml(label)}:</b> <code>${escapeHtml(value)}</code>`
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
        ...options
      });
    } else if (headersOrTable && typeof headersOrTable === "object" && !Array.isArray(headersOrTable)) {
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
  document(document, caption = "", options = {}) {
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
    } else if (typeof lifetimeSecondsOrParams === "number") {
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
      if (typeof block?.toHtml === "function") {
        parts.push(block.toHtml());
      } else if (block?.rawHtml) {
        parts.push(block.rawHtml);
      }
    }
    return parts.join("\n\n");
  }
  /**
   * Compile payload ready for Telegram Bot API
   * @returns {object}
   */
  compile() {
    const compiledText = this.compileHtml();
    const replyMarkup = this._customReplyMarkup || (this._inlineKeyboard.length > 0 ? { inline_keyboard: this._inlineKeyboard } : void 0);
    const payload = {
      text: compiledText || " ",
      parse_mode: this._parseMode,
      blocks: this.blocks.map((b) => {
        if (typeof b?.toJSON === "function") {
          return b.toJSON();
        }
        return { ...b };
      }),
      ...this._extra
    };
    if (this._media && this._media.length > 0) {
      payload.media = this._media.map((m) => typeof m?.toJSON === "function" ? m.toJSON() : m);
    }
    if (this._isRtl !== void 0) {
      payload.is_rtl = Boolean(this._isRtl);
    }
    if (replyMarkup) {
      payload.reply_markup = replyMarkup;
    }
    if (this._ephemeral) {
      const ephemeralObj = typeof this._ephemeral.toJSON === "function" ? this._ephemeral.toJSON() : this._ephemeral;
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
    } else if (typeof item === "string") {
      this._media.push(new InputRichMessageMedia(item, options.type || "photo", options));
    } else if (typeof item === "object" && item !== null) {
      this._media.push(new InputRichMessageMedia(item, item.type || options.type || "photo", { ...options, ...item }));
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
      throw new Error("RichMessage.send() requires a target chatId or active Context.");
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
      throw new Error("RichMessage.sendDraft() requires a target chatId or active Context.");
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
      throw new Error("RichMessage.edit() requires chatId and messageId.");
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
    return new _RichMessageBuilder(initialText);
  }
  /**
   * Create a rich message pre-populated with a table
   * @param {Array<string>|Table|InputRichBlockTable} headers
   * @param {Array<Array<any>>} [rows]
   * @param {object} [options]
   * @returns {RichMessageBuilder}
   */
  static table(headers, rows = [], options = {}) {
    const builder = new _RichMessageBuilder();
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
    const builder = new _RichMessageBuilder();
    builder.compactTable(headers, rows, options);
    return builder;
  }
  /**
   * Create a rich message with buttons block
   * @param {Array<Array<object>>|Array<object>} buttonsMatrix
   * @returns {RichMessageBuilder}
   */
  static buttons(buttonsMatrix) {
    const builder = new _RichMessageBuilder();
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
    const builder = new _RichMessageBuilder();
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
    const builder = new _RichMessageBuilder(text);
    return builder.draftId(draftId);
  }
  /**
   * Create an ephemeral disappearing message builder
   * @param {string} text
   * @param {number|object|EphemeralMessageParameters} [lifetimeSecondsOrParams=60]
   * @returns {RichMessageBuilder}
   */
  static ephemeral(text, lifetimeSecondsOrParams = 60) {
    const builder = new _RichMessageBuilder(text);
    return builder.ephemeral(lifetimeSecondsOrParams);
  }
  /**
   * Helper to format a tg://document?id= link
   * @param {string} documentId
   * @param {string} [text='Document']
   */
  static documentLink(documentId, text = "Document") {
    return `<a href="tg://document?id=${escapeHtml(documentId)}">${escapeHtml(text)}</a>`;
  }
};
var RichMessage = RichMessageBuilder;

// lib/scenes.js
var BaseScene = class extends Composer {
  /**
   * @param {string} id - Unique Scene identifier
   */
  constructor(id) {
    super();
    if (!id || typeof id !== "string") {
      throw new Error("BaseScene requires a valid string ID");
    }
    this.id = id;
    this.enterHandlers = [];
    this.leaveHandlers = [];
  }
  /**
   * Handler executed when user enters the scene
   * @param {...Function} handlers
   */
  enter(...handlers) {
    this.enterHandlers.push(...handlers);
    return this;
  }
  /**
   * Handler executed when user leaves the scene
   * @param {...Function} handlers
   */
  leave(...handlers) {
    this.leaveHandlers.push(...handlers);
    return this;
  }
};
var WizardScene = class extends BaseScene {
  /**
   * @param {string} id - Wizard Scene ID
   * @param {...Function} steps - Middleware step functions
   */
  constructor(id, ...steps) {
    super(id);
    this.steps = steps;
    this.use(async (ctx, next) => {
      if (!ctx.scene?.session) return next();
      const cursor = ctx.scene.session.cursor || 0;
      const step = this.steps[cursor];
      if (!step) {
        return ctx.scene.leave();
      }
      return step(ctx, next);
    });
    this.enter((ctx, next) => {
      ctx.scene.session.cursor = 0;
      const step = this.steps[0];
      if (step) {
        return step(ctx, next);
      }
      return next();
    });
  }
};
var Stage = class extends Composer {
  /**
   * @param {Array<BaseScene>} scenes
   * @param {object} [options]
   */
  constructor(scenes = [], options = {}) {
    super();
    this.scenes = /* @__PURE__ */ new Map();
    this.options = {
      defaultScene: null,
      ...options
    };
    for (const scene of scenes) {
      this.register(scene);
    }
    this.use(this.middleware());
  }
  /**
   * Register a scene
   * @param {BaseScene} scene
   */
  register(scene) {
    if (!scene || !scene.id) {
      throw new Error("Stage.register requires a valid BaseScene instance with an ID");
    }
    this.scenes.set(scene.id, scene);
    return this;
  }
  /**
   * Returns Stage middleware
   */
  middleware() {
    const stageInstance = this;
    return async (ctx, next) => {
      if (!ctx.session) {
        throw new Error("Telegix Stage: session middleware is required before Stage middleware!");
      }
      ctx.session.__scenes = ctx.session.__scenes || {};
      const sceneSession = ctx.session.__scenes;
      const sceneControl = {
        get session() {
          const currentId = sceneSession.current;
          if (!currentId) return {};
          sceneSession.state = sceneSession.state || {};
          return sceneSession.state;
        },
        get current() {
          const currentId = sceneSession.current;
          return currentId ? stageInstance.scenes.get(currentId) || null : null;
        },
        get state() {
          return sceneSession.state || {};
        },
        enter: async (sceneId, initialState = {}) => {
          const scene2 = stageInstance.scenes.get(sceneId);
          if (!scene2) {
            throw new Error(`Telegix Stage: Scene '${sceneId}' not found!`);
          }
          sceneSession.current = sceneId;
          sceneSession.state = { ...initialState };
          sceneSession.cursor = 0;
          if (scene2.enterHandlers.length > 0) {
            const enterFn = compose(scene2.enterHandlers);
            await enterFn(ctx, async () => {
            });
          }
        },
        reenter: async () => {
          const currentId = sceneSession.current;
          if (currentId) {
            await sceneControl.enter(currentId, sceneSession.state);
          }
        },
        leave: async () => {
          const currentId = sceneSession.current;
          if (currentId) {
            const scene2 = stageInstance.scenes.get(currentId);
            if (scene2 && scene2.leaveHandlers.length > 0) {
              const leaveFn = compose(scene2.leaveHandlers);
              await leaveFn(ctx, async () => {
              });
            }
          }
          delete sceneSession.current;
          delete sceneSession.state;
          delete sceneSession.cursor;
        }
      };
      const wizardControl = {
        get cursor() {
          return sceneSession.cursor || 0;
        },
        set cursor(val) {
          sceneSession.cursor = val;
        },
        get state() {
          return sceneControl.state;
        },
        selectStep: (index) => {
          sceneSession.cursor = index;
        },
        next: () => {
          sceneSession.cursor = (sceneSession.cursor || 0) + 1;
        },
        back: () => {
          sceneSession.cursor = Math.max(0, (sceneSession.cursor || 0) - 1);
        }
      };
      ctx.scene = sceneControl;
      ctx.wizard = wizardControl;
      const currentSceneId = sceneSession.current || this.options.defaultScene;
      if (!currentSceneId) {
        return next();
      }
      const scene = this.scenes.get(currentSceneId);
      if (!scene) {
        return next();
      }
      return scene.middleware()(ctx, next);
    };
  }
};
var Scene = BaseScene;

// lib/i18n.js
function getNestedValue(obj, path2) {
  if (!obj || typeof obj !== "object") return void 0;
  if (obj[path2] !== void 0) return obj[path2];
  const keys = path2.split(".");
  let current = obj;
  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = current[k];
    } else {
      return void 0;
    }
  }
  return current;
}
var I18n = class {
  /**
   * @param {object} [options]
   * @param {string} [options.defaultLocale='en']
   * @param {object} [options.translations={}]
   * @param {Function} [options.localeFn]
   * @param {boolean} [options.useSession=true]
   */
  constructor(options = {}) {
    this.defaultLocale = options.defaultLocale || "en";
    this.translations = options.translations || {};
    this.useSession = options.useSession !== false;
    this.localeFn = options.localeFn || ((ctx) => {
      if (this.useSession && ctx.session) {
        const sessionLocale = ctx.session.__locale || ctx.session.locale || ctx.session.language;
        if (sessionLocale) return sessionLocale;
      }
      return ctx.from?.language_code || this.defaultLocale;
    });
  }
  /**
   * Register or add translations for a locale
   * @param {string} locale
   * @param {object} dict
   */
  addTranslation(locale, dict) {
    this.translations[locale] = {
      ...this.translations[locale] || {},
      ...dict
    };
    return this;
  }
  /**
   * Add multiple translation dictionaries
   * @param {Record<string, object>} translations
   */
  addTranslations(translations = {}) {
    for (const [locale, dict] of Object.entries(translations)) {
      this.addTranslation(locale, dict);
    }
    return this;
  }
  /**
   * Translate a key with optional interpolation params and pluralization
   * @param {string} locale
   * @param {string} key
   * @param {object} [params]
   * @returns {string}
   */
  t(locale, key, params = {}) {
    const activeDict = this.translations[locale] || {};
    const defaultDict = this.translations[this.defaultLocale] || {};
    let val = getNestedValue(activeDict, key);
    if (val === void 0) {
      val = getNestedValue(defaultDict, key);
    }
    if (val === void 0) {
      val = key;
    }
    if (typeof val === "object" && val !== null) {
      const count = Number(params.count);
      if (!isNaN(count)) {
        if (count === 0 && val.zero) {
          val = val.zero;
        } else if (count === 1 && val.one) {
          val = val.one;
        } else if (val.other) {
          val = val.other;
        } else {
          val = JSON.stringify(val);
        }
      } else {
        val = JSON.stringify(val);
      }
    }
    let text = String(val);
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(new RegExp(`{{\\s*${k}\\s*}}`, "g"), String(v));
      text = text.replace(new RegExp(`{\\s*${k}\\s*}`, "g"), String(v));
    }
    return text;
  }
  /**
   * Create i18n middleware for Telegix
   */
  middleware() {
    return (ctx, next) => {
      let rawLocale = this.localeFn(ctx) || this.defaultLocale;
      let activeLocale = this.defaultLocale;
      if (this.translations[rawLocale]) {
        activeLocale = rawLocale;
      } else {
        const prefix = String(rawLocale).split("-")[0].toLowerCase();
        if (this.translations[prefix]) {
          activeLocale = prefix;
        }
      }
      const self = this;
      const i18nContext = {
        get locale() {
          return activeLocale;
        },
        set locale(newLocale) {
          activeLocale = newLocale;
          if (self.useSession && ctx.session) {
            ctx.session.__locale = newLocale;
          }
        },
        setLocale(newLocale) {
          this.locale = newLocale;
          return activeLocale;
        },
        t: (key, params) => self.t(activeLocale, key, params)
      };
      ctx.i18n = i18nContext;
      ctx.t = (key, params) => i18nContext.t(key, params);
      return next();
    };
  }
};

// lib/ratelimit.js
var RateLimiter = class {
  constructor(options = {}) {
    this.windowMs = options.windowMs || 3e3;
    this.limit = options.limit || 3;
    this.keyFn = options.keyFn || ((ctx) => ctx.userId || ctx.chatId);
    this.handler = options.handler || (async (ctx) => {
      await ctx.reply("\u26A0\uFE0F Too many requests. Please slow down.");
    });
    this.storage = /* @__PURE__ */ new Map();
    const cleanup = setInterval(() => {
      const now = Date.now();
      for (const [key, data] of this.storage.entries()) {
        if (now > data.resetTime) {
          this.storage.delete(key);
        }
      }
    }, Math.max(this.windowMs, 1e4));
    if (cleanup.unref) cleanup.unref();
  }
  middleware() {
    return async (ctx, next) => {
      const key = this.keyFn(ctx);
      if (!key) return next();
      const now = Date.now();
      let record = this.storage.get(key);
      if (!record || now > record.resetTime) {
        record = {
          count: 1,
          resetTime: now + this.windowMs
        };
        this.storage.set(key, record);
        return next();
      }
      record.count++;
      if (record.count > this.limit) {
        return this.handler(ctx, next);
      }
      return next();
    };
  }
};
function rateLimit(options) {
  const limiter = new RateLimiter(options);
  return limiter.middleware();
}

// lib/inline.js
var InlineQueryResultBuilder = class {
  static article(id, title, messageText, options = {}) {
    return {
      type: "article",
      id: String(id),
      title,
      input_message_content: {
        message_text: messageText,
        parse_mode: options.parseMode || "HTML",
        ...options.inputMessageContent
      },
      description: options.description,
      thumb_url: options.thumbUrl,
      thumb_width: options.thumbWidth,
      thumb_height: options.thumbHeight,
      reply_markup: options.replyMarkup
    };
  }
  static photo(id, photoUrl, options = {}) {
    return {
      type: "photo",
      id: String(id),
      photo_url: photoUrl,
      thumb_url: options.thumbUrl || photoUrl,
      caption: options.caption,
      parse_mode: options.parseMode || "HTML",
      caption_entities: options.captionEntities,
      description: options.description,
      title: options.title,
      reply_markup: options.replyMarkup,
      photo_width: options.photoWidth,
      photo_height: options.photoHeight
    };
  }
  static document(id, documentUrl, title, options = {}) {
    return {
      type: "document",
      id: String(id),
      title,
      document_url: documentUrl,
      mime_type: options.mimeType || "application/pdf",
      caption: options.caption,
      description: options.description,
      reply_markup: options.replyMarkup
    };
  }
};
async function paginateInlineQuery(ctx, items, formatterFn, options = {}) {
  const limit = options.limit || 10;
  const cacheTime = options.cacheTime !== void 0 ? options.cacheTime : 300;
  const isPersonal = options.isPersonal !== void 0 ? options.isPersonal : true;
  const offset = parseInt(ctx.inlineQuery?.offset || "0", 10) || 0;
  const pageItems = items.slice(offset, offset + limit);
  const results = pageItems.map((item, index) => formatterFn(item, offset + index));
  const nextOffset = offset + limit < items.length ? String(offset + limit) : "";
  return ctx.answerInlineQuery(results, {
    next_offset: nextOffset,
    cache_time: cacheTime,
    is_personal: isPersonal,
    ...options.extra
  });
}

// lib/album.js
function albumMiddleware(options = {}) {
  const windowMs = options.windowMs || 400;
  const pendingAlbums = /* @__PURE__ */ new Map();
  return async (ctx, next) => {
    const msg = ctx.msg || ctx.message;
    const mediaGroupId = msg?.raw?.media_group_id || msg?.media_group_id;
    if (!mediaGroupId) {
      return next();
    }
    if (pendingAlbums.has(mediaGroupId)) {
      const albumEntry2 = pendingAlbums.get(mediaGroupId);
      albumEntry2.messages.push(msg);
      albumEntry2.contexts.push(ctx);
      return;
    }
    const albumEntry = {
      messages: [msg],
      contexts: [ctx],
      timer: null
    };
    return new Promise((resolve) => {
      albumEntry.timer = setTimeout(async () => {
        pendingAlbums.delete(mediaGroupId);
        const albumData = {
          mediaGroupId,
          messages: albumEntry.messages,
          count: albumEntry.messages.length
        };
        for (const c of albumEntry.contexts) {
          c.album = albumData;
        }
        try {
          await next();
          resolve();
        } catch (err) {
          resolve();
          throw err;
        }
      }, windowMs);
      pendingAlbums.set(mediaGroupId, albumEntry);
    });
  };
}

// lib/prompt.js
var activePrompts = /* @__PURE__ */ new Map();
function promptMiddleware() {
  return async (ctx, next) => {
    const chatId = ctx.chat?.id || ctx.chatId;
    const userId = ctx.from?.id || ctx.userId;
    const text = ctx.message?.text || ctx.message?.caption || ctx.msg?.text || ctx.msg?.caption;
    if (chatId && userId && (text !== void 0 || ctx.message || ctx.msg)) {
      const key = `${chatId}:${userId}`;
      if (activePrompts.has(key)) {
        const handler = activePrompts.get(key);
        activePrompts.delete(key);
        handler(text, ctx);
        return;
      }
    }
    ctx.prompt = async (textMessage, options = {}) => {
      const targetChatId = ctx.chat?.id || ctx.chatId;
      const targetUserId = ctx.from?.id || ctx.userId;
      if (!targetChatId || !targetUserId) {
        throw new Error("Cannot prompt without chat ID and user ID");
      }
      const timeoutMs = options.timeoutMs || 6e4;
      await ctx.reply(textMessage, options.extra);
      return new Promise((resolve, reject) => {
        const key = `${targetChatId}:${targetUserId}`;
        if (activePrompts.has(key)) {
          activePrompts.delete(key);
        }
        const timer = setTimeout(() => {
          if (activePrompts.has(key)) {
            activePrompts.delete(key);
            reject(new Error("Prompt timed out"));
          }
        }, timeoutMs);
        activePrompts.set(key, (responseText, promptCtx) => {
          clearTimeout(timer);
          if (options.returnContext) {
            resolve({ text: responseText, ctx: promptCtx });
          } else {
            resolve(responseText);
          }
        });
      });
    };
    return next();
  };
}

// lib/markdownv2.js
function escapeMarkdownV2(str) {
  if (typeof str !== "string") return "";
  return str.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
var mdv2 = {
  escape: escapeMarkdownV2,
  bold: (text) => `*${escapeMarkdownV2(text)}*`,
  italic: (text) => `_${escapeMarkdownV2(text)}_`,
  underline: (text) => `__${escapeMarkdownV2(text)}__`,
  strikethrough: (text) => `~${escapeMarkdownV2(text)}~`,
  spoiler: (text) => `||${escapeMarkdownV2(text)}||`,
  code: (text) => `\`${text.replace(/`/g, "\\`")}\``,
  pre: (text, language = "") => `\`\`\`${language}
${text}
\`\`\``,
  link: (text, url) => `[${escapeMarkdownV2(text)}](${url})`,
  quote: (text) => text.split("\n").map((line) => `>${escapeMarkdownV2(line)}`).join("\n"),
  expandableQuote: (text) => `**>${escapeMarkdownV2(text)}||`,
  collapsibleQuote: (text) => `**>${escapeMarkdownV2(text)}||`
};

// lib/inline-debounce.js
var queryCache = /* @__PURE__ */ new Map();
function inlineDebounceMiddleware(options = {}) {
  const windowMs = options.windowMs || 300;
  const cacheTtlMs = options.cacheTtlMs || 6e4;
  return async (ctx, next) => {
    if (!ctx.inlineQuery) {
      return next();
    }
    const userId = ctx.from?.id;
    const query = ctx.inlineQuery.query || "";
    if (!userId) return next();
    const cacheKey = `${userId}:${query}`;
    const now = Date.now();
    if (queryCache.has(cacheKey)) {
      const cached = queryCache.get(cacheKey);
      if (now - cached.timestamp < cacheTtlMs) {
        return ctx.answerInlineQuery(cached.results, cached.options);
      } else {
        queryCache.delete(cacheKey);
      }
    }
    ctx.cacheInlineResults = (results, extraOptions = {}) => {
      queryCache.set(cacheKey, {
        results,
        options: extraOptions,
        timestamp: Date.now()
      });
    };
    return next();
  };
}

// lib/chataction.js
function chatActionMiddleware(action = "typing", options = {}) {
  const intervalMs = options.intervalMs || 4e3;
  return async (ctx, next) => {
    const chatId = ctx.chat?.id;
    if (!chatId) {
      return next();
    }
    ctx.sendChatAction = (act = action, extra = {}) => {
      return ctx.telegram.sendChatAction(chatId, act, extra);
    };
    let active = true;
    ctx.sendChatAction(action).catch(() => {
    });
    const timer = setInterval(() => {
      if (!active) return;
      ctx.sendChatAction(action).catch(() => {
      });
    }, intervalMs);
    try {
      await next();
    } finally {
      active = false;
      clearInterval(timer);
    }
  };
}

// lib/payment.js
var InvoiceBuilder = class {
  constructor(title, description, payload, currency, prices) {
    this.invoice = {
      title,
      description,
      payload,
      currency: currency || "XTR",
      // Telegram Stars default or USD, RUB, etc.
      prices: prices || []
    };
  }
  providerToken(token) {
    if (token) this.invoice.provider_token = token;
    return this;
  }
  addPrice(label, amount) {
    this.invoice.prices.push({ label, amount });
    return this;
  }
  maxTipAmount(amount) {
    this.invoice.max_tip_amount = amount;
    return this;
  }
  suggestedTipAmounts(amounts) {
    this.invoice.suggested_tip_amounts = amounts;
    return this;
  }
  photo(url, width, height, size) {
    if (url) this.invoice.photo_url = url;
    if (width) this.invoice.photo_width = width;
    if (height) this.invoice.photo_height = height;
    if (size) this.invoice.photo_size = size;
    return this;
  }
  need(options = {}) {
    if (options.name) this.invoice.need_name = true;
    if (options.phoneNumber) this.invoice.need_phone_number = true;
    if (options.email) this.invoice.need_email = true;
    if (options.shippingAddress) this.invoice.need_shipping_address = true;
    return this;
  }
  send(ctx, chatId) {
    const targetChatId = chatId || ctx.chat?.id || ctx.chatId;
    if (!targetChatId) {
      throw new Error("Target chat ID is required to send invoice");
    }
    const { title, description, payload, currency, prices, ...extra } = this.invoice;
    return ctx.telegram.sendInvoice(
      targetChatId,
      title,
      description,
      payload,
      currency,
      prices,
      extra
    );
  }
  build() {
    return { ...this.invoice };
  }
};
function answerShippingQuery(ctx, ok, options = {}) {
  const shippingQueryId = ctx.shippingQuery?.id || options.shippingQueryId || (typeof ctx === "string" ? ctx : null);
  if (!shippingQueryId) throw new Error("Shipping Query ID is missing");
  return ctx.telegram.answerShippingQuery(shippingQueryId, ok, options);
}
function answerPreCheckoutQuery(ctx, ok, options = {}) {
  const preCheckoutQueryId = ctx.preCheckoutQuery?.id || options.preCheckoutQueryId || (typeof ctx === "string" ? ctx : null);
  if (!preCheckoutQueryId) throw new Error("Pre-Checkout Query ID is missing");
  const errorMsg = typeof options === "string" ? options : options.errorMessage;
  return ctx.telegram.answerPreCheckoutQuery(preCheckoutQueryId, ok, errorMsg);
}

// lib/cluster.js
var TelegixManager = class {
  constructor() {
    this.bots = /* @__PURE__ */ new Map();
  }
  /**
   * Add a bot instance to the manager
   * @param {string} name - Identifier for the bot
   * @param {string|object} tokenOrOptions - Bot token string or options object
   * @returns {Telegix} Telegix instance
   */
  add(name, tokenOrOptions) {
    if (this.bots.has(name)) {
      return this.bots.get(name);
    }
    const bot = new Telegix(tokenOrOptions);
    this.bots.set(name, bot);
    return bot;
  }
  get(name) {
    return this.bots.get(name);
  }
  remove(name) {
    const bot = this.bots.get(name);
    if (bot) {
      bot.stop();
      this.bots.delete(name);
    }
  }
  /**
   * Launch all managed bots
   * @param {object} [options] - Launch options
   */
  async launchAll(options = {}) {
    const promises = [];
    for (const [name, bot] of this.bots.entries()) {
      promises.push(
        bot.launch(options).catch((err) => {
          console.error(`Failed to launch bot "${name}":`, err.message);
          throw err;
        })
      );
    }
    return Promise.all(promises);
  }
  /**
   * Stop all managed bots
   */
  stopAll() {
    for (const [name, bot] of this.bots.entries()) {
      try {
        bot.stop();
      } catch (err) {
        console.error(`Error stopping bot "${name}":`, err.message);
      }
    }
  }
};

// index.js
var index_default = Telegix;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseScene,
  BotCommand,
  Composer,
  Context,
  EphemeralMessageParameters,
  FileSessionStore,
  Format,
  I18n,
  InlineQueryResultBuilder,
  InputMediaVoiceNote,
  InputRichBlockAnchor,
  InputRichBlockAnimation,
  InputRichBlockAudio,
  InputRichBlockBlockQuotation,
  InputRichBlockButtons,
  InputRichBlockChecklist,
  InputRichBlockCollage,
  InputRichBlockDetails,
  InputRichBlockDivider,
  InputRichBlockDocument,
  InputRichBlockExpandableBlockQuotation,
  InputRichBlockFooter,
  InputRichBlockList,
  InputRichBlockListItem,
  InputRichBlockMap,
  InputRichBlockMathematicalExpression,
  InputRichBlockParagraph,
  InputRichBlockPhoto,
  InputRichBlockPreformatted,
  InputRichBlockPullQuotation,
  InputRichBlockSectionHeading,
  InputRichBlockSlideshow,
  InputRichBlockTable,
  InputRichBlockThinking,
  InputRichBlockVideo,
  InputRichBlockVoiceNote,
  InputRichMessage,
  InputRichMessageMedia,
  InvoiceBuilder,
  KeyboardBuilder,
  LinkPreview,
  Markup,
  MediaVoiceNote,
  MemorySessionStore,
  MiniApp,
  MiniAppLoadingScreen,
  NetworkError,
  Polling,
  PollingError,
  RateLimiter,
  ReplyParameters,
  RichBlockAnchor,
  RichBlockAnimation,
  RichBlockAudio,
  RichBlockBlockQuotation,
  RichBlockButtons,
  RichBlockChecklist,
  RichBlockCollage,
  RichBlockDetails,
  RichBlockDivider,
  RichBlockDocument,
  RichBlockExpandableBlockQuotation,
  RichBlockFooter,
  RichBlockList,
  RichBlockListItem,
  RichBlockMap,
  RichBlockMath,
  RichBlockMathematicalExpression,
  RichBlockParagraph,
  RichBlockPhoto,
  RichBlockPreformatted,
  RichBlockPullQuotation,
  RichBlockPullQuote,
  RichBlockSectionHeading,
  RichBlockSlideshow,
  RichBlockTable,
  RichBlockThinking,
  RichBlockVideo,
  RichBlockVoiceNote,
  RichMessage,
  RichMessageBuilder,
  RichMessageButton,
  RichMessageMedia,
  RichTextButton,
  Scene,
  Stage,
  Table,
  Telegix,
  TelegixError,
  TelegixManager,
  Telegram,
  TelegramError,
  WizardScene,
  albumMiddleware,
  answerPreCheckoutQuery,
  answerShippingQuery,
  chatActionMiddleware,
  compose,
  createMiniAppLaunchUrl,
  createWebhookCallback,
  escapeHtml,
  escapeMarkdown,
  escapeMarkdownV2,
  fmt,
  generateMiniAppLoadingScreen,
  html,
  inlineDebounceMiddleware,
  markdown,
  mdv2,
  normalizeTelegramPayload,
  paginateInlineQuery,
  parseWebAppInitData,
  promptMiddleware,
  rateLimit,
  serializeMessage,
  serializeUpdate,
  session,
  streamText,
  toTextStream,
  validateWebAppInitData
});
/**
 * Telegix - Lightweight, Pure JavaScript Telegram Bot API Framework
 * @author Michael Agam
 * @license MIT
 */
