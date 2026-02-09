import path from 'path';
import fs from 'fs/promises';

export function extractVisibleTextFromTsx(source) {
  const matches = source.matchAll(/>([^<>]+)</g);
  const lines = [];
  for (const m of matches) {
    const raw = (m[1] ?? '').replace(/\s+/g, ' ').trim();
    if (!raw) continue;
    if (raw === '{label}' || raw === '{question}' || raw === '{s}') continue;
    lines.push(raw);
  }
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

/**
 * @param {Array<{ content?: string }>} messages
 * @param {string} basePath - repo root (e.g. __dirname for server.js, process.cwd() for Netlify)
 */
export async function buildPortfolioContext(messages, basePath) {
  const root = basePath || process.cwd();
  const joined = (messages || []).map((m) => String(m?.content ?? '')).join(' ').toLowerCase();
  const chunks = [];

  if (joined.includes('forge')) {
    try {
      const forgePath = path.resolve(root, 'pages', 'ForgeCaseStudy.tsx');
      const src = await fs.readFile(forgePath, 'utf8');
      const text = extractVisibleTextFromTsx(src);
      const clipped = text.length > 6000 ? `${text.slice(0, 6000)}\n…` : text;
      chunks.push(`forge page text (from pages/ForgeCaseStudy.tsx):\n${clipped}`);
    } catch (e) {
      console.error('failed to load forge context:', e);
    }
  }

  if (joined.includes('mosaic')) {
    try {
      const mosaicPath = path.resolve(root, 'pages', 'MosaicCaseStudy.tsx');
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
