import React from "react";
import PageHeader from "../components/shared/PageHeader";

const OrdinancePage = () => {
  const ordinances = [
    {
      title: "Academic Ordinance",
      description:
        "Governs the overall academic structure, degree requirements, course credits, and academic progress standards.",
      topics: ["Degree Requirements", "Credit System", "Grading", "Academic Standing", "Progression Rules"],
    },
    {
      title: "Examination Ordinance",
      description:
        "Regulates examination procedures, evaluation methods, answer scripts, revaluation, and result declaration.",
      topics: [
        "Examination Conduct",
        "Evaluation Criteria",
        "Revaluation Process",
        "Result Publication",
        "Grade Appeal",
      ],
    },
    {
      title: "Student Conduct Ordinance",
      description: "Defines code of conduct, disciplinary procedures, and regulations for student behavior on campus.",
      topics: ["Code of Conduct", "Disciplinary Action", "Appeal Process", "Campus Rules", "Safety Regulations"],
    },
    {
      title: "Attendance Ordinance",
      description: "Specifies attendance requirements and consequences for students across all programs.",
      topics: ["Attendance Threshold", "Exemptions", "Shortage Policy", "Reporting Requirements"],
    },
    {
      title: "Fee & Scholarship Ordinance",
      description: "Outlines fee structure, payment procedures, scholarships, and refund policies.",
      topics: ["Fee Payment", "Scholarships", "Refund Policy", "Installment Options", "Financial Aid"],
    },
    {
      title: "Thesis & Dissertation Ordinance",
      description:
        "Regulates thesis/dissertation submission, evaluation, and defense procedures for postgraduate programs.",
      topics: ["Submission Guidelines", "Evaluation Process", "Plagiarism Policy", "Viva Examination"],
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Academic Ordinance" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold font-serif text-primary dark:text-white mb-6 border-b pb-4 border-gray-200 dark:border-gray-800">
                About Academic Ordinance
              </h2>
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The Academic Ordinance of IIIT Pune establishes the rules and regulations governing all academic
                  matters including degree requirements, course structure, examinations, grading, and student conduct.
                  These ordinances are binding on all students and must be adhered to throughout their tenure at the
                  institute.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  All students are responsible for understanding and complying with the applicable ordinances. Any
                  violations may result in disciplinary action as prescribed in the ordinances.
                </p>
              </div>
            </section>

            {/* Key Ordinances */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6 border-b pb-3 border-gray-200 dark:border-gray-800">
                Key Ordinances
              </h2>
              <div className="space-y-6">
                {ordinances.map((ordinance, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-accent-dark text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{ordinance.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{ordinance.description}</p>
                      </div>
                    </div>
                    <div className="ml-14">
                      <h4 className="font-semibold text-primary dark:text-white text-sm mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {ordinance.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-blue-100 dark:bg-gray-700 text-primary dark:text-white px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Important Regulations */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4 border-b pb-3 border-gray-200 dark:border-gray-800">
                Important Regulations Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border border-blue-200 dark:border-blue-900/50">
                  <h4 className="font-semibold text-primary dark:text-white mb-3 text-lg">Academic Progress</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Minimum CGPA: 2.0 for continuation</li>
                    <li>• Maximum study period: 2x normal duration</li>
                    <li>• Semester GPA calculation method</li>
                    <li>• Retake policy for failed courses</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border border-green-200 dark:border-green-900/50">
                  <h4 className="font-semibold text-primary dark:text-white mb-3 text-lg">Attendance Requirements</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Minimum 75% attendance required</li>
                    <li>• Medical/administrative leave considered</li>
                    <li>• Shortage notification to parents</li>
                    <li>• Ineligibility for exams below threshold</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border border-purple-200 dark:border-purple-900/50">
                  <h4 className="font-semibold text-primary dark:text-white mb-3 text-lg">Examination Rules</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Exam hall code of conduct</li>
                    <li>• Malpractice penalties</li>
                    <li>• Absenteeism consequences</li>
                    <li>• Revaluation & challenge procedures</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border border-orange-200 dark:border-orange-900/50">
                  <h4 className="font-semibold text-primary dark:text-white mb-3 text-lg">
                    Plagiarism & Academic Integrity
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Plagiarism detection & penalties</li>
                    <li>• Proper citation requirements</li>
                    <li>• Consequences of academic dishonesty</li>
                    <li>• Appeal process for violations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Disciplinary Action */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4 border-b pb-3 border-gray-200 dark:border-gray-800">
                Disciplinary Actions & Appeals
              </h2>
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary dark:text-white mb-3">Levels of Disciplinary Action:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-dark font-bold">1.</span>
                        <span>
                          <strong>Warning:</strong> Written warning for minor violations
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-dark font-bold">2.</span>
                        <span>
                          <strong>Fine/Penalty:</strong> Monetary penalty for rule violations
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-dark font-bold">3.</span>
                        <span>
                          <strong>Suspension:</strong> Temporary removal from campus
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-dark font-bold">4.</span>
                        <span>
                          <strong>Expulsion:</strong> Permanent removal from the institute
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-primary dark:text-white mb-3">Appeal Process:</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Students can appeal against disciplinary action within 15 days of notification:
                    </p>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>• Submit written appeal to the Dean of Student Affairs</li>
                      <li>• Attend disciplinary committee hearing if requested</li>
                      <li>• Decision will be communicated within 30 days</li>
                      <li>• Further appeal to Director if deemed necessary</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Document Download */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4 border-b pb-3 border-gray-200 dark:border-gray-800">
                Official Documents
              </h2>
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  For the complete and official ordinances, please download the documents below or contact the Academic
                  Office:
                </p>
                <div className="space-y-3">
                  <a
                    href="/documents/IIIT_Pune_Statute_2017 22.10.2018.pdf"
                    target="_blank" rel="noopener noreferrer"
                    
                    className="block p-4 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-blue-900/50 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <p className="font-semibold text-primary dark:text-white">IIIT Pune Statute & Ordinance (PDF)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Complete official statute document</p>
                  </a>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default OrdinancePage;
