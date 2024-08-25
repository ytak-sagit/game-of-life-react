import { expect, test } from "bun:test";
import { ALIVE as A, apply, DEAD as D } from "./gol-rule";

test("死亡セルに隣接する生存セルが3つあれば、次世代が誕生（生存へ変化）すること", () => {
  // Arrange
  // 3x3 + 外側
  // biome-ignore format: the array should not be formatted
  const testData = [
    D, D, D, D, D,
    D, A, A, D, D,
    D, A, D, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
  ];
  // biome-ignore format: the array should not be formatted
  const expected = [
    D, D, D, D, D,
    D, A, A, D, D,
    D, A, A, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
  ];

  // Act
  const actual = apply(testData, 3, 3);

  // Assert
  expect(actual).toEqual(expected);
});

test("生存セルに隣接する生存セルが2つか3つならば、次世代でも生存すること", () => {
  // Arrange
  // 4x4 + 外側
  // biome-ignore format: the array should not be formatted
  const testData = [
    D, D, D, D, D, D,
    D, D, D, D, D, D,
    D, D, A, A, D, D,
    D, D, A, A, D, D,
    D, D, D, D, D, D,
    D, D, D, D, D, D,
  ];
  // biome-ignore format: the array should not be formatted
  const expected = [
    D, D, D, D, D, D,
    D, D, D, D, D, D,
    D, D, A, A, D, D,
    D, D, A, A, D, D,
    D, D, D, D, D, D,
    D, D, D, D, D, D,
  ];

  // Act
  const actual = apply(testData, 4, 4);

  // Assert
  expect(actual).toEqual(expected);
});

test("生存セルに隣接する生存セルが1つ以下ならば、次世代では過疎により死亡すること", () => {
  // Arrange
  // 3x3 + 外側
  // biome-ignore format: the array should not be formatted
  const testData = [
    D, D, D, D, D,
    D, D, D, D, D,
    D, D, A, A, D,
    D, D, D, D, D,
    D, D, D, D, D,
  ];
  // biome-ignore format: the array should not be formatted
  const expected = [
    D, D, D, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
  ];

  // Act
  const actual = apply(testData, 3, 3);

  // Assert
  expect(actual).toEqual(expected);
});

test("生存セルに隣接する生存セルが4つ以上ならば、次世代では過密により死亡すること", () => {
  // Arrange
  // 3x3 + 外側
  // biome-ignore format: the array should not be formatted
  const testData = [
    D, D, D, D, D,
    D, A, A, A, D,
    D, A, A, D, D,
    D, D, D, D, D,
    D, D, D, D, D,
  ];
  // biome-ignore format: the array should not be formatted
  const expected = [
    D, D, D, D, D,
    D, A, D, A, D,
    D, A, D, A, D,
    D, D, D, D, D,
    D, D, D, D, D,
  ];

  // Act
  const actual = apply(testData, 3, 3);

  // Assert
  expect(actual).toEqual(expected);
});

test("2世代の経過後、ブリンカーは元の状態に戻ること", () => {
  // Arrange
  // 3x3 + 外側
  // biome-ignore format: the array should not be formatted
  const blinker = [
    D, D, D, D, D,
    D, D, A, D, D,
    D, D, A, D, D,
    D, D, A, D, D,
    D, D, D, D, D,
  ];
  // biome-ignore format: the array should not be formatted
  const expectedAfterTwoGenerations = [
    D, D, D, D, D,
    D, D, A, D, D,
    D, D, A, D, D,
    D, D, A, D, D,
    D, D, D, D, D,
  ];
  const nextGeneration = apply(blinker, 3, 3);

  // Act
  const actual = apply(nextGeneration, 3, 3);

  // Assert
  expect(actual).toEqual(expectedAfterTwoGenerations);
});
