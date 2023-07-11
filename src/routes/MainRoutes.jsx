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
      path: "/remittances/pending",
      element: <RemittancesDefault status={["Pending"]} />,
    },
    {
      path: "/remittances/processing",
      element: <RemittancesDefault status={["Delivery"]} />,
    },
    {
      path: "/remittances/completed",
      element: <RemittancesDefault status={["Complete"]} />,
    },
    {
      path: "/remittances/fails",
      element: <RemittancesDefault status={["Cancel"]} />,
    },
  ],
};

export default MainRoutes;
