import React from "react";
import { useAsync, AsyncOptions } from "react-async";
import Print from "./Print";

const getCodeSnippet = async (
  { src }: AsyncOptions<string>,
  { signal }: AbortController
) => {
  try {
    const res = await fetch(src, { signal });
    const code = await res.text();
    const result = code.match(
      new RegExp(/(?:\/\/ example)(.*?)\n(.*?)(?:\/\/ end example)/, "s")
    );
    const [, , snippet] = result!;
    return snippet;
  } catch (e) {
    throw e;
  }
};

const CodeSnippet = ({ src }: { src: string }) => {
  const { data, error } = useAsync(getCodeSnippet, { src });
  if (error) return <p>{error.message}</p>;
  if (data) return <Print str={data} />;
  return null;
};

export default CodeSnippet;
