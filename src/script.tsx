import "./process";
import React, { useCallback } from "react";
import { createRoot } from "react-dom/client";
import {
  dispatchAction,
  actionCreator,
  ActionCreatorWithPayload,
  reducedStream,
  reducer,
} from "rxbeach";
import { combineLatest } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";
import { connect } from "rxbeach/react";
import Print from "./Print";

const getCodeSnippet = async (url) => {
  try {
    const res = await fetch(url);
    const code = await res.text();
    console.log(code);
    const result = code.match(
      new RegExp(/(?:\/\/ example)(.*?)\n(.*?)(?:\/\/ end example)/, "s")
    );
    const [, id, snippet] = result ?? [, , "---"];
    return { id, snippet };
  } catch (e) {
    return { id: undefined, snippet: "---" };
  }
};

// example combineLatest-versus-withLatestFrom
type CountPayload = { count: number };

const countOne = actionCreator<CountPayload>("[TEST] COUNT_1");
const countTwo = actionCreator<CountPayload>("[TEST] COUNT_2");
const countThree = actionCreator<CountPayload>("[TEST]  COUNT_3");

const countOne$ = reducedStream("countOne$", { count: -1 }, [
  reducer<CountPayload, CountPayload>(countOne, (_, payload: CountPayload) => ({
    ...payload,
  })),
]);

const countTwo$ = reducedStream("countTwo$", { count: -1 }, [
  reducer<CountPayload, CountPayload>(countTwo, (_, payload: CountPayload) => ({
    ...payload,
  })),
]);

const countTree$ = reducedStream("countThree$", { count: -1 }, [
  reducer<CountPayload, CountPayload>(
    countThree,
    (_, payload: CountPayload) => ({
      ...payload,
    })
  ),
]);

const test$ = combineLatest({
  countOne: countOne$,
  countTwo: countTwo$,
}).pipe(
  withLatestFrom(countTree$),
  map(([{ countOne, countTwo }, countTree]) => ({
    log: JSON.stringify(
      {
        countOne,
        countTwo,
        countTree,
      },
      null,
      2
    ),
  }))
);
// end example

const getCountClickHandler = (
  actionCreator: ActionCreatorWithPayload<CountPayload>
) => {
  let counter = 0;
  return () => dispatchAction(actionCreator({ count: counter++ }));
};

const ConnectedPrint = connect(Print, test$);

const TestPage = ({ codeSnippet }: { codeSnippet: string }) => {
  return (
    <div>
      <h1>Stream Code Exmaples</h1>
      <h2>
        <code>combineLatest</code> versus <code>withLatestFrom</code>
      </h2>
      <Print str={codeSnippet} />
      <p>
        <button onClick={useCallback(getCountClickHandler(countOne), [])}>
          increase countOne
        </button>
      </p>
      <p>
        <button onClick={useCallback(getCountClickHandler(countTwo), [])}>
          increase countTwo
        </button>
      </p>
      <p>
        <button onClick={useCallback(getCountClickHandler(countThree), [])}>
          increase countThree
        </button>
      </p>
      <pre></pre>
      <h2>test$</h2>
      <ConnectedPrint />
      <p>
        <a href="https://github.com/chriskr/stream-examples">github repo</a>
      </p>
    </div>
  );
};

window.onload = async () => {
  const { snippet } = await getCodeSnippet("../src/script.tsx");
  const reactRoot = document.querySelector("#react-root");
  if (!reactRoot) return;
  createRoot(reactRoot).render(<TestPage codeSnippet={snippet} />);
};
