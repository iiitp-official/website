import React from 'react';
import NewsTicker from '../components/home/NewsTicker';
import HeroCarousel from '../components/home/HeroCarousel';
import InfoCards from '../components/home/InfoCards';
import RecruiterCarousel from '../components/home/RecruiterCarousel';
import ImportantLinks from '../components/home/ImportantLinks';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';

const HomePage = () => {
  return (
    <main className="w-full ">
      <NewsTicker />
      <HeroCarousel />
      <InfoCards />
      <TestimonialsCarousel />
      <RecruiterCarousel />
      <ImportantLinks />
    </main>
  );
};

export default HomePage;
