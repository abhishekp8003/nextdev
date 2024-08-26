import React from 'react';
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';
import abhi from '../images/clients/abhi.png';
import logo2 from '../images/clients/logo2.svg';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'multiply',
    objectFit: 'contain', // Ensure the image is properly contained within the div
}

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

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="flex justify-center space-x-4">
                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={kws} alt="Client Logo 3" />                           
                        </div>

                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={protergia} alt="Protergia" />                            
                        </div> 

                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={geps} alt="GEPS" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={logo2} alt="Client Logo 2" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-75 hover:opacity-100">
                            <img src={abhi} alt="Abhi" />                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Clients;
