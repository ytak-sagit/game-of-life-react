import { afterEach, describe, expect, it, mock, spyOn } from "bun:test";
import { random } from "../../src/utils/gol-pattern-generator";
import { ALIVE, DEAD } from "../../src/utils/gol-rule";

describe("random", () => {
  afterEach(() => {
    mock.restore();
  });

  it.each([0, 0.49])(
    "疑似乱数の値が0.5未満の場合はDEADが生成されること: testdata=%p",
    (randomValue) => {
      // Arrange
      spyOn(Math, "random").mockImplementation(() => randomValue);

      // Act
      const actual = random();

      // Assert
      expect(actual).toBe(DEAD);
    },
  );

  it.each([0.5, 1])(
    "疑似乱数の値が0.5以上の場合はALIVEが生成されること: testdata=%p",
    (randomValue) => {
      // Arrange
      spyOn(Math, "random").mockImplementation(() => randomValue);

      // Act
      const actual = random();

      // Assert
      expect(actual).toBe(ALIVE);
    },
  );
});
