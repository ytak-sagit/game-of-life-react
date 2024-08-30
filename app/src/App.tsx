import { useRef, useState } from "react";
import "./App.css";
import { Cell } from "./Cell";
import { Schale } from "./Schale";
import { ALIVE, apply, DEAD, isOutside, type aliveState } from "./gol-rule";

function App() {
  const width = 80;
  const height = 80;
  const [aliveState, setAliveState] = useState(
    [...Array((width + 2) * (height + 2))].map<aliveState>((_, i) =>
      // TODO: isOutsideを参照しないようにしたい
      isOutside(i, width + 2, height + 2)
        ? DEAD
        : Math.random() >= 0.5
          ? ALIVE
          : DEAD,
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

  // TODO: filterに余計な時間を要するため、外側の要素を保持しない方法としたい
  const cells = aliveState
    .filter((_, i) => !isOutside(i, width + 2, height + 2))
    .map((alive, i) => {
      const key = i;
      return <Cell key={key} alive={Boolean(alive)} />;
    });

  // TODO: セルをクリックすることで生死をON/OFFできるようにしたい
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
        Next generation
      </button>
      <p>Generaion is #{generation}</p>
      <Schale width={width * 10} height={height * 10}>
        {cells}
      </Schale>
    </>
  );
}

export default App;
