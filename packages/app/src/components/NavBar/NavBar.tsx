import { Link } from "react-router-dom";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/subjects">Materias</Link>
      </li>
    </ul>
  );
};

export default NavBar;
