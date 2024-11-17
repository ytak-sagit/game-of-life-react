import { ALIVE as A, DEAD as D } from "../types/cell-state";
import type { PatternConfigs } from "./types";

// シュシュポッポ列車
export const pufferTrain: PatternConfigs = {
  width: 5,
  height: 18,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, D, A, D,
    D, D, D, D, A,
    A, D, D, D, A,
    D, A, A, A, A,
    D, D, D, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
    A, D, D, D, D,
    D, A, A, D, D,
    D, D, A, D, D,
    D, D, A, D, D,
    D, A, D, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
    D, D, D, A, D,
    D, D, D, D, A,
    A, D, D, D, A,
    D, A, A, A, A,
  ],
};
