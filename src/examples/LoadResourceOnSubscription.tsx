import React from 'react';
import CodeSnippet from '../CodeSnippet';
import SelectTheme from '../SelectTheme';

const Page = () => {
  return (
    <section className="code-example">
      <h2>load resource on subscription</h2>
      <SelectTheme />
      <CodeSnippet src={`${window.ROOT_PATH}/src/CodeSnippet.tsx`} />
    </section>
  );
};

export default Page;
