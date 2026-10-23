import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';

const chapterContent = {
  aps: {
    title: 'IEEE APS Student Branch Chapter',
    image: '/ieee/IEEE%20APS.png',
    description: (
      <>
        An <strong>IEEE Antenna Propagation society Chapter</strong> covers
        various activities under the areas of Antenna and propagation
        engineering, RF circuits, devices, radar, wireless systems, mmWave/THz
        technologies, and related areas.
      </>
    ),
    sections: [
      {
        description: (
          <>
            The activities and events will be managed by an{' '}
            <strong>elected student committee</strong>, consisting of the Chair,
            Vice Chair, Secretary, Treasurer, and other student volunteers. The
            committee will be responsible for planning, publicity, participant
            registration, logistics, budgeting, execution, and documentation of
            each activity, under the guidance and supervision of the Faculty
            Advisor.
          </>
        ),
      },
      {
        description: 'The chapter will adopt the following mechanism:',
        items: [
          {
            title: 'Annual Activity Plan',
            text: 'A structured calendar of technical talks, workshops, hands-on training sessions, competitions, hackathons, industry interactions, and student project demonstrations will be prepared.',
          },
          {
            title: 'Student-Led Management',
            text: 'Each event will be assigned to a team of student volunteers, giving students practical experience in leadership, teamwork, event management, and professional communication.',
          },
          {
            title: 'Financial Management',
            text: 'The Treasurer will maintain proper records of income and expenditure, while all financial activities will be carried out in accordance with IEEE and Institute guidelines.',
          },
          {
            title: 'Industry Sponsorship and Collaboration',
            text: 'The chapter will approach relevant RF, microwave, antenna, semiconductor, communication, and defence industries for sponsorship, technical support, expert lectures, equipment demonstrations, and collaborative activities.',
          },
          {
            title: 'Institutional and IEEE Support',
            text: 'Wherever applicable, the chapter will seek support through Institute resources and IEEE/AP-S programs, grants, and student-oriented initiatives.',
          },
          {
            title: 'Annual Review',
            text: 'At the end of each academic year, the committee will review the activities, participation, financial status, outcomes, and student feedback and prepare a plan for the following year.',
          },
        ],
      },
      {
        description: (
          <>
            The role of the <strong>faculty Advisor</strong>, to promote IEEE
            MTT-S among students and create awareness about its academic,
            research, technical, and professional opportunities. During the
            first year, the following initiatives will be undertaken:
          </>
        ),
      },
      {
        description: (
          <>
            The collaboration between the{' '}
            <strong>IEEE Section and IEEE APS Society</strong> will be maintained
            through regular communication, joint planning, and coordinated
            activities.
          </>
        ),
      },
    ],
  },
  mtts: {
    title: 'IEEE MTTS Student Branch Chapter',
    image: '/ieee/IEEE%20MTTS.jpeg',
    description: (
      <>
        As MTTS covers RF circuits, Active devices, radar, wireless systems,
        Antennas, mmWave/THz technologies, and related areas, we will create a
        good balance of{' '}
        <strong>
          technical, hands-on, research, competition, and industry-oriented
          activities
        </strong>
        .
      </>
    ),
    sections: [
      {
        description: (
          <>
            The activities and events will be managed by an{' '}
            <strong>elected student committee</strong>, consisting of the Chair,
            Vice Chair, Secretary, joint secretary, Treasurer, and other student
            volunteers. The committee will be responsible for planning,
            publicity, participant registration, logistics, budgeting,
            execution, and documentation of each activity, under the guidance
            and supervision of the Faculty Advisor.
          </>
        ),
      },
      {
        description: 'The Student Branch Chapter will:',
        items: [
          {
            text: (
              <>
                Maintain regular communication with both the{' '}
                <strong>IEEE Section and MTT-S Society representatives</strong>{' '}
                and follow their respective guidelines.
              </>
            ),
          },
          {
            text: (
              <>
                Prepare and share an <strong>annual activity plan and reports</strong>{' '}
                with both parent units.
              </>
            ),
          },
          {
            text: (
              <>
                Organize relevant{' '}
                <strong>
                  joint technical talks, workshops, competitions, and industry
                  interactions
                </strong>{' '}
                with the support of the Section and Society.
              </>
            ),
          },
          {
            text: (
              <>
                Encourage students to participate in{' '}
                <strong>
                  IEEE Section- and MTT-S-sponsored programs, conferences,
                  competitions, and awards
                </strong>
                .
              </>
            ),
          },
          {
            text: (
              <>
                Ensure <strong>transparent documentation and reporting</strong>{' '}
                of chapter activities, membership, and achievements
              </>
            ),
          },
        ],
      },
      {
        description: (
          <strong>
            The role of Faculty advisor is to conduct IEEE MTT-S awareness and
            membership drives for students.
          </strong>
        ),
        items: [
          {
            text: 'Form student teams for RF integrated circuits, microwave components, antenna, and wireless communication projects.',
          },
          {
            text: 'Organize antenna/RF design challenges, technical quizzes, workshops, and project competitions.',
          },
          {
            text: 'Encourage students to participate in IEEE conferences, design contests, and student competitions such as MAPCON, IMS, EuCAP, SPACE, WAMS, and other relevant events.',
          },
          {
            text: 'Mentor students in research projects, conference paper preparation, and technical presentations.',
          },
          {
            text: 'Encourage students to apply for IEEE MTT-S awards, scholarships, travel grants, and other student opportunities.',
          },
        ],
      },
    ],
  },
};

