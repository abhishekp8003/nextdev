import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import ReactPlayer from 'react-player';
import demoVideo from '../video/react-video.mp4';

const DemoProduct = () => {
    useDocTitle('NextDev labs - Demo our products');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        demoProducts: [],
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                demoProducts: checked
                    ? [...prevData.demoProducts, value]
                    : prevData.demoProducts.filter((product) => product !== value),
            }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const clearErrors = () => setErrors({});
    const clearInput = () => setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', demoProducts: [] });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone_number: formData.phone,
            message: formData.message,
            products: formData.demoProducts.join(', '),
        };

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then((response) => {
                setLoading(false);
                clearInput();
                Notiflix.Report.success('Thank You!', 'Your message has been delivered. Our associate will call you shortly!');
            })
            .catch((error) => {
                setLoading(false);
                Notiflix.Report.failure('An error occurred', 'There was an issue sending your message. Please try again later.', 'Okay');
                console.error('EmailJS error:', error);
            });
    };

    return (
        <div>
            <NavBar />
            <div className="flex justify-center items-center mt-16 mb-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <ReactPlayer
                        url={demoVideo}
                        controls
                        width="100%"
                        height="600px"
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
            <div id="demo" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <form onSubmit={sendEmail} id="demoProductForm">
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                                    Demo our products
                                </h1>
                            </div>

                            {['1_year_plan', '2_year_plan', '4_year_plan'].map((plan, index) => (
                                <div key={plan} className="flex items-center my-4">
                                    <input
                                        id={`checkbox-${index + 1}`}
                                        aria-describedby={`checkbox-${index + 1}`}
                                        type="checkbox"
                                        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                        value={plan}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor={`checkbox-${index + 1}`} className="ml-3 text-lg font-medium text-gray-900">
                                        {`${index + 1} Year Plan`}
                                    </label>
                                </div>
                            ))}

                            {Object.keys(errors).map((key) => (
                                <p key={key} className="text-red-500 text-sm">{errors[key]}</p>
                            ))}

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                {['firstName', 'lastName', 'email', 'phone'].map((field) => (
                                    <div key={field}>
                                        <input
                                            name={field}
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type={field === 'email' ? 'email' : 'text'}
                                            placeholder={`${field.replace(/^\w/, (c) => c.toUpperCase())}*`}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            onKeyUp={clearErrors}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onKeyUp={clearErrors}
                                ></textarea>
                            </div>

                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className={`uppercase text-sm font-bold tracking-wide ${loading ? 'bg-gray-400' : 'bg-gray-500 hover:bg-blue-900'} text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline`}
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Send Message'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DemoProduct;
