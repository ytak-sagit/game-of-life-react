import type { CellState } from "~/types/cell-state";
import { DEAD } from "./gol-rule";

export const initialize = (sumOfCells: number) =>
  Array<CellState>(sumOfCells).fill(DEAD);
