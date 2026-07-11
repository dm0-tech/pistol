// Grothendieck topologies on the walking arrow C = {a → b}, enumerated
// honestly from the axioms (maximality, stability, transitivity) — not from
// the spec's derived shortcuts. Spec claim: exactly four (01-level-1.md
// Prop 1.6).
//
// Data of C: objects a, b; morphisms id_a, id_b, u : a → b.
// A sieve on c is a set of morphisms with codomain c closed under
// precomposition. We represent sieves as sorted arrays of morphism names.

const morphisms = {
  id_a: { dom: 'a', cod: 'a' },
  id_b: { dom: 'b', cod: 'b' },
  u: { dom: 'a', cod: 'b' },
};

// compose(g, f) = g ∘ f where f : x → y, g : y → z.
function compose(g, f) {
  if (f === `id_${morphisms[g].dom}`) return g;
  if (g === `id_${morphisms[f].cod}`) return f;
  throw new Error(`non-composable: ${g} ∘ ${f}`);
}

const morphismsInto = c =>
  Object.keys(morphisms).filter(m => morphisms[m].cod === c);

const isSieve = (arr, c) =>
  arr.every(h =>
    morphisms[h].cod === c &&
    morphismsInto(morphisms[h].dom).every(f => arr.includes(compose(h, f))));

export function sievesOn(c) {
  const into = morphismsInto(c);
  const result = [];
  const n = into.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    const arr = into.filter((_, i) => mask & (1 << i)).sort();
    if (isSieve(arr, c)) result.push(arr);
  }
  return result;
}

const key = arr => JSON.stringify([...arr].sort());

// Pullback h*(R) for h : d → c, R a sieve on c: { f into d | h ∘ f ∈ R }.
function pullback(h, R) {
  const d = morphisms[h].dom;
  const rset = new Set(R);
  return morphismsInto(d).filter(f => rset.has(compose(h, f))).sort();
}

// A candidate topology J assigns to each object a set of sieves.
// Axioms: (max) maximal sieve ∈ J(c); (stab) S ∈ J(c), h : d → c ⇒
// h*S ∈ J(d); (trans) S ∈ J(c), R sieve on c with h*R ∈ J(dom h) for all
// h ∈ S ⇒ R ∈ J(c).
function isTopology(J) {
  for (const c of ['a', 'b']) {
    const maximal = morphismsInto(c).sort();
    if (!J[c].has(key(maximal))) return false;
    for (const Skey of J[c]) {
      const S = JSON.parse(Skey);
      for (const h of morphismsInto(c)) {
        if (!J[morphisms[h].dom].has(key(pullback(h, S)))) return false;
      }
      for (const R of sievesOn(c)) {
        const hyp = S.every(h => J[morphisms[h].dom].has(key(pullback(h, R))));
        if (hyp && !J[c].has(key(R))) return false;
      }
    }
  }
  return true;
}

// Enumerate all topologies: every assignment of sieve-subsets, filtered.
export function allTopologies() {
  const sievesA = sievesOn('a'), sievesB = sievesOn('b');
  const found = [];
  for (const SA of subsetsOf(sievesA)) {
    for (const SB of subsetsOf(sievesB)) {
      const J = { a: new Set(SA.map(key)), b: new Set(SB.map(key)) };
      if (isTopology(J)) found.push({ a: SA.map(key), b: SB.map(key) });
    }
  }
  return found;
}

function* subsetsOf(arr) {
  const n = arr.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    yield arr.filter((_, i) => mask & (1 << i));
  }
}

// The four named topologies of Prop 1.6, in the same representation.
// Sieves on a: ∅_a = [], M_a = [id_a]; on b: ∅_b = [], U = [u],
// M_b = [id_b, u].
const namedJ = (a, b) => ({ a: a.map(key), b: b.map(key) });
export const named = {
  J_triv: namedJ([['id_a']], [['id_b', 'u']]),
  J_open: namedJ([['id_a']], [['id_b', 'u'], ['u']]),
  J_closed: namedJ([['id_a'], []], [['id_b', 'u']]),
  J_all: namedJ([['id_a'], []], [['id_b', 'u'], ['u'], []]),
};

export const topologyKey = J =>
  JSON.stringify([[...J.a].sort(), [...J.b].sort()]);
