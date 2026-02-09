import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import dotenv from 'dotenv';
import { chatWithGemini } from './lib/gemini.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });

const PORT = 3001;
const apiKey = process.env.GEMINI_API_KEY;

function extractVisibleTextFromTsx(source) {
  // grab text nodes between tags: >text<
  const matches = source.matchAll(/>([^<>]+)</g);
  const lines = [];
  for (const m of matches) {
    const raw = (m[1] ?? '').replace(/\s+/g, ' ').trim();
    if (!raw) continue;
    // ignore obvious jsx leftovers
    if (raw === '{label}' || raw === '{question}' || raw === '{s}') continue;
    lines.push(raw);
  }

  // de-dupe while keeping order
  const seen = new Set();
  const unique = [];
  for (const l of lines) {
    const key = l.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(l);
  }

  return unique.join('\n');
}

async function buildPortfolioContext(messages) {
  const joined = (messages || []).map((m) => String(m?.content ?? '')).join(' ').toLowerCase();
  const chunks = [];

  // forge context: pull from the actual case study page
  if (joined.includes('forge')) {
    try {
      const forgePath = path.resolve(__dirname, 'pages', 'ForgeCaseStudy.tsx');
      const src = await fs.readFile(forgePath, 'utf8');
      const text = extractVisibleTextFromTsx(src);
      // keep context reasonably sized
      const clipped = text.length > 6000 ? `${text.slice(0, 6000)}\n…` : text;
      chunks.push(`forge page text (from pages/ForgeCaseStudy.tsx):\n${clipped}`);
    } catch (e) {
      console.error('failed to load forge context:', e);
    }
  }

  // mosaic context: pull from the actual case study page
  if (joined.includes('mosaic')) {
    try {
      const mosaicPath = path.resolve(__dirname, 'pages', 'MosaicCaseStudy.tsx');
      const src = await fs.readFile(mosaicPath, 'utf8');
      const text = extractVisibleTextFromTsx(src);
      const clipped = text.length > 6000 ? `${text.slice(0, 6000)}\n…` : text;
      chunks.push(`mosaic page text (from pages/MosaicCaseStudy.tsx):\n${clipped}`);
    } catch (e) {
      console.error('failed to load mosaic context:', e);
    }
  }

  return chunks.join('\n\n');
}

console.log('Loading .env from:', envPath);
if (apiKey) {
  const first = apiKey.substring(0, 6);
  const last = apiKey.length >= 4 ? apiKey.slice(-4) : '****';
  console.log('GEMINI_API_KEY: SET — verify in Google Cloud / ai.dev/rate-limit matches:', `${first}...${last}`);
} else {
  console.log('GEMINI_API_KEY: NOT SET');
}

const server = http.createServer(async (req, res) => {
  // Log every request so we can see if proxy is forwarding
  console.log('[server]', req.method, req.url);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check - open http://localhost:3001/api/health in browser to test
  if (req.method === 'GET' && (req.url === '/api/health' || req.url === '/health')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, message: 'Chat server is running' }));
    return;
  }

  // Accept both /api/chat and /chat (in case proxy rewrites path)
  const isChatRoute = req.url === '/api/chat' || req.url === '/chat' || (req.url && req.url.startsWith('/api/chat'));
  if (req.method !== 'POST' || !isChatRoute) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found', received: req.url }));
    return;
  }

  let body = '';
  req.on('data', (chunk) => { body += chunk; });
  req.on('end', async () => {
    console.log('Received request:', req.method, req.url);
    let messages;
    try {
      const parsed = JSON.parse(body);
      messages = Array.isArray(parsed.messages) ? parsed.messages : [];
      console.log('Parsed messages:', messages.length, 'messages');
    } catch (err) {
      console.error('Parse error:', err);
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON or messages array' }));
      return;
    }

    if (!apiKey) {
      console.error('API key not set!');
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'GEMINI_API_KEY not set. Add it to .env in the project root.' }));
      return;
    }

    try {
      console.log('Calling Gemini API...');
      const portfolioContext = await buildPortfolioContext(messages);
      const content = await chatWithGemini(messages, apiKey, portfolioContext);
      console.log('Got response, length:', content?.length || 0);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ content }));
    } catch (err) {
      console.error('Gemini API error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message || 'Chat request failed' }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Chat API running at http://localhost:${PORT}/api/chat`);
});
