import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import Card from "./Card/Card";

type ArticlesProps = {
  folder: string;
};

const Articles = ({ folder }: ArticlesProps) => {
  const { articles } = useContext(AppContext);
  const navigate = useNavigate();
  const article = articles?.find((a) => a.folder === folder);

  const parseTitle = (title: string) => {
    const text = title.slice(0, -3);
    const normalCase = text.replace(
      /[A-Z]/g,
      (match) => ` ${match.toLowerCase()}`
    );
    const words = normalCase.split(" ");
    words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
    return words.join(" ");
  };

  return (
    <>
      {folder
        ? article?.files.map((f) => (
            <Card
              text={parseTitle(f.title)}
              onClick={() => navigate(`/articles/${folder}/${f.title}`)}
            />
          ))
        : null}
    </>
  );
};

export default Articles;
