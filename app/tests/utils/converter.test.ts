import { describe, expect, it } from "bun:test";
import { toBinaryNumber } from "../../src/utils/converter";

describe("有効系", () => {
  it.each([
    ["0110", 6],
    ["11101101", 237],
  ])("%p は %p へ変換されること", (src, expected) => {
    // Arrange
    // ->None

    // Act
    const actual = toBinaryNumber(src);

    // Assert
    expect(actual).toBe(expected);
  });
});

describe("無効系", () => {
  it.each(["1234", "abcd", "１１１１", "0x11"])(
    "%p は変換できず Error がスローされること",
    (src) => {
      // Arrange
      // ->None

      // Act
      const actual = () => toBinaryNumber(src);

      // Assert
      expect(actual).toThrow("指定した文字列は2進数へ変換できません");
    },
  );
});
