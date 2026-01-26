import { Controller, useController, type FieldValues} from "react-hook-form";
import type { IInputProps, IGeneralInput, IFormInputProps, ISelectProps, ISingleListItem, IFileInputProps } from "./form.contract";
import type { BaseSyntheticEvent } from "react";

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

export const FormSelectInput = <T extends FieldValues> ({ name, control, options, errMsg='' }: Readonly<ISelectProps<T>>) => {
  const { field } = useController({
    name: name,
    control: control
  })
  return (
    <>
      <select className= {`rounded-[10px] border w-full p-2 ${errMsg ? "border-red-500" : "border-[#5d5d5d]" } `}
        {...field}
      >
        <option value="">-- Select Any One --</option>
        {
          options && options.map((row: ISingleListItem) => (
            <option value={row.value} key={row.value}>{row.label}</option>
          ))
        }
      </select>
        <span className="mt-1 text-sm text-red-500">{errMsg}</span>
    </>
  );
};

export const FileInput = <T extends FieldValues> ({ name, control, errMsg='', isMultiple= false }: Readonly<IFileInputProps<T>>) => {
  const { field } = useController({
    name: name,
    control: control
  })
  return (
    <>
      <input className= {`rounded-[10px] border w-full p-2 ${errMsg ? "border-red-500" : "border-[#5d5d5d]" } `}
        type={"file"}
        multiple={isMultiple}
        onChange={(e: BaseSyntheticEvent) => {
          
          // const files = e.target.files; --> it provides object of object to the server i.e. {"0": {}}
          
          const files = Object.values(e.target.files)  // passes array of object i.e. [{}]

          if(isMultiple) {
            field.onChange(files);
          } else {
            field.onChange(files[0]);
          }
          
        }}
      />
        <span className="mt-1 text-sm text-red-500">{errMsg}</span>
    </>
  );
};