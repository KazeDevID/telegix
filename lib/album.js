/**
 * Telegix - Media Group (Album) Collector Middleware
 * Automatically batches multiple photos/videos sent together as an album into ctx.album
 */

export function albumMiddleware(options = {}) {
  const windowMs = options.windowMs || 400;
  const pendingAlbums = new Map();

  return async (ctx, next) => {
    const msg = ctx.msg || ctx.message;
    const mediaGroupId = msg?.raw?.media_group_id || msg?.media_group_id;

    if (!mediaGroupId) {
      return next();
    }

    if (pendingAlbums.has(mediaGroupId)) {
      const albumEntry = pendingAlbums.get(mediaGroupId);
      albumEntry.messages.push(msg);
      albumEntry.contexts.push(ctx);
      return;
    }

    const albumEntry = {
      messages: [msg],
      contexts: [ctx],
      timer: null,
    };

    return new Promise((resolve) => {
      albumEntry.timer = setTimeout(async () => {
        pendingAlbums.delete(mediaGroupId);

        const albumData = {
          mediaGroupId,
          messages: albumEntry.messages,
          count: albumEntry.messages.length,
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
