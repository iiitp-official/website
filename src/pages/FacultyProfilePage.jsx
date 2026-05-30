import React, { useMemo, useState, useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import { 
  FileText, ArrowLeft, Mail, Phone, BookOpen, GraduationCap, 
  Link as LinkIcon, User, Award, Presentation, Briefcase, Users,
  ChevronRight, ChevronLeft
} from 'lucide-react';
import facultyDetails from '../data/faculty_details.json';
import peopleData from '../data/people.json';

const FacultyProfilePage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('biography');
  
  // Tab Scrolling Logic
  const tabsRef = useRef(null);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [showLeftScroll, setShowLeftScroll] = useState(false);

  const handleScroll = () => {
    if (!tabsRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
    setShowLeftScroll(scrollLeft > 0);
    // 5px threshold to account for rounding errors
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    // Initial check
    setTimeout(handleScroll, 100);
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scrollTabs = (dir) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' });
    }
  };

  // Combine the clean name/designation from people.json with the rich data from faculty_details.json
  const profile = useMemo(() => {
    const details = facultyDetails[slug];
    if (!details) return null;

    const cleanEntry = peopleData.faculty.find(p => {
      if (!p.name) return false;
      const pSlug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return slug.includes(pSlug) || pSlug.includes(slug.replace('dr-', '').replace('prof-', ''));
    });

    let rawData = details.raw_data || '';

    // Parse contact info from raw data if available
    let email = '';
    let phone = '';
    let researchLinks = [];

    if (rawData) {
      const emailMatch = rawData.match(/Email:\s*([^\n]+)/i);
      if (emailMatch) email = emailMatch[1].trim();

      const phoneMatch = rawData.match(/Phone\+?\s*([^\n]+)/i) || rawData.match(/Phone:\s*([^\n]+)/i);
      if (phoneMatch) phone = phoneMatch[1].trim();

      // Extract links like google scholar, orcid
      const httpMatches = rawData.match(/https?:\/\/[^\s]+/g);
      if (httpMatches) {
        researchLinks = httpMatches.map(link => link.replace(/["'].*$/, ''));
      }
    }

    // Guess department from text
    let department = 'Faculty Member';
    const textToCheck = (rawData || details.bio || '').toLowerCase();
    if (textToCheck.includes('computer science') || textToCheck.includes('cse')) {
      department = 'Computer Science & Engineering';
    } else if (textToCheck.includes('electronics') || textToCheck.includes('ece') || textToCheck.includes('vlsi')) {
      department = 'Electronics & Communication Engineering';
    } else if (textToCheck.includes('applied science') || textToCheck.includes('humanities') || textToCheck.includes('mathematics') || textToCheck.includes('physics')) {
      department = 'Applied Science & Humanities';
    }

    return {
      ...details,
      name: cleanEntry?.name && cleanEntry.name !== 'Language' ? cleanEntry.name : details.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      designation: cleanEntry?.designation || 'Faculty Member',
      image: cleanEntry?.image || details.image,
      department,
      email,
      phone,
      researchLinks,
      books_chapters: details.books_chapters || '',
      publications: details.publications || '',
      patents: details.patents || '',
      seminars: details.seminars || '',
      projects: details.projects || '',
      supervisions: details.supervisions || '',
    };
  }, [slug]);

  if (!profile) {
    return <Navigate to="/people/faculty" replace />;
  }

  const tabs = [
    { id: 'biography', label: 'Biography', icon: <User className="w-4 h-4 mr-2" /> },
    { id: 'books', label: 'Book/Chapter', icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { id: 'publications', label: 'Publications', icon: <FileText className="w-4 h-4 mr-2" /> },
    { id: 'patents', label: 'Patent', icon: <Award className="w-4 h-4 mr-2" /> },
    { id: 'seminars', label: 'Seminars/Workshops', icon: <Presentation className="w-4 h-4 mr-2" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { id: 'supervisions', label: 'Supervisions', icon: <Users className="w-4 h-4 mr-2" /> },
    { id: 'research', label: 'Research & Links', icon: <LinkIcon className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="bg-surface dark:bg-bg-dark min-h-screen pb-20">
      
      <PageHeader
        title="Faculty Profile"
        backgroundImage="/campus-image.jpg"
      >
        <Link
          to="/people/faculty"
          className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wide font-medium group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all faculty
        </Link>
      </PageHeader>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* TOP SECTION: Photo and Info side-by-side on desktop */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800/50 pointer-events-none"></div>

          {/* Profile Image */}
          <div className="rounded-xl border-4 border-white dark:border-gray-800 shadow-md bg-white dark:bg-gray-800 shrink-0 relative z-10 overflow-hidden flex items-center justify-center">
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="w-auto h-auto max-h-40 md:max-h-64 max-w-[14rem] md:max-w-[18rem] object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(profile.name) + "&background=1B3A6B&color=fff&size=512";
                }}
              />
            ) : (
              <div className="w-40 h-40 md:w-56 md:h-56 flex items-center justify-center text-5xl text-primary font-serif">
                {profile.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Profile Details */}
          <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left z-10 w-full">
            <h1 className="text-xl md:text-2xl font-bold font-serif text-gray-900 dark:text-white mb-2">
              {profile.name}
            </h1>
            <div className="text-lg text-brand-red font-semibold mb-2 flex flex-col space-y-0.5">
              {profile.designation.split('\n').map((desig, idx) => (
                <span key={idx}>{desig.trim()}</span>
              ))}
            </div>
            {profile.department !== 'Faculty Member' && (
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 uppercase tracking-wider text-xs">
                {profile.department}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-gray-700 dark:text-gray-300">
              
              {/* Left Column: Education & Links */}
              <div className="flex flex-col gap-6">
                {/* Education */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center mr-3 shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Educational Qualification</h4>
                    {profile.education ? (
                      <ul className="space-y-1">
                        {profile.education.split('\n').filter(line => line.trim() !== '').map((line, idx) => (
                          <li key={idx} className="text-sm">{line.trim()}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-sm italic text-gray-500">Not provided</span>
                    )}
                  </div>
                </div>

                {/* Research Links */}
                {profile.researchLinks && profile.researchLinks.length > 0 && (
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center mr-3 shrink-0">
                      <LinkIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-2">Research Profiles</h4>
                      <div className="flex flex-wrap gap-2">
                        {profile.researchLinks.map((link, idx) => {
                          let type = "Profile";
                          if (link.includes('scholar.google')) type = "Google Scholar";
                          else if (link.includes('orcid')) type = "ORCID";
                          else if (link.includes('scopus')) type = "Scopus";

                          return (
                            <a
                              key={idx}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 bg-gray-50 hover:bg-red-50 dark:bg-gray-800/50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-brand-red rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-brand-red-dark transition-colors inline-flex items-center"
                            >
                              {type}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Contact */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center mr-3 shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white">Email Address</h4>
                    {profile.email ? (
                      <a href={`mailto:${profile.email}`} className="text-xs text-primary hover:underline">{profile.email}</a>
                    ) : (
                      <span className="text-xs italic text-gray-500">Not provided</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center mr-3 shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white">Phone Number</h4>
                    {profile.phone ? (
                      <span className="text-xs">{profile.phone}</span>
                    ) : (
                      <span className="text-xs italic text-gray-500">Not provided</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {profile.resume && (
              <div className="mt-6 md:mt-8">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors shadow-sm text-sm font-semibold"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Detailed Resume
                </a>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM SECTION: Sticky Tabs & Content */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 min-h-[400px] relative">
          
          {/* Sticky Tab Bar */}
          <div className="sticky top-20 z-30 bg-white dark:bg-surface-dark rounded-t-2xl border-b border-gray-200 dark:border-gray-800 shadow-sm relative group overflow-hidden">
            
            {showLeftScroll && (
              <button 
                onClick={() => scrollTabs('left')}
                className="absolute left-0 top-0 bottom-0 z-10 w-12 flex items-center justify-start pl-2 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-surface-dark dark:via-surface-dark/90 text-gray-500 hover:text-brand-red transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div 
              ref={tabsRef}
              onScroll={handleScroll}
              className="hide-scrollbar overflow-x-auto flex relative scroll-smooth"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center whitespace-nowrap px-6 py-4 font-medium text-xs transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-brand-red dark:text-brand-red-dark bg-red-50/50 dark:bg-gray-800/50'
                      : 'text-gray-600 hover:text-brand-red dark:text-gray-400 dark:hover:text-brand-red-dark hover:bg-red-50/30 dark:hover:bg-gray-800/30'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red dark:bg-brand-red-dark"></span>
                  )}
                </button>
              ))}
            </div>

            {showRightScroll && (
              <button 
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-0 bottom-0 z-10 w-16 flex items-center justify-end pr-3 bg-gradient-to-l from-white via-white/90 to-transparent dark:from-surface-dark dark:via-surface-dark/90 text-gray-500 hover:text-brand-red transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 animate-pulse group-hover:animate-none" />
              </button>
            )}
          </div>

          {/* Tab Content Area */}
          <div className="p-8">
            
            {activeTab === 'biography' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Biography</h2>
                <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {profile.bio || "No biography provided."}
                </p>
              </div>
            )}

            {activeTab === 'books' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Books & Book Chapters</h2>
                {profile.books_chapters ? (
                  <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {profile.books_chapters}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500 italic">No book or chapter details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'publications' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Publications</h2>
                {profile.publications ? (
                  Array.isArray(profile.publications) ? (
                    <ul className="space-y-6">
                      {profile.publications.map((pub, idx) => (
                        <li key={idx} className="flex flex-col relative pl-6">
                          <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-brand-red"></span>
                          {pub.link ? (
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-900 dark:text-white hover:text-brand-red dark:hover:text-brand-red-dark transition-colors">
                              {pub.title}
                            </a>
                          ) : (
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">{pub.title}</h3>
                          )}
                          {pub.authors && <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">{pub.authors}</span>}
                          {pub.journal && <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{pub.journal}</span>}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {profile.publications}
                    </p>
                  )
                ) : (
                  <p className="text-sm text-gray-500 italic">No publication details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'patents' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Patents</h2>
                {profile.patents ? (
                  <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {profile.patents}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500 italic">No patent details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'seminars' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Seminars & Workshops</h2>
                {profile.seminars ? (
                  Array.isArray(profile.seminars) ? (
                    <ul className="space-y-6">
                      {profile.seminars.map((item, idx) => (
                        <li key={idx} className="flex flex-col relative pl-6">
                          <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-brand-red"></span>
                          {item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-900 dark:text-white hover:text-brand-red dark:hover:text-brand-red-dark transition-colors">
                              {item.title}
                            </a>
                          ) : (
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
                          )}
                          {item.authors && <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">{item.authors}</span>}
                          {item.journal && <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{item.journal}</span>}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {profile.seminars}
                    </p>
                  )
                ) : (
                  <p className="text-sm text-gray-500 italic">No seminar or workshop details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
                {profile.projects ? (
                  <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {profile.projects}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500 italic">No project details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'supervisions' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Supervisions</h2>
                {profile.supervisions ? (
                  <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {profile.supervisions}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500 italic">No supervision details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'research' && (
              <div className="animate-fade-in-up">
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Research Profiles & Links</h2>
                {profile.researchLinks && profile.researchLinks.length > 0 ? (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.researchLinks.map((link, idx) => {
                      let type = "Research Profile";
                      if (link.includes('scholar.google')) type = "Google Scholar";
                      else if (link.includes('orcid')) type = "ORCID";
                      else if (link.includes('scopus')) type = "Scopus";

                      return (
                        <li key={idx}>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
                          >
                            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                              <BookOpen className="w-5 h-5" />
                            </div>
                            <div className="flex-grow overflow-hidden">
                              <h4 className="text-sm text-gray-900 dark:text-white font-semibold">{type}</h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400 truncate w-full">{link}</p>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 italic">No external research links available.</p>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfilePage;
