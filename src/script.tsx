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
import Log from "./Log";

const getCodeSnippet = async () => {
  try {
    const res = await fetch("../src/script.tsx");
    const code = await res.text();
    console.log(code);
    const snippet = code.match(
      new RegExp(/(?<=\/\/ example\s*\n).*?(?=\/\/ end example)/, "s")
    );
    return snippet?.[0] ?? "--";
  } catch (e) {
    return "--";
  }
};

// example
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

const ConnectedLog = connect(Log, test$);

const TestPage = ({ codeSnippet }: { codeSnippet: string }) => {
  return (
    <div>
      <h2>
        <code>combineLatest</code> versus <code>withLatestFrom</code>
      </h2>
      <Log log={codeSnippet} />
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
      <ConnectedLog />
      <p>
        <a href="https://github.com/chriskr/stream-examples">github repo</a>
      </p>
    </div>
  );
};

window.onload = async () => {
  const snippet = await getCodeSnippet();
  const reactRoot = document.querySelector("#react-root");
  if (!reactRoot) return;
  createRoot(reactRoot).render(<TestPage codeSnippet={snippet} />);
};
