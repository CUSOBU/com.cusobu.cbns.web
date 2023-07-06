import { useSelector, useDispatch } from "react-redux";
import { styled, Toolbar, IconButton } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { toggleSideBar } from "../redux/states/app.state";
import logo from "../assets/react.svg";

import SideMenu from "./SideMenu";

const drawerWidth = 200;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
  },
}));

const SideBar = () => {
  const { sideBarOpen: open } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(toggleSideBar(!open));
  };

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: [1],
        }}
      >
        <img src={logo} width={45} height={45} alt="logo" />
        <IconButton
          onClick={toggleDrawer}
          sx={{
            display: open ? "relative" : "none",
            top: "16px",
            position: "fixed",
            left: "182px",
            border: "1px dashed rgba(0, 0, 0, 0.12)",
            padding: "4px",
            zIndex: '20000'
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>

      <SideMenu open={open} />
    </Drawer>
  );
};

export default SideBar;
