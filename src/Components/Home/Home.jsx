import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Company_thumbnail from '../../Company_thumbnail/Company_thumbnail';
import { Helmet } from 'react-helmet-async';
import CountUp, { useCountUp } from 'react-countup';
import Review from '../Review/Review';
import { useNavigate } from 'react-router';

const Home = () => {
    const { jsonFile } = use(AuthContext);
    console.log(jsonFile);

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    const navigate = useNavigate()

    return (
        <div className=''>
            <Helmet>
                <title>Job Track | Home</title>
            </Helmet>

            {/* Hero Section */}
            <div className="Hero-Section items-center flex flex-col-reverse md:flex-row justify-between gap-10 mt-20 p-6 md:p-10 mx-4 md:mx-20">
                <div className="left-side w-full md:w-[60%] space-y-10">
                    <h1 className='text-4xl'>Find Your Future, Today with JobTrack</h1>
                    <div>
                        <p className='text-1xl'>Explore thousands of job opportunities from top companies, all in one place. <br />Whether you're starting your career or looking for your next big move, JobTrack connects you with the roles that match your skills and ambitions.</p>
                        <button onClick={()=> {
                            navigate('/login')
                        }} className="btn btn-primary mt-4 bg-indigo-600 text-white">Get Started</button>
                    </div>
                </div>

                <div className="right-side w-full md:w-[40%]">
                    <img className='rounded-4xl w-full' src="/assets/resume-genius-unsplash.jpg" alt="" />
                </div>
            </div>



            {/* How It Works */}
            <div className="how-it-works mt-20 p-6 md:p-10 mx-4 md:mx-20">
                <h1 className='text-center font-bold text-4xl text-gray-800'>How it Works</h1>

                <div className="flex flex-col items-center py-12 bg-white">
                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 w-full max-w-6xl px-4">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-red-100 p-4 rounded-full">
                                <i className="text-red-500 text-2xl">👤➕</i>
                            </div>
                            <h3 className="font-bold mt-4 text-lg">Create Account</h3>
                            <p className="text-gray-500 text-sm mt-2 max-w-xs">Sign up in seconds and get started with your job search right away.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-orange-100 p-4 rounded-full">
                                <i className="text-orange-500 text-2xl">📄</i>
                            </div>
                            <h3 className="font-bold mt-4 text-lg">CV / Resume</h3>
                            <p className="text-gray-500 text-sm mt-2 max-w-xs">Upload or build your professional resume to get noticed.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-blue-100 p-4 rounded-full">
                                <i className="text-blue-500 text-2xl">💼</i>
                            </div>
                            <h3 className="font-bold mt-4 text-lg">Quick Jobs</h3>
                            <p className="text-gray-500 text-sm mt-2 max-w-xs">Browse job listings from top companies with ease.</p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-purple-100 p-4 rounded-full">
                                <i className="text-purple-500 text-2xl">✔️</i>
                            </div>
                            <h3 className="font-bold mt-4 text-lg">Apply Them</h3>
                            <p className="text-gray-500 text-sm mt-2 max-w-xs">Submit your application directly and track your progress.</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* Featured Companies */}
            <div className="companies-section mb-20 py-20 bg-blue-50 ">
                <h1 className='text-center text-4xl font-bold mb-10'>Featured Companies</h1>

                <div className="grid-stuff grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-20 pt-10 gap-6 md:gap-10">
                    {
                        jsonFile && jsonFile.map(company => <Company_thumbnail company={company}></Company_thumbnail>)
                    }
                </div>
            </div>

            {/* Review Section */}
            <div className="review bg-blue-50 p-6 md:p-20 relative mb-32 bottom-30 ">
                <h1 className='font-medium text-4xl text-center mb-10'>Review of The Users</h1>
                <Review></Review>

                <div className="absolute left-1/2 -translate-x-1/2 mt-10 flex flex-wrap gap-6 justify-center p-6 md:p-10 rounded-4xl bg-blue-400 shadow-lg shadow-blue-500/50 w-[90%] max-w-5xl">
                    {/* Jobs Added */}
                    <div className='bg-white p-6 md:p-10 rounded-4xl text-center'>
                        <img className='size-10 mx-auto' src="/assets/job_3850285.png" alt="" />
                        <CountUp end={199} className='font-bold text-3xl' enableScrollSpy /> <span className='font-bold text-3xl'>+</span>
                        <p>Jobs Added</p>
                    </div>

                    {/* Companies */}
                    <div className='bg-white p-6 md:p-10 rounded-4xl text-center'>
                        <img className='size-10 mx-auto' src="/assets/office-building_4300059.png" alt="" />
                        <CountUp end={467} className='font-bold text-3xl' enableScrollSpy /> <span className='font-bold text-3xl'>+</span>
                        <p>Companies</p>
                    </div>

                    {/* Resume */}
                    <div className='bg-white p-6 md:p-10 rounded-4xl text-center'>
                        <img className='size-10 mx-auto' src="/assets/resume_2179292.png" alt="" />
                        <CountUp end={1900} className='font-bold text-3xl' enableScrollSpy /> <span className='font-bold text-3xl'>+</span>
                        <p>Resume</p>
                    </div>

                    {/* Members */}
                    <div className='bg-white p-6 md:p-10 rounded-4xl text-center'>
                        <img className='size-10 mx-auto' src="/assets/teamwork_1256650.png" alt="" />
                        <CountUp end={300} className='font-bold text-3xl' enableScrollSpy /> <span className='font-bold text-3xl'>+</span>
                        <p>Members</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
