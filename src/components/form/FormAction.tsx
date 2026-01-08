import type { ReactNode } from "react"

export const FormCancelButton = ({label="Cancel"}: Readonly<{label: ReactNode}>) => {
  return (
  <>
    <button className="cursor-pointer hover:underline hover:scale-96 transition w-full p-2 bg-[#7d0000] text-[#ffffff] rounded-[10px] border border-[#7e0000]">
      {label}
    </button>
  </>
  )
}

export const FormSubmitButton = ({label="Submit"}: Readonly<{label: ReactNode}>) => {
  return (
  <>
    <button className="cursor-pointer hover:underline hover:scale-96 transition w-full p-2 bg-[#002600] text-[#ffffff] rounded-[10px] border border-[#002700]">
      {label}
    </button>
  </>
  )
}