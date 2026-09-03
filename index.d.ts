/**
 * TypeScript definitions for Telegix
 */

export interface User {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  added_to_attachment_menu?: boolean;
  can_join_groups?: boolean;
  can_read_all_group_messages?: boolean;
  supports_inline_queries?: boolean;
}

export interface Chat {
  id: number;
  type: 'private' | 'group' | 'supergroup' | 'channel';
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  is_forum?: boolean;
}

export interface Message {
  message_id: number;
  message_thread_id?: number;
  from?: User;
  sender_chat?: Chat;
  date: number;
  chat: Chat;
  text?: string;
  caption?: string;
  entities?: any[];
  caption_entities?: any[];
  photo?: any[];
  audio?: any;
  document?: any;
  video?: any;
  voice?: any;
  sticker?: any;
  poll?: any;
  dice?: any;
  reply_to_message?: Message;
  [key: string]: any;
}

export interface Update {
  update_id: number;
  message?: Message;
  edited_message?: Message;
  channel_post?: Message;
  edited_channel_post?: Message;
  inline_query?: any;
  chosen_inline_result?: any;
  callback_query?: any;
  shipping_query?: any;
  pre_checkout_query?: any;
  poll?: any;
  poll_answer?: any;
  my_chat_member?: any;
  chat_member?: any;
  chat_join_request?: any;
  message_reaction?: any;
  [key: string]: any;
}

export type Middleware<C extends Context = Context> = (
  ctx: C,
  next: () => Promise<void>
) => any;

export class KeyboardBuilder {
  resize(resize?: boolean): this;
  persistent(persistent?: boolean): this;
  oneTime(oneTime?: boolean): this;
  placeholder(placeholder: string): this;
  selectiveTarget(selective?: boolean): this;
  toJSON(): object;
}

export class Markup {
  static keyboard(buttons: any[], options?: any): KeyboardBuilder;
  static inlineKeyboard(buttons: any[]): { inline_keyboard: any[][] };
  static removeKeyboard(selective?: boolean): { remove_keyboard: true; selective: boolean };
  static forceReply(selective?: boolean, placeholder?: string): { force_reply: true; selective: boolean; input_field_placeholder?: string };
  static button: {
    text(text: string): object;
    callback(text: string, data: string): object;
    url(text: string, url: string): object;
    primary(text: string, dataOrUrl?: string | number | object, options?: object): object;
    danger(text: string, dataOrUrl?: string | number | object, options?: object): object;
    success(text: string, dataOrUrl?: string | number | object, options?: object): object;
    colored(text: string, style: 'primary' | 'danger' | 'success', dataOrUrl?: string | number | object, options?: object): object;
    webApp(text: string, url: string): object;
    contactRequest(text: string): object;
    locationRequest(text: string): object;
    pollRequest(text: string, type?: string): object;
    switchToChat(text: string, query?: string): object;
    switchToCurrentChat(text: string, query?: string): object;
    login(text: string, url: string, options?: object): object;
    pay(text?: string): object;
    copyText(text: string, copyText: string): object;
    requestUsers(text: string, requestId: number, options?: object): object;
    requestChat(text: string, requestId: number, chatIsChannel?: boolean, options?: object): object;
    switchInlineQueryChosenChat(text: string, query?: string, options?: object): object;
    game(text?: string): object;
    disabled(text: string): object;
  };
}

export interface SceneContextScene {
  session: any;
  current: any;
  state: any;
  enter(sceneId: string, initialState?: object): Promise<void>;
  reenter(): Promise<void>;
  leave(): Promise<void>;
}

export interface SceneContextWizard {
  cursor: number;
  state: any;
  selectStep(index: number): void;
  next(): void;
  back(): void;
}

export class Context {
  update: Update;
  telegram: Telegram;
  api: Telegram;
  botInfo: User | null;
  state: Record<string, any>;
  session?: any;
  scene?: SceneContextScene;
  wizard?: SceneContextWizard;
  i18n?: { locale: string; t(key: string, params?: Record<string, any>): string };
  match: RegExpMatchArray | string[] | null;
  command: string | null;
  payload: string | null;
  matchedEntities?: any[];

