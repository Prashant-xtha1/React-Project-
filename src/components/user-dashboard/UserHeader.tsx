import { useState, useRef, useEffect, type BaseSyntheticEvent } from "react"
import type { IUser } from "../auth/auth.contract"
import { NavLink, useNavigate } from "react-router"
import { useAuth } from "../../hook/auth"
import { toast } from "sonner"

export const UserHeader = ({ loggedInUser }: Readonly<{ loggedInUser: IUser }>) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    logout();
    toast.success("You have been logout successfully...");
    navigate("/");
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-20 bg-green-600 w-full text-white shadow-md">
      <div className="flex items-center justify-between w-full px-6 h-full">
        {/* Logo/Brand */}
        <h1 className="text-2xl font-bold">One-Piece</h1>

        {/* Profile Section */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 bg-green-700 hover:bg-green-800 rounded-lg px-4 py-2 transition-all duration-200"
          >
            {/* Profile Picture */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-100">
              <img
                src={loggedInUser?.image?.url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${loggedInUser?.name || 'User'}&backgroundColor=b6e3f4`}
                alt={loggedInUser?.name || 'User'}
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Name */}
            <span className="font-semibold text-sm">{loggedInUser?.name || 'User'}</span>

            {/* Dropdown Arrow */}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
              <NavLink
                to={loggedInUser && `/${loggedInUser.role}/settings`}
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Settings</span>
              </NavLink>

              <div className="border-t border-gray-200"></div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors w-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
