import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import { minify } from 'rollup-plugin-esbuild';
import { createFile, getRootPath } from './scripts/utils.js';
import html from './templates/html.js';

createFile('./build/index.html', html('Stream Examples', getRootPath()));

export default {
  input: 'src/script.tsx',
  output: {
    dir: './build',
    name: 'script.js',
    format: 'es',
  },
  plugins: [
    json(),
    nodeResolve(),
    typescript(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(`"${process.env.NODE_ENV}"`),
      preventAssignment: true,
    }),
    minify(),
  ],
};
