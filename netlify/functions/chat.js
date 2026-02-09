import path from 'path';
import { fileURLToPath } from 'url';
import { chatWithGemini } from '../../lib/gemini.js';
import { buildPortfolioContext } from '../../lib/portfolioContext.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// In Netlify Functions, files are bundled; resolve relative to function location
// Try multiple possible base paths
const getBasePath = () => {
  // Try relative to function location (for bundled functions)
  const funcBase = path.resolve(__dirname, '../..');
  // Fallback to process.cwd() (might be /var/task in Lambda)
  return funcBase;
};

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function handler(event, context) {
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
    const basePath = getBasePath();
    const portfolioContext = await buildPortfolioContext(messages, basePath);
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
