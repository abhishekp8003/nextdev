import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const DynamicWebDevelopment = () => {
    useDocTitle('NextDev Labs - Dynamic Web Development');

    const dynamicWebDevelopmentDetails = {
        title: 'Dynamic Web Development',
        introduction: 'Our dynamic web development services create interactive and engaging websites that offer real-time updates and user-driven content. Ideal for e-commerce sites, social networks, and complex applications.',
        keyFeatures: 'Key Features:',
        keyFeaturesPoints: [
            'Database integration for dynamic content management.',
            'User authentication and security features.',
            'Real-time updates using modern frameworks.',
        ],
        serviceDetails: 'Service Details:',
        serviceDetailsContent: 'Our dynamic web development solutions leverage modern technologies to create websites that respond to user interactions. This service includes features such as user authentication, database management, and real-time content updates to provide a seamless user experience.',
    };

    return (
        <>
            <NavBar />
            <div className="dynamic-web-dev-container flex justify-center items-center bg-gray-100 py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <h1 className="dynamic-web-dev-title text-5xl text-blue-900 font-extrabold text-center mb-8">{dynamicWebDevelopmentDetails.title}</h1>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Introduction</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{dynamicWebDevelopmentDetails.introduction}</p>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{dynamicWebDevelopmentDetails.keyFeatures}</h3>
                    <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                        {dynamicWebDevelopmentDetails.keyFeaturesPoints.map((point, index) => (
                            <li key={index} className="mb-2">{point}</li>
                        ))}
                    </ul>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{dynamicWebDevelopmentDetails.serviceDetails}</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{dynamicWebDevelopmentDetails.serviceDetailsContent}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DynamicWebDevelopment;
