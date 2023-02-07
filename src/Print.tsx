import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Print = ({ str }: { str: string }) => (
  <SyntaxHighlighter
    language="typescript"
    style={github}
    showLineNumbers={true}
    wrapLines={true}
  >
    {str}
  </SyntaxHighlighter>
);

export default Print;
