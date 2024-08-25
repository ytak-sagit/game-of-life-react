import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Cell } from "./Cell";
import { Schale } from "./Schale";
import { ALIVE, apply, DEAD, isOutside, type aliveState } from "./gol-rule";

function App() {
  const [count, setCount] = useState(0);

  const width = 80;
  const height = 80;
  const [aliveState, setAliveState] = useState(
    [...Array((width + 2) * (height + 2))].map<aliveState>((_, i) =>
      isOutside(i, width + 2, height + 2)
        ? DEAD
        : Math.random() >= 0.5
          ? ALIVE
          : DEAD,
    ),
  );
  const onClick = () =>
    setAliveState((prev) => [...apply(prev, width, height)]);

  const cells = aliveState
    .filter((_, i) => !isOutside(i, width + 2, height + 2))
    .map((alive, i) => {
      const key = i;
      return <Cell key={key} alive={Boolean(alive)} />;
    });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={onClick}>
          Next generation
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Schale width={width * 10} height={height * 10}>
        {cells}
      </Schale>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
