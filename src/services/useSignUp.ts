import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { SignInAndUp } from "@/types";
import { fetcher } from "@/utils/fetch";

export function useSignUp(){
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: async ({name, email, password }: SignInAndUp) => {
      // return await axios.post('http://localhost:5000/api/auth/signup', {
      //   name,
      //   email,
      //   password
      // })
      return await fetcher.post('/auth/signup', {
        name,
        email,
        password
      })
    },
    onSuccess: (user) => {
      console.log(user);
      toast.success(user?.data?.success)
    },
    onError: (err: Error | any) => {
      toast.error(err?.response?.data.error)
    }
  });

  return { signup, isLoading }
}

// export function useSignUp(){
//   const { mutate: signup, isLoading } = useMutation({
//     mutationFn: register,
//     onSuccess: (user) => {
//       console.log(user)
//       toast.success(user?.success)
//     },
//     onError: (error) => {
//       toast.error(error as string)
//     }
//   });

//   return { signup, isLoading }
// }