/**
 * Telegix - Telegram Mini Apps (TMA) & Web App Suite
 * Comprehensive support for Mini Apps 8.0/9.0/10.x:
 * - InitData Validation & Parsing
 * - Full-Screen Mode
 * - Device Motion Tracking (Accelerometer, Orientation, Gyroscope)
 * - Loading Screen Customization (Theme-adaptive splash & skeleton)
 * - Prepared Inline Messages & Launch URLs
 * - Client-side WebApp Bridge Utilities
 * @module telegix/webapp
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
  } catch {
    return null;
  }
}

/**
 * Parses raw initData string into a structured JavaScript object without cryptographic validation
 * @param {string} initDataStr
 * @returns {object}
 */
export function parseWebAppInitData(initDataStr) {
  if (!initDataStr || typeof initDataStr !== 'string') return {};

  const params = new URLSearchParams(initDataStr);
  const result = {};

  for (const [key, value] of params.entries()) {
    try {
      result[key] = JSON.parse(value);
    } catch {
      result[key] = value;
    }
  }

  return result;
}

/**
 * Generate a Telegram Mini App direct launch URL
 * @param {string} botUsername - Bot username (without @)
 * @param {string} appShortName - Mini App short name registered in @BotFather
 * @param {string} [startParam] - Optional startapp parameter
 * @returns {string}
 */
export function createMiniAppLaunchUrl(botUsername, appShortName, startParam = '') {
  const cleanUsername = String(botUsername).replace(/^@/, '');
  const url = `https://t.me/${cleanUsername}/${appShortName}`;
  return startParam ? `${url}?startapp=${encodeURIComponent(startParam)}` : url;
}

/**
 * Builder and Generator for Telegram Mini App Loading Screen (Mini Apps 8.0)
 * Generates lightweight, responsive splash & skeleton screens adapting to dark/light Telegram theme.
 */
export class MiniAppLoadingScreen {
  /**
   * @param {object} [options]
   * @param {string} [options.title='Loading Mini App...']
   * @param {string} [options.icon] - Image URL or SVG string for brand icon
   * @param {string} [options.lightColor='#2481cc'] - Primary brand color in light theme
   * @param {string} [options.darkColor='#64b5f6'] - Primary brand color in dark theme
   * @param {string} [options.lightBg='#ffffff'] - Background in light theme
   * @param {string} [options.darkBg='#17212b'] - Background in dark theme
   * @param {boolean} [options.skeleton=true] - Render shimmer skeleton bars below icon
   */
  constructor(options = {}) {
    this.title = options.title ?? 'Loading...';
    this.icon = options.icon ?? '';
    this.lightColor = options.lightColor ?? '#2481cc';
    this.darkColor = options.darkColor ?? '#64b5f6';
    this.lightBg = options.lightBg ?? '#ffffff';
    this.darkBg = options.darkBg ?? '#17212b';
    this.skeleton = options.skeleton ?? true;
  }

  /**
   * Set brand icon (URL or SVG)
   * @param {string} icon
   * @returns {this}
   */
  setIcon(icon) {
    this.icon = String(icon);
    return this;
  }

  /**
   * Set loading title
   * @param {string} title
   * @returns {this}
   */
  setTitle(title) {
    this.title = String(title);
    return this;
  }

  /**
   * Set light and dark theme colors
   * @param {string} lightColor
   * @param {string} darkColor
   * @returns {this}
   */
  setColors(lightColor, darkColor) {
    this.lightColor = lightColor;
    this.darkColor = darkColor;
    return this;
  }

  /**
   * Toggle skeleton placeholder display
   * @param {boolean} [enabled=true]
   * @returns {this}
   */
  setSkeleton(enabled = true) {
    this.skeleton = Boolean(enabled);
    return this;
  }

