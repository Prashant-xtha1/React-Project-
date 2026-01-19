import { Controller, useController, type FieldValues} from "react-hook-form";
import type { IInputProps, IGeneralInput, IFormInputProps } from "./form.contract";

export const FormInputControl = <T extends FieldValues> ({ type, name, placeholder, control, errMsg='' }: Readonly<IInputProps<T>>) => {
  const { field } = useController({
    name: name,
    control: control
  })
  return (
    <>
      <input className= {`rounded-[10px] border w-full p-2 ${errMsg ? "border-red-500" : "border-[#5d5d5d]" } `}
        type={type}
        id={name}
        {...field}
        placeholder={placeholder} />
        <span className="mt-1 text-sm text-red-500">{errMsg}</span>
    </>
  );
};

// Generic FormInput
export const FormInput = ({ type, name, placeholder, handler }: Readonly<IFormInputProps>) => {
  return (
    <>
      <input className="rounded-[10px] border border-[#5d5d5d] w-full p-2"
        type={type}
        {...handler(name)}
        id={name}
        placeholder={placeholder} />
    </>
  );
};

// Creating control component by using hook -> useController()
export const FormInputControl1 = ({ type, name, placeholder, handler }: Readonly<IFormInputProps>) => {
  const { field } = useController({
    name: name,
    control: handler
  })
  return (
    <>
      <input className="rounded-[10px] border border-[#5d5d5d] w-full p-2"
        type={type}
        id={name}
        {...field}
        placeholder={placeholder} />
    </>
  );
};

// Specific FormInput
export const EmailInput = ({ name, placeholder, handler }: Readonly<IGeneralInput>) => {
  return (
    <>
      <input className="rounded-[10px] border border-[#5d5d5d] w-full p-2"
        type="email"
        {...handler(name)}
        id={name}
        placeholder={placeholder} />
    </>
  );
};

// Creating controller as a component
export const EmailInputControl = ({ name, placeholder, handler }: Readonly<IGeneralInput>) => {
  return (
    <>
      <Controller
        name={name}
        control={handler}
        render={(field) => {
          return (
            <>
              <input className="rounded-[10px] border border-[#5d5d5d] w-full p-2"
                type="email"
                {...handler(name)}
                id={name}
                {...field}
                placeholder={placeholder} />
            </>
          )
        }}
      ></Controller>
    </>
  );
};