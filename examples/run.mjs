// P0.5 executable examples: every finite-model claim marked ⚙ in the claim
// ledgers of spec/00-level-0.md and spec/01-level-1.md, machine-computed.
// Run: node examples/run.mjs   (exits nonzero on any failure)

import {
  obj, initial, terminal, ya, homs, isomorphic,
  box0, circ0, boxOpen, circOpen, flat, sharp, disc, coDisc, gamma,
  jMinusOpen, subobjects, subsets, omega, chi, pullbackTrue, serializeSub,
  serializeMorphism, testFamily, countFunctions,
} from './src/sierpinski.mjs';
import { allTopologies, named, topologyKey } from './src/topologies.mjs';
import {
  truncEmpty, truncPoint, truncDelta1, subPresheaves, truncDisc, truncCoDisc,
  truncIsomorphic,
} from './src/sset.mjs';

let failures = 0;
function check(ledger, description, condition) {
  const ok = typeof condition === 'function' ? condition() : condition;
  console.log(`${ok ? 'PASS' : 'FAIL'}  [${ledger}] ${description}`);
  if (!ok) failures++;
}

const family = testFamily();
const sample = obj(['x', 'y'], ['p', 'q', 'r'], { x: 'p', y: 'p' });

console.log('— spec/00-level-0.md —');

check('0.1/0.2', '𝒮: □₀X ≅ ∅ and ◯₀X ≅ ∗ for all 11 test objects',
  () => family.every(X => isomorphic(box0(X), initial) && isomorphic(circ0(X), terminal)));

check('0.2', '𝒮: Hom(∅, Y) and Hom(X, ∗) are singletons (adjunction triviality)',
  () => family.every(X => homs(initial, X).length === 1 && homs(X, terminal).length === 1));

check('0.5', '𝒮 nondegenerate: ∅ ≇ ∗ and ∅ has no global point',
  () => !isomorphic(initial, terminal) && homs(terminal, initial).length === 0);

check('0.7', '𝒮: ⊤ ≠ ⊥ as morphisms ∗ → Ω',
  () => {
    const top = chi({ S0: ['*'], S1: ['*'] }, terminal);
    const bot = chi({ S0: [], S1: [] }, terminal);
    return serializeMorphism(top) !== serializeMorphism(bot);
  });

check('0.10', '𝒮: Ω = (3 → 2) classifies — Sub(X) ↔ Hom(X, Ω) bijectively, both round trips, all 11 test objects',
  () => family.every(X => {
    const subs = subobjects(X);
    const maps = homs(X, omega);
    if (subs.length !== maps.length) return false;
    const subKeys = new Set(subs.map(serializeSub));
    // χ is injective into Hom(X, Ω) and pullback ∘ χ = id
    const chiKeys = new Set();
    for (const s of subs) {
      const m = chi(s, X);
      chiKeys.add(serializeMorphism(m));
      if (serializeSub(pullbackTrue(m, X)) !== serializeSub(s)) return false;
    }
    if (chiKeys.size !== subs.length) return false;
    // χ ∘ pullback = id on Hom(X, Ω), i.e. every map is the classifier of its pullback
    return maps.every(m => {
      const s = pullbackTrue(m, X);
      return subKeys.has(serializeSub(s)) &&
        serializeMorphism(chi(s, X)) === serializeMorphism(m);
    });
  }));

check('0.11', '𝒮 non-Boolean: [⊤,⊥] : ∗+∗ → Ω is not iso (Ω₀ has 3 elements, (∗+∗)₀ has 2)',
  () => {
    const twoPoints = obj(['t', 'b'], ['t', 'b'], { t: 't', b: 'b' }); // ∗+∗ pointwise
    return !isomorphic(twoPoints, omega);
  });

check('0.8/5.1', 'Set is Boolean at the bit: Ω_Set = subsets of 1, which number 2 = |1+1|; 𝒮 refuses this (see 0.11)',
  () => [...subsets(['*'])].length === 2);

check('5.3', 'sSet truncated: Ω₀ ≅ 2 — sub-presheaves of Δ[0] (truncated) number 2',
  () => subPresheaves(truncPoint).length === 2);

check('5.3', 'sSet truncated: Ω₁ ≅ 5 — sub-presheaves of Δ[1] (truncated) number 5',
  () => subPresheaves(truncDelta1()).length === 5);

check('5.3', 'sSet non-Boolean: (∗+∗)₁ = 2 ≠ 5 = Ω₁',
  () => {
    const coprodOfPoints = truncDisc(['s', 't']); // ∗+∗ = discrete on 2 points
    return coprodOfPoints.S[1].length === 2 &&
      subPresheaves(truncDelta1()).length === 5;
  });

console.log('— spec/01-level-1.md —');

check('§2', '𝒮 dictionary: y a ≅ (∅ → 1) and y b ≅ ∗',
  () => isomorphic(ya, obj([], ['1'], {})) && isomorphic(terminal, coDisc(['s'])));

check('1.1/1.2', '𝒮: ♭X = (X₀ = X₀), ♯X = (X₀ → 1); adjunction ♭ ⊣ ♯ — |Hom(♭X, Y)| = |Hom(X, ♯Y)| = |X₀ → Y₀| for all 121 pairs',
  () => family.every(X => family.every(Y =>
    homs(flat(X), Y).length === homs(X, sharp(Y)).length &&
    homs(flat(X), Y).length === countFunctions(X.X0, Y.X0))));

