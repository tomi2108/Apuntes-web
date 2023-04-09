import { Link } from "react-router-dom";
type NavBarProps = {
  folders: Array<string>;
};

const NavBar = ({ folders }: NavBarProps) => {
  return (
    <ul>
      {folders
        ? folders.map((folder) => {
            return (
              <li key={folder}>
                <Link to={`/subjects/${folder}`}>{folder}</Link>
              </li>
            );
          })
        : ""}
    </ul>
  );
};

export default NavBar;
