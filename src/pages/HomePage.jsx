import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import LatestNews from '../components/home/LatestNews';
import InfoCards from '../components/home/InfoCards';
import RecruiterCarousel from '../components/home/RecruiterCarousel';
import ImportantLinks from '../components/home/ImportantLinks';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';

const HomePage = () => {
  return (
    <main className="w-full">
      <HeroCarousel />
      <LatestNews />
      <InfoCards />
      <TestimonialsCarousel />
      <RecruiterCarousel />
      <ImportantLinks />
    </main>
  );
};

export default HomePage;
