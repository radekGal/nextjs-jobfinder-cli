"use client";

import { useForm } from "react-hook-form";
import { Input } from "./input"
import { FormError } from "./FormError";
import { SignInAndUp } from "@/types";
import { useSignUp } from "@/services/useSignUp";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";

type Data = {
  confirmPassword?: string;
} & SignInAndUp;

export const SignUpForm = () => {

  const router = useRouter();

  const { signup, isLoading } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset, setFocus } = useForm<Data>();
  const { errors } = formState;


  const onSubmit = ({ name, email, password }: Data) => {

    const red = { name, email, password };
    signup(red, 
      {
        onSuccess: (user: any) => {console.log('created', user), reset()
        // router.push('/login')
      },
        onError: (err) => { 
          if(err.response.data.error.include('email')) {
            setFocus("email")}
          }
      }
    )
    // redirect('/login')
    // router.push('/login')
    //router.push('/login')
  }

  // useEffect(() => {
  //   if(isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [])


  return(
    <form 
      className="flex flex-col w-5/6 lg:w-1/2 mb-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input 
        label="Name" 
        type="text"  
        { ...register('name', 
          { 
            required: 'This field is required',
            minLength: {
              value: 3,
              message: 'Name needs a minimum 3 characters'
            }
          }
        )}
      />
      {errors?.name && <FormError text={errors?.name?.message as string} />}
      <Input label="Email" type="text" 
        { ...register('email', 
          { 
            required: 'This field is required' 
          }
        )}
      />
      {errors?.email && <FormError text={errors?.email?.message as string} />}
      <Input label="Password" type="password" 
        { ...register('password', 
          { 
            required: 'This field is required', 
            minLength: {
              value: 5,
              message: 'Password needs a minimum of 5 characters'
            } 
          }
        )}
        icon 
      />
      {errors?.password && <FormError text={errors?.password?.message as string} />}
      <Input 
        label="Confirm Password" 
        type="password"
        { ...register('confirmPassword', 
          { 
            required: 'This field is required', 
            validate: value => value === getValues().password || 'Password need to match' 
          }
        )}
        icon 
      />
      {errors?.confirmPassword && <FormError text={errors?.confirmPassword?.message as string} />}
      <Button type="submit" className="w-full transition duration-150 ease-in-out hover:bg-gray-800 bg-black text-white font-medium rounded-md p-4 mt-2">{isLoading ? 'Creating' : 'Create Account'}</Button>
    </form>
  );
}