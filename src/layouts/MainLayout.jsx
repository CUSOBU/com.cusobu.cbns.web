import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import { Copyright, Navbar, SideBar } from "../components";

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
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}
