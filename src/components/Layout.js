import { Outlet, useLocation } from 'react-router-dom';
import Header from "./Header";
import MiniDrawer from "./MiniDrawer";

export const Layout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();

  return (
    <>
      {!hideHeaderPaths.includes(pathname) && <MiniDrawer />}
      <Outlet />
    </>
  );
}