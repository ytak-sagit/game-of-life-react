import { ALIVE as A, DEAD as D } from "../types/cell-state";
import type { PatternConfigs } from "./types";

// パルサー
export const pulsar: PatternConfigs = {
  width: 13,
  height: 13,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, A, A, A, D, D, D, A, A, A, D, D, 
    D, D, D, D, D, D, D, D, D, D, D, D, D, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    D, D, A, A, A, D, D, D, A, A, A, D, D, 
    D, D, D, D, D, D, D, D, D, D, D, D, D, 
    D, D, A, A, A, D, D, D, A, A, A, D, D, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    D, D, D, D, D, D, D, D, D, D, D, D, D, 
    D, D, A, A, A, D, D, D, A, A, A, D, D, 
  ],
};
