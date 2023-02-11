#!/usr/bin/env node

import child_process from 'node:child_process';
import Path from 'path';
import config from '../templates/config.js';
import html from '../templates/html.js';
import script from '../templates/script.js';
import index from '../templates/index.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {
  deleteDir,
  createDir,
  listDir,
  createFile,
  getRootPath,
} from './utils.js';

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
    createFile(
      `${examplesTargetPath}/${filename}/index.html`,
      html(filename, rootPath)
    );
    createFile(`${scriptPath}/script${filename}.tsx`, script(filename));
    const configPath = `./configs/rollup${filename}.config.js`;
    createFile(configPath, config(filename));
    child_process.execSync(`yarn run rollup --config ${configPath}`);
  }
  createFile(`${examplesTargetPath}/index.html`, index(moduleNames.sort()));
};

main();
