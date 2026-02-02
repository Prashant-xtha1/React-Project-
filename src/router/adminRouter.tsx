import BannerCreatePage from "../pages/banners/BannerCreatePage";
import BannerEditPage from "../pages/banners/BannerEditPage";
import BannerListPage from "../pages/banners/BannerListPage";

import BrandCreatePage from "../pages/brands/BrandCreatePage";
import BrandEditPage from "../pages/brands/BrandEditPage";
import BrandListPage from "../pages/brands/BrandListPage";

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

    { path: "brands", element: <BrandListPage /> },
    { path: "brand/create", element: <BrandCreatePage /> },
    { path: "brand/:id", element: <BrandEditPage /> },

    { path: "user", element: <UserListPage /> },
    { path: "user/:userId", element: <UserListPage /> },
    { path: "*", element: <ErrorPage code={404} redirectLink="/admin" redirectTxt="Go back to home" /> },
  ] 
},]