  constructor(update: Update, telegram: Telegram, botInfo?: User | null);

  get updateType(): string;
  get message(): Message | undefined;
  get editedMessage(): Message | undefined;
  get channelPost(): Message | undefined;
  get editedChannelPost(): Message | undefined;
  get businessConnection(): any | undefined;
  get businessMessage(): Message | undefined;
  get editedBusinessMessage(): Message | undefined;
  get deletedBusinessMessages(): any | undefined;
  get messageReaction(): any | undefined;
  get messageReactionCount(): any | undefined;
  get purchasedPaidMedia(): any | undefined;
  get chatBoost(): any | undefined;
  get removedChatBoost(): any | undefined;
  get paidMessagePriceChanged(): any | undefined;
  get stoppedMessageGeneration(): any | undefined;
  get communityChatJoined(): any | undefined;
  get callbackQuery(): any | undefined;
  get inlineQuery(): any | undefined;
  get chosenInlineResult(): any | undefined;
  get shippingQuery(): any | undefined;
  get preCheckoutQuery(): any | undefined;
  get poll(): any | undefined;
  get pollAnswer(): any | undefined;
  get msg(): any;
  get quoted(): any;
  serialize(): any;
  get from(): User | undefined;
  get senderChat(): Chat | undefined;
  get chat(): Chat | undefined;
  get isForum(): boolean;
  get chatId(): number | string | null;
  get userId(): number | null;
  get topicId(): number | null;
  get messageThreadId(): number | null;
  get text(): string | null;
  get entities(): any[];

  t(key: string, params?: Record<string, any>): string;
  prompt(question: string | object, options?: { timeoutMs?: number; cancelOnCommand?: boolean }): Promise<Context>;
  getMe(): Promise<User>;
  getManagedBotAccessSettings(userId?: number): Promise<any>;
  setManagedBotAccessSettings(settings: object, userId?: number): Promise<boolean>;

