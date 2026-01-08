import type { ReactNode } from "react"

export const FormLabel = ({htmlFor, children}: Readonly<{htmlFor: string, children: ReactNode}>) => {
  return (
    <>
      <label className="w-full font-bold md:w-1/4" htmlFor={htmlFor} >{children} </label>
    </>
  )
}