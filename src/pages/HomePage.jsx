import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import LatestNews from '../components/home/LatestNews';
import InfoCards from '../components/home/InfoCards';
import InformationDesk from '../components/home/InformationDesk';
import ImportantLinks from '../components/home/ImportantLinks';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
  return (
    <main className="w-full">
      <HeroCarousel />
      <LatestNews />
      <InfoCards />
      {/* <InformationDesk /> */}
      <ImportantLinks />
      <Testimonials />
    </main>
  );
};

export default HomePage;
