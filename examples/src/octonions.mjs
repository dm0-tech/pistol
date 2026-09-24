// Finite checks for notes/shadow-of-the-octonions.md (W-0021–W-0024).
// The octonions via the Fano plane, the associative 3-form φ, the associator,
// Harvey–Lawson's associator identity, and Hitchin's open-orbit dimension count.
// Integer/rational arithmetic throughout, except: the S⁶ commutant check
// (converts the exact derivation basis to floats, rounds ×1e6 to integers
// before an exact nullspace, and compares the final span test to 1e-9;
// all derivation-basis denominators are 1, so the rounding is exact here),
// and the metric-signature computation (Jacobi eigenvalues; only signs used).

// Oriented Fano lines: e_a e_b = e_c for (a, b, c) and its cyclic rotations.
export const FANO = [[1, 2, 3], [1, 4, 5], [1, 7, 6], [2, 4, 6], [2, 5, 7], [3, 4, 7], [3, 6, 5]];

// Multiplication table on basis e0..e7: [sign, index].
const TABLE = (() => {
  const T = [...Array(8)].map(() => new Array(8));
  for (let i = 0; i < 8; i++) { T[0][i] = [1, i]; T[i][0] = [1, i]; }
  for (let i = 1; i < 8; i++) T[i][i] = [-1, 0];
  for (const [a, b, c] of FANO) {
    for (const [x, y, z] of [[a, b, c], [b, c, a], [c, a, b]]) {
      T[x][y] = [1, z]; T[y][x] = [-1, z];
    }
  }
  return T;
})();

export function mul(x, y) {
  const r = new Array(8).fill(0);
  for (let i = 0; i < 8; i++) if (x[i]) for (let j = 0; j < 8; j++) if (y[j]) {
    const [s, k] = TABLE[i][j]; r[k] += s * x[i] * y[j];
  }
  return r;
}
export const add = (x, y) => x.map((v, i) => v + y[i]);
export const sub = (x, y) => x.map((v, i) => v - y[i]);
export const scale = (c, x) => x.map(v => c * v);
export const dot = (x, y) => x.reduce((s, v, i) => s + v * y[i], 0);
export const norm2 = x => dot(x, x);
export const basis = i => { const v = new Array(8).fill(0); v[i] = 1; return v; };
export const associator = (x, y, z) => sub(mul(mul(x, y), z), mul(x, mul(y, z)));
// The associative 3-form on Im 𝕆: φ(x, y, z) = ⟨x, yz⟩.
export const phi = (x, y, z) => dot(x, mul(y, z));

// Gram determinant |x ∧ y ∧ z|² (exact, integers).
export function gram3(x, y, z) {
  const g = [[dot(x, x), dot(x, y), dot(x, z)], [dot(y, x), dot(y, y), dot(y, z)], [dot(z, x), dot(z, y), dot(z, z)]];
  return g[0][0] * (g[1][1] * g[2][2] - g[1][2] * g[2][1]) -
    g[0][1] * (g[1][0] * g[2][2] - g[1][2] * g[2][0]) +
    g[0][2] * (g[1][0] * g[2][1] - g[1][1] * g[2][0]);
}

// Deterministic pseudo-random small-integer imaginary octonions.
export function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (1103515245 * s + 12345) >>> 0; return s; };
}
export function randomImag(r, M = 3) {
  const v = [0]; for (let i = 1; i < 8; i++) v.push((r() % (2 * M + 1)) - M); return v;
}
export function randomOct(r, M = 3) {
  const v = []; for (let i = 0; i < 8; i++) v.push((r() % (2 * M + 1)) - M); return v;
}

// Triples {a<b<c} ⊂ {1..7}.
export function triples() {
  const out = []; for (let a = 1; a <= 7; a++) for (let b = a + 1; b <= 7; b++) for (let c = b + 1; c <= 7; c++) out.push([a, b, c]);
  return out;
}
export const isFanoLine = t => FANO.some(L => [...L].sort().join() === [...t].sort().join());

