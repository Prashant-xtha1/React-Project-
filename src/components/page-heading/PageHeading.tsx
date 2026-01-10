// Atomic level breakdown 

import type { ReactNode } from "react";

// export const PageHeadingTitle = (props: Readonly<{title: string}>) => {

// Destructuring props by defining attribute
export const PageHeadingTitle = ({title, className=''}: Readonly<{title: ReactNode, className?: string}>) => {
  return(
    <>
      {/* <h1 className="text-3xl font-bold" >{props.title}</h1> */}
      <h1 className={`text-3xl font-bold ${className}`} >{title}</h1>
    </>
  );
};

// export const PageHeadingSubtitle = (props: Readonly<{subtitle: string}>) => {
export const PageHeadingSubtitle = ({children}: Readonly<{children: ReactNode}>) => {
  return(
    <>
      {/* <span>{props.subtitle}</span> */}
      <span>{children}</span>
    </>
  )
}



export const PageHeadingWithSubtitle = ({title, children, titleClass=''}: Readonly<{title: ReactNode, children: ReactNode, titleClass?: string}>) => {
  return(
  <>
    <PageHeadingTitle title={title} className={titleClass} />
    <PageHeadingSubtitle>
      {children}
    </PageHeadingSubtitle>
  </>
  );
};