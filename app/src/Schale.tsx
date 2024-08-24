type SchaleProps = {
  /** シャーレの横幅 */
  width?: number;
  /** シャーレの縦幅 */
  height?: number;
  /** セルのリスト */
  children: React.ReactNode;
};

export const Schale: React.FC<SchaleProps> = ({
  width = 200,
  height = 100,
  children: cells,
}) => {
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 10px)",
    maxWidth: width,
    maxHeight: height,
  };
  return <div style={style}>{cells}</div>;
};
