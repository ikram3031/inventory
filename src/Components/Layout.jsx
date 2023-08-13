import NavBar from "./sections/NavBar/navBar";
import SideBar from "./sections/SideBar/sideBar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
        <NavBar/>
        <section className="layOut"> 
            <SideBar/>
            <Outlet/>
        </section>
    </>
  )
}

export default Layout