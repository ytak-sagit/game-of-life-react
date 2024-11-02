import { ALIVE as A, DEAD as D } from "../gol-rule";
import type { PatternConfigs } from "./types";

// 銀河
export const nebula: PatternConfigs = {
  width: 13,
  height: 13,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, A, A, D, A, A, A, A, A, A, D, D,
    D, D, A, A, D, A, A, A, A, A, A, D, D,
    D, D, A, A, D, D, D, D, D, D, D, D, D,
    D, D, A, A, D, D, D, D, D, A, A, D, D,
    D, D, A, A, D, D, D, D, D, A, A, D, D,
    D, D, A, A, D, D, D, D, D, A, A, D, D,
    D, D, D, D, D, D, D, D, D, A, A, D, D,
    D, D, A, A, A, A, A, A, D, A, A, D, D,
    D, D, A, A, A, A, A, A, D, A, A, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, D,
  ],
};
