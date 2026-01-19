// import done like this if the function is exported in default
import LoginForm from "../../components/auth/LoginForm";
import { useOutletContext } from "react-router";
import { useEffect } from "react";
import type { IOutletContext } from "../layout/layout.contract";

export default function LoginPage() {
  // interpolation {}
  // <></> -> fragmentation

  const outletContext = useOutletContext<IOutletContext>();
  useEffect(() => {
    outletContext.setLayoutData({
      pageTitle: "Login From Here",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quam ut eaque atque beatae?",
      btnTxt: "Register Here",
      btnLink: "/register"
    })
  }, []);
  
  return (
    <>
      <LoginForm />
    </>
  )
}