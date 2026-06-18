import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const CareersPage = () => {
  const jobs = [
    {
      title: "RECRUITMENT NOTICE FOR THE POST OF ASSISTANT PROFESSOR (TEMPORARY)",
      buttons: [
        { label: "Apply Now", link: "https://iiitprec.samarth.edu.in/", isExternalLink: true },
        { label: "Details", file: "16.06.2026 ASSISTANT PROFESSOR TEMPORARY FINAL VERSION.pdf" }
      ]
    },
    {
      title: "Cancellation of Advertisement for the Post of Assistant Registrar",
      buttons: [
        { label: "Application", file: "1.pdf" },
        { label: "Details", file: "2.pdf" },
      ]
    },
    {
      title: "Advertisement for various research positions under Anusandhan National Research Foundation -Partnerships for Accelerated Innovation and Research (ANRF-PAIR) initiative",
      buttons: [
        { label: "Application", file: "3.docx" },
        { label: "Details", file: "4.pdf" },
        { label: "Corrigendum", file: "5.pdf" },
      ]
    },
    {
      title: "Advertisement for the Post of Project Associate-I under the Project SMDP-Chips to Startup (C2S)",
      buttons: [
        { label: "Application", file: "6.pdf" },
        { label: "Details", file: "7.pdf" },
      ]
    },
    {
      title: "Advertisement for the Post of Junior Research Fellow (JRF) in Sponsored Project",
      buttons: [
        { label: "Application", file: "8.pdf" },
        { label: "Details", file: "9.pdf" },
      ]
    },
    {
      title: "RECRUITMENT NOTICE FOR THE POST OF ADJUNCT ASSISTANT PROFESSOR (AAP) (ON TEMPORARY BASIS)",
      buttons: [
        { label: "Application", file: "10.pdf" },
        { label: "Details", file: "11.pdf" },
        { label: "Corrigendum", file: "12.pdf" },
      ]
    },
    {
      title: "WALK-IN-INTERVIEW FOR THE POST OF ADVISOR (CIVIL) ON CONTRACT BASIS – THROUGH OUTSOURCING AGENCY",
      buttons: [
        { label: "Application", file: "13.pdf" },
        { label: "Details", file: "14.pdf" },
        { label: "Corrigendum", file: "15.pdf" },
      ]
    },
    {
      title: "Advertisement for the Post of Research Associate-I in Sponsored Project",
      buttons: [
        { label: "Application", file: "16.pdf" },
        { label: "Details", file: "17.pdf" },
      ]
    },
    {
      title: "Advertisement for the Post of Intern in Sponsored Project",
      buttons: [
        { label: "Application", file: "18.pdf" },
        { label: "Details", file: "19.pdf" },
      ]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Careers @ IIIT Pune" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-md border border-gray-100 dark:border-gray-800 w-full overflow-hidden">
          <div className="flex flex-col">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors last:border-b-0"
              >
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 md:mb-0 md:pr-8 leading-relaxed flex-1">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {job.buttons.map((btn, bidx) => (
                    <a
                      key={bidx}
                      href={btn.isExternalLink ? btn.link : `/careers/${btn.file}`}
                      target="_blank" rel="noopener noreferrer"

                      className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-xs font-semibold py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-95 text-center"
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
