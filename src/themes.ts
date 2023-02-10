import vs from 'react-syntax-highlighter/dist/esm/styles/prism/vs';
import atom from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import github from 'react-syntax-highlighter/dist/esm/styles/prism/ghcolors';
import vsdark from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import { dispatchAction, actionCreator, reducedStream, reducer } from 'rxbeach';
import { withOnFistSubscription } from './withOnFistSubscription';

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

export const setTheme = (theme: Themes) => {
  window.localStorage.setItem('theme', theme);
  dispatchAction(selectTheme({ theme }));
};

export const selectedTheme$ = withOnFistSubscription(
  reducedStream('selectedTheme$', { theme: Themes.vs }, [
    reducer(selectTheme, (_, { theme }) => ({ theme })),
  ]),
  () => {
    const theme = (window.localStorage.getItem('theme') ?? Themes.vs) as Themes;
    if (theme !== Themes.vs)
      setTimeout(() => dispatchAction(selectTheme({ theme })), 16, theme);
  }
);

window.addEventListener('storage', ({ key, newValue }) => {
  if (key === 'theme') {
    dispatchAction(selectTheme({ theme: newValue as Themes }));
  }
});
