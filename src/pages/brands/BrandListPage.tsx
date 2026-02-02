import { TableHeader } from "../../components/ui/TableHeader";
import { useEffect, useState } from "react";
import type { IBrand } from "./brand.contract";
import { RowSkeleton } from "../../components/ui/table/TableSkeleton";
import { toast } from "sonner";
import axiosInstance from "../../config/axios.config";
import type { IPagination, IResponse } from "../../common/GlobalType";
import { RowAction } from "../../components/ui/table/RowAction";
import { TablePagination } from "../../components/ui/table/TablePagination";

export default function BrandListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [brands, setBrands] = useState<Array<IBrand>>([]);
  const [pagination, setPagination] = useState<IPagination>({
    limit: 20,
    page: 1,
    total: 0,
    totalNoOfPages: 1
  })

  const getBrandList = async({page=1, limit=20, search=""}) => {
    // data fetch from server
    setLoading(true);
    try {
      const response: IResponse<IBrand> = await axiosInstance.get("/brand/", {
        params: {
          page: page,
          limit: limit,
          q: search
        }
      }) 
      setBrands(response.data);
      setPagination(response.meta.pagination)
    } catch {
      toast.error("Sorry! Could not fetch data!!!");
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      getBrandList({page:1, limit:20, search: ""});
    }
  }, [])

  const onDeleteConfirm = async(id: string) => {
    try {
      setLoading(true);
      await axiosInstance.delete("/brand/" + id);
      toast.success("Brand deleted successfully");
      await getBrandList({page:1, limit:20, search: ""});
    } catch {
      toast.error("Error deleting brand", {
        description: "Something issue on deleting brand, please try again once... "
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
        <TableHeader title="Brand Management" showSearch={true} btnUrl="/admin/brand/create" btnTxt="+ Add Brand" getSearchResult={getBrandList} />

        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Logo</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {
                  loading 
                  ? <>
                      <RowSkeleton rows={4} columns={4} />
                    </>
                  : (
                    brands && brands.length ? (
                      brands.map((brand: IBrand, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-gray-800">
                            {brand.name}
                          </td>

                          <td className="p-3">
                            <img
                              src={brand.logo.url}
                              alt={brand.name}
                              className="w-25 rounded-md object-cover"
                            />
                          </td>

                          <td className="p-3">
                            <span
                              className={`px-3 py-1 text-xs rounded-full ${brand.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                            >
                              {brand.status === "active" ? "Published": "Un-Published"}
                            </span>
                          </td>

                          <td className="p-3">
                            <RowAction 
                              editUrl={"/admin/brand/" + brand._id}
                              rowId={brand._id}
                              onDeleteConfirm={onDeleteConfirm}
                            />
                          </td>
                        </tr>
                      ))
                    ) : <tr className="hover:bg-gray-50">
                      <td colSpan={4} className="px-4 py-3 text-center w-full">
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
              brands && <TablePagination getDataAction={getBrandList} pagination={pagination} />
            )
          }

        </div>
      </div>
    </>
  );
}