// ---- Hitchin: the stabilizer of φ in gl(7) is 14-dimensional (G₂), so the
// GL(7)-orbit of φ has dimension 49 − 14 = 35 = dim Λ³(ℝ⁷)*: an open orbit.
// A ∈ gl(7) acts on 3-forms by (A·φ)(u,v,w) = −φ(Au,v,w) − φ(u,Av,w) − φ(u,v,Aw).
// We compute the rank of A ↦ A·φ (a 35 × 49 integer matrix) exactly.
export function phiStabilizerDimension() {
  const idx = [1, 2, 3, 4, 5, 6, 7];
  const e = i => basis(i);
  const phiIJK = (i, j, k) => phi(e(idx[i]), e(idx[j]), e(idx[k]));
  const rows = [];
  for (let i = 0; i < 7; i++) for (let j = i + 1; j < 7; j++) for (let k = j + 1; k < 7; k++) {
    const row = [];
    for (let p = 0; p < 7; p++) for (let q = 0; q < 7; q++) {
      // elementary matrix E_pq: E_pq e_q = e_p
      let v = 0;
      if (q === i) v -= phiIJK(p, j, k);
      if (q === j) v -= phiIJK(i, p, k);
      if (q === k) v -= phiIJK(i, j, p);
      row.push(v);
    }
    rows.push(row);
  }
  return 49 - rankRational(rows);
}
// Dimension of the derivation algebra of 𝕆 (should also be 14 = dim G₂).
export function derivationDimension() {
  // D ∈ gl(8) with D(e_i e_j) = D(e_i) e_j + e_i D(e_j) for all i, j.
  const rows = [];
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) for (let out = 0; out < 8; out++) {
    const row = new Array(64).fill(0);
    const [s, k] = TABLE[i][j];
    row[out * 8 + k] += s;                         // (D(e_i e_j))_out = s·D[out][k]
    for (let m = 0; m < 8; m++) {                  // −(D e_i · e_j)_out
      const [s2, k2] = TABLE[m][j]; if (k2 === out) row[m * 8 + i] -= s2;
    }
    for (let m = 0; m < 8; m++) {                  // −(e_i · D e_j)_out
      const [s3, k3] = TABLE[i][m]; if (k3 === out) row[m * 8 + j] -= s3;
    }
    rows.push(row);
  }
  return 64 - rankRational(rows);
}
function rankRational(rowsIn) {
  const M = rowsIn.map(r => r.map(v => [BigInt(v), 1n]));
  const g = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a || 1n; };
  const norm = ([n, d]) => { if (d < 0n) { n = -n; d = -d; } const k = g(n, d); return [n / k, d / k]; };
  const sub_ = ([a, b], [c, d]) => norm([a * d - c * b, b * d]);
  const mul_ = ([a, b], [c, d]) => norm([a * c, b * d]);
  const div_ = ([a, b], [c, d]) => norm([a * d, b * c]);
  let rank = 0; const cols = M[0].length;
  for (let c = 0; c < cols && rank < M.length; c++) {
    const p = M.findIndex((r, i) => i >= rank && r[c][0] !== 0n);
    if (p < 0) continue;
    [M[rank], M[p]] = [M[p], M[rank]];
    for (let r = 0; r < M.length; r++) {
      if (r !== rank && M[r][c][0] !== 0n) {
        const f = div_(M[r][c], M[rank][c]);
        M[r] = M[r].map((v, k) => sub_(v, mul_(f, M[rank][k])));
      }
    }
    rank++;
  }
  return rank;
}

