import React from 'react';
import { connect } from 'rxbeach/react';
import { from, map, startWith } from 'rxjs';
import { switchAll } from 'rxjs';
import Print from './Print';

const getCodeSnippet = async (src: string) => {
  try {
    const response = await fetch(src);
    if (response.status !== 200) {
      return {
        error: `Loading source failed: ${response.statusText}`,
      };
    }
    const text = await response.text();
    const result = text.match(
      new RegExp(/(?:\/\/ example)(.*?)\n(.*?)(?:\/\/ end example)/, 's')
    );
    if (!result) {
      return { code: text };
    }
    const [, , code] = result;
    return { code };
  } catch (e: any) {
    return { error: e.message };
  }
};

const View = ({
  code,
  error,
  loading,
}: {
  code?: string;
  error?: string;
  loading?: string;
}) => {
  if (loading) return <div>{loading}</div>;
  if (error) return <div>{error}</div>;
  if (code) return <Print str={code} />;
  return null;
};

const getLoadSrcStream = (src: string) =>
  from([src]).pipe(
    map(getCodeSnippet),
    switchAll(),
    startWith({ loading: 'loading..' })
  );

const CodeSnippet = ({ src }: { src: string }) => {
  const ConnectedPrint = connect(View, getLoadSrcStream(src));
  return <ConnectedPrint />;
};

export default CodeSnippet;
