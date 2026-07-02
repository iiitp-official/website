import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import { Clock, Users, Award, Mail, Phone, ExternalLink, BookOpen, Building, Microchip, Cpu, GraduationCap, Network, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import facultyDetails from "../data/faculty_details.json";

const EceDepartmentPage = () => {
  const [activeProgram, setActiveProgram] = useState("btech");
  const [activeBtechSemester, setActiveBtechSemester] = useState(1);
  const [activeMtechSemester, setActiveMtechSemester] = useState(1);

  // Extract ECE Faculty
  const eceFaculty = useMemo(() => {
    return Object.entries(facultyDetails)
      .filter(([_, details]) => details.department === "ECE")
      .map(([slug, details]) => {
        const nameParts = slug.split("-");
        const formattedName = nameParts.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        return {
          ...details,
          name: formattedName,
          slug: slug
        };
      });
  }, []);

  // HOD Profile URL & details helper
  const hodProfile = eceFaculty.find(f => f.slug === "nagendra-kushwaha") || {
    name: "Dr. Nagendra Kushwaha",
    designation: "Assistant Professor & Head (ECE)",
    email: "nagendra@iiitp.ac.in",
    phone: "+91 9881457120",
    slug: "nagendra-kushwaha"
  };

  const btechCurriculum = [
    {
      semester: 1,
      totalCredits: 19,
      courses: [
        { name: "Basic Electronics Engineering", hours: "3-0-2", credits: 4 },
        { name: "Foundations of Computer Science", hours: "3-0-0", credits: 3 },
        { name: "Computer Programming Concept & Practice", hours: "3-0-2", credits: 4 },
        { name: "Engineering Mathematics-I", hours: "3-0-0", credits: 3 },
        { name: "Language & Writing Skills", hours: "2-0-0", credits: 2 },
        { name: "Innovation", hours: "1-0-0", credits: 1 },
        { name: "Environmental Science", hours: "2-0-0", credits: 2 }
      ]
    },
    {
      semester: 2,
      totalCredits: 20,
      courses: [
        { name: "Digital Logic & Design", hours: "3-0-2", credits: 4 },
        { name: "Data Structure & Algorithms", hours: "3-0-2", credits: 4 },
        { name: "Object Oriented Programming Language", hours: "3-0-2", credits: 4 },
        { name: "Engineering Mathematics-II", hours: "3-0-0", credits: 3 },
        { name: "Humanities", hours: "2-0-0", credits: 2 },
        { name: "Entrepreneurship Studies", hours: "1-0-0", credits: 1 },
        { name: "Consciousness and Values", hours: "2-0-0", credits: 2 }
      ]
    },
    {
      semester: 3,
      totalCredits: 21,
      courses: [
        { name: "Analysis & Design of Algorithm", hours: "3-0-2", credits: 4 },
        { name: "Computer Organization and Architecture", hours: "3-0-0", credits: 3 },
        { name: "Network Analysis and Theory", hours: "3-0-0", credits: 3 },
        { name: "Database Management System", hours: "3-0-2", credits: 4 },
        { name: "Python Programming", hours: "3-0-2", credits: 4 },
        { name: "Probability and Random Process", hours: "3-0-0", credits: 3 }
      ]
    },
    {
      semester: 4,
      totalCredits: 22,
      courses: [
        { name: "Analog Electronics Circuit", hours: "3-0-2", credits: 4 },
        { name: "Artificial Intelligence", hours: "3-0-0", credits: 3 },
        { name: "Operating System", hours: "3-0-2", credits: 4 },
        { name: "Java Programming", hours: "2-0-2", credits: 3 },
        { name: "Signals and Systems", hours: "3-0-0", credits: 3 },
        { name: "Analog Communication", hours: "3-0-2", credits: 4 },
        { name: "Minor Project-I", hours: "0-0-2", credits: 1 }
      ]
    },
    {
      semester: 5,
      totalCredits: 24,
      courses: [
        { name: "Digital Communication", hours: "3-0-2", credits: 4 },
        { name: "VLSI Design", hours: "3-0-2", credits: 4 },
        { name: "Antenna and RF Microwave", hours: "3-0-2", credits: 4 },
        { name: "Elective 1 (DE)", hours: "3-0-0", credits: 3 },
        { name: "Elective 2 (OE)", hours: "3-0-0", credits: 3 },
        { name: "Linear and Nonlinear Optimization", hours: "3-0-0", credits: 3 },
        { name: "Minor Project-II", hours: "0-0-6", credits: 3 }
      ]
    },
    {
      semester: 6,
      totalCredits: 22,
      courses: [
        { name: "Information Theory and Coding", hours: "3-0-0", credits: 3 },
        { name: "Wireless communication", hours: "3-0-2", credits: 4 },
        { name: "Embedded System", hours: "3-0-0", credits: 3 },
        { name: "Elective 1 (DE)", hours: "3-0-0", credits: 3 },
        { name: "Elective 2 (OE)", hours: "3-0-0", credits: 3 },
        { name: "Elective 3 (OE)", hours: "3-0-0", credits: 3 },
        { name: "Minor Project-III", hours: "0-0-6", credits: 3 }
      ]
    },
    {
      semester: 7,
      totalCredits: 17,
      courses: [
        { name: "Intelligent Systems and Robotics", hours: "3-0-0", credits: 3 },
        { name: "Internet of Things", hours: "3-0-0", credits: 3 },
        { name: "Elective 1 (DE)", hours: "3-0-0", credits: 3 },
        { name: "Elective 2 (OE)", hours: "3-0-0", credits: 3 },
        { name: "Major Project-I", hours: "0-0-6", credits: 3 },
        { name: "Internship", hours: "0-0-4", credits: 2 }
      ]
    },
    {
      semester: 8,
      totalCredits: 16,
      courses: [
        { name: "Major Project-II", hours: "0-0-32", credits: 16 }
      ]
    }
  ];

  const mtechCurriculum = [
    {
      semester: 1,
      totalCredits: 17,
      courses: [
        { name: "Fundamentals of IC Design", hours: "3-0-0", credits: 3 },
        { name: "Fabrication Technology of IC", hours: "3-0-0", credits: 3 },
        { name: "Modeling and Synthesis with Verilog HDL", hours: "3-0-0", credits: 3 },
        { name: "Research Methodology", hours: "1-0-2", credits: 2 },
        { name: "EDA Laboratory", hours: "0-0-6", credits: 3 },
        { name: "Elective: Semiconductor Device Modelling", hours: "3-0-0", credits: 3 }
      ]
    },
    {
      semester: 2,
      totalCredits: 20,
      courses: [
        { name: "RF Integrated Circuit (RFIC) Technology", hours: "3-0-2", credits: 4 },
        { name: "Semiconductor Memory Design", hours: "3-0-0", credits: 3 },
        { name: "Advanced IC Design", hours: "3-0-0", credits: 3 },
        { name: "Elective 1: Digital System Design", hours: "3-0-0", credits: 3 },
        { name: "Elective 2:", hours: "3-0-0", credits: 3 },
        { name: "Minor Project", hours: "0-0-8", credits: 4 }
      ]
    },
    {
      semester: 3,
      totalCredits: 15,
      courses: [
        { name: "Major Project-I / Internship-I", hours: "0-0-20", credits: 15 }
      ]
    },
    {
      semester: 4,
      totalCredits: 15,
      courses: [
        { name: "Major Project-II / Internship-II", hours: "0-0-20", credits: 15 }
      ]
    }
  ];

  const renderCurriculumTable = (curriculum, activeSemester, setActiveSemester, semCount) => {
    return (
      <div className="space-y-6">
        <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar border-b border-gray-150 dark:border-gray-800">
          {Array.from({ length: semCount }, (_, i) => i + 1).map((sem) => (
            <button
              key={sem}
              onClick={() => setActiveSemester(sem)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${activeSemester === sem
                  ? "bg-brand-red text-white shadow-xs dark:bg-brand-red-dark"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-850 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
            >
              Semester {sem}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-850/40 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">
                  <th className="py-2.5 px-4 font-bold text-xs uppercase tracking-wider w-[10%]">S.No.</th>
                  <th className="py-2.5 px-4 font-bold text-xs uppercase tracking-wider w-[55%]">Course Title</th>
                  <th className="py-2.5 px-4 font-bold text-xs uppercase tracking-wider text-center w-[20%] whitespace-nowrap">Hours/Week (L-T-P)</th>
                  <th className="py-2.5 px-4 font-bold text-xs uppercase tracking-wider text-center w-[15%]">Credits</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="wait">
                  {curriculum.find(c => c.semester === activeSemester)?.courses.map((course, idx) => (
                    <motion.tr
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15, delay: idx * 0.03 }}
                      key={course.name}
                      className="border-b border-gray-100 dark:border-gray-850 hover:bg-blue-50/20 dark:hover:bg-blue-900/5 transition-colors"
                    >
                      <td className="py-2.5 px-4 text-xs text-gray-400 dark:text-gray-500 font-bold">{idx + 1}.</td>
                      <td className="py-2.5 px-4 text-sm text-gray-850 dark:text-gray-250 font-medium">{course.name}</td>
                      <td className="py-2.5 px-4 text-center text-sm text-gray-700 dark:text-gray-300 font-bold">{course.hours}</td>
                      <td className="py-2.5 px-4 text-center text-sm text-accent-dark dark:text-accent font-bold">{course.credits}</td>
                    </motion.tr>
                  ))}
                  {curriculum.find(c => c.semester === activeSemester)?.totalCredits && (
                    <tr className="bg-blue-50/20 dark:bg-blue-900/5 border-t border-gray-150 dark:border-gray-850 font-bold">
                      <td className="py-2.5 px-4 text-sm text-gray-850 dark:text-gray-250 text-right pr-6" colSpan="3">
                        Total Semester Credits
                      </td>
                      <td className="py-2.5 px-4 text-center text-sm text-accent-dark dark:text-accent font-extrabold text-base">
                        {curriculum.find(c => c.semester === activeSemester).totalCredits} Credits
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen transition-colors duration-200 pb-16">
      <PageHeader
        title="Department of Electronics &amp; Communication Engineering"
        subtitle="Empowering innovators at the forefront of semiconductor, communication, and electronic technologies"
        backgroundImage="/campus-image.jpg"
        compact={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Intro Block */}
        <section className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
          <p className="text-gray-650 dark:text-gray-350 leading-relaxed text-justify text-base md:text-md">
            The mission of the Department of Electronics and Communication Engineering is to train and empower young minds at undergraduate and postgraduate levels. The department nurtures students with outstanding abilities to become innovators and leaders. It also promotes advanced and interdisciplinary research in Electronics, Communication Engineering, and Information Technology.
          </p>
          <p className="text-sm font-medium">
          </p>
        </section>

        {/* 3-Column Layout: Sidebar (Programs), Main Content, HOD Welcome */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Column 1: Sidebar Directory (Degrees) */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm lg:sticky lg:top-44 self-start w-full space-y-4">
              <h3 className="text-gray-800 dark:text-white font-bold font-serif px-2 pb-2 border-b border-gray-100 dark:border-gray-800 text-sm">
                Academic Offerings
              </h3>
              <div className="flex flex-row overflow-x-auto gap-2 no-scrollbar lg:flex-col pb-1 lg:pb-0">
                {[
                  { id: "btech", name: "B.Tech. Program", tag: "Undergraduate" },
                  { id: "mtech", name: "M.Tech. Program", tag: "Postgraduate" },
                  { id: "phd", name: "Ph.D. Program", tag: "Doctoral Research" }
                ].map((p) => {
                  const isSelected = activeProgram === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActiveProgram(p.id)}
                      className={`shrink-0 lg:shrink lg:w-full flex flex-row lg:flex-col items-center lg:items-start gap-2 lg:gap-0 px-4 py-2 lg:px-3.5 lg:py-2.5 rounded-full lg:rounded-xl text-left transition-all duration-200 border ${isSelected
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "text-gray-700 dark:text-gray-300 bg-transparent border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-850 hover:border-gray-200 dark:hover:border-gray-700"
                        }`}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? "bg-white" : "bg-primary"}`} />
                        <span className="font-bold text-xs lg:text-sm">{p.name}</span>
                      </div>
                      <span className={`hidden lg:block text-[10px] mt-0.5 ${isSelected ? "text-white/80" : "text-gray-400 dark:text-gray-550"}`}>
                        {p.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Main Area (Dynamic based on selected program) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-sm h-full flex flex-col justify-between">

              <AnimatePresence mode="wait">
                {activeProgram === "btech" && (
                  <motion.div
                    key="btech"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 dark:border-gray-800 pb-3 gap-2">
                      <h2 className="text-2xl font-extrabold font-serif text-primary dark:text-white">
                        B.Tech. in Electronics &amp; Communication
                      </h2>
                    </div>

                    <p className="text-sm text-gray-650 dark:text-gray-350 leading-relaxed text-justify">
                      The primary focus of the B.Tech. program in Electronics and Communication Engineering (ECE) at IIIT Pune is on collaborative research and practical education in the field of electronics and communication. The curriculum is structured to integrate advanced technical skills, research projects, and hands-on laboratory experiences, preparing students to tackle modern challenges in VLSI, IoT, RF systems, and wireless communications.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-xl border border-blue-50/50 dark:border-gray-800">
                        <Clock className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider">Duration</p>
                          <p className="font-bold text-sm text-gray-800 dark:text-gray-250">4 Years (8 Semesters)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-xl border border-blue-50/50 dark:border-gray-800">
                        <Users className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider">Department Intake</p>
                          <p className="font-bold text-sm text-gray-800 dark:text-gray-250">119 Students</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-xl border border-blue-50/50 dark:border-gray-800">
                        <Building className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider">Department Labs</p>
                          <p className="font-bold text-sm text-gray-800 dark:text-gray-250">VLSI, IoT, Communications</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-xl border border-blue-50/50 dark:border-gray-800">
                        <Cpu className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider">Research Focus</p>
                          <p className="font-bold text-sm text-gray-800 dark:text-gray-250">Embedded Systems &amp; RF</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-serif text-primary dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2 mb-4">
                        Curriculum &amp; Course Syllabus
                      </h3>
                      {renderCurriculumTable(btechCurriculum, activeBtechSemester, setActiveBtechSemester, 8)}
                    </div>
                  </motion.div>
                )}

                {activeProgram === "mtech" && (
                  <motion.div
                    key="mtech"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 dark:border-gray-800 pb-3 gap-2">
                      <h2 className="text-2xl font-extrabold font-serif text-primary dark:text-white">
                        M.Tech. in ECE (VLSI Specialization)
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-xl border border-blue-50/50 dark:border-gray-800">
                        <Clock className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider">Duration</p>
                          <p className="font-bold text-sm text-gray-800 dark:text-gray-250">2 Years</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-xl border border-blue-50/50 dark:border-gray-800">
                        <Users className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider">Intake</p>
                          <p className="font-bold text-sm text-gray-800 dark:text-gray-250">22 Students</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-xl border border-blue-50/50 dark:border-gray-800">
                        <Award className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider">Specialization</p>
                          <p className="font-bold text-sm text-gray-800 dark:text-gray-250">VLSI Design</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-serif text-primary dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2 mb-4">
                        Curriculum &amp; Course Syllabus (67 Credits)
                      </h3>
                      {renderCurriculumTable(mtechCurriculum, activeMtechSemester, setActiveMtechSemester, 4)}
                    </div>
                  </motion.div>
                )}

                {activeProgram === "phd" && (
                  <motion.div
                    key="phd"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-extrabold font-serif text-primary dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 mb-4">
                        Doctor of Philosophy (Ph.D.)
                      </h2>
                      <div className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed text-justify space-y-4">
                        <p>
                          The Doctor of Philosophy (Ph.D.) Programme in Electronics and Communication Engineering is aimed at assisting students in acquiring proficiency in their chosen area of research. The academic Programme leading to the Ph.D. degree is broad-based and involves a course credit requirement and a research thesis submission.
                        </p>
                        <p>
                          The Department of ECE actively encourages research in interdisciplinary areas through a system of joint supervision and interdepartmental group activities. With an aim to develop new knowledge in all aspects of teaching and research, IIIT Pune offers admission to the Ph.D. Programme in various emerging areas.
                        </p>
                        <p>
                          The department features well-equipped facilities and research labs in fields like RF &amp; Microwave Engineering, Microelectronics, VLSI Design, and Semiconductor Devices to support doctoral research scholars.
                        </p>
                      </div>

                      <div className="mt-6 bg-teal-50/20 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/30 p-4 rounded-xl flex items-start gap-3">
                        <div className="bg-teal-500/10 dark:bg-teal-400/10 p-1.5 rounded-full text-teal-600 dark:text-teal-400">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <strong className="text-xs text-teal-800 dark:text-teal-400 font-bold uppercase tracking-wider block mb-0.5">Admissions</strong>
                          <p className="text-xs text-gray-650 dark:text-teal-200/70">
                            The admission to Ph.D. programme is conducted periodically through institutional announcements and advertisements.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-base font-bold font-serif text-primary dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                        Key Research Laboratories
                      </h3>
                      <div className="grid grid-cols-1 gap-3 text-xs">
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/30 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                          <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">1</span>
                          <span className="font-semibold text-gray-750 dark:text-gray-300">Communications Laboratory</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/30 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                          <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">2</span>
                          <span className="font-semibold text-gray-750 dark:text-gray-300">VLSI Laboratory</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/30 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                          <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">3</span>
                          <span className="font-semibold text-gray-750 dark:text-gray-300">Internet of Things (IoT) Laboratory</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/30 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                          <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">4</span>
                          <span className="font-semibold text-gray-750 dark:text-gray-300">Semiconductor and Devices Laboratory</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Column 3: HOD Welcome Message Card (Permanent) */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm space-y-6 lg:sticky lg:top-44 self-start w-full max-h-[85vh] overflow-y-auto no-scrollbar">

              <div className="text-center pb-4 border-b border-gray-100 dark:border-gray-850">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-750 shadow-md mx-auto mb-4 bg-gray-50 dark:bg-gray-800 relative">
                  {hodProfile.image ? (
                    <img
                      src={hodProfile.image}
                      alt={hodProfile.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(hodProfile.name)}&background=1B3A6B&color=fff&size=512`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-primary font-serif font-bold bg-blue-50 dark:bg-gray-800">
                      N
                    </div>
                  )}
                </div>

                <h3 className="text-base font-bold font-serif text-gray-900 dark:text-white mb-0.5">
                  {hodProfile.name}
                </h3>
                <p className="text-[11px] text-brand-red font-bold uppercase tracking-wide">
                  Head of Department (ECE)
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-550 font-medium">
                  {hodProfile.education || "Ph.D., M.Tech., B.Tech."}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent font-serif mb-2 border-l-2 border-brand-red pl-2">
                  HOD Message
                </h4>

                <div className="text-xs text-gray-650 dark:text-gray-350 leading-relaxed space-y-3 text-justify">
                  <p>
                    At the forefront of emerging electronic and communication technologies, the department nurtures skilled engineers and innovators for the digital age. The department strives to provide a strong foundation in electronics, communication systems, semiconductor technologies, embedded systems, and emerging areas of engineering through a balanced approach to teaching, research, and innovation.
                  </p>
                  <p>
                    We emphasize experiential learning, project-based education, and hands-on laboratory training to help students develop both theoretical understanding and practical expertise. The department actively encourages collaborative research, industry interaction, and innovation in areas such as VLSI Design &amp; Semiconductor Technologies, Internet of Things (IoT), Wireless Communication, Microwave and RF systems and Embedded Systems.
                  </p>
                  <p>
                    Our mission is to prepare skilled engineers, researchers, and innovators who can contribute to technological advancement, national priorities, and sustainable societal development in an increasingly connected world.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-850 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href={`mailto:${hodProfile.email}`} className="hover:text-brand-red transition-colors truncate">
                    {hodProfile.email}
                  </a>
                </div>
                {hodProfile.phone && (
                  <div className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                    <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-tight">
                      {hodProfile.phone}
                    </span>
                  </div>
                )}
                <div className="pt-2">
                  <Link
                    to={`/people/faculty/${hodProfile.slug}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                  >
                    View HOD Profile <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section: Faculty List Grid */}
        <section className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="border-b border-gray-100 dark:border-gray-855 pb-4 mb-6">
            <h2 className="text-2xl font-bold font-serif text-primary dark:text-white">
              ECE Faculty Members
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Meet our team of distinguished professors, instructors, and researchers in Electronics &amp; Communication Engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {eceFaculty.map((faculty) => (
              <Link
                to={`/people/faculty/${faculty.slug}`}
                key={faculty.slug}
                className="group bg-white dark:bg-surface-dark rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col h-full relative"
              >
                {/* Subtle Background Accent */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800/50 pointer-events-none"></div>

                <div className="w-28 h-28 mx-auto mt-6 bg-gray-100 dark:bg-gray-800 relative z-10 overflow-hidden rounded-full shadow-sm border-4 border-white dark:border-gray-800 shrink-0">
                  {faculty.image ? (
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=1B3A6B&color=fff&size=512`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-primary font-serif font-bold bg-blue-50 dark:bg-gray-800">
                      {faculty.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="p-4 flex-grow flex flex-col items-center text-center bg-white dark:bg-surface-dark z-10 w-full mt-1">
                  <h3 className="text-base font-bold font-serif text-gray-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors line-clamp-1 w-full">
                    {faculty.name}
                  </h3>

                  {/* Fixed height container for designation (up to 2 lines) */}
                  <div className="h-10 flex items-start justify-center w-full mb-1">
                    <p className="text-xs text-brand-red font-medium whitespace-pre-line line-clamp-2">
                      {faculty.designation.split('\n')[0]}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-8 h-px bg-gray-250 dark:bg-gray-800 mb-1.5 mt-0.5 shrink-0" />

                  {/* Fixed height container for expertise */}
                  <div className="h-12 w-full flex flex-col items-center justify-start">
                    {faculty.expertise ? (
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-normal line-clamp-2 w-full">
                        {faculty.expertise}
                      </p>
                    ) : (
                      <p className="text-[10px] text-gray-455 dark:text-gray-555 italic">
                        Specialist in Electronics &amp; Communication
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default EceDepartmentPage;
