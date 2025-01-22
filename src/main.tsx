import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createTheme, ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import { makeServer } from "./fakeApi/fakeApi.ts";

makeServer();

const theme = createTheme({
  colorSchemes: {
    dark: true,
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
