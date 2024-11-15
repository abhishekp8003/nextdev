import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import abhishekImage from '../images/abhi.jpeg';
import mayurImage from '../images/clients/mayur.jpeg';
import missionImage from '../images/targeting.png';
import aimImage from '../images/aim.png';
import teamImage1 from '../images/team1.jpg';
import teamImage2 from '../images/team2.jpg';

const AboutUs = () => {
    useDocTitle('NextDev - About Us');

    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <div className="w-full bg-white p-8 md:px-12 lg:px-20 rounded-2xl shadow-2xl">
                        <div className="flex justify-center">
                            <h1 className="font-bold text-center text-blue-900 uppercase text-4xl">About Us</h1>
                        </div>

                        {/* CEO & Co-Founder Section */}
                        <div className="flex flex-col lg:flex-row items-center justify-between mt-14">
                            <img
                                src={abhishekImage}
                                alt="Abhishek Patil"
                                className="w-40 h-40 rounded-full shadow-lg object-cover"
                            />
                            <div className="lg:ml-8 text-center lg:text-left">
                                <h2 className="text-2xl font-bold text-blue-900">Abhishek Patil</h2>
                                <h3 className="text-lg font-semibold text-gray-700">Founder & CEO</h3>
                                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                                    Abhishek Patil is the Co-Founder and CEO of Next Dev. With 5+ years of experience at Cognizant, Abhishek brings a wealth of knowledge in technology and a visionary approach to leadership.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center justify-between mt-12">
                            <img
                                src={mayurImage}
                                alt="Mayur Patil"
                                className="w-40 h-40 rounded-full shadow-lg object-cover"
                            />
                            <div className="lg:ml-8 text-center lg:text-left">
                                <h2 className="text-2xl font-bold text-blue-900">Mayur Patil</h2>
                                <h3 className="text-lg font-semibold text-gray-700">Co-Founder</h3>
                                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                                    Mayur Patil, Co-Founder of Next Dev, is a graduate of NIT Nagpur. His strong technical background and strategic insights are crucial in guiding the company’s growth.
                                </p>
                            </div>
                        </div>

                        {/* Our Aim Section */}
                        <div className="flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg p-6 shadow-lg mt-12">
                            <img
                                src={aimImage}
                                alt="Our Aim"
                                className="w-40 h-40 rounded-full shadow-lg object-cover"
                            />
                            <div className="lg:ml-8 text-center lg:text-left">
                                <h2 className="text-2xl font-bold text-blue-900">Our Aim</h2>
                                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                                    At Next Dev, our aim is to provide end-to-end tailored solutions for businesses seeking digital transformation. We focus on offering customized, scalable, and efficient services that help clients stay ahead of the curve.
                                </p>
                            </div>
                        </div>

                        {/* Our Mission Section */}
                        <div className="flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg p-6 shadow-lg mt-12">
                            <img
                                src={missionImage}
                                alt="Our Mission"
                                className="w-40 h-40 rounded-full shadow-lg object-cover"
                            />
                            <div className="lg:ml-8 text-center lg:text-left">
                                <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
                                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                                    Our mission is to deliver high-quality software solutions on time, with a commitment to excellence and building trust with our clients. We ensure every project is executed with precision and passion.
                                </p>
                            </div>
                        </div>

                        {/* Our Story Section */}
                        <div className="mt-12">
                            <div className="flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg p-6 shadow-lg">
                                <div className="flex flex-col items-center lg:items-start lg:mr-8">
                                    <img
                                        src={teamImage1}
                                        alt="Our Team 1"
                                        className="w-40 h-40 rounded-full shadow-lg object-cover mb-4"
                                    />
                                    <img
                                        src={teamImage2}
                                        alt="Our Team 2"
                                        className="w-40 h-40 rounded-full shadow-lg object-cover"
                                    />
                                </div>
                                
                                <div className="text-center lg:text-left w-full lg:w-2/3">
                                    <h2 className="text-2xl font-bold text-blue-900">Our Story</h2>
                                    <p className="mt-4 text-gray-800 text-lg leading-relaxed">
                                        Next Dev was born from a shared vision to transform how businesses leverage technology for growth and success. Founded by a group of passionate innovators, we started as a small team, dedicated to solving real-world challenges with smart, efficient solutions. Over the years, our journey has been marked by relentless hard work, collaboration, and a commitment to excellence. Today, we stand as a robust team, united by a common purpose: to empower businesses through technology, drive digital transformation, and make a meaningful impact on the industries we serve. Our story is one of growth, resilience, and a deep-rooted belief in the power of technology to change the world.
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
