import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import campusFrontImg from '../assets/campus_front.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Welcome to IIIT Pune" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          
          <div className="w-full h-64 md:h-96 relative">
            <img 
              src={campusFrontImg} 
              alt="IIIT Pune Campus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h1 className="absolute bottom-6 left-6 md:left-10 text-3xl md:text-4xl font-bold font-serif text-white shadow-sm">
              About the Institute
            </h1>
          </div>

          <div className="p-8 md:p-12">
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify">
              <p>
                Indian Institute of Information Technology Pune, established in 2016, is one of the fastest-growing IIITs among 20 newly established IIITs by the MOE, Government of India, and industry partners as a Not-for-profit Public-Private Partnership (N-PPP) Institution. IIIT Pune is committed to imparting high-quality technical education and instilling a long-term vision among students. Our focus lies not just on academic brilliance but also on the knowledge that is pervasive in areas of emerging technologies. Through our learning and research programs, we aim at building applications of Information Technology whose benefits percolate even to the grassroots level.
              </p>
              <p>
                We believe in nurturing graduates as proficient scholars and responsible members of society. Our institute is endowed with state-of-the-art facilities and provides an environment conducive to learning and exploration. Every department in the institute has cutting-edge laboratories. IIIT Pune emphasizes collaboration with leading institutes nationally and internationally through academic exchange programs and fosters industry-academia partnerships, among others.
              </p>
              <p>
                Several Industry-Institute Partnership Programs, Soft-Skill Trainings, competitions, internships, and student projects are organized to enhance communication skills, commitment, and ethics for comprehensive individual growth. The institute promotes innovation and entrepreneurship by encouraging and supporting creative ideas. Transformation requires a plan and a support system. At Indian Institute of Information Technology Pune, students are expected to work hard and develop the right attitude in their chosen fields. As you embark on this exciting and fruitful journey of your life, walk boldly and diligently.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
