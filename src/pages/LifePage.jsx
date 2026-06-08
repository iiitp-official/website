import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';

import OverviewTab from '../components/life/OverviewTab';
import ClubsTab from '../components/life/ClubsTab';
import ActivitiesTab from '../components/life/ActivitiesTab';
import GalleryTab from '../components/life/GalleryTab';
import EventsTab from '../components/life/EventsTab';
import MagazineTab from '../components/life/MagazineTab';
import CampusTab from '../components/life/CampusTab';

const LifePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const activeTab = searchParams.get('tab') || 'overview';
  const activeClubKey = searchParams.get('club') || 'blueprint';
  const activeActKey = searchParams.get('act') || 'azadi';

  useEffect(() => {
    window.scrollTo(0, 0);
    if (activeTab === 'clubs' && activeClubKey === 'saaz') {
      window.location.href = 'https://saaz-iiitp.vercel.app/';
    }
  }, [activeTab, activeClubKey]);

  const handleTabChange = (tabKey) => {
    setSearchParams({ tab: tabKey });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'clubs':
        return <ClubsTab activeClubKey={activeClubKey} setSearchParams={setSearchParams} setSelectedImage={setSelectedImage} />;
      case 'activities':
        return <ActivitiesTab activeActKey={activeActKey} setSearchParams={setSearchParams} setSelectedImage={setSelectedImage} />;
      case 'gallery':
        return <GalleryTab setSelectedImage={setSelectedImage} />;
      case 'events':
        return <EventsTab setSelectedImage={setSelectedImage} />;
      case 'magazine':
        return <MagazineTab />;
      case 'campus':
        return <CampusTab setSelectedImage={setSelectedImage} />;
      default:
      case 'overview':
        return <OverviewTab handleTabChange={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg font-sans">
      <PageHeader
        title="Student Life"
        subtitle="Discover the vibrant clubs, events, campus facilities, and extracurricular opportunities at IIIT Pune."
        breadcrumb="Life"
      />

      <div className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Enhanced Navigation Tabs */}
          <div className="mb-10 overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm p-2 sticky top-20 z-40 lg:relative lg:top-0">
            <div className="flex flex-nowrap overflow-x-auto gap-2 no-scrollbar pb-1 lg:pb-0 relative">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'clubs', label: 'Professional Clubs' },
                { key: 'activities', label: 'Activities' },
                { key: 'gallery', label: 'Photo Gallery' },
                { key: 'events', label: 'College Events' },
                { key: 'hr-summit', label: 'HR Summit (2021)' },
                { key: 'magazine', label: 'Magazine' },
                { key: 'campus', label: 'Permanent Campus' }
              ].map((tab) => {
                if (tab.key === 'hr-summit') {
                  return (
                    <a
                      key={tab.key}
                      href="https://placements.iiitp.ac.in/HrSummit/"
                      target="_blank" rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 border text-gray-600 dark:text-gray-350 bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800`}
                    >
                      {tab.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  );
                }

                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 border ${
                      isActive
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'text-gray-600 dark:text-gray-350 bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Tab Content Area */}
          <div className="min-h-[500px]">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
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
      )}
    </div>
  );
};

export default LifePage;
