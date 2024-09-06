/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type SchaleProps = {
  /** セルの横幅 */
  cellWidth: number;
  /** 1行あたりの最大セル配置件数 */
  maxWidth: number;
  /** 1列あたりの最大セル配置件数 */
  maxHeight: number;
  /** セルのリスト */
  children: React.ReactNode;
};

export const Schale: React.FC<SchaleProps> = ({
  cellWidth,
  maxWidth,
  maxHeight,
  children: cells,
}) => {
  const schaleStyle = css({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${cellWidth}px)`,
    maxWidth,
    maxHeight,
  });
  return <div css={schaleStyle}>{cells}</div>;
};
