import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Image } from 'lucide-react';
import { Link } from 'react-router';
import LifePageLayout from '../components/life/LifePageLayout';
import lifePageData from '../data/lifePageData.json';

const { ACTIVITIES, EVENTS } = lifePageData;

const LifeEventsPage = ({ hackathonsOnly = false, nssOnly = false }) => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [scrollingGallery, setScrollingGallery] = useState(null);
  const [expandedEvents, setExpandedEvents] = useState(() => new Set());
  const scrollTimeout = useRef(null);
  const pageScrollTimeout = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const page = document.documentElement;
    page.classList.add('college-events-page');

    const handlePageScroll = () => {
      page.classList.add('is-scrolling');
      clearTimeout(pageScrollTimeout.current);
      pageScrollTimeout.current = setTimeout(() => {
        page.classList.remove('is-scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handlePageScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handlePageScroll);
      clearTimeout(pageScrollTimeout.current);
      page.classList.remove('college-events-page', 'is-scrolling');
    };
  }, []);

  useEffect(() => () => clearTimeout(scrollTimeout.current), []);

  const handleGalleryScroll = (galleryIndex) => {
    setScrollingGallery(galleryIndex);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setScrollingGallery(null), 1000);
  };

  const toggleEventDetails = (eventIndex) => {
    setExpandedEvents((current) => {
      const next = new Set(current);
      if (next.has(eventIndex)) {
        next.delete(eventIndex);
      } else {
        next.add(eventIndex);
      }
      return next;
    });
  };

  const changeGalleryImage = (index) => {
    setSelectedGallery((current) => current ? { ...current, index } : current);
  };
  const displayedEvents = hackathonsOnly
    ? EVENTS.filter((event) => /hackathon/i.test(`${event.name} ${event.type}`))
    : nssOnly
      ? EVENTS.filter((event) =>
          /safaimitra|swachhata hi seva|nasha mukt yuva|world environment day/i.test(
            `${event.name} ${event.type} ${event.desc}`,
          ),
        )
      : EVENTS;

  return (
    <LifePageLayout 
      title={hackathonsOnly ? "Hackathons" : nssOnly ? "NSS Activities" : "Student Life"}
      breadcrumb="Life"
      imageGallery={selectedGallery}
      setImageGallery={setSelectedGallery}
      onGalleryIndexChange={changeGalleryImage}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {nssOnly && (
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm lg:sticky lg:top-44 self-start w-full space-y-4">
              <h3 className="text-gray-800 dark:text-white font-bold font-serif px-2 pb-2 border-b border-gray-100 dark:border-gray-800 text-base">
                National Initiatives
              </h3>
              <div className="flex flex-row overflow-x-auto gap-2 no-scrollbar lg:flex-col lg:max-h-[60vh] lg:overflow-y-auto lg:pr-1 pb-2 lg:pb-0">
                {ACTIVITIES.map((item) => {
                  const isSelected = item.id === 'nss';
                  const path = isSelected
                    ? '/life/nss'
                    : `/life/activities?act=${item.id}`;
                  return (
                    <Link
                      key={item.id}
                      to={path}
                      aria-current={isSelected ? 'page' : undefined}
                      className={`shrink-0 lg:shrink lg:w-full flex items-center gap-2 px-4 py-2 lg:px-3.5 lg:py-3 rounded-full lg:rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-primary text-white border-primary shadow-sm'
                          : 'text-gray-700 dark:text-gray-300 bg-transparent border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-855 hover:border-gray-200 dark:hover:border-gray-700'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-white' : 'bg-primary'}`} />
                      <span className="font-bold text-xs lg:text-sm truncate">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 space-y-5 sm:space-y-8">
          <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-gray-800 dark:text-white mb-2">
                {hackathonsOnly
                  ? "College Hackathons"
                  : nssOnly
                    ? "NSS Events"
                    : "Flagship College Events"}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {hackathonsOnly
                  ? "Explore hackathons hosted at IIIT Pune, including event details, highlights, and photos."
                  : nssOnly
                    ? "Explore community service, cleanliness, and outreach initiatives at IIIT Pune."
                    : "Discover the major annual festivals and technical conclaves that bring the campus to life."}
              </p>
          </div>

          <div className="space-y-5 sm:space-y-8">
            {displayedEvents.map((evt, idx) => (
            <div key={idx} className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-1.5 ${evt.typeColor.split(' ')[0]}`} />
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-5 sm:gap-8">
                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${evt.typeColor}`}>
                          {evt.type}
                        </span>
                        {evt.date && (
                          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                            {evt.date}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-3">
                        <h3 className="min-w-0 text-xl sm:text-2xl leading-tight font-bold font-serif text-gray-800 dark:text-white break-words">
                          {evt.name}
                        </h3>
                        {evt.links && evt.links.slice(0, 1).map((link, idx) => {
                          const colorMatch = evt.typeColor.match(/bg-(\w+)-/);
                          const color = colorMatch ? colorMatch[1] : 'teal';
                          const buttonStyles = {
                            blue: "bg-blue-200 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50",
                            indigo: "bg-indigo-200 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50",
                            teal: "bg-teal-200 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400 border-teal-100 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/50",
                            purple: "bg-purple-200 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-100 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/50",
                            green: "bg-green-200 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-100 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/50",
                            amber: "bg-amber-200 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-100 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/50",
                            red: "bg-red-200 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-100 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/50",
                            cyan: "bg-cyan-200 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 border-cyan-100 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/50"
                          };
                          const buttonClass = buttonStyles[color] || buttonStyles.teal;
                          return (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex shrink-0 items-center gap-2 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full border transition-colors ${buttonClass}`}
                            >
                              View Report
                              <ExternalLink size={14} />
                            </a>
                          );
                        })}
                      </div>
                      {evt.desc && (
                        <div>
                          <p
                            id={`event-description-${idx}`}
                            className={`text-sm text-gray-650 dark:text-gray-300 leading-relaxed text-left sm:text-justify${expandedEvents.has(idx) ? '' : ' line-clamp-4'}`}
                          >
                            {evt.desc.includes('\n\n**') ? (
                              <>
                                {evt.desc.split('\n\n**')[0]}{' '}
                                <strong>{evt.desc.split('\n\n**')[1].replace('**', '')}</strong>
                              </>
                            ) : evt.desc}
                          </p>
                          {!expandedEvents.has(idx) && (
                            <button
                              type="button"
                              onClick={() => toggleEventDetails(idx)}
                              aria-expanded="false"
                              aria-controls={`event-description-${idx}`}
                              className="mt-2 text-sm font-semibold text-primary hover:underline dark:text-blue-300"
                            >
                              Read more
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {expandedEvents.has(idx) && (
                      <div id={`event-details-${idx}`} className="mt-4">
                        <h4 className="text-sm font-bold text-gray-800 dark:text-white uppercase tracking-wide mb-3">Highlights</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                          {evt.highlights.map((h, hidx) => (
                            <div key={hidx} className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${evt.typeColor.split(' ')[0]}`} />
                              <span className="text-sm dark:text-gray-400">{h}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleEventDetails(idx)}
                          aria-expanded="true"
                          aria-controls={`event-description-${idx} event-details-${idx}`}
                          className="mt-3 text-sm font-semibold text-primary hover:underline dark:text-blue-300"
                        >
                          Read less
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {evt.images && evt.images.length > 0 && (
                  <div className="mt-6">
                    <div
                      className={`college-event-gallery${scrollingGallery === idx ? ' is-scrolling' : ''}`}
                      aria-label={`${evt.name} photos`}
                      onScroll={() => handleGalleryScroll(idx)}
                      tabIndex={0}
                    >
                      {evt.images.map((imgUrl, iidx) => (
                        <div 
                          key={iidx} 
                          onClick={() => setSelectedGallery({ images: evt.images, index: iidx })}
                          className="college-event-gallery-item group relative aspect-video rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`${evt.name} snippet`} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <Image size={14} />
                            </div>
                          </div>
                        </div>
                        ))}
                      </div>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </LifePageLayout>
  );
};

export default LifeEventsPage;

export const LifeHackathonsPage = () => <LifeEventsPage hackathonsOnly />;
export const LifeNssPage = () => <LifeEventsPage nssOnly />;
