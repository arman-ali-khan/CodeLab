import React, { useContext } from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { UserContext } from '../../Context/AuthContext';



const Details = () => {
    const courseData = useLoaderData();
    const {dark} = useContext(UserContext)
    const {name, picture, details,id} = courseData;
  console.log(courseData);
    const ref = React.createRef();

    return (
    <div className={`${dark? 'bg-base-100':'bg-[#1e2b47] text-white'} md:flex justify-center mx-auto w-full py-6`}>
   
 
            <div className="md:w-3/4 flex flex-col p-6 mx-auto divide-y rounded-md border divide-gray-700">
	<div className="flex justify-between p-4">
		<div className="flex w-full space-x-4 ">
			<div>
			</div>
			<div className='flex items-center justify-between w-full'>
				<h4 className="font-bold">{name}</h4>
        <Pdf targetRef={ref} filename={`${name}.pdf`}>
        {({ toPdf }) => <button className='btn btn-info' onClick={toPdf}><HiOutlineDownload className='text-2xl text-white'/></button>}
      </Pdf>
      
     
			</div>
		</div>
		
	</div>
	<div className="p-4 space-y-2 dark:text-gray-400">
				<div className='w-full flex justify-center'>
        <img src={picture} alt="" className="object-cover w-4/12 h-auto rounded-full " />
        </div>
		<p ref={ref} id='capture'>{details}</p>
	</div>
   <div className='flex justify-center'><Link to={`/checkout/${id}`} className='text-center mt-5 w-64 btn btn-success'>Get Premium Access</Link></div>
</div>

        </div>
    );
};

export default Details;

