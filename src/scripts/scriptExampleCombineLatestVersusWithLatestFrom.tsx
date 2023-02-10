import React from "react";
import { createRoot } from "react-dom/client";
import ExampleCombineLatestVersusWithLatestFrom from "../examples/ExampleCombineLatestVersusWithLatestFrom";

window.onload = async () => {
  const reactRoot = document.querySelector("#react-root");
  if (!reactRoot) return;
  createRoot(reactRoot).render(
    <ExampleCombineLatestVersusWithLatestFrom />
  );
};
