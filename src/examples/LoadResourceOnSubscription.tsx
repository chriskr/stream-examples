import React from 'react';
import CodeSnippet from '../CodeSnippet';

const Page = () => {
  return (
    <section>
      <h2>load resource on subscription</h2>
      <CodeSnippet src={`${window.ROOT_PATH}/src/CodeSnippet.tsx`} />
    </section>
  );
};

export default Page;
