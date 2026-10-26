// Read-only reproduction artifact accompanying the external critique.
// Target: reviewed commit a4deb2a. Convert these probes into permanent checks
// during critique increment 2, then remove this temporary script.
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, cpSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

// Usage: node reviews/critique-2026-10-26-probes.mjs /path/to/pistol
const root = resolve(process.argv[2] || process.cwd());
const { truncEmpty, truncPoint, truncDelta1, truncDisc, truncCoDisc,
  truncPi0, truncFlat, truncIsomorphic } = await import(
  pathToFileURL(join(root, 'examples/src/sset.mjs')).href);
const src = readFileSync(join(root, 'examples/src/sset.mjs'), 'utf8');
const mutantSource = src.replace(
  "for (const edge of X.S[1]) join(X.d[1][0][edge], X.d[1][1][edge]);",
  "for (const edge of X.S[1]) join(X.d[1][0][edge], X.d[1][1][edge]);\n" +
  "  // Deliberately wrong: merge every nonempty simplicial set to one component.\n" +
  "  if (X.S[0].length > 0) for (const x of X.S[0]) join(X.S[0][0], x);",
);
assert.notEqual(src, mutantSource);
const mutant = await import(`data:text/javascript;base64,${Buffer.from(mutantSource).toString('base64')}`);
const samples = [truncEmpty, truncPoint, truncDelta1(), truncDisc(['a', 'b'])];
assert(samples.every(X => samples.every(Y =>
  mutant.truncPi0ProductComparisonIsBijective(X, Y))));
assert.equal(mutant.truncPi0(truncDisc(['a', 'b'])).length, 1);
assert.equal(truncPi0(truncDisc(['a', 'b'])).length, 2);
console.log('PRODUCT TEST SENSITIVITY: collapsing all nonempty inputs to one component passes all 16 named product comparisons.');
console.log('CONTROL: the separate Disc(2) component-count assertion DOES reject this mutation; this is not a surviving full-suite mutation.');

const flatPoint = truncFlat(truncPoint);
const flatInterval = truncFlat(truncDelta1());
assert.equal(flatPoint.S[0].length, 1);
assert.equal(flatInterval.S[0].length, 2);
assert(!truncIsomorphic(flatPoint, flatInterval));
console.log('SEMANTIC BOUNDARY: point and interval have the same contractible homotopy type, but repository flat produces discrete sets of cardinalities 1 and 2.');

const X = truncCoDisc(['a', 'b']);
// Corrupt a face of one 2-simplex while leaving all vertices and edges intact.
const bad = structuredClone(X);
bad.d[2][0]['a|a|a'] = 'b|b';
function simplicialFaceLawFails(Y) {
  // d0 d0 = d0 d1 on 2-simplices.
  return Y.S[2].some(t => Y.d[1][0][Y.d[2][0][t]] !==
    Y.d[1][0][Y.d[2][1][t]]);
}
assert(!simplicialFaceLawFails(X));
assert(simplicialFaceLawFails(bad));
assert.deepEqual(truncPi0(X), truncPi0(bad));
console.log('MODEL VALIDITY: a broken d0 d0 = d0 d1 identity is invisible to pi0, as expected; current model code has no identity validator.');

const temp = mkdtempSync(join(tmpdir(), 'pistol-wiki-probe-'));
try {
  cpSync(join(root, 'wiki'), join(temp, 'wiki'), { recursive: true });
  // Existing relative links from wiki entries expect the rest of the repo.
  for (const dir of ['spec', 'notes', 'reviews', 'text', 'epics', 'examples']) {
    cpSync(join(root, dir), join(temp, dir), { recursive: true });
  }
  for (const file of ['OPEN-PROBLEMS.md', 'README.md', 'AGENTS.md',
    'objective-logic-roadmap.md', 'PHASE-0-PLAN.md', 'PHASE-0-ASSESSMENT.md']) {
    cpSync(join(root, file), join(temp, file));
  }
  const idx = join(temp, 'wiki/INDEX.md');
  const indexText = readFileSync(idx, 'utf8');
  const wrong = indexText.replace(
    '| sourced | source-audited | established | checked | Track H;',
    '| folklore | unverified | conjectural | disputed | Track H;',
  );
  assert.notEqual(wrong, indexText);
  writeFileSync(idx, wrong);
  const result = spawnSync(process.execPath, [join(temp, 'wiki/lint.mjs')], { encoding: 'utf8' });
  console.log('INDEX-DRIFT MUTATION:', result.stdout.trim());
  assert.equal(result.status, 0, result.stdout + result.stderr);
  console.log('CONFIRMED: incorrect provenance, verification, grade, and status for W-0001 in INDEX are not rejected.');
} finally {
  rmSync(temp, { recursive: true, force: true });
}
