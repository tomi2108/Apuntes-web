import { Link } from "react-router-dom";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/subjects">Materias</Link>
      </li>
    </ul>
  );
};

export default NavBar;
