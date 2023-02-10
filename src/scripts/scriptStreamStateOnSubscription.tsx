import React from 'react';
import { createRoot } from 'react-dom/client';
import StreamStateOnSubscription from '../examples/StreamStateOnSubscription';

declare global {
  interface Window {
    ROOT_PATH: string;
  }
}

window.onload = async () => {
  const reactRoot = document.querySelector('#react-root');
  if (!reactRoot) return;
  createRoot(reactRoot).render(<StreamStateOnSubscription />);
};
