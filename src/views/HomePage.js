import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/home/HeroSection';
import Services from '../components/home/Services';
import PortfolioSection from '../components/home/PortfolioSection';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PortfolioSection />
      <Services />
      <PortfolioSection />
      <PortfolioSection />
      {/* <Blog/Instagram /> */}
      {/* <AboutUs /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
