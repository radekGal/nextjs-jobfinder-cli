import Link from "next/link";
import { FormSeparator, SignInForm } from "../_components";
// import Image from "next/image";

const LoginPage = () => {
  return(
    <div className="w-full h-screen overflow-hidden">
      <div className="flex h-screen">
        <div className="flex flex-col justify-center items-center w-full md:w-3/5 lg:w-1/2">
          <h1 className="font-bold text-4xl mb-10">Welcome Back! 👌</h1>
          <SignInForm />
          <FormSeparator />
          <h3 className="text-gray-400">
            Don't have an account?
            <Link href="/register" className="font-medium text-black transition duration-150 ease-in-out hover:text-green-500">Sign up</Link>
          </h3>
        </div>
        <div className="hidden md:flex md:w-2/5 lg:w-1/2 relative bg-[#F6FDC3]">
          {/* <Image src="/login.jpg" alt="login" width={800} height={800} />  */}
        </div>
      </div>
    </div>
  )
}

export default LoginPage;