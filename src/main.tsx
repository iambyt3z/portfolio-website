import "./index.css";
import "@fontsource-variable/jura"; // Supports weights 300-700

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
