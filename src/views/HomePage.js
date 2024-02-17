import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/home/HeroSection';
import PortfolioSection from '../components/home/PortfolioSection';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PortfolioSection />
    </div>
  );
}

export default HomePage;
