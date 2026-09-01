/**
 * Telegix - Long Polling Engine
 * @module telegix/polling
 */

import { PollingError } from './errors.js';

export class Polling {
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
      allowedUpdates: undefined,
      dropPendingUpdates: false,
      retryInterval: 3000,
      ...options,
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

    // Delete webhook if exists or drop pending updates
    try {
      if (this.options.dropPendingUpdates) {
        await this.telegram.deleteWebhook({ drop_pending_updates: true });
      }
    } catch {
      // Ignore initial webhook check error
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

        // Retry delay on error / 429
        const retryDelay = err.retryAfter ? err.retryAfter * 1000 : this.options.retryInterval;
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
}
