
export const UserHeader = () => {
  return(<>
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
  </>)
}
