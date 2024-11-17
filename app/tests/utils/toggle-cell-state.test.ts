import { describe, expect, it } from "bun:test";
import { toggle } from "~/src/utils/toggle-cell-state";
import { ALIVE, DEAD } from "~/src/utils/types/cell-state";

describe("toggle", () => {
  it.each([
    [DEAD, ALIVE],
    [ALIVE, DEAD],
  ])("%p を指定した場合は %p が返却されること", (before, after) => {
    // Arrange
    const expected = after;

    // Act
    const actual = toggle(before);

    // Assert
    expect(actual).toBe(expected);
  });
});
