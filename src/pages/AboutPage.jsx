import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="About Us" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-800">History & Background</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Indian Institute of Information Technology (IIIT) Pune is an Institute of National Importance established in 2016 by the Ministry of Education (MoE), Government of India, in Public-Private Partnership (PPP) mode.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The institute started operating from its transit campus at KJEI's Trinity Academy of Engineering, Pune. It is being mentored by the prestigious College of Engineering Pune (COEP), one of the oldest engineering colleges in Asia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-800">Vision & Mission</h2>
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
                <h3 className="text-lg font-bold text-accent dark:text-accent-dark mb-2">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 italic">"To be a globally recognized institute of excellence in Information Technology education and research, empowering minds to drive innovation and technological advancement."</p>
              </div>
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-bold text-accent dark:text-accent-dark mb-2">Our Mission</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>To provide world-class education in IT and related domains.</li>
                  <li>To foster a culture of research, innovation, and entrepreneurship.</li>
                  <li>To collaborate with industry and academia for real-world solutions.</li>
                  <li>To instill ethical values and social responsibility in our students.</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 sticky top-24">
              <div className="bg-primary dark:bg-gray-800 p-4">
                <h2 className="text-xl font-bold font-serif text-white">Director's Message</h2>
              </div>
              <div className="p-6">
                <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full mb-4 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-md">
                  <span className="text-sm text-gray-500 font-medium text-center">Director<br/>Photo</span>
                </div>
                <h3 className="text-center font-bold text-lg text-gray-900 dark:text-white mb-1">Prof. Anupam Shukla</h3>
                <p className="text-center text-accent dark:text-accent-dark text-sm mb-6">Director, IIIT Pune</p>
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-gray-200 dark:text-gray-700 font-serif">"</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic relative z-10 leading-relaxed text-justify px-2">
                    Welcome to IIIT Pune. Our focus is on nurturing technical brilliance while keeping our students grounded in strong ethical principles. We strive to create leaders who will shape the digital future of our nation and the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
