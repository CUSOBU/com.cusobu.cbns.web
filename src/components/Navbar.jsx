import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Avatar,
  MenuItem,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import { setAnchorElUser, toggleSideBar } from "../redux/states/app.state";
import { navigation } from "../settings";

const settings = ["Account", "Logout"];

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { anchorElUser, sideBarOpen: open } = useSelector((state) => state.app);
  const { isAuth } = useSelector((state) => state.session);

  const handleOpenUserMenu = (event) => {
    dispatch(setAnchorElUser(event.currentTarget));
  };

  const handleCloseUserMenu = () => {
    dispatch(setAnchorElUser(null));
  };

  const toggleDrawer = () => {
    dispatch(toggleSideBar());
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: "1100" }} open={open}>
      <Toolbar>
        <IconButton
          edge="start"
          color="primary"
          onClick={toggleDrawer}
          sx={{
            marginRight: "8px",
            ...(open
              ? { display: "none" }
              : { marginLeft: "40px", color: "primary" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h3"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {navigation.find((nav) => nav.link === pathname)?.title ??
            "Dashboard"}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {isAuth && (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/666.jpg"
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