  reply(text: string, extra?: object): Promise<Message>;
  replyWithHTML(html: string, extra?: object): Promise<Message>;
  replyWithMarkdown(markdown: string, extra?: object): Promise<Message>;
  replyWithPhoto(photo: any, extra?: object): Promise<Message>;
  replyWithAudio(audio: any, extra?: object): Promise<Message>;
  replyWithDocument(document: any, extra?: object): Promise<Message>;
  replyWithVideo(video: any, extra?: object): Promise<Message>;
  replyWithAnimation(animation: any, extra?: object): Promise<Message>;
  replyWithVoice(voice: any, extra?: object): Promise<Message>;
  replyWithVideoNote(videoNote: any, extra?: object): Promise<Message>;
  replyWithMediaGroup(media: any[], extra?: object): Promise<Message[]>;
  replyWithLocation(latitude: number, longitude: number, extra?: object): Promise<Message>;
  replyWithVenue(latitude: number, longitude: number, title: string, address: string, extra?: object): Promise<Message>;
  replyWithContact(phoneNumber: string, firstName: string, extra?: object): Promise<Message>;
  replyWithPoll(question: string, options: string[], extra?: object): Promise<Message>;
  replyWithDice(extra?: object): Promise<Message>;
  replyWithChatAction(action: string, extra?: object): Promise<boolean>;
  replyWithInvoice(title: string, description: string, payload: string, currency: string, prices: Array<{label: string; amount: number}>, extra?: object): Promise<Message>;
  replyWithPaidMedia(starCount: number, media: any[], extra?: object): Promise<Message>;
  replyWithSticker(sticker: any, extra?: object): Promise<Message>;
  replyWithGame(gameShortName: string, extra?: object): Promise<Message>;
  replyWithLinkPreview(text: string, linkPreviewOptions: LinkPreview | object, extra?: object): Promise<Message>;
  replyWithCollapsibleQuote(text: string, extra?: object): Promise<Message>;
  replyWithExpandableQuote(text: string, extra?: object): Promise<Message>;
  replyWithWebApp(text: string, webAppUrl: string, buttonText?: string, extra?: object): Promise<Message>;
  streamText(textStream: any, options?: object): Promise<any>;
  streamDraft(textStream: any, options?: object): Promise<any>;
  savePreparedInlineMessage(result: object, options?: object): Promise<{ id: string; expiration_date: number }>;
  validateWebAppInitData(initDataStr: string, options?: object): any;
  createForumTopic(name: string, extra?: object): Promise<any>;
  editForumTopic(messageThreadId?: number, extra?: object): Promise<boolean>;
  closeForumTopic(messageThreadId?: number): Promise<boolean>;
  reopenForumTopic(messageThreadId?: number): Promise<boolean>;
  deleteForumTopic(messageThreadId?: number): Promise<boolean>;
  unpinAllForumTopicMessages(messageThreadId?: number): Promise<boolean>;
  sendGift(giftId: string, extra?: object): Promise<boolean>;
  verifyUser(customDescription?: string): Promise<boolean>;
  verifyChat(customDescription?: string): Promise<boolean>;
  getUserChatBoosts(userId?: number): Promise<any>;
  getBusinessConnection(): Promise<any>;
  replyWithRichMessage(richMessage: any, extra?: object): Promise<Message>;
  editRichMessageText(richMessage: any, extra?: object): Promise<Message | boolean>;
  editRichMessageCaption(caption: string, extra?: object): Promise<Message | boolean>;
  sendEphemeralMessage(text: string, ephemeralParameters: object, extra?: object): Promise<Message>;
  getUserPersonalChatMessages(userId?: number, extra?: object): Promise<any>;
  sendMessageDraft(text: string, extra?: object): Promise<boolean>;
  sendRichMessageDraft(draft: any, extra?: object): Promise<boolean>;
  react(emoji: string | any[]): Promise<boolean>;
  answerCallbackQuery(text?: string, options?: object): Promise<boolean>;
  answerCbQuery(text?: string, options?: object): Promise<boolean>;
  answerInlineQuery(results: any[], options?: object): Promise<boolean>;
  editMessageText(text: string, extra?: object): Promise<Message | boolean>;
  editMessageCaption(caption: string, extra?: object): Promise<Message | boolean>;
  editMessageMedia(media: object, extra?: object): Promise<Message | boolean>;
  editMessageReplyMarkup(replyMarkup: object, extra?: object): Promise<Message | boolean>;
  deleteMessage(messageId?: number): Promise<boolean>;
  forwardMessage(toChatId: number | string, extra?: object): Promise<Message>;
  copyMessage(toChatId: number | string, extra?: object): Promise<any>;
  pinChatMessage(messageId?: number, extra?: object): Promise<boolean>;
  unpinChatMessage(messageId?: number): Promise<boolean>;
  unpinAllChatMessages(): Promise<boolean>;
  leaveChat(): Promise<boolean>;
  getChat(): Promise<Chat>;
  getChatAdministrators(): Promise<any[]>;
  getChatMember(userId?: number): Promise<any>;
  banChatMember(userId: number, extra?: object): Promise<boolean>;
  unbanChatMember(userId: number, extra?: object): Promise<boolean>;
  restrictChatMember(userId: number, permissions: object, extra?: object): Promise<boolean>;
  promoteChatMember(userId: number, rights?: object): Promise<boolean>;
}

