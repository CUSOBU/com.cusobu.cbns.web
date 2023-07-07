import { lazy } from "react";

// project import
import { Loadable } from "../components";
import { MainLayout } from "../layouts";

// render - dashboard

const Dashboard = Loadable(lazy(() => import("../modules/Dashboard/index")));
const RemittancesDefault = Loadable(
  lazy(() => import("../modules/Remittances/index"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/remittances",
      element: <RemittancesDefault status={["Pending", "Delivery"]} />,
    },
    {
      path: "/remittances_completed",
      element: <RemittancesDefault status={["Complete"]} />,
    },
    {
      path: "/remittances_fails",
      element: <RemittancesDefault status={["Cancel"]} />,
    },
  ],
};

export default MainRoutes;
