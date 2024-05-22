import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/HomePage/Home";
import Login from "../Authentication/Login-signup/Login";
import Signup from "../Authentication/Login-signup/Signup";
import Products from "../Pages/Products/Products";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/products',
            element: <Products></Products>
        }
      ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }, 
    {
        path: '/signup',
        element: <Signup></Signup>
    }
  ]);

  export default router