export class Composer<C extends Context = Context> {
  use(...middlewares: Middleware<C>[]): this;
  on(updateTypes: string | string[], ...middlewares: Middleware<C>[]): this;
  command(commands: string | RegExp | (string | RegExp)[], ...middlewares: Middleware<C>[]): this;
  hears(triggers: string | RegExp | Function | (string | RegExp)[], ...middlewares: Middleware<C>[]): this;
  action(triggers: string | RegExp | Function | (string | RegExp)[], ...middlewares: Middleware<C>[]): this;
  inlineQuery(triggers: string | RegExp | Function | (string | RegExp)[], ...middlewares: Middleware<C>[]): this;
  chatType(types: string | string[], ...middlewares: Middleware<C>[]): this;
  business(...middlewares: Middleware<C>[]): this;
  reaction(...middlewares: Middleware<C>[]): this;
  boost(...middlewares: Middleware<C>[]): this;
  forumTopic(...middlewares: Middleware<C>[]): this;
  paidMedia(...middlewares: Middleware<C>[]): this;
  entity(entityTypes: string | string[], ...middlewares: Middleware<C>[]): this;
  filter(predicate: (ctx: C) => boolean | Promise<boolean>, ...middlewares: Middleware<C>[]): this;
  drop(predicate: (ctx: C) => boolean | Promise<boolean>, ...middlewares: Middleware<C>[]): this;
  branch(predicate: (ctx: C) => boolean | Promise<boolean>, trueMiddleware: Middleware<C>, falseMiddleware?: Middleware<C>): this;
  middleware(): (ctx: C, next: () => Promise<void>) => Promise<any>;
  static compose<C extends Context = Context>(middlewares: Middleware<C>[]): Middleware<C>;
}

export class BaseScene<C extends Context = Context> extends Composer<C> {
  id: string;
  constructor(id: string);
  enter(...handlers: Middleware<C>[]): this;
  leave(...handlers: Middleware<C>[]): this;
}

export class WizardScene<C extends Context = Context> extends BaseScene<C> {
  constructor(id: string, ...steps: Middleware<C>[]);
}

export class Stage<C extends Context = Context> extends Composer<C> {
  constructor(scenes?: BaseScene<C>[], options?: { defaultScene?: string });
  register(scene: BaseScene<C>): this;
}

export const Scene: typeof BaseScene;

export function escapeHtml(text: string): string;
export function escapeMarkdown(text: string): string;

export interface FormatHelpers {
  escape(text: string): string;
  bold(text: string): string;
  italic(text: string): string;
  underline(text: string): string;
  strikethrough(text: string): string;
  spoiler(text: string): string;
  code(text: string): string;
  pre(codeText: string, language?: string): string;
  link(text: string, url: string): string;
  mention(text: string, userId: number): string;
  customEmoji(text: string, customEmojiId: string): string;
  quote(text: string): string;
  expandableBlockquote(text: string): string;
}

export interface FmtFunction extends FormatHelpers {
  (strings: TemplateStringsArray, ...values: any[]): string;
  html: FormatHelpers;
  markdown: FormatHelpers;
  raw(str: string): { rawHtml: string };
}

export const fmt: FmtFunction;
export const Format: FmtFunction;
export const html: FormatHelpers;
export const markdown: FormatHelpers;

export class RichMessageBuilder {
  constructor(initialText?: string);
  parseMode(mode: string): this;
  text(text: string): this;
  header(text: string, emoji?: string): this;
  paragraph(text: string): this;
  bold(text: string): this;
  italic(text: string): this;
  underline(text: string): this;
  strikethrough(text: string): this;
  code(codeText: string, language?: string): this;
  quote(text: string, expandable?: boolean): this;
  expandableQuote(text: string): this;
  collapsibleQuote(text: string): this;
  spoiler(text: string): this;
  link(text: string, url: string): this;
  mention(text: string, userId: number | string): this;
  list(items: string[], bullet?: string): this;
  numberedList(items: string[]): this;
  badge(label: string, value: string | number, icon?: string): this;
  divider(): this;
  photo(url: string, caption?: string): this;
  ephemeral(lifetimeSecondsOrParams?: number | object): this;
  draftId(draftId?: number): this;
  asDraft(): this;
  button(buttons: object | object[]): this;
  row(...buttons: object[]): this;
  callback(text: string, data: string): this;
  url(text: string, url: string): this;
  primary(text: string, dataOrUrl?: string | number | object, options?: object): this;
  danger(text: string, dataOrUrl?: string | number | object, options?: object): this;
  success(text: string, dataOrUrl?: string | number | object, options?: object): this;
  colored(text: string, style: 'primary' | 'danger' | 'success', dataOrUrl?: string | number | object, options?: object): this;
  disabled(text: string): this;
  webApp(text: string, webAppUrl: string): this;
  copyText(text: string, textToCopy: string): this;
  keyboard(matrix: object[][]): this;
  replyMarkup(markup: object): this;
  extra(extra: object): this;
  compileHtml(): string;
  compile(): object;
  build(): object;
  toJSON(): object;
  send(ctx: Context, chatId?: number | string, extra?: object): Promise<Message>;
  sendDraft(ctx: Context, chatId?: number | string, extra?: object): Promise<boolean>;
  edit(ctx: Context, messageId?: number, extra?: object): Promise<Message | boolean>;

