import "./menu-links.css";

type MenuLinksProps = {
  onClick: (param: string) => void;
};

const MenuLinks = ({ onClick }: MenuLinksProps) => {
  return (
    <ul className="menu-links">
      <li onClick={() => onClick("/")} className="menu-item">
        Home
      </li>
      <li onClick={() => onClick("/subjects")} className="menu-item">
        Materias
      </li>
    </ul>
  );
};

export default MenuLinks;
