import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import makeInIndiaImage from '../images/clients/make-in-India-logo.jpg'; 
import digitalindia from '../images/clients/digital-india.png';
import trustpilotLogo from '../images/Trustpilot Stars.png';  // Added Trustpilot Logo
import googleReviewLogo from '../images/google.png'; // Added Google Review Logo
import SocialIcons from './SocialIcons.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
        <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
          
          {/* Links Section */}
          <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
            <ul className="text-md">
              <li className="mb-2">
                <HashLink to="/about-us" className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out">About</HashLink>
              </li>
              <li className="mb-2">
                <HashLink to="/#services" className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out">Services</HashLink>
              </li>
              <li className="mb-2">
                <HashLink to="/contact#contact" className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out">Contact</HashLink>
              </li>
            </ul>
          </div>
          
          {/* Services Section */}
          <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
  <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
  <ul className="text-md">
    <li className="mb-2">
      <Link to="/Staticweb" className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out">Static Web Development</Link>
    </li>
    <li className="mb-2">
      <Link to="/Dynamicweb" className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out">Dynamic Web Development</Link>
    </li>
    <li className="mb-2">
      <Link to="/Desktopapp" className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out">Desktop App Development</Link>
    </li>
    <li className="mb-2">
      <Link to="/itsolution" className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out">General IT Consultations</Link>
    </li>
  </ul>
</div>
          {/* Address Section */}
          <div className="col-span-12 lg:col-span-4">
            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
              <h3 className="font-bold text-4xl mb-4">NextDev</h3>
              <div className='text-md font-medium text-gray-600'>
                <h5>NextDev Labs</h5>
                <p>Hindjewadi phase 1,</p>
                <p>Pune 411057,</p>
                <p>Maharastra, India</p>
                <p>info@nextdev.co.in</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
            <div className="text-xl mb-6">Social Media Links.</div>
            <div className="text-md font-medium mb-6">Follow us on social media.</div>
            <div className="flex justify-center items-center">
              <ul className="flex">
                <li className="ml-4">
                  <a 
                      href="https://www.facebook.com/profile.php?id=61565608701323&mibextid=ZbWKwL" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
                      aria-label="Facebook"
                  >
                      <svg className="w-8 h-8 fill-current">
                          <use xlinkHref={`${SocialIcons}#icon-facebook`} />
                      </svg>
                  </a>
                </li>

                <li className="ml-4">
                  <a 
                      href="https://www.instagram.com/nextdev_labs?igsh=NzBpMG91dXJvMHU=" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
                      aria-label="Instagram"
                  >
                      <svg className="w-8 h-8 fill-current">
                          <use xlinkHref={`${SocialIcons}#icon-instagram`} />
                      </svg>
                  </a>
                </li>

                <li className="ml-4">
                  <a 
                      href="https://www.linkedin.com/company/104656109/admin/dashboard/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
                      aria-label="LinkedIn"
                  >
                      <svg className="w-8 h-8 fill-current">
                          <use xlinkHref={`${SocialIcons}#icon-linkedin`} />
                      </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Trustpilot and Google Review Logos */}
            <div className="flex justify-center items-center mt-1 space-x-5"> {/* Reduced space between logos */}
              <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer">
                <img className="w-32" src={trustpilotLogo} alt="Trustpilot" /> {/* Fixed size */}
              </a>
              <a href="https://www.google.com/search?client=ubuntu-sn&channel=fs&q=nextdev+lab" target="_blank" rel="noopener noreferrer">
                <img className="w-32" src={googleReviewLogo} alt="Google Review" /> {/* Fixed size */}
              </a>
            </div>

            {/* Make in India and Digital India Logos */}
            <div className="flex justify-end items-center mt-2 space-x-10"> {/* Reduced space between logos */}
              <a href="https://www.makeinindia.com" target="_blank" rel="noopener noreferrer">
                <img className="w-32 " src={makeInIndiaImage} alt="Make in India" /> {/* Fixed size */}
              </a>
              <a href="https://www.digitalindia.gov.in" target="_blank" rel="noopener noreferrer">
                <img className="w-32 " src={digitalindia} alt="Digital India" /> {/* Fixed size */}
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 text-center md:text-left">
          <div className="text-sm text-[#013289] mr-4">&copy; 2024 NextDev Labs. All rights reserved.</div>
          <div className="text-sm text-[#013289]">
            <Link to="/refund-policy" className="mr-4 hover:underline">Refund Policy</Link>
            <Link to="/cancellation-policy" className="mr-4 hover:underline">Cancellation Policy</Link>
            <Link to="/terms-of-services" className="hover:underline">Terms of Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
