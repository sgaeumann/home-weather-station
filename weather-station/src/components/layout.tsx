import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSideBar } from "@/components/app-sidebar"
import { Outlet } from "react-router"
import { AppBar } from "./app-bar"

export const Layout: React.FC = () => {
  return (
    <SidebarProvider>
      <AppBar />
      <AppSideBar />
      <main>
        <SidebarTrigger />
        <Outlet /> {}
      </main>
    </SidebarProvider>
  )
}