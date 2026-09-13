/**
 * Telegix - Webhook Handler & Adapter
 * Supports standard Node.js HTTP servers (Express, Fastify, Connect)
 * AND Cloudflare Pages Functions, Cloudflare Workers, and Web Fetch API.
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
        const rawBody = (typeof Buffer !== 'undefined' && Buffer.concat)
          ? Buffer.concat(chunks).toString('utf8')
          : chunks.map((c) => (typeof c === 'string' ? c : new TextDecoder().decode(c))).join('');
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

/**
 * Creates a Cloudflare Pages Functions / Cloudflare Workers / Web Fetch API webhook handler.
 * Compatible with:
 *  - Cloudflare Pages Functions: `export const onRequest = createPagesWebhookHandler(bot, options);`
 *  - Cloudflare Pages POST only: `export const onRequestPost = createPagesWebhookHandler(bot, options);`
 *  - Cloudflare Workers: `export default { fetch: createPagesWebhookHandler(bot, options) };`
 *
 * @param {import('./telegix.js').Telegix | ((env: any, context: any) => import('./telegix.js').Telegix)} [botOrFactory]
 * @param {object} [options]
 * @param {string|((env: any) => string)} [options.secretToken] - Secret token for header verification or getter function
 * @param {string} [options.path] - Optional path restriction (e.g. '/webhook')
 * @param {boolean} [options.waitUntil=true] - Use context.waitUntil() to respond 200 OK instantly and process in background
 * @param {number} [options.respondOnError=200] - Status to respond with on unhandled update error (default 200 prevents Telegram retry storm)
 * @param {boolean} [options.enableHealthCheck=true] - If true, GET requests return a JSON health check status
 * @param {Function} [options.onUpdate] - Optional callback when update is received
 * @param {Function} [options.onError] - Custom error handler
 * @returns {Function} Universal Cloudflare Pages / Workers handler
 */
