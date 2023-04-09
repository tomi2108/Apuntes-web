import { useEffect, useState } from "react";
import { Folder } from "../../types";
import { getArticles } from "../services/articles";

export const useArticles = () => {
  const [articles, setArticles] = useState<Array<Folder> | null>(null);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return { articles };
};
