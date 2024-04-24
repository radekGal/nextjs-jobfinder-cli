import { ComponentPropsWithoutRef } from "react"

type InputFormProps = ComponentPropsWithoutRef<"input"> 

export const InputForm = (props : InputFormProps) => {

  const { className, ...restProps } = props;

  return(
    <input className={`border-[1px] bg-white ${className}`} { ...restProps} />
  );
}


