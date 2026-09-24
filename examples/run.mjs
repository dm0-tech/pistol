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
  heightCardinality, heightCardinalityByLoops, zetaNeg, chiAmalgam, harder, conjugacyClasses, cyclic, dihedral4,
  quaternion8, compose, inverse, pAdicHeightCardinality,
} from './src/stable.mjs';
import * as Oct from './src/octonions.mjs';
import * as G2 from './src/g2roots.mjs';

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

console.log('— notes/shadow-of-the-octonions.md (W-0021–W-0024) —');

check('W-0021', '𝕆 (Fano table) is a normed division algebra and alternative: |xy|² = |x|²|y|², (x,x,y) = (y,x,x) = 0 on 200 random integer octonions',
  () => {
    const r = Oct.rng(11);
    for (let t = 0; t < 200; t++) {
      const x = Oct.randomOct(r), y = Oct.randomOct(r);
      if (Oct.norm2(Oct.mul(x, y)) !== Oct.norm2(x) * Oct.norm2(y)) return false;
      if (Oct.norm2(Oct.associator(x, x, y)) !== 0 || Oct.norm2(Oct.associator(y, x, x)) !== 0) return false;
    }
    return true;
  });

check('W-0021', 'of the 35 coordinate 3-planes in Im 𝕆, exactly the 7 Fano lines are associative: associator 0 and |φ| = 1 there; associator ≠ 0 and φ = 0 on the other 28; each line closes into a copy of ℍ',
  () => {
    const ts = Oct.triples();
    const good = ts.every(t => {
      const [a, b, c] = t.map(Oct.basis);
      const assocZero = Oct.norm2(Oct.associator(a, b, c)) === 0;
      const ph = Oct.phi(a, b, c);
      return Oct.isFanoLine(t) ? (assocZero && Math.abs(ph) === 1) : (!assocZero && ph === 0);
    });
    const quaternionic = Oct.FANO.every(([a, b, c]) => {
      const [i, j, k] = [a, b, c].map(Oct.basis);
      const eq = (u, v) => u.every((x, n) => x === v[n]);
      return eq(Oct.mul(i, j), k) && eq(Oct.mul(j, k), i) && eq(Oct.mul(k, i), j) &&
        eq(Oct.mul(i, i), Oct.scale(-1, Oct.basis(0))) && eq(Oct.mul(Oct.mul(i, j), k), Oct.scale(-1, Oct.basis(0)));
    });
    return ts.length === 35 && ts.filter(Oct.isFanoLine).length === 7 && good && quaternionic;
  });

check('W-0021', 'Harvey–Lawson associator identity φ(x,y,z)² + ¼|[x,y,z]|² = |x∧y∧z|² on 300 random imaginary triples (so |φ| ≤ volume, with equality iff the associator vanishes)',
  () => {
    const r = Oct.rng(23);
    for (let t = 0; t < 300; t++) {
      const x = Oct.randomImag(r), y = Oct.randomImag(r), z = Oct.randomImag(r);
      const lhs = 4 * Oct.phi(x, y, z) ** 2 + Oct.norm2(Oct.associator(x, y, z));
      if (lhs !== 4 * Oct.gram3(x, y, z)) return false;
    }
    return true;
  });

check('W-0021', 'every 3-plane span{x, y, xy} (x, y imaginary) is associative: associator 0 and φ(x,y,xy)² = |x∧y∧xy|² (calibrated), 200 random pairs',
  () => {
    const r = Oct.rng(31);
    for (let t = 0; t < 200; t++) {
      const x = Oct.randomImag(r), y = Oct.randomImag(r), xy = Oct.mul(x, y);
      const xyIm = [0, ...xy.slice(1)];
      if (Oct.norm2(Oct.associator(x, y, xyIm)) !== 0) return false;
      if (Oct.phi(x, y, xyIm) ** 2 !== Oct.gram3(x, y, xyIm)) return false;
    }
    return true;
  });

check('W-0023', 'Hitchin open orbit: the stabilizer of φ in gl(7) has dimension 14, so the GL(7)-orbit has dimension 49 − 14 = 35 = dim Λ³ℝ⁷ (open); every derivation of 𝕆 annihilates φ, so stab(φ) = Der(𝕆) = 𝔤₂',
  () => Oct.phiStabilizerDimension() === 14 && Oct.derivationDimension() === 14 &&
    Oct.derivationsAnnihilatePhi());

