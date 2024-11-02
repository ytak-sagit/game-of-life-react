import { clock01 } from "./gol-patterns/clock-01";
import { clock02 } from "./gol-patterns/clock-02";
import { glider } from "./gol-patterns/glider";
import { gliderGun } from "./gol-patterns/glider-gun";
import { heavyweightSpaceship } from "./gol-patterns/heavyweight-spaceship";
import { lightweightSpaceship } from "./gol-patterns/lightweight-spaceship";
import { middleweightSpaceship } from "./gol-patterns/middleweight-spaceship";
import { nebula } from "./gol-patterns/nebula";
import { pufferTrain } from "./gol-patterns/puffer-train";
import { pulsar } from "./gol-patterns/pulsar";
import { random } from "./gol-patterns/random";

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
