import React from 'react';
import { createRoot } from 'react-dom/client';
import CombineLatestVersusWithLatestFrom from './examples/CombineLatestVersusWithLatestFrom';
import LoadResourceOnSubscription from './examples/LoadResourceOnSubscription';
import StreamStateOnSubscription from './examples/StreamStateOnSubscription';

declare global {
  interface Window {
    ROOT_PATH: string;
  }
}

window.onload = async () => {
  const reactRoot = document.querySelector('#react-root');
  if (!reactRoot) return;
  createRoot(reactRoot).render(
    <div>
      <h1>Stream Code Exmaples</h1>
      <CombineLatestVersusWithLatestFrom />
      <StreamStateOnSubscription />
      <LoadResourceOnSubscription />
      <p>
        <a href="https://github.com/chriskr/stream-examples">github repo</a>
      </p>
    </div>
  );
};
