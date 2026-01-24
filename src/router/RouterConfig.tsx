import { createBrowserRouter, RouterProvider } from "react-router";
import ForgetPasswordPage from "../pages/auth/ForgetPasswordPage";
import ErrorPage from "../pages/ErrorPage";
import { adminRoutes } from "./adminRouter";
import { customerRoutes } from "./customerRouter";
import { authRoutes } from "./authRouter";

const router = createBrowserRouter([
  ...authRoutes,
  ...adminRoutes,
  ...customerRoutes,

  { path: "/forget-password", element: <ForgetPasswordPage /> },
  
  { path: "*", element: <ErrorPage code={404} redirectLink="/" redirectTxt="Go back to home" /> },
  // --> Wildcard route to handle invalid URLs or API endpoints not defined above.
  // (The asterisk * is a wildcard character that matches any URL path that has not been explicitly matched by previously defined routes.)

]);

export default function RouterConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}