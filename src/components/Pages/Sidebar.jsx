import React, { useEffect, useState } from 'react';
import SingleCourceList from './SingleCourceList';

const Sidebar = () => {

    const [courses, setCourses] = useState([])

    useEffect(()=>{
    fetch('https://assignment-server-for-vercel.vercel.app/courses')
    .then(res=>res.json())
    .then(data=> setCourses(data) )
    },[])


    console.log(courses);
    return ( <p className="menu w-full mx-auto bg-base-100 text-center sm:w-full p-2 rounded-box">
        <li className="menu-title">
    <span>Courses</span>
  </li>
                {
                    courses.map(cource=> <SingleCourceList key={cource.index} cource={cource}/>)
                }
                </p> );
};

export default Sidebar;