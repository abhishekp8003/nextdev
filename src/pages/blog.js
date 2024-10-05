import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Blog = () => {
    useDocTitle('NextDev Labs - Success Story');

    const successStory = {
        id: 1,
        title: 'How a Small Shop Owner Digitized Their Business and Achieved Success',
        date: 'October 5, 2024',
        excerpt: 'A local shop owner took their small business online with the help of NextDev. By creating a website, they were able to expand their customer base, increase sales, and boost revenue significantly. Moving from a traditional shop to an online presence helped them scale their business beyond their local market.',
        message: 'If you’re a small business owner looking to grow, building a professional website could be the game-changer you need. Partner with NextDev to create your digital platform and transform your business just like this shop owner did.',
    };

    return (
        <>
            <NavBar />
            <div className="blog-container flex justify-center items-center bg-gray-100 py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:px-20">
                    <h1 className="blog-title text-4xl text-blue-900 font-bold text-center mb-8">Latest Success Story</h1>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="post-title text-2xl font-bold mt-4">{successStory.title}</h2>
                        <p className="post-date text-gray-600 mt-1">{successStory.date}</p>
                        <p className="post-excerpt text-gray-700 mt-2">{successStory.excerpt}</p>
                        <p className="post-message text-blue-800 mt-4 font-semibold">
                            {successStory.message}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
