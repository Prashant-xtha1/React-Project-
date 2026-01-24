import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import AuthLayout from "../pages/layout/AuthLayout";

export const authRoutes = [{ path: "/", element: <AuthLayout />, children: [
    { index: true, element: <LoginPage /> }, // When parent path and child path is same then, we can do index: true
    { path: "register", element: <RegisterPage /> },
  ] },]