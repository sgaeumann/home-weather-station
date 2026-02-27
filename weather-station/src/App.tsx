import { BrowserRouter, Routes, Route } from "react-router"
import Details from "@/pages/Details"
import Home from "@/pages/Home"
import { AppRoutes } from "./routes"



function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <AppRoutes />
    </div>
  )
}

export default App
