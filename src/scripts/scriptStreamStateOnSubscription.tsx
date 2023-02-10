import React from "react";
import { createRoot } from "react-dom/client";
import StreamStateOnSubscription from "../examples/StreamStateOnSubscription";

window.onload = async () => {
  const reactRoot = document.querySelector("#react-root");
  if (!reactRoot) return;
  createRoot(reactRoot).render(
    <StreamStateOnSubscription />
  );
};