  /**
   * Generate CSS styles for the customized loading screen
   * @returns {string}
   */
  toCSS() {
    return `
:root {
  --tg-loading-bg: ${this.lightBg};
  --tg-loading-color: ${this.lightColor};
  --tg-skeleton-base: #e0e0e0;
  --tg-skeleton-shimmer: #f5f5f5;
}
@media (prefers-color-scheme: dark) {
  :root {
    --tg-loading-bg: ${this.darkBg};
    --tg-loading-color: ${this.darkColor};
    --tg-skeleton-base: #242f3d;
    --tg-skeleton-shimmer: #313d4f;
  }
}
#tg-loading-screen {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--tg-theme-bg-color, var(--tg-loading-bg));
  color: var(--tg-theme-text-color, #222222);
  transition: opacity 0.35s ease, visibility 0.35s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  user-select: none;
}
#tg-loading-screen.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.tg-loading-icon {
  width: 72px;
  height: 72px;
  margin-bottom: 16px;
  animation: tg-bounce 1.6s infinite ease-in-out;
}
.tg-loading-title {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;
  margin-bottom: 24px;
  color: var(--tg-theme-text-color, #222222);
}
.tg-loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid rgba(127, 127, 127, 0.2);
  border-top-color: var(--tg-theme-button-color, var(--tg-loading-color));
  border-radius: 50%;
  animation: tg-spin 0.8s linear infinite;
}
.tg-skeleton-container {
  width: 80%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
}
.tg-skeleton-bar {
  height: 14px;
  border-radius: 6px;
  background: linear-gradient(90deg, var(--tg-skeleton-base) 25%, var(--tg-skeleton-shimmer) 50%, var(--tg-skeleton-base) 75%);
  background-size: 200% 100%;
  animation: tg-shimmer 1.5s infinite;
}
@keyframes tg-spin { to { transform: rotate(360deg); } }
@keyframes tg-bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
@keyframes tg-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
`.trim();
  }

  /**
   * Generate HTML element string for the customized loading screen
   * @returns {string}
   */
  toHTML() {
    const iconHtml = this.icon
      ? (this.icon.startsWith('<svg')
          ? `<div class="tg-loading-icon">${this.icon}</div>`
          : `<img src="${this.icon}" alt="Loading" class="tg-loading-icon" />`)
      : `<div class="tg-loading-spinner"></div>`;

    const skeletonHtml = this.skeleton
      ? `<div class="tg-skeleton-container">
           <div class="tg-skeleton-bar" style="width: 100%;"></div>
           <div class="tg-skeleton-bar" style="width: 75%;"></div>
           <div class="tg-skeleton-bar" style="width: 88%;"></div>
         </div>`
      : '';

    return `
<style>${this.toCSS()}</style>
<div id="tg-loading-screen">
  ${iconHtml}
  <div class="tg-loading-title">${this.title}</div>
  ${skeletonHtml}
</div>
<script>
  window.addEventListener('load', function() {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
    setTimeout(function() {
      var el = document.getElementById('tg-loading-screen');
      if (el) el.classList.add('hidden');
    }, 200);
  });
</script>
`.trim();
  }
}

/**
 * Helper to generate loading screen HTML
 * @param {object} options
 * @returns {string}
 */
export function generateMiniAppLoadingScreen(options = {}) {
  return new MiniAppLoadingScreen(options).toHTML();
}

/**
 * Telegram Mini Apps 8.0/9.0/10.x Full-Screen and Device Motion Controller
 * Lightweight client bridge helper for Telegram WebApp environment.
 */
