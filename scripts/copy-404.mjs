// GitHub Pages serves /404.html for any URL that has no file. Angular prerenders the
// not-found route to 404/index.html, so copy it into place after the build.
// Usage: node scripts/copy-404.mjs [outputDir]   (default: docs, the GitHub Pages folder)
import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.argv[2] ?? 'docs';
const source = join(outDir, '404', 'index.html');

if (!existsSync(source)) {
  console.error(`copy-404: ${source} not found; was the /404 route prerendered?`);
  process.exit(1);
}
copyFileSync(source, join(outDir, '404.html'));
console.log(`copy-404: wrote ${join(outDir, '404.html')}`);
