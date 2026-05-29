import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, Download, Quote, ChevronLeft, ChevronRight, GraduationCap, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Testimonials data from iiitp.ac.in/testimonials ────────────────────────
const testimonials = [
  {
    id: 1,
    name: 'Apoorv Kumar',
    batch: 'B.Tech CSE, Class of 2024',
    quote: 'IIIT Pune\'s competitive coding culture is truly exceptional. The environment here pushed me to become a Codeforces Grandmaster and a 7-star Coder on CodeChef. The faculty\'s encouragement and peer learning made all the difference.',
    company: 'Codeforces Grandmaster · AIR 9 (CodeChef)',
    avatar: 'AK',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    name: 'Anshul Bansal',
    batch: 'B.Tech CSE, Class of 2024',
    quote: 'The rigorous curriculum, combined with hands-on projects and internships, prepared me exceptionally well for technical interviews. IIIT Pune\'s holistic approach to education is truly commendable.',
    company: 'Placed at Microsoft',
    avatar: 'AB',
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    id: 3,
    name: 'Shweta More',
    batch: 'B.Tech ECE, Class of 2023',
    quote: 'The VLSI and embedded systems labs at IIIT Pune are world-class. Our professors always ensured we stayed ahead of industry trends, which gave me a significant edge in my core electronics placements.',
    company: 'Placed at Qualcomm',
    avatar: 'SM',
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 4,
    name: 'Rahul Deshmukh',
    batch: 'M.Tech CSE, Class of 2023',
    quote: 'The research ecosystem at IIIT Pune is outstanding. Access to funded projects, publications, and a strong mentorship network enabled me to pursue cutting-edge research and secure a coveted research position.',
    company: 'Research Scholar at IISc Bangalore',
    avatar: 'RD',
    color: 'from-teal-600 to-teal-800'
  },
  {
    id: 5,
    name: 'Priya Kulkarni',
    batch: 'B.Tech CSE, Class of 2024',
    quote: 'From winning Smart India Hackathon to getting placed at a top product company — IIIT Pune gave me every opportunity to excel. The culture here celebrates innovation and rewards hard work.',
    company: 'SIH Winner · Placed at Flipkart',
    avatar: 'PK',
    color: 'from-rose-600 to-rose-800'
  },
  {
    id: 6,
    name: 'Aditya Nair',
    batch: 'B.Tech CSE, Class of 2025',
    quote: 'The mandatory internship program and industry collaborations at IIIT Pune are game-changers. I had real work experience before even graduating, which made my transition to the industry seamless.',
    company: 'SDE Intern at Amazon',
    avatar: 'AN',
    color: 'from-orange-600 to-orange-800'
  }
];

