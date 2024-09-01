import { toBinaryNumber } from "./converter";

export const DEAD = 0 as const;
export const ALIVE = 1 as const;

export type aliveState = typeof DEAD | typeof ALIVE;

const PROCESS_BIT = 32; // 次世代を求める際の処理単位
const MSB = 0x80000000; // 最上位bit

export const apply = (
  aliveStates: ReadonlyArray<aliveState>,
  width: number,
  height: number,
) => {
  const nextAliveStates = Array<aliveState>(aliveStates.length).fill(DEAD);
  const widthWithOutside = width + 2;

  for (let y = 1; y <= height; y++) {
    for (let x = 1; x <= width / PROCESS_BIT; x++) {
      const centralOffset = 1 + y * widthWithOutside + PROCESS_BIT * (x - 1);
      const nextAliveStateBinaryNumber = bitBoardCore(
        aliveStates,
        widthWithOutside,
        centralOffset,
      );

      // 2進数を1bitずつに分割し、PROCESS_BIT 桁に達するまで先頭ゼロパディング
      nextAliveStateBinaryNumber
        .toString(2)
        .padStart(PROCESS_BIT, "0")
        .split("")
        .map((s) => (s === "0" ? DEAD : ALIVE))
        .forEach((aliveState, index) => {
          const offset = centralOffset + index;
          nextAliveStates[offset] = aliveState;
        });
    }
  }

  return nextAliveStates;
};

// ビットボードにより次世代のセルを計算する
// 参考: http://vivi.dyndns.org/tech/games/LifeGame.html
const bitBoardCore = (
  aliveStates: ReadonlyArray<aliveState>,
  widthWithOutside: number,
  centralOffset: number,
) => {
  const upOffset = centralOffset - widthWithOutside;
  const downOffset = centralOffset + widthWithOutside;

  // 注目セル範囲と近傍8箇所の取得
  const upLeft = aliveStates[upOffset - 1];
  const up = toBinaryNumber(
    aliveStates.slice(upOffset, upOffset + PROCESS_BIT).join(""),
  );
  const upRight = aliveStates[upOffset + PROCESS_BIT] << (PROCESS_BIT - 1);
  const left = aliveStates[centralOffset - 1];
  const central = toBinaryNumber(
    aliveStates.slice(centralOffset, centralOffset + PROCESS_BIT).join(""),
  );
  const right = aliveStates[centralOffset + PROCESS_BIT] << (PROCESS_BIT - 1);
  const downLeft = aliveStates[downOffset - 1];
  const down = toBinaryNumber(
    aliveStates.slice(downOffset, downOffset + PROCESS_BIT).join(""),
  );
  const downRight = aliveStates[downOffset + PROCESS_BIT] << (PROCESS_BIT - 1);

  if (!(up | left | central | right | down)) {
    // 注目セル範囲と近傍の上下左右がすべて死亡状態
    // この場合、次世代は必ず死亡する
    return DEAD;
  }

  // 注目しているセル範囲の近傍8箇所の生死状態を計算する
  let a = (up >>> 1) | ((upLeft & 0x01) === 0 ? 0 : MSB);
  let b = up;
  let c = (up << 1) | ((upRight & 0x80) === 0 ? 0 : 1);
  let d = (central >>> 1) | ((left & 0x01) === 0 ? 0 : MSB);
  let e = (central << 1) | ((right & 0x80) === 0 ? 0 : 1);
  let f = (down >>> 1) | ((downLeft & 0x01) === 0 ? 0 : MSB);
  let g = down;
  let h = (down << 1) | ((downRight & 0x80) === 0 ? 0 : 1);

  // a ... h の各ビットで1が立つところを求め、近傍8箇所の生存セルを計算する
  // NOTE: xab := a + b の上位ビット, xcd := c + d の上位ビット, ...
  const xab = a & b;
  a ^= b;
  const xcd = c & d;
  c ^= d;
  const xef = e & f;
  e ^= f;
  const xgh = g & h;
  g ^= h;
  d = a & c;
  a ^= c;
  c = xab & xcd;
  b = xab ^ xcd ^ d;
  h = e & g;
  e ^= g;
  g = xef & xgh;
  f = xef ^ xgh ^ h;
  d = a & e;
  a ^= e;
  h = b & f;
  b ^= f;
  h |= b & d;
  b ^= d;
  c ^= g ^ h;
  const z = ~c & b;
  const s2 = z & ~a; // s2: 8近傍での生存セル数が二つ
  const s3 = z & a; // s3: 8近傍での生存セル数が三つ

  // ライフゲームのルールに従って、次世代を計算する
  const aliveState = (central & s2) | s3;

  // NOTE:
  // JavaScript では、ビット演算時に32bit目に1が立っていると負数として扱われる。
  // 負数のままだと以降の処理で不都合があるため、
  // ビット符号なし右シフト演算子をかませて、符号なし整数として扱われるようにする。
  return aliveState >>> 0;
};
