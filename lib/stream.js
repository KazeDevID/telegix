/**
 * Telegix - Text Streaming Engine for Telegram Bots
 * Handles smooth real-time response streaming (LLM tokens, AI chats, live output)
 * with rate-limit protection, edit throttling, and live draft mode.
 * @module telegix/stream
 */

/**
 * Sleeps for the specified number of milliseconds
 * @param {number} ms
 * @returns {Promise<void>}
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Converts an arbitrary stream/iterable input into an AsyncIterable of string chunks
 * @param {AsyncIterable<string>|Iterable<string>|ReadableStream|Array<string>} input
 * @returns {AsyncIterable<string>}
 */
export async function* toTextStream(input) {
  if (!input) return;

  // Handle strings directly
  if (typeof input === 'string') {
    yield input;
    return;
  }

  // Handle web ReadableStream (e.g. fetch response.body, OpenAI / Gemini streams)
  if (typeof input.getReader === 'function') {
    const reader = input.getReader();
    const decoder = new TextDecoder();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (typeof value === 'string') {
          yield value;
        } else if (value) {
          yield decoder.decode(value, { stream: true });
        }
      }
    } finally {
      reader.releaseLock();
    }
    return;
  }

  // Handle AsyncIterable (e.g. ai sdk, openai stream, gemini stream)
  if (typeof input[Symbol.asyncIterator] === 'function') {
    for await (const chunk of input) {
      if (chunk === null || chunk === undefined) continue;
      if (typeof chunk === 'string') {
        yield chunk;
      } else if (typeof chunk?.text === 'string') {
        yield chunk.text;
      } else if (typeof chunk?.content === 'string') {
        yield chunk.content;
      } else if (chunk?.choices?.[0]?.delta?.content) {
        yield chunk.choices[0].delta.content;
      } else if (chunk?.candidates?.[0]?.content?.parts?.[0]?.text) {
        yield chunk.candidates[0].content.parts[0].text;
      } else {
        yield String(chunk);
      }
    }
    return;
  }

  // Handle standard synchronous Iterable (Array, Set, Generator)
  if (typeof input[Symbol.iterator] === 'function') {
    for (const chunk of input) {
      if (chunk !== null && chunk !== undefined) {
        yield String(chunk);
      }
    }
    return;
  }

  // Fallback for single object
  yield String(input);
}

/**
 * Stream text to a Telegram chat with rate-limit throttling and edit buffering
 * @param {object} telegram - Telegix Telegram API instance
 * @param {number|string} chatId - Target chat ID
 * @param {AsyncIterable<string>|Iterable<string>|ReadableStream|Array<string>} textStream - Text stream or token source
 * @param {object} [options]
 * @param {string} [options.initialPlaceholder='⏳ Thinking...'] - Initial placeholder text
 * @param {number} [options.intervalMs=600] - Throttle interval between message edits in milliseconds (default: 600ms)
 * @param {number} [options.minDeltaChars=1] - Minimum new characters before attempting an edit
 * @param {string} [options.parse_mode] - Parse mode for final message ('HTML', 'MarkdownV2', etc.)
 * @param {object} [options.reply_markup] - Inline keyboard to attach upon stream completion
 * @param {boolean} [options.useDraft=false] - Use live draft action (sendMessageDraft) instead of message editing
 * @param {AbortSignal} [options.signal] - AbortSignal to cancel streaming
 * @param {function} [options.onChunk] - Hook called when a new chunk is received: (currentFullText, chunk)
 * @param {function} [options.onEdit] - Hook called when Telegram message is edited: (messageId, currentText)
 * @returns {Promise<{ message_id?: number, text: string, done: boolean }>}
 */
