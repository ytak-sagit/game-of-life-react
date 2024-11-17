import { ALIVE as A, DEAD as D } from "~/types/cell-state";
import type { PatternConfigs } from "./types";

// 時計II
export const clock02: PatternConfigs = {
  width: 12,
  height: 12,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, D, D, D, D, A, A, D, D, D, D,
    D, D, D, D, D, D, A, A, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, A, A, A, A, D, D, D, D,
    A, A, D, A, D, D, A, D, A, D, D, D,
    A, A, D, A, D, A, D, D, A, D, D, D,
    D, D, D, A, D, A, D, D, A, D, A, A,
    D, D, D, A, D, D, D, D, A, D, A, A,
    D, D, D, D, A, A, A, A, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, A, A, D, D, D, D, D, D,
    D, D, D, D, A, A, D, D, D, D, D, D,
  ],
};