// ---- S⁶ ⊂ Im 𝕆: the G₂-invariant almost complex structures are exactly ±J_𝕆.
// At p = e₁, the isotropy algebra is {D ∈ Der(𝕆) : D e₁ = 0} (≅ 𝔰𝔲(3), dim 8),
// acting on T_p = span(e₂..e₇). An invariant J must commute with it; we show the
// commutant is span{I, J_𝕆} (J_𝕆 v = e₁v), so J = aI + bJ_𝕆 with J² = −1 forces
// a = 0, b = ±1.
function nullspace(rowsIn, n) {
  // exact rational RREF; returns a basis of {v : Mv = 0} as arrays of [num, den]
  const g = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a || 1n; };
  const nm = ([a, b]) => { if (b < 0n) { a = -a; b = -b; } const k = g(a, b); return [a / k, b / k]; };
  const sb = ([a, b], [c, d]) => nm([a * d - c * b, b * d]);
  const ml = ([a, b], [c, d]) => nm([a * c, b * d]);
  const dv = ([a, b], [c, d]) => nm([a * d, b * c]);
  const M = rowsIn.map(r => r.map(v => (Array.isArray(v) ? v : [BigInt(v), 1n])));
  const pivots = []; let row = 0;
  for (let c = 0; c < n && row < M.length; c++) {
    const p = M.findIndex((r, i) => i >= row && r[c][0] !== 0n);
    if (p < 0) continue;
    [M[row], M[p]] = [M[p], M[row]];
    const inv = M[row][c];
    M[row] = M[row].map(v => dv(v, inv));
    for (let r = 0; r < M.length; r++) if (r !== row && M[r][c][0] !== 0n) {
      const f = M[r][c]; M[r] = M[r].map((v, k) => sb(v, ml(f, M[row][k])));
    }
    pivots.push(c); row++;
  }
  const free = [...Array(n).keys()].filter(c => !pivots.includes(c));
  return free.map(f => {
    const v = [...Array(n)].map(() => [0n, 1n]); v[f] = [1n, 1n];
    pivots.forEach((pc, i) => { v[pc] = nm([-M[i][f][0], M[i][f][1]]); });
    return v;
  });
}
function derivationBasis() {
  const rows = [];
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) for (let out = 0; out < 8; out++) {
    const row = new Array(64).fill(0);
    const [s, k] = TABLE[i][j];
    row[out * 8 + k] += s;
    for (let m = 0; m < 8; m++) { const [s2, k2] = TABLE[m][j]; if (k2 === out) row[m * 8 + i] -= s2; }
    for (let m = 0; m < 8; m++) { const [s3, k3] = TABLE[i][m]; if (k3 === out) row[m * 8 + j] -= s3; }
    rows.push(row);
  }
  return nullspace(rows, 64); // D[out][in] stored at out*8+in
}
export function s6InvariantComplexStructures() {
  const toNum = ([a, b]) => Number(a) / Number(b);
  const D = derivationBasis().map(v => v.map(toNum));
  // isotropy at e1: D e1 = 0  ⇔  column 1 vanishes; solve for combinations.
  const rows = [];
  for (let out = 0; out < 8; out++) rows.push(D.map(d => Math.round(d[out * 8 + 1] * 1e6)));
  const iso = nullspace(rows, D.length).map(c => c.map(toNum));
  const isoMats = iso.map(c => {
    const m = [...Array(6)].map(() => new Array(6).fill(0));
    for (let a = 0; a < 6; a++) for (let b = 0; b < 6; b++)
      m[a][b] = c.reduce((s, w, t) => s + w * D[t][(a + 2) * 8 + (b + 2)], 0);
    return m;
  });
  // commutant: X (6×6) with XA − AX = 0 for all isotropy A
  const crows = [];
  for (const A of isoMats) for (let a = 0; a < 6; a++) for (let b = 0; b < 6; b++) {
    const row = new Array(36).fill(0);
    for (let k = 0; k < 6; k++) { row[a * 6 + k] += A[k][b]; row[k * 6 + b] -= A[a][k]; }
    crows.push(row.map(v => Math.round(v * 1e6)));
  }
  const comm = nullspace(crows, 36).map(c => c.map(toNum));
  // J_𝕆 on T_{e1}: v ↦ e1·v
  const J = [...Array(6)].map(() => new Array(6).fill(0));
  for (let b = 0; b < 6; b++) { const w = mul(basis(1), basis(b + 2)); for (let a = 0; a < 6; a++) J[a][b] = w[a + 2]; }
  const Jsq = J.map((r, a) => r.map((_, b) => r.reduce((s, v, k) => s + v * J[k][b], 0)));
  const inSpan = X => {
    // X = aI + bJ ?  read a from X[0][0], b from pairing with J
    const a = X[0][0]; let bnum = 0, bden = 0;
    for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) { bnum += X[i][j] * J[i][j]; bden += J[i][j] * J[i][j]; }
    const b = bnum / bden;
    return X.every((r, i) => r.every((v, j) => Math.abs(v - (a * (i === j ? 1 : 0) + b * J[i][j])) < 1e-9));
  };
  const commMats = comm.map(c => [...Array(6)].map((_, a) => c.slice(a * 6, a * 6 + 6)));
  return {
    derivations: D.length, isotropy: iso.length, commutant: comm.length,
    jSquaredIsMinusOne: Jsq.every((r, a) => r.every((v, b) => v === (a === b ? -1 : 0))),
    commutantIsSpanIJ: commMats.every(inSpan),
  };
}

