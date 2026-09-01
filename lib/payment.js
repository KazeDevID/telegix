/**
 * Telegix - Telegram Payment & Invoice Builder
 */

export class InvoiceBuilder {
  constructor(title, description, payload, currency, prices) {
    this.invoice = {
      title,
      description,
      payload,
      currency: currency || 'XTR', // Telegram Stars default or USD, RUB, etc.
      prices: prices || [],
    };
  }

  providerToken(token) {
    if (token) this.invoice.provider_token = token;
    return this;
  }

  addPrice(label, amount) {
    this.invoice.prices.push({ label, amount });
    return this;
  }

  maxTipAmount(amount) {
    this.invoice.max_tip_amount = amount;
    return this;
  }

  suggestedTipAmounts(amounts) {
    this.invoice.suggested_tip_amounts = amounts;
    return this;
  }

  photo(url, width, height, size) {
    if (url) this.invoice.photo_url = url;
    if (width) this.invoice.photo_width = width;
    if (height) this.invoice.photo_height = height;
    if (size) this.invoice.photo_size = size;
    return this;
  }

  need(options = {}) {
    if (options.name) this.invoice.need_name = true;
    if (options.phoneNumber) this.invoice.need_phone_number = true;
    if (options.email) this.invoice.need_email = true;
    if (options.shippingAddress) this.invoice.need_shipping_address = true;
    return this;
  }

  send(ctx, chatId) {
    const targetChatId = chatId || ctx.chat?.id || ctx.chatId;
    if (!targetChatId) {
      throw new Error('Target chat ID is required to send invoice');
    }
    const { title, description, payload, currency, prices, ...extra } = this.invoice;
    return ctx.telegram.sendInvoice(
      targetChatId,
      title,
      description,
      payload,
      currency,
      prices,
      extra
    );
  }

  build() {
    return { ...this.invoice };
  }
}

/**
 * Validates shipping query response
 */
export function answerShippingQuery(ctx, ok, options = {}) {
  const shippingQueryId = ctx.shippingQuery?.id || options.shippingQueryId || (typeof ctx === 'string' ? ctx : null);
  if (!shippingQueryId) throw new Error('Shipping Query ID is missing');
  return ctx.telegram.answerShippingQuery(shippingQueryId, ok, options);
}

/**
 * Validates pre-checkout query response
 */
export function answerPreCheckoutQuery(ctx, ok, options = {}) {
  const preCheckoutQueryId = ctx.preCheckoutQuery?.id || options.preCheckoutQueryId || (typeof ctx === 'string' ? ctx : null);
  if (!preCheckoutQueryId) throw new Error('Pre-Checkout Query ID is missing');
  const errorMsg = typeof options === 'string' ? options : options.errorMessage;
  return ctx.telegram.answerPreCheckoutQuery(preCheckoutQueryId, ok, errorMsg);
}
