import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const CancellationPolicy = () => {
    useDocTitle('NextDev Labs - Cancellation Policy');

    const cancellationPolicy = {
        id: 1,
        title: 'NextDev Labs Cancellation Policy',
        effectiveDate: 'Effective Date: August 26, 2024',
        introduction: 'At NextDev Labs, we understand that circumstances may change, and you may need to cancel a service. This policy outlines the process and conditions for cancellations.',
        howToCancel: 'How to Cancel:',
        howToCancelPoints: [
            'All cancellation requests must be submitted via our official communication channels, such as email or phone support.',
            'Cancellations must be requested before the scheduled start of the service or project.',
            'We require a minimum of 48 hours’ notice before service commencement for cancellations to be eligible for refunds or rescheduling.'
        ],
        feesAndRefunds: 'Fees and Refunds:',
        feesAndRefundsPoints: [
            'If a cancellation is made with less than 48 hours’ notice, a cancellation fee may apply.',
            'Refunds for cancellations will be processed based on the terms of our Refund Policy.',
            'For ongoing services, partial refunds may be issued depending on the work completed at the time of cancellation.'
        ],
        exceptions: 'Exceptions:',
        exceptionsPoints: [
            'Cancellations made due to unforeseen events (e.g., emergencies, natural disasters) may be considered for exceptions at the discretion of NextDev Labs.',
            'If we are unable to provide the agreed service due to our own fault, a full refund will be issued without any cancellation fee.'
        ],
        conclusion: 'If you have any questions about this Cancellation Policy or need assistance, please contact us at info@nextdev.co.in. We are committed to ensuring a fair and transparent process for all cancellations.'
    };

    return (
        <>
            <NavBar />
            <div className="policy-container flex justify-center items-center bg-gray-100 py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <h1 className="policy-title text-5xl text-blue-900 font-extrabold text-center mb-8">Cancellation Policy</h1>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="policy-title text-3xl text-blue-900 font-bold mt-4 mb-2">{cancellationPolicy.title}</h2>
                        <p className="policy-date text-gray-600 italic mb-6">{cancellationPolicy.effectiveDate}</p>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Introduction</h3>
                        <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{cancellationPolicy.introduction}</p>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">How to Cancel</h3>
                        <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                            {cancellationPolicy.howToCancelPoints.map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Fees and Refunds</h3>
                        <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                            {cancellationPolicy.feesAndRefundsPoints.map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Exceptions</h3>
                        <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                            {cancellationPolicy.exceptionsPoints.map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Conclusion</h3>
                        <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{cancellationPolicy.conclusion}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CancellationPolicy;
