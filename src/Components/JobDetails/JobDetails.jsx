import React from 'react';
import { Navigate, NavLink } from 'react-router';

const JobDetails = ({ job }) => {

    if (!job) {
        return <div>Loading...</div>;
    }

    const { title, description, jobType, location, salary, requirements, website } = job;

    return (
        <div className='mx-4 md:mx-40 bg-gray-200 rounded-4xl p-6 md:p-10 space-y-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-lg shadow-gray-500/50'>
            <div className='flex-1 space-y-2'>
                <h1 className='text-2xl md:text-3xl'>{title}</h1>
                <p>Job Type: {jobType}</p>
                <p>Salary: {salary}</p>
            </div>

            <button
                className="btn w-full md:w-[20%] btn-primary bg-indigo-500 shadow-lg shadow-indigo-500/50"
                onClick={() => document.getElementById('my_modal_3').showModal()}
            >
                Details
            </button>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-md md:max-w-2xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Job Details</h3>
                    <p className="mt-2">{description}</p>
                    <p className="mt-2">Location: {location}</p>
                    <div className='text-base md:text-xl mt-6'>
                        <span className='text-red-700 font-semibold'>Requirements:</span>
                        {
                            requirements?.map((requirement, index) => (
                                <p key={index}>{requirement}</p>
                            ))
                        }
                    </div>
                    <button className='btn btn-primary bg-cyan-500 mt-6 shadow-xl shadow-cyan-500/50'>
                        <a href={website} target="_blank" rel="noopener noreferrer">Apply</a>
                    </button>
                </div>
            </dialog>
        </div>
    );
};

export default JobDetails;
