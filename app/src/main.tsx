import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "~/app";
import "~/index.css";

// biome-ignore lint: non-null assertion should be allowed
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