// ---- Two open orbits (red-leg correction). A 3-form on ℝ⁷ is a map
// (i<j<k) ↦ coefficient. Bryant/Hitchin: the open GL(7)-orbits are those of
// 3-forms whose bilinear form B(u,v)·vol = ι_uφ ∧ ι_vφ ∧ φ is nondegenerate;
// B definite ⇒ stabilizer compact G₂, B of signature (3,4)/(4,3) ⇒ split G₂.
const perm7Sign = arr => {
  // sign of the permutation sorting arr (distinct entries), else 0
  if (new Set(arr).size !== arr.length) return 0;
  let s = 1; const a = arr.slice();
  for (let i = 0; i < a.length; i++) for (let j = i + 1; j < a.length; j++) if (a[i] > a[j]) s = -s;
  return s;
};
export function formFromPhi() {
  const f = new Map();
  for (let i = 0; i < 7; i++) for (let j = i + 1; j < 7; j++) for (let k = j + 1; k < 7; k++) {
    const v = phi(basis(i + 1), basis(j + 1), basis(k + 1)); if (v) f.set(`${i},${j},${k}`, v);
  }
  return f;
}
export function randomForm(r, M = 3) {
  const f = new Map();
  for (let i = 0; i < 7; i++) for (let j = i + 1; j < 7; j++) for (let k = j + 1; k < 7; k++) {
    const v = (r() % (2 * M + 1)) - M; if (v) f.set(`${i},${j},${k}`, v);
  }
  return f;
}
const entries3 = f => [...f.entries()].map(([k, v]) => [k.split(',').map(Number), v]);
// value of the alternating form on (a, b, c) basis indices
const evalForm = (f, a, b, c) => {
  const s = perm7Sign([a, b, c]); if (!s) return 0;
  const key = [a, b, c].sort((x, y) => x - y).join(',');
  return s * (f.get(key) || 0);
};
export function bilinearB(f) {
  const E = entries3(f);
  const B = [...Array(7)].map(() => new Array(7).fill(0));
  for (let u = 0; u < 7; u++) for (let v = 0; v < 7; v++) {
    let tot = 0;
    // ι_{e_u}φ = Σ φ(u,a,b) e^{ab} (a<b), similarly for v; wedge with φ.
    for (let a = 0; a < 7; a++) for (let b = a + 1; b < 7; b++) {
      const x = evalForm(f, u, a, b); if (!x) continue;
      for (let c = 0; c < 7; c++) for (let d = c + 1; d < 7; d++) {
        const y = evalForm(f, v, c, d); if (!y) continue;
        for (const [[p, q, r2], z] of E) {
          const s = perm7Sign([a, b, c, d, p, q, r2]); if (s) tot += s * x * y * z;
        }
      }
    }
    B[u][v] = tot;
  }
  return B;
}
export function signature(B) {
  // Jacobi eigenvalue iteration (floats; only signs are used)
  const n = B.length; const A = B.map(r => r.slice());
  for (let sweep = 0; sweep < 100; sweep++) {
    let off = 0;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) off += A[p][q] ** 2;
    if (off < 1e-18) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      if (Math.abs(A[p][q]) < 1e-15) continue;
      const th = (A[q][q] - A[p][p]) / (2 * A[p][q]);
      const t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1));
      const c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < n; k++) { const akp = A[k][p], akq = A[k][q]; A[k][p] = c * akp - s * akq; A[k][q] = s * akp + c * akq; }
      for (let k = 0; k < n; k++) { const apk = A[p][k], aqk = A[q][k]; A[p][k] = c * apk - s * aqk; A[q][k] = s * apk + c * aqk; }
    }
  }
  const ev = A.map((r, i) => r[i]); const scaleM = Math.max(...ev.map(Math.abs)) || 1;
  return { pos: ev.filter(x => x > 1e-9 * scaleM).length, neg: ev.filter(x => x < -1e-9 * scaleM).length };
}
export function stabilizerDimension(f) {
  const rows = [];
  for (let i = 0; i < 7; i++) for (let j = i + 1; j < 7; j++) for (let k = j + 1; k < 7; k++) {
    const row = [];
    for (let p = 0; p < 7; p++) for (let q = 0; q < 7; q++) {
      let v = 0;
      if (q === i) v -= evalForm(f, p, j, k);
      if (q === j) v -= evalForm(f, i, p, k);
      if (q === k) v -= evalForm(f, i, j, p);
      row.push(v);
    }
    rows.push(row);
  }
  return 49 - rankRational(rows);
}

// Every derivation of 𝕆 annihilates φ (so stab(φ) ⊇ Der(𝕆); with equal
// dimensions 14, stab(φ) = Der(𝕆) = 𝔤₂). Exact rationals.
export function derivationsAnnihilatePhi() {
  const D = derivationBasis(); // entries [num, den] at out*8+in
  const val = ([a, b]) => [a, b];
  for (const d of D) {
    for (let i = 1; i < 8; i++) for (let j = i + 1; j < 8; j++) for (let k = j + 1; k < 8; k++) {
      // (D·φ)(e_i,e_j,e_k) = −φ(De_i,e_j,e_k) − φ(e_i,De_j,e_k) − φ(e_i,e_j,De_k), as a rational
      let num = 0n, den = 1n;
      const addR = (n2, d2) => { num = num * d2 + n2 * den; den = den * d2; };
      for (let m = 0; m < 8; m++) {
        const [n1, d1] = val(d[m * 8 + i]); if (n1) addR(-n1 * BigInt(phi(basis(m), basis(j), basis(k))), d1);
        const [n2, d2] = val(d[m * 8 + j]); if (n2) addR(-n2 * BigInt(phi(basis(i), basis(m), basis(k))), d2);
        const [n3, d3] = val(d[m * 8 + k]); if (n3) addR(-n3 * BigInt(phi(basis(i), basis(j), basis(m))), d3);
      }
      if (num !== 0n) return false;
    }
  }
  return D.length === 14;
}
