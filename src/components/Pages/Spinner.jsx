import React from 'react';

const Spinner = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center absolute top-0 bg-white'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-rose-600"></div>
        </div>
    );
};

export default Spinner;