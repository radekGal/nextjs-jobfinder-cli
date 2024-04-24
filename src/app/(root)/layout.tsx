import { NavbarMain } from "@/components";
import { LayoutsProps } from "@/types";

export default function MainLayout({ children }: LayoutsProps) {
  return(
    <>
      <NavbarMain />
      {children}
    </>
  )
}