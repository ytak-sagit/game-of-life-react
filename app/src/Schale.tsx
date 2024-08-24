type SchaleProps = {
  /** セルのリスト */
  children: React.ReactNode;
};

export const Schale: React.FC<SchaleProps> = ({ children: cells }) => {
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 8px)",
  };
  return <div style={style}>{cells}</div>;
};
