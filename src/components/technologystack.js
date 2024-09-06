import React from 'react';
import mongodbLogo from '../images/mongodb.png';
import expressLogo from '../images/expressjs.png';
import reactLogo from '../images/react.jpeg';
import nodejsLogo from '../images/nodejs.png';

const TechnologyStack = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 bg-white shadow-lg rounded-lg mx-4">
            <h3 className="text-3xl font-extrabold text-center text-blue-800 mb-6">Our Core Technologies</h3>
            {/* Center-aligned container with horizontal scroll for logos */}
            <div className="flex items-center justify-center space-x-10 mb-6 overflow-x-auto w-full">
                <div className="flex items-center justify-center space-x-10 min-w-max px-4">
                    <img src={reactLogo} alt="React.js" className="h-16 md:h-20 transform hover:scale-110 transition duration-300" title="React.js" />
                    <img src={nodejsLogo} alt="Node.js" className="h-16 md:h-20 transform hover:scale-110 transition duration-300" title="Node.js" />
                    <img src={expressLogo} alt="Express.js" className="h-16 md:h-20 transform hover:scale-110 transition duration-300" title="Express.js" />
                    <img src={mongodbLogo} alt="MongoDB" className="h-16 md:h-20 transform hover:scale-110 transition duration-300" title="MongoDB" />
                </div>
            </div>
            <p className="text-center text-lg font-medium text-gray-800 max-w-xl px-4">
                We leverage modern technologies like React, Node.js, Express.js, and MongoDB to build secure, scalable, and high-performance applications that meet your business needs.
            </p>
        </div>
    );
}

export default TechnologyStack;
