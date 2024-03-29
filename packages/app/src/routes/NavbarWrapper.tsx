import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const NavbarWrapper = () => {
  return (
    <div
      style={{
        minWidth: "320px",
        minHeight: "100vh",
        alignSelf: "stretch"
      }}
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default NavbarWrapper;
