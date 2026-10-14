
import PageHeader from '../shared/PageHeader';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const LifePageLayout = ({
  title,
  subtitle,
  breadcrumb,
  children,
  selectedImage,
  setSelectedImage,
  imageGallery,
  setImageGallery,
  onGalleryIndexChange,
}) => {
  return (
    <div className="min-h-screen font-sans">
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumb={breadcrumb}
      />

      <div className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="min-h-[500px]">
            {children}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {imageGallery && setImageGallery ? (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setImageGallery(null)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setImageGallery(null);
            }}
            aria-label="Close image viewer"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={24} />
          </button>
          {imageGallery.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onGalleryIndexChange((imageGallery.index - 1 + imageGallery.images.length) % imageGallery.images.length);
                }}
                aria-label="Previous image"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onGalleryIndexChange((imageGallery.index + 1) % imageGallery.images.length);
                }}
                aria-label="Next image"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
          <div className="relative w-full max-w-5xl mx-4 aspect-video flex items-center justify-center">
            <img
              src={imageGallery.images[imageGallery.index]}
              alt={`Event photo ${imageGallery.index + 1} of ${imageGallery.images.length}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
          {imageGallery.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-widest">
              {imageGallery.index + 1} / {imageGallery.images.length}
            </div>
          )}
        </div>
      ) : selectedImage && setSelectedImage ? (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen preview" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      ) : null}
    </div>
  );
};

export default LifePageLayout;
