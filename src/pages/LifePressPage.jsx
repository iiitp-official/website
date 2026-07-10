import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import LifePageLayout from '../components/life/LifePageLayout';

const pressArticles = [
  {
    date: "6th June 2026",
    title: "IIIT Pune Hosts First Alumni Meet, Showcases Growth in Research, Placements and Infrastructure",
    desc: "The Indian Institute of Information Technology Pune (IIIT Pune), an Institute of National Importance established by the Government of India under the Ministry of Education, successfully organised its First Alumni Meet – Pune Chapter at its campus in Nanoli Tarf Chakan, Talegaon, Maval, on Saturday.",
    link: "https://www.punekarnews.in/iiit-pune-hosts-first-alumni-meet-showcases-growth-in-research-placements-and-infrastructure/",
    publisher: "Punekar News"
  },
  {
    date: "26th August 2025",
    title: "IIIT Pune and NIT Raipur professors to be part of Rs4cr centrally-funded project to build next-gen digital forensic tools",
    desc: "Pune: Professors from the Indian Institute of Information Technology (IIIT) Pune, along with the National Institute of Technology (NIT) Raipur, will be part of a Rs4.2 crore project commissioned by the cyber security division of the Union Ministry of Electronics and Information Technology (MeitY) to develop next-generation digital forensics tools over the next two years.",
    link: "http://timesofindia.indiatimes.com/articleshow/123511899.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
    publisher: "The Times of India"
  }
];

const LifePressPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LifePageLayout 
      title="Press & Media" 
      subtitle="Discover the latest news, media coverage, and press releases about IIIT Pune."
      breadcrumb="Life"
    >
      <div className="space-y-8">
        <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold font-serif text-gray-800 dark:text-white mb-2">Media Coverage</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-justify">
            Explore the latest news articles and press coverage highlighting the achievements, events, and growth of IIIT Pune.
          </p>
        </div>

        <div className="space-y-6">
          {pressArticles.map((article, idx) => (
            <div key={idx} className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
                <span className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                  {article.publisher || "Press Release"}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {article.date}
                </span>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold font-serif text-gray-800 dark:text-white mb-4">
                {article.title}
              </h4>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-justify leading-relaxed">
                {article.desc}
              </p>
              
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-bold transition-all shadow-sm hover:-translate-y-0.5"
              >
                <ExternalLink size={16} />
                Read Full Article
              </a>
            </div>
          ))}
        </div>
      </div>
    </LifePageLayout>
  );
};

export default LifePressPage;
