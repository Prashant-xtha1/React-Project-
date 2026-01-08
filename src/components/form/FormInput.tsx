// Generic FormInput
export const FormInput = ({type, name, placeholder}: Readonly<{type: string, name: string, placeholder: string}>) => {
  return (
    <>
      <input className="rounded-[10px] border border-[#5d5d5d] w-full p-2" 
      type={type} 
      name={name} 
      id={name} 
      placeholder={placeholder} />
    </>
  );
};

// Specific FormInput
export const EmailInput = ({name, placeholder}: Readonly<{name: string, placeholder: string}>) => {
  return (
    <>
      <input className="rounded-[10px] border border-[#5d5d5d] w-full p-2" 
      type="email" 
      name={name} 
      id={name} 
      placeholder={placeholder} />
    </>
  );
};