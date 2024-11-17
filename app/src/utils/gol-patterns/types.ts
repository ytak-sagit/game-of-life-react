import type { CellState } from "../types/cell-state";

export type PatternConfigs = {
  width: number;
  height: number;
  cells: ReadonlyArray<CellState>;
};
