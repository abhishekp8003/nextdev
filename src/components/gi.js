import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const GeneralITConsultations = () => {
    useDocTitle('NextDev Labs - General IT Consultations');

    const consultationDetails = {
        title: 'General IT Consultations',
        introduction: 'Our IT consultation services offer expert advice on optimizing your technology solutions. Whether you need help with system integration, technology strategy, or troubleshooting, we provide valuable insights to enhance your IT operations.',
        keyFeatures: 'Key Features:',
        keyFeaturesPoints: [
            'Technology strategy development tailored to your business needs.',
            'Risk assessment and mitigation strategies.',
            'System integration services to streamline operations.',
        ],
        serviceDetails: 'Service Details:',
        serviceDetailsContent: 'Our general IT consultation services focus on providing strategic advice that helps you leverage technology to achieve your business goals. We analyze your current systems, identify areas for improvement, and develop a plan that aligns with your objectives.',
    };

    return (
        <>
            <NavBar />
            <div className="consultation-container flex justify-center items-center bg-gray-100 py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <h1 className="consultation-title text-5xl text-blue-900 font-extrabold text-center mb-8">{consultationDetails.title}</h1>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Introduction</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{consultationDetails.introduction}</p>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{consultationDetails.keyFeatures}</h3>
                    <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                        {consultationDetails.keyFeaturesPoints.map((point, index) => (
                            <li key={index} className="mb-2">{point}</li>
                        ))}
                    </ul>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{consultationDetails.serviceDetails}</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{consultationDetails.serviceDetailsContent}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GeneralITConsultations;
