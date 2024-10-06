import { describe, expect, it } from "bun:test";
import { renderPattern } from "../../src/utils/gol-pattern-renderer";
import { ALIVE as A, DEAD as D } from "../../src/utils/gol-rule";

describe("renderPattern", () => {
  it("存在しないパターン名が指定された場合、空配列が返却されること", () => {
    // Arrange
    const patternName = "undefined";
    const anyNumberOfCellsPerRow = 10;
    const anySumOfCells = 100;

    // Act
    const actual = renderPattern(
      patternName,
      anyNumberOfCellsPerRow,
      anySumOfCells,
    );

    // Assert
    expect(actual).toEqual([]);
  });

  it("パターン名に'glider'が指定された場合、グライダーのパターンを描画した配列が返却されること", () => {
    // Arrange
    const patternName = "glider";
    // biome-ignore format: the array should not be formatted
    const expected = [
      D, D, D, D, D,
      D, D, A, D, D,
      D, D, D, A, D,
      D, A, A, A, D,
      D, D, D, D, D,
    ];

    // Act
    const actual = renderPattern(patternName, 5, 25);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("パターン名に'lightweightSpaceship'が指定された場合、軽量級宇宙船のパターンを描画した配列が返却されること", () => {
    // Arrange
    const patternName = "lightweightSpaceship";
    // biome-ignore format: the array should not be formatted
    const expected = [
      D, D, D, D, D, D,
      D, A, D, D, A, D,
      D, D, D, D, D, A,
      D, A, D, D, D, A,
      D, D, A, A, A, A,
    ];

    // Act
    const actual = renderPattern(patternName, 6, 30);

    // Assert
    expect(actual).toEqual(expected);
  });
});
