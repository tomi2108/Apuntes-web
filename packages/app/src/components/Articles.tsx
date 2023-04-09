import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

type ArticlesProps = {
  folder: string;
};

const Articles = ({ folder }: ArticlesProps) => {
  const { articles } = useContext(AppContext);
  const a = articles?.find((a) => a.folder === folder);

  return (
    <>
      {folder
        ? a?.files.map((f) => (
            <Link key={f.title} to={`/articles/${folder}/${f.title}`}>
              {" "}
              {f.title}
            </Link>
          ))
        : ""}
    </>
  );
};

export default Articles;
