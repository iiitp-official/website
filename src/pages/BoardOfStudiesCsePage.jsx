import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import CommitteeTable from '../components/shared/CommitteeTable';

const BoardOfStudiesCsePage = () => {
  const data = [
    { srNo: 1, name: "Dr. Bhupendra Singh", affiliation: "HoD CSE, IIIT Pune", designation: "Chairperson" },
    { srNo: 2, name: "Dr Kumar Rajamani", affiliation: "Associate Director, Cropin Technology", designation: "Expert Member" },
    { srNo: 3, name: "Mr. Shripad Pandit", affiliation: "Program Manager, TCS", designation: "Expert Member" },
    { srNo: 4, name: "Prof. Somitra Kumar Sanadhya", affiliation: "IIT Jodhpur", designation: "Expert Member" },
    { srNo: 5, name: "Dr. Sushant Kumar", affiliation: "HoD ECE, IIIT Pune", designation: "Special Invitee" },
    { srNo: 6, name: "Dr. Jatin Majithia", affiliation: "HoD AS&H, IIIT Pune", designation: "Special Invitee" },
    { srNo: 7, name: "Dr. Sanjeev Sharma", affiliation: "Assistant professor, IIIT Pune", designation: "Member" },
    { srNo: 8, name: "Dr. Mahendra Pratap Yadav", affiliation: "Assistant professor, IIIT Pune", designation: "Member" },
    { srNo: 9, name: "Dr. Shrikant Salve", affiliation: "Assistant professor, IIIT Pune", designation: "Member" },
    { srNo: 10, name: "Dr. Sonam Maurya", affiliation: "Assistant professor, IIIT Pune", designation: "Member" },
    { srNo: 11, name: "Dr. Meenakshi Choudhary", affiliation: "Assistant professor, IIIT Pune", designation: "Member" },
    { srNo: 12, name: "Dr. Priyank Jain", affiliation: "Assistant professor, IIIT Pune", designation: "Member" },
    { srNo: 13, name: "Dr. Sumit Kumar Gupta", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 14, name: "Dr. Kaptan Singh", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 15, name: "Dr. Shivangi Shukla", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 16, name: "Dr. Habila Basumatary", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 17, name: "Dr. Sanga Chaki", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 18, name: "Dr. Mahesh Joshi", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
  ];

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Board of Studies (CSE)" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CommitteeTable data={data} />
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="font-bold text-gray-900 dark:text-white mb-3">
            View the official Memorandum
          </p>
          <button 
            disabled
            title="Document not available yet"
            className="inline-block bg-gray-400 dark:bg-gray-700 text-white dark:text-gray-300 px-6 py-2.5 rounded-sm shadow-sm cursor-not-allowed font-medium text-sm"
          >
            View Document
          </button>
        </div>
        
        <div className="text-right text-gray-600 dark:text-gray-400 mt-8 text-sm">
          Last Updated: 25-04-2026
        </div>
      </div>
    </div>
  );
};

export default BoardOfStudiesCsePage;
