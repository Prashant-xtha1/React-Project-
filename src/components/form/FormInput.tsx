// Generic FormInput
export const FormInput = ({ type, name, placeholder, handler }: Readonly<{
  type?: string,
  name: string,
  placeholder?: string,
  // eslint-disable-next-line
  handler: any
}>) => {
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

// Specific FormInput
export const EmailInput = ({ name, placeholder, handler }: Readonly<{
  name: string,
  placeholder?: string,
  // eslint-disable-next-line
  handler: any
}>) => {
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