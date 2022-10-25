import React, { useContext, useState } from 'react';
import { HiMoon, HiSun, HiUserCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../Context/AuthContext';
const Navbar = () => {
    const {user,logOut} = useContext(UserContext)
    const [night, setNight] = useState(false)

    const handleLogout =()=>{
        logOut()
        .then(()=>{
             toast.error('Logout Succeed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
           
        })
        .catch(error=>{
            console.error("error", error);
        })
    }


    const handleNightMode = ()=>{
        setNight(!night)
    }
    return (
        <div className="navbar bg-base-100 shadow-md">
            <ToastContainer/>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/courses'>Courses</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/faq'>FAQ</Link></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Programming Language</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/courses'>Courses</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/faq'>FAQ</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
        user? 
        <span className='flex justify-center items-center' title={user.displayName}>
        {user.photoURL ? 
            <img className='w-10 h-10 rounded-full' src={user.photoURL} alt=''/> 
            :
            <p className='text-4xl'><HiUserCircle /></p>}  
        <button onClick={handleLogout} className="btn btn-warning mx-2">Logout</button>
        </span >
            : 
        <>
            <Link to='/login' className="btn btn-warning mx-2">Login</Link>
            <Link to='/register' className="btn btn-warning mx-2">Register</Link>
        </>
    }
    
   <button onClick={handleNightMode} >
   <p className='text-4xl'>
    {
        night ? 
        <HiMoon/> 
        :
        <HiSun/>
    }
    </p>
   </button>
    
  </div>
</div>
    );
};

export default Navbar;