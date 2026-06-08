import React from 'react';
import { MapPin, BookOpen, Radio, Code, Trophy, Library, Building } from 'lucide-react';
import lifePageData from '../../data/lifePageData.json';

const { CAMPUS_IMAGES, FACILITIES } = lifePageData;

const getFacilityIcon = (title) => {
  if (title.includes('Classroom')) return BookOpen;
  if (title.includes('Network')) return Radio;
  if (title.includes('Labs')) return Code;
  if (title.includes('Sports')) return Trophy;
  if (title.includes('Library')) return Library;
  return Building;
};

const CampusTab = ({ setSelectedImage }) => {
  return (
    <div className="space-y-8">
      {/* Hero Intro */}
      <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-800 dark:text-white mb-4">
            Permanent Campus, Nanoli
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify mb-6">
            Indian Institute of Information Technology (IIIT) Pune has been allotted 100 acres of land 
            by the Government of Maharashtra. Situated in Nanoli village, Taluka Maval, the campus is surrounded 
            by the serene Sahyadri ranges. The modern infrastructure is designed to foster research, 
            innovation, and holistic student development while providing comfortable residential facilities.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 rounded-xl border border-blue-100 dark:border-blue-900/40 text-xs font-bold">
            <MapPin size={14} />
            <span>Gat No. 5 & 6, Village Nanoli-Tathawade, Tal. Maval, Dist. Pune — 412106</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAMPUS_IMAGES.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage(img.url)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-bold drop-shadow-md">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold font-serif text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
              Infrastructure Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {FACILITIES.map((fac, idx) => {
                const Icon = getFacilityIcon(fac.title);
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Icon size={14} />
                      </span>
                      <h4 className="text-sm font-bold text-gray-800 dark:text-white">{fac.title}</h4>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 pl-10 text-justify leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-white/10 rotate-12">
              <MapPin size={120} />
            </div>
            <h3 className="text-lg font-bold font-serif mb-4 relative z-10">Connectivity</h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold">🛣️</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/90">Nearest Highway</p>
                  <p className="text-[11px] text-white/70">Pune–Mumbai Expressway (NH-48)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold">🚉</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/90">Nearest Railway</p>
                  <p className="text-[11px] text-white/70">Talegaon Railway Station (~5 km)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold">✈️</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/90">Nearest Airport</p>
                  <p className="text-[11px] text-white/70">Pune International Airport (~40 km)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold">🏙️</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/90">Major Hubs</p>
                  <p className="text-[11px] text-white/70">Pune City (~35 km) | Pimpri Chinchwad (~20 km)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusTab;
