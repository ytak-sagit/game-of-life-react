/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type CellProps = {
  /** セルの横幅 */
  width?: number;
  /** セルの縦幅 */
  height?: number;
  /** セルの生死状態（true:生, false:死） */
  alive?: boolean;
};

export const Cell: React.FC<CellProps> = ({
  width = 10,
  height = 10,
  alive = false,
}) => {
  const cellStyle = css({
    width: width,
    height: height,
    backgroundColor: alive ? "#00ff2a" : "#333333",
    borderColor: "#333333",
  });
  return <div css={cellStyle} />;
};
