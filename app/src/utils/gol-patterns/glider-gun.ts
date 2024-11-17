import { ALIVE as A, DEAD as D } from "../types/cell-state";
import type { PatternConfigs } from "./types";

// グライダー銃
export const gliderGun: PatternConfigs = {
  width: 36,
  height: 9,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, A, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, A, D, A, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, A, A, D, D, D, D, D, D, A, A, D, D, D, D, D, D, D, D, D, D, D, D, A, A,
    D, D, D, D, D, D, D, D, D, D, D, A, D, D, D, A, D, D, D, D, A, A, D, D, D, D, D, D, D, D, D, D, D, D, A, A,
    A, A, D, D, D, D, D, D, D, D, A, D, D, D, D, D, A, D, D, D, A, A, D, D, D, D, D, D, D, D, D, D, D, D, D, D,
    A, A, D, D, D, D, D, D, D, D, A, D, D, D, A, D, A, A, D, D, D, D, A, D, A, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, A, D, D, D, D, D, A, D, D, D, D, D, D, D, A, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, A, D, D, D, A, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, A, A, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D,
  ],
};
