import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthContext';
import SingleCourceList from './SingleCourceList';

const Sidebar = () => {

    const [courses, setCourses] = useState([])
    const {dark} = useContext(UserContext)
    useEffect(()=>{
    fetch('https://assignment-server-for-vercel.vercel.app/courses')
    .then(res=>res.json())
    .then(data=> setCourses(data) )
    },[])


    console.log(courses);
    return ( <p className={`${dark? 'bg-base-100':'bg-[#1e2b47] text-white'} menu w-full mx-auto bg-base-100 text-center sm:w-full p-2 rounded-box`}>
        <li className="menu-title">
    <span className='!text-gray-400'>Courses</span>
  </li>
                {
                    courses.map(cource=> <SingleCourceList key={cource.index} cource={cource}/>)
                }
                </p> );
};

export default Sidebar;