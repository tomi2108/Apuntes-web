import fs from "fs";
import { MarkdownFile } from "../types";

const markdownPath = "./markdown";

const getDirectories = () => {
  const files = fs.readdirSync(`${markdownPath}`);

  return files.map((f) => {
    return { folder: f, files: getFiles(f) };
  });
};

const getFiles = (folder: string): Array<MarkdownFile> => {
  const markdownFiles = fs.readdirSync(`${markdownPath}/${folder}`);

  return markdownFiles.map((f) => {
    return { title: f, content: getContent(folder, f) };
  });
};

const getContent = (folder: string, fileName: string) => {
  return fs.readFileSync(`${markdownPath}/${folder}/${fileName}`).toString();
};

export { getDirectories };