const IEEEPage = () => {
  const [activeChapter, setActiveChapter] = useState('aps');
  const [isImageOpen, setIsImageOpen] = useState(false);
  const selectedChapter = chapterContent[activeChapter];

  useEffect(() => {
    if (!isImageOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsImageOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageOpen]);

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="IEEE Student Branch" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">


          <div className="p-8 md:p-12">

            {/* Top Row: About & Gallery */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              
              {/* About IEEE */}
              <section className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-primary dark:text-white mb-6 pb-2">
                  About IEEE
                </h3>

              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  IEEE (Institute of Electrical and Electronics Engineers) is
                  the world's largest technical professional organization
                  dedicated to advancing technology for humanity.
                </p>

                <p>
                  The IEEE Student Branch at IIIT Pune is a dynamic community
                  that fosters innovation, technical excellence, research
                  culture, and professional development among students.
                </p>

                <p>
                  Our branch serves as a platform for students to explore
                  emerging technologies, collaborate on impactful ideas, and
                  gain exposure beyond the classroom. Through expert talks,
                  technical sessions, industry collaborations, workshops,
                  hackathons, and conferences, IEEE SB IIIT Pune bridges the
                  gap between academia and real-world innovation.
                </p>

                <p>
                  We aim to cultivate a culture of curiosity, leadership, and
                  hands-on learning while empowering students to become
                  future-ready engineers, researchers, and innovators.
                </p>
              </div>
              </section>

              {/* Gallery Section */}
              <section className="lg:col-span-1">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 h-full">
                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <a key={num} href={`/ieee/ieee_${num}.jpeg`} target="_blank" rel="noopener noreferrer" className="block group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 aspect-video transition-all hover:shadow-md cursor-pointer">
                        <img 
                          src={`/ieee/ieee_${num}.jpeg`} 
                          alt={`IEEE Event ${num}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* What We Do */}
            <section className="mb-12 bg-green-900 rounded-2xl p-6 md:p-8">
              <h3 className="text-3xl font-bold text-emerald-100 mb-6 pb-2">
                What We Do
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all">
                  <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                    Expert Talks & Speaker Sessions
                  </h4>
                  <p className="text-gray-600">
                    Interact with distinguished professionals, researchers,
                    entrepreneurs, and industry leaders from diverse technical
                    domains.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all">
                  <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                    Industry Collaborations
                  </h4>
                  <p className="text-gray-600">
                    Connect students with companies and professionals through
                    technical interactions, mentorship opportunities, and
                    practical insights.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all">
                  <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                    Hackathons & Innovation Challenges
                  </h4>
                  <p className="text-gray-600">
                    Organize competitive and collaborative events that encourage
                    creativity, innovation, and problem-solving.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all">
                  <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                    Technical Conferences & Research Initiatives
                  </h4>
                  <p className="text-gray-600">
                    Promote research culture through conferences, paper
                    presentations, technical discussions, and knowledge-sharing
                    sessions.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all">
                  <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                    Workshops & Skill Development
                  </h4>
                  <p className="text-gray-600">
                    Conduct hands-on workshops on cutting-edge technologies,
                    development tools, and industry-relevant skills.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all">
                  <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                    Networking Opportunities
                  </h4>
                  <p className="text-gray-600">
                    Build meaningful connections with professionals, IEEE
                    communities, and fellow innovators across domains.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all">
                  <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                    Leadership & Team Building
                  </h4>
                  <p className="text-gray-600">
                    Develop communication, management, and organizational
                    skills through active participation in branch activities.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all">
                  <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                    Community & Technical Outreach
                  </h4>
                  <p className="text-gray-600">
                    Encourage initiatives that inspire technological awareness,
                    learning, and innovation-driven growth.
                  </p>
                </div>

              </div>
            </section>

            {/* Student Branch Chapters */}
            <section className="mb-12" aria-labelledby="chapter-section-title">
              <h3
                id="chapter-section-title"
                className="text-3xl font-bold text-primary dark:text-white mb-6 pb-2"
              >
                Student Branch Chapters
              </h3>

              <div
                className="flex flex-wrap gap-3 mb-6"
                role="group"
                aria-label="IEEE student branch chapters"
              >
                {[
                  { id: 'aps', label: 'IEEE APS' },
                  { id: 'mtts', label: 'IEEE MTTS' },
                ].map((chapter) => {
                  const isSelected = activeChapter === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      type="button"
                      onClick={() => setActiveChapter(chapter.id)}
                      aria-pressed={isSelected}
                      className={`rounded-lg px-5 py-3 font-semibold transition-colors ${
                        isSelected
                          ? 'bg-primary text-white shadow-md'
                          : 'border border-gray-200 bg-gray-50 text-gray-700 hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white'
                      }`}
                    >
                      {chapter.label}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800/50 md:p-8">
                <h4 className="text-2xl font-bold text-primary dark:text-white mb-4">
                  {selectedChapter.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {selectedChapter.description}
                </p>

                <div className="space-y-6">
                  {selectedChapter.sections.map((section, sectionIndex) => (
                    <section key={`${activeChapter}-section-${sectionIndex}`}>
                      {section.description && (
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                          {section.description}
                        </p>
                      )}
                      {section.items && (
                        <ul className="list-disc space-y-3 pl-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                          {section.items.map((item, itemIndex) => (
                            <li key={`${activeChapter}-item-${sectionIndex}-${itemIndex}`}>
                              {item.title && (
                                <strong className="text-gray-900 dark:text-white">
                                  {item.title}:{' '}
                                </strong>
                              )}
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setIsImageOpen(true)}
                  aria-label={`Open ${selectedChapter.title} image`}
                  className="mt-8 block w-fit cursor-zoom-in"
                >
                  <img
                    src={selectedChapter.image}
                    alt={`${selectedChapter.title} chapter`}
                    className="h-auto max-h-64 max-w-xs rounded-xl object-contain"
                  />
                </button>
              </div>
            </section>

            {/* How to Join */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold text-primary dark:text-white mb-6 pb-2">
                How to Join
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Joining IEEE is simple! Become a part of a global network of
                innovators, researchers, and technology enthusiasts by
                registering through the official IEEE membership portal.
              </p>

              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-primary dark:text-white">
                    IEEE Membership:
                  </span>
                  <br />
                  <a
                    href="https://www.ieee.org/membership/join/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    https://www.ieee.org/membership/join/
                  </a>
                </div>

                <div>
                  <span className="font-semibold text-primary dark:text-white">
                    IEEE SB IIIT Pune Registration Form:
                  </span>
                  <br />
                  <a
                    href="https://forms.gle/BUy9B7BW5rzj9gm28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    https://forms.gle/BUy9B7BW5rzj9gm28
                  </a>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold text-primary dark:text-white mb-6 pb-2">
                Contact Us
              </h3>

              <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <h4 className="font-semibold text-primary dark:text-white">
                    Avani Yadav
                  </h4>
                  <p className="text-sm text-brand-red mb-2">Chair</p>
                  <a
                    href="mailto:112315037@cse.iiitp.ac.in"
                    className="text-blue-600 hover:underline break-all"
                  >
                    112315037@cse.iiitp.ac.in
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <h4 className="font-semibold text-primary dark:text-white">
                    Manas Vyas
                  </h4>
                  <p className="text-sm text-brand-red mb-2">Vice Chair</p>
                  <a
                    href="mailto:112415121@cse.iiitp.ac.in"
                    className="text-blue-600 hover:underline break-all"
                  >
                    112415121@cse.iiitp.ac.in
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <h4 className="font-semibold text-primary dark:text-white">
                    Jaskaran Singh
                  </h4>
                  <p className="text-sm text-brand-red mb-2">
                    Membership Head
                  </p>
                  <a
                    href="mailto:112415090@cse.iiitp.ac.in"
                    className="text-blue-600 hover:underline break-all"
                  >
                    112415090@cse.iiitp.ac.in
                  </a>
                </div>

              </div>
            </section>

            {/* Follow Us */}
            <section>
              <h3 className="text-3xl font-bold text-primary dark:text-white mb-6 pb-2">
                Follow Us & Stay Updated
              </h3>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">

                <p>
                  <strong>Website:</strong> Website Link will be updated soon
                </p>

                <p>
                  <strong>Instagram:</strong>{' '}
                  <a
                    href="https://www.instagram.com/ieee_iiitp?igsh=aWNneTBwYmNnbWEz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    https://www.instagram.com/ieee_iiitp
                  </a>
                </p>

                <p>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/company/ieee-iiitp-student-branch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    https://www.linkedin.com/company/ieee-iiitp-student-branch/
                  </a>
                </p>

                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:ieee@iiitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    ieee@iiitp.ac.in
                  </a>
                </p>

              </div>
            </section>

            <div className="mt-16 text-right text-sm text-gray-500 dark:text-gray-400">
              Last Updated: 20-06-2026
            </div>

          </div>
        </div>
      </div>
      {isImageOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedChapter.title} image preview`}
          onClick={() => setIsImageOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close image"
            className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-900 shadow-lg transition-colors hover:bg-gray-200"
          >
            <X size={24} />
          </button>
          <img
            src={selectedChapter.image}
            alt={`${selectedChapter.title} chapter`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default IEEEPage;
