'use client'
import { useField } from "formik";
import { useEffect, useState } from "react";

const InputLogin = ({
  name,
  type,
  labelText,
  keyId,
  placeholder,
  textLightColor,
  primaryColor,
  ...props
}) => {
  const [field, meta] = useField(name);
  // eslint-disable-next-line no-unused-vars
  const [setFilled] = useState(false);
  // Toggle the filled state when the field meta changes
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (!props.as && meta.value) {
        setFilled(meta.value.length > 0);
      }
    }

    () => (isMounted = false);
  }, [meta.value, props, setFilled]);

  return (
    <div className="relative flex flex-col h-auto w-full">
      <input
        type={type}
        className="peer m-0 mb-2 flex w-full font-sans text-white
        rounded border border-solid border-neutral-300 bg-gray-noctua-500
        bg-clip-padding px-3 py-4 text-base font-normal leading-tight
        transition duration-300 ease-linear placeholder:text-transparent focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff]
        focus:pb-[0.625rem] focus:pt-[1.625rem]  focus:text-white 
        focus:outline-none peer-focus:text-primary dark:border-neutral-600
      dark:text-neutral-200 dark:focus:border-primary 
        dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] 
        [&:not(:placeholder-shown)]:pt-[1.625rem]"
        style={{ borderColor: `${primaryColor}` }}
        id={keyId}
        placeholder={placeholder}
        autoComplete="off"
        {...field}
        {...props}
      />
      <label
        htmlFor={keyId}
        className="pointer-events-none absolute text-white text-sm dark:text-white duration-300 
        transform -translate-y-1 scale-75 top-1 z-10 origin-[0] font-sans
         bg-transparent dark:bg-dark-gray-bg px-2 peer-focus:px-2 peer-placeholder-shown:scale-100
          peer-placeholder-shown:-translate-y-3/4 peer-placeholder-shown:top-[35%] 
          peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-8 left-1"
        style={{ color: `${textLightColor}` }}
      >
        {labelText}
      </label>
    </div>
  );
};

export default InputLogin;
