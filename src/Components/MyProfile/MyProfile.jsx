import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router';

const MyProfile = () => {

    const { user } = use(AuthContext)
    console.log('user ye hain', user)

    const navigate = useNavigate()



    return (
        <div className='flex gap-10 items-center mx-auto p-20 '>
            {
                user && <img className='w-[20%] rounded-4xl  bg-indigo-500 shadow-lg shadow-gray-500/50 ...' src={user.photoURL} alt="" />
            }

            {
                user && <div >
                    <h1 className='font-bold text-4xl'>User Information: </h1>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                </div>
            }

            <button onClick={() => {
                navigate('/updateProfile')
            }} className='btn btn-primary'>
                Update Profile
            </button>

        </div>
    );
};

export default MyProfile;