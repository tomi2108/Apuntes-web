import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Article from "../components/Article/Article";

const ArticleViewer = () => {
  const [content, setContent] = useState<string>("");
  const { articles } = useContext(AppContext);
  const { title, folder } = useParams();

  useEffect(() => {
    if (!articles) return;
    const folderObj = articles.find((article) => article.folder === folder);
    const fileObj = folderObj?.files.find((file) => file.title === title);
    setContent(fileObj?.content as string);
  }, [articles, title, folder]);
  return <>{articles ? <Article markdownContent={content} /> : ""}</>;
};

export default ArticleViewer;
