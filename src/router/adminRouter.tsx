import UserDashboard from "../pages/dashboard/UserDashboard";
import ErrorPage from "../pages/ErrorPage";
import UserLayout from "../pages/layout/UserLayout";
import UserListPage from "../pages/user/UserListPage";

export const adminRoutes = [{ path: "/admin", element: <UserLayout />, children: [
    { index: true, Component: UserDashboard },
    { path: "user", element: <UserListPage /> },
    { path: "user/:userId", element: <UserListPage /> },
    { path: "*", element: <ErrorPage code={404} redirectLink="/admin" redirectTxt="Go back to home" /> },
  ] },]