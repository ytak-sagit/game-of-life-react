/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type React from "react";
import { useScrollableViewSize } from "~/hooks/use-scrollable-view-size";

type ScrollableViewProps = {
  /** スクロール可能領域に表示する子要素 */
  children: React.ReactNode;
};

export const ScrollableView: React.FC<ScrollableViewProps> = ({ children }) => {
  const { width, height } = useScrollableViewSize();
  const style = css({
    // NOTE: display: "block" だと幅が子要素へ伝搬してしまうため、"flex" としている
    display: "flex",
    width,
    height,
    overflow: "auto",
  });
  return <div css={style}>{children}</div>;
};
