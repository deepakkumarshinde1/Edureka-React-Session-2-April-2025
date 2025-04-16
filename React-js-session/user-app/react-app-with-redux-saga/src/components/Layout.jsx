import { Outlet } from "react-router-dom";
import Header from "./Header";
import Error from "./Error";

function Layout() {
  return (
    <>
      <Header />
      <Error />
      <Outlet />
    </>
  );
}

export default Layout;
