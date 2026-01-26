import { FaPen, FaTrash } from "react-icons/fa";
import { TableHeader } from "../../components/ui/TableHeader";

export default function BannerListPage() {
  return (
    <>
      {/* Wrapper assumes parent section has bg-teal-500 */}
      <div className="p-6">

        {/* Page Header (Title + Search + CTA) */}
        <TableHeader title= "Banner Management" showSearch={true} btnUrl="/admin/banner/create" btnTxt= "+ Add Banner" />

        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">

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
                      src="https://placehold.co/400x100"
                      alt="Thumbnail"
                      className="w-25 rounded-md object-cover"
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
                      <button className="size-10 flex items-center justify-center rounded-full bg-teal-500 text-white hover:bg-teal-600 transition cursor-pointer">
                        <FaPen className="size-4" />
                      </button>

                      <button className="size-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition cursor-pointer">
                        <FaTrash className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">
                    Summer Sale
                  </td>

                  <td className="p-3">
                    <img
                      src="https://placehold.co/400x100"
                      alt="Thumbnail"
                      className="w-25 rounded-md object-cover"
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
                      <button className="size-10 flex items-center justify-center rounded-full bg-teal-500 text-white hover:bg-teal-600 transition cursor-pointer">
                        <FaPen className="size-4" />
                      </button>

                      <button className="size-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition cursor-pointer">
                        <FaTrash className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">
                    Summer Sale
                  </td>

                  <td className="p-3">
                    <img
                      src="https://placehold.co/400x100"
                      alt="Thumbnail"
                      className="w-25 rounded-md object-cover"
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
                      <button className="size-10 flex items-center justify-center rounded-full bg-teal-500 text-white hover:bg-teal-600 transition cursor-pointer">
                        <FaPen className="size-4" />
                      </button>

                      <button className="size-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition cursor-pointer">
                        <FaTrash className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">
                    Summer Sale
                  </td>

                  <td className="p-3">
                    <img
                      src="https://placehold.co/400x100"
                      alt="Thumbnail"
                      className="w-25 rounded-md object-cover"
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
                      <button className="size-10 flex items-center justify-center rounded-full bg-teal-500 text-white hover:bg-teal-600 transition cursor-pointer">
                        <FaPen className="size-4" />
                      </button>

                      <button className="size-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition cursor-pointer">
                        <FaTrash className="size-4" />
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
              Showing 1 to 5 of 50 entries
            </p>

            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
                Prev
              </button>

              <button className="px-3 py-1 rounded-lg bg-teal-500 text-white">
                1
              </button>

              <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
                2
              </button>

              <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
