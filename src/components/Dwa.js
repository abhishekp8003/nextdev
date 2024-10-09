import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const DesktopApplicationDevelopment = () => {
    useDocTitle('NextDev Labs - Desktop Application Development');

    const desktopAppDetails = {
        title: 'Desktop Application Development',
        introduction: 'At our company, we specialize in developing high-performance desktop applications tailored to your unique business needs. Whether you require software for Windows, macOS, or Linux, our applications are designed to deliver robust, secure, and scalable solutions that enhance your workflows and boost efficiency.',
        keyFeatures: 'Key Features:',
        keyFeaturesPoints: [
            'Customizable user interfaces for an enhanced user experience.',
            'Seamless integration with your existing systems and processes.',
            'Robust performance capabilities with offline access.',
        ],
        serviceDetails: 'Service Details:',
        serviceDetailsContent: 'Our desktop application development service is meticulously designed to create software solutions that significantly improve operational efficiency. We prioritize user-friendly interfaces and feature-rich applications that are tailored to meet your specific requirements. Our dedicated team works closely with you throughout the development process, ensuring that the final product aligns perfectly with your vision and objectives.',
        whyChooseUs: 'Why Choose Us?',
        whyChooseUsContent: 'We are committed to delivering exceptional desktop applications that not only meet but exceed your expectations. Our expertise in the latest technologies and dedication to quality assurance ensure that you receive a product that is reliable, effective, and efficient.',
        getStarted: 'Get Started Today!',
        getStartedContent: 'Contact us today to discuss your desktop application development needs and discover how we can help streamline your business operations.',
    };

    return (
        <>
            <NavBar />
            <div className="desktop-app-dev-container flex justify-center items-center bg-gray-100 py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <h1 className="desktop-app-dev-title text-5xl text-blue-900 font-extrabold text-center mb-8">{desktopAppDetails.title}</h1>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Introduction</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{desktopAppDetails.introduction}</p>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{desktopAppDetails.keyFeatures}</h3>
                    <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                        {desktopAppDetails.keyFeaturesPoints.map((point, index) => (
                            <li key={index} className="mb-2">{point}</li>
                        ))}
                    </ul>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{desktopAppDetails.serviceDetails}</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{desktopAppDetails.serviceDetailsContent}</p>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{desktopAppDetails.whyChooseUs}</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{desktopAppDetails.whyChooseUsContent}</p>

                    <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">{desktopAppDetails.getStarted}</h3>
                    <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{desktopAppDetails.getStartedContent}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DesktopApplicationDevelopment;
