import { ALIVE as A, DEAD as D } from "~/types/cell-state";
import type { PatternConfigs } from "./types";

// 時計I
export const clock01: PatternConfigs = {
  width: 4,
  height: 4,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, A, D, D,
    D, D, A, A,
    A, A, D, D,
    D, D, A, D,
  ],
};
