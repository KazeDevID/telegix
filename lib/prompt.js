/**
 * Telegix - Context Prompt Helper & Conversation Handler
 */

const activePrompts = new Map(); // key: `${chatId}:${userId}` -> callback(text)

export function promptMiddleware() {
  return async (ctx, next) => {
    const chatId = ctx.chat?.id || ctx.chatId;
    const userId = ctx.from?.id || ctx.userId;
    const text = ctx.message?.text || ctx.message?.caption || ctx.msg?.text || ctx.msg?.caption;

    if (chatId && userId && (text !== undefined || ctx.message || ctx.msg)) {
      const key = `${chatId}:${userId}`;
      if (activePrompts.has(key)) {
        const handler = activePrompts.get(key);
        activePrompts.delete(key);
        handler(text, ctx);
        return; // Consume update for the prompt
      }
    }

    // Attach prompt helper to context
    ctx.prompt = async (textMessage, options = {}) => {
      const targetChatId = ctx.chat?.id || ctx.chatId;
      const targetUserId = ctx.from?.id || ctx.userId;
      if (!targetChatId || !targetUserId) {
        throw new Error('Cannot prompt without chat ID and user ID');
      }

      const timeoutMs = options.timeoutMs || 60000; // default 1 minute
      await ctx.reply(textMessage, options.extra);

      return new Promise((resolve, reject) => {
        const key = `${targetChatId}:${targetUserId}`;
        
        // If there's an existing prompt, cancel it
        if (activePrompts.has(key)) {
          activePrompts.delete(key);
        }

        const timer = setTimeout(() => {
          if (activePrompts.has(key)) {
            activePrompts.delete(key);
            reject(new Error('Prompt timed out'));
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
