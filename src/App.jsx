import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";
// defaultTheme
import { theme } from "./themes";
import Routes from "./routes";

import { useSelector } from "react-redux";

function App() {
  const customization = useSelector((state) => state.customization);

  return (
    <ThemeProvider theme={theme(customization)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
