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
    "%p は変換できず undefined が返却されること",
    (src) => {
      // Arrange
      // ->None

      // Act
      const actual = toBinaryNumber(src);

      // Assert
      expect(actual).toBe(undefined);
    },
  );
});
