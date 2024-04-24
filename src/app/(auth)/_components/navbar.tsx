import { Logo } from "@/components/logo"

export const AuthNavbar = () => {
  return(
    <div className="w-full fixed top-0 left-0 right-0 bg-transparent py-5">
      <div className="container mx-auto">
        <Logo />
      </div>
    </div>
  )
}