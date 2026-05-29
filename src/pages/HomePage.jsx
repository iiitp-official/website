import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import LatestNews from '../components/home/LatestNews';
import InfoCards from '../components/home/InfoCards';
import RecruiterCarousel from '../components/home/RecruiterCarousel';
import ImportantLinks from '../components/home/ImportantLinks';

const HomePage = () => {
  return (
    <main className="w-full">
      <HeroCarousel />
      <LatestNews />
      <InfoCards />
      <ImportantLinks />
      <RecruiterCarousel />
    </main>
  );
};

export default HomePage;
