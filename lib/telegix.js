/**
 * Telegix - Pure JavaScript Telegram Bot Framework
 * @module telegix
 */

import { Composer } from './composer.js';
import { Telegram } from './api.js';
import { Context } from './context.js';
import { Polling } from './polling.js';
import { createWebhookCallback } from './webhook.js';
import { TelegixError } from './errors.js';

export class Telegix extends Composer {
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

    if (!token || typeof token !== 'string') {
      throw new TelegixError('Telegix: Telegram Bot Token is required.');
    }

    this.token = token.trim();
    this.options = options;
    this.telegram = new Telegram(this.token, options);
    this.api = this.telegram; // alias
    this.botInfo = options.botInfo || null;
    this.polling = null;
    this.errorHandler = (err, ctx) => {
      console.error('Telegix Error:', err);
    };
  }

  /**
   * Custom error catcher
   * @param {Function} handler - (err: Error, ctx?: Context) => void
   * @returns {this}
   */
  catch(handler) {
    if (typeof handler !== 'function') {
      throw new TypeError('Telegix.catch() expects a function handler');
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
    if (!update || typeof update !== 'object') return;

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
        console.warn('Telegix: Warning: Could not fetch getMe() before polling:', err.message);
      }
    }

    this.polling = new Polling(
      this.telegram,
      (update) => this.handleUpdate(update),
      {
        onError: (err) => {
          if (this.errorHandler) this.errorHandler(err);
        },
        ...options,
      }
    );

    await this.polling.start();
  }

  /**
   * Stop bot polling
   * @param {string} [reason]
   */
  async stop(reason = 'manual') {
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
    // 1. Fetch bot info
    if (!this.botInfo) {
      this.botInfo = await this.telegram.getMe();
    }

    console.log(`🚀 Telegix Bot started: @${this.botInfo.username} (ID: ${this.botInfo.id})`);

    // 2. Setup shutdown hooks
    const handleExit = (signal) => {
      console.log(`\n🛑 Telegix Bot stopping due to ${signal}...`);
      this.stop(signal).then(() => {
        process.exit(0);
      });
    };

    if (typeof process !== 'undefined' && process.once) {
      process.once('SIGINT', () => handleExit('SIGINT'));
      process.once('SIGTERM', () => handleExit('SIGTERM'));
    }

    // 3. Webhook or Polling
    if (options.webhook) {
      const { domain, hookPath = '/telegix-webhook', port = 3000, secretToken } = options.webhook;
      const url = `${domain.replace(/\/$/, '')}${hookPath.startsWith('/') ? hookPath : `/${hookPath}`}`;

      await this.telegram.setWebhook(url, {
        secret_token: secretToken,
        drop_pending_updates: options.dropPendingUpdates,
      });

      console.log(`🔗 Webhook set to: ${url}`);
    } else {
      const pollingOptions =
        typeof options.polling === 'object'
          ? options.polling
          : { dropPendingUpdates: options.dropPendingUpdates };
      await this.startPolling(pollingOptions);
    }

    return this.botInfo;
  }

  /**
   * Returns a standard HTTP webhook callback handler
   * @param {string} [path='/']
   * @param {object} [options]
   */
  webhookCallback(path = '/', options = {}) {
    return createWebhookCallback(this, path, options);
  }
}
