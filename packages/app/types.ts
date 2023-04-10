export type Folder = {
  folder: string;
  files: Array<Article>;
  icon: string;
};

export type Article = {
  icon: string;
  title: string;
  content: string;
};
