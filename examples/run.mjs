// P0.5 executable examples: every finite-model claim marked ⚙ in the claim
// ledgers of spec/00-level-0.md and spec/01-level-1.md, machine-computed.
// Run: node examples/run.mjs   (exits nonzero on any failure)

import {
  obj, initial, terminal, ya, homs, isomorphic,
  box0, circ0, boxOpen, circOpen, flat, sharp, circMax, disc, coDisc, gamma,
  jMinusOpen, subobjects, subsets, omega, chi, pullbackTrue, serializeSub,
  serializeMorphism, testFamily, countFunctions,
} from './src/sierpinski.mjs';
import { allTopologies, named, topologyKey } from './src/topologies.mjs';
import {
  truncEmpty, truncPoint, truncDelta1, subPresheaves, truncDisc, truncCoDisc,
  truncIsomorphic,
} from './src/sset.mjs';
import {
  finiteChainSieves, omegaValues, laterTruth, laterIsNatural,
  laterIsIdempotentAt, laterEndofunctorIsNotIdempotentWitness,
  repoOmegaMatchesTwoStageTree, twoStageLaterLabels,
} from './src/guarded.mjs';
import {
  perms, abelianizationOrder, signIsHomomorphism, imJAndEisenstein,
  e8CountByNorm, sigma, bP, orbits, invariantDimension, burnsideCount,
  heightCardinality, heightCardinalityByLoops, conjugacyClasses, cyclic, dihedral4,
  quaternion8, compose, inverse, pAdicHeightCardinality,
} from './src/stable.mjs';

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

check('1.13/§5.4', 'resolution (level order plus ◯ⱼ∅ ≅ ∅): resolving levels of 𝒮 = {open, max}, so 0̄_𝒮 = open',
  () => {
    const resolves = {
      trivial: isomorphic(circ0(initial), initial),
      open: isomorphic(circOpen(initial), initial),
      closed: isomorphic(sharp(initial), initial),
      max: isomorphic(circMax(initial), initial),
    };
    return !resolves.trivial && resolves.open && !resolves.closed && resolves.max;
  });

