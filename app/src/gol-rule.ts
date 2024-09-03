export const DEAD = 0 as const;
export const ALIVE = 1 as const;

export type aliveState = typeof DEAD | typeof ALIVE;

export const apply = (
  aliveStates: ReadonlyArray<aliveState>,
  width: number,
  height: number,
) => {
  return aliveStates.map<aliveState>((state, index, states) => {
    const widthWithOutside = width + 2;
    const heightWithOutside = height + 2;

    if (isOutside(index, widthWithOutside, heightWithOutside)) {
      return DEAD;
    }

    const upLeft = states[index - (widthWithOutside + 1)];
    const up = states[index - widthWithOutside];
    const upRight = states[index - (widthWithOutside - 1)];
    const left = states[index - 1];
    const right = states[index + 1];
    const downLeft = states[index + (widthWithOutside - 1)];
    const down = states[index + widthWithOutside];
    const downRight = states[index + (widthWithOutside + 1)];

    const sumAliveCells =
      upLeft + up + upRight + left + right + downLeft + down + downRight;

    // 誕生or生存のパターンに該当すれば次世代は生存
    // 過疎or過密orそれ以外のパターンであれば次世代は死亡

    // 誕生: 現在の状態=死亡, 近傍の生存セル数=3
    // 生存: 現在の状態=生存, 近傍の生存セル数=2or3
    // よって、現在の状態と近傍の生存セル数のORをとった値がちょうど3であれば、次世代は生存となる
    return (state | sumAliveCells) === 0b0011 ? ALIVE : DEAD;
  });
};

export const isOutside = (
  index: number,
  widthWithOutside: number,
  heightWithOutside: number,
) => {
  return (
    /* 上端 */ index < widthWithOutside ||
    /* 下端 */ widthWithOutside * (heightWithOutside - 1) <= index ||
    /* 左端 */ index % widthWithOutside === 0 ||
    /* 右端 */ index % widthWithOutside === widthWithOutside - 1
  );
};
