/** セルの状態：死亡 */
export const DEAD = 0 as const;

/** セルの状態：生存 */
export const ALIVE = 1 as const;

export type CellState = typeof DEAD | typeof ALIVE;
