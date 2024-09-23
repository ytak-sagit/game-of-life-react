/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ReactElement } from "react";

type FlexListProps = {
  /** 子コンポーネント間の余白サイズ(pixel) */
  gapSizePx?: number;
  /** 子コンポーネント(複数指定が必須) */
  children: ReadonlyArray<ReactElement>;
};

export const FlexList: React.FC<FlexListProps> = ({
  gapSizePx = 12,
  children,
}) => {
  const ulStyle = css({
    display: "flex",
    justifyContent: "center",
    columnGap: `${gapSizePx}px`,
    listStyle: "none",
    paddingInlineStart: "unset",
    marginBlock: "unset",
  });

  return (
    <ul css={ulStyle}>
      {children.map((child, index) => (
        // biome-ignore lint: safe map index of array to key because static
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
};
