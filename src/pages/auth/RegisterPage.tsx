import { PageHeadingWithSubtitle } from "../../components/page-heading/PageHeading";

// import LoginForm from "../../components/auth/LoginForm";

export default function RegisterPage() {

  // interpolation {}
  // <></> -> fragmentation
  
  return (
  <section className="h-screen flex flex-col items-center justify-center p-2">
    <div className="w-full md:w-2xl lg:w-3xl xl:2-4xl shadow-2xl bg-stone-200/75 rounded-tl-[10px] rounded-br-[10px] p-5 py-10">

      {/* <PageHeadingTitle  />
      <PageHeadingSubtitle>

      </PageHeadingSubtitle> */}

      <PageHeadingWithSubtitle title="Register From Here">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quam ut eaque atque beatae? Minima
      </PageHeadingWithSubtitle>

      {/* <LoginForm /> */}

      <div className="w-full flex flex-col gap-5">
        <span className="flex items-center">
          <span className="h-px flex-1 bg-gray-300"></span>
          <span className="shrink-0 px-4 text-gray-900">Or</span>
          <span className="h-px flex-1 bg-gray-300"></span>
        </span>

        <div className="flex w-full justify-center">
          <a href="/login" className="cursor-pointer hover:underline w-full p-2 bg-[#ffffff] text-green-950 rounded-full border border-[#002700] text-center">Login Here</a>
        </div>
      </div>
    </div>
  </section>
  )
}