// interpolation {}
// <></> -> fragmentation
import { useEffect } from "react";
import { useOutletContext } from "react-router";
import type { IOutletContext } from "../layout/AuthLayout";

export default function RegisterPage() {
  const outletContext = useOutletContext<IOutletContext>();
  useEffect(() => {
    outletContext.setLayoutData({
      pageTitle: "Register From Here",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quam ut eaque atque beatae?",
      btnTxt: "Login Here",
      btnLink: "/"
    })
  }, []);

  return (
  <>

  </>
  )
}