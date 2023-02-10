import { combineLatest, from, map, Observable, shareReplay, tap } from 'rxjs';

export const withOnFistSubscription = <T>(
  observable: Observable<T>,
  callback: () => void
) => {
  return combineLatest({
    observable,
    startStream: from([null]).pipe(tap(callback)),
  }).pipe(
    map(({ observable }) => observable),
    shareReplay({ refCount: true, bufferSize: 1 })
  );
};
