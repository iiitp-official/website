import React, { useEffect } from 'react';
import PageHeader from '../components/shared/PageHeader';

const MousPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="MOUs" />
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Content for MOUs is coming soon.
        </p>
      </div>
    </div>
  );
};

export default MousPage;
