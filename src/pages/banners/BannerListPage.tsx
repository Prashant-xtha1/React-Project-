export default function BannerListPage() {
  return (
    <>
      {/* Wrapper assumes parent section has bg-teal-500 */}
      <div className="p-6">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Banner Management
          </h2>

          <button className="mt-3 md:mt-0 bg-white text-teal-600 px-5 py-2 rounded-lg font-medium hover:bg-teal-50 transition">
            + Add Banner
          </button>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">

          {/* Search Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search banners..."
                className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300
                 rounded-lg placeholder-gray-400
                 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <button
                className="px-5 py-2 bg-teal-500 text-white font-medium rounded-lg
                 hover:bg-teal-600 cursor-pointer transition shadow-sm">
                Search
              </button>
            </div>
          </div>




          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left">Thumbnail</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">URL</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">
                    Summer Sale
                  </td>

                  <td className="p-3">
                    <img
                      src="https://via.placeholder.com/60"
                      alt="Thumbnail"
                      className="rounded-md"
                    />
                  </td>

                  <td className="p-3">
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>

                  <td className="p-3 text-teal-600 underline">
                    https://example.com
                  </td>

                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button className="w-9 h-9 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition">
                        ✏️
                      </button>

                      <button className="w-9 h-9 rounded-full bg-red-500 text-white hover:bg-red-600 transition">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mt-6">
            <p className="text-sm text-gray-600">
              Showing 1 to 10 of 50 entries
            </p>

            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100">
                Prev
              </button>

              <button className="px-3 py-1 rounded-lg bg-teal-500 text-white">
                1
              </button>

              <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100">
                2
              </button>

              <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
