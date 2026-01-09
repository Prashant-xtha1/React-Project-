import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import "./assets/globals.css"
import RouterConfig from "./router/RouterConfig";
// <div id="root"></div>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>
);

