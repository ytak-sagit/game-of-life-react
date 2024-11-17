import type { ALIVE, DEAD } from "~/utils/gol-rule";

export type CellState = typeof DEAD | typeof ALIVE;
