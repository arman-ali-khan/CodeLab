import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/Pages/About";
import Login from "../components/Pages/Auth/Login";
import Register from "../components/Pages/Auth/Register";
import ResetPassword from "../components/Pages/Auth/ResetPassword";
import Blog from "../components/Pages/Blog";
import Checkout from "../components/Pages/Checkout";
import Courses from "../components/Pages/Courses";
import Details from "../components/Pages/Details";
import ErrorPage from "../components/Pages/ErrorPage";
import FAQ from "../components/Pages/FAQ";
import Pdf from "../components/Pages/Pdf";
import Profile from "../components/Pages/Profile";
import Sidebar from "../components/Pages/Sidebar";
import Root from "../Layout/Root";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {path: '/', element:<Root/>, errorElement: <ErrorPage/>, children:[
        {path: '/', element:<Home/>},
        {
            path:'/courses', 
            element:<Courses/>, 
            loader: ()=> fetch('https://assignment-server-for-vercel.vercel.app/courses')
        },
        {
            path:'/sidebar', 
            element:<Sidebar/>, 
            loader: ()=> fetch('https://assignment-server-for-vercel.vercel.app/courses')
        },
        {path:'/faq', element:<FAQ />},
        {path:'/blog', element:<Blog/>},
        {
            path:'/details/:id', 
            element:<Details/>,
            loader: ({params})=>{
            return fetch(`https://assignment-server-for-vercel.vercel.app/courses/${params.id}`)
        }},
        {path:'/login', element:<Login/>},
        {path:'/register', element:<Register/>},
        {path:'/pdf', element:<Pdf/>,
        loader: ({params})=>{
           return fetch(`https://assignment-server-for-vercel.vercel.app/courses/${params.id}`)
       }},


        {path:'/checkout/:id', element:<PrivateRoute><Checkout/></PrivateRoute>,
        loader: ({params})=>{
           return fetch(`https://assignment-server-for-vercel.vercel.app/courses/${params.id}`)
       }},


        {path:'/reset', element:<ResetPassword/>},
        {path:'/profile', element:<Profile/>},
        {path:'/about', element:<About/>},
    ]}
])