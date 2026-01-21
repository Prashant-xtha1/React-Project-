import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import "./assets/globals.css"
import RouterConfig from "./router/RouterConfig";
import { Toaster } from "sonner";
import AuthProvider from "./context/providers/AuthProvider";
// <div id="root"></div>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Toaster richColors closeButton/>
      <RouterConfig />
    </AuthProvider>
  </StrictMode>
);

