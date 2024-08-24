type SchaleProps = {
  /** セルのリスト */
  children: React.ReactNode;
};

export const Schale: React.FC<SchaleProps> = ({ children: cells }) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  return <div style={style}>{cells}</div>;
};
