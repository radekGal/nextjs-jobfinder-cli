// import { NavbarMain } from "@/components";
import { LayoutsProps } from "@/types";
import { Sidebar } from "./_components/sidebar";

export default function DashboardLayout({ children }: LayoutsProps) {
  return(
    <div className="h-screen flex">
      {/* <NavbarMain /> */}
      <Sidebar />
      <main className="flex flex-col flex-1 overflow-hidden bg-[#f3f3f3] mt-12 md:mt-0">
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}