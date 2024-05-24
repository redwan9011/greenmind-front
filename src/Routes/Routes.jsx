import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/HomePage/Home";
import Login from "../Authentication/Login-signup/Login";
import Signup from "../Authentication/Login-signup/Signup";
import Products from "../Pages/Products/Products";
import Dashboard from "../Dashboad/Dashboard";
import ManageUser from "../DashboardPages/ManageUser/ManageUser";
import PrivateRouts from "./PrivateRouts";
import AddProduct from "../DashboardPages/AddProduct/AddProduct";
import ProductDetails from "../Pages/Products/ProductDetails";
import ProductCategory from "../Components/CategoryProducts/ProductCategory";




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
            path: '/product',
            element: <Products></Products>,
            loader: () => fetch(`http://localhost:3000/productCount`),
        },
        {
            path: '/products/:category',
            element: <ProductCategory></ProductCategory>,
            loader: () => fetch(`http://localhost:3000/product`),
        },
        {
          path: '/product/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params})=> fetch(`http://localhost:3000/product/${params.id}`)
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
    },

    {
      path: '/dasboard',
      element: <PrivateRouts><Dashboard></Dashboard></PrivateRouts>,
      children: [
        {
          path: 'users',
          element: <ManageUser></ManageUser>
        },
        {
          path: 'addproduct',
          element: <AddProduct></AddProduct>
        },
      ]
    }
  ]);

  export default router