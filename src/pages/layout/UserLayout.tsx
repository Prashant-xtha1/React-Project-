import { Outlet, useNavigate } from "react-router";
import { UserHeader } from "../../components/user-dashboard/UserHeader";
import { UserSidebar } from "../../components/user-dashboard/UserSidebar";
import { UserFooter } from "../../components/user-dashboard/UserFooter";
import type { IUser } from "../../components/auth/auth.contract";
import { useAuth } from "../../hook/auth";
import { useEffect } from "react";
import { toast } from "sonner";

export default function UserLayout() {
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      toast.info("You are not logged in...", {
        description: "Login to access dashboard"
      });
      navigate("/");
    }
  }, [])

  return (
    <>
      <UserHeader loggedInUser={loggedInUser as IUser} />
      <main className="flex w-full min-h-screen">
        <UserSidebar loggedInUser={loggedInUser as IUser} />
        <section className="p-5 bg-gray-300 m-3 rounded-lg w-full overflow-y-auto">
          <Outlet />
        </section>
      </main>
      <UserFooter />
    </>
  )
}