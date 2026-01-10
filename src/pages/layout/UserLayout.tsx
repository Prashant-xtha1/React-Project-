import { Outlet } from "react-router";

export default function UserLayout() {
  return (
    <>
      <header className="h-20 bg-green-600 w-full text-white flex flex-col justify-center text-center">
        <div className="flex items-center justify-between w-full px-6">
          <h1 className="text-2xl font-bold">One-Piece</h1>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-green-200">Profile</a>
            <a href="#" className="hover:text-green-200">Settings</a>
            <a href="#" className="hover:text-green-200">Logout</a>
          </nav>
        </div>
      </header>
      <main className="flex w-full h-screen">
        <aside className="bg-stone-600 text-white w-50 ">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a href="#" className="block p-2 rounded hover:bg-stone-700">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-stone-700">Sales</a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-stone-700">Inventory</a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-stone-700">Customers</a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-stone-700">Reports</a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-stone-700">Settings</a>
            </li>
          </ul>
        </aside>
        <section className="p-5 bg-sky-500 text-white m-3 rounded-lg w-full ">
          <Outlet />
        </section>
      </main>
      <footer className="h-16 bg-gray-800 w-full text-white text-center flex items-center justify-center">
        <p className="text-sm">&copy; 2026 Prashant Kakshapati. All rights reserved.</p>
      </footer>
    </>
  )
}