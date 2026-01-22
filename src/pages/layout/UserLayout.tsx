import { Outlet } from "react-router";
import { UserHeader } from "../../components/user-dashboard/UserHeader";
import { UserSidebar } from "../../components/user-dashboard/UserSidebar";
import { UserFooter } from "../../components/user-dashboard/UserFooter";

export default function UserLayout() {
  return (
    <>
      <UserHeader />
      <main className="flex w-full h-screen">
        <UserSidebar />
        <section className="p-5 bg-sky-500 text-white m-3 rounded-lg w-full ">
          <Outlet />
        </section>
      </main>
      <UserFooter />
    </>
  )
}