import { DEAD, type CellState } from "./types/cell-state";

export const initialize = (sumOfCells: number) =>
  Array<CellState>(sumOfCells).fill(DEAD);
