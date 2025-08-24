/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type React from "react";
import type { ReactElement } from "react";

type FlexListProps = {
  /** 子コンポーネントの並びの方向("column":縦, "row":横) */
  flexDirection: "column" | "row";
  /** 子コンポーネント間の余白サイズ(pixel) */
  gapSizePx?: number;
  /** 子コンポーネント(複数指定が必須) */
  children: ReadonlyArray<ReactElement>;
};

export const FlexList: React.FC<FlexListProps> = ({
  flexDirection,
  gapSizePx = 12,
  children,
}) => {
  const ulStyle = css({
    display: "flex",
    justifyContent: "center",
    flexDirection,
    rowGap: `${gapSizePx}px`,
    columnGap: `${gapSizePx}px`,
    listStyle: "none",
    paddingInlineStart: "unset",
    marginBlock: "unset",
  });
  const liStyle = css({
    marginTop: "auto",
    marginBottom: "auto",
  });

  return (
    <ul css={ulStyle}>
      {children.map((child, index) => (
        // biome-ignore lint: safe map index of array to key because static
        <li key={index} css={liStyle}>
          {child}
        </li>
      ))}
    </ul>
  );
};
