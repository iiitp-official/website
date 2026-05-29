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
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Board of Studies (ECE)" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-center text-primary dark:text-white mb-2">
            Board of Studies (ECE)
          </h2>
          <CommitteeTable data={data} />
          
          <div className="mt-8">
            <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">Please click here for the official Memorandum</p>
            <a 
              href="/documents/BoS_ECE_IIITP_v1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#241c5c] text-white px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition-colors shadow-sm rounded-md"
            >
              View Document
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfStudiesEcePage;
