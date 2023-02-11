import React, { useCallback } from 'react';
import {
  dispatchAction,
  actionCreator,
  reducedStream,
  reducer,
  action$,
} from 'rxbeach';
import { map, scan, startWith } from 'rxjs/operators';
import { connect } from 'rxbeach/react';
import CodeSnippet from '../CodeSnippet';
import Print from '../Print';
import { ofType } from 'rxbeach/operators';

const getTimeStamp = () => {
  const date = new Date();
  return `${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes()
  ).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
};

const toggleShowHide = actionCreator('[TEST] TOGGLE_SHOW_HIDE');

const isVisible$ = reducedStream('isVisible$', { isVisible: true }, [
  reducer(toggleShowHide, ({ isVisible }) => ({ isVisible: !isVisible })),
]);

// example
const notify = actionCreator('[TEST] NOTIFY');
const startAction = actionCreator('[ardoq] START_ACTION');

const withoutStartAction$ = action$.pipe(
  ofType(notify),
  scan(({ count }) => ({ count: count + 1, last: getTimeStamp() }), {
    count: 0,
    last: getTimeStamp(),
  }),
  map((state) => ({ str: JSON.stringify(state) }))
);

const withStartAction$ = action$.pipe(
  ofType(notify),
  startWith(startAction()),
  scan(({ count }) => ({ count: count + 1, last: getTimeStamp() }), {
    count: 0,
    last: getTimeStamp(),
  }),
  map((state) => ({ str: JSON.stringify(state) }))
);
// end example

const ConnectedWithout = connect(Print, withoutStartAction$);
const ConnectedWith = connect(Print, withStartAction$);

const Page = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section>
      <h2>stream state on subscription</h2>
      <CodeSnippet
        src={`${window.ROOT_PATH}/src/examples/StreamStateOnSubscription.tsx`}
      />
      <p>
        <button onClick={useCallback(() => dispatchAction(notify()), [])}>
          notify
        </button>
      </p>
      <p>
        <button
          onClick={useCallback(() => dispatchAction(toggleShowHide()), [])}
        >
          {isVisible ? 'Hide views' : 'Show views'}
        </button>
      </p>
      {isVisible && (
        <>
          <h3>withoutStartAction$</h3>
          <ConnectedWithout />
          <h3>withStartAction$</h3>
          <ConnectedWith />
        </>
      )}
    </section>
  );
};

const ConnectedPage = connect(Page, isVisible$);

const StreamStateOnSubscription = () => {
  return <ConnectedPage />;
};

export default StreamStateOnSubscription;
// end example
