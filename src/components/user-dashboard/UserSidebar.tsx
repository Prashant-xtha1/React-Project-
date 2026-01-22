export const UserSidebar = () => {
  return(<>
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
  </>)
}