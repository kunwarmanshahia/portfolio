import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const rootDir = new URL('..', import.meta.url).pathname;

const sources = [
  path.join(rootDir, 'public', 'images'),
  rootDir,
];

async function convertPngToJpg(filePath) {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath, '.png');
  const outPath = path.join(dir, `${base}.jpg`);

  try {
    await sharp(filePath)
      .jpeg({ quality: 80 })
      .toFile(outPath);
    console.log(`Converted ${filePath} -> ${outPath}`);
  } catch (err) {
    console.error(`Failed to convert ${filePath}:`, err.message);
  }
}

async function walkAndConvert(startDir) {
  if (!fs.existsSync(startDir)) return;

  const entries = fs.readdirSync(startDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(startDir, entry.name);
    if (entry.isDirectory()) {
      await walkAndConvert(fullPath);
    } else if (entry.isFile() && fullPath.toLowerCase().endsWith('.png')) {
      await convertPngToJpg(fullPath);
    }
  }
}

async function main() {
  for (const dir of sources) {
    await walkAndConvert(dir);
  }
  console.log('Done converting PNGs to JPGs.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

