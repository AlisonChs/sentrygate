import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./Contexts/provider/Auth";

const rootElement = document.getElementById("root");
const root = createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
