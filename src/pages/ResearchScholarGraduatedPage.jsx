import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import PhdResearchTabs from '../components/shared/PhdResearchTabs';

const ResearchScholarGraduatedPage = () => {
  const data = [
    {
      mis: "32205002",
      name: "Kratika Sharma",
      topic: "Application of Machine Learning Techniques For Spatiotemporal Assessment And Prediction Of Urban Growth In A Rapidly Developing Indian City",
      supervisor: "Dr. Ritu Tiwari, Dr. Arun Kumar Wadhwani, Dr. Priyank Jain",
      defenseDate: "Tuesday, 18\nFebruary 2025",
      department: "Computer Science & Engineering"
    },
    {
      mis: "31195003",
      name: "Prerna Rawat",
      topic: "Road Extraction and Vehicle Detection Using Deep Learning Framework",
      supervisor: "Dr. Bhupendra Singh",
      defenseDate: "Wednesday, 19\nFebruary 2025",
      department: "Computer Science & Engineering"
    },
    {
      mis: "31195004",
      name: "Shashi Pal Singh",
      topic: "Artificial Intelligence (AI) Based Framework for Text Mining and Analysis (TMA) for Human Language Technology (HLT)",
      supervisor: "Prof. Ritu Tiwari, Dr. Sanjeev Sharma",
      defenseDate: "Wednesday, 19\nFebruary 2025",
      department: "Computer Science & Engineering"
    },
    {
      mis: "32196001",
      name: "Anjali Malviya",
      topic: "Enhanced COVID-19 Prediction Through A Stacked Autoencoder-LSTM Framework For Anomaly Detection And Respiratory Disease Classification",
      supervisor: "Dr. Nagendra Kushwaha",
      defenseDate: "Tuesday, 16\nSeptember 2025",
      department: "Electronics & Communication Engineering"
    },
    {
      mis: "32205004",
      name: "Subrit Dikshit",
      topic: "Exploring And Advancing State-Of-The-Art Natural Language Processing Models Through Novel Architecture Development With Applications",
      supervisor: "Dr. Ritu Tiwari, Dr. Priyank Jain",
      defenseDate: "Thursday, 5\nMarch 2026",
      department: "Computer Science & Engineering"
    },
    {
      mis: "31215004",
      name: "Smita Baghel",
      topic: "Computer-Aided Diagnosis for Automated Non-Invasive Oral Cancer Detection Using Hybrid Deep Learning and Machine Learning Techniques",
      supervisor: "Prof. Anupam Shukla, Prof. Ritu Tiwari, Dr. Priyank Jain",
      defenseDate: "Monday, 15\nJune 2026",
      department: "Computer Science & Engineering"
    },
    {
      mis: "31195001",
      name: "Anu Priya",
      topic: "Vision Based Robot Navigation Using Deep Reinforcement Learning in Partially Known Environments",
      supervisor: "Dr. Sushant Kumar, Prof. Ritu Tiwari, Dr. Pooja Agrawal",
      defenseDate: "Friday, 7\nAugust 2026",
      department: "Computer Science & Engineering"
    }
  ].map((row, index) => ({ ...row, sno: index + 1 }));

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Graduated PhD Students">
        <PhdResearchTabs />
      </PageHeader>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-primary text-white dark:bg-gray-800">
                <tr>
                  <th className="p-3.5 font-semibold w-16 text-center">Sr. no.</th>
                  <th className="p-3.5 font-semibold">MIS No.</th>
                  <th className="p-3.5 font-semibold">Name</th>
                  <th className="p-3.5 font-semibold min-w-[250px]">PhD Thesis Title</th>
                  <th className="p-3.5 font-semibold min-w-[150px]">Supervisor</th>
                  <th className="p-3.5 font-semibold">PhD Defense Date</th>
                  <th className="p-3.5 font-semibold min-w-[220px]">Department</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                {data.map((row) => (
                  <tr key={row.mis} className="border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors last:border-b-0">
                    <td className="p-3.5 text-center border-r border-gray-100 dark:border-gray-800">{row.sno}.</td>
                    <td className="p-3.5 font-medium border-r border-gray-100 dark:border-gray-800">{row.mis}</td>
                    <td className="p-3.5 font-bold border-r border-gray-100 dark:border-gray-800">
                      <div>{row.name}</div>
                    </td>
                    <td className="p-3.5 border-r border-gray-100 dark:border-gray-800">{row.topic}</td>
                    <td className="p-3.5 text-accent hover:underline dark:text-accent-dark border-r border-gray-100 dark:border-gray-800 break-words whitespace-pre-wrap">
                      {row.supervisor.split(', ').map((sup, i) => (
                        <div key={i}>{sup}</div>
                      ))}
                    </td>
                    <td className="p-3.5 border-r border-gray-100 dark:border-gray-800 whitespace-pre-wrap">{row.defenseDate}</td>
                    <td className="p-3.5 font-medium">{row.department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-6 text-right text-sm text-gray-500 dark:text-gray-400">
          Last Updated: 22-10-2026
        </div>
      </div>
    </div>
  );
};

export default ResearchScholarGraduatedPage;
