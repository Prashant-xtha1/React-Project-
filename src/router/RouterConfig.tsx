import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgetPasswordPage from "../pages/auth/ForgetPasswordPage";
import AdminPage from "../pages/auth/AdminPage";
import CustomerPage from "../pages/auth/CustomerPage";
import SellerPage from "../pages/auth/SellerPage";

const router = createBrowserRouter([
  // { path: "/", Component: LoginPage },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", Component: RegisterPage },
  { path: "/forget-password", Component: ForgetPasswordPage },
  { path: "/admin", Component: AdminPage },
  { path: "/customer", Component: CustomerPage },
  { path: "/seller", Component: SellerPage },
]);

export default function RouterConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}