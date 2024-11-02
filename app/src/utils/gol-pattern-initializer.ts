import { type CellAliveState, DEAD } from "./gol-rule";

export const initialize = (sumOfCells: number) =>
  Array<CellAliveState>(sumOfCells).fill(DEAD);
