import { Link } from "react-router-dom";
import "./links.css";

const Links = () => {
  return (
    <>
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/subjects">Materias</Link>
      </li>
    </>
  );
};

export default Links;
