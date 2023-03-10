const script = (moduleName) => `import React from 'react';
import { createRoot } from 'react-dom/client';
import ${moduleName} from '../examples/${moduleName}';

declare global {
  interface Window {
    ROOT_PATH: string;
  }
}

window.onload = async () => {
  const reactRoot = document.querySelector('#react-root');
  if (!reactRoot) return;
  createRoot(reactRoot).render(<${moduleName} />);
};
`;

export default script;
