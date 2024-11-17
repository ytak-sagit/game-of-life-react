import { describe, expect, it } from "bun:test";
import { DEAD } from "~/src/types/cell-state";
import { initialize } from "~/src/utils/gol-pattern-initializer";

describe("initialize", () => {
  it("DEAD状態のセルを10件持つ配列が返却されること", () => {
    // Arrange
    const sumOfCells = 10;

    // Act
    const actual = initialize(sumOfCells);

    // Assert
    expect(actual).toStrictEqual([
      DEAD,
      DEAD,
      DEAD,
      DEAD,
      DEAD,
      DEAD,
      DEAD,
      DEAD,
      DEAD,
      DEAD,
    ]);
  });

  it("初期化の際に配列が都度、新規生成されていること", () => {
    // Arrange
    const sumOfCells = 100;
    const first = initialize(sumOfCells);

    // Act
    const second = initialize(sumOfCells);

    // Assert
    expect(second).toStrictEqual(first);
    expect(first).toBe(first);
    expect(second).toBe(second);
    expect(second).not.toBe(first); // 配列インスタンスとしては一致しない
  });
});
