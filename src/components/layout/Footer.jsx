import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [hits, setHits] = useState(0);
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Simulated base counts
    const baseHits = 9514;
    const baseVisitors = 4289;
    
    // Process Hits (Increments on every page load)
    let localHits = parseInt(localStorage.getItem('site_hits') || '0', 10);
    localHits += 1;
    localStorage.setItem('site_hits', localHits.toString());
    setHits(baseHits + localHits);

    // Process Visitors (Increments once per session)
    let localVisitors = parseInt(localStorage.getItem('site_visitors') || '0', 10);
    if (!sessionStorage.getItem('visited_this_session')) {
      localVisitors += 1;
      localStorage.setItem('site_visitors', localVisitors.toString());
      sessionStorage.setItem('visited_this_session', 'true');
    }
    setVisitors(baseVisitors + localVisitors);
  }, []);

  // Format numbers into arrays of digits
  const formatCount = (count) => count.toString().padStart(4, '0').split('');

  return (
    <footer className="bg-footer text-gray-300 border-t border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> About Us</Link></li>
                <li><Link to="/academics" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> Academics</Link></li>
                <li><Link to="/research" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> Research</Link></li>
                <li><Link to="/placement" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> Placement</Link></li>
                <li><Link to="/careers" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> Careers</Link></li>
              </ul>
              <ul className="space-y-3">
                <li><Link to="/notice" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> Notice Board</Link></li>
                <li><Link to="/e-tender" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> E-Tender</Link></li>
                <li><Link to="/library" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> Library</Link></li>
                <li><Link to="/fees" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> Fees Structure</Link></li>
                <li><Link to="/contact" className="hover:text-accent-dark transition-colors flex items-center group"><ExternalLink size={14} className="mr-2 text-gray-500 group-hover:text-accent-dark" /> Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Address Column */}
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Locate Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-dark mr-3 mt-1 shrink-0" />
                <p className="leading-relaxed">
                  Indian Institute of Information Technology Pune<br />
                  Survey No. 25 & 27, Near Bopdev Ghat,<br />
                  Kondhwa Annexe, A/P: Pisoli (MC),<br />
                  Taluka: Haveli, District: Pune - 411048<br />
                  Maharashtra, India
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent-dark mr-3 shrink-0" />
                <p>+91 (020) 24xxxxxx</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent-dark mr-3 shrink-0" />
                <p>info@iiitp.ac.in</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <div className="text-gray-400">
            &copy; {new Date().getFullYear()} IIIT Pune. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Visitors</span>
              <div className="flex space-x-1">
                {formatCount(visitors).map((digit, idx) => (
                  <span key={`v-${idx}`} className="bg-purple-600 text-white px-2 py-1 rounded shadow-inner font-mono font-bold tracking-widest text-base">
                    {digit}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Hits</span>
              <div className="flex space-x-1">
                {formatCount(hits).map((digit, idx) => (
                  <span key={`h-${idx}`} className="bg-orange-600 text-white px-2 py-1 rounded shadow-inner font-mono font-bold tracking-widest text-base">
                    {digit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
            Language: English
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
