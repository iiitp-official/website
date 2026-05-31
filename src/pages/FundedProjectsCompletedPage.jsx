import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const FundedProjectsCompletedPage = () => {
  const data = [
    {
      sno: 1,
      faculty: "Dr. Bhupendra Singh",
      category: "Sponsored Research",
      agency: "NCoE-DSCI, MeitY",
      pi: "Co-PI",
      title: "Unified Drone Forensics Tool (UDFT)",
      startDate: "Feb-23",
      status: "Completed",
      duration: "9 months",
      completionDate: "15-Dec-23",
      grant: "5.6 Lakh"
    },
    {
      sno: 2,
      faculty: "Dr. Nitesh K Bharadwaj",
      category: "Sponsored Research Project",
      agency: "NCoE-DSCI, MeitY",
      pi: "CO-PI",
      title: "Unified Drone Forensics Tool (UDFT) for Fly Path for Drone",
      startDate: "-",
      status: "Completed",
      duration: "-",
      completionDate: "-",
      grant: "-"
    },
    {
      sno: 3,
      faculty: "Dr. Ranjith Ravindranatahan Nair",
      category: "Externally Sponsored",
      agency: "DST-SERB",
      pi: "Dr. Ranjith Ravindranatahan Nair",
      title: "Anamoly detection and its countermeasures in a cyber-physical system using advanced control and estimation techniques",
      startDate: "-",
      status: "Completed",
      duration: "-",
      completionDate: "-",
      grant: "-"
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Funded Projects (Completed)" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="bg-primary dark:bg-primary-dark px-6 py-4">
            <h2 className="text-2xl font-bold text-center text-white">
              Funded Projects - Completed
            </h2>
          </div>
          <div className="p-6 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse border border-gray-300 dark:border-gray-700">
                <thead className="bg-[#0b2447] text-white">
                  <tr>
                    <th className="p-3 border border-gray-400">S.No.</th>
                    <th className="p-3 border border-gray-400">Name of the IIIT Pune Faculty</th>
                    <th className="p-3 border border-gray-400">Project Category</th>
                    <th className="p-3 border border-gray-400">Funding Agency</th>
                    <th className="p-3 border border-gray-400">PI/Co-PI</th>
                    <th className="p-3 border border-gray-400">Title of the Project</th>
                    <th className="p-3 border border-gray-400">Start Date</th>
                    <th className="p-3 border border-gray-400">Status</th>
                    <th className="p-3 border border-gray-400">Duration</th>
                    <th className="p-3 border border-gray-400">Completion Date</th>
                    <th className="p-3 border border-gray-400">Grant Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  {data.map((row) => (
                    <tr key={row.sno} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="p-3 border border-gray-300 dark:border-gray-700 text-center">{row.sno}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700">{row.faculty}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700">{row.category}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700">{row.agency}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700">{row.pi}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700">{row.title}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700 text-center">{row.startDate}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700 text-center">{row.status}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700 text-center">{row.duration}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700 text-center">{row.completionDate}</td>
                      <td className="p-3 border border-gray-300 dark:border-gray-700">{row.grant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundedProjectsCompletedPage;
