import { TableHeader } from "../../components/ui/TableHeader";
import { useEffect, useState } from "react";
import type { IBanner } from "./banner.contract";
import { RowSkeleton } from "../../components/ui/table/TableSkeleton";
import { toast } from "sonner";
import axiosInstance from "../../config/axios.config";
import type { IPagination, IResponse } from "../../common/GlobalType";
import { RowAction } from "../../components/ui/table/RowAction";
import { TablePagination } from "../../components/ui/table/TablePagination";

export default function BannerListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [banners, setBanners] = useState<Array<IBanner>>([]);
  const [pagination, setPagination] = useState<IPagination>({
    limit: 20,
    page: 1,
    total: 0,
    totalNoOfPages: 1
  })

  const getBannerList = async({page=1, limit=20, search=""}) => {
    // data fetch from server
    setLoading(true);
    try {
      const response: IResponse<IBanner> = await axiosInstance.get("/banner/", {
        params: {
          page: page,
          limit: limit,
          search: search
        }
      }) 
      setBanners(response.data);
      setPagination(response.meta.pagination)
    } catch {
      toast.error("Sorry! Could not fetch data!!!");
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      getBannerList({page:1, limit:20, search: ""});
    }
  }, [])

  const onDeleteConfirm = async(id: string) => {
    try {
      setLoading(true);
      await axiosInstance.delete("/banner/" + id);
      toast.success("Banner deleted successfully");
      await getBannerList({page:1, limit:20, search: ""});
    } catch {
      toast.error("Error deleting banner", {
        description: "Something issue on deleting banner, please try again once... "
      })
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Wrapper assumes parent section has bg-teal-500 */}
      <div className="p-6">

        {/* Page Header (Title + Search + CTA) */}
        <TableHeader title="Banner Management" showSearch={true} btnUrl="/admin/banner/create" btnTxt="+ Add Banner" />

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
                {
                  loading 
                  ? <>
                      <RowSkeleton rows={5} columns={5} />
                    </>
                  : (
                    banners && banners.length ? (
                      banners.map((banner: IBanner, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-gray-800">
                            {banner.title}
                          </td>

                          <td className="p-3">
                            <img
                              src={banner.image.url}
                              alt={banner.title}
                              className="w-25 rounded-md object-cover"
                            />
                          </td>

                          <td className="p-3">
                            <span
                              className={`px-3 py-1 text-xs rounded-full ${banner.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                            >
                              {banner.status === "active" ? "Published": "Un-Published"}
                            </span>
                          </td>

                          <td className="p-3">
                            <a href={banner.url} className=" text-blue-600 underline hover:text-blue-800" target="_banner" >
                              {banner.url}
                            </a>
                          </td>

                          <td className="p-3">
                            <RowAction 
                              editUrl={"/admin/banner/" + banner._id}
                              rowId={banner._id}
                              onDeleteConfirm={onDeleteConfirm}
                            />
                          </td>
                        </tr>
                      ))
                    ) : <tr className="hover:bg-gray-50">
                      <td colSpan={5} className="px-4 py-3 text-center w-full">
                        <p className="" >No Data Found....</p>
                      </td>
                    </tr>
                  )
                }

                { }
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {
            loading ? <></> : (
              banners && <TablePagination getDataAction={getBannerList} pagination={pagination} />
            )
          }

        </div>
      </div>
    </>
  );
}
