import "./index.css";
import "@fontsource-variable/jura"; // Supports weights 300-700
import "@fontsource-variable/montserrat"; // Supports weights 100-900

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/index.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
