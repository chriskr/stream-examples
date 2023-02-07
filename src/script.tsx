import "./process";
import React, { useCallback } from "react";
import { createRoot } from "react-dom/client";
import ExampleCombineLatestVersusWithLatestFrom from "./examples/ExampleCombineLatestVersusWithLatestFrom";

window.onload = async () => {
  const reactRoot = document.querySelector("#react-root");
  if (!reactRoot) return;
  createRoot(reactRoot).render(
    <div>
      <ExampleCombineLatestVersusWithLatestFrom />
      <p>
        <a href="https://github.com/chriskr/stream-examples">github repo</a>
      </p>
    </div>
  );
};
