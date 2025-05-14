import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../../Firebase.init';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {

    const emailRef = useRef()


    const handleForgetPassword = () => {
        // email ref e current name e ekta object thake okhn theke value property r value nilam
        console.log(emailRef)
        const email = emailRef.current.value

        // reseting error message

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password Reset Email Sent')
            })
    }

    return (
        <div>

            <Helmet>
                <title>
                    Job Track | Forget Password
                </title>
            </Helmet>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <div className="card-body space-y-5">
                        
                        <form onSubmit={handleForgetPassword} className='space-y-5'>
                            <label className="label">Email</label>
                            <input ref={emailRef} name='email' type="email" className="input" placeholder="Email" />
           
                            <input className='btn btn-primary' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;