import { ALIVE as A, type CellAliveState, DEAD as D } from "./gol-rule";

export const random = (): CellAliveState => (Math.random() >= 0.5 ? A : D);

type PatternConfigs = {
  width: number;
  height: number;
  cells: ReadonlyArray<CellAliveState>;
};

// グライダー
const glider: PatternConfigs = {
  width: 3,
  height: 3,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, A, D,
    D, D, A,
    A, A, A,
  ],
};

// グライダー銃
const gliderGun: PatternConfigs = {
  width: 36,
  height: 9,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, A, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, A, D, A, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, A, A, D, D, D, D, D, D, A, A, D, D, D, D, D, D, D, D, D, D, D, D, A, A,
    D, D, D, D, D, D, D, D, D, D, D, A, D, D, D, A, D, D, D, D, A, A, D, D, D, D, D, D, D, D, D, D, D, D, A, A,
    A, A, D, D, D, D, D, D, D, D, A, D, D, D, D, D, A, D, D, D, A, A, D, D, D, D, D, D, D, D, D, D, D, D, D, D,
    A, A, D, D, D, D, D, D, D, D, A, D, D, D, A, D, A, A, D, D, D, D, A, D, A, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, A, D, D, D, D, D, A, D, D, D, D, D, D, D, A, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, A, D, D, D, A, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, A, A, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D,
  ],
};

// パルサー
const pulsar: PatternConfigs = {
  width: 13,
  height: 13,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, A, A, A, D, D, D, A, A, A, D, D, 
    D, D, D, D, D, D, D, D, D, D, D, D, D, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    D, D, A, A, A, D, D, D, A, A, A, D, D, 
    D, D, D, D, D, D, D, D, D, D, D, D, D, 
    D, D, A, A, A, D, D, D, A, A, A, D, D, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    A, D, D, D, D, A, D, A, D, D, D, D, A, 
    D, D, D, D, D, D, D, D, D, D, D, D, D, 
    D, D, A, A, A, D, D, D, A, A, A, D, D, 
  ],
};

// 銀河
const nebula: PatternConfigs = {
  width: 13,
  height: 13,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, A, A, D, A, A, A, A, A, A, D, D,
    D, D, A, A, D, A, A, A, A, A, A, D, D,
    D, D, A, A, D, D, D, D, D, D, D, D, D,
    D, D, A, A, D, D, D, D, D, A, A, D, D,
    D, D, A, A, D, D, D, D, D, A, A, D, D,
    D, D, A, A, D, D, D, D, D, A, A, D, D,
    D, D, D, D, D, D, D, D, D, A, A, D, D,
    D, D, A, A, A, A, A, A, D, A, A, D, D,
    D, D, A, A, A, A, A, A, D, A, A, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D, D,
  ],
};

// 時計I
const clock01: PatternConfigs = {
  width: 4,
  height: 4,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, A, D, D,
    D, D, A, A,
    A, A, D, D,
    D, D, A, D,
  ],
};

// 時計II
const clock02: PatternConfigs = {
  width: 12,
  height: 12,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, D, D, D, D, A, A, D, D, D, D,
    D, D, D, D, D, D, A, A, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, A, A, A, A, D, D, D, D,
    A, A, D, A, D, D, A, D, A, D, D, D,
    A, A, D, A, D, A, D, D, A, D, D, D,
    D, D, D, A, D, A, D, D, A, D, A, A,
    D, D, D, A, D, D, D, D, A, D, A, A,
    D, D, D, D, A, A, A, A, D, D, D, D,
    D, D, D, D, D, D, D, D, D, D, D, D,
    D, D, D, D, A, A, D, D, D, D, D, D,
    D, D, D, D, A, A, D, D, D, D, D, D,
  ],
};

// 軽量級宇宙船
const lightweightSpaceship: PatternConfigs = {
  width: 5,
  height: 4,
  // biome-ignore format: the array should not be formatted
  cells: [
    A, D, D, A, D,
    D, D, D, D, A,
    A, D, D, D, A,
    D, A, A, A, A,
  ],
};

// 中量級宇宙船
const middleweightSpaceship: PatternConfigs = {
  width: 6,
  height: 5,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, A, D, D, D,
    A, D, D, D, A, D,
    D, D, D, D, D, A,
    A, D, D, D, D, A,
    D, A, A, A, A, A,
  ],
};

// 重量級宇宙船
const heavyweightSpaceship: PatternConfigs = {
  width: 7,
  height: 5,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, A, A, D, D, D,
    A, D, D, D, D, A, D,
    D, D, D, D, D, D, A,
    A, D, D, D, D, D, A,
    D, A, A, A, A, A, A,
  ],
};

// シュシュポッポ列車
const pufferTrain: PatternConfigs = {
  width: 5,
  height: 18,
  // biome-ignore format: the array should not be formatted
  cells: [
    D, D, D, A, D,
    D, D, D, D, A,
    A, D, D, D, A,
    D, A, A, A, A,
    D, D, D, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
    A, D, D, D, D,
    D, A, A, D, D,
    D, D, A, D, D,
    D, D, A, D, D,
    D, A, D, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
    D, D, D, A, D,
    D, D, D, D, A,
    A, D, D, D, A,
    D, A, A, A, A,
  ],
};

export const patternStore = {
  glider,
  gliderGun,
  pulsar,
  nebula,
  clock01,
  clock02,
  lightweightSpaceship,
  middleweightSpaceship,
  heavyweightSpaceship,
  pufferTrain,
} as const;
