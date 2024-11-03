/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  CELL_HEIGHT,
  CELL_WIDTH,
  NUMBER_OF_CELLS_PER_COL,
  NUMBER_OF_CELLS_PER_ROW,
} from "~/config/environments";

const areaWidth =
  Math.min(
    NUMBER_OF_CELLS_PER_ROW,
    Math.trunc(window.innerWidth / CELL_WIDTH) - 4,
  ) * CELL_WIDTH;
const areaHeight =
  Math.min(
    NUMBER_OF_CELLS_PER_COL,
    Math.trunc(window.innerHeight / CELL_HEIGHT) - 14,
  ) * CELL_HEIGHT;

type ScrollableAreaProps = {
  /** スクロール可能領域に表示する子要素 */
  children: React.ReactNode;
};

export const ScrollableArea: React.FC<ScrollableAreaProps> = ({ children }) => {
  const style = css({
    display: "flex", //blockだとダメ
    width: `${areaWidth}px`, //max-widthより小さい値
    height: `${areaHeight}px`, //min-widthより小さい値
    overflow: "auto",
  });
  return <div css={style}>{children}</div>;
};
