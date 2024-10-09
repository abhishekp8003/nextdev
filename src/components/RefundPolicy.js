import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const RefundPolicy = () => {
    useDocTitle('NextDev Labs - Refund Policy');

    const refundPolicy = {
        id: 1,
        title: 'NextDev Labs Refund Policy',
        date: 'Effective Date: August 26 , 2024',
        introduction: 'At NextDev Labs, customer satisfaction is our top priority. We understand that circumstances may arise where you may seek a refund. This policy outlines the guidelines and conditions under which refunds will be processed for services rendered by NextDev Labs.',
        eligibility: 'Refund requests will be considered under the following conditions:',
        eligibilityPoints: [
            'Service not delivered as per the agreement or the description.',
            'Significant delays in project delivery beyond the agreed timeline.',
            'Refund request submitted within 14 days of service completion.',
            'The project has not commenced, and the request is made before work initiation.'
        ],
        nonRefundable: 'Refunds will not be processed under these circumstances:',
        nonRefundablePoints: [
            'If the service or product has been partially or fully delivered as per the agreed terms.',
            'If work has already commenced and the client requests changes not previously discussed.',
            'For personalized services like website development, where substantial work has been completed.'
        ],
        process: 'Refund Process:',
        processSteps: [
            'Submit a formal request via email at info@nextdev.co.in including detailed information and reasons for the request.',
            'Your request will be reviewed, and you will receive a response within 5-7 business days.',
            'If approved, refunds will be processed within 14 business days to the original method of payment.'
        ],
        conclusion: 'We aim to resolve all issues to the satisfaction of our clients. If you have further questions about our refund policy, please don’t hesitate to contact us at info@nextdev.co.in. We are here to assist you!'
    };

    return (
        <>
            <NavBar />
            <div className="refund-container flex justify-center items-center bg-gray-100 py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <h1 className="refund-title text-5xl text-blue-900 font-extrabold text-center mb-8">Refund Policy</h1>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="policy-title text-3xl text-blue-900 font-bold mt-4 mb-2">{refundPolicy.title}</h2>
                        <p className="policy-date text-gray-600 italic mb-6">{refundPolicy.date}</p>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Introduction</h3>
                        <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{refundPolicy.introduction}</p>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Eligibility for Refunds</h3>
                        <p className="section-content text-gray-700 text-lg leading-relaxed mb-4">{refundPolicy.eligibility}</p>
                        <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                            {refundPolicy.eligibilityPoints.map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Non-Refundable Situations</h3>
                        <p className="section-content text-gray-700 text-lg leading-relaxed mb-4">{refundPolicy.nonRefundable}</p>
                        <ul className="list-disc list-inside text-gray-700 text-lg ml-6 mb-6">
                            {refundPolicy.nonRefundablePoints.map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Refund Process</h3>
                        <p className="section-content text-gray-700 text-lg leading-relaxed mb-4">{refundPolicy.process}</p>
                        <ol className="list-decimal list-inside text-gray-700 text-lg ml-6 mb-6">
                            {refundPolicy.processSteps.map((step, index) => (
                                <li key={index} className="mb-2">{step}</li>
                            ))}
                        </ol>

                        <h3 className="section-title text-2xl text-blue-900 font-semibold mt-6 mb-2">Conclusion</h3>
                        <p className="section-content text-gray-700 text-lg leading-relaxed mb-6">{refundPolicy.conclusion}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RefundPolicy;
