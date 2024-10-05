import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
// import blog from '../pages/blog';
import FAQ from '../components/FAQ';
import Blog from '../pages/blog';
// import AboutUs from './Aboutus';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Introduction Section */}
      <Intro />
      
      {/* Services Section */}
      <Services />
      
      {/* Portfolio Section */}
      <Portfolio />
      <Blog />
      {/* Clients Section */}
      <Clients />
      
      {/* Call to Action Section */}
      <Cta />
      <FAQ />
      
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Home;