  static create(initialText?: string): RichMessageBuilder;
  static card(title: string, description?: string, buttons?: object[]): RichMessageBuilder;
  static draft(text: string, draftId?: number): RichMessageBuilder;
  static ephemeral(text: string, lifetimeSeconds?: number): RichMessageBuilder;
}

export const RichMessage: typeof RichMessageBuilder;

export class Telegram {
  token: string;
  apiRoot: string;
  testEnv: boolean;
  timeout: number;

  constructor(token: string, options?: { apiRoot?: string; testEnv?: boolean; timeout?: number });
  call(method: string, payload?: object, options?: object): Promise<any>;
  getMe(): Promise<User>;
  sendMessage(chatId: number | string, text: string, extra?: object): Promise<Message>;
  sendPhoto(chatId: number | string, photo: any, extra?: object): Promise<Message>;
  sendAudio(chatId: number | string, audio: any, extra?: object): Promise<Message>;
  sendDocument(chatId: number | string, document: any, extra?: object): Promise<Message>;
  sendVideo(chatId: number | string, video: any, extra?: object): Promise<Message>;
  sendAnimation(chatId: number | string, animation: any, extra?: object): Promise<Message>;
  sendVoice(chatId: number | string, voice: any, extra?: object): Promise<Message>;
  sendLocation(chatId: number | string, latitude: number, longitude: number, extra?: object): Promise<Message>;
  sendPoll(chatId: number | string, question: string, options: string[], extra?: object): Promise<Message>;
  deleteMessage(chatId: number | string, messageId: number): Promise<boolean>;
  getUpdates(offset?: number, limit?: number, timeout?: number, allowedUpdates?: string[]): Promise<Update[]>;
  sendRichMessage(chatId: number | string, richMessage: any, extra?: object): Promise<Message>;
  sendRichMessageDraft(chatId: number | string, draft: any, extra?: object): Promise<boolean>;
  editRichMessageText(chatId: number | string, messageId: number, richMessage: any, extra?: object): Promise<Message | boolean>;
  editRichMessageCaption(chatId: number | string, messageId: number, caption: string, extra?: object): Promise<Message | boolean>;
  sendEphemeralMessage(chatId: number | string, text: string, ephemeralParameters: object, extra?: object): Promise<Message>;
  editEphemeralMessageText(chatId: number | string, messageId: number, text: string, extra?: object): Promise<Message | boolean>;
  editEphemeralMessageMedia(chatId: number | string, messageId: number, media: object, extra?: object): Promise<Message | boolean>;
  editEphemeralMessageCaption(chatId: number | string, messageId: number, caption: string, extra?: object): Promise<Message | boolean>;
  deleteEphemeralMessage(chatId: number | string, messageId: number): Promise<boolean>;
  getManagedBotAccessSettings(userId: number, extra?: object): Promise<any>;
  setManagedBotAccessSettings(userId: number, settings?: object, extra?: object): Promise<boolean>;
  getUserPersonalChatMessages(userId: number, extra?: object): Promise<any>;
  sendMessageDraft(chatId: number | string, text: string, extra?: object): Promise<boolean>;
  savePreparedInlineMessage(userId: number, result: object, options?: object): Promise<{ id: string; expiration_date: number }>;
  streamText(chatId: number | string, textStream: any, options?: object): Promise<{ message_id?: number; text: string; done: boolean }>;
  streamDraft(chatId: number | string, textStream: any, options?: object): Promise<{ message_id?: number; text: string; done: boolean }>;
  setWebhook(url: string, extra?: object): Promise<boolean>;
  deleteWebhook(extra?: object): Promise<boolean>;
  getWebhookInfo(): Promise<any>;
  [key: string]: any;
}

