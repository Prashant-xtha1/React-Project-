import { FaPen, FaTrash } from "react-icons/fa"
import { NavLink } from "react-router"
import Swal from 'sweetalert2'

interface IRowActionProps{
  editUrl: string,
  rowId: string,
  onDeleteConfirm: (id: string) => Promise<void>
}

export const RowAction = ({editUrl, rowId, onDeleteConfirm}: Readonly<IRowActionProps>) => {
  const deleteConfirm = async() => {
      const {isConfirmed} = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    if(isConfirmed) {
      onDeleteConfirm(rowId)
    }
  }
  return(
    <div className="flex justify-center gap-2">
      <NavLink 
        to={editUrl}
        className="size-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
        <FaPen className="size-4" />
      </NavLink>

      <button 
        className="size-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition"
        onClick={deleteConfirm}
      >
        <FaTrash className="size-4" />
      </button>
    </div>
  )
}