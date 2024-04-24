import Link from "next/link";
import { FormSeparator, SignUpForm } from "../_components";

const RegisterPage = () => {
  return(
    <div className="w-full h-screen overflow-hidden">
      <div className="flex h-screen">
        <div className="flex flex-col justify-center items-center w-full md:w-3/5 lg:w-1/2">
          <h1 className="font-bold text-4xl mb-10">Create an account 😊</h1>
          <SignUpForm />
          <FormSeparator />
          <h3 className="text-gray-400">
            Already have an account?
            <Link href="/login" className="font-medium text-black transition duration-150 ease-in-out hover:text-gray-800">Sign in</Link>
          </h3>
        </div>
        <div className="hidden md:flex md:w-2/5 lg:w-1/2 bg-[#F6FDC3]"></div>
      </div>
    </div>
  );
}

export default RegisterPage;