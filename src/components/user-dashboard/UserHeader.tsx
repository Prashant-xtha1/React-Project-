import type { BaseSyntheticEvent } from "react"
import type { IUser } from "../auth/auth.contract"
import { NavLink, useNavigate } from "react-router"
import { useAuth } from "../../hook/auth"
import { toast } from "sonner"

export const UserHeader = ({ loggedInUser }: Readonly<{ loggedInUser: IUser }>) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    logout();
    toast.success("You have been logout successfully...");
    navigate("/");
  }

  return(<>
    <header className="h-20 bg-green-600 w-full text-white flex flex-col justify-center text-center">
      <div className="flex items-center justify-between w-full px-6">
        <h1 className="text-2xl font-bold">One-Piece</h1>
        <nav className="flex gap-6">
          <NavLink to={loggedInUser && `/${loggedInUser.role}/profiles`} className="hover:text-green-200">Profile</NavLink>
          <NavLink to={loggedInUser && `/${loggedInUser.role}/settings`} className="hover:text-green-200">Settings</NavLink>
          <button onClick={handleLogout}
          className="hover:text-green-200 cursor-pointer transition-colors">Logout
          </button>
        </nav>
      </div>
    </header>
  </>)
}
