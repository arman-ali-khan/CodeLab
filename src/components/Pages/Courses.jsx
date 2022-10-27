import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from './Sidebar';
import SingleCourse from './SingleCourse';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <div className='my-12'><h2 className='text-3xl text-center uppercase font-semibold'>Our Courses</h2></div>
            <div className='md:flex gap-3 md:flex-row flex-col mx-auto w-full justify-center'>
                <div className='w-1/4'>
                    <Sidebar/>
                </div>
            <div className='w-3/4'>
            <div className='grid mx-12 md:mx-auto grid-cols-1 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 '>
                {
                    courses.map(cource=> <SingleCourse key={cource.index} cource={cource}/>)
                }
            </div>
            </div>
            </div>
        </div>
    );
};

export default Courses;