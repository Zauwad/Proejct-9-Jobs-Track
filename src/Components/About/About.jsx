import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='p-30 space-y-7'>

            <Helmet>
                {/* window.location.reload() */}
                <title>Job Track | About</title>
            </Helmet>

            <h1 className='text-4xl'>About us</h1>

            <p className=''>
                Job Track is an innovative and user-friendly website designed to help job seekers explore a wide variety of job opportunities across multiple companies. The platform serves as a centralized hub where users can easily find job listings from different companies, review the job criteria, and determine whether they meet the qualifications before applying.

            </p>
        </div>
    );
};

export default About;