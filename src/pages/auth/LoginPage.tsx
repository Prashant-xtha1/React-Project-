// import done like this if the function is exported without default
// import { PageHeadingSubtitle, PageHeadingTitle } from "../../components/page-heading/PageHeading";
import { PageHeadingWithSubtitle } from "../../components/page-heading/PageHeading";

// import done like this if the function is exported in default
import LoginForm from "../../components/auth/LoginForm";

export default function LoginPage() {

  // interpolation {}
  // <></> -> fragmentation
  
  return (
  <section className="h-screen flex flex-col items-center justify-center p-2">
    <div className="w-full md:w-2xl lg:w-3xl xl:2-4xl border border-[#a1a1a1] bg-[#f1f1f1] rounded-tl-[10px] rounded-br-[10px] p-5 py-10">

      {/* <PageHeadingTitle  />
      <PageHeadingSubtitle>

      </PageHeadingSubtitle> */}

      <PageHeadingWithSubtitle title="Login From Here">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quam ut eaque atque beatae? Minima
      </PageHeadingWithSubtitle>
      <LoginForm />
    </div>
  </section>
  )
}