import {
  CELL_HEIGHT,
  CELL_WIDTH,
  NUMBER_OF_CELLS_PER_COL,
  NUMBER_OF_CELLS_PER_ROW,
} from "~/config/environments";
import { useWindowSize } from "./use-window-size";

type ScrollableViewSize = {
  /**
   * スクロール可能領域の横幅(pixel)
   * @description schale の max-width 以下の値を想定
   */
  width: number;
  /**
   * スクロール可能領域の縦幅(pixel)
   * @description schale の max-height 以下の値を想定
   */
  height: number;
};

export const useScrollableViewSize: () => ScrollableViewSize = () => {
  const { windowWidth, windowHeight } = useWindowSize();
  return {
    width: scrollableWidth(windowWidth),
    height: scrollableHeight(windowHeight),
  };
};

/** スクロール可能領域の横幅 */
const scrollableWidth = (windowWidth: number) =>
  Math.min(NUMBER_OF_CELLS_PER_ROW, Math.trunc(windowWidth / CELL_WIDTH) - 4) *
    CELL_WIDTH +
  6;

/** スクロール可能領域の縦幅 */
const scrollableHeight = (windowHeight: number) =>
  Math.min(
    NUMBER_OF_CELLS_PER_COL,
    Math.trunc(windowHeight / CELL_HEIGHT) - 14,
  ) *
    CELL_HEIGHT +
  6;
