import { useEffect, useState } from 'react';
import { Globe, ExternalLink, Image } from 'lucide-react';
import LifePageLayout from '../components/life/LifePageLayout';
import lifePageData from '../data/lifePageData.json';

const { EVENTS } = lifePageData;

const LifeEventsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LifePageLayout 
      title="Student Life" 
      subtitle="Discover the vibrant clubs, events, campus facilities, and extracurricular opportunities at IIIT Pune."
      breadcrumb="Life"
      selectedImage={selectedImage}
      setSelectedImage={setSelectedImage}
    >
      <div className="space-y-8">
        <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold font-serif text-gray-800 dark:text-white mb-2">Flagship College Events</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Discover the major annual festivals and technical conclaves that bring the campus to life.</p>
        </div>

        <div className="space-y-8">
          {EVENTS.map((evt, idx) => (
            <div key={idx} className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-1.5 ${evt.typeColor.split(' ')[0]}`} />
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-3 ${evt.typeColor}`}>
                        {evt.type}
                      </span>
                      <h3 className="text-2xl font-bold font-serif text-gray-800 dark:text-white mb-3">
                        {evt.name}
                      </h3>
                      <p className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed text-justify">
                        {evt.desc}
                      </p>
                    </div>
                    
                    <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-5">
                      <h4 className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-wide mb-3">Highlights</h4>
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                        {evt.highlights.map((h, hidx) => (
                          <div key={hidx} className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${evt.typeColor.split(' ')[0]}`} />
                            <span className="text-xs text-gray-600 dark:text-gray-400">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {evt.links && (
                    <div className="md:w-64 shrink-0">
                      <div className="bg-gray-50 dark:bg-gray-850 rounded-2xl p-5 border border-gray-100 dark:border-gray-800">
                        <h4 className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                          <Globe size={14} className="text-primary" /> Event Links
                        </h4>
                        <div className="space-y-2">
                          {evt.links.map((link, lidx) => (
                            <a
                              key={lidx}
                              href={link.url}
                              target="_blank" rel="noopener noreferrer"
                              className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:border-primary/30 transition-colors"
                            >
                              <span className="font-semibold">{link.label}</span>
                              <ExternalLink size={12} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {evt.images && evt.images.length > 0 && (
                  <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-6">
                    <div className="grid grid-cols-3 gap-4">
                      {evt.images.map((imgUrl, iidx) => (
                        <div 
                          key={iidx} 
                          onClick={() => setSelectedImage(imgUrl)}
                          className="group relative aspect-video rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer"
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
    </LifePageLayout>
  );
};

export default LifeEventsPage;
