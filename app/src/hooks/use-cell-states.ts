import { useState } from "react";
import {
  NUMBER_OF_CELLS_PER_COL,
  NUMBER_OF_CELLS_PER_ROW,
} from "~/config/environments";
import { ALIVE } from "~/types/cell-state";
import { initialize } from "~/utils/gol-pattern-initializer";
import { render } from "~/utils/gol-pattern-renderer";
import { patternStore } from "~/utils/gol-pattern-store";
import { apply } from "~/utils/gol-rule";

// TODO: hooks rename
export const useCellStates = () => {
  const [cellStates, setCellStates] = useState(
    patternStore.random(SUM_OF_CELLS),
  );
  const [generation, setGeneration] = useState(0);

  const incrementCellStates = () => {
    setCellStates((prev) =>
      apply(prev, NUMBER_OF_CELLS_PER_ROW, NUMBER_OF_CELLS_PER_COL),
    );
    setGeneration((prev) => prev + 1);
  };

  const resetCellStates = () => {
    setCellStates(initialize(SUM_OF_CELLS));
    setGeneration(0);
  };

  const toggleCellStateAt = (index: number) => {
    cellStates[index] ^= ALIVE;
    setCellStates([...cellStates]);
  };

  const renderCellPattern = (patternName: string) => {
    const renderedCellStates = render(
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
