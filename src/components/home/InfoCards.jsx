import React, { useState, useEffect } from 'react';
import { ChevronRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfoCards = () => {
  const [achievementIdx, setAchievementIdx] = useState(0);
  const achievements = [
    "Our student team won 1st prize at Smart India Hackathon 2024.",
    "Dr. Sharma's research paper published in Nature.",
    "IIITP ranked among top 50 engineering institutes in NIRF."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAchievementIdx((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [achievements.length]);

  return (
    <section className="py-12 bg-bg dark:bg-bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Welcome */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col group">
            <div className="bg-primary dark:bg-gray-800 text-white py-3 px-5 font-bold font-serif text-lg">
              Welcome to IIIT Pune
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 rounded-md mb-4 flex items-center justify-center text-gray-400 dark:text-gray-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 opacity-50"></div>
                <span className="relative z-10 font-medium">[Campus Image Placeholder]</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                Indian Institute of Information Technology Pune, established in 2016, is an Institute of National Importance set up by the Ministry of Education, Government of India. We are dedicated to delivering world-class IT education and research.
              </p>
              <Link to="/about" className="text-accent dark:text-accent-dark font-semibold text-sm flex items-center hover:underline group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                Read More <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: Admissions */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col">
            <div className="bg-primary dark:bg-gray-800 text-white py-3 px-5 font-bold font-serif text-lg">
              Admissions 2025-26
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <ul className="space-y-4 mb-6 flex-grow mt-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark mt-1.5 mr-3 shrink-0"></span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">B.Tech via JoSAA/CSAB (JEE Main)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark mt-1.5 mr-3 shrink-0"></span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">M.Tech (CSE & ECE) via CCMT (GATE)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark mt-1.5 mr-3 shrink-0"></span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">PhD Programs - Regular & Part-Time</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark mt-1.5 mr-3 shrink-0"></span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">International Admissions (DASA)</span>
                </li>
              </ul>
              <Link to="/academics" className="inline-block text-center w-full py-2.5 bg-accent hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 text-sm">
                Apply Now
              </Link>
            </div>
          </div>

          {/* Card 3: Achievements */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col">
            <div className="bg-primary dark:bg-gray-800 text-white py-3 px-5 font-bold font-serif text-lg">
              Achievements
            </div>
            <div className="p-5 flex flex-col items-center justify-center flex-grow relative bg-gradient-to-br from-white to-blue-50/50 dark:from-surface-dark dark:to-gray-800/50">
              <Award className="w-24 h-24 text-yellow-400 opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="min-h-[120px] flex items-center justify-center text-center w-full relative z-10 px-4">
                <p 
                  key={achievementIdx}
                  className="text-gray-800 dark:text-gray-200 font-medium text-lg leading-relaxed animate-[fadeIn_0.5s_ease-in-out]"
                >
                  "{achievements[achievementIdx]}"
                </p>
              </div>
              <div className="flex space-x-2 mt-6 relative z-10">
                {achievements.map((_, idx) => (
                  <div key={idx} className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx === achievementIdx ? 'bg-primary dark:bg-accent-dark w-4' : 'bg-gray-300 dark:bg-gray-600'}`} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoCards;
