import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const RootLayout = () => {
  return (
    <div className="hero min-h-screen bg-[#ddd] p-8">
      <div className="grid grid-cols-[1fr_2fr_2fr] grid-rows-[50px_2fr_2fr] w-full h-full gap-7">
        <Sidebar />

        <Navbar />

        <Outlet />

      </div>
    </div>
  )
}

export default RootLayout