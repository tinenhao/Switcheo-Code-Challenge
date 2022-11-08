import React from "react";
import Erbaum from "./assets/fonts/Erbaum-Bold.woff";
import Main from "./pages/Main";
import {
  createTheme,
  CssBaseline,
  Theme,
  ThemeProvider,
  ThemeOptions,
} from "@mui/material";

type fontDisplay = "swap" | "auto";

const erbaum = {
  fontFamily: "Erbaum",
  fontStyle: "bold",
  fontDisplay: "swap" as fontDisplay,
  fontWeight: 300,
  src: `
  local('Erbaum'),
  local('Erbaum-Bold'),
  url(${Erbaum}) format('woff')`,
};

const common: ThemeOptions = {
  typography: {
    allVariants: {
      fontFamily: "'erbaum', sans-serif !important",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          ${erbaum}
        }
      `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
};

const theme: Theme = createTheme({
  palette: {
    background: {
      default: "#e2fca4",
    },
    text: {
      primary: "#073c4f",
      secondary: "#0b556e",
    },
  },
  ...common,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
