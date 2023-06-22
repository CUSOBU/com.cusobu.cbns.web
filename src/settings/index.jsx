import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const navigation = [
  {
    title: "Dashboard",
    exact: false,
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "Orders",
    exact: false,
    link: "/orders",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Customers",
    exact: false,
    link: "/customers",
    icon: <PeopleIcon />,
  },
  {
    title: "Reports",
    exact: false,
    link: "/reports",
    icon: <BarChartIcon />,
  },
  {
    title: "Integrations",
    exact: false,
    link: "/integrations",
    icon: <LayersIcon />,
  },
  {
    header: true,
    title: "Saved reports",
  },
  {
    title: "Current month",
    exact: false,
    link: "/current-month",
    icon: <AssignmentIcon />,
  },
  {
    title: "Last quarter",
    exact: false,
    link: "/last-quarter",
    icon: <AssignmentIcon />,
  },
  {
    title: "Year-end sale",
    exact: false,
    link: "/year-end-month",
    icon: <AssignmentIcon />,
  },
];
