import type { ChangeEvent } from "react";
import { FlexList } from "~/components/flex-list";
import {
  CELL_HEIGHT,
  CELL_WIDTH,
  NUMBER_OF_CELLS_PER_COL,
  NUMBER_OF_CELLS_PER_ROW,
} from "~/config/environments";
import { Cell } from "~/features/cell";
import { Generation } from "~/features/generation";
import { PatternPulldownList } from "~/features/pattern-pulldown-list";
import { Schale } from "~/features/schale";
import { useCellStates } from "~/hooks/use-cell-states";
import { usePolling } from "~/hooks/use-polling";

export const App = () => {
  const {
    cellStates,
    generation,
    incrementCellStates,
    resetCellStates,
    toggleCellStateAt,
    renderCellPattern,
  } = useCellStates();
  const { isPolling, togglePolling } = usePolling(incrementCellStates, 100);

  const onClickCell = (index: number) => () => {
    if (isPolling) {
      return;
    }
    toggleCellStateAt(index);
  };
  const cells = cellStates.map((state, index) => {
    return (
      <Cell
        // biome-ignore lint: safe map index of array to key because static
        key={index}
        alive={Boolean(state)}
        disabled={isPolling}
        onClick={onClickCell(index)}
      />
    );
  });

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (isPolling) {
      return;
    }
    renderCellPattern(event.target.value);
  };

  const onClickStartOrStop = () => togglePolling();
  const onClickNext = () => incrementCellStates();
  const onReset = () => resetCellStates();

  return (
    <main>
      <FlexList>
        <button type="button" onClick={onClickStartOrStop}>
          {isPolling ? "Stop" : "Start"}
        </button>
        <button type="button" onClick={onClickNext} disabled={isPolling}>
          Next
        </button>
        <button type="reset" onClick={onReset} disabled={isPolling}>
          Reset
        </button>
        <PatternPulldownList onChange={onChange} disabled={isPolling} />
      </FlexList>
      <Generation value={generation} />
      <Schale
        cellWidth={CELL_WIDTH}
        maxWidth={CELL_WIDTH * NUMBER_OF_CELLS_PER_ROW}
        maxHeight={CELL_HEIGHT * NUMBER_OF_CELLS_PER_COL}
      >
        {cells}
      </Schale>
    </main>
  );
};
