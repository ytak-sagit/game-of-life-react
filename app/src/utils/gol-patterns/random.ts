import { ALIVE as A, DEAD as D, type CellState } from "~/types/cell-state";

const randomize = (): CellState => (Math.random() >= 0.5 ? A : D);

// ランダム配置
export const random = (sumOfCells: number) =>
  [...Array(sumOfCells)].map(randomize);
