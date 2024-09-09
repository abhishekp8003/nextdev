import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Cta = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    const templateParams = {
      email,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('Subscription request sent successfully:', response.status, response.text);
      setSuccessMessage('Thank you for subscribing to our newsletter!');
      setErrorMessage('');
      setEmail(''); // Clear the email field after successful submission
    })
    .catch((error) => {
      console.error('Failed to send subscription request:', error);
      setErrorMessage('Failed to subscribe. Please try again.');
      setSuccessMessage('');
    });
  };

  return (
    <div className="w-full flex items-center justify-center text-white cta">
      <div className="mx-8 w-full h-auto text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
        <div className="w-full flex flex-col lg:flex-row lg:justify-around">
          <div className="mb-4">
            <p className='text-2xl md:text-4xl font-bold mb-4'>Are you ready to scale your business?</p>
            <p className="text-lg md:text-2xl">Get in touch and let us build something amazing <span className='font-black'>together!</span></p>
          </div>

          <div className="w-full lg:w-72 pt-6 lg:mx-12 mb-4">
            <Link to="/contact" className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">
              Send a message
              <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="w-full lg:w-72 pt-6 lg:mx-12">
          <h3 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={handleChange}
              className="mt-1 mb-2 block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 z-50 relative"
              style={{ backgroundColor: 'white', color: 'black', position: 'relative', zIndex: '10' }} // Ensures input is above other elements
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
          {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Cta;
