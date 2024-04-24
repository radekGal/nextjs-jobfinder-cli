import { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<'button'>

export const Button = (props : ButtonProps) => {

  const { children, className, ...restProps } = props;

  return(
    <button className={`border-[2px] py-5 px-3 ${className}`} {...restProps}>{children}</button>
  )
}