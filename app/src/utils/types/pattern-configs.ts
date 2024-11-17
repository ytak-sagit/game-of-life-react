import type { CellState } from "./cell-state";

export type PatternConfigs = {
  width: number;
  height: number;
  cells: ReadonlyArray<CellState>;
};
