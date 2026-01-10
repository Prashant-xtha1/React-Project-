import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgetPasswordPage from "../pages/auth/ForgetPasswordPage";
// import AdminPage from "../pages/auth/AdminPage";
// import CustomerPage from "../pages/auth/CustomerPage";
// import SellerPage from "../pages/auth/SellerPage";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../pages/layout/AuthLayout";
import UserLayout from "../pages/layout/UserLayout";
import UserDashboard from "../pages/dashboard/UserDashboard";

const router = createBrowserRouter([
  // { path: "/", Component: LoginPage },
  { path: "/", element: <AuthLayout />, children: [
    // { path: "/", element: <LoginPage /> },
    { index: true, element: <LoginPage /> }, // When parent path and child path is same then, we can do index: true
    { path: "register", element: <RegisterPage /> },
  ] },

  { path: "/admin", element: <UserLayout />, children: [
    { index: true, element: <UserDashboard /> }
  ] },

  { path: "/forget-password", element: <ForgetPasswordPage /> },
  { path: "*", element: <ErrorPage code={404} redirectLink="/" redirectTxt="Go back to home" /> }, // --> Wildcard route to handle invalid URLs or API endpoints not defined above.
  // (The asterisk * is a wildcard character that matches any URL path that has not been explicitly matched by previously defined routes.)

  // { path: "/admin", element: <AdminPage /> },
  // { path: "/customer", element: <CustomerPage /> },
  // { path: "/seller", element: <SellerPage /> },
]);

export default function RouterConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}