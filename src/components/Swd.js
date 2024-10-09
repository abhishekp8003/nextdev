import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const StaticWebDevelopment = () => {
    useDocTitle('NextDev Labs - Static Web Development');

    const staticWebDevDetails = {
        title: 'Static Web Development',
        introduction: 'We craft static websites that are lightweight and fast-loading, ideal for showcasing your content with a straightforward design. Perfect for portfolios, landing pages, and small business sites.',
        keyFeatures: 'Key Features:',
        keyFeaturesPoints: [
            'Responsive design for optimal viewing on all devices.',
            'SEO-friendly structure to enhance visibility.',
            'Fast loading times to improve user experience.',
        ],
        serviceDetails: 'Service Details:',
        serviceDetailsContent: 'Our static web development service focuses on creating efficient and visually appealing websites that do not require server-side processing. This approach ensures quick load times and easy maintenance, making it perfect for businesses seeking a reliable online presence.',
    };

    return (
        <>
            <NavBar />
            <div className="static-web-dev-container flex justify-center items-center bg-gray-100 py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <h1 className="static-web-dev-title text-5xl text-blue-900 font-extrabold text-center mb-8">{staticWebDevDetails.title}</h1>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Introduction</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{staticWebDevDetails.introduction}</p>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{staticWebDevDetails.keyFeatures}</h3>
                    <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                        {staticWebDevDetails.keyFeaturesPoints.map((point, index) => (
                            <li key={index} className="mb-2">{point}</li>
                        ))}
                    </ul>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{staticWebDevDetails.serviceDetails}</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{staticWebDevDetails.serviceDetailsContent}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default StaticWebDevelopment;
