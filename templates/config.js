const config = (
  moduleName
) => `import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import { minify } from "rollup-plugin-esbuild";

export default {
  input: "src/scripts/script${moduleName}.tsx",
  output: {
    file: "./build/examples/${moduleName}/script.js",
    format: "es",
  },
  plugins: [
    json(),
    nodeResolve(),
    typescript(),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("\${process.env.NODE_ENV}"),
      preventAssignment: true,
    }),
    minify(),
  ],
};
`;

export default config;
