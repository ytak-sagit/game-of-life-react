import { describe, expect, it } from "bun:test";
import { apply, isOutside } from "../src/gol-rule";
import {
  ALIVE as A,
  type aliveState,
  apply as applyParallel,
  DEAD as D,
} from "../src/gol-rule.parallel-map";

// 計測方法の参考: https://qiita.com/bmjuggler/items/7b7673433a744b9ac87d

describe("実行時間の計測", () => {
  it("1セルずつ計算", () => {
    const width = 1280;
    const height = 800;
    const testData = [...Array((width + 2) * (height + 2))].map<aliveState>(
      (_, i) =>
        isOutside(i, width + 2, height + 2) ? D : Math.random() >= 0.5 ? A : D,
    );

    const start = process.hrtime();

    apply(testData, width, height);

    const end = process.hrtime(start);
    const time = end[0] * 1000 + end[1] / 1e6;

    console.debug(`Execute time is ${time.toFixed(5)} ms`);
    expect().pass();
  });

  it("`map()`並列化による計算", async () => {
    const width = 1280;
    const height = 800;
    const testData = [...Array((width + 2) * (height + 2))].map<aliveState>(
      (_, i) =>
        isOutside(i, width + 2, height + 2) ? D : Math.random() >= 0.5 ? A : D,
    );

    const start = process.hrtime();

    await applyParallel(testData, width, height);

    const end = process.hrtime(start);
    const time = end[0] * 1000 + end[1] / 1e6;

    console.debug(`Execute time is ${time.toFixed(5)} ms`);
    expect().pass();
  });
});
