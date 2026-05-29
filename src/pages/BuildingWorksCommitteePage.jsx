import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import CommitteeTable from '../components/shared/CommitteeTable';

const BuildingWorksCommitteePage = () => {
  const data = [
    { srNo: 1, name: "Prof. Vineet Kansal", affiliation: "Director, IIIT Pune", designation: "Chairperson" },
    { srNo: 2, name: "Prof. Deepankar Choudhary", affiliation: "Professor, IIT Bombay", designation: "Member" },
    { srNo: 3, name: "Dr. Dattatray V. Jadhav", affiliation: "Joint Director, Technical Education, Regional office Pune", designation: "Member" },
    { srNo: 4, name: "Shri. Ajay Gadiya", affiliation: "Chief Operating Officer, MahalT, Mumbai", designation: "Member" },
    { srNo: 5, name: "Dr. Sanjeev Sharma", affiliation: "Associate Dean, IIIT Pune", designation: "Member" },
    { srNo: 6, name: "Prof. Sanjeev Singh", affiliation: "Professor, SPA Bhopa", designation: "Member" },
    { srNo: 7, name: "Prof. Krishna Kant Pathak", affiliation: "Professor, IIT BHU", designation: "Member" },
    { srNo: 8, name: "Dr. Nagendra Kushwaha", affiliation: "Registrar(I/C), IIIT Pune", designation: "Secretary" },
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Building and Works Committee" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-center text-primary dark:text-white uppercase mb-2">
            Building and Works Committee
          </h2>
          <CommitteeTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default BuildingWorksCommitteePage;
