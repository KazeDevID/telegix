# ⚡ Telegix

> **lightweight Telegram Bot API framework for Node.js, Bun, Deno, and modern JavaScript runtimes.**

[![npm version](https://img.shields.io/npm/v/telegix.svg?style=flat-square)](https://www.npmjs.com/package/telegix)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Node.js: >=18](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg?style=flat-square)](https://nodejs.org)
[![Pure JS](https://img.shields.io/badge/Pure-JavaScript-yellow.svg?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bot API: 10.3](https://img.shields.io/badge/Telegram_Bot_API-10.3-blue.svg?style=flat-square)](https://core.telegram.org/bots/api)

Telegix is a high-performance, developer-friendly Telegram Bot API library built with **100% Pure JavaScript and zero runtime dependencies** beyond native platform APIs (`fetch`, `FormData`, `Blob`). It provides full, first-class support for the latest [Telegram Bot API Specification](https://core.telegram.org/bots/api), including **Bot API 10.3**.

---

## 📑 Table of Contents

- [🌟 Key Highlights](#-key-highlights)
- [📦 Installation](#-installation)
- [🚀 Quick Start Guide](#-quick-start-guide)
  - [ECMAScript Modules (ESM)](#ecmascript-modules-esm)
  - [CommonJS (CJS)](#commonjs-cjs)
- [🏛️ Bot Core & Lifecycle](#️-bot-core--lifecycle)
  - [Initialization & Configuration Options](#initialization--configuration-options)
  - [Fetching Bot Info with getMe()](#fetching-bot-info-with-getme)
  - [Long-Polling Mode](#long-polling-mode)
  - [Webhook Mode (Node.js HTTP, Express, Fastify, Serverless)](#webhook-mode-nodejs-http-express-fastify-serverless)
  - [Multi-Core Cluster Mode](#multi-core-cluster-mode)
  - [Error Handling & bot.catch()](#error-handling--botcatch)
- [🛠️ Context (`ctx`) Reference & Functions](#️-context-ctx-reference--functions)
  - [Context Properties & Getters](#context-properties--getters)
  - [Text & HTML / Markdown Replies](#text--html--markdown-replies)
  - [Media Sending Functions (Photos, Audio, Videos, Documents, Albums)](#media-sending-functions-photos-audio-videos-documents-albums)
  - [Interactive Messages (Polls, Locations, Venues, Contacts, Dice, Stickers, Games)](#interactive-messages-polls-locations-venues-contacts-dice-stickers-games)
  - [Message Reactions & Chat Actions](#message-reactions--chat-actions)
  - [Message Editing, Deleting, Forwarding, Copying, & Pinning](#message-editing-deleting-forwarding-copying--pinning)
  - [Chat Administration & Member Moderation](#chat-administration--member-moderation)
  - [Forum Supergroups & Topics Management](#forum-supergroups--topics-management)
  - [Bot API 10.3 Methods (Rich Messages, Drafts, Ephemeral Messages, Managed Access)](#bot-api-103-methods-rich-messages-drafts-ephemeral-messages-managed-access)
- [🎨 Rich Message & Layout Builder Suite (`RichMessage`)](#-rich-message--layout-builder-suite-richmessage)
  - [Fluent Block Builder API](#fluent-block-builder-api)
  - [Static Factory Methods](#static-factory-methods)
  - [Complete Interactive Rich Card Example](#complete-interactive-rich-card-example)
- [🚦 Composer & Router Engine](#-composer--router-engine)
  - [Event Filtering (`bot.on`)](#event-filtering-boton)
  - [Slash Commands (`bot.command`)](#slash-commands-botcommand)
  - [Text Pattern Matching (`bot.hears`)](#text-pattern-matching-bothears)
  - [Button Callbacks (`bot.action`)](#button-callbacks-botaction)
  - [Specialized Filters (Chat Types, Reactions, Boosts, Business, Forum)](#specialized-filters-chat-types-reactions-boosts-business-forum)
  - [Control Flow (`filter`, `drop`, `branch`)](#control-flow-filter-drop-branch)
- [🎛️ Fluent Keyboard & Markup Builder (`Markup`)](#️-fluent-keyboard--markup-builder-markup)
  - [Custom Reply Keyboards](#custom-reply-keyboards)
  - [Inline Keyboards](#inline-keyboards)
  - [Complete Button Builder Reference](#complete-button-builder-reference)
  - [🎨 Colored Buttons for Bots (Bot API 9.4+)](#-colored-buttons-for-bots-bot-api-94)
  - [Removing Keyboards & Force Reply](#removing-keyboards--force-reply)
- [🌊 Streaming Text for Bots (`streamText` & `streamDraft`)](#-streaming-text-for-bots-streamtext--streamdraft)
  - [Real-Time Message Edit Streaming](#real-time-message-edit-streaming)
  - [Live Draft Streaming (Bot API 10.3+)](#live-draft-streaming-bot-api-103)
  - [Streaming AI & LLM Responses (Gemini, OpenAI, Generators)](#streaming-ai--llm-responses-gemini-openai-generators)
- [💬 Asynchronous Conversations & Wizard Scenes](#-asynchronous-conversations--wizard-scenes)
  - [Interactive Inline Prompts (`await ctx.prompt`)](#interactive-inline-prompts-await-ctxprompt)
  - [Multi-Step Wizard Scenes (`WizardScene` & `Stage`)](#multi-step-wizard-scenes-wizardscene--stage)
- [💾 Session & State Persistence](#-session--state-persistence)
  - [Memory Session Store](#memory-session-store)
  - [File Session Store](#file-session-store)
  - [Custom Store Integration (Redis, MongoDB, PostgreSQL)](#custom-store-integration-redis-mongodb-postgresql)
- [🌍 Internationalization & Localization (`I18n`)](#-internationalization--localization-i18n)
- [✒️ Message Formatting (`fmt`, `html`, `mdv2`)](#️-message-formatting-fmt-html-mdv2)
  - [XSS-Safe HTML Builder (`fmt` & `html`)](#xss-safe-html-builder-fmt--html)
  - [MarkdownV2 Escaping Helpers (`mdv2`)](#markdownv2-escaping-helpers-mdv2)
- [📜 Collapsible Quotes (`fmt`, `mdv2`, `RichMessage`)](#-collapsible-quotes-fmt-mdv2-richmessage)
- [🔗 Adjustable Link Previews (`LinkPreview`)](#-adjustable-link-previews-linkpreview)
- [💳 Payments, Invoices & Telegram Stars (`InvoiceBuilder`)](#-payments-invoices--telegram-stars-invoicebuilder)
- [📱 Telegram Mini Apps Suite (`MiniApp` & Utilities)](#-telegram-mini-apps-suite-miniapp--utilities)
  - [Mini App Authentication (`validateWebAppInitData`)](#mini-app-authentication-validatewebappinitdata)
  - [Full-Screen Mode](#full-screen-mode)
  - [Device Motion Tracking (Accelerometer, Orientation, Gyroscope)](#device-motion-tracking-accelerometer-orientation-gyroscope)
  - [Custom Loading Screen Generator (`MiniAppLoadingScreen`)](#custom-loading-screen-generator-miniapploadingscreen)
  - [Home Screen & Prepared Inline Messages](#home-screen--prepared-inline-messages)
- [🤖 Multi-Bot Process Manager (`TelegixManager`)](#-multi-bot-process-manager-telegixmanager)
- [⚡ Advanced Built-in Middlewares](#-advanced-built-in-middlewares)
  - [Rate Limiter Middleware (`rateLimit`)](#rate-limiter-middleware-ratelimit)
  - [Media Group / Album Batching (`albumMiddleware`)](#media-group--album-batching-albummiddleware)
  - [Inline Query Debounce & Cache (`inlineDebounceMiddleware`)](#inline-query-debounce--cache-inlinedebouncemiddleware)
  - [Automatic Chat Action (`chatActionMiddleware`)](#automatic-chat-action-chatactionmiddleware)
  - [Inline Query Pagination (`paginateInlineQuery`)](#inline-query-pagination-paginateinlinequery)
- [📚 Complete Telegram API Client Method Reference (`bot.telegram` / `bot.api`)](#-complete-telegram-api-client-method-reference-bottelegram--botapi)
- [🟦 TypeScript Support](#-typescript-support)
- [🧪 Running Tests](#-running-tests)
- [📄 License](#-license)

---

## 🌟 Key Highlights

- **Pure JavaScript & Zero Runtime Dependencies**: Built entirely on native Web standards (`fetch`, `FormData`, `Blob`) with zero binary compilation and zero third-party packages.
- **Dual Module Architecture**: Full, native compatibility with modern **ESM (`import`)** and **CommonJS (`require`)**.
- **Complete Telegram Bot API 10.3 Compliance**: Built-in support for message drafts (`sendMessageDraft`, `sendRichMessageDraft`), ephemeral messages (`sendEphemeralMessage`), managed bot access settings (`getManagedBotAccessSettings`, `setManagedBotAccessSettings`), disabled buttons (`Markup.button.disabled`), and Telegram Stars (`XTR`).
- **Rich Message Builder Suite**: Fluent `RichMessage` API with structured blocks, headers, badges, quotes, code blocks, and automatic HTML fallback compilation.
- **Seamless Keyboard Normalization**: Pass `Markup.keyboard()` or `Markup.inlineKeyboard()` directly as the 2nd argument to `ctx.reply()` without manual JSON wrapping or extra payloads.
- **Asynchronous Inline Prompts**: Await user answers step-by-step with `const answer = await ctx.prompt('What is your name?')`.
- **Multi-Step Wizard Scenes**: Structured conversation flows with `WizardScene` and `Stage` for complex interactive state machines.
- **Pluggable Session Storage**: Includes `MemorySessionStore`, `FileSessionStore`, and custom adapter support for Redis, MongoDB, or SQL databases.
- **XSS-Safe Dynamic Formatting**: Tagged template literals with `fmt` and `html` prevent Telegram HTML parsing exceptions and script injection.
- **Multi-Bot Manager**: Run and orchestrate hundreds of bot tokens simultaneously inside a single Node.js process using `TelegixManager`.

---

## 📦 Installation

Install Telegix using your preferred package manager:

```bash
# Using npm
npm install telegix

# Using pnpm
pnpm add telegix

# Using yarn
yarn add telegix

# Using bun
bun add telegix
```

---

## 🚀 Quick Start Guide

### ECMAScript Modules (ESM)

Create a file named `bot.mjs` (or set `"type": "module"` in your `package.json`):

```javascript
import { Telegix, Markup, RichMessage, fmt, html } from 'telegix';

const bot = new Telegix(process.env.BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN');

// 1. Slash Command: /start
bot.command('start', async (ctx) => {
  const name = ctx.from?.first_name || 'there';
  await ctx.reply(
    fmt`Hello, <b>${name}</b>! Welcome to <b>Telegix</b> ⚡`,
    { parse_mode: 'HTML' }
  );
});

// 2. Custom Reply Keyboard: /menu
bot.command('menu', async (ctx) => {
  const replyKeyboard = Markup.keyboard([
    ['☕ Coffee', '🍕 Pizza'],
    ['📊 Status', '⚙️ Settings'],
  ]).resize();

  await ctx.reply('Please choose an option from the keyboard below:', replyKeyboard);
});

// 3. Inline Keyboard & Disabled Button (Bot API 10.3)
bot.command('order', async (ctx) => {
  const inlineMenu = Markup.inlineKeyboard([
    [
      Markup.button.callback('Margherita ($10)', 'pizza_margherita'),
      Markup.button.callback('Pepperoni ($12)', 'pizza_pepperoni'),
    ],
    [
      Markup.button.url('🌐 View Full Menu', 'https://example.com/menu'),
      Markup.button.disabled('🔒 Truffle (Sold Out)'),
    ],
  ]);

  await ctx.reply('Select your pizza:', inlineMenu);
});

// 4. Handle Inline Button Callbacks
bot.action(/^pizza_(.+)$/, async (ctx) => {
  const selectedPizza = ctx.match[1];
  await ctx.answerCallbackQuery(`Added ${selectedPizza} to your cart!`);
  await ctx.editMessageText(
    `✅ You selected: <b>${selectedPizza.toUpperCase()}</b>\nThank you for ordering!`,
    { parse_mode: 'HTML' }
  );
});

// 5. Catch-All Text Messages with Reactions
bot.on('message:text', async (ctx) => {
  await ctx.react('👍');
  await ctx.reply(`You said: "${ctx.text}"`);
});

// Launch the bot with Long-Polling
bot.launch().then(() => {
  console.log('🤖 Bot is online and listening for updates!');
});
```

### CommonJS (CJS)

Create a file named `bot.js`:

```javascript
const { Telegix, Markup } = require('telegix');

const bot = new Telegix(process.env.BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN');

bot.command('start', (ctx) => ctx.reply('Hello from Telegix CommonJS!'));

bot.launch().then(() => {
  console.log('🤖 Bot is online!');
});
```

---

## 🏛️ Bot Core & Lifecycle

### Initialization & Configuration Options

The `Telegix` constructor accepts the bot token as its first parameter and an optional configuration object:

```javascript
import { Telegix } from 'telegix';

const bot = new Telegix('123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11', {
  apiRoot: 'https://api.telegram.org', // Custom Bot API server URL (e.g. self-hosted server)
  testEnv: false,                      // Connect to Telegram test environment
  timeout: 60000,                      // Network HTTP request timeout in ms (default: 60000)
  autoRetry: true,                     // Automatically retry after 429 Too Many Requests (default: true)
  handlerTimeout: 90000,               // Timeout in ms for update middleware execution
  polling: {
    timeout: 30,                       // Long-polling timeout in seconds (default: 30)
    limit: 100,                        // Maximum updates to retrieve per polling request (default: 100)
    allowedUpdates: [                  // List of update types to receive
      'message',
      'edited_message',
      'channel_post',
      'edited_channel_post',
      'business_connection',
      'business_message',
      'edited_business_message',
      'deleted_business_messages',
      'message_reaction',
      'message_reaction_count',
      'inline_query',
      'chosen_inline_result',
      'callback_query',
      'shipping_query',
      'pre_checkout_query',
      'poll',
      'poll_answer',
      'my_chat_member',
      'chat_member',
      'chat_join_request',
      'chat_boost',
      'removed_chat_boost',
    ],
  },
});
```

### Fetching Bot Info with `getMe()`

`getMe()` retrieves basic information about the bot in the form of a Telegram `User` object. You can call it directly on `bot.telegram` or through the `ctx` context inside any update:

```javascript
// 1. Direct fetch before or outside update handling:
const botInfo = await bot.telegram.getMe();
console.log(`Bot Account: @${botInfo.username} (ID: ${botInfo.id})`);
console.log(`Can join groups: ${botInfo.can_join_groups}`);
console.log(`Can read all group messages: ${botInfo.can_read_all_group_messages}`);
console.log(`Supports inline queries: ${botInfo.supports_inline_queries}`);

// 2. Fetch inside any middleware or command handler:
bot.command('whoami', async (ctx) => {
  const me = await ctx.getMe();
  await ctx.reply(
    `🤖 <b>Bot Details:</b>\n` +
    `• Name: ${me.first_name}\n` +
    `• Username: @${me.username}\n` +
    `• Bot ID: <code>${me.id}</code>`,
    { parse_mode: 'HTML' }
  );
});
```

### Long-Polling Mode

Start, monitor, and stop the long-polling lifecycle:

```javascript
// Launch long-polling
await bot.launch({
  dropPendingUpdates: true, // Drop updates accumulated while bot was offline
  allowedUpdates: ['message', 'callback_query'],
});

// Manual polling controls
await bot.startPolling({ timeout: 30 });

// Gracefully stop the bot on process termination
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
```

### Webhook Mode (Node.js HTTP, Express, Fastify, Serverless)

Use `createWebhookCallback()` to create a request handler compatible with all standard Node.js server frameworks:

#### Native Node.js `http` / `https`
```javascript
import http from 'node:http';
import { Telegix, createWebhookCallback } from 'telegix';

const bot = new Telegix(process.env.BOT_TOKEN);
const secretToken = 'my_super_secret_webhook_token';

// Set the webhook with Telegram
await bot.telegram.setWebhook('https://my-domain.com/webhook', {
  secret_token: secretToken,
});

const server = http.createServer(
  createWebhookCallback(bot, {
    path: '/webhook',
    secretToken: secretToken,
  })
);

server.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});
```

#### Express.js
```javascript
import express from 'express';
import { Telegix, createWebhookCallback } from 'telegix';

const app = express();
const bot = new Telegix(process.env.BOT_TOKEN);

app.use(express.json());
app.post('/webhook', createWebhookCallback(bot, { secretToken: process.env.WEBHOOK_SECRET }));

app.listen(3000);
```

### Multi-Core Cluster Mode

Scale your bot horizontally across all CPU cores on a multi-core server:

```javascript
import { Telegix } from 'telegix';

const bot = new Telegix(process.env.BOT_TOKEN);

// Spawn a worker for each CPU core automatically
if (bot.cluster()) {
  // Primary process manages child worker lifecycles
} else {
  // Worker process handles bot updates
  bot.command('ping', (ctx) => ctx.reply(`Pong from worker ${process.pid}!`));
  bot.launch();
}
```

### Error Handling & `bot.catch()`

Catch and handle uncaught errors gracefully across all middlewares:

```javascript
import { TelegramError } from 'telegix';

bot.catch((err, ctx) => {
  console.error(`Error occurred while handling update ${ctx.update.update_id}:`, err);

  if (err instanceof TelegramError) {
    console.error(`Telegram API Error [${err.errorCode}]: ${err.description}`);
    if (err.parameters?.retry_after) {
      console.warn(`Rate limit retry after: ${err.parameters.retry_after}s`);
    }
  }

  // Attempt to notify user if possible
  ctx.reply('⚠️ An unexpected error occurred while processing your request.').catch(() => {});
});
```

---

## 🛠️ Context (`ctx`) Reference & Functions

Every middleware, command, and event handler receives a `Context` instance (`ctx`) encapsulating the current update and providing dozens of helper methods.

### Context Properties & Getters

| Property / Getter | Type | Description |
|---|---|---|
| `ctx.update` | `object` | The raw Telegram Update object received from Telegram Bot API. |
| `ctx.updateType` | `string` | The primary update type (e.g., `'message'`, `'callback_query'`, `'chat_boost'`). |
| `ctx.updateSubtypes` | `string[]` | Subtype classifications (e.g., `['text']`, `['photo']`, `['pinned_message']`). |
| `ctx.botInfo` | `object` | The cached `User` object of this bot. |
| `ctx.telegram` / `ctx.api` | `Telegram` | The low-level Telegram API client instance. |
| `ctx.state` | `object` | Clean per-update state dictionary to share data between middlewares. |
| `ctx.session` | `object` | Persistent session object (when `session()` middleware is enabled). |
| `ctx.message` / `ctx.msg` | `object\|null` | Shortcut to incoming Message (or edited message, channel post, business message). |
| `ctx.chat` | `object\|null` | The `Chat` object associated with the current update. |
| `ctx.chatId` | `number\|string` | ID of the current chat. |
| `ctx.from` | `object\|null` | The `User` object of the sender. |
| `ctx.userId` | `number` | ID of the sender user. |
| `ctx.text` | `string\|null` | Text content of the current message. |
| `ctx.callbackQuery` | `object\|null` | CallbackQuery object if this update is a button callback. |
| `ctx.inlineQuery` | `object\|null` | InlineQuery object if this update is an inline query. |
| `ctx.match` | `RegExpMatchArray` | Regex match results when triggered via `bot.hears()` or `bot.action()`. |
| `ctx.payload` | `string` | Command arguments payload after a slash command (e.g. `/ban 123` -> `'123'`). |
| `ctx.isForum` | `boolean` | `true` if the current chat is a forum supergroup. |
| `ctx.topicId` | `number\|null` | Forum thread ID / Message Thread ID if inside a forum topic. |

---

### Text & HTML / Markdown Replies

```javascript
// Plain text reply
await ctx.reply('Hello, World!');

// HTML formatted reply
await ctx.replyWithHTML('<b>Bold</b>, <i>Italic</i>, <code>Code</code>, <a href="https://telegix.dev">Link</a>');

// Markdown formatted reply
await ctx.replyWithMarkdown('*Bold text*, _Italic text_, `Code`');

// MarkdownV2 formatted reply
await ctx.replyWithMarkdownV2('*Bold* and _Italic_ and ||Spoiler||');

// Reply with additional options and keyboard
await ctx.reply('Choose an option:', {
  parse_mode: 'HTML',
  reply_to_message_id: ctx.message?.message_id,
  reply_markup: Markup.inlineKeyboard([
    [Markup.button.callback('Option 1', 'opt_1')],
  ]),
});

// Stream real-time tokens/text with automated throttle control
await ctx.streamText(tokenGenerator(), { initialMessage: '⏳ Thinking...' });

// Stream real-time draft into chat input bar (Bot API 10.3)
await ctx.streamDraft(tokenGenerator());

// Reply with customized link preview (small/large, above/below, disabled)
await ctx.replyWithLinkPreview('Visit Docs:', LinkPreview.large('https://telegix.dev'));

// Reply with expandable/collapsible blockquote
await ctx.replyWithCollapsibleQuote('Full debug stack trace...', '⚠️ <b>System Warning</b>');

// Reply with button launching a Telegram Mini App
await ctx.replyWithWebApp('Launch Dashboard:', 'https://app.example.com', '🚀 Open App');

// Save a prepared inline message for Mini App sharing (Bot API 8.0+)
const prepared = await ctx.savePreparedInlineMessage({
  type: 'article',
  id: 'share_1',
  title: 'Share Score',
  input_message_content: { message_text: 'I reached Level 10!' },
});

// Retrieve bot user identity
const me = await ctx.getMe();
```

---

### Media Sending Functions (Photos, Audio, Videos, Documents, Albums)

```javascript
// 1. Send Photo (by URL, File ID, Blob, or Buffer)
await ctx.replyWithPhoto('https://example.com/image.jpg', {
  caption: '🌅 Beautiful sunset in HTML: <b>Nature</b>',
  parse_mode: 'HTML',
});

// 2. Send Audio File
await ctx.replyWithAudio('https://example.com/song.mp3', {
  title: 'Track Title',
  performer: 'Artist Name',
  caption: '🎵 Enjoy the music!',
});

// 3. Send Document / File
await ctx.replyWithDocument('https://example.com/manual.pdf', {
  caption: '📄 User Manual PDF',
});

// 4. Send Video
await ctx.replyWithVideo('https://example.com/clip.mp4', {
  caption: '🎬 Video Showcase',
  supports_streaming: true,
});

// 5. Send Animation / GIF
await ctx.replyWithAnimation('https://example.com/cheers.gif');

// 6. Send Voice Note (.ogg audio)
await ctx.replyWithVoice('https://example.com/voice.ogg');

// 7. Send Video Note (Round video message)
await ctx.replyWithVideoNote('https://example.com/round_video.mp4');

// 8. Send Media Group / Photo Album
await ctx.replyWithMediaGroup([
  { type: 'photo', media: 'https://example.com/photo1.jpg', caption: 'Photo 1' },
  { type: 'photo', media: 'https://example.com/photo2.jpg' },
  { type: 'video', media: 'https://example.com/video1.mp4' },
]);
```

---

### Interactive Messages (Polls, Locations, Venues, Contacts, Dice, Stickers, Games)

```javascript
// 1. Send Location (Latitude, Longitude)
await ctx.replyWithLocation(37.7749, -122.4194);

// 2. Send Venue
await ctx.replyWithVenue(37.7749, -122.4194, 'San Francisco City Hall', '1 Dr Carlton B Goodlett Pl');

// 3. Send Contact Card
await ctx.replyWithContact('+1234567890', 'John', { last_name: 'Doe' });

// 4. Send Poll or Quiz
await ctx.replyWithPoll(
  'Which database do you prefer?',
  ['PostgreSQL', 'Redis', 'MongoDB', 'SQLite'],
  {
    is_anonymous: false,
    allows_multiple_answers: true,
  }
);

// 5. Send Animated Dice (🎲, 🎯, 🏀, ⚽, 🎰, 🎳)
await ctx.replyWithDice({ emoji: '🎯' });

// 6. Send Sticker
await ctx.replyWithSticker('CAACAgIAAxkBAAE...');

// 7. Send Telegram Game
await ctx.replyWithGame('my_telegix_game');

// 8. Send Paid Media (Telegram Stars)
await ctx.replyWithPaidMedia(25, [
  { type: 'photo', media: 'https://example.com/exclusive_art.jpg' }
]);
```

---

### Message Reactions & Chat Actions

```javascript
// Add an emoji reaction to the current message
await ctx.react('❤️');
await ctx.react('🔥');

// Send chat action indicators ('typing', 'upload_photo', 'record_video', 'upload_document', etc.)
await ctx.replyWithChatAction('typing');
await ctx.replyWithChatAction('upload_document');
```

---

### Message Editing, Deleting, Forwarding, Copying, & Pinning

```javascript
// 1. Edit current message text
await ctx.editMessageText('Updated text content', { parse_mode: 'HTML' });

// 2. Edit current message caption
await ctx.editMessageCaption('Updated media caption');

// 3. Edit current message reply markup
await ctx.editMessageReplyMarkup(
  Markup.inlineKeyboard([[Markup.button.callback('New Option', 'opt_new')]])
);

// 4. Delete messages
await ctx.deleteMessage(); // Deletes current incoming message
await ctx.deleteMessage(targetMessageId);
await ctx.deleteMessages([msgId1, msgId2, msgId3]);

// 5. Forward or Copy messages to another chat
await ctx.forwardMessage(targetChatId);
await ctx.copyMessage(targetChatId);

// 6. Pin / Unpin messages
await ctx.pinChatMessage();
await ctx.unpinChatMessage();
await ctx.unpinAllChatMessages();

// 7. Answer Callback Query
await ctx.answerCallbackQuery('Action confirmed!', { show_alert: false });
```

---

### Chat Administration & Member Moderation

```javascript
// Get Chat Details & Administrators
const chat = await ctx.getChat();
const admins = await ctx.getChatAdministrators();

// Get Member Info & Total Member Count
const member = await ctx.getChatMember(targetUserId);
const count = await ctx.getChatMembersCount();

// Ban / Kick Member
await ctx.banChatMember(targetUserId, {
  until_date: Math.floor(Date.now() / 1000) + 86400, // 24 hours ban
  revoke_messages: true,
});

// Unban Member
await ctx.unbanChatMember(targetUserId, { only_if_banned: true });

// Restrict Permissions
await ctx.restrictChatMember(targetUserId, {
  can_send_messages: false,
  can_send_media_messages: false,
  can_send_other_messages: false,
  can_add_web_page_previews: false,
});

// Promote Member to Administrator
await ctx.promoteChatMember(targetUserId, {
  can_change_info: true,
  can_delete_messages: true,
  can_invite_users: true,
  can_pin_messages: true,
});

// Manage Chat Info
await ctx.setChatTitle('New Group Title');
await ctx.setChatDescription('Updated group description.');
await ctx.leaveChat();
```

---

### Forum Supergroups & Topics Management

```javascript
// Check if the current chat is a forum supergroup
if (ctx.isForum) {
  console.log('Current forum thread ID:', ctx.topicId);
}

// Create a new topic in a forum supergroup
const topic = await ctx.createForumTopic('🚀 Development Updates', {
  icon_color: 0x6FB9F0,
  icon_custom_emoji_id: '5312345678901234567',
});

// Edit, Close, Reopen, or Delete Topics
await ctx.editForumTopic(ctx.topicId, { name: '📁 Archived Updates' });
await ctx.closeForumTopic(ctx.topicId);
await ctx.reopenForumTopic(ctx.topicId);
await ctx.deleteForumTopic(ctx.topicId);
await ctx.unpinAllForumTopicMessages(ctx.topicId);
```

---

### Bot API 10.3 Methods (Rich Messages, Drafts, Ephemeral Messages, Managed Access)

```javascript
import { RichMessage, Markup } from 'telegix';

// 1. Send Rich Message (structured layout blocks with automatic fallback)
const card = RichMessage.card('⚡ Server Health Check', 'All systems operational.')
  .header('Cluster Status', '🟢')
  .badge('CPU Load', '14%')
  .badge('Memory', '1.2 GB / 8.0 GB')
  .list(['Node 1: Online', 'Node 2: Online', 'Node 3: Standby'])
  .expandableQuote('Rich messages provide structured block layouts.')
  .row(
    Markup.button.callback('🔄 Refresh', 'refresh_stats'),
    Markup.button.disabled('🔒 Advanced Tuning')
  );

await ctx.replyWithRichMessage(card);

// 2. Edit existing message with Rich Message
await ctx.editRichMessageText(card);

// 3. Send Rich Message Draft
await ctx.sendRichMessageDraft(card);

// 4. Send Message Draft (Real-time draft displayed directly in user client)
await ctx.sendMessageDraft('Bot is currently preparing your report...');

// 5. Send Ephemeral Message (Message with automated lifetime)
await ctx.sendEphemeralMessage('This message will automatically vanish in 15 seconds.', 15);

// 6. Managed Bot Access Settings (Bot API 10.3)
const accessSettings = await ctx.getManagedBotAccessSettings(adminUserId);
await ctx.setManagedBotAccessSettings({ allow_admin_override: true }, adminUserId);

// 7. Get User Personal Chat Messages
const messages = await ctx.getUserPersonalChatMessages(targetUserId);
```

---

## 🎨 Rich Message & Layout Builder Suite (`RichMessage`)

The `RichMessage` class allows you to construct modern, structured card layouts, dashboards, and rich messages using a fluent chaining syntax.

### Fluent Block Builder API

| Builder Method | Description |
|---|---|
| `.header(text, emoji?)` | Adds a prominent header block with an optional leading emoji. |
| `.paragraph(text)` | Adds a body paragraph block. |
| `.bold(text)` / `.italic(text)` | Adds bold or italic styled text blocks. |
| `.underline(text)` / `.strikethrough(text)` | Adds underlined or struck-through text blocks. |
| `.code(codeText, language?)` | Adds inline or syntax-highlighted multiline code blocks. |
| `.quote(text, expandable?)` | Adds a standard or expandable Telegram blockquote. |
| `.expandableQuote(text)` | Shortcut to add an expandable blockquote. |
| `.spoiler(text)` | Adds tap-to-reveal spoiler formatted text. |
| `.link(text, url)` | Adds a formatted hyperlink. |
| `.mention(text, userId)` | Adds an inline mention link for a Telegram user ID. |
| `.list(items, bullet?)` | Formats an array of strings into a bulleted list. |
| `.numberedList(items)` | Formats an array of strings into a numbered list (1., 2., 3.). |
| `.badge(label, value, icon?)` | Adds a key-value metric badge item. |
| `.divider()` | Inserts a clean visual separator line. |
| `.row(...buttons)` | Appends a row of inline keyboard buttons. |
| `.callback(text, data)` | Appends an inline callback query button. |
| `.url(text, url)` | Appends an external URL link button. |
| `.disabled(text)` | Appends a non-clickable disabled button (Bot API 10.3). |
| `.ephemeral(seconds)` | Sets message lifetime parameter for auto-expiration. |
| `.draftId(id?)` / `.asDraft()` | Configures the rich message as a real-time message draft. |
| `.compile()` / `.build()` | Compiles all blocks into a Telegram-ready payload object. |
| `.send(ctx)` | Sends the rich message using the active context. |
| `.edit(ctx)` | Edits an existing message with this rich message. |

### Static Factory Methods

```javascript
import { RichMessage } from 'telegix';

// Create a blank builder
const msg = RichMessage.create('Optional initial text');

// Create a pre-structured Card
const card = RichMessage.card('Card Title', 'Card Description', [
  Markup.button.callback('Click Me', 'btn_1'),
]);

// Create a Draft Message
const draft = RichMessage.draft('Drafting text...', 12345);

// Create an Ephemeral Message
const expiring = RichMessage.ephemeral('Expiring note', 30);
```

### Complete Interactive Rich Card Example

```javascript
import { Telegix, Markup, RichMessage } from 'telegix';

const bot = new Telegix(process.env.BOT_TOKEN);

bot.command('dashboard', async (ctx) => {
  const dashboard = RichMessage.card('⚡ Infrastructure Dashboard', 'Live metrics from production cluster:')
    .header('Cluster Status', '🟢')
    .badge('CPU Utilization', '28.4%', '💻')
    .badge('RAM Usage', '3.8 GB / 16.0 GB', '🧠')
    .badge('Active Connections', '1,420', '🌐')
    .badge('Error Rate', '0.002%', '🛡️')
    .divider()
    .header('Active Worker Nodes', '🖥️')
    .list([
      'worker-ap-southeast-1a: Healthy (0.12 load)',
      'worker-ap-southeast-1b: Healthy (0.15 load)',
      'worker-ap-southeast-1c: Standby',
    ])
    .divider()
    .expandableQuote('Auto-scaling policy is currently enabled. Additional instances will spawn if CPU exceeds 75%.')
    .code('curl -s https://api.cluster.internal/v1/health | jq', 'bash')
    .row(
      Markup.button.callback('🔄 Refresh Data', 'refresh_metrics'),
      Markup.button.url('📈 Grafana', 'https://grafana.example.com')
    )
    .row(
      Markup.button.disabled('🔒 Deploy Patch (Admin Only)')
    );

  await ctx.replyWithRichMessage(dashboard);
});
```

---

## 🚦 Composer & Router Engine

`Composer` powers the routing and middleware pipeline in Telegix.

### Event Filtering (`bot.on`)

Filter and intercept incoming updates by type and subtype:

```javascript
// Text messages
bot.on('message:text', async (ctx) => { ... });

// Photos, Audios, Documents, Videos
bot.on('message:photo', async (ctx) => { ... });
bot.on('message:audio', async (ctx) => { ... });
bot.on('message:document', async (ctx) => { ... });
bot.on('message:video', async (ctx) => { ... });

// Service messages
bot.on('message:new_chat_members', async (ctx) => { ... });
bot.on('message:left_chat_member', async (ctx) => { ... });
bot.on('message:pinned_message', async (ctx) => { ... });

// Channel Posts
bot.on('channel_post:text', async (ctx) => { ... });

// Inline Queries & Results
bot.on('inline_query', async (ctx) => { ... });
bot.on('chosen_inline_result', async (ctx) => { ... });

// Reactions & Boosts
bot.on('message_reaction', async (ctx) => { ... });
bot.on('chat_boost', async (ctx) => { ... });

// Listen to multiple event types at once
bot.on(['message:voice', 'message:video_note'], async (ctx) => { ... });
```

---

### Slash Commands (`bot.command`)

Handles slash commands and parses command arguments into `ctx.payload`:

```javascript
// Matches /start
bot.command('start', async (ctx) => {
  await ctx.reply('Welcome!');
});

// Matches /ban <userId> <reason>
bot.command('ban', async (ctx) => {
  const [targetId, ...reasonParts] = ctx.payload.split(' ');
  const reason = reasonParts.join(' ');
  await ctx.reply(`Banning user ${targetId} for reason: ${reason}`);
});

// Matches multiple commands simultaneously
bot.command(['help', 'info', 'guide'], async (ctx) => {
  await ctx.reply('Help documentation...');
});
```

---

### Text Pattern Matching (`bot.hears`)

Match message text or captions against static strings or Regular Expressions:

```javascript
// Static string matching
bot.hears('hi', async (ctx) => ctx.reply('Hello there!'));

// Regular expression matching with capture groups
bot.hears(/^echo (.+)$/i, async (ctx) => {
  const capturedText = ctx.match[1];
  await ctx.reply(`Echo: ${capturedText}`);
});

// Match multiple phrases
bot.hears(['help', 'support', 'contact'], async (ctx) => {
  await ctx.reply('Please email support@example.com for assistance.');
});
```

---

### Button Callbacks (`bot.action`)

Handle inline button callback queries with exact strings or regex matching:

```javascript
// Exact match
bot.action('confirm_delete', async (ctx) => {
  await ctx.answerCallbackQuery('Item deleted!');
  await ctx.deleteMessage();
});

// Regex match with parameter extraction
bot.action(/^user:(\d+):action:(ban|kick|warn)$/, async (ctx) => {
  const userId = ctx.match[1];
  const action = ctx.match[2];
  await ctx.answerCallbackQuery(`Executed ${action} on user ${userId}`);
});
```

---

### Specialized Filters (Chat Types, Reactions, Boosts, Business, Forum)

```javascript
import { Composer } from 'telegix';

// Filter by Chat Type: 'private', 'group', 'supergroup', 'channel'
bot.use(Composer.chatType('private', async (ctx, next) => {
  console.log('Update came from a private DM!');
  return next();
}));

// Filter by Message Reactions
bot.use(Composer.reaction(async (ctx, next) => {
  console.log('User reacted with:', ctx.messageReaction.new_reaction);
  return next();
}));

// Filter by Telegram Business Connection
bot.use(Composer.business(async (ctx, next) => {
  console.log('Business message received');
  return next();
}));

// Filter Forum Supergroups
bot.use(Composer.forum(async (ctx, next) => {
  console.log('Forum topic message received');
  return next();
}));
```

---

## 🎛️ Fluent Keyboard & Markup Builder (`Markup`)

Construct reply and inline keyboards cleanly with `Markup`.

### Custom Reply Keyboards

```javascript
import { Markup } from 'telegix';

// Create a customized reply keyboard
const keyboard = Markup.keyboard([
  ['🛒 Shop', '📦 Orders'],
  ['📞 Support', '⚙️ Settings'],
])
  .resize()               // Compact button sizes
  .oneTime()              // Hide keyboard after first selection
  .placeholder('Select an option...')
  .selective();           // Show only to specific mentioned users

await ctx.reply('Main Menu:', keyboard);
```

---

### Inline Keyboards

```javascript
const inline = Markup.inlineKeyboard([
  [
    Markup.button.callback('👍 Like', 'action_like'),
    Markup.button.callback('👎 Dislike', 'action_dislike'),
  ],
  [
    Markup.button.url('🌐 Visit Website', 'https://telegix.dev'),
    Markup.button.copyText('📋 Copy Code', 'TELE-2026'),
  ],
  [
    Markup.button.webApp('🚀 Launch Mini App', 'https://miniapp.example.com'),
  ],
]);

await ctx.reply('Interactive Post:', inline);
```

---

### Complete Button Builder Reference

| Button Builder Method | Description |
|---|---|
| `Markup.button.text(text)` | Standard reply keyboard text button. |
| `Markup.button.callback(text, data)` | Inline button triggering a callback query with `data`. |
| `Markup.button.url(text, url)` | Inline button opening an external URL. |
| `Markup.button.primary(text, dataOrUrl)` | **Primary (Blue)** styled button for prominent calls to action (**Bot API 9.4+**). |
| `Markup.button.danger(text, dataOrUrl)` | **Danger (Red)** styled button for destructive actions (**Bot API 9.4+**). |
| `Markup.button.success(text, dataOrUrl)` | **Success (Green)** styled button for positive confirmations (**Bot API 9.4+**). |
| `Markup.button.colored(text, style, dataOrUrl)` | Custom styled button with `'primary' \| 'danger' \| 'success'` style. |
| `Markup.button.webApp(text, url)` | Button launching a Telegram Mini App. |
| `Markup.button.copyText(text, textToCopy)` | Inline button that copies `textToCopy` to the clipboard. |
| `Markup.button.disabled(text)` | Disabled, non-clickable button (**Bot API 10.3**). |
| `Markup.button.login(text, url, options?)` | Telegram Login URL authorization button. |
| `Markup.button.switchToChat(text, query)` | Inline button switching to chat with inline query. |
| `Markup.button.switchToCurrentChat(text, query)` | Inline button opening current chat with inline query. |
| `Markup.button.pay(text)` | Payment invoice button. |
| `Markup.button.contactRequest(text)` | Reply button requesting the user's phone number. |
| `Markup.button.locationRequest(text)` | Reply button requesting the user's GPS location. |
| `Markup.button.pollRequest(text, type?)` | Reply button requesting user to create a poll or quiz. |
| `Markup.button.userRequest(text, reqId, options?)` | Reply button requesting user selection. |
| `Markup.button.botRequest(text, reqId, options?)` | Reply button requesting bot selection. |
| `Markup.button.groupRequest(text, reqId, options?)` | Reply button requesting group chat selection. |
| `Markup.button.channelRequest(text, reqId, options?)` | Reply button requesting channel selection. |

---

### 🎨 Colored Buttons for Bots (Bot API 9.4+)

Telegram Bot API 9.4 introduced native visual styling for inline buttons, allowing developers to emphasize specific actions with colors:

- `primary`: Emphasized primary button (accent/blue styling)
- `danger`: Destructive actions such as account deletion, bans, or cancelations (red styling)
- `success`: Confirmations, approvals, and checkout completions (green styling)

You can use colored buttons with callback queries or URLs via `Markup.button` or the `RichMessage` builder:

```javascript
import { Markup, RichMessage } from 'telegix';

// 1. Using Markup.inlineKeyboard
bot.command('confirm_delete', async (ctx) => {
  const keyboard = Markup.inlineKeyboard([
    [
      Markup.button.danger('🗑️ Delete Account', 'action_confirm_delete'),
      Markup.button.primary('Keep Account', 'action_cancel'),
    ],
    [
      Markup.button.success('💳 Upgrade to Pro', 'https://example.com/checkout'),
    ],
  ]);

  await ctx.reply('⚠️ Are you sure you want to delete your account permanently?', keyboard);
});

// 2. Using RichMessageBuilder
bot.command('order_status', async (ctx) => {
  const message = RichMessage.card('📦 Order #98124', 'Order ready for dispatch')
    .header('Delivery Status', '🚚')
    .badge('Status', 'Pending Signature')
    .row(
      Markup.button.success('✅ Approve & Sign', 'approve_98124'),
      Markup.button.danger('❌ Reject Order', 'reject_98124')
    );

  await ctx.replyWithRichMessage(message);
});
```

---

### Removing Keyboards & Force Reply

```javascript
// Remove custom reply keyboard
await ctx.reply('Keyboard removed.', Markup.removeKeyboard());

// Force user to reply to this message
await ctx.reply('Please enter your email address:', Markup.forceReply());
```

---

## 🌊 Streaming Text for Bots (`streamText` & `streamDraft`)

Real-time streaming is essential for modern AI-driven conversational bots (e.g. Gemini, OpenAI, Claude) and live progress updates. Telegix provides two powerful streaming modes:

1. **Real-Time Message Edit Streaming**: Sends an initial placeholder message and progressively updates it with incoming chunks using an intelligent throttling buffer to safely prevent Telegram `429 Too Many Requests` errors.
2. **Live Draft Streaming (Bot API 10.3+)**: Broadcasts ephemeral text chunks into the chat input bar via `sendMessageDraft` as typing occurs, then sends the finalized message once the stream completes.

### Real-Time Message Edit Streaming

```javascript
import { Telegix, toTextStream } from 'telegix';

const bot = new Telegix(process.env.BOT_TOKEN);

// Custom token generator simulation
async function* generateResponseTokens() {
  const words = 'Telegix provides blazing fast, zero-dependency streaming for modern Telegram bots.'.split(' ');
  for (const word of words) {
    yield `${word} `;
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
}

bot.command('generate', async (ctx) => {
  // Directly stream onto chat via ctx.streamText
  const result = await ctx.streamText(generateResponseTokens(), {
    initialMessage: '💭 Generating your answer...',
    intervalMs: 800,     // Buffer updates to edit at most once every 800ms
    minDeltaChars: 15,    // Only edit if at least 15 new characters arrived
    parse_mode: 'HTML',
  });

  console.log(`Stream complete! Final message ID: ${result.message_id}`);
});
```

### Live Draft Streaming (Bot API 10.3+)

Live drafts display real-time streamed text directly in the chat preview or input box without producing edit notifications:

```javascript
bot.command('stream_draft', async (ctx) => {
  async function* aiStream() {
    yield 'Searching knowledge base...\n';
    await new Promise((r) => setTimeout(r, 600));
    yield 'Synthesizing response:\n';
    await new Promise((r) => setTimeout(r, 600));
    yield 'Everything is configured and running at optimal speeds!';
  }

  // Stream preview as draft, then send final message
  await ctx.streamDraft(aiStream(), {
    intervalMs: 600,
    minDeltaChars: 10,
  });
});
```

### Streaming AI & LLM Responses (Gemini, OpenAI, Generators)

Telegix automatically accepts any `AsyncIterable`, `ReadableStream`, Generator, Array, or String:

```javascript
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

bot.command('ask', async (ctx) => {
  if (!ctx.payload) {
    return ctx.reply('Please provide a prompt! Example: /ask Explain quantum computing');
  }

  // Create Gemini streaming response
  const responseStream = await ai.models.generateContentStream({
    model: 'gemini-2.5-flash',
    contents: ctx.payload,
  });

  // Convert Gemini chunks to text stream
  async function* extractText(stream) {
    for await (const chunk of stream) {
      if (chunk.text) yield chunk.text;
    }
  }

  await ctx.streamText(extractText(responseStream), {
    initialMessage: '🤖 Thinking...',
    intervalMs: 800,
    minDeltaChars: 20,
    parse_mode: 'HTML',
  });
});
```

---

## 💬 Asynchronous Conversations & Wizard Scenes

### Interactive Inline Prompts (`await ctx.prompt`)

Ask sequential questions and await answers asynchronously directly inside your code:

```javascript
import { Telegix, promptMiddleware } from 'telegix';

const bot = new Telegix(process.env.BOT_TOKEN);
bot.use(promptMiddleware());

bot.command('register', async (ctx) => {
  // Step 1: Ask Name
  const name = await ctx.prompt('What is your full name?');
  
  // Step 2: Ask Age
  const age = await ctx.prompt(`Nice to meet you, ${name}! How old are you?`, {
    timeoutMs: 30000, // 30 seconds timeout
  });

  // Step 3: Confirmation
  await ctx.reply(`🎉 Registration complete!\nName: ${name}\nAge: ${age}`);
});
```

---

### Multi-Step Wizard Scenes (`WizardScene` & `Stage`)

Build complex, multi-step conversation wizards with state tracking:

```javascript
import { Telegix, WizardScene, Stage, session, Markup } from 'telegix';

// 1. Define Wizard Scene
const orderWizard = new WizardScene(
  'pizza_order_wizard',
  // Step 1: Select Flavor
  async (ctx) => {
    await ctx.reply(
      '🍕 Step 1: Choose your pizza flavor:',
      Markup.keyboard([['Margherita', 'Pepperoni'], ['Hawaiian', 'BBQ Chicken']]).resize()
    );
    return ctx.wizard.next();
  },
  // Step 2: Select Size
  async (ctx) => {
    ctx.wizard.state.flavor = ctx.message.text;
    await ctx.reply(
      `Selected: ${ctx.wizard.state.flavor}\nStep 2: Choose size:`,
      Markup.keyboard([['Small', 'Medium', 'Large']]).resize()
    );
    return ctx.wizard.next();
  },
  // Step 3: Confirm & Finish
  async (ctx) => {
    ctx.wizard.state.size = ctx.message.text;
    await ctx.reply(
      `✅ Order Summary:\n• Flavor: ${ctx.wizard.state.flavor}\n• Size: ${ctx.wizard.state.size}\nThank you!`,
      Markup.removeKeyboard()
    );
    return ctx.scene.leave();
  }
);

// 2. Setup Stage
const stage = new Stage([orderWizard]);

const bot = new Telegix(process.env.BOT_TOKEN);
bot.use(session());
bot.use(stage.middleware());

bot.command('order', (ctx) => ctx.scene.enter('pizza_order_wizard'));
```

---

## 💾 Session & State Persistence

Store per-user or per-chat state that survives across multiple messages.

### Memory Session Store

```javascript
import { Telegix, session, MemorySessionStore } from 'telegix';

const bot = new Telegix(process.env.BOT_TOKEN);

bot.use(session({
  store: new MemorySessionStore({ ttlMs: 86400000 }), // 24 hours TTL
  initial: () => ({ count: 0 }),
}));

bot.command('counter', async (ctx) => {
  ctx.session.count += 1;
  await ctx.reply(`You have invoked this command ${ctx.session.count} times!`);
});
```

---

### File Session Store

Persist user states to local disk JSON automatically:

```javascript
import { Telegix, session, FileSessionStore } from 'telegix';

bot.use(session({
  store: new FileSessionStore({ filePath: './data/sessions.json' }),
  initial: () => ({ favorites: [] }),
}));
```

---

### Custom Store Integration (Redis, MongoDB, PostgreSQL)

Provide your own storage engine with `get`, `set`, and `delete` methods:

```javascript
import { session } from 'telegix';
import Redis from 'ioredis';

const redis = new Redis();

const redisStore = {
  async get(key) {
    const data = await redis.get(`session:${key}`);
    return data ? JSON.parse(data) : undefined;
  },
  async set(key, value, ttlMs) {
    if (ttlMs) {
      await redis.set(`session:${key}`, JSON.stringify(value), 'PX', ttlMs);
    } else {
      await redis.set(`session:${key}`, JSON.stringify(value));
    }
  },
  async delete(key) {
    await redis.del(`session:${key}`);
  },
};

bot.use(session({ store: redisStore }));
```

---

## 🌍 Internationalization & Localization (`I18n`)

Built-in internationalization supporting variable interpolation (`{{name}}`), nested paths (`menu.profile`), and pluralization rules:

```javascript
import { Telegix, I18n, session } from 'telegix';

const i18n = new I18n({
  defaultLocale: 'en',
  locales: {
    en: {
      welcome: 'Welcome, {{name}}!',
      menu: { profile: 'User Profile', settings: 'Settings' },
      items: {
        one: '1 item in cart',
        other: '{{count}} items in cart',
      },
    },
    es: {
      welcome: '¡Bienvenido, {{name}}!',
      menu: { profile: 'Perfil de Usuario', settings: 'Ajustes' },
      items: {
        one: '1 artículo en el carrito',
        other: '{{count}} artículos en el carrito',
      },
    },
  },
});

const bot = new Telegix(process.env.BOT_TOKEN);
bot.use(session());
bot.use(i18n.middleware());

bot.command('start', async (ctx) => {
  await ctx.reply(ctx.t('welcome', { name: ctx.from?.first_name }));
  await ctx.reply(ctx.t('menu.profile'));
  await ctx.reply(ctx.t('items', { count: 3 }));
});

bot.command('set_spanish', async (ctx) => {
  ctx.i18n.setLocale('es');
  await ctx.reply(ctx.t('welcome', { name: ctx.from?.first_name }));
});
```

---

## ✒️ Message Formatting (`fmt`, `html`, `mdv2`)

### XSS-Safe HTML Builder (`fmt` & `html`)

Safely interpolate untrusted user input into HTML messages without escaping errors:

```javascript
import { fmt, html } from 'telegix';

bot.command('profile', async (ctx) => {
  const untrustedBio = '<script>alert("xss")</script> & <b>test</b>';

  const message = fmt`
<b>👤 User Profile</b>
• Name: ${ctx.from?.first_name}
• Bio: ${untrustedBio}
• Status: ${html`<i>Verified Member</i>`}
• Points: ${1500}
${fmt.link('Open Dashboard', 'https://example.com')}
  `;

  await ctx.reply(message, { parse_mode: 'HTML' });
});
```

---

### MarkdownV2 Escaping Helpers (`mdv2`)

```javascript
import { mdv2 } from 'telegix';

bot.command('md', async (ctx) => {
  const rawText = 'Price: $99.99 (Special Offer! *Limited*)';
  const boldEscaped = mdv2.bold(rawText);

  await ctx.reply(boldEscaped, { parse_mode: 'MarkdownV2' });
});
```

---

## 📜 Collapsible Quotes (`fmt`, `mdv2`, `RichMessage`)

Telegram supports expandable/collapsible blockquotes (`<blockquote expandable>`), allowing users to tuck away long logs, detailed terms of service, technical stack traces, or FAQ answers behind a clean toggle.

Telegix provides first-class helpers across HTML, MarkdownV2, the `Context` object, and the `RichMessage` builder:

### 1. HTML Formatting (`fmt.collapsibleQuote` / `html.expandableQuote`)

```javascript
import { fmt } from 'telegix';

bot.command('faq', async (ctx) => {
  const answer = fmt`
<b>Frequently Asked Questions:</b>

${fmt.collapsibleQuote('Here is a very long, comprehensive answer explaining step-by-step how to integrate Telegix with your custom backend infrastructure...')}
  `;

  await ctx.reply(answer, { parse_mode: 'HTML' });
});
```

### 2. Context Shortcut (`ctx.replyWithCollapsibleQuote`)

```javascript
bot.command('terms', async (ctx) => {
  await ctx.replyWithCollapsibleQuote(
    '1. All user data is encrypted end-to-end.\n2. No telemetry is gathered without consent.\n3. Pure JavaScript runtime guarantees zero binary bloat.',
    '📋 <b>Terms of Service</b> (Tap to expand):'
  );
});
```

### 3. MarkdownV2 Formatting (`mdv2.collapsibleQuote`)

```javascript
import { mdv2 } from 'telegix';

bot.command('logs', async (ctx) => {
  const hiddenLogs = mdv2.collapsibleQuote('Error: Connection timed out at line 42 in server.ts');
  await ctx.reply(hiddenLogs, { parse_mode: 'MarkdownV2' });
});
```

### 4. RichMessage Builder (`collapsibleQuote` / `expandableQuote`)

```javascript
import { RichMessage } from 'telegix';

bot.command('patchnotes', async (ctx) => {
  const card = RichMessage.card('⚡ Release v1.1.0', 'Modern Telegram Bot API updates')
    .header('Changelog Details', '🚀')
    .collapsibleQuote('• Added Streaming Text engine\n• Added Colored Buttons\n• Added Mini App Fullscreen & Motion\n• Added Adjustable Link Previews');

  await ctx.replyWithRichMessage(card);
});
```

---

## 🔗 Adjustable Link Previews (`LinkPreview`)

Telegram Bot API 7.0+ replaced the legacy `disable_web_page_preview` flag with the granular `link_preview_options` object. 

Telegix provides the fluent `LinkPreview` builder to control whether media appears above or below text, display large image cards or compact thumbnails, or override preview URLs:

```javascript
import { LinkPreview } from 'telegix';

// 1. Fluent Builder pattern
bot.command('preview_custom', async (ctx) => {
  const preview = LinkPreview.create('https://telegix.dev')
    .largeMedia()      // Display large prominent card
    .aboveText()       // Position preview above text
    .toJSON();

  await ctx.reply('Check out the official documentation:', {
    link_preview_options: preview,
  });
});

// 2. Direct Context Helper: ctx.replyWithLinkPreview
bot.command('docs', async (ctx) => {
  await ctx.replyWithLinkPreview(
    'Explore the Telegix GitHub repository:',
    LinkPreview.small('https://github.com/telegix/telegix', true) // Small thumbnail, above text
  );
});

// 3. Static helper factories
LinkPreview.disabled();              // Completely disables preview ({ is_disabled: true })
LinkPreview.small('https://t.me');    // Shrinks media to small thumbnail
LinkPreview.large('https://t.me');    // Expands media to large header card
LinkPreview.above('https://t.me');    // Positions preview above message text
LinkPreview.below('https://t.me');    // Positions preview below message text

// 4. Automatic normalization in all sendMessage / editMessageText calls
await bot.telegram.sendMessage(chatId, 'https://example.com', {
  link_preview_options: LinkPreview.large('https://example.com'),
});
```

---

## 💳 Payments, Invoices & Telegram Stars (`InvoiceBuilder`)

Create and dispatch invoices for fiat currencies or **Telegram Stars (`XTR`)**:

```javascript
import { InvoiceBuilder, answerPreCheckoutQuery } from 'telegix';

bot.command('buy_stars', async (ctx) => {
  const invoice = new InvoiceBuilder(
    '⭐ 100 Telegram Stars Pass',
    'Unlock 30 days of premium bot capabilities',
    'order_stars_100',
    'XTR' // Telegram Stars currency
  )
    .addPrice('Stars Membership', 100)
    .photo('https://example.com/stars_banner.png')
    .build();

  await ctx.replyWithInvoice(
    invoice.title,
    invoice.description,
    invoice.payload,
    invoice.currency,
    invoice.prices,
    invoice
  );
});

// Pre-checkout query validation
bot.on('pre_checkout_query', async (ctx) => {
  await answerPreCheckoutQuery(ctx, true);
});

// Successful payment notification
bot.on('successful_payment', async (ctx) => {
  const payment = ctx.message.successful_payment;
  await ctx.reply(`🎉 Payment confirmed! Received ${payment.total_amount} ${payment.currency}.`);
});
```

---

## 📱 Telegram Mini Apps Suite (`MiniApp` & Utilities)

Telegix provides a complete end-to-end toolkit for Telegram Mini Apps (TMAs), encompassing both **backend cryptographic validation / message preparation** and **client-side WebApp SDK bridging** for modern features like full-screen mode, 3D device motion tracking, and theme-adaptive loading screens.

### Mini App Authentication (`validateWebAppInitData`)

Verify incoming Mini App authentication requests securely on your server using Telegram's HMAC-SHA256 signature protocol:

```javascript
import { validateWebAppInitData, parseWebAppInitData } from 'telegix';

// Express / Fastify / Node.js HTTP backend route:
app.post('/api/tma/auth', (req, res) => {
  const { initData } = req.body;

  // Cryptographically verifies hash with your bot token
  const isValid = validateWebAppInitData(initData, process.env.BOT_TOKEN, {
    maxAgeSeconds: 86400, // Reject if older than 24 hours
  });

  if (!isValid) {
    return res.status(401).json({ error: 'Unauthorized Mini App session' });
  }

  // Parse user profile, auth_date, and query_id safely
  const session = parseWebAppInitData(initData);
  console.log(`Authenticated TMA User: ${session.user.first_name} (ID: ${session.user.id})`);

  return res.json({ success: true, user: session.user });
});
```

### Launching Mini Apps from the Bot

```javascript
import { createMiniAppLaunchUrl, Markup } from 'telegix';

// 1. Generate Direct TMA Link
const launchUrl = createMiniAppLaunchUrl('MyBot', 'shop', 'referrer_123');
// -> https://t.me/MyBot/shop?startapp=referrer_123

// 2. Reply to users with a WebApp button directly
bot.command('app', async (ctx) => {
  await ctx.replyWithWebApp(
    'Welcome to our Mini App! Tap below to open:',
    'https://my-app.example.com',
    '🚀 Open WebApp'
  );
});
```

### Full-Screen Mode

Telegram Mini Apps can expand to occupy the complete display height, hiding Telegram's top chrome:

```javascript
import { MiniApp } from 'telegix';

// Inside your Mini App frontend (React, Vue, or Vanilla JS):
if (MiniApp.isInsideTelegram()) {
  // Request full screen
  MiniApp.fullscreen.request();

  // Listen for fullscreen state changes
  MiniApp.fullscreen.onChange((isFullscreen) => {
    console.log('Fullscreen active:', isFullscreen);
  });

  // Handle failure / unsupported versions
  MiniApp.fullscreen.onFailed((err) => {
    console.warn('Fullscreen could not be enabled:', err);
  });

  // Check current status
  console.log('Is currently fullscreen:', MiniApp.fullscreen.isActive());
}
```

### Device Motion Tracking (Accelerometer, Orientation, Gyroscope)

Build immersive 3D games, VR experiences, or tilt-controlled interfaces directly within Telegram Mini Apps:

```javascript
import { MiniApp } from 'telegix';

if (MiniApp.isInsideTelegram()) {
  // 1. Accelerometer (Linear acceleration in m/s²)
  MiniApp.motion.startAccelerometer({ refresh_rate: 20 });
  MiniApp.motion.onAccelerometer(({ x, y, z }) => {
    console.log(`Acceleration -> X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}, Z: ${z.toFixed(2)}`);
  });

  // 2. Device Orientation (Rotation in degrees)
  MiniApp.motion.startDeviceOrientation({ need_absolute: true });
  MiniApp.motion.onOrientation(({ alpha, beta, gamma, absolute }) => {
    console.log(`Tilt -> Alpha: ${alpha}, Beta (Pitch): ${beta}, Gamma (Roll): ${gamma}`);
  });

  // 3. Gyroscope (Angular velocity in rad/s)
  MiniApp.motion.startGyroscope();
  MiniApp.motion.onGyroscope(({ x, y, z }) => {
    console.log(`Gyro -> X: ${x}, Y: ${y}, Z: ${z}`);
  });
}
```

### Custom Loading Screen Generator (`MiniAppLoadingScreen`)

Deliver a polished, native launch experience while your frontend bundles load with theme-adaptive styles:

```javascript
import { MiniAppLoadingScreen, generateMiniAppLoadingScreen } from 'telegix';

// 1. Generate full HTML loading splash
const loadingHtml = generateMiniAppLoadingScreen({
  title: 'My Telegram WebApp',
  icon: 'https://my-app.example.com/logo.png',
  lightColor: '#2481cc',
  darkColor: '#53a8ff',
  skeleton: true, // Includes placeholder skeleton cards
});

// 2. Or configure using the fluent MiniAppLoadingScreen builder
const screen = new MiniAppLoadingScreen({
  title: 'Loading SuperApp...',
  skeleton: true,
})
  .setColors('#007AFF', '#0A84FF')
  .setIcon('https://example.com/app-icon.svg');

// Output raw CSS or full HTML splash
const splashCss = screen.toCSS();
const splashHtml = screen.toHTML();
```

### Home Screen & Prepared Inline Messages

Enable users to install your Mini App onto their phone's home screen and share dynamic game achievements directly into Telegram chats:

```javascript
import { MiniApp } from 'telegix';

// 1. Add to Home Screen (PWA shortcut)
MiniApp.homeScreen.addToHomeScreen();
MiniApp.homeScreen.checkStatus((status) => {
  // 'unsupported' | 'unknown' | 'added' | 'missed'
  console.log('Home screen status:', status);
});

// 2. Prepared Inline Messages (Bot API 8.0+)
// In your bot backend:
bot.command('share_score', async (ctx) => {
  const prepared = await ctx.savePreparedInlineMessage({
    type: 'article',
    id: 'score_1',
    title: '🏆 High Score: 1,450 pts!',
    input_message_content: {
      message_text: '🎮 I just scored <b>1,450 points</b> in SuperApp! Can you beat me?',
      parse_mode: 'HTML',
    },
  });

  // Send the prepared message ID to the Mini App frontend
  await ctx.reply(`Prepared Message ID: ${prepared.id}`);
});

// In your Mini App frontend:
// Triggers Telegram native chat selector to send the prepared message!
MiniApp.sharePreparedMessage(preparedMessageId);

// 3. Native File Downloads & Haptic Feedback
MiniApp.downloadFile({ url: 'https://example.com/receipt.pdf', file_name: 'receipt.pdf' });
MiniApp.haptics.impact('medium');
MiniApp.haptics.notification('success');
```

---

## 🤖 Multi-Bot Process Manager (`TelegixManager`)

Run, coordinate, and supervise multiple Telegram bots within a single Node.js process:

```javascript
import { TelegixManager } from 'telegix';

const manager = new TelegixManager();

// Register Bot 1
const supportBot = manager.add('support_bot', process.env.SUPPORT_BOT_TOKEN);
supportBot.command('start', (ctx) => ctx.reply('Support bot online!'));

// Register Bot 2
const alertBot = manager.add('alerts_bot', process.env.ALERTS_BOT_TOKEN);
alertBot.command('start', (ctx) => ctx.reply('Alerts bot online!'));

// Launch all registered bots concurrently
await manager.launchAll();
console.log(`Running ${manager.size} bots concurrently!`);
```

---

## ⚡ Advanced Built-in Middlewares

### Rate Limiter Middleware (`rateLimit`)

```javascript
import { rateLimit } from 'telegix';

bot.use(
  rateLimit({
    windowMs: 5000, // 5 second rolling window
    limit: 3,       // Max 3 messages per window
    handler: async (ctx) => {
      await ctx.reply('⚠️ Rate limit exceeded! Please wait a moment before sending more messages.');
    },
  })
);
```

### Media Group / Album Batching (`albumMiddleware`)

Batches photos and documents sent together into a single `ctx.album` array:

```javascript
import { albumMiddleware } from 'telegix';

bot.use(albumMiddleware({ windowMs: 500 }));

bot.on('message:photo', async (ctx) => {
  if (ctx.album) {
    console.log(`Received photo album containing ${ctx.album.count} photos!`);
    for (const msg of ctx.album.messages) {
      console.log('File ID:', msg.photo[msg.photo.length - 1].file_id);
    }
  }
});
```

### Inline Query Debounce & Cache (`inlineDebounceMiddleware`)

```javascript
import { inlineDebounceMiddleware } from 'telegix';

bot.use(inlineDebounceMiddleware({ windowMs: 300, cacheTtlMs: 60000 }));
```

### Automatic Chat Action (`chatActionMiddleware`)

Keeps the "typing" action active continuously during long asynchronous computations or AI streaming:

```javascript
import { chatActionMiddleware } from 'telegix';

bot.command('ai_summary', chatActionMiddleware('typing'), async (ctx) => {
  const result = await generateAiSummary(ctx.payload);
  await ctx.reply(result);
});
```

### Inline Query Pagination (`paginateInlineQuery`)

```javascript
import { InlineQueryResultBuilder, paginateInlineQuery } from 'telegix';

const inventory = [
  { id: '1', name: 'MacBook Pro', price: '$1999' },
  { id: '2', name: 'iPhone 16 Pro', price: '$999' },
  { id: '3', name: 'iPad Pro', price: '$799' },
];

bot.on('inline_query', async (ctx) => {
  await paginateInlineQuery(
    ctx,
    inventory,
    (item) =>
      InlineQueryResultBuilder.article(
        item.id,
        item.name,
        `<b>${item.name}</b>: ${item.price}`,
        { description: `Order ${item.name}` }
      ),
    { limit: 10 }
  );
});
```

---

## 📚 Complete Telegram API Client Method Reference (`bot.telegram` / `bot.api`)

The `Telegram` client exposes every official method of the Telegram Bot API:

### Updates & Webhooks
- `getUpdates(options?)` — Receive incoming updates using long polling.
- `setWebhook(url, options?)` — Specify a URL and receive incoming updates via outgoing webhook.
- `deleteWebhook(options?)` — Remove webhook integration.
- `getWebhookInfo()` — Get current webhook status.

### Account & Identity
- `getMe()` — Retrieve bot identity information (ID, username, can join groups, etc.).
- `logOut()` / `close()` — Log out from the cloud Bot API or close the local bot instance.
- `getMyName(extra?)` / `setMyName(name, extra?)` — Get or set bot name.
- `getMyDescription(extra?)` / `setMyDescription(description, extra?)` — Get or set bot description.
- `getMyShortDescription(extra?)` / `setMyShortDescription(shortDescription, extra?)` — Get or set short description.
- `getMyCommands(extra?)` / `setMyCommands(commands, extra?)` / `deleteMyCommands(extra?)` — Manage bot command menu list.
- `getMyDefaultAdministratorRights(extra?)` / `setMyDefaultAdministratorRights(rights, extra?)` — Manage administrator rights.
- `getChatMenuButton(extra?)` / `setChatMenuButton(extra?)` — Manage the chat menu button.

### Messages & Media Sending
- `sendMessage(chatId, text, extra?)`
- `forwardMessage(chatId, fromChatId, messageId, extra?)` / `forwardMessages(chatId, fromChatId, messageIds, extra?)`
- `copyMessage(chatId, fromChatId, messageId, extra?)` / `copyMessages(chatId, fromChatId, messageIds, extra?)`
- `sendPhoto(chatId, photo, extra?)`
- `sendAudio(chatId, audio, extra?)`
- `sendDocument(chatId, document, extra?)`
- `sendVideo(chatId, video, extra?)`
- `sendAnimation(chatId, animation, extra?)`
- `sendVoice(chatId, voice, extra?)`
- `sendVideoNote(chatId, videoNote, extra?)`
- `sendPaidMedia(chatId, starCount, media, extra?)`
- `sendMediaGroup(chatId, media, extra?)`
- `sendLocation(chatId, latitude, longitude, extra?)`
- `sendVenue(chatId, latitude, longitude, title, address, extra?)`
- `sendContact(chatId, phoneNumber, firstName, extra?)`
- `sendPoll(chatId, question, options, extra?)`
- `sendDice(chatId, extra?)`
- `sendChatAction(chatId, action, extra?)`
- `setMessageReaction(chatId, messageId, reaction, extra?)`
- `sendSticker(chatId, sticker, extra?)`
- `sendGame(chatId, gameShortName, extra?)`
- `sendInvoice(chatId, title, description, payload, currency, prices, extra?)`
- `sendGift(userId, giftId, extra?)`
- `sendEphemeralMessage(chatId, text, ephemeralParameters, extra?)`
- `sendMessageDraft(chatId, text, extra?)`
- `sendRichMessage(chatId, richMessage, extra?)`
- `sendRichMessageDraft(chatId, draft, extra?)`

### Streaming & Real-Time Engines
- `streamText(chatId, textStream, options?)` — Stream real-time tokens with adaptive edit throttling.
- `streamDraft(chatId, textStream, options?)` — Stream real-time message drafts into chat preview.

### Messages Editing & Deletion
- `editMessageText(chatId, messageId, inlineMessageId, text, extra?)`
- `editMessageCaption(chatId, messageId, inlineMessageId, caption, extra?)`
- `editMessageMedia(chatId, messageId, inlineMessageId, media, extra?)`
- `editMessageReplyMarkup(chatId, messageId, inlineMessageId, replyMarkup, extra?)`
- `editRichMessageText(chatId, messageId, richMessage, extra?)`
- `editRichMessageCaption(chatId, messageId, caption, extra?)`
- `deleteMessage(chatId, messageId)`
- `deleteMessages(chatId, messageIds)`
- `editMessageLiveLocation(latitude, longitude, extra?)` / `stopMessageLiveLocation(extra?)`
- `stopPoll(chatId, messageId, extra?)`

### Inline Mode & Mini Apps
- `answerInlineQuery(inlineQueryId, results, extra?)`
- `answerWebAppQuery(webAppQueryId, result)`
- `savePreparedInlineMessage(userId, result, extra?)` — Save prepared inline message for Mini App sharing (**Bot API 8.0+**).

### Payments & Telegram Stars
- `createInvoiceLink(title, description, payload, currency, prices, extra?)`
- `answerShippingQuery(shippingQueryId, ok, extra?)`
- `answerPreCheckoutQuery(preCheckoutQueryId, ok, extra?)`
- `refundStarPayment(userId, telegramPaymentChargeId, extra?)`
- `getStarTransactions(extra?)`

### Chat Moderation & Administration
- `getChat(chatId)`
- `getChatAdministrators(chatId)`
- `getChatMemberCount(chatId)` / `getChatMembersCount(chatId)`
- `getChatMember(chatId, userId)`
- `banChatMember(chatId, userId, extra?)`
- `unbanChatMember(chatId, userId, extra?)`
- `restrictChatMember(chatId, userId, permissions, extra?)`
- `promoteChatMember(chatId, userId, rights)`
- `setChatAdministratorCustomTitle(chatId, userId, customTitle)`
- `setChatPermissions(chatId, permissions, extra?)`
- `setChatTitle(chatId, title)`
- `setChatDescription(chatId, description)`
- `setChatPhoto(chatId, photo)` / `deleteChatPhoto(chatId)`
- `pinChatMessage(chatId, messageId, extra?)` / `unpinChatMessage(chatId, messageId)` / `unpinAllChatMessages(chatId)`
- `leaveChat(chatId)`
- `exportChatInviteLink(chatId)`
- `createChatInviteLink(chatId, extra?)`
- `editChatInviteLink(chatId, inviteLink, extra?)`
- `revokeChatInviteLink(chatId, inviteLink)`
- `approveChatJoinRequest(chatId, userId)`
- `declineChatJoinRequest(chatId, userId)`
- `verifyUser(userId, customDescription)`
- `verifyChat(chatId, customDescription)`
- `removeUserVerification(userId)`
- `removeChatVerification(chatId)`
- `getUserChatBoosts(chatId, userId)`
- `getBusinessConnection(businessConnectionId)`

### Stickers & Custom Emojis
- `getStickerSet(name)`
- `getCustomEmojiStickers(customEmojiIds)`
- `uploadStickerFile(userId, sticker, stickerFormat)`
- `createNewStickerSet(userId, name, title, stickers, extra?)`
- `addStickerToSet(userId, name, sticker)`
- `setStickerPositionInSet(sticker, position)`
- `deleteStickerFromSet(sticker)`
- `setStickerSetThumbnail(name, userId, thumbnail, format)`
- `setCustomEmojiStickerSetThumbnail(name, customEmojiId)`
- `setStickerSetTitle(name, title)`
- `deleteStickerSet(name)`

### Forum Topics Management
- `createForumTopic(chatId, name, extra?)`
- `editForumTopic(chatId, messageThreadId, extra?)`
- `closeForumTopic(chatId, messageThreadId)`
- `reopenForumTopic(chatId, messageThreadId)`
- `deleteForumTopic(chatId, messageThreadId)`
- `unpinAllForumTopicMessages(chatId, messageThreadId)`
- `editGeneralForumTopic(chatId, name)`
- `closeGeneralForumTopic(chatId)`
- `reopenGeneralForumTopic(chatId)`
- `hideGeneralForumTopic(chatId)`
- `unhideGeneralForumTopic(chatId)`

### Managed Bot Access Settings (Bot API 10.3)
- `getManagedBotAccessSettings(userId, extra?)`
- `setManagedBotAccessSettings(userId, settings, extra?)`
- `getUserPersonalChatMessages(userId, extra?)`

---

## 🟦 TypeScript Support

Telegix comes with zero-config TypeScript type declarations included in `index.d.ts`:

```typescript
import { Telegix, Context } from 'telegix';

interface SessionData {
  counter: number;
  selectedCity?: string;
}

interface CustomContext extends Context {
  session: SessionData;
}

const bot = new Telegix<CustomContext>(process.env.BOT_TOKEN!);

bot.command('count', async (ctx) => {
  ctx.session.counter = (ctx.session.counter || 0) + 1;
  await ctx.reply(`Count: ${ctx.session.counter}`);
});
```

---

---