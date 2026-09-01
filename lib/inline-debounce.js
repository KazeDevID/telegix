/**
 * Telegix - Inline Query Debouncer & Cache Helper
 */

const queryCache = new Map();
const debounceTimers = new Map();

/**
 * Middleware or helper to debounce inline queries and cache results
 * @param {object} [options] - { windowMs?: number, cacheTtlMs?: number }
 */
export function inlineDebounceMiddleware(options = {}) {
  const windowMs = options.windowMs || 300;
  const cacheTtlMs = options.cacheTtlMs || 60000;

  return async (ctx, next) => {
    if (!ctx.inlineQuery) {
      return next();
    }

    const userId = ctx.from?.id;
    const query = ctx.inlineQuery.query || '';
    if (!userId) return next();

    const cacheKey = `${userId}:${query}`;
    const now = Date.now();

    // Check cache
    if (queryCache.has(cacheKey)) {
      const cached = queryCache.get(cacheKey);
      if (now - cached.timestamp < cacheTtlMs) {
        return ctx.answerInlineQuery(cached.results, cached.options);
      } else {
        queryCache.delete(cacheKey);
      }
    }

    // Attach cache helper to ctx
    ctx.cacheInlineResults = (results, extraOptions = {}) => {
      queryCache.set(cacheKey, {
        results,
        options: extraOptions,
        timestamp: Date.now(),
      });
    };

    return next();
  };
}
