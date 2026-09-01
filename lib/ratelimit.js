/**
 * Telegix - Rate Limiter & Throttling Middleware
 */

export class RateLimiter {
  constructor(options = {}) {
    this.windowMs = options.windowMs || 3000; // 3 seconds window by default
    this.limit = options.limit || 3; // Max 3 requests per window
    this.keyFn = options.keyFn || ((ctx) => ctx.userId || ctx.chatId);
    this.handler = options.handler || (async (ctx) => {
      await ctx.reply('⚠️ Too many requests. Please slow down.');
    });
    this.storage = new Map();

    const cleanup = setInterval(() => {
      const now = Date.now();
      for (const [key, data] of this.storage.entries()) {
        if (now > data.resetTime) {
          this.storage.delete(key);
        }
      }
    }, Math.max(this.windowMs, 10000));
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
          resetTime: now + this.windowMs,
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
}

/**
 * Convenience factory function
 */
export function rateLimit(options) {
  const limiter = new RateLimiter(options);
  return limiter.middleware();
}