export class Telegix extends Composer {
  token: string;
  telegram: Telegram;
  api: Telegram;
  botInfo: User | null;

  constructor(token: string, options?: object);
  catch(handler: (err: Error, ctx?: Context) => void): this;
  handleUpdate(update: Update): Promise<void>;
  startPolling(options?: object): Promise<void>;
  stop(reason?: string): Promise<void>;
  launch(options?: { polling?: boolean | object; webhook?: object; dropPendingUpdates?: boolean }): Promise<User>;
  webhookCallback(path?: string, options?: object): (req: any, res: any, next?: Function) => Promise<void>;
}

export class MemorySessionStore {
  constructor(ttl?: number);
  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}

export class FileSessionStore {
  constructor(filePath?: string, ttl?: number);
  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}

export class I18n {
  defaultLocale: string;
  translations: Record<string, any>;
  constructor(options?: {
    defaultLocale?: string;
    translations?: Record<string, any>;
    localeFn?: (ctx: Context) => string;
    useSession?: boolean;
  });
  addTranslation(locale: string, dict: Record<string, any>): this;
  addTranslations(translations: Record<string, Record<string, any>>): this;
  t(locale: string, key: string, params?: Record<string, any>): string;
  middleware(): Middleware;
}

export class RateLimiter {
  constructor(options?: { windowMs?: number; limit?: number; keyFn?: (ctx: Context) => string | number; handler?: Middleware });
  middleware(): Middleware;
}

export function rateLimit(options?: { windowMs?: number; limit?: number; keyFn?: (ctx: Context) => string | number; handler?: Middleware }): Middleware;

export function session(options?: {
  getSessionKey?: (ctx: Context) => string | null;
  store?: any;
  initial?: (ctx: Context) => any;
  ttl?: number;
}): Middleware;

export function serializeMessage(msg: any): any;
export function serializeUpdate(update: any): any;

export class InlineQueryResultBuilder {
  static article(id: string | number, title: string, messageText: string, options?: any): any;
  static photo(id: string | number, photoUrl: string, options?: any): any;
  static document(id: string | number, documentUrl: string, title: string, options?: any): any;
}

export function paginateInlineQuery(ctx: Context, items: any[], formatterFn: (item: any, index: number) => any, options?: any): Promise<boolean>;

export function albumMiddleware(options?: { windowMs?: number }): Middleware;

export interface LinkPreviewOptions {
  is_disabled?: boolean;
  url?: string;
  prefer_small_media?: boolean;
  prefer_large_media?: boolean;
  show_above_text?: boolean;
}

export class LinkPreview {
  constructor(url?: string);
  url(url: string): this;
  disabled(disabled?: boolean): this;
  disable(): this;
  enable(): this;
  smallMedia(small?: boolean): this;
  largeMedia(large?: boolean): this;
  aboveText(above?: boolean): this;
  belowText(): this;
  toJSON(): LinkPreviewOptions;
  static create(url?: string): LinkPreview;
  static disabled(): LinkPreview;
  static small(url?: string): LinkPreview;
  static large(url?: string): LinkPreview;
  static above(url?: string): LinkPreview;
}

export function toTextStream(input: any): AsyncIterable<string>;
export function streamText(
  telegram: Telegram,
  chatId: number | string,
  textStream: any,
  options?: {
    intervalMs?: number;
    minDeltaChars?: number;
    useDraft?: boolean;
    extra?: object;
    draftId?: number;
    initialMessage?: string;
    onProgress?: (text: string, count: number) => void;
    onError?: (err: Error) => void;
  }
): Promise<{ message_id?: number; text: string; done: boolean }>;

