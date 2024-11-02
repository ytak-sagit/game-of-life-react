import type { CellAliveState } from "../gol-rule";

export type PatternConfigs = {
  width: number;
  height: number;
  cells: ReadonlyArray<CellAliveState>;
};
