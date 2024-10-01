import { Fragment } from "react";
import NavBar from "../components/NavBar.jsx";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  // Check if the current path is not the home page ("/")
  const shouldShowNavBar = location.pathname !== "/";

  return (
    <Fragment>
      {shouldShowNavBar && <NavBar />}
      <Outlet />
    </Fragment>
  );
};

export default MainLayout;