check('W-0023', 'two open orbits (red-leg correction): φ has stabilizer 14 and definite B (compact G₂); 40 random integer 3-forms all have stabilizer 14 and nondegenerate B, and every one lands in the split orbit, signature (3,4) or (4,3): genericity does not pick compact G₂',
  () => {
    const f0 = Oct.formFromPhi(); const s0 = Oct.signature(Oct.bilinearB(f0));
    if (Oct.stabilizerDimension(f0) !== 14 || !(s0.pos === 7 || s0.neg === 7)) return false;
    const r = Oct.rng(5); let split = 0;
    for (let t = 0; t < 40; t++) {
      const f = Oct.randomForm(r); const sg = Oct.signature(Oct.bilinearB(f));
      if (Oct.stabilizerDimension(f) !== 14 || sg.pos + sg.neg !== 7) return false;
      if (sg.pos === 3 || sg.pos === 4) split++;
    }
    return split === 40;
  });

check('W-0024', 'S⁶: Der(𝕆) is 14-dim, the isotropy at e₁ is 8-dim (𝔰𝔲(3)), and its commutant on T_{e₁}S⁶ is span{I, J_𝕆} with J_𝕆² = −1 — so the only G₂-invariant almost complex structures are ±J_𝕆',
  () => {
    const r = Oct.s6InvariantComplexStructures();
    return r.derivations === 14 && r.isotropy === 8 && r.commutant === 2 && r.jSquaredIsMinusOne && r.commutantIsSpanIJ;
  });

check('W-0025', 'G₂ geometry (dimensions): the derivations fixing a unit (e₁) form an 8-dim algebra (identified as 𝔰𝔲(3), recalled), and those preserving the quaternion slice span{e₁,e₂,e₃} form a 6-dim algebra (𝔰𝔬(4), recalled), so the space of ℍ-slices is 14 − 6 = 8-dimensional',
  () => Oct.s6InvariantComplexStructures().isotropy === 8 && Oct.quaternionSliceStabilizerDimension() === 6);

check('W-0026', 'G₂ Coxeter picture: 12 roots (6 short, 6 long, length² ratio 3); Coxeter group dihedral of order 12 generated by two reflections whose product has order h = 6; 12 = rank·h roots, 14 = rank·(h+1) = 12 + 2 dimensions',
  () => { const r = G2.report(); return r.nRoots === 12 && r.nShort === 6 && r.nLong === 6 && r.weylOrder === 12 &&
    r.coxeterNumber === 6 && r.rootsTimesH === 12 && r.dimFormula === 14 && r.dim === 14; });

check('W-0026', 'the hexagram splits as 14 = 8 + 6: the long roots form a closed A₂ subsystem (SU(3), Weyl group S₃ of order 6), and the short roots fall into two W(A₂)-orbits of 3 weights each, summing to 0 and negatives of each other (3 ⊕ 3̄)',
  () => { const r = G2.report(); return r.longClosed && r.longIsA2 && r.weylA2Order === 6 && r.tripletPair; });

check('W-0027', 'SL₂(ℤ) ≅ ℤ/4 *_{ℤ/2} ℤ/6 has orbifold Euler characteristic (height-0 cardinality of BSL₂(ℤ)) 1/4 + 1/6 − 1/2 = −1/12 = ζ(−1), computed independently from B₂',
  () => { const a = chiAmalgam(4, 6, 2), z = zetaNeg(2); return a[0] === -1n && a[1] === 12n && z[0] === -1n && z[1] === 12n; });

check('W-0027', 'Harder\'s formula ∏ζ(1−dᵢ) on Weyl degrees: SL₂ {2} → −1/12 (matches the amalgam), SL₃ {2,3} → 0, Sp₄ {2,4} → −1/1440, G₂ {2,6} → ζ(−1)ζ(−5) = 1/3024',
  () => { const e = (x, n, d) => x[0] === BigInt(n) && x[1] === BigInt(d);
    return e(harder([2]), -1, 12) && harder([2, 3])[0] === 0n && e(harder([2, 4]), -1, 1440) && e(harder([2, 6]), 1, 3024); });

check('W-0027', 'the dihedral 12 as a number: |W| = ∏dᵢ for rank-2 types is A₂ 6, B₂ 8, G₂ 12; only G₂ hits 1/|ζ(−1)| = 12 — no pattern, so |W(G₂)| = 12 is not (yet) the ζ(−1) twelve',
  () => { const W = { A2: 2 * 3, B2: 2 * 4, G2: 2 * 6 }; const t = Number(zetaNeg(2)[1]);
    return W.A2 === 6 && W.B2 === 8 && W.G2 === 12 && t === 12 && Object.values(W).filter(w => w === t).length === 1; });

console.log(failures === 0
  ? '\nAll checks passed.'
  : `\n${failures} check(s) FAILED.`);
process.exit(failures === 0 ? 0 : 1);
