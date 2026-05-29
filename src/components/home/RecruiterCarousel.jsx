import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CompanyLogo } from '../shared/CompanyLogo';

// Recruiter list
const recruiters = [
  { name: 'Google' },
  { name: 'Microsoft' },
  { name: 'Amazon' },
  { name: 'Qualcomm' },
  { name: 'NVIDIA' },
  { name: 'Flipkart' },
  { name: 'Deloitte' },
  { name: 'Accenture' },
  { name: 'Samsung R&D' },
  { name: 'Goldman Sachs' },
  { name: 'Cisco' },
  { name: 'Citi' },
  { name: 'Intel' },
  { name: 'IBM' },
  { name: 'Siemens' },
  { name: 'TCS' },
  { name: 'Infosys' },
  { name: 'Wipro' },
  { name: 'VMware' },
  { name: 'Capgemini' },
];

// Duplicate for seamless infinite scroll
const track = [...recruiters, ...recruiters];

const RecruiterCarousel = () => {
  return (
    <section className="py-12 bg-surface dark:bg-surface-dark transition-colors duration-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-accent dark:text-accent-dark text-xs font-semibold uppercase tracking-widest mb-1">
              Our Recruiters
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary dark:text-white">
              Where Our Students Go
            </h2>
          </div>
          <Link
            to="/placement"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-accent dark:text-accent-dark hover:underline group"
          >
            View Placements
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scrolling track — no mouse control, purely CSS */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface dark:from-surface-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface dark:from-surface-dark to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-recruiter-scroll w-max">
          {track.map((r, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 h-20 bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <CompanyLogo name={r.name} className="w-full h-full max-h-10 object-contain text-gray-800 dark:text-gray-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="flex justify-center mt-6 sm:hidden">
        <Link
          to="/placement"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent dark:text-accent-dark hover:underline"
        >
          View All Placements <ArrowRight size={14} />
        </Link>
      </div>

      <style>{`
        @keyframes recruiter-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-recruiter-scroll {
          animation: recruiter-scroll 30s linear infinite;
        }
        .animate-recruiter-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default RecruiterCarousel;
