import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({cource}) => {
    return (
        <div>
           <div className=" md:max-w-xs rounded-md border">
	<img src={cource.picture} alt="" className="object-cover object-center h-60 w-full rounded-t-md" />
	<div className="flex flex-col justify-between px-5 py-2 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl  font-semibold tracking-wide">{cource.name}</h2>
			<p className="dark:text-gray-100 text-sm">{cource.details.slice(0,50)}</p>
		</div>
		<Link to={`/details/${cource.id}`} type="button" className="flex btn btn-warning items-center justify-center w-full font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Details</Link>
	</div>
</div>
        </div>
    );
};

export default SingleCourse;