// Truncated simplicial sets, dimensions ≤ 2, per the approved P0.5 scope:
// the examples compute finite truncations only and never claim the infinite
// case (spec 00-level-0.md §5.3, 01-level-1.md §3).
//
// A truncated simplicial set is levels S[0], S[1], S[2] with face maps
// d[n][i] : S[n] → S[n-1] (0 ≤ i ≤ n) and degeneracies s[n][i] :
// S[n] → S[n+1] (0 ≤ i ≤ n). We only need small hand-built instances and
// the generic constructions Disc/coDisc, so no simplicial-identity engine.

export const truncEmpty = { S: [[], [], []], d: [null, [{}, {}], [{}, {}, {}]], s: [[{}], [{}, {}], null] };

// Δ[0] truncated: one simplex in each dimension (all degenerate above 0).
export const truncPoint = {
  S: [['0'], ['00'], ['000']],
  d: [null, [{ '00': '0' }, { '00': '0' }], [{ '000': '00' }, { '000': '00' }, { '000': '00' }]],
  s: [[{ '0': '00' }], [{ '00': '000' }, { '00': '000' }], null],
};

// Δ[1] truncated: n-simplices are order-preserving maps [n] → [1], written
// as digit strings. d[n][i] deletes position i; s[n][i] repeats position i.
function deleteAt(str, i) { return str.slice(0, i) + str.slice(i + 1); }
function repeatAt(str, i) { return str.slice(0, i + 1) + str[i] + str.slice(i + 1); }

function monotoneStrings(n, targets) {
  // order-preserving maps [n] → targets (targets an ordered list of digits)
  const result = [];
  const build = (prefix, minIdx) => {
    if (prefix.length === n + 1) { result.push(prefix); return; }
    for (let t = minIdx; t < targets.length; t++) build(prefix + targets[t], t);
  };
  build('', 0);
  return result;
}

export function truncDelta1() {
  const S = [0, 1, 2].map(n => monotoneStrings(n, ['0', '1']));
  const d = [null, [], []];
  const s = [[], [], null];
  for (let n = 1; n <= 2; n++) {
    for (let i = 0; i <= n; i++) {
      d[n][i] = Object.fromEntries(S[n].map(x => [x, deleteAt(x, i)]));
    }
  }
  for (let n = 0; n <= 1; n++) {
    for (let i = 0; i <= n; i++) {
      s[n][i] = Object.fromEntries(S[n].map(x => [x, repeatAt(x, i)]));
    }
  }
  return { S, d, s };
}

// Sub-presheaves of a truncated simplicial set: level-wise subsets closed
// under ALL structure maps (faces and degeneracies).
export function subPresheaves(X) {
  const subs = [];
  const levels = X.S;
  for (const T0 of subsets(levels[0])) {
    for (const T1 of subsets(levels[1])) {
      for (const T2 of subsets(levels[2])) {
        if (closed(X, [T0, T1, T2])) subs.push([T0, T1, T2]);
      }
    }
  }
  return subs;
}

function closed(X, T) {
  const sets = T.map(t => new Set(t));
  for (let n = 1; n <= 2; n++) {
    for (let i = 0; i <= n; i++) {
      for (const x of T[n]) if (!sets[n - 1].has(X.d[n][i][x])) return false;
    }
  }
  for (let n = 0; n <= 1; n++) {
    for (let i = 0; i <= n; i++) {
      for (const x of T[n]) if (!sets[n + 1].has(X.s[n][i][x])) return false;
    }
  }
  return true;
}

function* subsets(arr) {
  const n = arr.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    yield arr.filter((_, i) => mask & (1 << i));
  }
}

// Level-1 constructions, truncated (spec 01-level-1.md §3):
// Disc S = constant; (coDisc S)_n = S^(n+1), realized as length-(n+1)
// tuples (strings over the elements of S separated by '|').
export function truncDisc(S) {
  const idmap = Object.fromEntries(S.map(x => [x, x]));
  return {
    S: [[...S], [...S], [...S]],
    d: [null, [idmap, idmap], [idmap, idmap, idmap]],
    s: [[{ ...idmap }], [{ ...idmap }, { ...idmap }], null],
  };
}

export function truncCoDisc(S) {
  const tuples = n => {
    let acc = [''];
    for (let k = 0; k <= n; k++) acc = acc.flatMap(t => S.map(x => (t ? t + '|' : '') + x));
    return acc;
  };
  const levels = [tuples(0), tuples(1), tuples(2)];
  const split = t => (t === '' ? [] : t.split('|'));
  const d = [null, [], []];
  const s = [[], [], null];
  for (let n = 1; n <= 2; n++) {
    for (let i = 0; i <= n; i++) {
      d[n][i] = Object.fromEntries(levels[n].map(t => {
        const parts = split(t);
        parts.splice(i, 1);
        return [t, parts.join('|')];
      }));
    }
  }
  for (let n = 0; n <= 1; n++) {
    for (let i = 0; i <= n; i++) {
      s[n][i] = Object.fromEntries(levels[n].map(t => {
        const parts = split(t);
        parts.splice(i, 0, parts[i]);
        return [t, parts.join('|')];
      }));
    }
  }
  return { S: levels, d, s };
}

// Isomorphism of truncated simplicial sets, checked level-wise with
// commutation against all structure maps (exhaustive; fine at these sizes).
export function truncIsomorphic(X, Y) {
  const fits = (n) => X.S[n].length === Y.S[n].length;
  if (![0, 1, 2].every(fits)) return false;
  for (const f0 of bijections(X.S[0], Y.S[0])) {
    for (const f1 of bijections(X.S[1], Y.S[1])) {
      for (const f2 of bijections(X.S[2], Y.S[2])) {
        if (commutes(X, Y, [f0, f1, f2])) return true;
      }
    }
  }
  return false;
}

function* bijections(dom, cod) {
  if (dom.length === 0) { yield {}; return; }
  const [head, ...rest] = dom;
  for (let i = 0; i < cod.length; i++) {
    const remaining = cod.filter((_, j) => j !== i);
    for (const f of bijections(rest, remaining)) yield { ...f, [head]: cod[i] };
  }
}

function commutes(X, Y, f) {
  for (let n = 1; n <= 2; n++) {
    for (let i = 0; i <= n; i++) {
      for (const x of X.S[n]) {
        if (Y.d[n][i][f[n][x]] !== f[n - 1][X.d[n][i][x]]) return false;
      }
    }
  }
  for (let n = 0; n <= 1; n++) {
    for (let i = 0; i <= n; i++) {
      for (const x of X.S[n]) {
        if (Y.s[n][i][f[n][x]] !== f[n + 1][X.s[n][i][x]]) return false;
      }
    }
  }
  return true;
}
