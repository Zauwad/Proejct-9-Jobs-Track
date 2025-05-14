import React from 'react';
import { NavLink } from 'react-router';
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client"

const Company_thumbnail = ({ company }) => {

    // console.log(company)
    const { logo, name, id } = company

    return (
        <NavLink to={`/home/${id}`} className='text-center rounded-3xl space-y-5'>

            {/* <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={box}
            /> */}

            <motion.div whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                 className='max-w-sm mx-auto p-5 bg-linear-to-r from-cyan-500 to-blue-300 rounded-4xl' >    

                <img className='max-w-sm mx-auto ' src={logo} alt="" />
                <h3 className='font-bold text-2xl '>{name}</h3>

            </motion.div>

            {/* <img className='max-w-sm mx-auto w-[30%]' src={logo} alt="" />
            <h3 className='font-bold text-2xl text-gray-600'>{name}</h3> */}
        </NavLink>
    );
};

export default Company_thumbnail;