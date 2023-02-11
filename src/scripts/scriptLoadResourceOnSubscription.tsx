import React from 'react';
import { createRoot } from 'react-dom/client';
import LoadResourceOnSubscription from '../examples/LoadResourceOnSubscription';

declare global {
  interface Window {
    ROOT_PATH: string;
  }
}

window.onload = async () => {
  const reactRoot = document.querySelector('#react-root');
  if (!reactRoot) return;
  createRoot(reactRoot).render(<LoadResourceOnSubscription />);
};
