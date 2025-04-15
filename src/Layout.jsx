import { About } from "./pages/About/About";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
