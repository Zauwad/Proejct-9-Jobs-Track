import { updateProfile } from 'firebase/auth';
import React from 'react';
import { auth } from '../../Firebase.init';

const UpdateProfile = () => {

    const handleRegister = e => {
        // page jate load na mare tai dilam
        e.preventDefault()
        console.log(e)


        const photo = e.target.photo.value
        const name = e.target.name.value

        // updating user details
        const profile = {
            displayName: name, photoURL: photo
        }
        updateProfile(auth.currentUser, profile)
            .then(() => {
                console.log('profile Updated')
            })

    }


    // hero bg-base-200 min-h-screen
    // hero-content flex-col lg:flex-row-reverse
    //hero bg-base-200 min-h-screen

    return (
        <div className='hero bg-base-200 '>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
                    <form onSubmit={handleRegister} className='space-y-5 p-10'>

                        <p className='text-5xl font-bold'>Update Your Profile</p>
                        {/* input filed */}


                        {/* name and photo url */}
                        <label className="input validator join-item">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>

                            {/* name dilam input e pore value pawar jnno */}
                            <input name='name' type="text" placeholder="Your Name" required />
                        </label>

                        {/* email field */}
                        <label className="input validator join-item">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>

                            {/* name dilam input e pore value pawar jnno */}
                            <input name='photo' type="text" placeholder="Photo Url" required />
                        </label>


                        <br />



                        {/* submit button */}
                        <input className='btn btn-primary' type="submit" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default UpdateProfile;