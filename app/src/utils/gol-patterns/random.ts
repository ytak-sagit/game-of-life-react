import { ALIVE as A, type CellAliveState, DEAD as D } from "../gol-rule";

const randomize = (): CellAliveState => (Math.random() >= 0.5 ? A : D);

// ランダム配置
export const random = (sumOfCells: number) =>
  [...Array(sumOfCells)].map(randomize);
