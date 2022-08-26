import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
