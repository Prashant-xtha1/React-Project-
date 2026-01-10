import { NavLink } from "react-router";
import { PageHeadingWithSubtitle } from "../page-heading/PageHeading"

export const NotFound = ({redirectLink, redirectTxt}: Readonly<{redirectLink: string, redirectTxt: string}>) => {
  return(
    <>
      <PageHeadingWithSubtitle title="Not Found!!!" titleClass="text-red-800! underline text-center mb-5">
        <p className="text-red-700 text-center">
          The page you are looking for does not exists anymore! <br/> Please go back to the homepage from button below.
        </p>
      </PageHeadingWithSubtitle>
      <div className="w-full flex flex-col gap-5">
        <span className="flex items-center">
          <span className="h-px flex-1 bg-gray-300"></span>
          <span className="shrink-0 px-4 text-gray-900">Or</span>
          <span className="h-px flex-1 bg-gray-300"></span>
        </span>

        <div className="flex w-full justify-center">
          <NavLink to={redirectLink} className="cursor-pointer hover:underline w-full p-2 bg-red-200 text-red-950 rounded-full border border-red-950 text-center">{redirectTxt}</NavLink>
        </div>
      </div>   
    </>
  );
};