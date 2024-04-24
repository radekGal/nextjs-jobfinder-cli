import { Logo } from "./"


export const NavbarMain = () => {
  return(
    <nav className="w-full fixed top-0 left-0 right-0 bg-transparent py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="py-4 space-x-6 justify-end items-center hidden sm:flex">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </nav>
      </div>
    </nav>
  )
}