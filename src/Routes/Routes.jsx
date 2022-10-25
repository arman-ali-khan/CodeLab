import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Pages/Auth/Login";
import Register from "../components/Pages/Auth/Register";
import ResetPassword from "../components/Pages/Auth/ResetPassword";
import Blog from "../components/Pages/Blog";
import Checkout from "../components/Pages/Checkout";
import Courses from "../components/Pages/Courses";
import ErrorPage from "../components/Pages/ErrorPage";
import FAQ from "../components/Pages/FAQ";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
    {path: '/', element:<Root/>, errorElement: <ErrorPage/>, children:[
        {path: '/', element:<Home/>},
        {path:'/courses', element:<Courses/>},
        {path:'/checkout', element:<Checkout/>},
        {path:'/faq', element:<FAQ />},
        {path:'/blog', element:<Blog/>},
        {path:'/login', element:<Login/>},
        {path:'/register', element:<Register/>},
        {path:'/reset', element:<ResetPassword/>},
    ]}
])