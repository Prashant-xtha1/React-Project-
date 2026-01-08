import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import LoginPage from "./pages/auth/LoginPage";
import "./assets/globals.css"
// <div id="root"></div>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);

