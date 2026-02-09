import { chatWithGemini } from '../../lib/gemini.js';
import { buildPortfolioContext } from '../../lib/portfolioContext.js';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not found', received: event.path }),
    };
  }

  let messages = [];
  try {
    const parsed = JSON.parse(event.body || '{}');
    messages = Array.isArray(parsed.messages) ? parsed.messages : [];
  } catch (err) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid JSON or messages array' }),
    };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'GEMINI_API_KEY not set. Add it in Netlify site settings → Environment variables.',
      }),
    };
  }

  try {
    // best-effort: add page text context, but never fail the request if context fails
    let portfolioContext = '';
    try {
      portfolioContext = await buildPortfolioContext(messages, process.cwd());
    } catch (ctxErr) {
      console.error('Portfolio context failed:', ctxErr);
    }

    const content = await chatWithGemini(messages, apiKey, portfolioContext);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ content }),
    };
  } catch (err) {
    console.error('Chat function error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || 'Chat request failed' }),
    };
  }
}
