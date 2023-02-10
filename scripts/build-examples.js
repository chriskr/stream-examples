#!/usr/bin/env node

import fs from 'node:fs';
import child_process from 'node:child_process';
import Path from 'path';
import config from '../templates/config.js';
import html from '../templates/html.js';
import script from '../templates/script.js';
import yargs from 'yargs'; //'../node_modules/yargs/build/index.cjs';
import { hideBin } from 'yargs/helpers';
import { argv } from 'node:process';

const args = yargs(hideBin(process.argv))
  .option('root-path', {
    alias: 'r',
    type: 'string',
    description: 'The root path on the server',
    default: '',
  })
  .parse();

`
get files in examples
for each
    create a html file
    create a script file
    create a rollup config file
    run rollup config
create index

folder structure

 configs
 build
    examples
    index
        {ModuleName}
            index
            script.js
`;

const deleteDir = (path) => {
  try {
    fs.rmSync(path, { recursive: true, force: true });
  } catch (e) {
    console.warn(`could not remove dir ${path}`);
    console.log(e);
  }
};

const createFile = (path, content) => {
  try {
    fs.writeFileSync(path, content);
  } catch (e) {
    console.warn(`could not create file ${path}`);
    console.log(e);
  }
};

const listDir = (path) => {
  try {
    return fs.readdirSync(path);
  } catch (e) {
    console.warn('could not read dir ${path}');
    console.log(e);
  }
};

const createDir = (path) => {
  try {
    fs.mkdirSync(path);
  } catch (e) {
    console.warn(`could not create new directory ${path}`);
    console.log(e);
  }
};

const copyFile = (source, target) => {
  try {
    fs.copyFileSync(source, target);
  } catch (e) {
    console.warn(`could not copy file ${source} to ${target}`);
    console.log(e);
  }
};

const createIndex = (moduleNames) => {
  return `<!DOCTYPE html>
<title>Stream Examples</title>
<ul>
${moduleNames
  .map((name) => `<li><a href="./${name}/">${name}</a></li>`)
  .join('\n')}
</ul>
`;
};

const getRootPath = (rootPathCand) => {
  if (rootPathCand === '') return rootPathCand;
  if (rootPathCand === '/') return '';
  if (!rootPathCand.startsWith('/')) return `/${rootPathCand}`;
  return rootPathCand;
};

const main = async () => {
  const examplesTargetPath = './build/examples';
  const scriptPath = './src/scripts';
  deleteDir(examplesTargetPath);
  deleteDir(scriptPath);
  deleteDir('./configs');
  createDir(examplesTargetPath);
  createDir(scriptPath);
  createDir('./configs');
  const examples = listDir('./src/examples');
  const moduleNames = [];

  const rootPath = getRootPath(args['root-path']);
  console.log({ rootPath });
  for (const example of examples) {
    const filename = Path.parse(example).name;
    moduleNames.push(filename);
    createDir(`${examplesTargetPath}/${filename}`);
    createFile(`${examplesTargetPath}/${filename}/index.html`, html(filename));
    createFile(
      `${scriptPath}/script${filename}.tsx`,
      script(filename, rootPath)
    );
    const configPath = `./configs/rollup${filename}.config.js`;
    createFile(configPath, config(filename));
    child_process.execSync(`yarn run rollup --config ${configPath}`);
  }
  createFile(
    `${examplesTargetPath}/index.html`,
    createIndex(moduleNames.sort())
  );
};

main();