export function createPagesWebhookHandler(botOrFactory, options = {}) {
  const opts = {
    waitUntil: true,
    respondOnError: 200,
    enableHealthCheck: true,
    ...options,
  };

  // Cache for bot instance when initialized via factory
  let cachedBot = typeof botOrFactory === 'object' && botOrFactory !== null ? botOrFactory : null;

  return async function handlePagesRequest(arg1, arg2, arg3) {
    let request;
    let env = {};
    let waitUntil = null;

    // Detect Cloudflare Pages context vs Cloudflare Workers vs standard Fetch
    if (arg1 && typeof arg1 === 'object' && 'request' in arg1) {
      // Cloudflare Pages: context = { request, env, waitUntil, next, params, data }
      request = arg1.request;
      env = arg1.env || {};
      if (typeof arg1.waitUntil === 'function') {
        waitUntil = arg1.waitUntil.bind(arg1);
      }
    } else {
      // Cloudflare Workers: (request, env, ctx) or Fetch: (request)
      request = arg1;
      env = arg2 || {};
      if (arg3 && typeof arg3.waitUntil === 'function') {
        waitUntil = arg3.waitUntil.bind(arg3);
      }
    }

    if (!request || typeof request.method !== 'string') {
      return new Response('Invalid Request Object', { status: 400 });
    }

    const method = request.method.toUpperCase();
    const url = new URL(request.url);

    // 1. CORS Preflight
    if (method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Telegram-Bot-Api-Secret-Token',
        },
      });
    }

    // 2. Path validation if specified
    if (opts.path && opts.path !== '/' && url.pathname !== opts.path) {
      return new Response('Not Found', { status: 404 });
    }

    // 3. GET Method: Health check & diagnostics
    if (method === 'GET') {
      if (opts.enableHealthCheck) {
        const hasToken = Boolean(
          (env && (env.BOT_TOKEN || env.TELEGRAM_BOT_TOKEN)) ||
          cachedBot?.telegram?.token
        );
        const hasSecret = Boolean(
          opts.secretToken ||
          (env && (env.WEBHOOK_SECRET || env.SECRET_TOKEN))
        );

        return new Response(
          JSON.stringify(
            {
              status: 'ok',
              engine: 'Telegix',
              runtime: 'Cloudflare Pages Functions / Workers',
              service: 'Telegram Bot Webhook Endpoint',
              timestamp: new Date().toISOString(),
              endpoint: url.pathname,
              configured: {
                botToken: hasToken,
                secretTokenVerification: hasSecret,
                backgroundExecution: Boolean(opts.waitUntil && waitUntil),
              },
              hint: 'Send POST updates from Telegram to this URL.',
            },
            null,
            2
          ),
          {
            status: 200,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }
      return new Response('Method Not Allowed', { status: 405 });
    }

    // 4. Webhook updates MUST be POST
    if (method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    // 5. Secret Token Verification
    let secretToken = opts.secretToken;
    if (typeof secretToken === 'function') {
      secretToken = secretToken(env);
    } else if (!secretToken && env) {
      secretToken = env.WEBHOOK_SECRET || env.SECRET_TOKEN;
    }

    if (secretToken) {
      const receivedToken = request.headers.get('x-telegram-bot-api-secret-token');
      if (receivedToken !== secretToken) {
        return new Response('Forbidden: Invalid Webhook Secret Token', {
          status: 403,
          headers: { 'Content-Type': 'text/plain' },
        });
      }
    }

    // 6. Resolve Bot Instance
    let bot = cachedBot;
    if (!bot) {
      if (typeof botOrFactory === 'function') {
        bot = botOrFactory(env, { request, env, waitUntil });
        cachedBot = bot;
      } else if (opts.getBot && typeof opts.getBot === 'function') {
        bot = opts.getBot(env, { request, env, waitUntil });
      } else if (env && (env.BOT_TOKEN || env.TELEGRAM_BOT_TOKEN)) {
        const token = env.BOT_TOKEN || env.TELEGRAM_BOT_TOKEN;
        const { Telegix } = await import('./telegix.js');
        bot = new Telegix(token);
        cachedBot = bot;
      }
    }

    if (!bot) {
      return new Response(
        'Server Configuration Error: Telegix Bot instance or BOT_TOKEN is missing in Cloudflare environment.',
        {
          status: 500,
          headers: { 'Content-Type': 'text/plain' },
        }
      );
    }

    // 7. Parse incoming Telegram Update JSON
    let update = null;
    try {
      update = await request.json();
    } catch {
      return new Response('Bad Request: Invalid JSON Payload', {
        status: 400,
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    if (!update || typeof update !== 'object') {
      return new Response('Bad Request: Expected Telegram update object', {
        status: 400,
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    // 8. Optional user hook before processing
    if (typeof opts.onUpdate === 'function') {
      try {
        await opts.onUpdate(update, { request, env, waitUntil, bot });
      } catch (hookErr) {
        console.warn('[Telegix Webhook] onUpdate hook error:', hookErr);
      }
    }

    // 9. Pipeline execution
    const processTask = (async () => {
      try {
        await bot.handleUpdate(update);
      } catch (err) {
        console.error('[Telegix Webhook] Error processing update:', err);
        if (typeof opts.onError === 'function') {
          opts.onError(err, { update, request, env, bot });
        } else if (bot.errorHandler) {
          bot.errorHandler(err);
        }
      }
    })();

    // 10. If waitUntil is enabled and supported by Cloudflare, return 200 OK immediately
    // to prevent Telegram webhook timeouts (< 5 seconds)!
    if (opts.waitUntil && typeof waitUntil === 'function') {
      waitUntil(processTask);
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // Otherwise await synchronously
    try {
      await processTask;
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (err) {
      const status = typeof opts.respondOnError === 'number' ? opts.respondOnError : 200;
      return new Response(JSON.stringify({ ok: false, error: err.message }), {
        status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  };
}

/**
 * Direct function to handle a Cloudflare Pages or Workers request
 * @param {object} context - Cloudflare Pages context or request
 * @param {import('./telegix.js').Telegix} bot
 * @param {object} [options]
 * @returns {Promise<Response>}
 */
export async function handleCloudflareWebhook(context, bot, options = {}) {
  const handler = createPagesWebhookHandler(bot, options);
  return handler(context);
}

/**
 * Alias for createPagesWebhookHandler for Cloudflare Workers / Edge environments
 */
export const createCloudflareWebhookCallback = createPagesWebhookHandler;

/**
 * Helper handler for Cloudflare Pages to set, check, or delete Telegram Webhook via HTTP
 * Place in `functions/setWebhook.js` for instant webhook registration in your browser or curl.
 *
 * @param {import('./telegix.js').Telegix | ((env: any) => import('./telegix.js').Telegix)} [botOrFactory]
 * @param {object} [options]
 * @param {string} [options.webhookPath='/webhook']
 * @returns {Function} Cloudflare Pages Request Handler
 */
export function createPagesSetWebhookHandler(botOrFactory, options = {}) {
  const webhookPath = options.webhookPath || '/webhook';

  return async function handleSetWebhook(context) {
    const request = context.request || context;
    const env = context.env || {};
    const url = new URL(request.url);
    const action = url.searchParams.get('action') || (request.method === 'POST' ? 'set' : 'info');

    // Resolve bot instance
    let bot = typeof botOrFactory === 'object' && botOrFactory !== null ? botOrFactory : null;
    if (!bot) {
      if (typeof botOrFactory === 'function') {
        bot = botOrFactory(env);
      } else if (env && (env.BOT_TOKEN || env.TELEGRAM_BOT_TOKEN)) {
        const token = env.BOT_TOKEN || env.TELEGRAM_BOT_TOKEN;
        const { Telegix } = await import('./telegix.js');
        bot = new Telegix(token);
      }
    }

    if (!bot) {
      return new Response(
        JSON.stringify(
          {
            ok: false,
            error: 'BOT_TOKEN is not configured in Cloudflare environment variables.',
          },
          null,
          2
        ),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const secretToken = options.secretToken || env.WEBHOOK_SECRET || env.SECRET_TOKEN || undefined;
    const targetWebhookUrl = `${url.origin}${webhookPath}`;

    try {
      if (action === 'set') {
        const dropPending = url.searchParams.get('drop_pending_updates') === 'true';
        const result = await bot.telegram.setWebhook(targetWebhookUrl, {
          secret_token: secretToken,
          drop_pending_updates: dropPending,
        });

        const info = await bot.telegram.getWebhookInfo();

        return new Response(
          JSON.stringify(
            {
              ok: true,
              action: 'setWebhook',
              message: 'Telegram Webhook successfully set for Cloudflare Pages!',
              webhookUrl: targetWebhookUrl,
              secretTokenSet: Boolean(secretToken),
              telegramResponse: result,
              currentWebhookInfo: info,
            },
            null,
            2
          ),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (action === 'delete') {
        const dropPending = url.searchParams.get('drop_pending_updates') === 'true';
        const result = await bot.telegram.deleteWebhook({
          drop_pending_updates: dropPending,
        });

        return new Response(
          JSON.stringify(
            {
              ok: true,
              action: 'deleteWebhook',
              message: 'Telegram Webhook successfully deleted.',
              telegramResponse: result,
            },
            null,
            2
          ),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Default: show current Webhook Info
      const info = await bot.telegram.getWebhookInfo();
      const me = await bot.telegram.getMe().catch(() => null);

      return new Response(
        JSON.stringify(
          {
            ok: true,
            action: 'getWebhookInfo',
            bot: me
              ? { id: me.id, username: me.username, first_name: me.first_name }
              : 'Unknown',
            targetWebhookUrl,
            currentWebhookInfo: info,
            actions: {
              setWebhook: `${url.origin}/setWebhook?action=set`,
              deleteWebhook: `${url.origin}/setWebhook?action=delete`,
              setWithDropUpdates: `${url.origin}/setWebhook?action=set&drop_pending_updates=true`,
            },
          },
          null,
          2
        ),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (err) {
      return new Response(
        JSON.stringify(
          {
            ok: false,
            error: err.message,
            code: err.code || err.error_code,
          },
          null,
          2
        ),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  };
}

