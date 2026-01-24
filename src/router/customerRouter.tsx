import UserDashboard from "../pages/dashboard/UserDashboard";
import ErrorPage from "../pages/ErrorPage";
import UserLayout from "../pages/layout/UserLayout";

export const customerRoutes = [{
    path: "/customer", element: <UserLayout />, children: [
      {index: true, element: <UserDashboard />},
      { path: "*", element: <ErrorPage code={404} redirectLink="/customer" redirectTxt="Go back to home" /> },
    ]
  },]