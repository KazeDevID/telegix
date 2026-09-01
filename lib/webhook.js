/**
 * Telegix - Webhook Handler & Adapter
 * @module telegix/webhook
 */

/**
 * Creates a webhook HTTP request handler compatible with Node http, Express, Connect, Fastify, etc.
 * @param {import('./telegix.js').Telegix} bot
 * @param {string} [path='/']
 * @param {object} [options]
 * @param {string} [options.secretToken] - Secret token for header verification
 * @returns {Function} Request handler (req, res, next)
 */
export function createWebhookCallback(bot, path = '/', options = {}) {
  const secretToken = options.secretToken;

  return async function webhookCallback(req, res, next) {
    // Check path if specified and not root wildcard
    const reqUrl = req.url ? req.url.split('?')[0] : '/';
    if (path && path !== '/' && reqUrl !== path) {
      if (typeof next === 'function') return next();
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }

    // Check method
    if (req.method !== 'POST') {
      res.statusCode = 405;
      res.end('Method Not Allowed');
      return;
    }

    // Check secret token if configured
    if (secretToken) {
      const receivedToken =
        req.headers?.['x-telegram-bot-api-secret-token'] ||
        req.headers?.['X-Telegram-Bot-Api-Secret-Token'];
      if (receivedToken !== secretToken) {
        res.statusCode = 403;
        res.end('Forbidden: Invalid Secret Token');
        return;
      }
    }

    let update = null;

    try {
      // If body is already parsed (e.g. express.json() middleware)
      if (req.body && typeof req.body === 'object') {
        update = req.body;
      } else {
        // Read stream body
        const chunks = [];
        for await (const chunk of req) {
          chunks.push(chunk);
        }
        const rawBody = Buffer.concat(chunks).toString('utf8');
        update = JSON.parse(rawBody);
      }

      if (!update || typeof update !== 'object') {
        res.statusCode = 400;
        res.end('Bad Request: Invalid Telegram Update Payload');
        return;
      }

      // Process update through Telegix pipeline
      await bot.handleUpdate(update);

      if (!res.writableEnded) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: true }));
      }
    } catch (err) {
      if (bot.errorHandler) {
        bot.errorHandler(err);
      }
      if (!res.writableEnded) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    }
  };
}
