import React, { useCallback } from "react";
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
import CodeSnippet from "../CodeSnippet";
import Print from "../Print";

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
    str: JSON.stringify(
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

const ExampleCombineLatestVersusWithLatestFrom = () => {
  return (
    <div>
      <h1>Stream Code Exmaples</h1>
      <h2>
        <code>combineLatest</code> versus <code>withLatestFrom</code>
      </h2>
      <CodeSnippet
        src={"../src/examples/ExampleCombineLatestVersusWithLatestFrom.tsx"}
      />
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
    </div>
  );
};

export default ExampleCombineLatestVersusWithLatestFrom;
