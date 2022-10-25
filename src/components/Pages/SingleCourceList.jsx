import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourceList = ({cource}) => {
    return (
        <div>
          

  <li className='my-2'><Link className='text-center container mx-auto flex justify-center' to={`/details/${cource.id}`}>{cource.name}</Link></li>

        </div>
    );
};

export default SingleCourceList;