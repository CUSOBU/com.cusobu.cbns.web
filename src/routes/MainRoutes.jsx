import {lazy} from "react";

// project import
import {Loadable} from "../components";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import RemittancesLayout from "../layouts/RemittancesLayout.jsx";
import TopupOrdersLayout from "../layouts/TopupOrdersLayout.jsx";

// render - dashboard

const Dashboard = Loadable(lazy(() => import("../modules/Dashboard/index")));
const RemittancesDefault = Loadable(
    lazy(() => import("../modules/Remittances/index"))
);
const TopupOrdersDefault = Loadable(
    lazy(() => import("../modules/TopupOrders/index"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: <DashboardLayout/>,
            children: [
                {
                    path: "/",
                    element: <Dashboard/>,
                }
            ],
        },
        {
            path: "/remittances",
            element: <RemittancesLayout/>,
            children: [
                {
                    path: "pending",
                    element: <RemittancesDefault status={["Pending"]}/>,
                },
                {
                    path: "processing",
                    element: <RemittancesDefault status={["Delivery"]}/>,
                },
                {
                    path: "completed",
                    element: <RemittancesDefault status={["Complete"]}/>,
                },
                {
                    path: "fails",
                    element: <RemittancesDefault status={["Cancel"]}/>,
                }
            ]
        },
        {
            path: "/topuporders",
            element: <TopupOrdersLayout/>,
            children: [
                {
                    path: "pending",
                    element: <TopupOrdersDefault status={["Pending"]}/>,
                },
                {
                    path: "processing",
                    element: <TopupOrdersDefault status={["Delivery"]}/>,
                },
                {
                    path: "completed",
                    element: <TopupOrdersDefault status={["Complete"]}/>,
                },
                {
                    path: "fails",
                    element: <TopupOrdersDefault status={["Cancel"]}/>,
                },
            ]
        }
    ],
};

export default MainRoutes;
