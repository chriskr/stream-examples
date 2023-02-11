import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { connect } from 'rxbeach/react';
import { selectedTheme$, styles, Themes } from './themes';

SyntaxHighlighter.registerLanguage('typescript', typescript);

const Print = ({ str, theme }: { str: string; theme: Themes }) => (
  <SyntaxHighlighter
    language="typescript"
    style={styles[theme]}
    showLineNumbers={true}
    wrapLines={true}
    customStyle={{
      fontFamily: "'Roboto Mono', monospace",
      fontSize: '0.8em',
    }}
    codeTagProps={{ style: { fontFamily: 'inherit' } }}
  >
    {str}
  </SyntaxHighlighter>
);

const ConnectedPrint = connect(Print, selectedTheme$);

export default ConnectedPrint;
