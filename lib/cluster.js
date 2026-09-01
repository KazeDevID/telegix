/**
 * Telegix - Multi-Bot Manager / Cluster Support
 */

import { Telegix } from './telegix.js';

export class TelegixManager {
  constructor() {
    this.bots = new Map();
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
}
