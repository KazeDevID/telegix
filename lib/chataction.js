/**
 * Telegix - Chat Action Auto-Sender Middleware & Helper
 */

/**
 * Middleware that automatically sends a chat action (e.g. 'typing') periodically while processing a handler
 * @param {string} [action='typing'] - Chat action type ('typing', 'upload_photo', etc.)
 * @param {object} [options] - { intervalMs?: number } (default 4000ms)
 */
export function chatActionMiddleware(action = 'typing', options = {}) {
  const intervalMs = options.intervalMs || 4000;

  return async (ctx, next) => {
    const chatId = ctx.chat?.id;
    if (!chatId) {
      return next();
    }

    // Attach convenience helper to ctx
    ctx.sendChatAction = (act = action, extra = {}) => {
      return ctx.telegram.sendChatAction(chatId, act, extra);
    };

    // Send initial action
    let active = true;
    ctx.sendChatAction(action).catch(() => {});

    const timer = setInterval(() => {
      if (!active) return;
      ctx.sendChatAction(action).catch(() => {});
    }, intervalMs);

    try {
      await next();
    } finally {
      active = false;
      clearInterval(timer);
    }
  };
}
