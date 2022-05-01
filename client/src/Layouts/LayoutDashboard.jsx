import { Outlet } from 'react-router-dom'
import Navbar from '../Components/NavigationBar/Navbar'


export default function LayoutDashboard() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}


