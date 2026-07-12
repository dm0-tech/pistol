// Assembles the single-file artifact explorer/sierpinski.html from:
//   sierpinski.jsx  (readable source — edit THIS, then rebuild)
//   style.css
//   vendor/react(.dom).production.min.js  (React 18 UMD, vendored)
// Rebuild:  node explorer/build.mjs   (uses npx esbuild for the one-time
// JSX transpile; the produced html needs no network and no build tools).

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const read = f => readFileSync(join(here, f), 'utf8');

const compiled = execSync('npx --yes esbuild --loader=jsx --target=es2019', {
  input: read('sierpinski.jsx'),
  encoding: 'utf8',
  maxBuffer: 16 * 1024 * 1024,
});

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Sierpiński Explorer — pistol</title>
<!-- P0.4: single-file React artifact, zero infrastructure (plan N7).
     Fully self-contained: React 18 UMD is inlined below (its @license
     headers are preserved); no network needed. GENERATED from
     sierpinski.jsx by build.mjs — edit the .jsx, not this file.
     Math core mirrors examples/src/sierpinski.mjs; the spec is canonical
     (spec/00-level-0.md, spec/01-level-1.md). Explorer code: MIT. -->
<style>
${read('style.css').trim()}
</style>
</head>
<body>
<div id="root"></div>
<script>
${read('vendor/react.production.min.js').trim()}
</script>
<script>
${read('vendor/react-dom.production.min.js').trim()}
</script>
<script>
${compiled.trim()}
</script>
</body>
</html>
`;

writeFileSync(join(here, 'sierpinski.html'), html);
console.log(`wrote sierpinski.html (${(html.length / 1024).toFixed(0)} KiB)`);
