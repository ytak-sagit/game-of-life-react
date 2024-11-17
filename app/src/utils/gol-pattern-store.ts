import {
  clock01,
  clock02,
  glider,
  gliderGun,
  heavyweightSpaceship,
  lightweightSpaceship,
  middleweightSpaceship,
  nebula,
  pufferTrain,
  pulsar,
  random,
} from "./gol-patterns";

export const patternStore = {
  random,
  glider,
  gliderGun,
  pulsar,
  nebula,
  clock01,
  clock02,
  lightweightSpaceship,
  middleweightSpaceship,
  heavyweightSpaceship,
  pufferTrain,
} as const;

export type PatternName = keyof typeof patternStore;

const patternNames = Object.keys(patternStore);

export function isValidPatternName(
  patternName: string,
): patternName is PatternName {
  return patternNames.includes(patternName);
}
