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
    if (state) {
      // 生存
      if (sumAliveCells === 2 || sumAliveCells === 3) {
        return ALIVE;
      }

      // 過疎
      if (sumAliveCells <= 1) {
        return DEAD;
      }

      // 過密
      // if (sumAliveCells >= 4)
      return DEAD;
    }

    // 誕生
    if (sumAliveCells === 3) {
      return ALIVE;
    }

    return DEAD;
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