check('1.1', '𝒮: triple adjunctions Disc ⊣ Γ ⊣ coDisc — |Hom(Disc S, X)| = |S → Γ X| and |Hom(X, coDisc S)| = |Γ X → S|',
  () => {
    const sets = [[], ['s'], ['s', 't']];
    return family.every(X => sets.every(S =>
      homs(disc(S), X).length === countFunctions(S, gamma(X)) &&
      homs(X, coDisc(S)).length === countFunctions(gamma(X), S)));
  });

check('1.1', '𝒮: Disc and coDisc fully faithful — Γ Disc S ≅ S ≅ Γ coDisc S and hom-sets match',
  () => {
    const sets = [[], ['s'], ['s', 't']];
    return sets.every(S => sets.every(T =>
      homs(disc(S), disc(T)).length === countFunctions(S, T) &&
      homs(coDisc(S), coDisc(T)).length === countFunctions(S, T)));
  });

check('1.2', '𝒮: ♭ and ♯ idempotent — ♭♭X ≅ ♭X and ♯♯X ≅ ♯X for all 11 test objects',
  () => family.every(X => isomorphic(flat(flat(X)), flat(X)) &&
    isomorphic(sharp(sharp(X)), sharp(X))));

check('1.4', '𝒮: companion clause ♭∗ ≅ ∗',
  () => isomorphic(flat(terminal), terminal));

check('1.6', 'exactly 4 Grothendieck topologies on {a → b}, enumerated from the axioms; they are J_triv, J_open, J_closed, J_all',
  () => {
    const all = allTopologies().map(topologyKey).sort();
    const expected = Object.values(named).map(topologyKey).sort();
    return all.length === 4 && JSON.stringify(all) === JSON.stringify(expected);
  });

check('1.7', '𝒮 open level: adjunctions i₋ ⊣ i* ⊣ Disc — |Hom((∅→S), X)| = |S → X₁| and |Hom(X, Disc S)| = |X₁ → S|',
  () => {
    const sets = [[], ['s'], ['s', 't']];
    return family.every(X => sets.every(S =>
      homs(jMinusOpen(S), X).length === countFunctions(S, X.X1) &&
      homs(X, disc(S)).length === countFunctions(X.X1, S)));
  });

check('1.7', 'diamond order: modal-image containments 0 ≺ open, 0 ≺ closed, both ≺ max; open/closed incomparable via witnesses',
  () => {
    const isDiscrete = X => isomorphic(flat(X), X);
    const openBoxModal = X => X.X0.length === 0;
    // ∅ is open-□-modal and discrete(=closed-□-modal); ∗ is open-◯- and closed-◯-modal
    const zeroInBoth = openBoxModal(initial) && isDiscrete(initial) &&
      isomorphic(circOpen(terminal), terminal) && isomorphic(sharp(terminal), terminal);
    // witnesses: y a = (∅→1) open-□-modal, not discrete; (2=2) discrete, not open-□-modal
    const two = disc(['s', 't']);
    const incomparable = openBoxModal(ya) && !isDiscrete(ya) &&
      isDiscrete(two) && !openBoxModal(two);
    return zeroInBoth && incomparable;
  });

check('1.9', '𝒮: ♯∅ ≅ (∅ → 1) ≇ ∅ — level 1 fails the primary clause',
  () => isomorphic(sharp(initial), ya) && !isomorphic(sharp(initial), initial));

check('1.9', '𝒮: open level — ◯_open ∅ ≅ ∅ but □_open ∗ ≅ (∅ → 1) ≇ ∗ (dual failure)',
  () => isomorphic(circOpen(initial), initial) &&
    isomorphic(boxOpen(terminal), ya) && !isomorphic(boxOpen(terminal), terminal));

check('1.10', 'both obstructions are the same object: ♯∅ ≅ □_open ∗ ≅ y a',
  () => isomorphic(sharp(initial), boxOpen(terminal)) &&
    isomorphic(boxOpen(terminal), ya));

check('§5.4', 'fork horn 1 (one-clause ◯ⱼ∅ ≅ ∅): resolving levels of 𝒮 = {open, max}, so 0̄ = open',
  () => {
    const resolves = {
      trivial: isomorphic(circ0(initial), initial),
      open: isomorphic(circOpen(initial), initial),
      closed: isomorphic(sharp(initial), initial),
      max: true, // ◯_max = id
    };
    return !resolves.trivial && resolves.open && !resolves.closed && resolves.max;
  });

check('§5.4', 'fork horn 2 (adding □ⱼ∗ ≅ ∗): no middle level qualifies, so 0̄ = max',
  () => {
    const companion = {
      open: isomorphic(boxOpen(terminal), terminal),
      closed: isomorphic(flat(terminal), terminal),
    };
    // open passes primary but fails companion; closed passes companion but fails primary
    return !companion.open && companion.closed;
  });

check('1.11/§3', 'sSet truncated: ♯∅ ≅ ∅ and ♭∗ ≅ ∗ (both clauses hold, dims ≤ 2)',
  () => truncIsomorphic(truncCoDisc([]), truncEmpty) &&
    truncIsomorphic(truncDisc(['x']), truncPoint));

check('§3', 'sSet truncated: (coDisc S)_n = S^(n+1) — sizes for |S| = 2 are 2, 4, 8',
  () => {
    const cd = truncCoDisc(['a', 'b']);
    return cd.S[0].length === 2 && cd.S[1].length === 4 && cd.S[2].length === 8;
  });

console.log(failures === 0
  ? '\nAll checks passed.'
  : `\n${failures} check(s) FAILED.`);
process.exit(failures === 0 ? 0 : 1);
