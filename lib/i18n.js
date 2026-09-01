/**
 * Telegix - Internationalization (i18n) Middleware & Helper
 * @module telegix/i18n
 */

function getNestedValue(obj, path) {
  if (!obj || typeof obj !== 'object') return undefined;
  if (obj[path] !== undefined) return obj[path];
  
  const keys = path.split('.');
  let current = obj;
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      return undefined;
    }
  }
  return current;
}

export class I18n {
  /**
   * @param {object} [options]
   * @param {string} [options.defaultLocale='en']
   * @param {object} [options.translations={}]
   * @param {Function} [options.localeFn]
   * @param {boolean} [options.useSession=true]
   */
  constructor(options = {}) {
    this.defaultLocale = options.defaultLocale || 'en';
    this.translations = options.translations || {};
    this.useSession = options.useSession !== false;
    this.localeFn =
      options.localeFn ||
      ((ctx) => {
        if (this.useSession && ctx.session) {
          const sessionLocale = ctx.session.__locale || ctx.session.locale || ctx.session.language;
          if (sessionLocale) return sessionLocale;
        }
        return ctx.from?.language_code || this.defaultLocale;
      });
  }

  /**
   * Register or add translations for a locale
   * @param {string} locale
   * @param {object} dict
   */
  addTranslation(locale, dict) {
    this.translations[locale] = {
      ...(this.translations[locale] || {}),
      ...dict,
    };
    return this;
  }

  /**
   * Add multiple translation dictionaries
   * @param {Record<string, object>} translations
   */
  addTranslations(translations = {}) {
    for (const [locale, dict] of Object.entries(translations)) {
      this.addTranslation(locale, dict);
    }
    return this;
  }

  /**
   * Translate a key with optional interpolation params and pluralization
   * @param {string} locale
   * @param {string} key
   * @param {object} [params]
   * @returns {string}
   */
  t(locale, key, params = {}) {
    const activeDict = this.translations[locale] || {};
    const defaultDict = this.translations[this.defaultLocale] || {};

    let val = getNestedValue(activeDict, key);
    if (val === undefined) {
      val = getNestedValue(defaultDict, key);
    }
    if (val === undefined) {
      val = key;
    }

    // Handle pluralization if val is an object (e.g. { one: '1 item', other: '{{count}} items' })
    if (typeof val === 'object' && val !== null) {
      const count = Number(params.count);
      if (!isNaN(count)) {
        if (count === 0 && val.zero) {
          val = val.zero;
        } else if (count === 1 && val.one) {
          val = val.one;
        } else if (val.other) {
          val = val.other;
        } else {
          val = JSON.stringify(val);
        }
      } else {
        val = JSON.stringify(val);
      }
    }

    let text = String(val);

    // Interpolate variables like {{name}} or {name}
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(new RegExp(`{{\\s*${k}\\s*}}`, 'g'), String(v));
      text = text.replace(new RegExp(`{\\s*${k}\\s*}`, 'g'), String(v));
    }

    return text;
  }

  /**
   * Create i18n middleware for Telegix
   */
  middleware() {
    return (ctx, next) => {
      let rawLocale = this.localeFn(ctx) || this.defaultLocale;
      // If locale like 'en-US' or 'id-ID', check exact first, then language prefix
      let activeLocale = this.defaultLocale;
      if (this.translations[rawLocale]) {
        activeLocale = rawLocale;
      } else {
        const prefix = String(rawLocale).split('-')[0].toLowerCase();
        if (this.translations[prefix]) {
          activeLocale = prefix;
        }
      }

      const self = this;
      const i18nContext = {
        get locale() {
          return activeLocale;
        },
        set locale(newLocale) {
          activeLocale = newLocale;
          if (self.useSession && ctx.session) {
            ctx.session.__locale = newLocale;
          }
        },
        setLocale(newLocale) {
          this.locale = newLocale;
          return activeLocale;
        },
        t: (key, params) => self.t(activeLocale, key, params),
      };

      ctx.i18n = i18nContext;
      ctx.t = (key, params) => i18nContext.t(key, params);

      return next();
    };
  }
}
