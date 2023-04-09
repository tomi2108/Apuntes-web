import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";

const Articles = () => {
  const { articles } = useContext(AppContext);
  const { folder } = useParams();
  const a = articles?.find((a) => a.folder === folder);

  return <>{folder ? a?.files.map((f) => f.title) : ""}</>;
};

export default Articles;
