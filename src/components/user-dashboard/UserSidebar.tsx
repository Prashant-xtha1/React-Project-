import { FaTachometerAlt, FaUsers, FaImage, FaSitemap, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router';
import type { IUser } from '../auth/auth.contract';
import { FaB, FaMessage } from 'react-icons/fa6';

export const UserSidebar = ({ loggedInUser }: Readonly<{ loggedInUser: IUser }>) => {
  return (
    <aside className="bg-stone-600 text-white w-50 ">
      <ul className="flex flex-col space-y-2 p-4">
        <li>
          <NavLink to={loggedInUser && `/${loggedInUser.role}`} className="flex items-center gap-3 p-2 rounded hover:bg-stone-700">
            <FaTachometerAlt className="text-blue-400" /> Dashboard
          </NavLink>
        </li>

        {
          loggedInUser && loggedInUser.role === "admin" ? <li>
          <NavLink to={loggedInUser && `/${loggedInUser.role}/banners`} className="flex items-center gap-3 p-2 rounded hover:bg-stone-700">
            <FaImage className="text-green-400" /> Banners
          </NavLink>
        </li> : <></>
        }

        {
          loggedInUser && (loggedInUser.role === "admin" || loggedInUser.role === "seller") ? <li>
          <NavLink to={loggedInUser && `/${loggedInUser.role}/brands`} className="flex items-center gap-3 p-2 rounded hover:bg-stone-700">
            <FaB className="text-indigo-400" /> Brands
          </NavLink>
        </li> : <></>
        }

        {
          loggedInUser && (loggedInUser.role === "admin" || loggedInUser.role === "seller") ? <li>
          <NavLink to={loggedInUser && `/${loggedInUser.role}/categories`} className="flex items-center gap-3 p-2 rounded hover:bg-stone-700">
            <FaSitemap className="text-cyan-400" /> Categories
          </NavLink>
        </li> : <></>
        }

        <li>
          <NavLink to={loggedInUser && `/${loggedInUser.role}/users`} className="flex items-center gap-3 p-2 rounded hover:bg-stone-700">
            <FaUsers className="text-violet-400" /> Users
          </NavLink>
        </li>

        {
          loggedInUser && (loggedInUser.role === "admin" || loggedInUser.role === "seller") ? <li>
          <NavLink to={loggedInUser && `/${loggedInUser.role}/products`} className="flex items-center gap-3 p-2 rounded hover:bg-stone-700">
            <FaShoppingBag className="text-lime-400" /> Products
          </NavLink>
        </li> : <></>
        }

        <li>
          <NavLink to={loggedInUser && `/${loggedInUser.role}/orders`} className="flex items-center gap-3 p-2 rounded hover:bg-stone-700">
            <FaShoppingCart className="text-rose-400" /> Orders
          </NavLink>
        </li>

        <li>
          <NavLink to={loggedInUser && `/${loggedInUser.role}/messages`} className="flex items-center gap-3 p-2 rounded hover:bg-stone-700">
            <FaMessage className="text-amber-400" /> Messages
          </NavLink>
        </li>

      </ul>
    </aside>
  )
}
