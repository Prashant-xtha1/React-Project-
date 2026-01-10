import { NotFound } from "../components/errors/Error";

export default function ErrorPage({code, redirectLink='', redirectTxt=''}: Readonly<{code: number, redirectLink?: string, redirectTxt?: string}>) {
  
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center p-2">
        <div className="w-full md:w-2xl lg:w-3xl xl:2-4xl shadow-2xl bg-stone-200/75 rounded-tl-[10px] rounded-br-[10px] p-5 py-10">
          {
            (code === 404) ? <NotFound redirectLink={redirectLink} redirectTxt={redirectTxt} /> : <></>
          }
        </div>
      </section>
    </>
  );
};