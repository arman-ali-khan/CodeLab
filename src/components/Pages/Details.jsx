import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const courceData = useLoaderData();
    console.log(courceData);
    const {name, picture, details} = courceData;
    return (
        <div className='md:flex justify-center mx-auto w-full'>
            <div className='w-full md:w-1/4 flex h-screen items-center'>
            <ul className="menu mx-auto mt-4 bg-base-100 text-center sm:w-56 p-2 rounded-box">
  <li className='w-full flex justify-center'><Link to='/checkout' className='text-center btn btn-success'>Get Premium Access</Link></li>
</ul>
            </div>
            <div className="w-3/4 flex flex-col p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={picture} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div className='flex items-center'>
				<h4 className="font-bold">{name}</h4>
				
			</div>
		</div>
		
	</div>
	<div className="p-4 space-y-2 dark:text-gray-400">
		<p>{details}</p>
	</div>
</div>
        </div>
    );
};

export default Details;