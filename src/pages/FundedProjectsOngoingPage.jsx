import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const FundedProjectsOngoingPage = () => {
  const data = [
    {
      sno: 1,
      faculty: "Dr. Dheeraj Dubey",
      category: "Externally Sponsored",
      agency: "ART PARK (IISC) KARNATAKA",
      pi: "Jahnvi Tiwari (PI) & Dheeraj Dubey (Co-PI)",
      title: "5G-V2X Enabled Cooperative Blind-Spot Detection System with RIS-Assisted VANETs",
      startDate: "Feb-23",
      status: "Ongoing",
      duration: "1 year",
      completionDate: "April 2026-27",
      grant: "22 lakh (approx)"
    },
    {
      sno: 2,
      faculty: "Divya Chaturvedi",
      category: "Externally Sponsored",
      agency: "CSIR",
      pi: "PI: Dr. Divya Chaturvedi, Co-PI: DR. Shiv Narayan, Principal Scientist, CSIR NAL, Bangalore",
      title: "Design and Development of Substrate Integrated Waveguide (SIW) based Millimeter Wave Beam-Steerable Antenna Array Systems for 5G Networks",
      startDate: "-",
      status: "Ongoing",
      duration: "3 years",
      completionDate: "16.07. 2025 - 15.7.2028",
      grant: "30 Lakhs"
    },
    {
      sno: 3,
      faculty: "Dr. Bhupendra Sing & Dr Sanjeev Sharma",
      category: "Externally Sponsored",
      agency: "MeitY",
      pi: "PI Dr. Bhupendra Singh, Co-PI Dr. Sanjeev Sharma",
      title: "Next Generation Data Carving and Preservation Techniques for Storage Drive Forensics",
      startDate: "-",
      status: "Ongoing",
      duration: "2 Years",
      completionDate: "From Aug 2025",
      grant: "1.93Cr"
    },
    {
      sno: 4,
      faculty: "Dr. Habila Basumatary, Dr. Sanjeev Sharma, Dr. Bhupendra Singh Dr. Sushant Kumar, Co-PI: Dr. Dheeraj Dubey, Dr. Dipen Bepari, Dr. Shivangi Shukla",
      category: "Externally Sponsored",
      agency: "ANRF",
      pi: "Dr. Habila Basumatary, Dr. Sanjeev Sharma, Dr. Bhupendra Singh Dr. Sushant Kumar, Co-PI: Dr. Dheeraj Dubey, Dr. Dipen Bepari, Dr. Shivangi Shukla",
      title: "Technologies for implementation of DPDPA Rules 2025",
      startDate: "-",
      status: "Ongoing",
      duration: "5 Years",
      completionDate: "From Sept 2025",
      grant: "4.38 Crores"
    },
    {
      sno: 5,
      faculty: "Dr. Nagendra Kushwaha",
      category: "Externally Sponsored",
      agency: "Ministry of Electronics & Information Technology, Govt. of India",
      pi: "PI",
      title: "Power and Space optimization in Internet of Things (IoT) System-on-Chip (SoC)",
      startDate: "Oct-23",
      status: "Ongoing",
      duration: "5 Years",
      completionDate: "-",
      grant: "-"
    },
    {
      sno: 6,
      faculty: "Dr. Divya Chaturvedi",
      category: "Externally Sponsored",
      agency: "CSIR",
      pi: "PI",
      title: "Design and Development of Substrate Integrated Waveguide (SIW) based Millimeter Wave Beam-Steerable Antenna Array Systems for 5Getwork",
      startDate: "-",
      status: "Ongoing",
      duration: "3 Years",
      completionDate: "-",
      grant: "-"
    },
    {
      sno: 7,
      faculty: "Dr. Nagendra Kushwaha",
      category: "Externally Sponsored",
      agency: "Ministry of Electronics & Information Technology, Govt. of India",
      pi: "PI",
      title: "Power and Space optimization in Internet of Things (IoT) System-on-Chip (SoC)",
      startDate: "Oct-23",
      status: "Ongoing",
      duration: "5 Years",
      completionDate: "-",
      grant: "81.5 Lakhs"
    }
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Funded Projects (Ongoing)" />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="bg-primary dark:bg-primary-dark px-6 py-4">
            <h2 className="text-2xl font-bold text-center text-white">
              Funded Projects - Ongoing
            </h2>
          </div>
          <div className="p-6 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse border border-gray-300 dark:border-gray-700">
                <thead className="bg-[#0b2447] text-white">
                  <tr>
                    <th className="p-3 border border-gray-400">S.No.</th>
                    <th className="p-3 border border-gray-400 min-w-[120px]">Name of the IIIT Pune Faculty</th>
                    <th className="p-3 border border-gray-400 min-w-[120px]">Project Category</th>
                    <th className="p-3 border border-gray-400 min-w-[100px]">Funding Agency</th>
                    <th className="p-3 border border-gray-400 min-w-[180px]">PI/Co-PI</th>
                    <th className="p-3 border border-gray-400 min-w-[200px]">Title of the Project</th>
                    <th className="p-3 border border-gray-400">Start Date</th>
                    <th className="p-3 border border-gray-400">Status</th>
                    <th className="p-3 border border-gray-400">Duration</th>
                    <th className="p-3 border border-gray-400">Completion Date</th>
                    <th className="p-3 border border-gray-400 min-w-[80px]">Grant Amount</th>
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
              <div className="mt-4 text-right text-sm text-gray-500 dark:text-gray-400">
                Last Updated: 30-04-2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundedProjectsOngoingPage;
