import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "src/script.tsx",
  output: {
    dir: "./build/scripts",
    name: "script.js",
    format: "es",
  },
  plugins: [json(), nodeResolve(), typescript(), commonjs()],
};
