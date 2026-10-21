import { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import PhdResearchTabs from '../components/shared/PhdResearchTabs';

const ResearchScholarVisvesvarayaPage = () => {
  const [selectedYear, setSelectedYear] = useState("2026");
  const yearsData = [
    {
      year: "2026",
      tables: [
        [
          { sno: 1, mis: "322615001", name: "Anurag Kumar", topic: "--", supervisor: "Dr. Mahendra Pratap Yadav", email: "322615001@phd.iiitp.ac.in", branch: "CSE", mode: "Part time" },
          { sno: 2, mis: "322615007", name: "Priyanca Primas Gonsalves", topic: "--", supervisor: "Dr. Mahesh Joshi", email: "322615007@phd.iiitp.ac.in", branch: "CSE", mode: "Full time" },
        ]
      ]
    },
    {
      year: "2025",
      tables: [
        [
          { sno: 1, mis: "312515003", name: "Saurav Nagnath Dabhade", topic: "Responsible AI", supervisor: "Dr. Shrikant Salve", email: "312515003@phd.iiitp.ac.in", branch: "CSE", mode: "Full time" },
        ]
      ]
    },
    {
      year: "2024",
      tables: [
        [
          { sno: 1, mis: "312416001", name: "Ashish Kumar", topic: "Analog Circuit Design", supervisor: "Dr. Nagendra Kushwaha", email: "ashish.kumar24@iiitp.ac.in", branch: "ECE", mode: "Full time" },
          { sno: 2, mis: "312416002", name: "Dnyaneshwari Dilip Dhadwad", topic: "Memory design for IC", supervisor: "Dr. Nagendra Kushwaha", email: "dnyaneshwari.c2s@iiitp.ac.in", branch: "ECE", mode: "Full time" },
        ]
      ]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Visvesvaraya Scheme">
        <PhdResearchTabs />
      </PageHeader>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div
          role="group"
          aria-label="Select academic year"
          className="flex flex-wrap justify-center gap-2"
        >
          {yearsData.map(({ year }) => (
            <button
              key={year}
              type="button"
              aria-pressed={selectedYear === year}
              onClick={() => setSelectedYear(year)}
              className={`rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors ${
                selectedYear === year
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-gray-200 bg-white text-primary hover:border-primary hover:bg-blue-50 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {yearsData
          .filter((yearGroup) => yearGroup.year === selectedYear)
          .map((yearGroup) => {
            const students = yearGroup.tables.flat();
            const branchCounts = students.reduce((counts, student) => {
              counts[student.branch] = (counts[student.branch] || 0) + 1;
              return counts;
            }, {});

            return (
              <section key={yearGroup.year} className="space-y-8">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <h3 className="text-2xl font-bold text-primary dark:text-blue-400">
                    List of Ph.D Students
                  </h3>
                  <p className="text-left text-sm font-medium text-gray-600 dark:text-gray-300 sm:text-right">
                    <span className="font-bold text-primary dark:text-white">Total: {students.length}</span>
                    {Object.entries(branchCounts).map(([branch, count]) => (
                      <span key={branch}>{" | "}{branch}: {count}</span>
                    ))}
                  </p>
                </div>

                <div className="space-y-6">
                  {yearGroup.tables.map((tableData, index) => (
                    <div
                      key={`${yearGroup.year}-${index}`}
                      className="bg-white dark:bg-surface-dark rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
                    >
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                          <thead className="bg-primary text-white dark:bg-gray-800">
                            <tr>
                              <th className="p-3.5 font-semibold w-16 text-center">Sr. no.</th>
                              <th className="p-3.5 font-semibold">MIS No.</th>
                              <th className="p-3.5 font-semibold">Name</th>
                              <th className="p-3.5 font-semibold">Research Topic</th>
                              <th className="p-3.5 font-semibold">Supervisor</th>
                              <th className="p-3.5 font-semibold">Email</th>
                              <th className="p-3.5 font-semibold text-center w-24">Branch</th>
                              <th className="p-3.5 font-semibold text-center w-24">Mode</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700 dark:text-gray-300">
                            {tableData.map((row) => (
                              <tr
                                key={row.mis}
                                className="border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors last:border-b-0"
                              >
                                <td className="p-3.5 text-center border-r border-gray-100 dark:border-gray-800">{row.sno}.</td>
                                <td className="p-3.5 font-medium border-r border-gray-100 dark:border-gray-800">{row.mis}</td>
                                <td className="p-3.5 font-bold border-r border-gray-100 dark:border-gray-800">{row.name}</td>
                                <td className="p-3.5 border-r border-gray-100 dark:border-gray-800">{row.topic}</td>
                                <td className="p-3.5 text-accent hover:underline dark:text-accent-dark border-r border-gray-100 dark:border-gray-800 break-words whitespace-pre-wrap">
                                  {row.supervisor.split(', ').map((sup, i) => (
                                    <div key={i}>{sup}</div>
                                  ))}
                                </td>
                                <td className="p-3.5 text-accent dark:text-accent-dark border-r border-gray-100 dark:border-gray-800">{row.email}</td>
                                <td className="p-3.5 text-center font-medium border-r border-gray-100 dark:border-gray-800">{row.branch}</td>
                                <td className="p-3.5 text-center">{row.mode}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-right text-sm text-gray-500 dark:text-gray-400">
          Last Updated: 25-04-2026
        </div>
      </div>
    </div>
  );
};

export default ResearchScholarVisvesvarayaPage;
