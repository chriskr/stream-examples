import vs from 'react-syntax-highlighter/dist/esm/styles/prism/vs';
import atom from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import github from 'react-syntax-highlighter/dist/esm/styles/prism/ghcolors';
import vsdark from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import { dispatchAction, actionCreator, reducedStream, reducer } from 'rxbeach';
import { combineLatest, from, map, tap } from 'rxjs';

export enum Themes {
  vs = 'vs',
  atom = 'atom',
  github = 'github',
  vsdark = 'vsdark',
}

export const styles = {
  [Themes.vs]: vs,
  [Themes.atom]: atom,
  [Themes.github]: github,
  [Themes.vsdark]: vsdark,
};

export const options = [
  { name: 'visual studio', value: Themes.vs },
  { name: 'atom', value: Themes.atom },
  { name: 'github', value: Themes.github },
  { name: 'visual studio dark', value: Themes.vsdark },
];

const selectTheme = actionCreator<{ theme: Themes }>('[THEMES] SELECT_THEME');
const startAction = actionCreator('[ardoq] START_ACTION');

export const setTheme = (theme: Themes) => {
  window.localStorage.setItem('theme', theme);
  dispatchAction(selectTheme({ theme }));
};

const getStored$ = from([startAction()]).pipe(
  tap(() => {
    const theme = (window.localStorage.getItem('theme') ?? Themes.vs) as Themes;
    if (theme !== Themes.vs) setTimeout(setTheme, 16, theme);
  })
);

const selectedTheme$ = reducedStream('selectedTheme$', { theme: Themes.vs }, [
  reducer(selectTheme, (_, { theme }) => ({ theme })),
]);

window.addEventListener('storage', ({ key, newValue }) => {
  if (key === 'theme') {
    dispatchAction(selectTheme({ theme: newValue as Themes }));
  }
});

export const selctedStoredTheme$ = combineLatest({
  selectedTheme: selectedTheme$,
  getStored: getStored$,
}).pipe(map(({ selectedTheme }) => selectedTheme));
