import { useEffect, useState } from "react";
import Articles from "../../components/Articles";
import Card from "../../components/Card/Card";
import { useSlider } from "../../hooks/useSlider";
import "./subjects.css";

type SubjectsProps = {
  folders: Array<string>;
};

const Subjects = ({ folders }: SubjectsProps) => {
  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [foldersElem, setFoldersElem] = useState<Element | null>(null);
  const [articlesElem, setArticlesElem] = useState<Element | null>(null);

  useEffect(() => {
    setFoldersElem(document.querySelector(".folders"));
    setArticlesElem(document.querySelector(".articles"));
  }, []);

  const { viewFirstElement, viewSecondElement } = useSlider([
    foldersElem,
    articlesElem
  ]);

  const handleFolderChange = (folder: string) => {
    viewSecondElement();
    setSelectedFolder(folder);
  };

  const handleBackButton = () => {
    viewFirstElement();
  };

  return (
    <div className="container">
      <div className="folders">
        {folders
          ? folders.map((folder) => {
              return <Card text={folder} onClick={handleFolderChange} />;
            })
          : null}
      </div>
      <div className="articles">
        <Card text="Back" onClick={handleBackButton} />
        <Articles folder={selectedFolder} />
      </div>
    </div>
  );
};

export default Subjects;
