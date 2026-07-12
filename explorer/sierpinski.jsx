const { useState, useMemo } = React;

/* ============================ math core ============================
   An object of 𝒮 = Set^→ is {now:[ids], later:[ids], xi:{nowId: laterId}}.
   Mirrors examples/src/sierpinski.mjs; the spec is canonical. */

const O = (now, later, xi) => ({ now, later, xi });
const EMPTY = O([], [], {});
const POINT = O(['•'], ['•'], { '•': '•' });
const YA = O([], ['p'], {});          // the pointless figure y a = (∅ → 1)

function allFunctions(dom, cod) {
  if (dom.length === 0) return [{}];
  if (cod.length === 0) return [];
  const [h, ...rest] = dom;
  return allFunctions(rest, cod).flatMap(f => cod.map(c => ({ ...f, [h]: c })));
}
function homs(X, Y) {
  return allFunctions(X.now, Y.now).flatMap(f0 =>
    allFunctions(X.later, Y.later)
      .filter(f1 => X.now.every(x => Y.xi[f0[x]] === f1[X.xi[x]]))
      .map(f1 => ({ f0, f1 })));
}
const isBij = (f, dom, cod) =>
  dom.length === cod.length && new Set(dom.map(x => f[x])).size === cod.length;
const isomorphic = (X, Y) =>
  homs(X, Y).some(m => isBij(m.f0, X.now, Y.now) && isBij(m.f1, X.later, Y.later));

const idOn = a => Object.fromEntries(a.map(x => [x, x]));
const MOD = {
  box0:     X => EMPTY,
  circ0:    X => POINT,
  boxOpen:  X => O([], [...X.later], {}),
  circOpen: X => O([...X.later], [...X.later], idOn(X.later)),
  flat:     X => O([...X.now], [...X.now], idOn(X.now)),
  // ♯X = coDisc(X₀) = (X₀ → 1): the lump is there even when X₀ = ∅,
  // which is exactly why ♯∅ = y a ≠ ∅ (spec Prop 1.9).
  sharp:    X => O([...X.now], ['•'], Object.fromEntries(X.now.map(x => [x, '•']))),
  id:       X => X,
};

const LEVELS = {
  trivial: { key: 'trivial', name: 'level 0 (trivial)', box: MOD.box0, circ: MOD.circ0,
             boxF: '□₀X = ∅', circF: '◯₀X = ∗',
             blurb: 'The ground floor: every object hangs between nothing and unity.' },
  open:    { key: 'open', name: 'the open level', box: MOD.boxOpen, circ: MOD.circOpen,
             boxF: '□X = (∅ → X₁)', circF: '◯X = (X₁ = X₁)',
             blurb: 'Sees only the future: strip to the pure-future part, or project onto it.' },
  closed:  { key: 'closed', name: 'rung 1 (closed): ♭ ⊣ ♯', box: MOD.flat, circ: MOD.sharp,
             boxF: '♭X = (X₀ = X₀)', circF: '♯X = (X₀ → 1)',
             blurb: 'Sees only the points: freeze them (discrete) or merge their future (codiscrete).' },
  max:     { key: 'max', name: 'the maximal level', box: MOD.id, circ: MOD.id,
             boxF: '□X = X', circF: '◯X = X',
             blurb: 'The whole universe as its own level; nothing is opposed.' },
};

const PRESETS = {
  '∅ (nothing)': EMPTY,
  '∗ (unity)': POINT,
  'y a (pointless figure)': YA,
  'discrete 2': O(['a', 'b'], ['a', 'b'], { a: 'a', b: 'b' }),
  'codiscrete 2': O(['a', 'b'], ['•'], { a: '•', b: '•' }),
  'a merge': O(['a', 'b', 'c'], ['p', 'q'], { a: 'p', b: 'p', c: 'q' }),
  'Ω (the truth values)': O(['now', 'later', 'never'], ['yes', 'no'],
                            { now: 'yes', later: 'yes', never: 'no' }),
};

