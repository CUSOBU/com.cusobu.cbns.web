import DashboardIcon from "@mui/icons-material/Dashboard";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

export const navigation = [
  {
    title: "Dashboard",
    exact: false,
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    header: true,
    title: "Remittances",
  },
  {
    title: "Pendientes",
    exact: false,
    link: "/remittances/pending",
    icon: <PendingActionsIcon />,
  },
  {
    title: "Procesando",
    exact: false,
    link: "/remittances/processing",
    icon: <TrackChangesIcon />,
  },
  {
    title: "Completadas",
    exact: false,
    link: "/remittances/completed",
    icon: <DoneAllIcon />,
  },
  {
    title: "Fallidas",
    exact: false,
    link: "/remittances/fails",
    icon: <SmsFailedIcon />,
  },
  {
    header: true,
    title: "Topups",
  },
  {
    title: "Pendientes",
    exact: false,
    link: "/topuporders/pending",
    icon: <PendingActionsIcon />,
  },
  {
    title: "Procesando",
    exact: false,
    link: "/topuporders/processing",
    icon: <TrackChangesIcon />,
  },
  {
    title: "Completadas",
    exact: false,
    link: "/topuporders/completed",
    icon: <DoneAllIcon />,
  },
  {
    title: "Fallidas",
    exact: false,
    link: "/topuporders/fails",
    icon: <SmsFailedIcon />,
  },
];
