/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type ScrollableViewProps = {
  /**
   * スクロール可能領域の横幅(pixel)
   * @description schale の max-width より小さい値を指定する
   */
  width: number;
  /**
   * スクロール可能領域の縦幅(pixel)
   * @description schale の max-height より小さい値を指定する
   */
  height: number;
  /** スクロール可能領域に表示する子要素 */
  children: React.ReactNode;
};

export const ScrollableView: React.FC<ScrollableViewProps> = ({
  width,
  height,
  children,
}) => {
  const style = css({
    // NOTE: display: "block" だと幅が子要素へ伝搬してしまうため、"flex" としている
    display: "flex",
    width,
    height,
    overflow: "auto",
  });
  return <div css={style}>{children}</div>;
};
