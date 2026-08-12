// Bounded OP-13 calculation: Ω and the predicate-level later operator in
// finite truncations of the topos of trees.
//
// Birkedal–Møgelberg–Schwinghammer–Støvring (LMCS 2012), §§2.1–2.4:
// Ω(m) = {0,...,m}; restriction from m to n < m is k ↦ min(n,k);
// ▷ on Ω(m) is k ↦ min(m,k+1). Stages are positive integers and a smaller
// stage is a future world. At two stages, identify the repo's X₀ with stage
// 2 and X₁ with stage 1, so X₀ → X₁ is exactly the tree restriction.

export const omegaValues = stage =>
  Array.from({ length: stage + 1 }, (_, value) => value);

function* subsets(values) {
  if (values.length === 0) {
    yield [];
    return;
  }
  const [first, ...rest] = values;
  for (const subset of subsets(rest)) {
    yield subset;
    yield [first, ...subset];
  }
}

// Sieves on stage m in the finite chain are down-closed subsets of
// {1,...,m}. Enumerate them from that closure condition rather than from the
// closed Ω(m) formula.
export function finiteChainSieves(stage) {
  const worlds = Array.from({ length: stage }, (_, index) => index + 1);
  return [...subsets(worlds)].filter(sieve => {
    const included = new Set(sieve);
    return sieve.every(world =>
      worlds.filter(candidate => candidate <= world)
        .every(candidate => included.has(candidate)));
  });
}

export const restrictTruth = (value, targetStage) =>
  Math.min(targetStage, value);

export const laterTruth = (value, stage) =>
  Math.min(stage, value + 1);

export function laterIsNatural(topStage) {
  for (let stage = 2; stage <= topStage; stage += 1) {
    for (const value of omegaValues(stage)) {
      const laterThenRestrict =
        restrictTruth(laterTruth(value, stage), stage - 1);
      const restrictThenLater =
        laterTruth(restrictTruth(value, stage - 1), stage - 1);
      if (laterThenRestrict !== restrictThenLater) return false;
    }
  }
  return true;
}

export const laterIsIdempotentAt = stage =>
  omegaValues(stage).every(value =>
    laterTruth(laterTruth(value, stage), stage) === laterTruth(value, stage));

// Object-level later endofunctor: (▷X)(1)=1 and (▷X)(n+1)=X(n).
// Component cardinalities alone suffice for the witness below: naturally
// isomorphic presheaves must be componentwise bijective.
export function laterObject(stageSets) {
  const result = [undefined, ['*']];
  for (let stage = 2; stage < stageSets.length; stage += 1) {
    result[stage] = [...stageSets[stage - 1]];
  }
  return result;
}

export function laterEndofunctorIsNotIdempotentWitness() {
  const constantTwo = [undefined, ['a', 'b'], ['a', 'b']];
  const once = laterObject(constantTwo);
  const twice = laterObject(once);
  return once[2].length === 2 && twice[2].length === 1;
}

const topLabels = new Map([
  [0, 'never'],
  [1, 'later'],
  [2, 'now'],
]);

const futureLabels = new Map([
  [0, 'no'],
  [1, 'yes'],
]);

export function repoOmegaMatchesTwoStageTree(repoOmega) {
  const topValues = new Map(
    [...topLabels].map(([value, label]) => [label, value]),
  );

  return repoOmega.X0.length === 3 &&
    repoOmega.X1.length === 2 &&
    repoOmega.X0.every(label => topValues.has(label)) &&
    repoOmega.X1.every(label => [...futureLabels.values()].includes(label)) &&
    repoOmega.X0.every(label => {
      const restricted = restrictTruth(topValues.get(label), 1);
      return repoOmega.xi[label] === futureLabels.get(restricted);
    });
}

export const twoStageLaterLabels = Object.fromEntries(
  [...topLabels].map(([value, label]) => [
    label,
    topLabels.get(laterTruth(value, 2)),
  ]),
);
