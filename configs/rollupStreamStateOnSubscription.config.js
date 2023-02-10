import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import { minify } from "rollup-plugin-esbuild";

export default {
  input: "src/scripts/scriptStreamStateOnSubscription.tsx",
  output: {
    file: "./build/examples/StreamStateOnSubscription/script.js",
    format: "es",
  },
  plugins: [
    json(),
    nodeResolve(),
    typescript(),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("${process.env.NODE_ENV}"),
      preventAssignment: true,
    }),
    minify(),
  ],
};
