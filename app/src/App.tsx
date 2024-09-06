import { useRef, useState } from "react";
import "./App.css";
import { Cell } from "./Cell";
import { Schale } from "./Schale";
import { ALIVE, apply, DEAD, type aliveState } from "./gol-rule";

const CELL_WIDTH = 10;
const CELL_HEIGHT = 10;

function App() {
  const width = 80;
  const height = 80;
  const [aliveState, setAliveState] = useState(
    [...Array(width * height)].map<aliveState>(() =>
      Math.random() >= 0.5 ? ALIVE : DEAD,
    ),
  );
  const [generation, setGeneration] = useState(0);

  const onClick = () => {
    setAliveState((prev) => [...apply(prev, width, height)]);
    setGeneration((prev) => prev + 1);
  };

  const [isSimulating, setIsSimulating] = useState(false);
  const simulatingRef = useRef(isSimulating);
  simulatingRef.current = isSimulating;
  // TODO: useCallback() の導入検討
  const simulating = () => {
    if (!simulatingRef.current) {
      return;
    }

    onClick();

    // 再帰呼び出し
    setTimeout(simulating, 100);
  };

  const onClickCell = (index: number) => () => {
    aliveState[index] ^= ALIVE;
    setAliveState([...aliveState]);
  };

  const cells = aliveState.map((alive, i) => {
    const key = i;
    return (
      <Cell key={key} alive={alive === ALIVE} onClick={onClickCell(key)} />
    );
  });

  const onReset = () => {
    setAliveState(Array<aliveState>(aliveState.length).fill(DEAD));
    setGeneration(0);
  };

  // TODO: Start/Stopボタンのコンポーネント化
  // TODO: Startボタン活性時、Next generationボタンを非活性にする
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsSimulating((prev) => !prev);
          // NOTE:
          // setState() は非同期で state を更新するため、
          // setState() 直後は更新前の state の値が参照される
          if (isSimulating) {
            simulatingRef.current = false;
          } else {
            simulatingRef.current = true;
            simulating();
          }
        }}
      >
        {isSimulating ? "Stop" : "Start"}
      </button>
      <button type="button" onClick={onClick}>
        Next
      </button>
      <button type="reset" onClick={onReset}>
        Reset
      </button>
      <p>Generaion is #{generation}</p>
      <Schale
        cellWidth={CELL_WIDTH}
        maxWidth={CELL_WIDTH * width}
        maxHeight={CELL_HEIGHT * height}
      >
        {cells}
      </Schale>
    </>
  );
}

export default App;
