import { lazy } from "react";

// project import
import { Loadable } from "../components";
import { MainLayout } from "../layouts";

// render - dashboard
const ManageTableDefault = Loadable(lazy(() => import("../pages/ManageTable")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <ManageTableDefault />,
    },
  ],
};

export default MainRoutes;
