import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Log = ({ log }: { log: string }) => (
  <pre>
    <SyntaxHighlighter
      language="typescript"
      style={github}
      showLineNumbers={true}
      wrapLines={true}
    >
      {log}
    </SyntaxHighlighter>
  </pre>
);

export default Log;
