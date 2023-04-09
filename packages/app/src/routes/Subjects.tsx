import NavBar from "../components/NavBar";

type SubjectsProps = {
  folders: Array<string>;
};

const Subjects = ({ folders }: SubjectsProps) => {
  return (
    <>
      <NavBar folders={folders} />
    </>
  );
};

export default Subjects;
