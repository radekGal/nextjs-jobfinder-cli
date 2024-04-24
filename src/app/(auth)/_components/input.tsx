"use client";

import { forwardRef, useState } from "react";
import { InputProps } from "@/types"
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons'

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, type, icon, ...props }: InputProps, ref)  {

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return(
    <div className="flex flex-col my-2">
      <label className="font-medium">{label}</label>
      <div className="relative my-2">
        <input 
          type={showPassword ? "text" : type}
          name={label}
          placeholder={label}
          className="py-[14px] px-4 rounded-md border-[1px] text-sm w-full"
          {...props}
          ref={ref}
        />
        {icon &&
          <>
          {showPassword ? 
            <EyeOpenIcon
            className="w-[22px] h-[22px] absolute right-[14px] top-[15px] z-1 transition duration-150 ease-in-out text-gray-400 hover:text-black" 
            onClick={() => setShowPassword(!showPassword)}
          /> 
            :
            <EyeNoneIcon
              className="w-[22px] h-[22px] absolute right-[14px] top-[15px] z-1 transition duration-150 ease-in-out text-gray-400 hover:text-black" 
              onClick={() => setShowPassword(!showPassword)}
            />
          }
          </>
        }
      </div>
    </div>
  )
});