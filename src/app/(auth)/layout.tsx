import { LayoutsProps } from "@/types";
import { AuthNavbar } from "./_components";

export default function AuthLayout({ children }: LayoutsProps) {
  return(
    <>
      <AuthNavbar />
      {children}
    </>
  )
}