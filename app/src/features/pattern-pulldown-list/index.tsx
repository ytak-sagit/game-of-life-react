/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { SelectHTMLAttributes } from "react";
import type { PatternStoreKey } from "~/utils/gol-pattern-generator";

type PatternPulldownListProps = Required<
  Pick<SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "disabled">
>;

type SelectOption = {
  value: PatternStoreKey | "";
  label: string;
};

export const PatternPulldownList: React.FC<PatternPulldownListProps> = ({
  onChange,
  disabled,
}) => {
  const selectOptions: ReadonlyArray<SelectOption> = [
    { value: "", label: "" },
    // TODO: ランダムも欲しい...というか初期値がランダムで良いような
    { value: "glider", label: "グライダー" },
    { value: "gliderGun", label: "グライダー銃" },
    { value: "pulsar", label: "パルサー" },
    { value: "nebula", label: "銀河" },
    { value: "clock01", label: "時計I" },
    { value: "clock02", label: "時計II" },
    { value: "lightweightSpaceship", label: "軽量級宇宙船" },
    { value: "middleweightSpaceship", label: "中量級宇宙船" },
    { value: "heavyweightSpaceship", label: "重量級宇宙船" },
    { value: "pufferTrain", label: "ｼｭｼｭﾎﾟｯﾎﾟ列車" },
  ];

  const selectStyle = css({
    borderRadius: "6px",
    border: "1px solid transparent",
    padding: "0.6em 0.6em",
    fontSize: "1em",
    fontWeight: 500,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "border-color 0.25s",
    ":hover": {
      borderColor: "#646cff",
    },
  });

  // TODO: 描画範囲を超えるパターンのoptionはdisabledとする
  return (
    <select css={selectStyle} onChange={onChange} disabled={disabled}>
      {selectOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
