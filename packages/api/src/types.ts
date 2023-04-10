export type Directories = Array<Directory>;

export type Directory = {
  folder: string;
  icon: string;
  files: Array<MarkdownFile>;
};
export type MarkdownFile = {
  icon: string;
  title: string;
  content: string;
};
