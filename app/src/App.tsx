import { useState } from "react";
import "./App.css";
import { Cell } from "./Cell";
import { Schale } from "./Schale";
import { ALIVE, apply, DEAD, isOutside, type aliveState } from "./gol-rule";

function App() {
  const width = 32 * 3;
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

  // TODO: setInterval/setTimeoutにより自動で描画が進むようにしたい
  const onClick = () => {
    setAliveState((prev) => [...apply(prev, width, height)]);
    setGeneration((prev) => prev + 1);
  };

  // TODO: filterに余計な時間を要するため、外側の要素を保持しない方法としたい
  const cells = aliveState
    .filter((_, i) => !isOutside(i, width + 2, height + 2))
    .map((alive, i) => {
      const key = i;
      return <Cell key={key} alive={Boolean(alive)} />;
    });

  // TODO: セルをクリックすることで生死をON/OFFできるようにしたい
  return (
    <>
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
