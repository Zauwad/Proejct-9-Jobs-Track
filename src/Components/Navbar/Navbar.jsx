import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client"



const Navbar = () => {

    const { LogOut, user } = use(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        LogOut();
        // window.location.reload();
    };

    return (
        <div className="navbar flex flex-col md:flex-row items-center justify-between gap-4 p-2 px-6 bg-linear-to-r from-cyan-300 to-blue-300 shadow-lg">
            <div className='flex items-center gap-2'>
                {/* <img className='rounded-3xl size-16' src="/assets/ChatGPT Image May 15, 2025, 04_46_35 AM.png" alt="Logo" /> */}
                <p className='font-bold bg-linear-to-r from-cyan-300 to-blue-300 rounded-xl text-3xl'>"Job Track"</p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">

                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}  >
                    <NavLink to='/home'>
                        <button className='bg-indigo-600 shadow-lg shadow-indigo-500/50 p-3 rounded-xl text-white'>
                            Home
                        </button>
                    </NavLink>
                </motion.div>

                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}  >
                    <NavLink to='/About'>
                        <button className='bg-indigo-600 shadow-lg shadow-indigo-500/50 p-3 rounded-xl text-white'>
                            About
                        </button>
                    </NavLink>
                </motion.div>
                {!user && (
                    <div className='flex flex-wrap gap-3'>
                        <motion.div whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}  >
                            <NavLink to='/login'>
                                <button className='bg-indigo-600 shadow-lg shadow-indigo-500/50 p-3 rounded-xl text-white'>
                                    Log In
                                </button>
                            </NavLink>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}  >
                            <NavLink to='/signup'>
                                <button className='bg-indigo-600 shadow-lg shadow-indigo-500/50 p-3 rounded-xl text-white'>
                                    Sign Up
                                </button>
                            </NavLink>
                        </motion.div>
                    </div>
                )}

                {user && (
                    <div className='flex flex-wrap items-center gap-3'>
                        <motion.div whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}  >
                            <button
                                onClick={() => {
                                    handleLogOut();
                                    navigate('/home');
                                    window.location.reload();
                                }}
                                className='bg-indigo-600 shadow-lg shadow-indigo-500/50 p-3 rounded-xl text-white'
                            >
                                Log Out
                            </button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}  >
                            <NavLink to='/myprofile'>
                                <img
                                    className='rounded-full size-12 bg-indigo-600 shadow-lg shadow-indigo-500/50'
                                    src={user.photoURL}
                                    alt="User"
                                />
                            </NavLink>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
