import Lottie from "lottie-react";
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import checkmark from "../../assets/checkmark.json";

const Checkout = () => {
    const courseData = useLoaderData();

    return (
        <div>
           <div className="flex justify-center">
           <Lottie className="w-64" animationData={checkmark} loop={false} />
           </div>
            <h3 className="text-center text-4xl my-3">{courseData.name} Premium Access Successful</h3>
        </div>
    );
};

export default Checkout;