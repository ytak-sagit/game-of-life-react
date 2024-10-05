import { ALIVE as A, type CellAliveState, DEAD as D } from "./gol-rule";

export const random = (): CellAliveState => (Math.random() >= 0.5 ? A : D);
