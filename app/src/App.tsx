import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Cell } from "./Cell";
import { Schale } from "./Schale";

function App() {
  const [count, setCount] = useState(0);
  // TODO: セルの生死判定をするのであれば、alive だけの配列で判定処理を実行し、それをコンポーネントに渡す必要がある
  // const [aliveState, setAliveState] = useStete<(0 | 1)[]>([...Array(200).map<0 | 1>(_ => Math.random() >= 0.5 ? 1 : 0]));
  // setAliveState((prev) => [...prev, ...judge(prev, 20, 10)]);
  // const judge = (aliveStates: (0 | 1)[], width: number, height: number) => {
  //   // 生死判定
  //   // 近傍8セルの状態を取得して判定する
  // };
  const cells = [...Array(200)].map((_, i) => (
    <Cell key={i} alive={Math.random() >= 0.5} />
  ));

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Schale>{cells}</Schale>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
