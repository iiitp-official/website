import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExternalLink, Image, Mail } from 'lucide-react';
import LifePageLayout from '../components/life/LifePageLayout';
import lifePageData from '../data/lifePageData.json';

const { CLUBS } = lifePageData;

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LifeClubsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const activeClubKey = searchParams.get('club') || 'blueprint';

  useEffect(() => {
    window.scrollTo(0, 0);
    if (activeClubKey === 'saaz') {
      window.location.href = 'https://saaz-iiitp.vercel.app/';
    }
  }, [activeClubKey]);

  const clubKeys = Object.keys(CLUBS);
  const club = CLUBS[activeClubKey] || CLUBS[clubKeys[0]];

  return (
    <LifePageLayout 
      title="Student Life" 
      subtitle="Discover the vibrant clubs, events, campus facilities, and extracurricular opportunities at IIIT Pune."
      breadcrumb="Life"
      selectedImage={selectedImage}
      setSelectedImage={setSelectedImage}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm lg:sticky lg:top-24 space-y-4">
            <h3 className="text-gray-800 dark:text-white font-bold font-serif px-2 pb-2 border-b border-gray-100 dark:border-gray-800 text-base">
              Club Directory
            </h3>
            <div className="flex flex-row overflow-x-auto gap-2 no-scrollbar lg:flex-col lg:max-h-[60vh] lg:overflow-y-auto lg:pr-1 pb-2 lg:pb-0">
              {clubKeys.map((key) => {
                const c = CLUBS[key];
                const isSelected = activeClubKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSearchParams({ club: key })}
                    className={`shrink-0 lg:shrink lg:w-full flex flex-row lg:flex-col items-center lg:items-start gap-2 lg:gap-0 px-4 py-2 lg:px-3.5 lg:py-3 rounded-full lg:rounded-xl text-left transition-all duration-250 border ${
                      isSelected
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 bg-transparent border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-850 hover:border-gray-200 dark:hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-white' : 'bg-primary'}`} />
                      <span className="font-bold text-xs lg:text-sm truncate">{c.name}</span>
                    </div>
                    {c.tags && c.tags.length > 0 && (
                      <span className={`hidden lg:block text-[10px] mt-1.5 truncate w-full ${isSelected ? 'text-white/80' : 'text-gray-400 dark:text-gray-500'}`}>
                        {c.tags.slice(0, 2).join(' • ')}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="border-b border-gray-100 dark:border-gray-800 pb-5 mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-primary dark:text-white">
                {club.name}
              </h2>
              <div className="flex flex-wrap gap-2 mt-4 mb-2">
                {club.tags && club.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[10px] font-bold text-gray-600 dark:text-gray-300 tracking-wide uppercase border border-gray-200 dark:border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed text-justify">
                {club.desc}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 space-y-8">
                {club.flagship && club.flagship.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold font-serif text-primary dark:text-white border-b pb-2 border-gray-100 dark:border-gray-800 flex items-center gap-2">
                      Flagship Events
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {club.flagship.map((item, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                          <h4 className="font-bold text-sm text-gray-800 dark:text-white mb-2 pr-20">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-650 dark:text-gray-400 text-justify leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {club.workshops && club.workshops.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold font-serif text-primary dark:text-white border-b pb-2 border-gray-100 dark:border-gray-800">
                      Workshops &amp; Technical Training
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {club.workshops.map((item, idx) => (
                        <div key={idx} className="pl-4 border-l-2 border-primary/20 py-1">
                          <h4 className="text-sm font-bold text-gray-850 dark:text-white mb-1">{item.title}</h4>
                          <p className="text-xs text-gray-650 dark:text-gray-400 text-justify leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50/50 dark:bg-gray-850/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-primary dark:text-white pb-2 border-b border-gray-200/60 dark:border-gray-800">
                    Club Leadership
                  </h3>
                  {club.leadership && club.leadership.heads && club.leadership.heads.length > 0 ? (
                    <div className="space-y-3">
                      {club.leadership.heads.map((head, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800/80 shadow-xs">
                          <div className={`w-8 h-8 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary dark:text-primary-dark text-[10px] font-bold shrink-0 shadow-xs`}>
                            {head.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-xs font-bold text-gray-850 dark:text-gray-300 truncate">{head.name}</span>
                            <span className="text-[9px] text-gray-500 dark:text-gray-450 truncate">{head.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500 dark:text-gray-455 italic">
                      Leadership contacts are managed via the student welfare registry.
                    </p>
                  )}
                </div>

                <div className="bg-gray-50/50 dark:bg-gray-850/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-primary dark:text-white pb-2 border-b border-gray-200/60 dark:border-gray-800">
                    Reach Out &amp; Connect
                  </h3>
                  <div className="flex flex-col gap-2">
                    {club.leadership && club.leadership.email && (
                      <a
                        href={`mailto:${club.leadership.email}`}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white dark:bg-surface-dark text-xs text-gray-650 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:shadow-xs transition-all border border-gray-100 dark:border-gray-800/80"
                      >
                        <Mail size={14} className="text-gray-400 shrink-0" />
                        <span className="truncate">{club.leadership.email}</span>
                      </a>
                    )}
                    {club.leadership && club.leadership.instagram && (
                      <a
                        href={`https://instagram.com/${club.leadership.instagram.replace('@', '')}`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white dark:bg-surface-dark text-xs text-gray-650 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:shadow-xs transition-all border border-gray-100 dark:border-gray-800/80"
                      >
                        <InstagramIcon size={14} className="text-gray-400 shrink-0" />
                        <span className="truncate">{club.leadership.instagram}</span>
                      </a>
                    )}
                    {club.leadership && club.leadership.website && (
                      <a
                        href={club.leadership.website}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white dark:bg-surface-dark text-xs text-gray-655 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:shadow-xs transition-all border border-gray-100 dark:border-gray-800/80 font-bold"
                      >
                        <ExternalLink size={14} className="text-gray-400 shrink-0" />
                        <span>Visit Website</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {activeClubKey === 'eclectic' ? (
              <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8 flex items-center justify-center">
                <a
                  href="https://eclectic-iiitp.github.io/eclectic/"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>Visit Eclectic Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ) : (
              <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8">
                <h3 className="text-lg font-bold font-serif text-primary dark:text-white mb-4">
                  Activities Gallery
                </h3>
                {club.images && club.images.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {club.images.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedImage(imgUrl)}
                        className="group relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800/80 shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <img
                          src={imgUrl}
                          alt={`${club.name} Activity ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => { e.target.closest('.group').style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <Image size={18} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-gray-50/50 dark:bg-gray-900/10">
                    <div className={`w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3 shadow-xs`}>
                      <Image size={22} />
                    </div>
                    <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Gallery Updates in Progress</h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
                      We are currently updating visual highlights for {club.name}. Check back soon to see snapshots of our fests, workshops, and competitions!
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </LifePageLayout>
  );
};

export default LifeClubsPage;
