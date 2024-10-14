import { ALIVE as A, DEAD as D } from "../gol-rule";
import type { PatternConfigs } from "./types";

// 中量級宇宙船
export const middleweightSpaceship: PatternConfigs = {
  width: 6,
  height: 5,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, A, D, D, D,
    A, D, D, D, A, D,
    D, D, D, D, D, A,
    A, D, D, D, D, A,
    D, A, A, A, A, A,
  ],
};
