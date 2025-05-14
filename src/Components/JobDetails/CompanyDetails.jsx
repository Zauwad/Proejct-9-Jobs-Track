import React, { use } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import JobDetails from './JobDetails';
import { Helmet } from 'react-helmet-async';

const CompanyDetails = () => {

    const { userId } = useParams();

    const { jsonFile, user } = use(AuthContext);

    const specificCompany = jsonFile && jsonFile.filter(company => company.id === userId);

    const { industry, location, logo, name, jobs } = specificCompany ? specificCompany[0] : {};

    return (
        <div>
            <Helmet>
                <title>Job Track | {name}</title>
            </Helmet>

            <div className='flex flex-col md:flex-row mx-5 md:mx-20 p-5 md:p-20 gap-10 items-center text-center md:text-left'>
                <img className='w-[50%] md:w-[20%] rounded-3xl shadow-xl/30' src={logo} alt="" />
                <div>
                    <h1 className='font-bold text-3xl md:text-4xl'>{name}</h1>
                    <h3 className='text-xl md:text-2xl'>Location: {location}</h3>
                    <h3 className='text-xl md:text-2xl'>Industry: {industry}</h3>
                </div>
            </div>

            <div className="details-part mb-20 space-y-10 px-4 md:px-20">
                {
                    jobs?.map((job, index) => (
                        <JobDetails key={index} job={job} />
                    ))
                }
            </div>
        </div>
    );
};

export default CompanyDetails;
