import DashboardIcon from "@mui/icons-material/Dashboard";
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import env from "../utils/env";


export const navigation = [
  {
    title: "Dashboard",
    exact: false,
    link: `${env.url}/`,
    icon: <DashboardIcon/>,
  },
  {
    header: true,
    title: `Remittances`,
  },
  {
    title: "Procesando",
    exact: false,
    link: `${env.url}/remittances`,
    icon: <AutorenewIcon/>,
  },
  {
    title: "Completadas",
    exact: false,
    link: `${env.url}/remittances_completed`,
    icon: <DoneAllIcon />,
  },
  {
    title: "Fallidas",
    exact: false,
    link: `${env.url}/remittances_fails`,
    icon: <SmsFailedIcon />,
  },
];
