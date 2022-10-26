import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourceList from './SingleCourceList';
import SingleCourse from './SingleCourse';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <div className='my-12'><h2 className='text-3xl text-center uppercase font-semibold'>Our Courses</h2></div>
            <div className='md:flex gap-3 md:flex-row flex-col mx-auto w-full justify-center'>
            <div className='sm:w-1/4'>
            <li className="menu-title w-full flex justify-center list-none shadow-sm border my-3 p-3 rounded-lg">
                        <span>Cources</span>
            </li>
            <ul className="menu mx-auto bg-base-100 text-center sm:w-56 p-2 rounded-box">
                {
                    courses.map(cource=> <SingleCourceList key={cource.index} cource={cource}/>)
                }
                 <li className='my-2'><Link className='text-center btn-success container mx-auto flex justify-center' to='/checkout'>Get Premium Access</Link></li>
                </ul>
            </div>
            <div className='md:3/4'>
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