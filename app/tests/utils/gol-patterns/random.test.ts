import { afterEach, describe, expect, it, mock, spyOn } from "bun:test";
import { ALIVE, DEAD } from "~/src/types/cell-state";
import { random } from "~/src/utils/gol-patterns/random";

describe("random", () => {
  afterEach(() => {
    mock.restore();
  });

  it.each([0, 0.49])(
    "疑似乱数の値が0.5未満の場合はDEADが生成されること: testdata=%p",
    (randomValue) => {
      // Arrange
      spyOn(Math, "random").mockImplementation(() => randomValue);
      const sumOfCells = 1;

      // Act
      const actual = random(sumOfCells);

      // Assert
      expect(actual).toStrictEqual([DEAD]);
    },
  );

  it.each([0.5, 1])(
    "疑似乱数の値が0.5以上の場合はALIVEが生成されること: testdata=%p",
    (randomValue) => {
      // Arrange
      spyOn(Math, "random").mockImplementation(() => randomValue);
      const sumOfCells = 1;

      // Act
      const actual = random(sumOfCells);

      // Assert
      expect(actual).toStrictEqual([ALIVE]);
    },
  );
});
