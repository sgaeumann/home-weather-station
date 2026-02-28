import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSideBar } from "@/components/app-sidebar"
import { Outlet } from "react-router"
import { AppBar } from "./app-bar"

export const Layout: React.FC = () => {
  return (
    <div>
        <AppBar />
      <SidebarProvider defaultOpen={false}>
        <div className="fixed left-4 top-20 z-50">
          <SidebarTrigger />
        </div>
        <AppSideBar />
        <main className="w-full">
          <Outlet /> {}
        </main>
      </SidebarProvider>
    </div>
  )
}