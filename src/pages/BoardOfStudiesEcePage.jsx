import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import CommitteeTable from '../components/shared/CommitteeTable';

const BoardOfStudiesEcePage = () => {
  const data = [
    { srNo: 1, name: "Dr. Nagendra Kushwaha", affiliation: "HoD ECE, IIIT Pune", designation: "Chairperson" },
    { srNo: 2, name: "Dr. Sushant Kumar", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 3, name: "Dr. Shubham Shukla", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 4, name: "Dr. Dheeraj Dubey", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 5, name: "Dr. Dipen Bepari", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 6, name: "Dr. KM Divya Chaturvedi", affiliation: "Assistant Professor, IIIT Pune", designation: "Member" },
    { srNo: 7, name: "Dr. Sanjeev Sharma", affiliation: "Assistant Professor, IIIT Pune", designation: "Special Invitee" },
    { srNo: 8, name: "Dr. Jatin Majithia", affiliation: "Assistant Professor, IIIT Pune", designation: "Special Invitee" },
    { srNo: 9, name: "Dr. Bhupendra Singh", affiliation: "HoD CSE, IIIT Pune", designation: "Special Invitee" },
    { srNo: 10, name: "Prof. Vikram M. Gadre", affiliation: "Prof IIT Bombay", designation: "Expert Member" },
    { srNo: 11, name: "Dr. Satyam Shukla", affiliation: "Tech. Leader at STMicroelectronics", designation: "Expert Member" },
    { srNo: 12, name: "Libin T T", affiliation: "Associate Director / Scientist 'F' at C-DAC", designation: "Expert Member" },
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 text-center mb-8">
          Board of Studies (ECE)
        </h1>
        
        <CommitteeTable data={data} />
        
        <div className="mt-8">
          <p className="font-bold text-gray-900 dark:text-white mb-3">
            Please click here for the official Memorandum
          </p>
          <a 
            href="/documents/BoS_ECE_IIITP_v1.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#2e1a47] text-white px-6 py-2.5 rounded-sm shadow-sm hover:bg-opacity-90 transition-colors font-medium text-sm"
          >
            View Document
          </a>
        </div>
        
        <div className="text-right text-gray-600 dark:text-gray-400 mt-8 text-sm">
          Last Updated: 25-04-2026
        </div>
      </div>
    </div>
  );
};

export default BoardOfStudiesEcePage;
