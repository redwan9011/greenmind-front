import { Outlet } from "react-router-dom";
import Navbar from "../SharedSection/Navbar/Navbar";
import Footer from "../SharedSection/Footer/Footer";


const Layout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;