const isValid = X => X.now.every(x => X.later.includes(X.xi[x]));
const MAXSIZE = 5;

/* ============================ story ============================ */

const STORY = [
  { title: 'Welcome: a universe of two-stage things',
    text: 'Each object here is a set of things existing NOW (amber), a set existing LATER (indigo), and arrows saying what each present thing becomes. Build your own on the left, or follow this story with Next.',
    preset: 'a merge', level: 'trivial' },
  { title: '1 · Nothing and unity',
    text: 'Every universe contains ∅ (nothing) and ∗ (unity), and every object hangs on a thread between them: ∅ → X → ∗. That is level 0, the first opposition. The triptych below shows your object suspended between its two level-0 moments.',
    preset: 'a merge', level: 'trivial' },
  { title: '2 · The two completions of a point',
    text: 'Rung 1 looks at the POINTS of X — what you can see now — and completes them two opposite ways: ♭ freezes them (later = a copy of now) and ♯ merges them (later = one lump). Watch both applied to your object.',
    preset: 'a merge', level: 'closed' },
  { title: '3 · Discrete and codiscrete',
    text: 'A thing equal to its frozen completion is DISCRETE (badge below lights up). Try the "discrete 2" and "codiscrete 2" presets and watch the ♭X ≅ X and ♯X ≅ X badges flip.',
    preset: 'discrete 2', level: 'closed' },
  { title: '4 · The pointless figure',
    text: 'This object exists later but not now: no points at all, yet not nothing. The universe of shapes (sSet) has no such thing — every edge has a vertex. This little object is about to decide where sublation happens.',
    preset: 'y a (pointless figure)', level: 'closed' },
  { title: '5 · Nothing does not stay nothing',
    text: 'Level j RESOLVES level 0 when ◯ⱼ∅ ≅ ∅ — "nothing stays nothing". Apply rung 1 to ∅: the codiscrete completion ♯∅ is the pointless figure, NOT ∅. Rung 1 fails. Becoming leaks.',
    preset: '∅ (nothing)', level: 'closed' },
  { title: '6 · The open level resolves',
    text: 'Now the mirror level, which sees only the future: ◯∅ = ∅ — nothing stays nothing. It resolves level 0 (and note: its □∗ is the pointless figure again — same object, other role — so it fails the mirror condition, co-resolution. The definition is one-clause; that is Lawvere\u2019s, confirmed from the sources).',
    preset: '∅ (nothing)', level: 'open' },
  { title: '7 · The Aufhebung',
    text: 'The diamond shows ALL four levels of this universe. Resolvers of level 0: the open level and the top. The SMALLEST is the open level — so the Aufhebung 0̄ (starred) is the open level, strictly below rung 1. In sSet, where every figure has a point, the Aufhebung is rung 1 itself. Where sublation happens measures whether the future can outrun the present.',
    preset: '∅ (nothing)', level: 'open' },
];

/* ============================ drawing ============================ */

