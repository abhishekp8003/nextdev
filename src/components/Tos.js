import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const TermsOfService = () => {
    useDocTitle('NextDev Labs - Terms of Service');

    const termsOfService = {
        id: 1,
        title: 'NextDev Labs Terms of Service',
        date: 'Effective Date: August 26, 2024',
        introduction: 'By using NextDev Labs’ services, you agree to abide by the terms and conditions outlined in this document. These terms are designed to protect both the customer and NextDev Labs and ensure a mutually beneficial professional relationship.',
        generalTerms: 'General Terms:',
        generalTermsPoints: [
            'All services provided are subject to the terms and conditions outlined here.',
            'You agree to provide accurate, current, and complete information when engaging our services.',
            'Any violation of these terms may result in the termination of services without notice.',
            'NextDev Labs reserves the right to modify the terms at any time. Clients will be notified of significant changes.'
        ],
        responsibilities: 'Client Responsibilities:',
        responsibilitiesPoints: [
            'Provide necessary materials and information to enable timely project delivery.',
            'Ensure all communications are clear and prompt to avoid delays.',
            'Adhere to the project timelines and payment schedules as outlined in the service agreement.'
        ],
        liability: 'Limitations of Liability:',
        liabilityPoints: [
            'NextDev Labs will not be held liable for any damages or losses that arise from the use of our services.',
            'In no event shall the company’s liability exceed the total amount paid by the client for the specific service in question.'
        ],
        termination: 'Termination of Services:',
        terminationPoints: [
            'Either party may terminate the service agreement with a written notice of 14 days.',
            'If a client terminates the service after work has commenced, the client will be responsible for paying for work completed up to the date of termination.'
        ],
        conclusion: 'For any questions or concerns regarding these Terms of Service, please reach out to us at info@nextdev.co.in. We encourage open communication and aim to foster a professional, respectful working relationship with all clients.'
    };

    return (
        <>
            <NavBar />
            <div className="tos-container flex justify-center items-center bg-gray-100 py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <h1 className="tos-title text-5xl text-blue-900 font-extrabold text-center mb-8">Terms of Service</h1>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="tos-title text-3xl text-blue-900 font-bold mt-4 mb-2">{termsOfService.title}</h2>
                        <p className="tos-date text-gray-600 italic mb-6">{termsOfService.date}</p>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Introduction</h3>
                        <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{termsOfService.introduction}</p>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">General Terms</h3>
                        <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                            {termsOfService.generalTermsPoints.map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Client Responsibilities</h3>
                        <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                            {termsOfService.responsibilitiesPoints.map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Limitations of Liability</h3>
                        <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                            {termsOfService.liabilityPoints.map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Termination of Services</h3>
                        <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                            {termsOfService.terminationPoints.map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Conclusion</h3>
                        <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{termsOfService.conclusion}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsOfService;
