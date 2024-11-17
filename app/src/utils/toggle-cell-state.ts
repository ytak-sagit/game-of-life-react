import { ALIVE, DEAD, type CellState } from "./types/cell-state";

export const toggle = (src: CellState) =>
  (src === DEAD ? ALIVE : DEAD) as CellState;
