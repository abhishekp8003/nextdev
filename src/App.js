import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import AboutUs from './pages/Aboutus';

// Components
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import PopupForm from './components/PopupForm'; // Import Popup Form

import whatsappLogo from './images/clients/whatsapp.png'; // Import WhatsApp logo image

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

    window.addEventListener('load', () => {
      aos_init();
    });

    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useDocTitle("NextDev Labs");

  const handleClosePopup = () => {
    setShowPopup(false); // Close popup
  };

  return (
    <>
      {/* WhatsApp logo link only on the Home screen */}
          {location.pathname === '/' && (
            <a
              href="https://wa.me/919028348003" // WhatsApp link with your number
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
            >
              <img
                src={whatsappLogo}
                alt="WhatsApp"
                className="w-12 h-12 rounded-full shadow-lg hover:opacity-80 transition-transform duration-300 transform hover:scale-110"
              />
            </a>
          )}

      
      {location.pathname === '/' && <PopupForm show={showPopup} onClose={handleClosePopup} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-demo" element={<DemoProduct />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
