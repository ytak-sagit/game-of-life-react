type CellProps = {
  /** セルの横幅 */
  width: number;
  /** セルの縦幅 */
  height: number;
  /** セルの生死状態（true:生, false:死） */
  alive?: boolean;
};

export const Cell: React.FC<CellProps> = ({
  width = 8,
  height = 8,
  alive = false,
}) => {
  const style: React.CSSProperties = {
    width: width,
    height: height,
    backgroundColor: alive ? "#00ff2a" : "#333333",
    borderColor: "#333333",
  };
  return <div style={style} />;
};
