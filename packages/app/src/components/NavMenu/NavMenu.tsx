import { useNavigate } from "react-router-dom";
import MenuLinks from "../NavBarLinks/MenuLinks";
import "./nav-menu.css";

type NavMenuProps = {
  setClassName: (param: React.SetStateAction<string>) => void;
  setClosed: (param: React.SetStateAction<boolean>) => void;
  className: string;
};

const NavMenu = ({ className, setClassName, setClosed }: NavMenuProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    handleClick();
    navigate(path);
  };
  const handleClick = () => {
    setClosed(true);
    if (className.includes("show")) return setClassName("menu");
  };

  return (
    <div className={className}>
      {
        <>
          <div onClick={handleClick} className="menu-icon">
            <div className="line-cross" />
            <div className="line-cross flipped" />
          </div>
          <MenuLinks onClick={handleNavigate} />
        </>
      }
    </div>
  );
};

export default NavMenu;
