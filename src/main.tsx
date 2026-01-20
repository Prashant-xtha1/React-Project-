import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import "./assets/globals.css"
import RouterConfig from "./router/RouterConfig";
import { Toaster } from "sonner";
// <div id="root"></div>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors closeButton/>
    <RouterConfig />
  </StrictMode>
);

