import React from 'react';
import mongodbLogo from '../images/mongodb.png';
import expressLogo from '../images/expressjs.png';
import reactLogo from '../images/react.jpeg';
import nodejsLogo from '../images/nodejs.png';
import wordpressLogo from '../images/wordpress_PNG3.png';
import firebaseLogo from '../images/firebase_logo-1.png';
import awsLogo from '../images/aws-logo.png';
import reactNativeLogo from '../images/react.png';

const TechnologyStack = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 bg-white shadow-lg rounded-lg mx-4">
            <h3 className="text-3xl font-extrabold text-center text-blue-800 mb-6">Our Core Technologies</h3>
            
            {/* Grid-based layout for technology cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full px-6">
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <img src={reactLogo} alt="React.js" className="h-16 md:h-20 mb-4" title="React.js" />
                    <p className="text-center text-lg font-medium">React.js</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <img src={nodejsLogo} alt="Node.js" className="h-16 md:h-20 mb-4" title="Node.js" />
                    <p className="text-center text-lg font-medium">Node.js</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <img src={expressLogo} alt="Express.js" className="h-16 md:h-20 mb-4" title="Express.js" />
                    <p className="text-center text-lg font-medium">Express.js</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <img src={mongodbLogo} alt="MongoDB" className="h-16 md:h-20 mb-4" title="MongoDB" />
                    <p className="text-center text-lg font-medium">MongoDB</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <img src={wordpressLogo} alt="WordPress" className="h-16 md:h-20 mb-4" title="WordPress" />
                    <p className="text-center text-lg font-medium">WordPress</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <img src={firebaseLogo} alt="Firebase" className="h-16 md:h-20 mb-4" title="Firebase" />
                    <p className="text-center text-lg font-medium">Firebase</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <img src={awsLogo} alt="AWS" className="h-16 md:h-20 mb-4" title="AWS" />
                    <p className="text-center text-lg font-medium">AWS</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <img src={reactNativeLogo} alt="React Native" className="h-16 md:h-20 mb-4" title="React Native" />
                    <p className="text-center text-lg font-medium">React Native</p>
                </div>
            </div>

            <p className="text-center text-lg font-medium text-gray-800 max-w-xl px-4 mt-6">
                We use a wide range of modern technologies, including React.js, Node.js, WordPress, AWS, and more, to build scalable and secure applications tailored to your business needs.
            </p>
        </div>
    );
}

export default TechnologyStack;
