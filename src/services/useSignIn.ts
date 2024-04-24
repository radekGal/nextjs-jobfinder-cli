import { useMutation } from "react-query";
import {signin as login } from './auth';

export function useSignIn(){
  const {mutate: signin, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (user: any) => console.log(user),
    onError: (err: any) => console.log(err)
  });

  return { signin, isLoading }
}