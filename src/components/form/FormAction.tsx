import type { ReactNode } from "react"

export interface IFormActionButtons {
  label: ReactNode,
  disabled?: boolean,
}

export const FormCancelButton = ({ label="Cancel", disabled=false }: Readonly<IFormActionButtons>) => {
  return (
  <>
    <button disabled={disabled} className="cursor-pointer hover:underline hover:scale-96 transition w-full p-2 bg-[#7d0000] text-[#ffffff] rounded-[10px] border border-[#7e0000]">
      {label}
    </button>
  </>
  )
}

export const FormSubmitButton = ({ label="Submit", disabled=false }: Readonly<IFormActionButtons>) => {
  return (
  <>
    <button disabled={disabled} className="cursor-pointer hover:underline hover:scale-96 transition w-full p-2 bg-[#002600] text-[#ffffff] rounded-[10px] border border-[#002700]">
      {label}
    </button>
  </>
  )
}