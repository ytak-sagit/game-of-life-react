import { FlexList } from "~/components/flex-list";
import {
  CELL_HEIGHT,
  CELL_WIDTH,
  NUMBER_OF_CELLS_PER_COL,
  NUMBER_OF_CELLS_PER_ROW,
} from "~/config/environments";
import { Cell } from "~/features/cell";
import { Generation } from "~/features/generation";
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
  } = useCellStates();
  const { isPolling, togglePolling } = usePolling(incrementCellStates, 100);

  const cells = cellStates.map((state, i) => {
    const key = i;
    return (
      <Cell key={key} alive={Boolean(state)} onClick={toggleCellStateAt(key)} />
    );
  });

  const onClickStartOrStop = () => togglePolling();
  const onClickNext = () => incrementCellStates();
  const onReset = () => resetCellStates();

  // TODO: Start/Stopボタンのコンポーネント化
  // TODO: Startボタン活性時、Next generationボタンを非活性にする
  return (
    <>
      <FlexList>
        <button type="button" onClick={onClickStartOrStop}>
          {isPolling ? "Stop" : "Start"}
        </button>
        <button type="button" onClick={onClickNext}>
          Next
        </button>
        <button type="reset" onClick={onReset}>
          Reset
        </button>
      </FlexList>
      <Generation value={generation} />
      <Schale
        cellWidth={CELL_WIDTH}
        maxWidth={CELL_WIDTH * NUMBER_OF_CELLS_PER_ROW}
        maxHeight={CELL_HEIGHT * NUMBER_OF_CELLS_PER_COL}
      >
        {cells}
      </Schale>
    </>
  );
};