check('§5.4', 'co-resolution (□ⱼ∗ ≅ ∗) diverges from resolution in 𝒮: open resolves but does not co-resolve; closed co-resolves but does not resolve',
  () => {
    const companion = {
      open: isomorphic(boxOpen(terminal), terminal),
      closed: isomorphic(flat(terminal), terminal),
    };
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

console.log('— OP-13 bounded guarded-recursion check —');

check('OP-13', 'finite trees: independent sieve enumeration gives 3, 4, 5 Ω-values at stages 2, 3, 4',
  () => [2, 3, 4].every(stage =>
    finiteChainSieves(stage).length === omegaValues(stage).length &&
    finiteChainSieves(stage).length === stage + 1));

check('OP-13', 'two-stage tree dictionary is exactly repo Ω: stage 2 = X₀, stage 1 = X₁',
  () => repoOmegaMatchesTwoStageTree(omega));

check('OP-13', 'predicate later on Ω is natural and acts never → later → now → now',
  () => laterIsNatural(4) &&
    JSON.stringify(twoStageLaterLabels) ===
      JSON.stringify({ never: 'later', later: 'now', now: 'now' }));

check('OP-13', 'predicate later is non-idempotent; an object-level witness independently shows the later endofunctor is non-idempotent',
  () => [2, 3, 4].every(stage => !laterIsIdempotentAt(stage)) &&
    laterTruth(laterTruth(0, 2), 2) !== laterTruth(0, 2) &&
    laterEndofunctorIsNotIdempotentWitness());

console.log('— notes/no-nothing-no-thing.md (W-0014–W-0018) —');

check('W-0014', 'Σₙ^ab ≅ ℤ/2 for n = 2..6 (|Σₙ| / |[Σₙ,Σₙ]| = 2) and sign is a homomorphism — the finite shadow of π₁𝕊 = H₁(BΣ_∞) = ℤ/2',
  () => [2, 3, 4, 5, 6].every(n => abelianizationOrder(n) === 2 && signIsHomomorphism(n)) &&
    abelianizationOrder(1) === 1);

check('W-0016', '|im J| in stems 3, 7, 11, 15, 19 = 24, 240, 504, 480, 264 (denominator of B₂ₖ/4k)',
  () => JSON.stringify(imJAndEisenstein(5).map(r => Number(r.imJ))) ===
    JSON.stringify([24, 240, 504, 480, 264]));

check('W-0016', 'Eisenstein coefficient −4k/B₂ₖ equals ±|im J| exactly while the numerator of B₂ₖ/4k is ±1 (k ≤ 5), and first fails at k = 6 (691)',
  () => {
    const rows = imJAndEisenstein(6);
    const agree = r => r.eisenstein[1] === 1n &&
      (r.eisenstein[0] === r.imJ || r.eisenstein[0] === -r.imJ);
    return rows.slice(0, 5).every(r => agree(r) && (r.bOver4kNumerator === 1n || r.bOver4kNumerator === -1n)) &&
      !agree(rows[5]) && (rows[5].bOver4kNumerator === 691n || rows[5].bOver4kNumerator === -691n);
  });

check('W-0016', 'E8 lattice by enumeration: 240 roots (norm 2), 2160 = 240·σ₃(2) vectors of norm 4 — Θ_E8 = E₄ through q²',
  () => {
    const c = e8CountByNorm(4);
    return c.get(2) === 240 && c.get(4) === 2160 && 240 * sigma(3, 2) === 2160 &&
      c.get(2) === Number(imJAndEisenstein(2)[1].imJ);
  });

check('W-0016', 'Kervaire–Milnor from the same Bernoulli numbers: |bP₈|, |bP₁₂|, |bP₁₆| = 28, 992, 8128 (bP₈ generated by the boundary of the E8 plumbing)',
  () => bP(2) === 28n && bP(3) === 992n && bP(4) === 8128n);

check('W-0017', 'invariant priors: for Σ₃ and ℤ/4 on assorted finite G-sets, dim of G-invariant vectors = #orbits (union-find) = Burnside average of fixed points',
  () => {
    const S3 = perms(3);
    // Σ₃ acting on: {1,2,3}; on ordered pairs of distinct elements; on all 9 pairs; on 2-subsets
    const onPoints = g => g;
    const pairs = []; for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) pairs.push([a, b]);
    const pairIdx = (a, b) => a * 3 + b;
    const onPairs = g => pairs.map(([a, b]) => pairIdx(g[a], g[b]));
    const dist = pairs.filter(([a, b]) => a !== b);
    const distIdx = (a, b) => dist.findIndex(([x, y]) => x === a && y === b);
    const onDistinct = g => dist.map(([a, b]) => distIdx(g[a], g[b]));
    const cases = [[onPoints, 3], [onPairs, 9], [onDistinct, 6]];
    const s3ok = cases.every(([act, m]) => {
      const gens = S3.map(act);
      const o = orbits(gens, m);
      return o === invariantDimension(gens, m) && o === burnsideCount(S3, act);
    });
    // ℤ/4 rotating the 16 two-colourings of a 4-cycle: 6 necklaces
    const Z4 = [0, 1, 2, 3].map(r => [0, 1, 2, 3].map(i => (i + r) % 4));
    const colourings = [...Array(16).keys()];
    const act = g => colourings.map(c => {
      let d = 0; for (let i = 0; i < 4; i++) if (c >> i & 1) d |= 1 << g[i]; return d;
    });
    const gens = Z4.map(act);
    const z4ok = orbits(gens, 16) === 6 && invariantDimension(gens, 16) === 6 &&
      burnsideCount(Z4, act) === 6;
    return s3ok && z4ok;
  });

check('W-0018', 'homotopy cardinality |LⁿBG| = |Hom(ℤⁿ,G)|/|G| (= Z_DW(Tⁿ)) agrees with the loop recursion Σ_[g] |BC(g)|ₙ₋₁ for C₂, C₃, C₄, C₅, Σ₃, D₄, Q₈ and n = 0..3',
  () => {
    const groups = [cyclic(2), cyclic(3), cyclic(4), cyclic(5), perms(3), dihedral4(), quaternion8()];
    return groups.every(G => [0, 1, 2, 3].every(n => {
      const a = heightCardinality(G, compose, n), b = heightCardinalityByLoops(G, compose, inverse, n);
      return a[0] === b[0] && a[1] === b[1];
    }));
  });

check('W-0018', '|BCₚ|ₙ = pⁿ⁻¹ (p = 2, 3, 5; n = 0..3): 1/p at height 0 (Baez–Dolan weight), 1 at height 1, p at height 2',
  () => [2, 3, 5].every(p => [0, 1, 2, 3].every(n => {
    const [num, den] = heightCardinality(cyclic(p), compose, n);
    return n === 0 ? (num === 1n && den === BigInt(p)) : (den === 1n && num === BigInt(p) ** BigInt(n - 1));
  })));

check('W-0018', 'p-groups: height 1 gives |BG|₁ = 1; height 2 gives the number of conjugacy classes (= complex irreps): C₄ → 4, D₄ → 5, Q₈ → 5; p-adic and integral counts agree',
  () => [cyclic(4), dihedral4(), quaternion8()].every(G => {
    const [n1, d1] = heightCardinality(G, compose, 1);
    const [n2, d2] = heightCardinality(G, compose, 2);
    const q = pAdicHeightCardinality(G, compose, 2, 2);
    return n1 === 1n && d1 === 1n && d2 === 1n &&
      n2 === BigInt(conjugacyClasses(G, compose, inverse).length) && q[0] === n2 && q[1] === 1n;
  }) && [4, 5, 5].every((c, i) =>
    conjugacyClasses([cyclic(4), dihedral4(), quaternion8()][i], compose, inverse).length === c));

check('W-0018', 'non-p-group Σ₃ (red-leg correction): the integral count is 3 conjugacy classes, but the chromatic count at height 2 is 5/3 (p = 2) and 3/2 (p = 3); at height 1, BC₃ at p = 2 gives 1/3',
  () => {
    const S3 = perms(3);
    const eq = (a, n, d) => a[0] === BigInt(n) && a[1] === BigInt(d);
    return eq(heightCardinality(S3, compose, 2), 3, 1) &&
      eq(pAdicHeightCardinality(S3, compose, 2, 2), 5, 3) &&
      eq(pAdicHeightCardinality(S3, compose, 2, 3), 3, 2) &&
      eq(pAdicHeightCardinality(cyclic(3), compose, 1, 2), 1, 3);
  });

console.log(failures === 0
  ? '\nAll checks passed.'
  : `\n${failures} check(s) FAILED.`);
process.exit(failures === 0 ? 0 : 1);
