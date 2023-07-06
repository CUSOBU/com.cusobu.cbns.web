import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { Copyright, Navbar, SideBar } from "../components";
import { DetailsContextProvider } from "../modules/Remittances/contexts/DetailsContext";
import Details from "../modules/Remittances/components/Details";

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <SideBar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Grid container p={4}>
          <DetailsContextProvider>
            <Details />
            <Outlet />
          </DetailsContextProvider>
        </Grid>
        <Copyright sx={{ mt: "auto", mb: "8px" }} />
      </Box>
    </Box>
  );
}
