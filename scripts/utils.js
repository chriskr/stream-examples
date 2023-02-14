import fs from "fs-extra";

export const deleteDir = (path) => {
  try {
    fs.rmSync(path, { recursive: true, force: true });
  } catch (e) {
    console.warn(`could not remove dir ${path}`);
    console.log(e);
  }
};
export const createFile = (path, content) => {
  try {
    fs.writeFileSync(path, content);
  } catch (e) {
    console.warn(`could not create file ${path}`);
    console.log(e);
  }
};
export const listDir = (path) => {
  try {
    return fs.readdirSync(path);
  } catch (e) {
    console.warn("could not read dir ${path}");
    console.log(e);
  }
};
export const createDir = (path) => {
  try {
    fs.ensureDirSync(path);
  } catch (e) {
    console.warn(`could not create new directory ${path}`);
    console.log(e);
  }
};
export const copyFile = (source, target) => {
  try {
    fs.copySync(source, target);
  } catch (e) {
    console.warn(`could not copy file ${source} to ${target}`);
    console.log(e);
  }
};

export const getRootPath = (rootPathCand = process.env.ROOT_PATH || "") => {
  if (rootPathCand === "") return rootPathCand;
  if (rootPathCand === "/") return "";
  if (!rootPathCand.startsWith("/")) return `/${rootPathCand}`;
  return rootPathCand;
};
