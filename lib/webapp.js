/**
 * Telegix - Telegram Web App InitData Validator
 */

import crypto from 'crypto';

/**
 * Validates Telegram Web App initData string according to official Telegram documentation
 * @param {string} initDataStr - Raw initData string from Telegram Web App (window.Telegram.WebApp.initData)
 * @param {string} botToken - Telegram Bot Token
 * @param {object} [options] - { maxAgeSeconds?: number } (default 86400 / 24 hours)
 * @returns {object|null} Parsed user data object if valid, or null if invalid
 */
export function validateWebAppInitData(initDataStr, botToken, options = {}) {
  if (!initDataStr || !botToken) return null;

  try {
    const params = new URLSearchParams(initDataStr);
    const hash = params.get('hash');
    if (!hash) return null;

    params.delete('hash');

    const entries = [];
    for (const [key, value] of params.entries()) {
      entries.push(`${key}=${value}`);
    }
    entries.sort();
    const dataCheckString = entries.join('\n');

    // Secret key is HMAC-SHA256 of "WebAppData" using bot token as key
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();

    // Calculated hash is HMAC-SHA256 of data-check-string using secret key
    const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

    if (calculatedHash !== hash) {
      return null;
    }

    // Optional freshness check (default max age 24 hours)
    const authDate = parseInt(params.get('auth_date') || '0', 10);
    const maxAge = options.maxAgeSeconds !== undefined ? options.maxAgeSeconds : 86400;
    if (maxAge > 0 && authDate > 0) {
      const now = Math.floor(Date.now() / 1000);
      if (now - authDate > maxAge) {
        return null; // Expired
      }
    }

    // Parse data fields
    const result = {};
    for (const [key, value] of params.entries()) {
      try {
        result[key] = JSON.parse(value);
      } catch {
        result[key] = value;
      }
    }

    return result;
  } catch (err) {
    return null;
  }
}
