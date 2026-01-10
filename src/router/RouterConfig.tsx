import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgetPasswordPage from "../pages/auth/ForgetPasswordPage";
import AdminPage from "../pages/auth/AdminPage";
import CustomerPage from "../pages/auth/CustomerPage";
import SellerPage from "../pages/auth/SellerPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  // { path: "/", Component: LoginPage },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", Component: RegisterPage },
  { path: "/forget-password", Component: ForgetPasswordPage },
  { path: "/admin", Component: AdminPage },
  { path: "/customer", Component: CustomerPage },
  { path: "/seller", Component: SellerPage },
  { path: "*", element: <ErrorPage code={404} redirectLink="/login" redirectTxt="Go back to home" /> }, // --> Wildcard route to handle invalid URLs or API endpoints not defined above.
  // (The asterisk * is a wildcard character that matches any URL path that has not been explicitly matched by previously defined routes.)
]);

export default function RouterConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}