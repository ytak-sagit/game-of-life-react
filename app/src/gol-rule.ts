export const DEAD = 0 as const;
export const ALIVE = 1 as const;

export type aliveState = typeof DEAD | typeof ALIVE;

export const apply = (
  aliveStates: ReadonlyArray<aliveState>,
  width: number,
  height: number,
) => {
  const nextAliveStates = Array<aliveState>(aliveStates.length);

  for (let i = 0; i < width * height; i++) {
    const _isUpEdge = isUpEdge(i, width);
    const _isDownEdge = isDownEdge(i, width, height);
    const _isLeftEdge = isLeftEdge(i, width);
    const _isRightEdge = isRightEdge(i, width);

    const upLeft =
      _isUpEdge || _isLeftEdge ? DEAD : aliveStates[i - (width + 1)];
    const up = _isUpEdge ? DEAD : aliveStates[i - width];
    const upRight =
      _isUpEdge || _isRightEdge ? DEAD : aliveStates[i - (width - 1)];
    const left = _isLeftEdge ? DEAD : aliveStates[i - 1];
    const central = aliveStates[i];
    const right = _isRightEdge ? DEAD : aliveStates[i + 1];
    const downLeft =
      _isDownEdge || _isLeftEdge ? DEAD : aliveStates[i + (width - 1)];
    const down = _isDownEdge ? DEAD : aliveStates[i + width];
    const downRight =
      _isDownEdge || _isRightEdge ? DEAD : aliveStates[i + (width + 1)];

    const sumAliveCells =
      upLeft + up + upRight + left + right + downLeft + down + downRight;

    // 誕生or生存のパターンに該当すれば次世代は生存
    // 過疎or過密orそれ以外のパターンであれば次世代は死亡

    // 誕生: 現在の状態=死亡, 近傍の生存セル数=3
    // 生存: 現在の状態=生存, 近傍の生存セル数=2or3
    // よって、現在の状態と近傍の生存セル数のORをとった値がちょうど3であれば、次世代は生存となる
    nextAliveStates[i] = (central | sumAliveCells) === 0b0011 ? ALIVE : DEAD;
  }

  return nextAliveStates;
};

// 上端か否か
const isUpEdge = (index: number, width: number) => index < width;

// 下端か否か
const isDownEdge = (index: number, width: number, height: number) =>
  width * (height - 1) <= index;

// 左端か否か
const isLeftEdge = (index: number, width: number) => index % width === 0;

// 右端か否か
const isRightEdge = (index: number, width: number) =>
  index % width === width - 1;
