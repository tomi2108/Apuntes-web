import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Articles from "../../components/Articles";
import Card from "../../components/Card/Card";
import { useSlider } from "../../hooks/useSlider";
import "./subjects.css";

const Subjects = () => {
  const { articles } = useContext(AppContext);

  const folders: Array<{ folder: string; icon: string }> =
    articles?.map((a) => ({
      folder: a.folder,
      icon: a.icon
    })) ?? [];

  console.log(folders);

  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [foldersElem, setFoldersElem] = useState<Element | null>(null);
  const [articlesElem, setArticlesElem] = useState<Element | null>(null);

  useEffect(() => {
    setFoldersElem(document.querySelector(".folders"));
    setArticlesElem(document.querySelector(".articles"));
  }, []);

  const { viewFirstElement, viewSecondElement, transitioning } = useSlider([
    foldersElem,
    articlesElem
  ]);

  const handleFolderChange = (folder: string) => {
    if (transitioning) return;
    viewSecondElement();
    setSelectedFolder(folder);
  };

  const handleBackButton = () => {
    if (transitioning) return;
    viewFirstElement();
  };

  return (
    <div className="container">
      <div className="folders">
        {folders
          ? folders.map((folder, index) => {
              return (
                <Card
                  key={index}
                  text={folder.folder}
                  icon={folder.icon}
                  onClick={handleFolderChange}
                />
              );
            })
          : null}
      </div>
      <div className="articles">
        <Card
          key={-1}
          text="Materias"
          onClick={handleBackButton}
          icon={"$$\n\\leftarrow\n$$"}
        />
        <Articles isDisabled={transitioning} folder={selectedFolder} />
      </div>
    </div>
  );
};

export default Subjects;
