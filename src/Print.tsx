import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import style from "react-syntax-highlighter/dist/esm/styles/prism/vs"; // atom-dark ghcolors vs vsc-dark-plus

SyntaxHighlighter.registerLanguage("typescript", typescript);

const Print = ({ str }: { str: string }) => (
  <SyntaxHighlighter
    language="typescript"
    style={style}
    showLineNumbers={true}
    wrapLines={true}
    customStyle={{
      fontFamily: "'Roboto Mono', monospace",
      backgroundColor: "hsl(0, 0%, 97%)",
      fontSize: "0.8em",
    }}
    codeTagProps={{ style: { fontFamily: "inherit" } }}
  >
    {str}
  </SyntaxHighlighter>
);

export default Print;
