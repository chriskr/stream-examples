import React, { useCallback } from "react";
import {
  dispatchAction,
  actionCreator,
  ActionCreatorWithPayload,
  reducedStream,
  reducer,
  action$,
} from "rxbeach";
import { combineLatest } from "rxjs";
import { map, scan, startWith, withLatestFrom } from "rxjs/operators";
import { connect } from "rxbeach/react";
import CodeSnippet from "../CodeSnippet";
import Print from "../Print";
import { ofType } from "rxbeach/operators";

// example
const notify = actionCreator("[TEST] NOTIFY");
const startAction = actionCreator("[ardoq] START_ACTION");

const withoutStartAction$ = action$.pipe(
  ofType(notify),
  scan(({ count }, _) => ({ count: count + 1 }), { count: 0 }),
  map((state) => ({ str: JSON.stringify(state) }))
);

const withStartAction$ = action$.pipe(
  ofType(notify),
  startWith(startAction()),
  scan(({ count }, _) => ({ count: count + 1 }), { count: 0 }),
  map((state) => ({ str: JSON.stringify(state) }))
);
// end example

const ConnectedWithout = connect(Print, withoutStartAction$);
const ConnectedWith = connect(Print, withStartAction$);

const ExampleCombineLatestVersusWithLatestFrom = () => {
  return (
    <section>
      <h2>stream state on subscription</h2>
      <CodeSnippet src={"../src/examples/StreamStateOnSubscription.tsx"} />
      <p>
        <button onClick={useCallback(() => dispatchAction(notify()), [])}>
          notify
        </button>
      </p>
      <h2>withoutStartAction$</h2>
      <ConnectedWithout />
      <h2>withStartAction$</h2>
      <ConnectedWith />
    </section>
  );
};

export default ExampleCombineLatestVersusWithLatestFrom;