export async function streamText(telegram, chatId, textStream, options = {}) {
  const {
    initialPlaceholder = '⏳ Thinking...',
    intervalMs = 600,
    minDeltaChars = 1,
    parse_mode,
    reply_markup,
    useDraft = false,
    signal,
    onChunk,
    onEdit,
    ...extra
  } = options;

  if (!telegram || typeof telegram.call !== 'function') {
    throw new Error('Telegix streamText: valid telegram API instance is required.');
  }
  if (!chatId) {
    throw new Error('Telegix streamText: chatId is required.');
  }

  let accumulatedText = '';
  let lastSentText = '';
  let messageId = null;
  let lastEditTime = 0;
  let draftId = useDraft ? Math.floor(Math.random() * 2147483647) + 1 : null;

  const sendMsg = (cid, txt, opt = {}) => {
    if (typeof telegram.sendMessage === 'function') {
      return telegram.sendMessage(cid, txt, opt);
    }
    return telegram.call('sendMessage', { chat_id: cid, text: txt, ...opt });
  };

  const editMsg = (cid, mid, txt, opt = {}) => {
    if (typeof telegram.editMessageText === 'function') {
      return telegram.editMessageText(cid, mid, null, txt, opt);
    }
    return telegram.call('editMessageText', { chat_id: cid, message_id: mid, text: txt, ...opt });
  };

  const sendDraftMsg = (cid, txt, opt = {}) => {
    if (typeof telegram.sendMessageDraft === 'function') {
      return telegram.sendMessageDraft(cid, txt, opt);
    }
    return telegram.call('sendMessageDraft', { chat_id: cid, text: txt, ...opt });
  };

  // Mode 1: Live Draft Streaming (Bot API live draft preview)
  if (useDraft) {
    for await (const chunk of toTextStream(textStream)) {
      if (signal?.aborted) break;
      accumulatedText += chunk;
      if (typeof onChunk === 'function') onChunk(accumulatedText, chunk);

      const now = Date.now();
      if (now - lastEditTime >= intervalMs && accumulatedText.length - lastSentText.length >= minDeltaChars) {
        lastEditTime = now;
        lastSentText = accumulatedText;
        try {
          await sendDraftMsg(chatId, accumulatedText, { draft_id: draftId, ...extra });
        } catch {
          // Non-critical, ignore transient draft update errors
        }
      }
    }

    // Finalize: send complete message to chat
    const finalMsg = await sendMsg(chatId, accumulatedText || '...', {
      parse_mode,
      reply_markup,
      ...extra,
    });
    return {
      message_id: finalMsg?.message_id,
      text: accumulatedText,
      done: true,
      message: finalMsg,
    };
  }

  // Mode 2: Real-time Message Edit Streaming
  // Step 1: Send placeholder message
  const initialMsg = await sendMsg(chatId, initialPlaceholder, {
    ...extra,
  });
  messageId = initialMsg?.message_id;

  try {
    for await (const chunk of toTextStream(textStream)) {
      if (signal?.aborted) break;
      accumulatedText += chunk;
      if (typeof onChunk === 'function') onChunk(accumulatedText, chunk);

      const now = Date.now();
      const timeSinceLastEdit = now - lastEditTime;
      const charDelta = accumulatedText.length - lastSentText.length;

      if (timeSinceLastEdit >= intervalMs && charDelta >= minDeltaChars) {
        lastEditTime = now;
        lastSentText = accumulatedText;
        try {
          await editMsg(chatId, messageId, accumulatedText);
          if (typeof onEdit === 'function') onEdit(messageId, accumulatedText);
        } catch (err) {
          // Ignore "message is not modified" errors from Telegram
          if (!err?.message?.includes('message is not modified')) {
            // If rate limited, back off slightly
            if (err?.parameters?.retry_after) {
              await sleep(err.parameters.retry_after * 1000);
            }
          }
        }
      }
    }

    // Step 2: Final message update with final text, parse_mode, and reply_markup
    const finalText = accumulatedText.trim() || ' ';
    if (finalText !== lastSentText || reply_markup || parse_mode) {
      try {
        await editMsg(chatId, messageId, finalText, {
          parse_mode,
          reply_markup,
          ...extra,
        });
      } catch (err) {
        if (!err?.message?.includes('message is not modified')) {
          // Try sending as fallback if edit failed
          // e.g. text formatting error
        }
      }
    }

    return {
      message_id: messageId,
      text: accumulatedText,
      done: true,
      message: initialMsg,
    };
  } catch (err) {
    // If stream fails, ensure we leave clean text if possible
    if (messageId && accumulatedText) {
      try {
        await telegram.editMessageText(chatId, messageId, null, accumulatedText);
      } catch {
        // Ignore fallback error
      }
    }
    throw err;
  }
}
