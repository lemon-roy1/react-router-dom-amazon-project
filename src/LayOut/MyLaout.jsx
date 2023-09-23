import { Outlet } from "react-router-dom";
import Navber from "./Navber/Navber";
import Footer from "./Footer/Footer";


const MyLaout = () => {
    return (
        <div>
            <Navber />
            <div className="my-10">
                <Outlet />
            </div>
            <Footer />
            
        </div>
    );
};

export default MyLaout;