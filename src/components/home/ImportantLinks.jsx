import React, { useState } from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImportantLinks = () => {
  const [activeTab, setActiveTab] = useState('links');

  return (
    <section className="py-16 bg-bg dark:bg-bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full Width Container */}
        <div className="w-full bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col lg:flex-row min-h-[480px]">

          {/* Sidebar Tabs */}
          <div className="lg:w-[25%] bg-primary dark:bg-gray-900 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar border-b lg:border-b-0 lg:border-r border-blue-900/30">
            <button
              onClick={() => setActiveTab('links')}
              className={`flex-shrink-0 text-left px-6 py-6 font-bold font-serif border-b-4 lg:border-b-0 lg:border-l-4 transition-colors whitespace-nowrap text-lg ${
                activeTab === 'links'
                  ? 'text-white border-accent bg-blue-800/40 dark:bg-gray-800'
                  : 'text-blue-300 border-transparent hover:text-white hover:bg-blue-800/20 dark:hover:bg-gray-800/50'
              }`}
            >
              <span className="flex items-center gap-3">
                <ExternalLink size={20} className="shrink-0" />
                Important Links
              </span>
            </button>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`flex-shrink-0 text-left px-6 py-6 font-bold font-serif border-b-4 lg:border-b-0 lg:border-l-4 transition-colors whitespace-nowrap text-lg ${
                activeTab === 'downloads'
                  ? 'text-white border-accent bg-blue-800/40 dark:bg-gray-800'
                  : 'text-blue-300 border-transparent hover:text-white hover:bg-blue-800/20 dark:hover:bg-gray-800/50'
              }`}
            >
              <span className="flex items-center gap-3">
                <Download size={20} className="shrink-0" />
                Downloads
              </span>
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 md:p-10 overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === 'links' && (
                <motion.div
                  key="links"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-8 flex items-center">
                    <ExternalLink className="mr-3 text-accent dark:text-accent-dark" size={24} />
                    Institutional Links
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-6">
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
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent-dark group font-medium border-b border-gray-100 dark:border-gray-800/50 pb-4 transition-colors text-lg"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent/40 dark:bg-accent-dark/40 mr-4 group-hover:bg-accent dark:group-hover:bg-accent-dark transition-colors shrink-0" />
                        {link.name}
                        <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-70 transition-opacity shrink-0" />
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
                  <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-8 flex items-center">
                    <Download className="mr-3 text-accent dark:text-accent-dark" size={24} />
                    Forms &amp; Documents
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[330px] overflow-y-auto pr-2 custom-scrollbar">
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
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all group"
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
                          className="text-gray-400 hover:text-accent dark:text-gray-500 dark:hover:text-accent-dark p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-colors shrink-0"
                        >
                          <Download size={18} />
                        </a>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImportantLinks;
