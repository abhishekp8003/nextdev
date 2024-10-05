import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NavLinks = () => {
    return (
        <>
            {/* Helmet for Breadcrumb schema (insert into parent component, if necessary) */}
            <Helmet>
                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://nextdev.co.in/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "About Us",
                                "item": "https://nextdev.co.in/about-us"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Blog",
                                "item": "https://nextdev.co.in/blog"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Contact Us",
                                "item": "https://nextdev.co.in/contact"
                            },
                            {
                                "@type": "ListItem",
                                "position": 5,
                                "name": "Demo Products",
                                "item": "https://nextdev.co.in/get-demo"
                            }
                        ]
                    }`}
                </script>
            </Helmet>

            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Home
            </Link>

            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/about-us">
                About
            </Link>

            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/blog">
                Blog
            </Link>

            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                Contact Us
            </Link>

            <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" to="/get-demo">
                Demo our products
            </Link>
        </>
    );
}

export default NavLinks;
