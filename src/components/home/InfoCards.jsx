import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Award, 
  Trophy, 
  Code, 
  Cpu, 
  Microscope, 
  FileText, 
  ChevronLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const studentAchievements = [
  {
    category: "Sports",
    title: "7th Inter-IIIT Sports Meet 2025",
    description: "IIIT Pune secured a historic 7th place overall at IIITM Gwalior, winning 11 medals (5 Gold, 3 Silver, 3 Bronze) with outstanding athletic & team performances.",
    detail: "Gold in Shot Put & Javelin (Parth Shukla), Weightlifting (Khush Meena), Aquatics (Atharv Patil), and Men's Tug-of-War."
  },
  {
    category: "Hackathon",
    title: "Citi Ada Lovelace Hackathon 2024",
    description: "Team CodeCoffee secured First Runner-Up out of 500+ teams and 1500+ participants across India, organized by Citi.",
    detail: "Aadish Shelke, Bhagyashri Meena, Shreerang Mungikar, Lalithya K. Koneti. Mentor: Dr. Priyank Jain."
  },
  {
    category: "Hackathon",
    title: "Smart India Hackathon Winners",
    description: "Team BugBusters won SIH 2023 for their BookLens project. Team SHARPS emerged as finalists in SIH 2024.",
    detail: "Heartfelt gratitude to our mentors Dr. Priyank Jain and student mentor Ashutosh Jha."
  },
  {
    category: "Coding",
    title: "Apoorv Kumar - Red Coder",
    description: "Batch 2024 student achieved the title of Grandmaster on Codeforces and 7-star coder on Codechef (All India Rank 9 on both).",
    detail: "Apoorv's achievements highlight the strong, student-driven competitive coding culture at IIIT Pune."
  }
];

const facultyAchievements = [
  {
    category: "Research",
    title: "MeitY Research Grant (₹1.93 Cr)",
    description: "Dr. Bhupendra Singh & Dr. Sanjeev Sharma awarded 1.93 Crore for Next Generation Data Carving & Storage Drive Forensics.",
    detail: "A prestigious 2-year government-sponsored project for advanced digital forensics."
  },
  {
    category: "Research",
    title: "MeitY IoT SoC Grant (₹81.50 L)",
    description: "Dr. Nagendra Kushwaha awarded 81.50 Lakh for Power & Space optimization in Internet of Things (IoT) System-on-Chip (SoC).",
    detail: "A 5-year project under the Dept. of Electronics & Communication Engineering."
  },
  {
    category: "Patent",
    title: "AI-Based Automatic Monitoring",
    description: "Indian patent granted on March 27, 2026 for an AI-based automatic monitoring system and method.",
    detail: "Inventors: Dr. Sonam Maurya (Assistant Professor, CSE) along with other researchers."
  },
  {
    category: "Patent",
    title: "Disease Biomarker Biosensor",
    description: "Indian patent application published on July 15, 2025 for a biosensor for detection of disease biomarkers.",
    detail: "Inventors: Dr. Dheeraj Dubey (Assistant Professor, Dept of ECE) along with co-inventors."
  }
];

const categoryIcons = {
  Sports: Trophy,
  Hackathon: Code,
  Coding: Cpu,
  Research: Microscope,
  Patent: FileText
};

const InfoCards = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [slideIdx, setSlideIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentList = activeTab === 'students' ? studentAchievements : facultyAchievements;

  // Auto-play effect
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % currentList.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentList.length, isHovered]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev + 1) % currentList.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev - 1 + currentList.length) % currentList.length);
  };

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

            {/* Tab Selectors */}
            <div className="flex border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('students');
                  setSlideIdx(0);
                }}
                className={`flex-1 py-3 text-center text-sm font-semibold transition-all duration-200 border-b-2 ${
                  activeTab === 'students'
                    ? 'text-primary dark:text-accent-dark border-primary dark:border-accent-dark bg-white dark:bg-surface-dark'
                    : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Students
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('faculty');
                  setSlideIdx(0);
                }}
                className={`flex-1 py-3 text-center text-sm font-semibold transition-all duration-200 border-b-2 ${
                  activeTab === 'faculty'
                    ? 'text-primary dark:text-accent-dark border-primary dark:border-accent-dark bg-white dark:bg-surface-dark'
                    : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Faculty
              </button>
            </div>

            {/* Slide Body */}
            <div 
              className="p-5 flex flex-col flex-grow justify-between min-h-[280px] relative bg-gradient-to-br from-white to-blue-50/10 dark:from-surface-dark dark:to-gray-800/20"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex-grow flex flex-col justify-center">
                <div key={`${activeTab}-${slideIdx}`} className="transition-all duration-300 ease-in-out">
                  {/* Category Chip */}
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="p-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-accent dark:text-accent-dark">
                      {React.createElement(categoryIcons[currentList[slideIdx]?.category] || Trophy, { size: 16 })}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent dark:text-accent-dark">
                      {currentList[slideIdx]?.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-gray-800 dark:text-gray-100 font-bold text-sm leading-snug mb-1">
                    {currentList[slideIdx]?.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-2">
                    {currentList[slideIdx]?.description}
                  </p>

                  {/* Optional Detail box */}
                  {currentList[slideIdx]?.detail && (
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 italic bg-gray-50 dark:bg-gray-800/30 p-2 rounded border-l-2 border-accent dark:border-accent-dark mb-2">
                      {currentList[slideIdx]?.detail}
                    </div>
                  )}

                  {/* Read Full Story Link */}
                  <div>
                    <Link 
                      to={`/about/${activeTab === 'students' ? 'student' : 'faculty'}-achievements`}
                      className="text-[11px] font-bold text-accent dark:text-accent-dark hover:underline flex items-center"
                    >
                      Read Full Story <ChevronRight size={12} className="ml-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Navigation & Paginator Dots & View All */}
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-gray-100/60 dark:border-gray-800/60">
                <div className="flex items-center space-x-4">
                  {/* Chevrons */}
                  <div className="flex space-x-1">
                    <button 
                      onClick={prevSlide}
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="flex space-x-1.5">
                    {currentList.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSlideIdx(idx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === slideIdx 
                            ? 'bg-primary dark:bg-accent-dark w-3' 
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* View All Link */}
                <Link 
                  to={`/about/${activeTab === 'students' ? 'student' : 'faculty'}-achievements`} 
                  className="text-xs font-semibold text-accent dark:text-accent-dark hover:underline flex items-center shrink-0"
                >
                  View All <ChevronRight size={14} className="ml-0.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoCards;
