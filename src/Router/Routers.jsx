import { createBrowserRouter } from "react-router-dom";
import MyLaout from "../LayOut/MyLaout";
import Home from "../Pases/Home/Home";
import Products from "../Pases/Products/Products";
import SingleProduct from "../Pases/SingleProduct/SingleProduct";
import DashBorad from "../LayOut/DashBorad";
import Dashboard from "../Pases/Dashboard/Dashboard";
import Profile from "../Pases/Profile/Profile";
import Editod from "../Pases/Editor/Editod";

const myRouters = createBrowserRouter([
    {
        path: "/",
        element: <MyLaout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products/>,
                loader: ()=>fetch(`https://dummyjson.com/products`)
            },
            {
                path:"/products/:id",
                element:<SingleProduct/>,
                loader:(object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
            },
            {
                path: "/deshboards",
                element: <DashBorad/>,
                children:[
                    {
                        path:"/deshboards",
                        element:<Dashboard/>
                    },
                    {
                        path:"/deshboards/profile",
                        element:<Profile/>
                    },
                    {
                        path:"/deshboards/editor",
                        element:<Editod/>
                    }
                ]
            }
        ]
    }
])
export default myRouters;
