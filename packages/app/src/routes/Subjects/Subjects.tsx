import { useEffect, useState } from "react";
import Articles from "../../components/Articles";
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
        <>
          {folders
            ? folders.map((folder) => {
                return (
                  <div key={folder}>
                    <div onClick={() => handleFolderChange(folder)}>
                      {folder}
                    </div>
                  </div>
                );
              })
            : null}
        </>
      </div>
      <div className="articles">
        <Articles folder={selectedFolder} />
        <div onClick={handleBackButton}>Back</div>
      </div>
    </div>
  );
};

export default Subjects;
