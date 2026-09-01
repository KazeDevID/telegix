/**
 * Telegix - Session Management Middleware
 * @module telegix/session
 */

import fs from 'fs/promises';

export class MemorySessionStore {
  constructor(ttl = Infinity) {
    this.map = new Map();
    this.ttl = ttl;
  }

  async get(key) {
    const item = this.map.get(key);
    if (!item) return undefined;
    if (Date.now() > item.expiresAt) {
      this.map.delete(key);
      return undefined;
    }
    return item.value;
  }

  async set(key, value) {
    const expiresAt = this.ttl === Infinity ? Infinity : Date.now() + this.ttl;
    this.map.set(key, { value, expiresAt });
  }

  async delete(key) {
    this.map.delete(key);
  }

  async clear() {
    this.map.clear();
  }
}

export class FileSessionStore {
  constructor(filePath = 'telegix_sessions.json', ttl = Infinity) {
    this.filePath = filePath;
    this.ttl = ttl;
    this.cache = null;
    this.loaded = false;
  }

  async _load() {
    if (this.loaded) return;
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      const parsed = JSON.parse(data);
      this.cache = new Map(Object.entries(parsed));
    } catch {
      this.cache = new Map();
    }
    this.loaded = true;
  }

  async _save() {
    if (!this.cache) return;
    try {
      const obj = Object.fromEntries(this.cache.entries());
      await fs.writeFile(this.filePath, JSON.stringify(obj, null, 2), 'utf8');
    } catch (err) {
      console.error('Telegix FileSessionStore save error:', err);
    }
  }

  async get(key) {
    await this._load();
    const item = this.cache.get(key);
    if (!item) return undefined;
    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      await this._save();
      return undefined;
    }
    return item.value;
  }

  async set(key, value) {
    await this._load();
    const expiresAt = this.ttl === Infinity ? Infinity : Date.now() + this.ttl;
    this.cache.set(key, { value, expiresAt });
    await this._save();
  }

  async delete(key) {
    await this._load();
    this.cache.delete(key);
    await this._save();
  }

  async clear() {
    await this._load();
    this.cache.clear();
    await this._save();
  }
}

/**
 * Session middleware for Telegix
 * @param {object} [options]
 * @param {Function} [options.getSessionKey] - Custom function returning session key
 * @param {object} [options.store] - Session store implementing get/set/delete
 * @param {Function} [options.initial] - Function returning initial session data
 * @param {number} [options.ttl] - Time-to-live in ms for default memory store
 * @returns {Function} Telegix middleware
 */
export function session(options = {}) {
  const store = options.store || new MemorySessionStore(options.ttl);
  const getSessionKey =
    options.getSessionKey ||
    ((ctx) => {
      const chatId = ctx.chatId;
      const userId = ctx.userId;
      if (!chatId && !userId) return null;
      return `${chatId ?? ''}:${userId ?? ''}`;
    });
  const initial = options.initial || (() => ({}));

  return async (ctx, next) => {
    const key = getSessionKey(ctx);
    if (!key) {
      return next();
    }

    let sessionData = await store.get(key);
    if (sessionData === undefined || sessionData === null) {
      sessionData = initial(ctx);
    }

    // Attach session to ctx
    ctx.session = sessionData;

    try {
      await next();
    } finally {
      if (ctx.session === null || ctx.session === undefined) {
        await store.delete(key);
      } else {
        await store.set(key, ctx.session);
      }
    }
  };
}
