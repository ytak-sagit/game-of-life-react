import { useState } from "react";
import {
  NUMBER_OF_CELLS_PER_COL,
  NUMBER_OF_CELLS_PER_ROW,
} from "~/config/environments";
import { random } from "~/utils/gol-pattern-generator";
import { renderPattern } from "~/utils/gol-pattern-renderer";
import { ALIVE, apply, DEAD } from "~/utils/gol-rule";

// TODO: hooks rename
export const useCellStates = () => {
  const [cellStates, setCellStates] = useState(
    [...Array(SUM_OF_CELLS)].map(random),
  );
  const [generation, setGeneration] = useState(0);

  const incrementCellStates = () => {
    setCellStates((prev) =>
      apply(prev, NUMBER_OF_CELLS_PER_ROW, NUMBER_OF_CELLS_PER_COL),
    );
    setGeneration((prev) => prev + 1);
  };

  const resetCellStates = () => {
    setCellStates(Array(SUM_OF_CELLS).fill(DEAD));
    setGeneration(0);
  };

  const toggleCellStateAt = (index: number) => {
    cellStates[index] ^= ALIVE;
    setCellStates([...cellStates]);
  };

  const renderCellPattern = (patternName: string) => {
    const renderedCellStates = renderPattern(
      patternName,
      NUMBER_OF_CELLS_PER_ROW,
      cellStates.length,
    );
    setCellStates(renderedCellStates);
    setGeneration(0);
  };

  return {
    cellStates,
    generation,
    incrementCellStates,
    resetCellStates,
    toggleCellStateAt,
    renderCellPattern,
  };
};

const SUM_OF_CELLS = NUMBER_OF_CELLS_PER_ROW * NUMBER_OF_CELLS_PER_COL;
