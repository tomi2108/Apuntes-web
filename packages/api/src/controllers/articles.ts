import fs from "fs";
import { MarkdownFile } from "../types";

const markdownPath = "./markdown";
const iconsPath = "./icons";

const getDirectories = () => {
  const files = fs.readdirSync(`${markdownPath}`);

  return files.map((folder) => {
    return {
      folder: folder,
      files: getFiles(folder),
      icon: getFolderIcon(folder)
    };
  });
};

const getFiles = (folder: string): Array<MarkdownFile> => {
  const markdownFiles = fs.readdirSync(`${markdownPath}/${folder}`);

  return markdownFiles.map((file) => {
    return {
      title: file,
      content: getContent(folder, file),
      icon: getFileIcon(folder, file)
    };
  });
};

const getContent = (folder: string, fileName: string) => {
  return fs.readFileSync(`${markdownPath}/${folder}/${fileName}`).toString();
};

const getFolderIcon = (folder: string) => {
  return fs.readFileSync(`${iconsPath}/${folder}/folder.svg`).toString();
};

const getFileIcon = (folder: string, file: string) => {
  return fs
    .readFileSync(`${iconsPath}/${folder}/${file.slice(0, -3)}.svg`)
    .toString();
};

export { getDirectories };
