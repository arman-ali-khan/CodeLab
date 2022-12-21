import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';
import Sidebar from './Sidebar';
import SingleCourse from './SingleCourse';
import Spinner from './Spinner';

const Courses = () => {
    const [courses,setCourses] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://assignment-server-for-vercel.vercel.app/courses')
        .then(res=>res.json())
        .then(data =>{ 
            setCourses(data)
            setLoading(false)
        })
    },[])

    const {dark} = useContext(UserContext)
    return (
       <>
        {
            loading ? <Spinner />
            :
            <div className={`${dark? 'bg-base-100':'bg-[#1e2b47] text-white py-4'}`}>
            <div><h2 className='text-3xl py-4 text-center uppercase font-semibold'>Our Courses</h2></div>
            <div className='md:flex gap-3 md:flex-row flex-col mx-auto w-full justify-center'>
                <div className='md:w-1/4'>
                    <Sidebar/>
                </div>
            <div className='md:w-3/4'>
            <div className='grid mx-12 md:mx-auto grid-cols-1 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 '>
                {
                    courses.map(cource=> <SingleCourse key={cource.index} cource={cource}/>)
                }
            </div>
            </div>
            </div>
        </div>
        }
       </>
    );
};

export default Courses;