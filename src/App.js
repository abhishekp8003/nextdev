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
import Blog from './pages/blog';
import TermsOfService from './components/Tos';
import RefundPolicy from './components/RefundPolicy';
import CancellationPolicy from './components/Cancellation';
// Components
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import PopupForm from './components/PopupForm'; 

import whatsappLogo from './images/clients/whatsapp.png'; 
import StaticWebDevelopment from './components/Swd';
import DynamicWebDevelopment from './components/Dwd';
import DesktopApplicationDevelopment from './components/Dwa';
import GeneralITConsultations from './components/gi';

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
  {/* Breadcrumb Schema for SEO */}
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
          "name": "Contact Us",
          "item": "https://nextdev.co.in/contact"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "FAQ",
          "item": "https://nextdev.co.in/FAQ"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "About Us",
          "item": "https://nextdev.co.in/about-us"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Blog",
          "item": "https://nextdev.co.in/blog"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Demo Product",
          "item": "https://nextdev.co.in/get-demo"
        }
      ]
    }`}
  </script>
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
  <Route path="/blog" element={<Blog />} /> {/* Add Blog route */}
  <Route path="/refund-policy" element={<RefundPolicy />} />
  <Route path="/cancellation-policy" element={<CancellationPolicy />} />
  <Route path="/terms-of-services" element={<TermsOfService />} />
  <Route path="/Staticweb" element={<StaticWebDevelopment />} />
  <Route path="/Dynamicweb" element={<DynamicWebDevelopment />} />
  <Route path="/Desktopapp" element={<DesktopApplicationDevelopment />} />
  <Route path="/itsolution" element={<GeneralITConsultations />} />
  
  
</Routes>

    </>
  );
}

export default App;
