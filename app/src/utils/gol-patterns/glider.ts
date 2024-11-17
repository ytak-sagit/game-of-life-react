import { ALIVE as A, DEAD as D } from "~/types/cell-state";
import type { PatternConfigs } from "./types";

// グライダー
export const glider: PatternConfigs = {
  width: 3,
  height: 3,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, A, D,
    D, D, A,
    A, A, A,
  ],
};