const ImportantLinks = () => {
  const [activeTab, setActiveTab] = useState('links');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const t = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-bg dark:bg-bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* ── LEFT COLUMN: Links & Downloads (60%) ──────────────────────── */}
          <div className="w-full lg:w-[60%] bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col lg:flex-row min-h-[480px]">

            {/* Sidebar Tabs */}
            <div className="lg:w-[38%] bg-primary dark:bg-gray-900 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar border-b lg:border-b-0 lg:border-r border-blue-900/30">
              <button
                onClick={() => setActiveTab('links')}
                className={`flex-shrink-0 text-left px-5 py-5 font-bold font-serif border-b-4 lg:border-b-0 lg:border-l-4 transition-colors whitespace-nowrap text-base ${
                  activeTab === 'links'
                    ? 'text-white border-accent bg-blue-800/40 dark:bg-gray-800'
                    : 'text-blue-300 border-transparent hover:text-white hover:bg-blue-800/20 dark:hover:bg-gray-800/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <ExternalLink size={16} className="shrink-0" />
                  Important Links
                </span>
              </button>
              <button
                onClick={() => setActiveTab('downloads')}
                className={`flex-shrink-0 text-left px-5 py-5 font-bold font-serif border-b-4 lg:border-b-0 lg:border-l-4 transition-colors whitespace-nowrap text-base ${
                  activeTab === 'downloads'
                    ? 'text-white border-accent bg-blue-800/40 dark:bg-gray-800'
                    : 'text-blue-300 border-transparent hover:text-white hover:bg-blue-800/20 dark:hover:bg-gray-800/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Download size={16} className="shrink-0" />
                  Downloads
                </span>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 md:p-8 overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 'links' && (
                  <motion.div
                    key="links"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-6 flex items-center">
                      <ExternalLink className="mr-2 text-accent dark:text-accent-dark" size={20} />
                      Institutional Links
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        { name: 'Ministry of Education', url: 'https://www.education.gov.in/' },
                        { name: 'National Informatics Centre (NIC)', url: 'https://www.nic.gov.in/' },
                        { name: 'National Testing Agency (NTA)', url: 'https://nta.ac.in/' },
                        { name: 'JoSAA', url: 'https://josaa.nic.in/' },
                        { name: 'CSAB', url: 'https://csab.nic.in/' },
                        { name: 'AICTE', url: 'https://www.aicte.gov.in/' },
                        { name: 'National Scholarship Portal', url: 'https://scholarships.gov.in/' },
                        { name: 'Swayam Portal', url: 'https://swayam.gov.in/' },
                        { name: 'National Digital Library', url: 'https://www.ndl.gov.in/' },
                      ].map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent-dark group font-medium border-b border-gray-100 dark:border-gray-800/50 pb-3 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/40 dark:bg-accent-dark/40 mr-3 group-hover:bg-accent dark:group-hover:bg-accent-dark transition-colors shrink-0" />
                          {link.name}
                          <ExternalLink size={11} className="ml-auto opacity-0 group-hover:opacity-70 transition-opacity shrink-0" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'downloads' && (
                  <motion.div
                    key="downloads"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-6 flex items-center">
                      <Download className="mr-2 text-accent dark:text-accent-dark" size={20} />
                      Forms &amp; Documents
                    </h3>
                    <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
                      {[
                        { name: 'Medical Reimbursement Claim Form', path: '/downloads/Medical reimbursement CLAIM FORM.pdf' },
                        { name: 'Children Education Allowance Form', path: '/downloads/cea-form-iiitp.pdf' },
                        { name: 'No Dues Form', path: '/downloads/NO DUES FORM.pdf' },
                        { name: 'Caution Money Return Form', path: '/downloads/caution money return form.pdf' },
                        { name: 'Admission Cancellation / Withdrawal Form', path: '/downloads/ADMISSION CANCEL FORM.pdf' },
                        { name: 'Library Membership Form (Employees)', path: '/downloads/IIITP_Library-Membership_Form_for-All Employees.pdf' },
                        { name: 'Library Membership Form (Students & RS)', path: '/downloads/IIITP_Library-Membership_Form_for-Students&RS.pdf' },
                        { name: 'Travelling Allowance / Adjustment for Tour', path: '/downloads/TRAVELLING ALLOWANCEADJUSTMENT FOR TOUR.pdf' },
                        { name: 'Form for Dispatch of Official Letters', path: '/downloads/FORM FOR DISPATCH OF OFFICIAL LETTER ETC BY SPEED POST.pdf' },
                        { name: 'Official Memento Approval Form', path: '/downloads/OFFICIAL MEMENTO ISSUANCE FORM.pdf' },
                        { name: 'Vehicle Requisition Form', path: '/downloads/IIITP_Vehicle_form (1)_0.pdf' },
                        { name: 'Petty Contingency Form', path: '/downloads/PETTY CONTINGENT VOUCHER.pdf' },
                        { name: 'Honorarium Form', path: '/downloads/PRE-RECEIPT HONORARIUM FORM.pdf' },
                        { name: 'NOC Office Memorandum', path: '/downloads/NOC_office_Memorandum.pdf' },
                        { name: 'Odd Semester Ph.D. Registration (AY 2025-26)', path: '/downloads/Odd Sem Registration Instruction for PhD.pdf' },
                        { name: 'Policy for Attending Conferences / Workshops', path: '/downloads/Policy for attending at conferences, workshops, seminars, training programs, etc. - regarding_compressed (1).pdf' },
                        { name: 'Imprest Money OM (IIITP)', path: '/downloads/imprest money OM (IIITP)_compressed.pdf' },
                        { name: 'Proposal for Sanction of Tour Form', path: '/downloads/Proposal for Sanction of Tour Form Regarding.pdf' },
                        { name: 'Travelling Allowance (Students)', path: '/downloads/Travelling Allowance for the student of the Institute.pdf' },
                        { name: 'Academic Progress PHD Format', path: '/downloads/ACADEMIC PROGRESS PHD Format.pdf' },
                        { name: 'Leave Application for Outsourced Staff', path: '/downloads/Leave Application for Outsource Employees.pdf' },
                        { name: 'Joining Report', path: '/downloads/Joining Report.pdf' },
                        { name: 'Leave Application (ALL)', path: '/downloads/Leave Applications All.pdf' },
                        { name: 'Registration / Re-registration Form (BTech/MTech/PhD)', path: '/downloads/Registration & Re-registration Form for BTech MTech & PhD.pdf' },
                        { name: 'Vehicle Requisition Form (VEHICLE)', path: '/downloads/VEHICLE REQUISITION FORM.pdf' },
                        { name: 'No Dues Certificate (B.Tech & M.Tech)', path: '/downloads/No dues BTech and MTech.pdf' },
                        { name: 'Certificate for Dispatch by Speed Post', path: '/downloads/CERITIFICATE FOR DISPATCH BY SPEED POST.pdf' },
                        { name: 'Certificate Course Brochure', path: '/downloads/Brochure_Batch-II.pdf' },
                        { name: 'Sexual Harassment of Women at Workplace Act 2013', path: '/downloads/A2013-14.pdf' },
                        { name: 'Hostel Application Form 2025', path: '/downloads/Hostel-application-form- 2025 _Updated.pdf' },
                        { name: 'SBI Education Loan Contact Details', path: '/downloads/SBI Education Loan Check List and Contact Details_0.pdf' },
                        { name: 'Indent Form for Consumable Items', path: '/downloads/Indent for stationery consumable items.pdf' },
                        { name: 'Internet Credentials Form', path: '/downloads/Internet Login Form.pdf' },
                      ].map((doc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all group"
                        >
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center pr-3">
                            <span className="w-8 h-8 rounded bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mr-3 font-bold text-[10px] uppercase shrink-0">
                              PDF
                            </span>
                            <span className="line-clamp-1">{doc.name}</span>
                          </span>
                          <a
                            href={doc.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent dark:text-gray-500 dark:hover:text-accent-dark p-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-colors shrink-0"
                          >
                            <Download size={16} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Student Voices (40%) ────────────────────────── */}
          <div
            className="w-full lg:w-[40%] bg-primary dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold font-serif text-white flex items-center gap-2">
                  <GraduationCap size={22} className="text-blue-300" />
                  Student Voices
                </h3>
                <p className="text-blue-300 text-xs mt-1 font-medium uppercase tracking-widest">What our alumni say</p>
              </div>
              {/* Dot navigation */}
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      idx === currentTestimonial
                        ? 'w-6 h-2 bg-white'
                        : 'w-2 h-2 bg-blue-400/40 hover:bg-blue-300/60'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="flex-1 flex flex-col justify-between px-8 pb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full"
                >
                  {/* Big quote icon */}
                  <Quote className="text-white/10 mb-4" size={64} />

                  {/* Quote text */}
                  <p className="text-blue-100 dark:text-gray-300 text-base leading-relaxed italic font-serif flex-1">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-white text-sm shadow-lg shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base leading-tight">{t.name}</h4>
                      <p className="text-blue-300 text-xs mt-0.5">{t.batch}</p>
                      <p className="text-blue-200 text-xs font-semibold flex items-center gap-1 mt-0.5">
                        <Briefcase size={11} />
                        {t.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-blue-300 text-xs font-medium tabular-nums">
                  {currentTestimonial + 1} / {testimonials.length}
                </span>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
