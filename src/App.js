import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import AboutUs from './pages/Aboutus';

// Components
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import PopupForm from './components/PopupForm'; // Import Popup Form

function App() {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });

    // Set a timer to show the popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 10 seconds

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useDocTitle("NextDev Labs");

  const handleOpenPopup = () => {
    setShowPopup(true); // Open popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close popup
  };

  return (
    <>
      <Router>
        <ScrollToTop>
          <button
            className="fixed bottom-8 right-8 bg-blue-900 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-400 transition"
            onClick={handleOpenPopup}
          >
            Contact Us
          </button>
          
          {/* Popup Form */}
          <PopupForm show={showPopup} onClose={handleClosePopup} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
