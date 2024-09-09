import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import makeInIndiaImage from '../images/clients/make-in-India-logo.jpg'; // Ensure the correct path
import digitalindia from '../images/clients/digital-india.png';
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                                <h3 className="font-bold text-4xl mb-4">NextDev</h3>
                                <div className='text-md font-medium text-gray-600'>
                                    <h5>NextDev Labs</h5>
                                    <p>hindjewadi phase 1,</p>
                                    <p>pune 411057,</p>
                                    <p>maharastra , india</p>
                                    <p>info@nextdev.co.in </p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink to="/about-us" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="/#services" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="contact#contact" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* 3rd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Web Development</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Mobile App Development</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Domain and Hosting</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">General IT Consultations</Link>
                                </li>
                            </ul>
                        </div>

                        {/* 4th block */}
                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                            <div className="text-xl mb-6">
                                Social Media Links.
                            </div>
                            <div className="text-md font-medium mb-6">
                                Follow us on social media.
                            </div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    {/* <li>
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                            </svg>
                                        </Link>
                                    </li> */}
                                <li className="ml-4">
                                <a 
                                    href="https://www.facebook.com/profile.php?id=61565608701323&mibextid=ZbWKwL" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
                                    aria-label="Facebook"
                                >
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                </svg>
                                </a>
                                </li>

                                    <li className="ml-4">
                                    <a 
                                                href="https://www.instagram.com/nextdev_labs?igsh=NzBpMG91dXJvMHU=" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
                                                aria-label="Facebook"
                                            >
         <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 11c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.3c-1.8 0-3.3-1.5-3.3-3.3S14.2 12.7 16 12.7s3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm4.6-8.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zM24 13c-.1-1.3-.3-2.2-1.1-3-.7-.7-1.7-1-3-1s-3.3-.1-4.9-.1c-1.7 0-3.3 0-4.9.1-1.3 0-2.3.3-3 1-1 1-1 1.7-1 3-.1 1.5-.1 3.1-.1 4.8 0 1.7 0 3.3.1 4.9.1 1.3.3 2.2 1.1 3 .7.7 1.7 1 3 1 1.5.1 3.1.1 4.8.1s3.3 0 4.9-.1c1.3 0 2.3-.3 3-1 .7-.7 1-1.7 1-3 .1-1.5.1-3.1.1-4.8s0-3.3-.1-4.9zm-2.1 9c-.4 1-1.3 1.7-2.3 2-.7.2-2.5.2-3.6.2s-2.7 0-3.6-.1c-1 0-1.9-.2-2.6-.7-.8-.4-1.3-1-1.7-1.7-.4-.8-.6-1.6-.7-2.6-.1-.9-.1-2.5-.1-3.6s0-2.7.1-3.6c.1-1 .2-1.9.7-2.6.4-.8 1-1.3 1.7-1.7.8-.4 1.6-.6 2.6-.7.9 0 2.5-.1 3.6-.1s2.7 0 3.6.1c1 0 1.9.2 2.6.7.8.4 1.3 1 1.7 1.7.4.8.6 1.6.7 2.6.1.9.1 2.5.1 3.6s0 2.7-.1 3.6c-.1 1-.2 1.9-.7 2.6z" />
                                            </svg>
                                    </a>
                                    
                                    </li>
                                    <li className="ml-4">
                                    <a 
                                            href="https://www.linkedin.com/company/104656109/admin/dashboard/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
                                            aria-label="Facebook"
    >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 12h5.5v1.5h.1c.7-1.1 2-2.1 4.1-2.1 4.3 0 5.2 2.8 5.2 6.4V24H21v-5.6c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V24h-5.5v-12zm-6 0h5.5v12H6v-12zm5.7-4.8c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8zM29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z" />
                                            </svg>
    </a>
                                                                          </li>
                                    <div className="text-sm text-[#013289] mr-4">
                                                   </div>
                                </ul>
                               
 
                            </div>
                            <div className="flex justify-end items-center mt-20">
    <a href="https://www.makeinindia.com" target="_blank" rel="noopener noreferrer" className="mr-2">
        <img
            className="w-32"
            src={makeInIndiaImage}
            alt="Make in India"
            style={{ margin: '0 10px' }}
        />
    </a>
    <a href="https://www.digitalindia.gov.in" target="_blank" rel="noopener noreferrer" className="ml-2">
        <img
            className="w-32"
            src={digitalindia}
            alt="Digital India"
            style={{ margin: '0 10px' }}
        />
    </a>
</div>

  
                        </div>
                        
                    </div>

                    {/* Bottom area */}
                    <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 text-center md:text-left">
                        {/* Copyrights note */}
                        <div className="text-sm text-[#013289] mr-4">&copy; 2024 NextDev Labs. All rights reserved.</div>
                        

                        </div>
                                      
                    </div>
                
            </footer>
        </>
    );
}

export default Footer;