function ObjectSVG({ obj, w = 300, h = 170, editable, sel, onSelect, caption }) {
  const pos = (arr, y) => Object.fromEntries(
    arr.map((id, i) => [id, { x: (w / (arr.length + 1)) * (i + 1), y }]));
  const nowPos = pos(obj.now, 46), laterPos = pos(obj.later, 128);
  const R = 15;
  return (
    <svg width={w} height={h} style={{ maxWidth: '100%' }}>
      <text className="stagelabel" x={8} y={50}>now</text>
      <text className="stagelabel" x={8} y={132}>later</text>
      {obj.now.length === 0 && <text x={w / 2 - 5} y={51} fill="#d6d3d1" fontSize="18">∅</text>}
      {obj.later.length === 0 && <text x={w / 2 - 5} y={133} fill="#d6d3d1" fontSize="18">∅</text>}
      {obj.now.map(x => {
        const t = obj.xi[x] !== undefined && laterPos[obj.xi[x]];
        return t
          ? <line key={'l' + x} x1={nowPos[x].x} y1={nowPos[x].y + R} x2={t.x} y2={t.y - R}
                  stroke="#a8a29e" strokeWidth="1.6" markerEnd="url(#arr)" />
          : <line key={'l' + x} x1={nowPos[x].x} y1={nowPos[x].y + R} x2={nowPos[x].x} y2={110}
                  stroke="#fca5a5" strokeWidth="1.6" strokeDasharray="4 3" />;
      })}
      <defs>
        <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 z" fill="#a8a29e" />
        </marker>
      </defs>
      {obj.now.map(x => (
        <g key={x} onClick={() => editable && onSelect({ stage: 'now', id: x })}
           style={{ cursor: editable ? 'pointer' : 'default' }}>
          <circle cx={nowPos[x].x} cy={nowPos[x].y} r={R} fill="var(--now-bg)"
                  stroke={sel && sel.stage === 'now' && sel.id === x ? 'var(--now-ring)' : 'var(--now)'}
                  strokeWidth={sel && sel.stage === 'now' && sel.id === x ? 3.5 : 1.5} />
          <text x={nowPos[x].x} y={nowPos[x].y + 4.5} textAnchor="middle" fill="var(--now)">{x}</text>
        </g>
      ))}
      {obj.later.map(y => (
        <g key={y} onClick={() => editable && onSelect({ stage: 'later', id: y })}
           style={{ cursor: editable ? 'pointer' : 'default' }}>
          <circle cx={laterPos[y].x} cy={laterPos[y].y} r={R} fill="var(--later-bg)"
                  stroke={sel && sel.stage === 'later' && sel.id === y ? 'var(--later-ring)' : 'var(--later)'}
                  strokeWidth={sel && sel.stage === 'later' && sel.id === y ? 3.5 : 1.5} />
          <text x={laterPos[y].x} y={laterPos[y].y + 4.5} textAnchor="middle" fill="var(--later)">{y}</text>
        </g>
      ))}
      {caption && <text x={w / 2} y={h - 6} textAnchor="middle" fill="var(--muted)" fontStyle="italic">{caption}</text>}
    </svg>
  );
}

