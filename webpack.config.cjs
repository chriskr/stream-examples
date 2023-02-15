const path = require('path');
const { EsbuildPlugin } = require('esbuild-loader');

module.exports = {
  entry: {
    'examples/CombineLatestVersusWithLatestFrom': {
      import: './src/scripts/scriptCombineLatestVersusWithLatestFrom.tsx',
      dependOn: 'shared',
    },
    'examples/LoadResourceOnSubscription': {
      import: './src/scripts/scriptLoadResourceOnSubscription.tsx',
      dependOn: 'shared',
    },
    'examples/StreamStateOnSubscription': {
      import: './src/scripts/scriptStreamStateOnSubscription.tsx',
      dependOn: 'shared',
    },
    shared: [
      'rxjs',
      'rxbeach',
      'react',
      'react-dom',
      'react-syntax-highlighter/dist/esm/prism-light',
      'react-syntax-highlighter/dist/esm/languages/prism/typescript',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [new EsbuildPlugin()],
  },
};
