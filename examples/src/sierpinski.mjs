// The Sierpiński topos 𝒮 = Set^→, computed exactly.
//
// An object X is a set map ξ : X₀ → X₁ (spec 00-level-0.md §5.2 coordinates:
// X₀ = value at the terminal site object b, X₁ = value at a). Elements are
// strings; ξ is a plain record. Operations are finite and total on supplied
// objects. run.mjs exercises a stated bounded family; only the topology
// module enumerates its entire finite search space independently.

export const obj = (X0, X1, xi) => ({ X0, X1, xi });

export const initial = obj([], [], {});
export const terminal = obj(['*'], ['*'], { '*': '*' });
// The representable at the non-terminal site object: y a = (∅ → 1),
// the "pointless figure" of Remark 1.10.
export const ya = obj([], ['1'], {});

// --- basic enumeration -----------------------------------------------------

export function* allFunctions(dom, cod) {
  if (dom.length === 0) { yield {}; return; }
  if (cod.length === 0) return;
  const [head, ...rest] = dom;
  for (const f of allFunctions(rest, cod)) {
    for (const c of cod) yield { ...f, [head]: c };
  }
}

export function countFunctions(dom, cod) {
  return dom.length === 0 ? 1 : cod.length ** dom.length;
}

// Morphisms X → Y: pairs (f₀, f₁) with ξ_Y ∘ f₀ = f₁ ∘ ξ_X.
export function homs(X, Y) {
  const result = [];
  for (const f0 of allFunctions(X.X0, Y.X0)) {
    for (const f1 of allFunctions(X.X1, Y.X1)) {
      if (X.X0.every(x => Y.xi[f0[x]] === f1[X.xi[x]])) result.push({ f0, f1 });
    }
  }
  return result;
}

const isBijection = (f, dom, cod) =>
  dom.length === cod.length && new Set(dom.map(x => f[x])).size === cod.length;

export const isIso = (m, X, Y) =>
  isBijection(m.f0, X.X0, Y.X0) && isBijection(m.f1, X.X1, Y.X1);

export const isomorphic = (X, Y) => homs(X, Y).some(m => isIso(m, X, Y));

// Canonical serialization, for checking that two constructed morphisms of
// the same pair of objects are literally equal.
export const serializeMorphism = m =>
  JSON.stringify([Object.entries(m.f0).sort(), Object.entries(m.f1).sort()]);

// --- the four levels' modalities (spec 01-level-1.md Prop 1.7) -------------

const idOn = arr => Object.fromEntries(arr.map(x => [x, x]));

export const box0 = _X => initial;                       // □₀X = ∅
export const circ0 = _X => terminal;                     // ◯₀X = ∗
export const boxOpen = X => obj([], [...X.X1], {});      // □_open X = (∅ → X₁)
export const circOpen = X => obj([...X.X1], [...X.X1], idOn(X.X1)); // (X₁ = X₁)
export const flat = X => obj([...X.X0], [...X.X0], idOn(X.X0));     // ♭X = (X₀ = X₀)
export const sharp = X =>                                // ♯X = (X₀ → 1)
  obj([...X.X0], ['*'], Object.fromEntries(X.X0.map(x => [x, '*'])));
export const boxMax = X => X;
export const circMax = X => X;

// The level-1 triple Disc ⊣ Γ ⊣ coDisc : Set → 𝒮 and the open-level triple.
export const disc = S => obj([...S], [...S], idOn(S));   // Disc S = (S = S)
export const coDisc = S =>                               // coDisc S = (S → 1)
  obj([...S], ['1'], Object.fromEntries(S.map(x => [x, '1'])));
export const gamma = X => [...X.X0];                     // Γ X = X₀
export const jMinusOpen = S => obj([], [...S], {});      // open i₋ S = (∅ → S)

// --- subobjects and Ω (spec 00-level-0.md §5.2) -----------------------------

export function* subsets(arr) {
  if (arr.length === 0) { yield []; return; }
  const [head, ...rest] = arr;
  for (const s of subsets(rest)) { yield s; yield [head, ...s]; }
}

// Subobjects of X: (S₀ ⊆ X₀, S₁ ⊆ X₁) with ξ(S₀) ⊆ S₁.
export function subobjects(X) {
  const subs = [];
  for (const S1 of subsets(X.X1)) {
    const s1 = new Set(S1);
    for (const S0 of subsets(X.X0)) {
      if (S0.every(x => s1.has(X.xi[x]))) subs.push({ S0, S1 });
    }
  }
  return subs;
}

export const omega = obj(
  ['now', 'later', 'never'],
  ['yes', 'no'],
  { now: 'yes', later: 'yes', never: 'no' },
);

// Classifying map of a subobject (Prop 0.10).
export function chi(sub, X) {
  const s0 = new Set(sub.S0), s1 = new Set(sub.S1);
  const f0 = {}, f1 = {};
  for (const x of X.X0) {
    f0[x] = s0.has(x) ? 'now' : s1.has(X.xi[x]) ? 'later' : 'never';
  }
  for (const y of X.X1) f1[y] = s1.has(y) ? 'yes' : 'no';
  return { f0, f1 };
}

// Pullback of ⊤ = (now, yes) along a morphism X → Ω.
export const pullbackTrue = (m, X) => ({
  S0: X.X0.filter(x => m.f0[x] === 'now'),
  S1: X.X1.filter(y => m.f1[y] === 'yes'),
});

export const serializeSub = sub =>
  JSON.stringify([[...sub.S0].sort(), [...sub.S1].sort()]);

// --- a small exhaustive test family ----------------------------------------

// All maps between canonical labeled sets of cardinality 0, 1, or 2.
// This is a bounded presentation family, not a quotient by isomorphism;
// some entries therefore represent isomorphic arrow shapes.
export function testFamily() {
  const family = [];
  const zeros = [[], ['x'], ['x', 'y']];
  const ones = [[], ['p'], ['p', 'q']];
  for (const X0 of zeros) {
    for (const X1 of ones) {
      for (const xi of allFunctions(X0, X1)) family.push(obj(X0, X1, xi));
    }
  }
  return family; // 11 objects: ∅, y a–like, discrete, codiscrete, mixed
}
