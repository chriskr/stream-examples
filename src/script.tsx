import React from "react";
import { createRoot } from "react-dom/client";
import ExampleCombineLatestVersusWithLatestFrom from "./examples/ExampleCombineLatestVersusWithLatestFrom";
import StreamStateOnSubscription from "./examples/StreamStateOnSubscription";

window.onload = async () => {
  const reactRoot = document.querySelector("#react-root");
  if (!reactRoot) return;
  createRoot(reactRoot).render(
    <div>
      <h1>Stream Code Exmaples</h1>
      <ExampleCombineLatestVersusWithLatestFrom />
      <StreamStateOnSubscription />
      <p>
        <a href="https://github.com/chriskr/stream-examples">github repo</a>
      </p>
    </div>
  );
};