export const MiniApp = {
  /**
   * Check if running inside Telegram Mini App environment
   * @returns {boolean}
   */
  isInsideTelegram() {
    return typeof window !== 'undefined' && Boolean(window.Telegram?.WebApp);
  },

  /**
   * Returns window.Telegram.WebApp object safely
   * @returns {object|null}
   */
  get webApp() {
    return (typeof window !== 'undefined' && window.Telegram?.WebApp) || null;
  },

  /**
   * Full-Screen Mode Methods (Mini Apps 8.0)
   */
  fullscreen: {
    /**
     * Request full-screen mode for the Mini App
     */
    request() {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.requestFullscreen) {
        window.Telegram.WebApp.requestFullscreen();
        return true;
      }
      return false;
    },

    /**
     * Exit full-screen mode
     */
    exit() {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.exitFullscreen) {
        window.Telegram.WebApp.exitFullscreen();
        return true;
      }
      return false;
    },

    /**
     * Check if currently in full-screen mode
     * @returns {boolean}
     */
    isActive() {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        return Boolean(window.Telegram.WebApp.isFullscreen);
      }
      return false;
    },

    /**
     * Listen for full-screen state changes
     * @param {function(boolean): void} callback
     */
    onChange(callback) {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent('fullscreenChanged', () => {
          callback(Boolean(window.Telegram.WebApp.isFullscreen));
        });
      }
    },

    /**
     * Listen for full-screen request failures
     * @param {function(object): void} callback
     */
    onFailed(callback) {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent('fullscreenFailed', callback);
      }
    },
  },

  /**
   * Device Motion Tracking Methods (Mini Apps 8.0)
   * Tracks Accelerometer, Device Orientation, and Gyroscope
   */
  motion: {
    /**
     * Start tracking accelerometer
     * @param {object} [options]
     * @param {number} [options.refresh_rate=100] - Refresh rate in ms (min: 20ms, default: 100ms)
     * @returns {boolean}
     */
    startAccelerometer(options = { refresh_rate: 100 }) {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.startAccelerometer) {
        window.Telegram.WebApp.startAccelerometer(options);
        return true;
      }
      return false;
    },

    /**
     * Stop tracking accelerometer
     * @returns {boolean}
     */
    stopAccelerometer() {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.stopAccelerometer) {
        window.Telegram.WebApp.stopAccelerometer();
        return true;
      }
      return false;
    },

    /**
     * Listen to accelerometer changes
     * @param {function({ x: number, y: number, z: number }): void} callback
     */
    onAccelerometer(callback) {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent('accelerometerChanged', callback);
      }
    },

    /**
     * Start tracking device orientation
     * @param {object} [options]
     * @param {number} [options.refresh_rate=100]
     * @param {boolean} [options.need_absolute=false]
     * @returns {boolean}
     */
    startDeviceOrientation(options = { refresh_rate: 100, need_absolute: false }) {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.startDeviceOrientation) {
        window.Telegram.WebApp.startDeviceOrientation(options);
        return true;
      }
      return false;
    },

    /**
     * Stop tracking device orientation
     * @returns {boolean}
     */
    stopDeviceOrientation() {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.stopDeviceOrientation) {
        window.Telegram.WebApp.stopDeviceOrientation();
        return true;
      }
      return false;
    },

    /**
     * Listen to device orientation changes (alpha, beta, gamma, absolute)
     * @param {function({ alpha: number, beta: number, gamma: number, absolute: boolean }): void} callback
     */
    onOrientation(callback) {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent('deviceOrientationChanged', callback);
      }
    },

    /**
     * Start tracking gyroscope
     * @param {object} [options]
     * @param {number} [options.refresh_rate=100]
     * @returns {boolean}
     */
    startGyroscope(options = { refresh_rate: 100 }) {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.startGyroscope) {
        window.Telegram.WebApp.startGyroscope(options);
        return true;
      }
      return false;
    },

    /**
     * Stop tracking gyroscope
     * @returns {boolean}
     */
    stopGyroscope() {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.stopGyroscope) {
        window.Telegram.WebApp.stopGyroscope();
        return true;
      }
      return false;
    },

    /**
     * Listen to gyroscope changes
     * @param {function({ x: number, y: number, z: number }): void} callback
     */
    onGyroscope(callback) {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.onEvent) {
        window.Telegram.WebApp.onEvent('gyroscopeChanged', callback);
      }
    },
  },

  /**
   * Home Screen Shortcut Helpers (Mini Apps 8.0)
   */
  homeScreen: {
    /**
     * Prompts user to add Mini App shortcut to homescreen
     */
    addToHomeScreen() {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.addToHomeScreen) {
        window.Telegram.WebApp.addToHomeScreen();
        return true;
      }
      return false;
    },

    /**
     * Check if shortcut was already added or unsupported
     * @param {function('unsupported'|'unknown'|'added'|'missed'): void} callback
     */
    checkStatus(callback) {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp?.checkHomeScreenStatus) {
        window.Telegram.WebApp.checkHomeScreenStatus(callback);
      }
    },
  },

  /**
   * Share Prepared Message directly from Mini App (Mini Apps 8.0)
   * @param {string} preparedMessageId - ID obtained via bot.telegram.savePreparedInlineMessage()
   */
  sharePreparedMessage(preparedMessageId) {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp?.shareMessage) {
      window.Telegram.WebApp.shareMessage(preparedMessageId);
      return true;
    }
    return false;
  },

  /**
   * Prompt user to download a file (Mini Apps 8.0)
   * @param {object} params - { url: string, file_name: string }
   */
  downloadFile(params) {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp?.downloadFile) {
      window.Telegram.WebApp.downloadFile(params);
      return true;
    }
    return false;
  },

  /**
   * Haptic Feedback Shortcuts
   */
  haptics: {
    impact(style = 'medium') {
      window.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.(style);
    },
    notification(type = 'success') {
      window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred?.(type);
    },
    selection() {
      window.Telegram?.WebApp?.HapticFeedback?.selectionChanged?.();
    },
  },
};
