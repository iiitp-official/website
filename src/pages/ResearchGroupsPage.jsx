import { useMemo, useState } from "react";
import {
  Antenna,
  BookOpen,
  BrainCircuit,
  Calculator,
  Cpu,
  Database,
  FlaskConical,
  Leaf,
  Radio,
  Search,
  Shield,
  Users,
  Waves,
} from "lucide-react";
import PageHeader from "../components/shared/PageHeader";

const researchGroups = [
  {
    department: "Computer Science & Engineering",
    shortDepartment: "CSE",
    name: "AI & DS",
    icon: BrainCircuit,
    areas: [
      "Artificial Intelligence",
      "Data Science",
      "Machine Learning",
      "Deep Learning",
      "Human-Centred AI",
      "Generative AI",
      "Computer Vision",
      "Natural Language Processing",
    ],
    faculty: [
      "Dr Sanjeev Sharma",
      "Dr Sanga Chaki",
      "Dr Sumit Gupta",
      "Dr Mahendra Pratap Yadav",
      "Dr Shrikant Salve",
      "Dr Minish Kumar",
      "Mr Prithwish Sen",
      "Ms Anupama Arun",
    ],
    accent: "from-blue-600 to-cyan-500",
    iconStyle: "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    department: "Computer Science & Engineering",
    shortDepartment: "CSE",
    name: "Cyber Security",
    icon: Shield,
    areas: [
      "Cyber Security",
      "Digital Forensics",
      "Network Security",
      "Malware Analysis",
      "Incident Response",
      "Privacy & Data Protection",
      "Cryptography",
      "Security Analytics",
    ],
    faculty: [
      "Dr Bhupendra Singh",
      "Dr Shivangi Shukla",
      "Dr Mahesh Joshi",
      "Dr Kaptan Singh",
      "Dr Priyanka Joshi",
    ],
    accent: "from-violet-600 to-fuchsia-500",
    iconStyle: "bg-violet-50 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    department: "Computer Science & Engineering",
    shortDepartment: "CSE",
    name: "Big Data & IoT",
    icon: Database,
    areas: [],
    faculty: [
      "Dr Sonam Maurya",
      "Dr Habila Basumatary",
      "Dr Priyank Jain",
      "Ms Anupriya",
      "Ms Debadreeta Das",
    ],
    accent: "from-cyan-600 to-teal-500",
    iconStyle: "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
  },
  {
    department: "Electronics & Communication Engineering",
    shortDepartment: "ECE",
    name: "Intelligent Communication & Signal Processing Systems",
    icon: Radio,
    areas: ["Wireless Communication", "Signal Processing"],
    faculty: [
      "Dr Sushant Kumar",
      "Dr Dheeraj Dubey",
      "Dr Dipen Bepari",
      "Dr M. A. Rahman",
      "Dr Soumen Mandal",
      "Dr Dhawal Salwan",
      "Dr Shekhar Kumar Yadav",
    ],
    accent: "from-amber-500 to-orange-500",
    iconStyle: "bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
  {
    department: "Electronics & Communication Engineering",
    shortDepartment: "ECE",
    name: "VLSI, Embedded Systems & Robotics",
    icon: Cpu,
    areas: ["VLSI", "Embedded Systems", "Digital Systems", "Robotics"],
    faculty: [
      "Dr Nagendra Kushwaha",
      "Dr Shubham Shukla",
      "Dr Tushar Gawande",
      "Dr Ashish Singh",
      "Dr Saurabh Kumar",
      "Dr Seenivasan M.A.",
    ],
    accent: "from-rose-500 to-orange-400",
    iconStyle: "bg-rose-50 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
  {
    department: "Electronics & Communication Engineering",
    shortDepartment: "ECE",
    name: "RF, Microwave, Antennas & Electromagnetic Systems",
    icon: Antenna,
    areas: ["RF / Microwave", "Antennas", "Electromagnetic Systems"],
    faculty: [
      "Dr Nagendra Kushwaha",
      "Dr Divya Chaturvedi",
      "Dr Amartya Paul",
    ],
    accent: "from-indigo-600 to-blue-500",
    iconStyle: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  },
  {
    department: "Mathematics",
    shortDepartment: "Mathematics",
    name: "Algebra, Discrete Mathematics & Combinatorics",
    icon: Calculator,
    areas: [
      "Discrete Mathematics",
      "Graph Theory",
      "Lattice Theory",
      "Algebra",
      "Combinatorics",
      "Commutative Algebra",
      "Group Theory",
      "Lie Algebras",
      "Word Maps",
      "Optimization",
    ],
    faculty: ["Dr Anagha Khiste", "Dr Jatin Majithia", "Dr Rahul Kaushik"],
    accent: "from-emerald-600 to-teal-500",
    iconStyle: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  {
    department: "Mathematics",
    shortDepartment: "Mathematics",
    name: "Applied Analysis & Differential Equations",
    icon: Waves,
    areas: [
      "Boundary Layer Equations",
      "Non-linear PDEs",
      "Fractional Differential Equations",
      "Differential Equations and Mathematical Modelling",
      "Numerical Analysis",
      "Scientific Computing",
      "Singularly Perturbed Differential Equations",
      "Time-delay PDEs",
      "Adaptive Mesh Methods",
      "Finite Difference and Finite Element Methods",
      "Computational Fluid Dynamics",
    ],
    faculty: ["Dr Chandrakant Guled", "Dr Sonu Bose"],
    accent: "from-teal-600 to-emerald-500",
    iconStyle: "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    department: "Humanities",
    shortDepartment: "Humanities",
    name: "Environmental, Humanities, and Indian Literature",
    icon: Leaf,
    areas: [
      "Climate Fiction and Solarpunk",
      "Ecocriticism and Ecofeminism",
      "Environmental Justice",
      "Anthropocene Studies",
      "Indigenous and Traditional Ecological Knowledge",
      "Postcolonial Indian Literature",
      "Regional Literatures in Translation",
      "Drama and Performance Studies",
      "Digital Storytelling and Social Media",
    ],
    faculty: [
      "Dr Sakshi Semwal",
      "Dr Sohini Gayen",
      "Dr Rohit Ramchandra Joshi",
    ],
    accent: "from-lime-600 to-green-500",
    iconStyle: "bg-lime-50 text-lime-800 dark:bg-lime-900/40 dark:text-lime-300",
  },
];

const departments = [
  "All groups",
  "CSE",
  "ECE",
  "Mathematics",
  "Humanities",
];

const ResearchGroupsPage = () => {
  const [activeDepartment, setActiveDepartment] = useState("All groups");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return researchGroups.filter((group) => {
      const matchesDepartment =
        activeDepartment === "All groups" ||
        group.shortDepartment === activeDepartment;
      const searchableText = [
        group.name,
        group.department,
        ...group.areas,
        ...group.faculty,
      ]
        .join(" ")
        .toLowerCase();
      return matchesDepartment && (!query || searchableText.includes(query));
    });
  }, [activeDepartment, searchQuery]);

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader
        title="Research Groups"
        subtitle="Discover the people and ideas advancing research across IIIT Pune."
      />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section
          aria-label="Research groups overview"
          className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-blue-950 to-slate-900 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10"
        >
          <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-14 h-52 w-52 rounded-full border border-white/10" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                <FlaskConical size={14} />
                Ideas into impact
              </span>
              <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
                Where curiosity finds its community.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/80 sm:text-base">
                Explore faculty-led groups spanning computing, communication,
                mathematics, and the humanities. Find a research area and the
                faculty shaping it.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              {[
                { value: "9", label: "Research groups" },
                { value: "4", label: "Disciplines" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-28 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-blue-100/75 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Browse research groups">
          <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                Explore by discipline
              </p>
              <h2 className="mt-1 font-serif text-2xl font-bold text-gray-900 dark:text-white">
                Find your research community
              </h2>
            </div>
            <label className="relative block w-full lg:max-w-xs">
              <Search
                aria-hidden="true"
                size={18}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search groups, areas, faculty..."
                aria-label="Search research groups"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-surface-dark dark:text-white"
              />
            </label>
          </div>

          <div
            className="mb-7 flex gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter by discipline"
          >
            {departments.map((department) => {
              const isActive = activeDepartment === department;
              return (
                <button
                  key={department}
                  type="button"
                  onClick={() => setActiveDepartment(department)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-blue-950/15"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:text-primary dark:border-gray-700 dark:bg-surface-dark dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
                  }`}
                >
                  {department}
                </button>
              );
            })}
          </div>

          <div className="mb-4 flex items-center justify-between">
            <p
              className="text-sm text-gray-500 dark:text-gray-400"
              aria-live="polite"
            >
              Showing{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {filteredGroups.length}
              </span>{" "}
              {filteredGroups.length === 1 ? "group" : "groups"}
            </p>
          </div>

          {filteredGroups.length > 0 ? (
            <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
              {filteredGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article
                    key={group.name}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-gray-800 dark:bg-surface-dark dark:hover:shadow-black/20"
                  >
                    <div
                      className={`h-1.5 w-full bg-gradient-to-r ${group.accent}`}
                    />
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${group.iconStyle}`}
                        >
                          <Icon size={23} strokeWidth={1.8} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                              {group.shortDepartment}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {group.department}
                            </span>
                          </div>
                          <h3 className="font-serif text-lg font-bold leading-snug text-gray-900 dark:text-white sm:text-xl">
                            {group.name}
                          </h3>
                        </div>
                      </div>

                      {group.areas.length > 0 && (
                        <div className="mt-5">
                          <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                            Research areas
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {group.areas.map((area) => (
                              <span
                                key={area}
                                className="rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1 text-xs leading-5 text-gray-700 dark:border-gray-700/70 dark:bg-gray-800/70 dark:text-gray-300"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-5 border-t border-gray-100 pt-4 dark:border-gray-800">
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                            <Users size={15} />
                            Faculty members
                          </h4>
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                            {group.faculty.length}
                          </span>
                        </div>
                        <ul className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                          {group.faculty.map((member) => (
                            <li
                              key={member}
                              className="flex items-start gap-2 text-sm leading-5 text-gray-700 dark:text-gray-300"
                            >
                              <span
                                aria-hidden="true"
                                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${group.accent}`}
                              />
                              {member}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-14 text-center dark:border-gray-700">
              <BookOpen
                aria-hidden="true"
                size={30}
                className="mx-auto text-gray-400"
              />
              <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">
                No research groups found
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Try another search term or choose a different discipline.
              </p>
            </div>
          )}
        </section>

        <p className="mt-8 text-xs leading-5 text-gray-500 dark:text-gray-400">
          Faculty and research areas are presented as provided in the proposed
          research-group listings.
        </p>
      </main>
    </div>
  );
};

export default ResearchGroupsPage;
