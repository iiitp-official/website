import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import CommitteeTable from '../components/shared/CommitteeTable';

const BoardOfStudiesAshPage = () => {
  const data = [
    { srNo: 1, name: "Dr. Jatin Majithia", affiliation: "Assistant Professor and HoD AS&H, IIIT Pune", designation: "Chairperson" },
    { srNo: 2, name: "Dr. Shripad Garge", affiliation: "Assistant professor, IIT Bombay", designation: "External Expert (Mathematics)" },
    { srNo: 3, name: "Dr. Chandrasheel Bhagwat", affiliation: "Associate Professor, IISER", designation: "External Expert (Mathematics)" },
    { srNo: 4, name: "Dr. Ashish Pande", affiliation: "Professor, IIT Bombay", designation: "External Expert (Humanities and Social Sciences)" },
    { srNo: 5, name: "Dr. Anindita Roy", affiliation: "Associate Professor, SIT Pune", designation: "External Expert (Humanities and Social Sciences)" },
    { srNo: 6, name: "Dr. Anagha Khiste", affiliation: "Assistant professor AS&H, IIIT Pune", designation: "Member" },
    { srNo: 7, name: "Dr Chandrakant Guled", affiliation: "Assistant Professor, AS&H, IIIT Pune", designation: "Member" },
    { srNo: 8, name: "Associate Dean", affiliation: "(Academics), IIIT Pune", designation: "Special Invitee" },
    { srNo: 9, name: "Associate Dean", affiliation: "(Research and Development)", designation: "Special Invitee" },
    { srNo: 10, name: "Head, Computer Science and Engineering Dept", affiliation: "IIIT Pune", designation: "Special Invitee" },
    { srNo: 11, name: "Head, Electronics and Communication Engineering Dept", affiliation: "IIIT Pune", designation: "Special Invitee" },
  ];

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Board of Studies (AS&H)" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-6 md:p-8">
            <CommitteeTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfStudiesAshPage;
