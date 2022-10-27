import React, { useContext } from 'react';
import { UserContext } from '../../Context/AuthContext';

const FAQ = () => {
	const {dark} = useContext(UserContext)
    return (
        <div>
           <section className={`${dark? 'bg-base-100':'bg-[#1e2b47] text-white'}`}>
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl my-4">Frequently Asked Questions</h2>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">How many trainers are there?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">There are more than 22 trainers’ sessions available in our course </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">How many topics does the Upskill library have?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">It has more than 34+ live video sessions from software management, data analytics, coding, digital marketing, fund raising, tech business, e-commerce related modules and versatile skill development sessions and many more. After 2 months new content will be added as per the demand for free. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">How will I benefit from this service?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">At times when potential users cannot attend the online live sessions due to work commitments; Upskill Library offers easy online access to material to learn according to their availability. The video library will ensure the users that they don't miss anything important; plus, being able to watch the videos, transcribe workshops to review on-screen or organize collection of notes is essential to better learning outcomes. We understand that users prefer to learn in different ways and at different paces, giving them the flexibility and control to view the videos in their own time is an important feature for Upskill Video Library. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default FAQ;