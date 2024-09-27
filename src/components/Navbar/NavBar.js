import React, { useState, useEffect, useCallback } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);

    const scrollHandler = useCallback(() => {
        setTop(window.pageYOffset <= 10);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [scrollHandler]);

    return (
        <>
            {/* Breadcrumb Schema for better SEO */}
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
                                "name": "Services",
                                "item": "https://nextdev.co.in/#services"
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

            <header className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
                <nav className="flex flex-row justify-between items-center py-2">
                    <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                        <HashLink smooth to="/#hero" aria-label="Go to hero section">
                            <h1 className="font-extrabold text-4xl text-blue-900">NextDev</h1>
                        </HashLink>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="p-2 rounded-lg lg:hidden text-blue-900"
                            onClick={handleClick}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                        >
                            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                                )}
                            </svg>
                        </button>
                        <div className="hidden space-x-6 lg:inline-block p-5">
                            <NavLinks />
                        </div>
                        <div className={`fixed transition-transform duration-300 ease-in-out flex flex-col space-y-6 justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${isOpen ? "block" : "hidden"}`} onClick={() => setIsOpen(false)}>
                            <NavLinks />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default NavBar;
