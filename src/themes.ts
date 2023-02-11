import vs from 'react-syntax-highlighter/dist/esm/styles/prism/vs';
import atom from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import github from 'react-syntax-highlighter/dist/esm/styles/prism/ghcolors';
import vsdark from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import { dispatchAction, actionCreator, reducedStream, reducer } from 'rxbeach';
import { withOnFistSubscription } from './withOnFistSubscription';

console.log(atom);
vs[`pre[class*="language-"]`].lineHeight = '1.5';
atom[`pre[class*="language-"]`].lineHeight = '1.5';
github[`pre[class*="language-"]`].lineHeight = '1.5';
vsdark[`pre[class*="language-"]`].lineHeight = '1.5';
vs[`pre[class*="language-"]`].background = 'hsl(0, 0%, 100%)';
github[`pre[class*="language-"]`].background = 'hsl(0, 0%, 100%)';
github.function = { color: '#8250df' };
github.keyword = { color: '#cf222e' };
github.number = { color: '#0550ae' };
atom['class-name'] = { color: '#FFFFB6' };

export enum Themes {
  atom = 'atom',
  github = 'github',
  vs = 'vs',
  vsdark = 'vsdark',
}

export const styles = {
  [Themes.atom]: atom,
  [Themes.github]: github,
  [Themes.vs]: vs,
  [Themes.vsdark]: vsdark,
};

export const options = [
  { name: 'atom', value: Themes.atom },
  { name: 'github', value: Themes.github },
  { name: 'visual studio dark', value: Themes.vsdark },
  { name: 'visual studio', value: Themes.vs },
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
