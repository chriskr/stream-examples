import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/scripts/scriptExampleCombineLatestVersusWithLatestFrom.tsx",
  output: {
    dir: "./build/examples",
    name: "bundleExampleCombineLatestVersusWithLatestFrom.js",
    format: "es",
    inlineDynamicImports: true,
  },
  plugins: [
    json(),
    nodeResolve(),
    typescript(),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(`"${process.env.NODE_ENV}"`),
      preventAssignment: true,
    }),
  ],
};
