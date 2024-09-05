import { useState } from "react";
import "./App.css";
import { Cell } from "./Cell";
import { Schale } from "./Schale";
import { ALIVE, apply, DEAD, type aliveState } from "./gol-rule";

function App() {
  const width = 80;
  const height = 80;
  const [aliveState, setAliveState] = useState(
    [...Array(width * height)].map<aliveState>(() =>
      Math.random() >= 0.5 ? ALIVE : DEAD,
    ),
  );
  const [generation, setGeneration] = useState(0);

  // TODO: setInterval/setTimeoutにより自動で描画が進むようにしたい
  const onClick = () => {
    setAliveState((prev) => [...apply(prev, width, height)]);
    setGeneration((prev) => prev + 1);
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
