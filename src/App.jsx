import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { lightTheme } from "./themes";
import Routes from "./routes";
import { store } from "./redux/store";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
