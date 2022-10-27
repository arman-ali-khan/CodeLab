import Lottie from "lottie-react";
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import checkmark from "../../assets/checkmark.json";
import { UserContext } from "../../Context/AuthContext";

const Checkout = () => {
    const courseData = useLoaderData();
    const {dark} = useContext(UserContext)

    return (
        <div className={`${dark? 'bg-base-100':'bg-[#1e2b47] text-white'} py-8`}>
           <div className="flex justify-center">
           <Lottie className="w-64" animationData={checkmark} loop={false} />
           </div>
            <h3 className="text-center text-4xl my-3">{courseData.name} Premium Access Successful</h3>
        </div>
    );
};

export default Checkout;