import { ALIVE, type CellAliveState, DEAD } from "./gol-rule";

export const random = (): CellAliveState =>
  Math.random() >= 0.5 ? ALIVE : DEAD;
