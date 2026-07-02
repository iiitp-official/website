import { useMemo } from 'react';
import PageHeader from '../components/shared/PageHeader';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import facultyDetails from '../data/faculty_details.json';

const FacultyPage = () => {
  // Extract and format valid faculty from faculty_details.json
  const validFaculty = useMemo(() => {
    return Object.entries(facultyDetails).map(([slug, details]) => {
      // Derive name from slug
      const nameParts = slug.split('-');
      const formattedName = nameParts.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      
      return {
        ...details,
        name: formattedName,
        slug: slug
      };
    });
  }, []);

  const cseFaculty = validFaculty.filter(f => f.department === 'CSE');
  const eceFaculty = validFaculty.filter(f => f.department === 'ECE');
  const ashFaculty = validFaculty.filter(f => f.department === 'ASH');

  const renderFacultyGrid = (facultyList) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16 h-full">
      {facultyList.map((person, index) => {
        const slug = person.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return (
        <Link
          to={`/people/faculty/${slug}`}
          key={index}
          className="bg-white dark:bg-surface-dark rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col h-full group relative"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800/50 pointer-events-none"></div>

          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mt-6 bg-gray-100 dark:bg-gray-800 relative z-10 overflow-hidden rounded-full shadow-md border-4 border-white dark:border-gray-800">
            {person.image ? (
              <img 
                src={person.image} 
                alt={person.name} 
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(person.name) + "&background=1B3A6B&color=fff&size=512";
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-50 dark:bg-gray-800 text-primary dark:text-gray-400">
                <span className="text-5xl font-serif opacity-30">{person.name.charAt(0)}</span>
              </div>
            )}
          </div>
          
          <div className="p-4 flex-grow flex flex-col items-center text-center bg-white dark:bg-surface-dark z-10 w-full mt-1">
            <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors line-clamp-1 w-full">
              {person.name}
            </h3>
            
            {/* Fixed height container for designation (up to 2 lines) */}
            <div className="h-10 flex items-start justify-center w-full mb-1">
              <p className="text-sm text-brand-red font-medium whitespace-pre-line line-clamp-2">
                {person.designation || "Faculty Member"}
              </p>
            </div>
            
            {/* Fixed height container for expertise to ensure consistent sizing */}
            <div className="h-16 w-full flex flex-col items-center">
              {person.expertise ? (
                <>
                  <div className="w-8 h-px bg-gray-200 dark:bg-gray-700 mb-1.5 mt-0.5 shrink-0"></div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed line-clamp-2 w-full">
                    <span className="text-gray-400 dark:text-gray-500 font-semibold block mb-0.5">Expertise:</span>
                    {person.expertise}
                  </p>
                </>
              ) : null}
            </div>
          </div>
        </Link>
      )})}
    </div>
  );

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Faculty Members" 
        subtitle="Meet the distinguished faculty of IIIT Pune"
        backgroundImage="/campus-image.jpg"
        compact={true}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8 border-b pb-4 dark:border-gray-800">
          <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mr-4">
            Computer Science and Engineering
          </h2>
          <Link 
            to="/departments/cse" 
            className="shrink-0 inline-flex items-center justify-center px-4 py-2 bg-blue-50 dark:bg-gray-800 text-primary dark:text-accent rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 font-medium text-sm group"
          >
            View CSE Department
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
        {renderFacultyGrid(cseFaculty)}

        <div className="flex items-center justify-between mb-8 border-b pb-4 dark:border-gray-800">
          <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mr-4">
            Electronics and Communication Engineering
          </h2>
          <Link 
            to="/departments/ece" 
            className="shrink-0 inline-flex items-center justify-center px-4 py-2 bg-blue-50 dark:bg-gray-800 text-primary dark:text-accent rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 font-medium text-sm group"
          >
            View ECE Department
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
        {renderFacultyGrid(eceFaculty)}

        <div className="flex items-center justify-between mb-8 border-b pb-4 dark:border-gray-800">
          <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mr-4">
            Applied Sciences and Humanities
          </h2>
          <Link 
            to="/departments/ash" 
            className="shrink-0 inline-flex items-center justify-center px-4 py-2 bg-blue-50 dark:bg-gray-800 text-primary dark:text-accent rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 font-medium text-sm group"
          >
            View ASH Department
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
        {renderFacultyGrid(ashFaculty)}
      </div>
    </div>
  );
};

export default FacultyPage;
