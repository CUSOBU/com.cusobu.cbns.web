import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Copyright, Navbar, SideBar } from "../components";
import { DetailsContextProvider } from "../modules/TopupOrders/contexts/DetailsContext";
import DetailTopupOrders from "../modules/TopupOrders/components/Details";

// import CreateRemittance from "../modules/Remittances/components/DialogCreate";
// import DialogConfirmCancel from "../modules/Remittances/components/DialogConfirmCancel";
// import DialogConfirmConfirm from "../modules/Remittances/components/DialogConfirmConfirm";
// import { DashboardContextProvider } from "../modules/Dashboard/contexts/DashboardContext";

export default function MainLayout() {
  return (
    <Box style={{ display: "flex" }}>
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
          overflowY: "auto",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Navbar />
        <Grid container p={4} mt={8}>
            <DetailsContextProvider>
              <DetailTopupOrders />
              {/*<CreateRemittance />*/}
              {/*<DialogConfirmCancel />*/}
              {/*<DialogConfirmConfirm />*/}
              <Outlet />
            </DetailsContextProvider>
        </Grid>
        <Copyright sx={{ mt: "auto", mb: "8px" }} />
      </Box>
    </Box>
  );
}