function Diamond({ level, setLevel, resolves, coresolves }) {
  const nodes = {
    max: { x: 170, y: 30 }, open: { x: 60, y: 110 },
    closed: { x: 280, y: 110 }, trivial: { x: 170, y: 190 },
  };
  const edges = [['trivial', 'open'], ['trivial', 'closed'], ['open', 'max'], ['closed', 'max']];
  const label = { max: '𝒮 (max)', open: 'open', closed: 'rung 1 (♭ ⊣ ♯)', trivial: 'level 0' };
  return (
    <svg width="340" height="225" style={{ maxWidth: '100%' }}>
      {edges.map(([a, b]) => (
        <line key={a + b} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke="var(--line)" strokeWidth="1.5" />
      ))}
      {Object.keys(nodes).map(k => (
        <g key={k} className="levelpick" onClick={() => setLevel(k)}>
          <circle cx={nodes[k].x} cy={nodes[k].y} r={26}
                  fill={level === k ? '#ccfbf1' : 'white'}
                  stroke={level === k ? 'var(--accent)' : 'var(--line)'} strokeWidth="2" />
          {k === 'open' && <text x={nodes[k].x} y={nodes[k].y - 34} textAnchor="middle" fontSize="17" fill="var(--star)">★ 0̄</text>}
          <text x={nodes[k].x} y={nodes[k].y - 3} textAnchor="middle" fontSize="12.5">{label[k]}</text>
          <text x={nodes[k].x} y={nodes[k].y + 12} textAnchor="middle" fontSize="12">
            {resolves[k] ? '◯∅≅∅ ✓' : '◯∅≇∅ ✗'}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ============================ app ============================ */

function nextName(taken, pool) {
  for (const c of pool) if (!taken.includes(c)) return c;
  return null;
}

// Deep-linking: open ...#step=7 to start at story step 7.
const initStep = (() => {
  const m = /step=(\d+)/.exec(window.location.hash);
  return m ? Math.min(STORY.length - 1, Math.max(0, parseInt(m[1], 10) - 1)) : 0;
})();

function App() {
  const [obj, setObj] = useState(PRESETS[STORY[initStep].preset]);
  const [levelKey, setLevelKey] = useState(STORY[initStep].level);
  const [sel, setSel] = useState(null);
  const [step, setStep] = useState(initStep);

  const level = LEVELS[levelKey];
  const valid = isValid(obj);
  const boxX = valid ? level.box(obj) : null;
  const circX = valid ? level.circ(obj) : null;

  const fixedInfo = useMemo(() => valid && {
    box: isomorphic(boxX, obj), circ: isomorphic(circX, obj),
    discrete: isomorphic(MOD.flat(obj), obj),
    codiscrete: isomorphic(MOD.sharp(obj), obj),
    pureFuture: obj.now.length === 0,
  }, [obj, levelKey, valid]);

  const resolves = useMemo(() => Object.fromEntries(Object.keys(LEVELS).map(k =>
    [k, isomorphic(LEVELS[k].circ(EMPTY), EMPTY)])), []);
  const coresolves = useMemo(() => Object.fromEntries(Object.keys(LEVELS).map(k =>
    [k, isomorphic(LEVELS[k].box(POINT), POINT)])), []);

  const goStep = i => {
    const s = STORY[i];
    setStep(i);
    if (s.preset) setObj(PRESETS[s.preset]);
    if (s.level) setLevelKey(s.level);
    setSel(null);
  };

  const onSelect = target => {
    if (sel && sel.stage === 'now' && target.stage === 'later') {
      setObj({ ...obj, xi: { ...obj.xi, [sel.id]: target.id } });
      setSel(null);
    } else if (sel && sel.stage === target.stage && sel.id === target.id) {
      setSel(null);
    } else {
      setSel(target);
    }
  };

  const addNow = () => {
    const id = nextName(obj.now, 'abcdefgh');
    if (id && obj.now.length < MAXSIZE) setObj({ ...obj, now: [...obj.now, id] });
  };
  const addLater = () => {
    const id = nextName(obj.later, 'pqrstuvw');
    if (id && obj.later.length < MAXSIZE) setObj({ ...obj, later: [...obj.later, id] });
  };
  const delSel = () => {
    if (!sel) return;
    if (sel.stage === 'now') {
      const xi = { ...obj.xi }; delete xi[sel.id];
      setObj({ ...obj, now: obj.now.filter(x => x !== sel.id), xi });
    } else {
      const xi = Object.fromEntries(Object.entries(obj.xi).filter(([, v]) => v !== sel.id));
      setObj({ ...obj, later: obj.later.filter(y => y !== sel.id), xi });
    }
    setSel(null);
  };

  return (
    <div>
      <header>
        <h1>The Sierpiński Explorer</h1>
        <p className="sub">Two-stage things, their four levels, and where the first sublation happens.
          Companion to <code>text/rung-0-1-draft.md</code>; mathematics per <code>spec/</code>.</p>
      </header>

      <div className="story">
        <h2>{STORY[step].title}</h2>
        <p>{STORY[step].text}</p>
        <div className="nav">
          <button disabled={step === 0} onClick={() => goStep(step - 1)}>← Back</button>
          <button disabled={step === STORY.length - 1} onClick={() => goStep(step + 1)}>Next →</button>
          <span className="step-dots">{step + 1} / {STORY.length}</span>
        </div>
      </div>

      <div className="grid">
        <div className="panel">
          <h3>Your object X</h3>
          <p className="hint">Click a <b style={{color:'var(--now)'}}>now</b>-element, then a
            <b style={{color:'var(--later)'}}> later</b>-element, to set what it becomes.
            Every now-element needs a becoming (dashed red = missing).</p>
          <div className="toolbar">
            <button onClick={addNow}>+ now</button>
            <button onClick={addLater}>+ later</button>
            <button className="danger" onClick={delSel} disabled={!sel}>delete selected</button>
          </div>
          <ObjectSVG obj={obj} w={430} editable sel={sel} onSelect={onSelect} />
          {!valid && <div className="invalid-note">Incomplete: give every now-element a becoming before applying modalities.</div>}
          {valid && fixedInfo && (
            <div className="verdicts">
              <span className={'badge ' + (fixedInfo.discrete ? 'good' : 'bad')}>
                discrete (♭X ≅ X): {fixedInfo.discrete ? 'yes' : 'no'}</span>
              <span className={'badge ' + (fixedInfo.codiscrete ? 'good' : 'bad')}>
                codiscrete (♯X ≅ X): {fixedInfo.codiscrete ? 'yes' : 'no'}</span>
              <span className={'badge ' + (fixedInfo.pureFuture ? 'good' : 'bad')}>
                pure-future (X₀ = ∅): {fixedInfo.pureFuture ? 'yes' : 'no'}</span>
            </div>
          )}
          <div className="presets">
            <span className="label">Presets:</span>
            {Object.keys(PRESETS).map(k => (
              <button key={k} onClick={() => { setObj(PRESETS[k]); setSel(null); }}>{k}</button>
            ))}
          </div>
        </div>

        <div className="panel">
          <h3>The level lattice of 𝒮 — a diamond</h3>
          <p className="hint">Click a level to apply its opposition below. Each node reports
            whether it resolves level 0 (nothing stays nothing: ◯∅ ≅ ∅). The ★ marks the
            Aufhebung of level 0 — the least resolver above level 0 (spec Prop 1.13).</p>
          <Diamond level={levelKey} setLevel={setLevelKey} resolves={resolves} coresolves={coresolves} />
          <div className="diamond-note">
            <b>{level.name}</b> — {level.blurb}<br/>
            {level.boxF} &nbsp;·&nbsp; {level.circF} &nbsp;·&nbsp;
            resolves level 0: {resolves[levelKey] ? '✓' : '✗'} &nbsp;·&nbsp;
            co-resolves (□∗ ≅ ∗, a <i>different</i> notion): {coresolves[levelKey] ? '✓' : '✗'}
          </div>
        </div>
      </div>

      {valid && (
        <div className="panel" style={{ marginTop: 16 }}>
          <h3>X suspended in the opposition of {level.name}</h3>
          <p className="hint">The unity of opposites □X → X → ◯X: every object hangs between
            its two moments at the chosen level.</p>
          <div className="triptych">
            <div className="cell">
              <div className="title">□X ({level.boxF.split('=')[0].trim()})</div>
              <ObjectSVG obj={boxX} w={300} />
              <span className={'badge ' + (fixedInfo.box ? 'good' : 'bad')}>
                □-modal: {fixedInfo.box ? 'yes (□X ≅ X)' : 'no'}</span>
            </div>
            <div className="arrow">⟶</div>
            <div className="cell">
              <div className="title">X</div>
              <ObjectSVG obj={obj} w={300} />
            </div>
            <div className="arrow">⟶</div>
            <div className="cell">
              <div className="title">◯X ({level.circF.split('=')[0].trim()})</div>
              <ObjectSVG obj={circX} w={300} />
              <span className={'badge ' + (fixedInfo.circ ? 'good' : 'bad')}>
                ◯-modal: {fixedInfo.circ ? 'yes (◯X ≅ X)' : 'no'}</span>
            </div>
          </div>
        </div>
      )}

      <footer>
        Everything this page computes is reproduced headlessly by
        <code> node examples/run.mjs</code> (26 checks). Canonical statements and proofs:
        <code> spec/00-level-0.md</code>, <code>spec/01-level-1.md</code>. Text:
        <code> text/rung-0-1-draft.md</code>. Part of
        <a href="https://github.com/dm0-tech/pistol"> dm0-tech/pistol</a>; explorer code MIT.
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
