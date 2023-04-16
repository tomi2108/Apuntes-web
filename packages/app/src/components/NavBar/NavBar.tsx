import { useState } from "react";
import Links from "../NavBarLinks/Links";
import NavMenu from "../NavMenu/NavMenu";
import "./nav-bar.css";

const NavBar = () => {
  const [className, setClassName] = useState<string>("menu");
  const [closed, setClosed] = useState<boolean>(true);

  const handleClick = () => {
    setClassName((prev) => prev + " show");
    setClosed(false);
  };

  return (
    <ul className="nav-bar">
      <>
        <Links />
        <li>
          <div
            onClick={handleClick}
            className={`nav-icon ${closed ? "" : "close-icon"}`}
          >
            <div className="line-hamburger" />
            <div className="line-hamburger" />
            <div className="line-hamburger" />
          </div>
        </li>
      </>

      <NavMenu
        setClosed={setClosed}
        setClassName={setClassName}
        className={className}
      />
    </ul>
  );
};

export default NavBar;
