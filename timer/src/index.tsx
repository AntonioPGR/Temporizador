// React Imports
import React from "react";
import { createRoot } from "react-dom/client";

// Extra Components Imports
import { App } from "./pages/App";
import './assets/styles/global.scss';

// Render the app into the DOM
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);