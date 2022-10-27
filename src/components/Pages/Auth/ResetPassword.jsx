import React, { useContext, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../Context/AuthContext';


const ResetPassword = () => {
    const {passwordReset,dark} = useContext(UserContext)
    const [error, setError] = useState('')

    const notify = () => toast.success("Reset password send your mail");

    const handleResetPass = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
      console.log(email);
      passwordReset(email)
      .then(()=>{
        setError('')
        notify()
      })
      .catch(error=>{
        console.error('Error:', error);
        setError(error.message)
      })
       
    }
    return (
        <div className={`${dark? 'bg-base-100':'bg-[#1e2b47] text-white'} py-5`}>
              <ToastContainer />
           <h4 className='text-4xl text-center py-5'> Reset Password </h4>
           <div className='flex justify-center w-full'>
           <form onSubmit={handleResetPass} className="space-y-1 text-gray-800">
	<label for="Enter Email" className="hidden">Enter Email</label>
	<div className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="button" title="email" className="p-1 focus:outline-none focus:ring">
			<HiOutlineMail/>
			</button>
		</span>
		<input type="email" name="email" placeholder="Enter Email" className="w-64 h-12 border border-warning py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-violet-600" />
        
	</div>
    <p className='text-center text-error'>{error}</p>
    <div className='flex justify-center'><button className="btn btn-warning">Reset</button></div>
</form>
           </div>
        </div>
    );
};

export default ResetPassword;