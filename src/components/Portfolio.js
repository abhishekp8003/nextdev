import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Portfolio = () => {
    return (
        <>
            <div className="flex justify-center items-center my-4 py-4 min-h-screen" id='portfolio'>
                <div className="w-full max-w-screen-xl">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Solutions</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                    </div>

                    <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6 min-h-full text-center">
                                <div className="m-2">
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">1-Year Plan</h4>
                                    <p className="text-md font-medium leading-5 mb-4">
                                        <strong>₹1500 INR/month</strong>
                                    </p>
                                    <ul className="list-none">
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />Free Web Maintenance</li>
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />Free Domain</li>
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />Free SSL</li>
                                        <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" />Free SEO</li>
                                    </ul>
                                    <div className="flex justify-center my-4">
                                        <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                            Schedule Demo
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6 min-h-full text-center">
                                <div className="m-2">
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">2-Year Plan</h4>
                                    <p className="text-md font-medium leading-5 mb-4">
                                        <strong>₹1250 INR/month</strong>
                                    </p>
                                    <ul className="list-none">
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />All Features in 1-Year Plan</li>
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />Enhanced Support</li>
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />Priority Hosting</li>
                                        <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" />Advanced Analytics</li>
                                    </ul>
                                    <div className="flex justify-center my-4">
                                        <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                            Schedule Demo
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6 min-h-full text-center">
                                <div className="m-2">
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12 text-red-600">4-Year Plan <span className="bg-yellow-300 p-1 rounded-lg text-sm">Best Offer</span></h4>
                                    <p className="text-md font-medium leading-5 mb-4">
                                        <strong>₹1000 INR/month</strong>
                                    </p>
                                    <ul className="list-none">
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />All Features in 2-Year Plan</li>
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />Unlimited Support</li>
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />Custom Development</li>
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />Exclusive Updates</li>
                                        <li className="flex items-center"><FaCheckCircle className="text-red-600 mr-2 font-bold" />Limited Time Offer!</li>
                                    </ul>
                                    <div className="flex justify-center my-4">
                                        <Link to="/get-demo" className="text-white bg-red-600 hover:bg-red-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                            Schedule Demo
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6 min-h-full text-center">
                                <div className="m-2">
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Why Choose Us?</h4>
                                    <ul className="list-none">
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />We use cutting-edge technologies</li>
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />React.js, Node.js, and JavaScript frameworks</li>
                                        <li className="flex items-center mb-2"><FaCheckCircle className="text-green-600 mr-2" />Custom, scalable solutions</li>
                                        <li className="flex items-center"><FaCheckCircle className="text-red-600 mr-2 font-bold" />No WordPress or Plugin-based sites</li>
                                    </ul>
                                    <div className="flex justify-center my-4">
                                        <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                            Schedule Demo
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
