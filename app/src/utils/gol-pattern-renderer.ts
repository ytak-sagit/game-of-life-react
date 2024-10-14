import { isValidPatternName, patternStore } from "./gol-pattern-store";
import { DEAD, type CellAliveState } from "./gol-rule";

export const renderPattern = (
  patternName: string,
  numberOfCellsPerRow: number,
  sumOfCells: number,
) => {
  if (!patternName || !isValidPatternName(patternName)) {
    return [];
  }

  if (patternName === "random") {
    return patternStore.random(sumOfCells);
  }

  const cellStates = Array<CellAliveState>(sumOfCells).fill(DEAD);
  const patternConfigs = patternStore[patternName];
  const offsetRenderingBegin = numberOfCellsPerRow + 1;

  for (let h = 0; h < patternConfigs.height; h++) {
    for (let w = 0; w < patternConfigs.width; w++) {
      const offsetCellStates =
        offsetRenderingBegin + w + numberOfCellsPerRow * h;
      const offsetPatternConfigs = w + patternConfigs.width * h;
      cellStates[offsetCellStates] = patternConfigs.cells[offsetPatternConfigs];
    }
  }

  return cellStates;
};
