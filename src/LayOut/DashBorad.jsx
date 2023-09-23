import { Link, Outlet } from "react-router-dom";

const DashBorad = () => {
    return (
        <div className="flex">
            <div className="w-[20%]">
                <ul>
                    <li className="shadow-xl text-center m-5">
                        <Link to="/deshboards">Deshboard</Link>
                    </li>
                    <li className="shadow-xl text-center m-5">
                        <Link to="/deshboards/profile">Profile</Link>
                    </li>
                    <li className="shadow-xl text-center m-5">
                        <Link to="/deshboards/editor">editor</Link>
                    </li>
                </ul>
            </div>
            <div className="w-[80%] ml-[6rem]">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBorad;

// 

