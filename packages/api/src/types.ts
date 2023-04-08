export type Directories = Array<Directory>

export type Directory = {
  folder:string,
  files: Array<MarkdownFile>
}
export type MarkdownFile = {
  title: string
  content: string;
};
