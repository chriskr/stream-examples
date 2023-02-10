#!/usr/bin/python3

import os, shutil

"""
get files in examples
for each
    create a hml file
    create a script file
    create a rollup config file


    'Hey {name}, there is a 0x{errno:x} error!'.format(
...     name=name, errno=errno)
"""

HTML_TEMPLATE = """<!DOCTYPE html>
<title>{module_name}</title>
<style>
  html, body {{
    font-family: system-ui;
  }}
  h1, h2 {{
    font-weight: normal;
  }}
    
</style>
<div id="react-root"></div>
<script src="bundle{module_name}.js" type="module"></script>
"""

SCRIPT_TEMPLATE = """import React from "react";
import {{ createRoot }} from "react-dom/client";
import {module_name} from "../examples/{module_name}";

window.onload = async () => {{
  const reactRoot = document.querySelector("#react-root");
  if (!reactRoot) return;
  createRoot(reactRoot).render(
    <{module_name} />
  );
}};
"""

CONFIG_TEMPLATE = """import {{ nodeResolve }} from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";

export default {{
  input: "src/scripts/script{module_name}.tsx",
  output: {{
    dir: "./build/examples",
    name: "bundle{module_name}.js",
    format: "es",
  }},
  plugins: [
    json(),
    nodeResolve(),
    typescript(),
    commonjs(),
    replace({{
      "process.env.NODE_ENV": JSON.stringify(`"${{process.env.NODE_ENV}}"`),
      preventAssignment: true,
    }}),
  ],
}};
"""

TARGET_SINGLE_EXAMPLES = "build/examples"
EXAMPLE_SRC = "src/examples"
ENTRY_SRCIPTS = "src/scripts"
CONFIGS = "configs"


def deleteFolderContent(path):
    for filename in os.listdir(path):
        file_path = os.path.join(path, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print("Failed to delete %s. Reason: %s" % (file_path, e))


def getEntryScriptName(module_name):
    return "script{module_name}.tsx".format(module_name=module_name)


def createScriptFile(module_name):
    scriptPath = os.path.join(ENTRY_SRCIPTS, getEntryScriptName(module_name))
    with open(scriptPath, "w") as file:
        file.write(SCRIPT_TEMPLATE.format(module_name=module_name))


def getHtmlName(module_name):
    return "{module_name}.html".format(module_name=module_name)


def createHtmlFile(module_name):
    scriptPath = os.path.join(TARGET_SINGLE_EXAMPLES, getHtmlName(module_name))
    with open(scriptPath, "w") as file:
        file.write(HTML_TEMPLATE.format(module_name=module_name))


def getConfigName(module_name):
    return "{module_name}.config.js".format(module_name=module_name)


def createConfigFile(module_name):
    scriptPath = os.path.join(CONFIGS, getConfigName(module_name))
    with open(scriptPath, "w") as file:
        file.write(CONFIG_TEMPLATE.format(module_name=module_name))


def getExampleFiles():
    for dir in [
        TARGET_SINGLE_EXAMPLES,
        ENTRY_SRCIPTS,
        CONFIGS,
    ]:
        deleteFolderContent(dir)

    for file in os.listdir(EXAMPLE_SRC):
        filename, file_extension = os.path.splitext(file)
        createScriptFile(filename)
        createHtmlFile(filename)
        createConfigFile(filename)


if __name__ == "__main__":
    getExampleFiles()
