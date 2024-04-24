"use client"

import { useSignIn } from "@/services/useSignIn"
import { Input } from "./input"
import { useForm } from "react-hook-form";
import { SignInAndUp } from "@/types";
import { signIn } from "next-auth/react";

export const SignInForm = () => {

  const { signin, isLoading } = useSignIn();

  const { register, handleSubmit } = useForm<SignInAndUp>()

  const onSubmit = async ({ email, password }: { email: string, password: string}) => {
    // console.log(email, password);
    // signin({ email, password }, {
    //   onSuccess: () => console.log('loged in'),
    //   onError: (err: any) => console.log(err)
    // })

    const res = await signIn('credentials', {
      callbackUrl: '/',
      redirect: false,
      email: email,
      password: password,
    })
    console.log('res log...', res)
    
    return res;
  };

  return(
    <form 
      className="flex flex-col w-5/6 lg:w-1/2 mb-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input label="Email" type="text"
        { ...register('email')}
      />
      <Input label="Password" type="password" icon { ...register('password')} />
      <button type="submit" className="w-full transition duration-150 ease-in-out hover:bg-gray-800 bg-black text-white font-medium rounded-md p-4 mt-2">Sign In</button>
    </form>
  );
}