import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRouters from './Router/Routers'
// import MyLaout from './LayOut/MyLaout'
// import Home from './Pases/Home/Home'
// import Product from './Pases/Product/Product'

// const myCreactRouter = createBrowserRouter([
//   {
//     path: '/',
//     element:<MyLaout/>,

//     children: [
//       {
//         path: '/',
//         element:<Home/>
//       },
//       {
//         path:'/product',
//         element:<Product/>
//       }

//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouters} />
  </React.StrictMode>,
)
