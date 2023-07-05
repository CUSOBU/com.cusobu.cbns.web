import { lazy } from "react";

// project import
import { Loadable } from "../components";
import { MainLayout } from "../layouts";

// render - dashboard

const Dashboard = Loadable(lazy(() => import("../modules/Remittances/Dashboard")));
const RemittancesDefault = Loadable(lazy(() => import("../modules/Remittances/Processing")));
const RemittancesSuccess = Loadable(lazy(() => import("../modules/Remittances/Completed")));
const RemittancesFail = Loadable(lazy(() => import("../modules/Remittances/Fails")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },{
      path: "/remittances",
      element: <RemittancesDefault />,
    },{
      path: "/remittances_completed",
      element: <RemittancesSuccess />,
    },{
      path: "/remittances_fails",
      element: <RemittancesFail />,
    },
  ],
};

export default MainRoutes;
