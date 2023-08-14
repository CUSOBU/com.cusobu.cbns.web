import { DashboardContextProvider } from "../modules/Dashboard/contexts/DashboardContext";
import {Outlet} from "react-router-dom";
import Box from "@mui/material/Box";
import {Copyright, Navbar, SideBar} from "../components/index.js";
import Grid from "@mui/material/Grid";

export default function DashboardLayout(){
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
                    <DashboardContextProvider>
                        <Outlet />
                    </DashboardContextProvider>
                </Grid>
                <Copyright sx={{ mt: "auto", mb: "8px" }} />
            </Box>
        </Box>
    );
}