export function validateWebAppInitData(initDataStr: string, botToken: string, options?: { maxAgeSeconds?: number }): any;
export function parseWebAppInitData(initDataStr: string): any;
export function createMiniAppLaunchUrl(botUsername: string, appShortName: string, startParam?: string): string;

export class MiniAppLoadingScreen {
  constructor(options?: {
    title?: string;
    icon?: string;
    lightColor?: string;
    darkColor?: string;
    lightBg?: string;
    darkBg?: string;
    skeleton?: boolean;
  });
  setIcon(icon: string): this;
  setTitle(title: string): this;
  setColors(lightColor: string, darkColor: string): this;
  setSkeleton(enabled?: boolean): this;
  toCSS(): string;
  toHTML(): string;
}

export function generateMiniAppLoadingScreen(options?: any): string;

export const MiniApp: {
  isInsideTelegram(): boolean;
  webApp: any;
  fullscreen: {
    request(): boolean;
    exit(): boolean;
    isActive(): boolean;
    onChange(callback: (isFullscreen: boolean) => void): void;
    onFailed(callback: (err: any) => void): void;
  };
  motion: {
    startAccelerometer(options?: { refresh_rate?: number }): boolean;
    stopAccelerometer(): boolean;
    onAccelerometer(callback: (data: { x: number; y: number; z: number }) => void): void;
    startDeviceOrientation(options?: { refresh_rate?: number; need_absolute?: boolean }): boolean;
    stopDeviceOrientation(): boolean;
    onOrientation(callback: (data: { alpha: number; beta: number; gamma: number; absolute: boolean }) => void): void;
    startGyroscope(options?: { refresh_rate?: number }): boolean;
    stopGyroscope(): boolean;
    onGyroscope(callback: (data: { x: number; y: number; z: number }) => void): void;
  };
  homeScreen: {
    addToHomeScreen(): boolean;
    checkStatus(callback: (status: 'unsupported' | 'unknown' | 'added' | 'missed') => void): void;
  };
  sharePreparedMessage(preparedMessageId: string): boolean;
  downloadFile(params: { url: string; file_name: string }): boolean;
  haptics: {
    impact(style?: string): void;
    notification(type?: string): void;
    selection(): void;
  };
};

export function promptMiddleware(): Middleware;

export function escapeMarkdownV2(str: string): string;
export const mdv2: {
  escape(str: string): string;
  bold(text: string): string;
  italic(text: string): string;
  underline(text: string): string;
  strikethrough(text: string): string;
  spoiler(text: string): string;
  code(text: string): string;
  pre(text: string, language?: string): string;
  link(text: string, url: string): string;
};

export function inlineDebounceMiddleware(options?: { windowMs?: number; cacheTtlMs?: number }): Middleware;
export function chatActionMiddleware(action?: string, options?: { intervalMs?: number }): Middleware;

export class InvoiceBuilder {
  constructor(title: string, description: string, payload: string, currency?: string, prices?: any[]);
  providerToken(token: string): this;
  addPrice(label: string, amount: number): this;
  maxTipAmount(amount: number): this;
  suggestedTipAmounts(amounts: number[]): this;
  photo(url: string, width?: number, height?: number, size?: number): this;
  need(options: { name?: boolean; phoneNumber?: boolean; email?: boolean; shippingAddress?: boolean }): this;
  send(ctx: Context, chatId?: number | string): Promise<any>;
  build(): any;
}

export function answerShippingQuery(ctx: Context, ok: boolean, options?: any): Promise<any>;
export function answerPreCheckoutQuery(ctx: Context, ok: boolean, options?: any): Promise<any>;

export class TelegixManager {
  constructor();
  add(name: string, tokenOrOptions: string | any): Telegix;
  get(name: string): Telegix | undefined;
  remove(name: string): void;
  launchAll(options?: any): Promise<any>;
  stopAll(): void;
}

export class TelegixError extends Error {}
export class TelegramError extends TelegixError {
  errorCode: number;
  description: string;
  parameters: any;
  retryAfter?: number;
  migrateToChatId?: number;
}
export class NetworkError extends TelegixError {}
export class PollingError extends TelegixError {}

export default Telegix;
