import { lazy } from "react";

// project import
import { Loadable } from "../components";
import { MainLayout } from "../layouts";

// render - dashboard
const ManageTableDefault = Loadable(lazy(() => import("../modules/ManageTable")));
const RemittancesDefault = Loadable(lazy(() => import("../modules/Remittances")));
const RemittancesSuccess = Loadable(lazy(() => import("../modules/Remittances/index_succes")));
const RemittancesFail = Loadable(lazy(() => import("../modules/Remittances/index_fail")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <ManageTableDefault />,
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
