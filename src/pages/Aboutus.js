import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import abhishekImage from '../images/clients/abhishek.jpeg';
import mayurImage from '../images/clients/mayur.jpeg';

const AboutUs = () => {
    useDocTitle('MLD | Molad e Konsult - About Us')

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
                        <div className="mt-8">
                            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
                                <img
                                    src={abhishekImage}
                                    alt="Abhishek Patil"
                                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-xl"
                                />
                                <div className="mt-6 lg:mt-0 lg:ml-8 flex-1">
                                    <h2 className="text-3xl font-bold text-blue-900">Abhishek Patil</h2>
                                    <h3 className="text-xl font-semibold text-gray-700">Founder & CEO</h3>
                                    <p className="mt-4 text-gray-800 text-lg">
                                    Abhishek Patil is the Co-Founder and CEO of Next Dev. With 2.5 years of experience at Cognizant, Abhishek brings a wealth of knowledge in technology and a visionary approach to leadership. His commitment to innovation and excellence drives Next Dev's mission to deliver cutting-edge solutions and push the boundaries of what's possible.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-between">
                                <img
                                    src={mayurImage}
                                    alt="Mayur Patil"
                                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-xl"
                                />
                                <div className="mt-6 lg:mt-0 lg:ml-8 flex-1">
                                    <h2 className="text-3xl font-bold text-blue-900">Mayur Patil</h2>
                                    <h3 className="text-xl font-semibold text-gray-700">Co-Founder</h3>
                                    <p className="mt-4 text-gray-800 text-lg">
                                    Mayur Patil, Co-Founder of Next Dev, is a graduate of NIT Nagpur. His strong technical background and strategic insights are crucial in guiding the company's growth and ensuring it stays at the forefront of the industry.
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
