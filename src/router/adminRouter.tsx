import BannerCreatePage from "../pages/banners/BannerCreatePage";
import BannerEditPage from "../pages/banners/BannerEditPage";
import BannerListPage from "../pages/banners/BannerListPage";
import UserDashboard from "../pages/dashboard/UserDashboard";
import ErrorPage from "../pages/ErrorPage";
import UserLayout from "../pages/layout/UserLayout";
import UserListPage from "../pages/user/UserListPage";

export const adminRoutes = [{ 
  path: "/admin", element: <UserLayout />, children: [
    { index: true, Component: UserDashboard },

    { path: "banners", element: <BannerListPage /> },
    { path: "banner/create", element: <BannerCreatePage /> },
    { path: "banner/:id", element: <BannerEditPage /> },

    { path: "user", element: <UserListPage /> },
    { path: "user/:userId", element: <UserListPage /> },
    { path: "*", element: <ErrorPage code={404} redirectLink="/admin" redirectTxt="Go back to home" /> },
  ] 
},]