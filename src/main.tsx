import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createTheme, ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import { makeServer } from "./fakeApi/fakeApi.ts";

makeServer();

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          paper: '#323232'
        }
      }
    },
    light: {
      palette: {
        background: {
          paper: '#d9d9d9'
        }
      }
    },
  },
});

let defaultMode: 'light' | 'dark' = 'light';

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  defaultMode = 'dark';
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode={defaultMode}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
