import React from 'react';
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';
import abhi from '../images/clients/abhi.png';
import logo2 from '../images/clients/logo2.svg';

const clientImage = {
    height: '10rem',
    width: 'auto',
    objectFit: 'contain',
};

const testimonials = [
    {
        name: 'Ravi Kumar',
        review: 'Next Dev created an outstanding website for us!',
        company: 'Tech Innovators',
    },
    {
        name: 'Sneha Patel',
        review: 'Amazing services, highly recommend!',
        company: 'Patel Solutions',
    },
    {
        name: 'Anil Verma',
        review: 'Next Dev transformed our online presence!',
        company: 'Verma Enterprises',
    },
    {
        name: 'Priya Singh',
        review: 'Professional and efficient, will work with them again.',
        company: 'FutureTech',
    },
    {
        name: 'Karan Desai',
        review: 'Great experience working with Next Dev!',
        company: 'Desai Industries',
    },
    {
        name: 'Vikram Joshi',
        review: 'Highly satisfied with the web solution provided.',
        company: 'Joshi Technologies',
    },
    {
        name: 'Naina Gupta',
        review: 'They delivered exactly what we needed!',
        company: 'Gupta Enterprises',
    },
];

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2>
                </div>

                <div className="overflow-x-auto p-4 scrollbar-hide" data-aos="fade-in" data-aos-delay="600">
                    <div className="flex space-x-8 min-w-max justify-center">
                        <div style={clientImage} className="flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={kws} alt="KWS Logo" />
                        </div>
                        <div style={clientImage} className="flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={protergia} alt="Protergia Logo" />
                        </div>
                        <div style={clientImage} className="flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={geps} alt="GEPS Logo" />
                        </div>
                        <div style={clientImage} className="flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={logo2} alt="Logo 2" />
                        </div>
                        <div style={clientImage} className="flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={abhi} alt="Abhi Logo" />
                        </div>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="my-8">
                    <h2 className="text-center text-3xl text-blue-900 uppercase font-bold">Testimonials</h2>
                    <div className="flex justify-center">
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <div className="testimonial-container flex overflow-x-auto scrollbar-hide mt-8 p-4 space-x-4 justify-start">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="testimonial-card bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80 lg:w-1/4"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                                <p className="mt-4 text-gray-700">{testimonial.review}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Clients;
