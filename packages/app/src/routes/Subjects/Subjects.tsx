import { useEffect, useState } from "react";
import BackButton from "../../assets/BackButton";
import Articles from "../../components/Articles";
import Card from "../../components/Card/Card";
import { useSlider } from "../../hooks/useSlider";
import "./subjects.css";

type SubjectsProps = {
  folders: Array<{ folder: string; icon: string }>;
};

const Subjects = ({ folders }: SubjectsProps) => {
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
          icon={<BackButton />}
        />
        <Articles isDisabled={transitioning} folder={selectedFolder} />
      </div>
    </div>
  );
};

export default Subjects;
