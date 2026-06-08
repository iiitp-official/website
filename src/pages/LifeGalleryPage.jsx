import { useEffect, useState } from 'react';
import { Image } from 'lucide-react';
import LifePageLayout from '../components/life/LifePageLayout';
import lifePageData from '../data/lifePageData.json';

const { GALLERY_ITEMS } = lifePageData;

const LifeGalleryPage = () => {
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
          <h3 className="text-xl font-bold font-serif text-gray-800 dark:text-white mb-2">Photo Gallery</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">A visual look into campus infrastructure, academic life, and student activities at IIIT Pune.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.imgUrl)}
              className="group relative overflow-hidden bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-850">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.closest('.group').style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Image size={18} />
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-50 dark:border-gray-850 flex flex-col gap-1 bg-white dark:bg-surface-dark">
                <span className="text-[10px] font-bold text-accent dark:text-accent-dark uppercase tracking-wider">{item.category}</span>
                <h4 className="text-sm font-bold text-gray-800 dark:text-white truncate">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LifePageLayout>
  );
};

export default LifeGalleryPage;
