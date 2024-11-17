import type { CellState } from "~/types/cell-state";
import { ALIVE as A, DEAD as D } from "../gol-rule";

const randomize = (): CellState => (Math.random() >= 0.5 ? A : D);

// ランダム配置
export const random = (sumOfCells: number) =>
  [...Array(sumOfCells)].map(randomize);
