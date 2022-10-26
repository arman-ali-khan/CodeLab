import React from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import Sidebar from './Sidebar';



const Details = () => {
    const courceData = useLoaderData();
    const {name, picture, details} = courceData;

    const ref = React.createRef();

    return (
    <div className='md:flex justify-center mx-auto w-full'>
            <div className='w-full md:w-1/4 flex md:h-screen items-center'>
            <ul className="menu mx-auto mt-4 bg-base-100 text-center sm:w-56 p-2 rounded-box">
  <li className='w-full flex justify-center'>
      <Sidebar />
    
    <Link to='/checkout' className='text-center btn btn-success'>Get Premium Access</Link></li>
</ul>
            </div>
            <div className="md:w-3/4 flex flex-col p-6 mx-auto divide-y rounded-md border divide-gray-700">
	<div className="flex justify-between p-4">
		<div className="flex w-full space-x-4 ">
			<div>
				<img src={picture} alt="" className="object-cover w-24 h-24 rounded-full " />
			</div>
			<div className='flex items-center justify-between w-full'>
				<h4 className="font-bold">{name}</h4>
        <Pdf targetRef={ref} filename={`${name}.pdf`}>
        {({ toPdf }) => <button className='btn btn-info' onClick={toPdf}><HiOutlineDownload className='text-2xl text-white'/></button>}
      </Pdf>
      
     
			</div>
		</div>
		
	</div>
	<div ref={ref} className="p-4 space-y-2 dark:text-gray-400">
		<p id='capture'>{details}</p>
	</div>
</div>
        </div>
    );
};

export default Details;

