import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from "react-icons/fa";

const Review = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mb-30 px-4'>
            <p className='bg-white p-6 md:p-10 rounded-4xl'>
                ⭐⭐⭐⭐⭐
                <br />
                <br />
                <span className='text-gray-700'>
                    "Incredible platform for fresh graduates!"
                    "I landed my first internship within a week of signing up. The interface is clean, and the job alerts are super helpful. Highly recommend to anyone just starting their career."
                    — Nazia H., Computer Science Graduate
                </span>
                <br /><br />
                <span className='font-bold'>Rafiul A.</span>
                <br />
                <span>Frontend Developer</span>
            </p>

            <p className='bg-white p-6 md:p-10 rounded-4xl'>
                ⭐⭐⭐⭐☆
                <br />
                <br />
                <span className='text-gray-700'>
                    "Found a remote job in days!"
                    "I’ve used many job boards, but this one stood out. I liked how the listings were well-matched to my skills, and applying was straightforward. A dark mode would be a nice bonus."
                </span>
                <br /><br />
                <span className='font-bold'>Rafiul A.</span>
                <br />
                <span>Frontend Developer</span>
            </p>

            <p className='bg-white p-6 md:p-10 rounded-4xl'>
                ⭐⭐⭐⭐⭐
                <br />
                <br />
                <span className='text-gray-700'>
                    "Saved me so much time!"
                    "Instead of scrolling through dozens of irrelevant jobs, I got curated options that actually fit my profile. Got hired as a content manager within two weeks."
                </span>
                <br /><br />
                <span className='font-bold'>Meherin S.</span>
                <br />
                <span>Digital Marketer</span>
            </p>
        </div>
    );
};

export default Review;
