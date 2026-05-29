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
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Board of Studies (CSE)" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-center text-primary dark:text-white mb-2">
            Board of Studies (CSE)
          </h2>
          <CommitteeTable data={data} />
          
          <div className="mt-8">
            <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">Please Click here for official Memorandum</p>
            <button 
              className="bg-[#241c5c] text-white px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
              title="Document not available yet"
            >
              View Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfStudiesCsePage;
