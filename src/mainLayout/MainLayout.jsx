import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto">
            <NavBar></NavBar>
            <div className="min-h-[70vh]">
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;