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

const PROJECT_PAGES = [
  { keywords: ['forge'], file: 'ForgeCaseStudy.tsx', label: 'Forge (UX/UI case study)' },
  { keywords: ['mosaic'], file: 'MosaicCaseStudy.tsx', label: 'Mosaic (UX/UI case study)' },
  { keywords: ['triunity', 'martial arts', 'mma'], file: 'Triunity.tsx', label: 'Triunity Martial Arts' },
  { keywords: ['signatures', 'signatures for sound', 'sfs', 'sound'], file: 'SignaturesForSound.tsx', label: 'Signatures for Sound' },
  { keywords: ['clover', 'barbershop', 'cxb', 'clover x'], file: 'CloverXBarbershop.tsx', label: 'Clover X Barbershop' },
  { keywords: ['la haine', 'lahaine', 'haine'], file: 'LaHaine.tsx', label: 'La Haine' },
  { keywords: ['broken yolk', 'brokenyolk'], file: 'BrokenYolk.tsx', label: 'The Broken Yolk' },
  { keywords: ['gearbox', 'gear box'], file: 'Gearbox.tsx', label: 'GEARBOX Magazine' },
];

const MAX_PROJECT_CHARS = 5500;
const MAX_TOTAL_CONTEXT_CHARS = 28000;

/**
 * @param {Array<{ content?: string }>} messages
 * @param {string} basePath - repo root (e.g. __dirname for server.js, process.cwd() for Netlify)
 */
export async function buildPortfolioContext(messages, basePath) {
  const root = basePath || process.cwd();
  const joined = (messages || []).map((m) => String(m?.content ?? '')).join(' ').toLowerCase();
  const chunks = [];

  // Always include a short project index so the AI knows what's on the site
  chunks.push(`portfolio project index (use as hard guideline; details come from project pages below when relevant):
- Case studies: Forge (UX/UI), Mosaic (UX/UI).
- Projects: Triunity Martial Arts (client branding), Signatures for Sound (client branding), Clover X Barbershop (client branding), La Haine (print design), The Broken Yolk (layout design), GEARBOX Magazine (layout design).`);

  let totalChars = chunks.join('\n\n').length;

  for (const { keywords, file, label } of PROJECT_PAGES) {
    if (totalChars >= MAX_TOTAL_CONTEXT_CHARS) break;
    const matches = keywords.some((k) => joined.includes(k));
    if (!matches) continue;
    try {
      const pagePath = path.resolve(root, 'pages', file);
      const src = await fs.readFile(pagePath, 'utf8');
      const text = extractVisibleTextFromTsx(src);
      const clipped = text.length > MAX_PROJECT_CHARS ? `${text.slice(0, MAX_PROJECT_CHARS)}\n…` : text;
      const block = `${label} page text (from pages/${file}):\n${clipped}`;
      if (totalChars + block.length > MAX_TOTAL_CONTEXT_CHARS) {
        const allowed = MAX_TOTAL_CONTEXT_CHARS - totalChars - 100;
        if (allowed > 500) chunks.push(block.slice(0, allowed) + '\n…');
      } else {
        chunks.push(block);
      }
      totalChars = chunks.join('\n\n').length;
    } catch (e) {
      console.error('failed to load context for', file, e);
    }
  }

  return chunks.join('\n\n');
}
