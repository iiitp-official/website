import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import { Clock, Users, Award, Mail, Phone, ExternalLink, BookOpen, Building, Microchip, Cpu, GraduationCap, Network } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import facultyDetails from "../data/faculty_details.json";

const AshDepartmentPage = () => {
  const [activeProgram, setActiveProgram] = useState("foundation");

  // Extract ASH Faculty
  const ashFaculty = useMemo(() => {
    return Object.entries(facultyDetails)
      .filter(([_, details]) => details.department === "ASH")
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
  const hodProfile = ashFaculty.find(f => f.slug === "jatin-majithia") || {
    name: "Dr. Jatin Majithia",
    designation: "Assistant Professor & Head (ASH)",
    email: "jatinmajithia@iiitp.ac.in",
    phone: "+91 9403650522",
    slug: "jatin-majithia"
  };

  const foundationCourses = [
    { name: "Engineering Mathematics-I", hours: "3-0-0", credits: 3 },
    { name: "Engineering Mathematics-II", hours: "3-0-0", credits: 3 },
    { name: "Probability and Random Process", hours: "3-0-0", credits: 3 },
    { name: "Discrete Structure", hours: "3-0-0", credits: 3 },
    { name: "Language & Writing Skills", hours: "2-0-0", credits: 2 },
    { name: "Environmental Science", hours: "2-0-0", credits: 2 },
    { name: "Consciousness and Values", hours: "2-0-0", credits: 2 },
    { name: "Humanities", hours: "2-0-0", credits: 2 },
    { name: "Entrepreneurship Studies", hours: "1-0-0", credits: 1 },
  ];

  return (
    <div className="min-h-screen transition-colors duration-200 pb-16">
      <PageHeader
        title="Department of Applied Sciences & Humanities"
        subtitle="Bridging mathematical rigor with human-centered scientific insights"
        backgroundImage="/campus-image.jpg"
        compact={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Intro Block */}
        <section className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-sm">
          <p className="text-gray-650 dark:text-gray-350 leading-relaxed text-justify text-base md:text-md">
            The Department of Applied Science and Humanities is the cornerstone of a well-rounded technical education. By offering courses in Mathematics, Humanities, Social Sciences, and Management, the department plays an integral role in equipping students with the analytical, critical thinking, communication, and ethical skills required to thrive in today’s rapidly evolving technical landscape. Our goal is to seamlessly blend mathematical rigor with human-centered insights to produce graduates who are not only technically proficient but also socially responsible and globally aware.
          </p>
        </section>

        {/* 3-Column Layout: Sidebar (Programs), Main Content, HOD Welcome */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Column 1: Sidebar Directory (Degrees) */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm lg:sticky lg:top-24 space-y-4">
              <h3 className="text-gray-800 dark:text-white font-bold font-serif px-2 pb-2 border-b border-gray-100 dark:border-gray-800 text-sm">
                Academic Offerings
              </h3>
              <div className="flex flex-row overflow-x-auto gap-2 no-scrollbar lg:flex-col pb-1 lg:pb-0">
                {[
                  { id: "foundation", name: "Foundation Courses", tag: "First-Year Syllabus" },
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
                {activeProgram === "foundation" && (
                  <motion.div
                    key="foundation"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-extrabold font-serif text-primary dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 mb-4">
                        Foundation &amp; Supporting Courses
                      </h2>
                      <p className="text-sm text-gray-650 dark:text-gray-350 leading-relaxed text-justify">
                        The Department of Applied Science and Humanities provides core foundational instruction in Mathematics, Physics, Chemistry, and Humanities for first and second-year B.Tech students. These courses bridge high-school disciplines with advanced engineering research, imparting the quantitative precision, critical thinking, values, and communicative proficiency necessary for top-tier technologists.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-base font-bold font-serif text-primary dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                        Courses Taught by ASH Faculty
                      </h3>

                      <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-xs">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-gray-850/40 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">
                                <th className="py-2.5 px-4 font-bold text-xs uppercase tracking-wider w-[65%]">Course Title</th>
                                <th className="py-2.5 px-4 font-bold text-xs uppercase tracking-wider text-center w-[20%] whitespace-nowrap">Hours/Week (L-T-P)</th>
                                <th className="py-2.5 px-4 font-bold text-xs uppercase tracking-wider text-center w-[15%]">Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              {foundationCourses.map((course, idx) => (
                                <tr
                                  key={idx}
                                  className="border-b border-gray-100 dark:border-gray-850 hover:bg-blue-50/20 dark:hover:bg-blue-900/5 transition-colors"
                                >
                                  <td className="py-2.5 px-4 text-sm text-gray-850 dark:text-gray-250 font-medium">{course.name}</td>
                                  <td className="py-2.5 px-4 text-center text-sm text-gray-700 dark:text-gray-300 font-bold">{course.hours}</td>
                                  <td className="py-2.5 px-4 text-center text-sm text-accent-dark dark:text-accent font-bold">{course.credits}</td>
                                </tr>
                              ))}
                              <tr className="bg-blue-50/20 dark:bg-blue-900/5 border-t border-gray-150 dark:border-gray-850 font-bold">
                                <td className="py-2.5 px-4 text-sm text-gray-850 dark:text-gray-250 text-right pr-6" colSpan="2">
                                  Total Foundation Credits
                                </td>
                                <td className="py-2.5 px-4 text-center text-sm text-accent-dark dark:text-accent font-extrabold text-base">
                                  21 Credits
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
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
                          The Doctor of Philosophy (Ph.D.) Programme is aimed at assisting students in acquiring proficiency in their chosen area of research. The academic Programme leading to the Ph.D. degree is broad-based and involves a course credit requirement and a research thesis submission.
                        </p>
                        <p>
                          The Department of Applied Sciences and Humanities encourages research in interdisciplinary areas through a system of joint supervision and interdepartmental group activities. With an aim to develop new knowledge in all aspects of teaching and research, IIIT Pune offers admission to the Ph.D. Programme in Mathematics, Physics, Chemistry, and English Literature.
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
                        Collaborative Research Centres
                      </h3>
                      <div className="grid grid-cols-1 gap-3 text-xs">
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/30 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                          <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">A</span>
                          <span className="font-semibold text-gray-750 dark:text-gray-300">Centre of Robotics and Security in IoT Space</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/30 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                          <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">B</span>
                          <span className="font-semibold text-gray-750 dark:text-gray-300">Centre of Indian Languages and Computational Intelligence</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/30 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                          <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">C</span>
                          <span className="font-semibold text-gray-750 dark:text-gray-300">Centre of VLSI and Nanotechnology</span>
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
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm space-y-6 lg:sticky lg:top-24 max-h-[85vh] overflow-y-auto no-scrollbar">

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
                      J
                    </div>
                  )}
                </div>

                <h3 className="text-base font-bold font-serif text-gray-900 dark:text-white mb-0.5">
                  {hodProfile.name}
                </h3>
                <p className="text-[11px] text-brand-red font-bold uppercase tracking-wide">
                  Head of Department (ASH)
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                  {hodProfile.education || "Ph.D."}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent font-serif mb-2 border-l-2 border-brand-red pl-2">
                  HOD Message
                </h4>

                <div className="text-xs text-gray-650 dark:text-gray-350 leading-relaxed space-y-3 text-justify">
                  <p>
                    The Department of Applied Sciences and Humanities occupies a foundational role in realising the Institute's vision of producing proficient, ethical, and socially responsible professionals. We believe that technology, when grounded in mathematical rigour, humanistic values, and scientific thinking, becomes a true instrument of societal progress and it is this conviction that shapes everything we do.
                  </p>
                  <p>
                    Mathematics forms the intellectual core of our department. From calculus and linear algebra to probability and discrete mathematics, we provide the analytical foundation upon which all engineering and technology education rests. Alongside this, our faculty are actively engaged in teaching and research across Environmental Studies, Humanities, and Social Sciences together offering students a truly multidisciplinary academic experience.
                  </p>
                  <p>
                    In alignment with NEP 2020, the department emphasises holistic education that moves beyond narrow specialisation. We nurture critical thinking, effective communication, ethical reasoning, and environmental awareness - qualities that are as essential to a capable engineer as technical expertise itself. We are committed to fostering an open intellectual environment where ideas are freely exchanged, diverse perspectives are valued, and students are empowered to engage meaningfully with both local and global challenges.
                  </p>
                  <p>
                    Our goal is not merely to complement technical education, but to be an integral part of it - shaping engineers and technologists who are as capable of thoughtful human engagement as they are of solving complex problems.
                  </p>
                  <p>
                    We warmly welcome students, colleagues, and collaborators to be part of this endeavour, and look forward to growing together as a department that truly makes a difference.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-855 space-y-2">
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
              ASH Faculty Members
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Meet our team of distinguished professors, instructors, and researchers in Applied Sciences and Humanities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {ashFaculty.map((faculty) => (
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
                      <p className="text-[10px] text-gray-450 dark:text-gray-550 italic">
                        Specialist in Humanities and Science
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

export default AshDepartmentPage;
