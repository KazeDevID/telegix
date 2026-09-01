/**
 * Telegix - Telegram Bot API Error Classes
 * @module telegix/errors
 */

export class TelegixError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'TelegixError';
  }
}

export class TelegramError extends TelegixError {
  /**
   * @param {object} response - Telegram API response
   * @param {number} [response.error_code] - HTTP/Telegram error code (e.g. 400, 401, 403, 404, 429)
   * @param {string} [response.description] - Description from Telegram
   * @param {object} [response.parameters] - Extra parameters (e.g. retry_after, migrate_to_chat_id)
   * @param {string} [method] - The Telegram method that was called
   * @param {object} [payload] - The payload that was sent
   */
  constructor(response, method = '', payload = {}) {
    const errorCode = response?.error_code || 500;
    const description = response?.description || 'Unknown Telegram API Error';
    super(`Telegram API Error [${errorCode}]: ${description} (Method: ${method})`);
    this.name = 'TelegramError';
    this.errorCode = errorCode;
    this.description = description;
    this.parameters = response?.parameters || {};
    this.method = method;
    this.payload = payload;

    if (this.parameters.retry_after) {
      this.retryAfter = this.parameters.retry_after;
    }
    if (this.parameters.migrate_to_chat_id) {
      this.migrateToChatId = this.parameters.migrate_to_chat_id;
    }
  }
}

export class NetworkError extends TelegixError {
  /**
   * @param {Error} error - Underlying network error
   * @param {string} [method] - The Telegram method
   */
  constructor(error, method = '') {
    super(`Network Error while calling ${method}: ${error.message}`);
    this.name = 'NetworkError';
    this.cause = error;
    this.method = method;
  }
}

export class PollingError extends TelegixError {
  /**
   * @param {Error} error - Original error
   */
  constructor(error) {
    super(`Polling Error: ${error.message}`);
    this.name = 'PollingError';
    this.cause = error;
  }
}
