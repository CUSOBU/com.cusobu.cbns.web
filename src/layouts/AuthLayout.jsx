import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Copyright from "../components/Copyright";

// ==============================|| MINIMAL LAYOUT ||============================== //

const AuthLayout = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: "8vh",
        mb: "8vh"
      }}
    >
      <Outlet />
    </Box>
    <Copyright sx={{ mt: "auto", mb: 0 }} />
  </Grid>
);

export default AuthLayout;
