import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a237e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "fixed",
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          color: "#1a237e",
        },
      },
    },
  },
});

export default lightTheme;
