import { useEffect, useState, type BaseSyntheticEvent, type ReactNode } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router";

export interface ITableHeaderProps {
  title: ReactNode;
  showSearch: boolean;
  btnUrl: string | null;
  btnTxt: ReactNode | null;
  getSearchResult?: (params: { page?: number, limit?: number, search?: string }) => Promise<void>
}

export const TableHeader = ({
  title,
  showSearch,
  btnUrl,
  btnTxt,
  getSearchResult
}: Readonly<ITableHeaderProps>) => {
  const [search, setSearch] = useState<string>();

  const handleSearch = async () => {
    if(getSearchResult) {
      await getSearchResult({search: search, page: 1, limit: 20})
    }
  }

  // debounce

  useEffect(() => {
    const timer = setTimeout(async() => {
      await handleSearch();
    }, 500)
    return () => {
      clearTimeout(timer);
    }
  }, [search])

  return (
    <div className="mb-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* Left: Title */}
        <h1 className="text-2xl font-bold text-black whitespace-nowrap">
          {title}
        </h1>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">

          {/* Search (Input + Button together) */}
          {showSearch && (
            <div className="flex items-center gap-2 ">

              {/* Input */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />

                <input
                  type="search"
                  placeholder="Enter search keyword..."
                  className="h-10 w-65 pl-10 pr-4 rounded-lg text-black placeholder-black
                  border border-white/40 bg-white focus:outline-none focus:ring-2 focus:ring-white"
                  onChange={(e: BaseSyntheticEvent) => setSearch(e.target.value) }
                />
              </div>

              {/* Search Button */}
              {/* <button
                className="h-10 px-4 bg-white text-black font-medium rounded-lg
                  hover:bg-blue-400 transition cursor-pointer whitespace-nowrap">
                Search
              </button> */}

            </div>
          )}

          {/* Add Button */}
          {btnUrl && btnTxt && (
            <NavLink
              to={btnUrl}
              className="h-10 px-5 flex items-center bg-white text-black
                font-medium rounded-lg hover:bg-green-400 transition
                cursor-pointer whitespace-nowrap">
              {btnTxt}
            </NavLink>
          )}

        </div>
      </div>
    </div>
  );
};
