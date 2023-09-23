import { NavLink } from "react-router-dom";
import img from "../../assets/Amazon-logo.jpg"

const Navber = () => {
    return (
        <section className="flex justify-between px-[10rem] shadow-md py-5">
            <div >
                <img className="w-[80px] rounded-md" src={img} alt="" />
            </div>
            <nav>
                <ul className="flex gap-10">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/products"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Products
                    </NavLink>

                    <NavLink
                        to="/deshboards"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                       Deshboards
                    </NavLink>
                </ul>

            </nav>
        </section>
    );
};

export default Navber;

