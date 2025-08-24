import type React from "react";

type GenerationProps = {
  /** 世代数 */
  value: number;
};

export const Generation: React.FC<GenerationProps> = ({ value }) => {
  return <span>Generation is #{value}</span>;
};
