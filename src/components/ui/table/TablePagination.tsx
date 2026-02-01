import type { BaseSyntheticEvent } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import type { IPagination } from "../../../common/GlobalType"

interface ITablePagination {
  pagination: IPagination, 
  getDataAction: (params: { page?: number, limit?: number, search?: string }) => Promise<void>
}

export const TablePagination = ({ pagination, getDataAction }: Readonly<ITablePagination>) => {
  return (<>
    <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-3 mt-6">

      <div className="inline-flex gap-1">
        <button className={`size-8 flex items-center justify-center rounded-full 
              ${pagination && pagination.page === 1 ? "bg-gray-400 text-gray-300 hover: cursor-not-allowed" : " bg-gray-200 text-gray-700 hover:bg-gray-100 hover: cursor-pointer"
          }`}
          onClick={async (e: BaseSyntheticEvent) => {
            e.preventDefault()
            await getDataAction({ page: (pagination.page - 1) })
          }}
        >
          <FaChevronLeft />
        </button>

        {
          [...Array(pagination.totalNoOfPages)].map((_, ind: number) => (
            <button key={ind} className={`size-8 flex items-center justify-center rounded-full cursor-pointer
                    ${pagination.page === (ind + 1) ? " bg-blue-600 text-white hover:bg-blue-700 " : " bg-gray-200 text-gray-700 hover:bg-gray-100 "}
                  `}
              onClick={async (e: BaseSyntheticEvent) => {
                e.preventDefault()
                if (pagination.page !== (ind + 1)) {
                  await getDataAction({ page: (ind + 1) })
                }
              }}
            >
              {ind + 1}
            </button>
          ))
        }

        <button className={`size-8 flex items-center justify-center rounded-full 
              ${pagination && pagination.page === pagination.totalNoOfPages ? "bg-gray-400 text-gray-300 hover: cursor-not-allowed" : " bg-gray-200 text-gray-700 hover:bg-gray-100 hover: cursor-pointer"
          }`}
          onClick={async (e: BaseSyntheticEvent) => {
            e.preventDefault()
            await getDataAction({ page: (pagination.page + 1) })
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  </>)
}