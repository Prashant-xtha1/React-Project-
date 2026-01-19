import { FormCancelButton, FormSubmitButton } from "../form/FormAction";
import { FormInputControl } from "../form/FormInput";
import { FormLabel } from "../form/FormLabel"
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface ICredentials {
  email: string,
  password: string
}

export const LoginDTO = z.object({
  email: z.email().nonempty().nonoptional(),
  password: z.string().min(8).nonempty().nonoptional(),
})

export default function LoginForm() {
  // using hook useForm
  const {control, handleSubmit, formState: {errors} } = useForm({
    defaultValues: { email: "", password: "", },
    resolver: zodResolver(LoginDTO),
  });


  const submitForm = (credentials: ICredentials) => {
    console.log("Submitted Successfully", credentials);
  }

  console.log(errors)
  return(
    <>
      <form onSubmit={handleSubmit(submitForm)} id="loginForm" className="flex flex-col gap-5 p-5">

        <div className="flex flex-col w-full md:flex-row md:items-center">
          <FormLabel htmlFor="email">Username: </FormLabel>
          <div className="w-full md:w-3/4">
            {/* <EmailInput name="email" placeholder="Enter your email as username" handler={register} /> */}
            {/* <FormInput type="email" name="email" placeholder="Enter your email as username" /> */}
            {/* <FormInputControl name="email" type="email" placeholder="Enter your email as username" handler={control} /> */}

            <FormInputControl <ICredentials> name="email" type="email" control={control} placeholder="Enter your email as username" errMsg= {errors?.email?.message} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center">
          <FormLabel htmlFor="password">Password: </FormLabel>
          <div className="w-full md:w-3/4">
            {/* <FormInput type="password" name="password" placeholder="Enter your Password" handler={register} /> */}
            <FormInputControl  name="password" type="password" placeholder="Enter your Password" control={control} errMsg= {errors?.password?.message} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-end">
          <NavLink to="/forget-password" className="text-teal-800 italic text-sm hover:underline">Forget Password</NavLink>
        </div>

        <div className="flex flex-col md:flex-row w-full items-center gap-5">
          <FormCancelButton label="Cancel" />
          <FormSubmitButton label="Login" />
        </div>

      </form>
    </>
  );
};