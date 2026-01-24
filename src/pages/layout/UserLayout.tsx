import { Outlet } from "react-router";
import { UserHeader } from "../../components/user-dashboard/UserHeader";
import { UserSidebar } from "../../components/user-dashboard/UserSidebar";
import { UserFooter } from "../../components/user-dashboard/UserFooter";
import type { IUser } from "../../components/auth/auth.contract";
import { useAuth } from "../../hook/auth";

export default function UserLayout() {
  const {loggedInUser} = useAuth();
  return (
    <>
      <UserHeader loggedInUser={loggedInUser as IUser} />
      <main className="flex w-full h-screen">
        <UserSidebar loggedInUser={loggedInUser as IUser} />
        <section className="p-5 bg-sky-500 text-white m-3 rounded-lg w-full ">
          <Outlet />
        </section>
      </main>
      <UserFooter />
    </>
  )
}