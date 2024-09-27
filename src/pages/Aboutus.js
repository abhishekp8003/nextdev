import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import abhishekImage from '../images/clients/abhishek.jpeg';
import mayurImage from '../images/clients/mayur.jpeg';
import missionImage from '../images/targeting.png'; // Add the appropriate mission image
import aimImage from '../images/aim.png'; // Add the appropriate aim image

const AboutUs = () => {
    useDocTitle('NextDev - About Us');

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <div className="w-full bg-white p-8 md:px-12 lg:px-20 rounded-2xl shadow-2xl">
                        <div className="flex justify-center">
                            <h1 className="font-bold text-center text-blue-900 uppercase text-4xl">About Us</h1>
                        </div>

                        {/* CEO & Co-Founder Section */}
                        <div className="mt-8">
                            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
                                <img
                                    src={abhishekImage}
                                    alt="Abhishek Patil"
                                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-xl object-cover"
                                />
                                <div className="mt-6 lg:mt-0 lg:ml-8 flex-1">
                                    <h2 className="text-3xl font-bold text-blue-900">Abhishek Patil</h2>
                                    <h3 className="text-xl font-semibold text-gray-700">Founder & CEO</h3>
                                    <p className="mt-4 text-gray-800 text-lg">
                                        Abhishek Patil is the Co-Founder and CEO of Next Dev. With 5+ years of experience at Cognizant, Abhishek brings a wealth of knowledge in technology and a visionary approach to leadership.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-between">
                                <img
                                    src={mayurImage}
                                    alt="Mayur Patil"
                                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-xl object-cover"
                                />
                                <div className="mt-6 lg:mt-0 lg:ml-8 flex-1">
                                    <h2 className="text-3xl font-bold text-blue-900">Mayur Patil</h2>
                                    <h3 className="text-xl font-semibold text-gray-700">Co-Founder</h3>
                                    <p className="mt-4 text-gray-800 text-lg">
                                        Mayur Patil, Co-Founder of Next Dev, is a graduate of NIT Nagpur. His strong technical background and strategic insights are crucial in guiding the company’s growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Aim Section */}
                        <div className="mt-12">
                            <div className="flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg p-6 shadow-lg">
                                <img
                                    src={aimImage}
                                    alt="Our Aim"
                                    className="w-24 h-24 lg:w-48 lg:h-48 rounded-lg object-cover"
                                />
                                <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
                                    <h2 className="text-2xl font-bold text-blue-900">Our Aim</h2>
                                    <p className="mt-2 text-gray-800">
                                        At Next Dev, our aim is to provide end-to-end tailored solutions for businesses seeking digital transformation. We focus on offering customized, scalable, and efficient services that help clients stay ahead of the curve.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Mission Section */}
                        <div className="mt-12">
                            <div className="flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg p-6 shadow-lg">
                                <img
                                    src={missionImage}
                                    alt="Our Mission"
                                    className="w-24 h-24 lg:w-48 lg:h-48 rounded-lg object-cover"
                                />
                                <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
                                    <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
                                    <p className="mt-2 text-gray-800">
                                        Our mission is to deliver high-quality software solutions on time, with a commitment to excellence and building trust with our clients. We ensure every project is executed with precision and passion.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
