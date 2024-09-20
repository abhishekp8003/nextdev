import './index.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import AboutUs from './pages/Aboutus';
import FAQ from './components/FAQ';

// Components
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import PopupForm from './components/PopupForm'; 

import whatsappLogo from './images/clients/whatsapp.png'; 

function App() {
  return (
    <Router>
      <ScrollToTop>
        <MainContent />
      </ScrollToTop>
    </Router>
  );
}

function MainContent() {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    };

    window.addEventListener('load', aos_init);

    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useDocTitle("NextDev Labs");

  const handleClosePopup = () => {
    setShowPopup(false); 
  };

  return (
    <>
      <Helmet>
        {/* Default Meta Tags */}
        <title>NextDev Labs - Expert Website & Application Development Services</title>
        <meta name="description" content="NextDev offers expert website and application development services. We specialize in building fast, responsive, and SEO-friendly websites and apps for businesses looking to enhance their online presence." />
        <meta name="keywords" content="Nextdev, Nextdev Labs, Nextdev solutions, website development, application development, web design, app design, SEO, responsive websites, digital solutions, web development, app development, UI/UX design" />
        <meta name="author" content="Nextdev Labs" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for social media */}
        <meta property="og:title" content="Nextdev - Expert Website & Application Development" />
        <meta property="og:description" content="Nextdev provides professional website and application development services. Our solutions are fast, responsive, and SEO-friendly, tailored to enhance your online presence." />
        <meta property="og:url" content="https://nextdev.co.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="%PUBLIC_URL%/images/nextdev.jpeg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nextdev - Website & Application Development" />
        <meta name="twitter:description" content="Nextdev specializes in fast, responsive, and SEO-friendly website and application development. Discover how we can help you enhance your online presence." />
        <meta name="twitter:image" content="%PUBLIC_URL%/images/nextdev.jpeg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nextdev.co.in" />
      </Helmet>

      {/* WhatsApp logo link only on the Home screen */}
      {location.pathname === '/' && (
        <a
          href="https://wa.me/919172826126"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-2 right-2 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6 z-50"
        >
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg hover:opacity-80 transition-transform duration-300 transform hover:scale-110"
          />
        </a>
      )}

      {/* Popup Form on the Home page */}
      {location.pathname === '/' && <PopupForm show={showPopup} onClose={handleClosePopup} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-demo" element={<DemoProduct />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
