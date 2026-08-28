/**
 * Astro emits the untouched source file for every image reached through a
 * `z.array(image())` content-collection field, alongside the optimised
 * variants it actually renders. Nothing links to those originals, but they
 * still ship — roughly 26MB of dead weight in this project.
 *
 * This pass deletes files under `dist/_astro` whose hashed filename appears
 * nowhere in the built output. Matching on the content-hashed basename means a
 * file is only removed when genuinely unreferenced.
 */

import { readdir, readFile, stat, unlink } from 'node:fs/promises';
import { join, extname, basename, relative } from 'node:path';

const DIST = 'dist';
const ASSETS = join(DIST, '_astro');
/** File types that can carry a reference to an asset. */
const TEXT = new Set(['.html', '.css', '.js', '.mjs', '.xml', '.json', '.txt']);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else out.push(path);
  }
  return out;
}

const all = await walk(DIST);

// Everything that could mention an asset, concatenated once.
const haystack = (
  await Promise.all(
    all
      .filter((path) => TEXT.has(extname(path)) && !path.startsWith(ASSETS + '\\') && !path.startsWith(ASSETS + '/'))
      .map((path) => readFile(path, 'utf8')),
  )
).join('\n');

// CSS and JS inside _astro can reference images too (e.g. background-image).
const assetText = (
  await Promise.all(
    all
      .filter((path) => (path.startsWith(ASSETS + '\\') || path.startsWith(ASSETS + '/')) && TEXT.has(extname(path)))
      .map((path) => readFile(path, 'utf8')),
  )
).join('\n');

const referenced = haystack + '\n' + assetText;

let removed = 0;
let bytes = 0;

for (const path of all) {
  if (!path.startsWith(ASSETS + '\\') && !path.startsWith(ASSETS + '/')) continue;
  if (TEXT.has(extname(path))) continue;

  const name = basename(path);
  if (referenced.includes(name)) continue;

  bytes += (await stat(path)).size;
  await unlink(path);
  removed += 1;
}

if (removed > 0) {
  console.log(
    `[prune] removed ${removed} unreferenced asset${removed === 1 ? '' : 's'} ` +
      `(${(bytes / 1024 / 1024).toFixed(1)} MB) from ${relative(process.cwd(), ASSETS)}`,
  );
}
