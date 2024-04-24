import { SignInAndUp } from "@/types";
import { fetcher } from "@/utils/fetch";
import axios, { AxiosError } from "axios"

export async function signup({ name, email, password }: SignInAndUp) {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/signup', {
      name,
      email,
      password
    });

    return res.data;
  } catch(err) {
    const e = err as AxiosError
    return e?.response
  }
}

export async function signin({ email, password }: Omit<SignInAndUp, 'name'>) {
  try {

    const res = await fetcher.post('/auth/signin', {
      email,
      password
    });

    // const res = await axios.post('http://localhost:5000/api/auth/signin', {
    //   email,
    //   password,
    // });

    return res;

  } catch(err) {
    const e = err as AxiosError
    return e?.response
  }
}