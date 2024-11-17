import { ALIVE as A, DEAD as D } from "../types/cell-state";
import type { PatternConfigs } from "./types";

// 軽量級宇宙船
export const lightweightSpaceship: PatternConfigs = {
  width: 5,
  height: 4,
  // biome-ignore format: the array should not be formatted
  cells: [
    A, D, D, A, D,
    D, D, D, D, A,
    A, D, D, D, A,
    D, A, A, A, A,
  ],
};
