import { ALIVE, type aliveState, DEAD } from "./gol-rule";

export const random = (): aliveState => (Math.random() >= 0.5 ? ALIVE : DEAD);
