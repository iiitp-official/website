import React, { useEffect } from 'react';
import PageHeader from '../components/shared/PageHeader';
import { ExternalLink, FileText, ChevronRight } from 'lucide-react';

const AdmissionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const admissionLinks = [
    {
      title: "B.Tech via JoSAA/CSAB (JEE Main)",
      link: "https://josaa.nic.in/",
      external: true
    },
    {
      title: "M.Tech (CSE & ECE) via CCMT (GATE)",
      link: "https://ccmt.admissions.nic.in/",
      external: true
    },
    {
      title: "PhD Programs - Regular & Part-Time",
      link: null,
      external: false
    },
    {
      title: "International Admissions (DASA)",
      link: "https://dasanit.org/",
      external: true
    }
  ];

  const importantDocuments = [
    {
      title: "M.Tech Application form 2026",
      link: "/documents/Application form Jul 2026-M.Tech.pdf"
    },
    {
      title: "PhD Application Form 2026",
      link: "/documents/Application_Form_PhD_July_2026.pdf"
    },
    {
      title: "M.Tech without Scholarship Admission Brochure 2026",
      link: "/documents/IIITP M.Tech.Without Scholarship Admission Brochure Jul-2026.pdf"
    },
    {
      title: "PhD Brochure July 2026",
      link: "/documents/PhD_Brochure_July_2026.pdf"
    }
  ];

  const announcements = [
    {
      title: "Extension of Deadline 2026",
      link: "/documents/Extension of Deadline 2026.pdf"
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader 
        title="Admissions" 
        subtitle="Join IIIT Pune and embark on a journey of academic excellence and innovation."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          
          {/* Main Programs Section */}
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                Programs Offered
              </h2>
              <div className="space-y-4">
                {admissionLinks.map((item, idx) => (
                  <div key={idx} className="group">
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target={item.external ? "_blank" : "_self"} 
                        rel={item.external ? "noopener noreferrer" : ""}
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                      >
                        <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </span>
                        <ExternalLink size={18} className="text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {item.title}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
          </div>
          
          {/* Important Documents Section */}
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8 mt-8">
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-4 flex items-center gap-2">
                <FileText size={24} className="text-brand-red" />
                Important Documents
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {importantDocuments.map((doc, idx) => (
                  <a 
                    key={idx}
                    href={doc.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 hover:border-brand-red hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 group"
                  >
                    <FileText size={20} className="text-gray-400 group-hover:text-brand-red transition-colors shrink-0" />
                    <span className="font-semibold text-sm text-gray-800 dark:text-gray-200 group-hover:text-brand-red dark:group-hover:text-red-400 transition-colors line-clamp-2">
                      {doc.title}
                    </span>
                  </a>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
