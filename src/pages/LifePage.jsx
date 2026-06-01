import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import {
  Users, Award, Sparkles, BookOpen, Heart, MapPin, Image, Calendar,
  Globe, ExternalLink, ChevronRight, CheckCircle2, Building,
  Flame, Code, Compass, Trophy, BookMarked, ShieldAlert,
  Radio, MessageSquare, HelpCircle, Mail, X
} from 'lucide-react';

const Instagram = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Clubs List Data
// Clubs List Data
const CLUBS = {
  'blueprint': {
    name: 'Blueprint',
    desc: 'Blueprint is the college’s graphic design and creative media club, bringing together students passionate about visual storytelling, branding, UI/UX, motion graphics, and digital creativity. The club serves as a collaborative space where members explore industry-standard design tools, develop creative thinking, and work on hands-on projects across multiple domains of design. Through regular workshops, design meets, collaborative sessions, and competitions, Blueprint encourages students to learn, experiment, and grow as creators. From graphic design and illustration to video editing, animation, and 3D design, the club provides opportunities for members to gain practical exposure while building a strong creative community on campus. Blueprint also represents the college in various design events and competitions, promoting innovation, teamwork, and artistic expression among students. With a focus on learning by doing, the club aims to nurture both technical skills and creative confidence in aspiring designers.',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-600 dark:text-blue-400',
    tags: ["Design", "UI/UX", "Creativity"],
    flagship: [
      {
        title: "Zokei Poster-Making Contest (iConclave '26)",
        desc: "A flagship visual design competition organized by Blueprint under iConclave '26. Participants created thematic digital posters, demonstrating creative composition, typography, and graphic storytelling."
      }
    ],
    workshops: [
      {
        title: "UI/UX & Prototyping Masterclass",
        desc: "Hands-on training sessions focused on user-centered design principles, wireframing workflows, and prototyping interfaces in Figma."
      },
      {
        title: "Creative Brand & Media Kit Design",
        desc: "Collaborative meets focused on logo design, brand guidelines, and high-impact marketing graphics for campus fests."
      }
    ],
    achievements: [
      "Created the official visual branding and media kit for iConclave '26",
      "Conducted campus-wide Figma and Illustrator design bootcamps for 150+ students"
    ],
    images: [
      "/assets/clubs/blueprint_1.png",
      "/assets/clubs/blueprint_2.png",
      "/assets/clubs/blueprint_3.png",
      "/assets/clubs/blueprint_4.png",
      "/assets/clubs/blueprint_5.png"
    ],
    leadership: { "heads": [], "email": "blueprint@iiitp.ac.in", "instagram": "@blueprint_iiitp", "website": "" }
  },
  'rang': {
    name: 'Rang',
    desc: 'RANG serves as a vibrant platform for students who perceive stories in colors, meaning in patterns, and emotion in every stroke. Rooted in creativity, collaboration, and innovation, the collective nurtures artistic talent while enriching the cultural and visual identity of the campus. Through these initiatives, RANG plays a significant role in shaping the artistic atmosphere of IIIT Pune, ensuring that creativity remains an integral part of campus life. Beyond workshops and events, RANG is a thriving community that values originality, teamwork, and artistic growth.',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-600 dark:text-pink-400',
    tags: ["Fine Arts", "Crafts", "Sketching"],
    flagship: [
      {
        title: "Halo Runway (iConclave '26)",
        desc: "A major fashion-as-art showcase introduced during iConclave '26. Reflects fashion and makeup design as contemporary visual art forms, drawing huge crowds."
      }
    ],
    workshops: [
      {
        title: "Bleach Painting Workshops",
        desc: "Experimental workshops where students worked on textile textures, techniques, and bleach painting on fabrics."
      },
      {
        title: "Sketching, Mandala & Illustration Meets",
        desc: "Sessions covering illustration fundamentals, sketching, perspective drawings, and precision mandala art."
      },
      {
        title: "Festive Rangoli & Campus Decor Installations",
        desc: "Designing and executing massive traditional rangolis and artistic installations to decorate the campus during national fests."
      }
    ],
    achievements: [
      "Successfully compiled and published the RANG Annual Art Report 2025-26 showcasing student art collections",
      "Completed multiple collaborative art installations around the college host zones"
    ],
    images: [
      "/assets/clubs/rang_1.jpeg",
      "/assets/clubs/rang_2.jpeg",
      "/assets/clubs/rang_3.png",
      "/assets/clubs/rang_4.png",
      "/assets/clubs/rang_5.jpg"
    ],
    leadership: { "heads": [{ "name": "Avani Patil", "role": "Club Head" }, { "name": "Akshad Khune", "role": "Club Co-Head" }], "email": "rang@iiitp.ac.in", "instagram": "@rangiiitp", "website": "" }
  },
  'quantnum': {
    name: 'QuantNum',
    desc: 'Curious About the Magic Behind Numbers? At QuantNum, we believe that mathematics is more than equations and symbols; it is a powerful language, an intellectual adventure, and a work of art. As the Mathematics Club of IIIT Pune, we are dedicated to illuminating the wonders of math, celebrating its timeless elegance and immense real-world value.',
    color: 'from-yellow-500 to-amber-600',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    tags: ["Mathematics", "Analytics", "Logic"],
    flagship: [
      {
        title: "Quant-Bid Arena (iConclave '26)",
        desc: "A unique mathematical bidding tournament hosted during iConclave '26. Combines mathematical problem solving, game theory, strategy, and real-time bidding."
      }
    ],
    workshops: [
      {
        title: "Mathematical Seminars & Logical Bootcamps",
        desc: "Faculty-guided problem-solving seminars to promote logical deduction, discrete math, and analytical thinking."
      },
      {
        title: "Pi Day & National Mathematics Day Celebrations",
        desc: "Interactive math puzzles, quiz sessions, and math history debates celebrating Srinivasa Ramanujan's legacy."
      }
    ],
    achievements: [
      "Organized the highly successful Quant-Bid Arena with massive participation from engineering students across Pune",
      "Maintained weekly 'Problem of the Week' challenges and 'Did You Know' math series on social media to build curiosity"
    ],
    images: [
      "/assets/clubs/quantnum_1.jpg",
      "/assets/clubs/quantnum_2.png",
      "/assets/clubs/quantnum_3.png",
      "/assets/clubs/quantnum_4.png"
    ],
    leadership: { "heads": [{ "name": "Suharsh Kumar", "role": "Club Head (CSE)" }, { "name": "Shreya Khandelwal", "role": "Club Co-Head (ECE)" }], "email": "quantnum@iiitp.ac.in", "instagram": "@quantnum_iiitp", "website": "" }
  },
  'bit-legion': {
    name: 'Bit-Legion',
    desc: 'BiT Legion is the elite coding club of IIIT Pune. It is an active student-driven community of like-minded people striving to reach new heights in the programming field, whether competitive programming, Development, Open Source, interview prep, etc. This year marks the 3rd anniversary of the Bit Legion Coding Club. Throughout these years, the club\'s primary focus has been to introduce students to the beautiful world of programming and build a strong coding culture in the institute. BitLegion ensures that every individual gets a smooth onboarding, to begin with their programming journey.',
    color: 'from-red-500 to-rose-600',
    textColor: 'text-red-600 dark:text-red-400',
    tags: ["Competitive Programming", "DSA", "Algorithms"],
    flagship: [
      {
        title: "InfInITY Global Rated Coding Contest",
        desc: "A flagship competitive coding contest hosted in collaboration with CodeChef. Rated as a 6-star event, it registered 1,28,000+ submissions and 25K+ participants worldwide."
      }
    ],
    workshops: [
      {
        title: "ICPC Prep & Senior Guidance Panels",
        desc: "Guidance forums led by seniors who qualified for the ICPC Asia-West Continentals, sharing roadmap guidelines and contest strategies."
      },
      {
        title: "DSA & Programming Bootcamps",
        desc: "Regular coding drills, mock contest rounds, and coding bootcamps covering advanced algorithms and data structures."
      }
    ],
    achievements: [
      "Ranked 1st among all IIITs at the Amritapuri ICPC Regionals and qualified for the Asia-West Continental Finals",
      "Conducted InfInITY 2k22 globally, attracting top-rated competitive programmers including masters and grandmasters"
    ],
    images: [
      "/assets/clubs/bitlegion_1.jpg",
      "/assets/clubs/bitlegion_2.jpg",
      "/assets/clubs/bitlegion_3.jpg",
      "/assets/clubs/bitlegion_4.jpg",
      "/assets/clubs/bitlegion_5.jpg"
    ],
    leadership: { "heads": [], "email": "bitlegion@iiitp.ac.in", "instagram": "@bit_legion_iiitp", "website": "" }
  },
  'c-cube': {
    name: 'C-CUBE',
    desc: 'Intellectual education influences the head and value-based education influences the heart. In fact, education that does not train the heart can be dangerous. If we want to build character in our offices, homes and society, we must have the wisdom to live a principle-centered life based on honesty, compassion, courage, responsibility etc. Educated persons are those who can choose wisely and courageously under any circumstances between good and bad, between virtuousness and vulgarities regardless of the academic degrees they have.',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-600 dark:text-violet-405',
    tags: ["Personality Development", "Life Ethics", "Leadership"],
    flagship: [
      {
        title: "Discover Yourself (DYS) Seminar Series",
        desc: "A series of value education seminars designed to help students gain a well-balanced perspective in life, manage stress, and build character."
      }
    ],
    workshops: [
      {
        title: "Youth Empowerment Seminars (YES)",
        desc: "Inviting eminent speakers from MNCs and Fortune 500 companies to share advice on professional ethics and career values."
      },
      {
        title: "Technical Talks & Core Engineering Forums",
        desc: "Inviting academic and industry specialists to discuss research and advancements in CS, ECE, and production engineering."
      }
    ],
    achievements: [
      "Helped over 300 students build leadership, career ethics, and a balanced lifestyle through DYS seminars",
      "Successfully established key mentor relationships with experts from leading corporate companies"
    ],
    images: [],
    leadership: { "heads": [], "email": "ccube@iiitp.ac.in", "instagram": "@c_cube_iiitp", "website": "" }
  },
  'e-cell': {
    name: 'E-Cell',
    desc: 'Innovation and Incubation Cell (IIC) at IIIT Pune was formed to conduct guest lectures, contact industries and other places for startup grants, and engage students in product-based projects. Its major focus is to create a vibrant local innovation ecosystem and startup-supporting mechanisms in the institute.',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    tags: ["Entrepreneurship", "Ideation", "Startups"],
    flagship: [
      {
        title: "Ideathon & Hackathon 2k21",
        desc: "Flagship ideation events focusing on product prototyping, business plan drafting, and pitch presentations to potential investors."
      }
    ],
    workshops: [
      {
        title: "National Innovation & Startup Policy Guidelines",
        desc: "Seminars outlining startup frameworks, incubator grants, MoE Innovation Cell (MIC) updates, and Section-8 company guidelines."
      },
      {
        title: "Applied Machine Learning Workshop",
        desc: "A 5-hour hands-on development boot camp on ML models and Python packages, hosted in association with the Internity Foundation."
      },
      {
        title: "Silk Route Quiz",
        desc: "A business, trade, and economic quiz event analyzing commercial history and global market structures."
      }
    ],
    achievements: [
      "Nominated key faculty representatives for NISP implementation and successfully registered the IIC on the MIC portal",
      "Created a comprehensive local startup-supporting mechanism and student mentor pool on campus"
    ],
    images: [],
    leadership: { "heads": [], "email": "ecell@iiitp.ac.in", "instagram": "@e-celliiitpune4629", "website": "" }
  },
  'eclectic': {
    name: 'Eclectic',
    desc: 'A club of like-minded individuals who share a passion for literature and a perennial hunger for fun: At Eclectic, we organise writing activities, conduct open mics and literary quizzes, have book discussions, and much more. However, it isn’t just the activities that define Eclectic — it is our vibrant and welcoming community.',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    tags: ["Literature", "Debates", "Creative Writing"],
    flagship: [
      {
        title: "Eloquence (TEDx Theme Showcase)",
        desc: "An inspiring public speaking event themed 'What if you were a TEDx speaker?'. Former TEDx speakers evaluated student pitches and shared communication keys."
      }
    ],
    workshops: [
      {
        title: "Yours, Clueless Podcast Series",
        desc: "A campus podcast initiative facilitating one-on-one professional conversations between seniors and juniors regarding career choices."
      },
      {
        title: "Auditions & Formal Debate Tournaments",
        desc: "Public debate matches designed to foster critical thinking, prompt argumentation, and clear communication."
      },
      {
        title: "Book Society Discussions",
        desc: "A dedicated book discussion forum where readers explore, review, and debate new literature and non-fiction books."
      }
    ],
    achievements: [
      "Launched the Yours, Clueless podcast series, bridging the gap between academic life and corporate careers",
      "Founded the Book Society to promote a reading and critical writing culture inside the institute"
    ],
    images: [],
    leadership: { "heads": [], "email": "eclectic@iiitp.ac.in", "instagram": "@media", "website": "https://eclectic-iiitp.github.io/eclectic/" }
  },
  'saaz': {
    name: 'SAAZ',
    desc: 'The Music Club of IIIT Pune. SAAZ nurtures vocalists and instrumentalists, setting up jamming sessions, acoustic events, and representing the institute at cultural fests.',
    color: 'from-fuchsia-500 to-pink-600',
    textColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    tags: ["Music", "Vocals", "Instruments"],
    flagship: [
      {
        title: "Ananta Music Showcases",
        desc: "Large band concerts and solo vocal showcases organized during the college's annual socio-cultural festival Ananta."
      }
    ],
    workshops: [
      {
        title: "Acoustic Unplugged Nights",
        desc: "Outdoor jamming sessions promoting instrumental collaboration, acoustic performances, and student songwriting."
      },
      {
        title: "Vocal & Instrumental Masterclasses",
        desc: "Training sessions covering guitar chords, keyboard scales, drumming patterns, and classical vocal techniques."
      }
    ],
    achievements: [
      "Represented IIIT Pune in national inter-college music fests, securing top positions in solo and group singing",
      "Recorded and produced original soundtracks for college promotional media and short student films"
    ],
    images: [],
    leadership: { "heads": [], "email": "saaz@iiitp.ac.in", "instagram": "@saaz_iiitp", "website": "https://saaz-iiitp.vercel.app/" }
  },
  'vanity-crew': {
    name: 'Vanity Crew',
    desc: 'Vanity Crew is the official dance club of IIIT Pune, established with the objective of fostering creativity, expression, discipline, and community through the art of dance. The club welcomes dancers from diverse backgrounds and styles, including contemporary, hip-hop, fusion, folk, and classical dance forms such as Bharatnatyam. Vanity Crew believes in creating an inclusive environment where both experienced performers and beginners can learn, collaborate, and grow together.',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-600 dark:text-orange-400',
    tags: ["Dance", "Choreography", "Hip-hop"],
    flagship: [
      {
        title: "Nritya Nova Dance Competition",
        desc: "The annual flagship intercollegiate dance contest organized by Vanity Crew, showcasing contemporary, hip-hop, and folk styles."
      }
    ],
    workshops: [
      {
        title: "Republic Day & Shivjayanti Tribute Acts",
        desc: "Massive tribute dance performances blending traditional Maharashtrian folk dances (like Lavani) with contemporary styles."
      },
      {
        title: "Spontaneous Campus Flash Mobs",
        desc: "Choreographed street dances in central campus zones to build community engagement and promote cultural fests."
      },
      {
        title: "Choreography & Style Masterclasses",
        desc: "Auditions and regular workshops for both beginners and experienced dancers covering hip-hop, contemporary, and classical forms."
      }
    ],
    achievements: [
      "Successfully performed at iConclave, receiving high praise for group coordination, choreographic complexity, and energy",
      "Maintained the official club website vanitycrew.vercel.app to share training schedules and dance routines"
    ],
    images: [
      "/assets/clubs/vanity-crew_1.png",
      "/assets/clubs/vanity-crew_2.jpg",
      "/assets/clubs/vanity-crew_3.jpg",
      "/assets/clubs/vanity-crew_4.jpg",
      "/assets/clubs/vanity-crew_5.jpg",
      "/assets/clubs/vanity-crew_6.png"
    ],
    leadership: { "heads": [{ "name": "Avani Yadav", "role": "Club Head" }, { "name": "Arushi Ramesh", "role": "Club Co-Head" }, { "name": "Aaryan Singh", "role": "Club Co-Head" }], "email": "vanitycrew@iiitp.ac.in", "instagram": "@vanity_crew_iiitp", "website": "https://vanitycrew.vercel.app/" }
  },
  'sports': {
    name: 'Sports',
    desc: 'Sports are a great way to make friends, learn new skills and have fun. Apart from providing a social outlet for people sharing a common interest in a particular sport, they act as a platform to meet new people from different backgrounds and experiences. Sports and fitness go hand in hand and are essential for good mental and physical health. We at IIIT Pune Sports Club are here to build a community and create a sense of belonging to inspire people to reach their full potential and to help people improve their physical fitness and health.',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-600 dark:text-green-400',
    tags: ["Athletics", "Football", "Cricket"],
    flagship: [
      {
        title: "Eklavya – Annual Sports Fest",
        desc: "A massive 3-day annual sports festival featuring football, cricket, volleyball, basketball, badminton, kabaddi, chess, and carrom."
      }
    ],
    workshops: [
      {
        title: "Esports Tournament",
        desc: "An online gaming tournament featuring FIFA, Valorant, Clash Royale, and Fall Guys, complete with live screenings on campus."
      },
      {
        title: "Inter-Batch Kabaddi Leagues",
        desc: "Intra-college tournament fostering batch pride, sportsmanship, and teamwork, with Batch '24 winning the trophy."
      }
    ],
    achievements: [
      "Volleyball team won the Bronze Medal and Football team secured 4th position at the national Inter-IIIT Meet (Kancheepuram)",
      "Sent an athletic contingent to represent the institute at the Inter-IIIT Sports Meet at IIITDM Kurnool"
    ],
    images: [
      "/assets/clubs/sports_1.png",
      "/assets/clubs/sports_2.jpg",
      "/assets/clubs/sports_3.jpg",
      "/assets/clubs/sports_4.jpeg",
      "/assets/clubs/sports_5.jpeg",
      "/assets/clubs/sports_6.jpeg",
      "/assets/clubs/sports_7.jpeg"
    ],
    leadership: { "heads": [{ "name": "Shriraj Nilare", "role": "Sports Club Head" }, { "name": "Bhavin Barad", "role": "Sports Club Co-Head" }], "email": "sports@iiitp.ac.in", "instagram": "@sports_iiitp", "website": "" }
  },
  'rofies': {
    name: 'ROFIES',
    desc: 'R.O.F.I.E.S. (Robotics Oriented Futuristic & Innovative Engineers Society) is the official robotics and embedded systems club of IIIT Pune, focused on promoting practical learning, innovation, and technical development in the fields of robotics, embedded systems, IoT, and automation.',
    color: 'from-sky-500 to-indigo-600',
    textColor: 'text-sky-600 dark:text-sky-400',
    tags: ["Robotics", "Embedded Systems", "IoT"],
    flagship: [
      {
        title: "Hashiriya – The Street Racers (iConclave '26)",
        desc: "A premier robotics racing tournament organized as part of iConclave 2026. Vehicles raced through complex, obstacle-ridden tracks."
      }
    ],
    workshops: [
      {
        title: "Project Aura Companion Robot Development",
        desc: "Building a mood-aware interactive companion robot that cleared Level 1 screening of the international TRON 2026 contest."
      },
      {
        title: "Autonomous Drone Systems",
        desc: "Building and testing quadcopters equipped with autonomous navigation, path planning, object detection, and a GUI monitoring panel."
      },
      {
        title: "Embedded Systems & IoT Bootcamps",
        desc: "Hands-on workshops covering Arduino programming, Raspberry Pi integrations, sensor calibration, and microcontrollers."
      }
    ],
    achievements: [
      "Represented IIIT Pune at MindSpark (COEP) and Cognizance (IIT Roorkee) with award-winning robotics projects",
      "Successfully cleared Level 1 of TRON 2026 with Project Aura, competing against global universities"
    ],
    images: [
      "/assets/clubs/rofies_1.jpeg",
      "/assets/clubs/rofies_2.jpeg",
      "/assets/clubs/rofies_3.jpeg",
      "/assets/clubs/rofies_4.jpeg",
      "/assets/clubs/rofies_5.png"
    ],
    leadership: { "heads": [], "email": "rofies@iiitp.ac.in", "instagram": "@media", "website": "" }
  },
  'localhost': {
    name: 'localhost',
    desc: '“Better developers, better humans and together” To be a place for developers to hang out, realise exciting ideas and become a strong network of builders who will leave their mark on the world. From weekly sprints of Web Development and Flutter Development to contributing at Hacktoberfest and GSoC, localhost is marching on many fronts to bring development to the students of IIIT Pune.',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    tags: ["Web Dev", "App Dev", "Open Source"],
    flagship: [
      {
        title: "Nexus Hackathon",
        desc: "A flagship development hackathon where teams built and pitched software products solving real-world challenges in 36 hours."
      }
    ],
    workshops: [
      {
        title: "Hacktoberfest & Git Workshops",
        desc: "Open-source contribution boot camps teaching Git commands, branching, GitHub pull requests, and open-source practices."
      },
      {
        title: "Weekly Development Sprints",
        desc: "High-energy coding sessions where members collaborated on active codebases to solve and deploy features."
      },
      {
        title: "Full-Stack & Flutter Bootcamps",
        desc: "Tutorial drives focused on React development, Node.js REST APIs, database design, and mobile app development in Flutter."
      }
    ],
    achievements: [
      "Conducted full-scale Hacktoberfest workshops, resulting in over 80 students completing open-source contribution pull requests",
      "Maintained active community dev channels on Telegram to support beginners in web and app development"
    ],
    images: [
      "/assets/clubs/localhost_1.jpg",
      "/assets/clubs/localhost_2.jpg",
      "/assets/clubs/localhost_3.gif"
    ],
    leadership: { "heads": [], "email": "localhost@iiitp.ac.in", "instagram": "@localhost_iiitp", "website": "" }
  },
  'horizon': {
    name: 'Horizon',
    desc: 'Horizon, established in January 2022 with the ideology of "capture imagination," continues to steadfastly pursue and expand upon this captivating concept. As the photography and videography club of IIIT Pune, Horizon has swiftly emerged as one of the institute\'s most dynamic and youthful clubs. Its ubiquitous presence is felt throughout campus events, where it skillfully encapsulates cherished memories, earning Horizon the designation of being IIIT Pune\'s dedicated media house.',
    color: 'from-blue-600 to-violet-700',
    textColor: 'text-blue-600 dark:text-blue-400',
    tags: ["Photography", "Videography", "Media"],
    flagship: [
      {
        title: "Annual Campus Photo Exhibition",
        desc: "A showcase of IIIT Pune's best student photography capturing campus infrastructure, laboratory life, and cultural events."
      }
    ],
    workshops: [
      {
        title: "Pune Cultural Photowalks",
        desc: "Out-of-campus photowalks to Kasba Peth and FC Road, cooperating with Photowalk India to capture local architecture and street life."
      },
      {
        title: "Camera Controls & Video Editing",
        desc: "Workshops covering DSLR manual controls, lighting adjustments, composition grids, and editing in Premiere Pro."
      }
    ],
    achievements: [
      "Successfully operated as IIIT Pune's official media house, covering all major college events, fests, and guest lectures",
      "Maintained the official Linktree portal to share digital photography portfolios and promotional videography"
    ],
    images: [],
    leadership: { "heads": [], "email": "horizon@iiitp.ac.in", "instagram": "@horizon_iiitp", "website": "" }
  },
  'abhinay': {
    name: 'Abhinay',
    desc: 'Abhinay isn\'t just a club; it\'s where stories come alive. Step into our world and unleash your inner performer. From thrilling performances to lifelong friendships, Abhinay is the stage where your journey begins. Abhinay is a tradition of artistic excellence that continues to evolve, from street plays to finishing top 5 nationwide in IIT Kharagpur\'s Springfest and performing street play prelims in MIT-WPU Mood Indigo.',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-600 dark:text-amber-400',
    tags: ["Street Play", "Acting", "Theater"],
    flagship: [
      {
        title: "Dastaan-E-Nukkad Street Plays",
        desc: "Powerful, socially conscious street plays addressing issues like anti-ragging awareness, academic stress, and social responsibility."
      }
    ],
    workshops: [
      {
        title: "Springfest Murder Thriller Production",
        desc: "Scripting and rehearsing an original murder thriller play that was selected for the final stage at IIT Kharagpur."
      },
      {
        title: "Mood Indigo Street Play Performance",
        desc: "Scripting and performing the street play preliminary round at MIT-WPU for IIT Bombay's Mood Indigo."
      },
      {
        title: "Acting & Backstage Production",
        desc: "Training sessions on character development, scriptwriting, voice modulation, stage lights, and backstage sound design."
      }
    ],
    achievements: [
      "Finished in the Top 5 nationwide in the Springfest finals hosted by IIT Kharagpur",
      "Secured outstanding recognition for Dastaan-E-Nukkad street play at VIT Pune, winning 1st prize"
    ],
    images: [
      "/assets/clubs/abhinay_1.png",
      "/assets/clubs/abhinay_2.png",
      "/assets/clubs/abhinay_3.png",
      "/assets/clubs/abhinay_4.png",
      "/assets/clubs/abhinay_5.png",
      "/assets/clubs/abhinay_6.png",
      "/assets/clubs/abhinay_7.png",
      "/assets/clubs/abhinay_8.png"
    ],
    leadership: { "heads": [{ "name": "Swayam Patel", "role": "Club Head (CSE 3rd Year)" }, { "name": "Aashutosh Bharti", "role": "Club Co-Head (CSE 3rd Year)" }], "email": "abhinay@iiitp.ac.in", "instagram": "@abhinay_iiitp", "website": "" }
  },
  'q-riocity': {
    name: 'Q-riocity',
    desc: 'The club brings together students who enjoy exploring the world through quizzes, discussions, games, and interactive activities across a wide range of topics including history, geography, current affairs, global culture, pop-culture, sports, literature, cinema, anime, defence, science, technology, space, languages, flags, maps, internet culture, and more. Q-Riocity is more than a quiz club. It is a close-knit community where students can learn, host, participate, and have fun with any topic they are passionate about.',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-600 dark:text-teal-400',
    tags: ["Quizzes", "Trivia", "General Knowledge"],
    flagship: [
      {
        title: "Cognition: Seikai Showdown Quiz",
        desc: "A major visual anime and pop-culture quiz organized during iConclave, featuring buzzer and country-recognition rounds."
      }
    ],
    workshops: [
      {
        title: "Freshers Audition & Welcome Quiz",
        desc: "Auditions and introductory quiz leagues designed to onboard first-year students into the quizzing community."
      },
      {
        title: "Sakura Survey (Family Feud style)",
        desc: "A themed Family Feud visual game where teams guessed the most popular survey answers submitted by the student body."
      },
      {
        title: "Theme-based Trivia Leagues",
        desc: "Weekly quizzes covering world history, geography maps, scientific breakthroughs, pop culture, flags, and linguistics."
      }
    ],
    achievements: [
      "Organized Cognition: Seikai Showdown with great success and high participation across Pune colleges",
      "Successfully built a welcoming learning-sharing environment for quiz hosting and framing"
    ],
    images: [
      "/assets/clubs/qriocity_1.png",
      "/assets/clubs/qriocity_2.jpg",
      "/assets/clubs/qriocity_3.jpg",
      "/assets/clubs/qriocity_4.jpg",
      "/assets/clubs/qriocity_5.png",
      "/assets/clubs/qriocity_6.png",
      "/assets/clubs/qriocity_7.jpg",
      "/assets/clubs/qriocity_8.jpg",
      "/assets/clubs/qriocity_9.jpg"
    ],
    leadership: { "heads": [{ "name": "Aditya Apoorva Negi", "role": "Club Head (CSE 3rd Year)" }, { "name": "Aadit Bajaj", "role": "Core Team Member (CSE 2nd Year)" }, { "name": "Amol Raj", "role": "Core Team Member (CSE 2nd Year)" }], "email": "q_riocity@iiitp.ac.in", "instagram": "@q_riocity_", "website": "" }
  },
};

// Activities List Data
const ACTIVITIES = [
  {
    id: 'azadi',
    name: 'Azadi Ka Amrit Mahotsav',
    paragraphs: [
      'Azadi Ka Amrit Mahotsav is an initiative of the Government of India to celebrate and commemorate 75 years of progressive India and the glorious history of its people, culture, and achievements. It is dedicated to the citizens of India who hold the power to enable the vision of activating India 2.0, fueled by the spirit of Atmanirbhar Bharat.',
      'As part of the celebrations, the EBSB Club of IIIT Pune, in association with the EBSB Club of IIIT Trichy, organized two online expert lectures. The joint event was attended by more than 130 students and faculty members from both institutes, promoting a shared spirit of national unity and collaboration.',
      'During the event, Prof. R. Gururaj from the Department of Humanities and Social Sciences at NIT Trichy addressed the gathering on the topic of "Unity of Purpose" via Google Meet, encouraging the participants to convert small local improvements into significant national gains.'
    ],
    images: [
      'https://www.iiitp.ac.in/sites/default/files/inline-images/azadikamohotsav.png',
      'https://www.iiitp.ac.in/sites/default/files/inline-images/1.png',
      'https://www.iiitp.ac.in/sites/default/files/inline-images/2_0.png'
    ]
  },
  {
    id: 'ebsb',
    name: 'EBSB (Ek Bharat Shreshtha Bharat)',
    paragraphs: [
      'The "Ek Bharat Shreshtha Bharat" initiative was announced by Honourable Prime Minister Shri Narendra Modi on 31st October 2015, on the occasion of the 140th birth anniversary of Sardar Vallabhbhai Patel. Through this innovative initiative, knowledge of the cultures, traditions, and practices of various states and Union Territories will strengthen mutual understanding and bonds between states, further reinforcing the unity and integrity of India.',
      'IIIT Pune has actively organized several national programs under this scheme, most notably the 75th Anniversary — Azadi Ka Amrit Mahotsav, International Mother Language Day, and Aatmanirbhar Bharat Saptah 2021. In addition, various special cultural and linguistic exchange sessions were conducted to promote interaction among students from diverse backgrounds.',
      'The institute has also raised awareness among students through patriotic song presentations, a special guest lecture on e-waste management during Swachh Bharat Pakhwada 2021, and an Integrity Pledge-taking ceremony — all contributing to building a socially responsible and self-reliant student community.'
    ],
    images: [
      'https://www.iiitp.ac.in/sites/default/files/inline-images/ebbs.png'
    ]
  },
  {
    id: 'fit-india',
    name: 'Fit India Movement',
    paragraphs: [
      'Fit India Movement was launched on 29th August 2019 by the Honourable Prime Minister with the aspiration to make fitness an integral part of our daily lives. The movement aims to bring about behavioral changes and move towards a physically active and healthy lifestyle. It focuses on promoting fitness as a free and easy lifestyle choice while fostering indigenous games across all schools, colleges, and villages.',
      'In support of this movement, IIIT Pune organized the "Fit India Freedom Run" on August 13, 2021. The event witnessed enthusiastic participation from students and faculty members who ran to promote a physically active lifestyle, keeping in view all necessary health and safety guidelines. The campus continues to encourage sports and regular physical exercises to maintain sound mental and physical well-being.'
    ],
    images: [
      'https://www.iiitp.ac.in/sites/default/files/inline-images/fit%20india.png'
    ]
  },
  {
    id: 'hindi',
    name: 'Hindi Pakhwada',
    paragraphs: [
      'IIIT Pune celebrates Hindi Pakhwada every year to promote and honour the Hindi language. This fortnight-long programme begins on 14th September, which is also observed as Hindi Diwas. Under the aegis of Hindi Pakhwada, a range of events are organized for students including poetry writing, essay writing, recitation, debates, painting, and quizzes.',
      'This year, the programme commenced with a painting competition. More than 50 students enthusiastically participated in the various competitions organized in coordination with the Hindi Committee. Shivam Patel secured first place in the painting competition, Saurabh Jaiswal won the poetry writing event, and Sonu Gupta topped the essay writing contest. Additionally, Rohini Maidamwar won the poetry translation event, Satyam Garg and Aryan Sharma won the riddle competition, and Prasad Dalvi emerged victorious in the quiz.',
      'The organization of these diverse competitions has given a new direction to the promotion of the official language. The entire event was successfully conducted under the mentorship and supervision of faculty members from the Hindi Cell — Prof. Ritu Tiwari, Dr. Chandrakant Guled, Dr. Bhupendra Singh, Dr. Rahul Dixit, and Dr. Anagha Khiste.'
    ],
    images: [
      { src: '/assets/activities/hindi_pakhwada_prize_distribution.jpg', caption: 'Prize Distribution Ceremony' },
      { src: '/assets/activities/hindi_pakhwada_day_1.jpg', caption: 'Day 1: Painting Competition' },
      { src: '/assets/activities/hindi_pakhwada_day_2.jpg', caption: 'Day 2: Poetry & Essay Writing Competitions' }
    ]
  },
  {
    id: 'swachh',
    name: 'Swachh Bharat Abhiyan',
    paragraphs: [
      'Swachh Pakhwada is a fortnight-long programme initiated by the Government of India to ensure the collective participation of citizens in cleanliness activities and to truly transform Swachh Bharat into a mass citizen movement. The inauguration and pledge-taking ceremony for Swachh Pakhwada 2021 was held on 1st September 2021, in which all faculty members and staff of the institute participated.',
      'As directed by the Ministry of Education, IIIT Pune organized a special guest lecture during Swachh Pakhwada 2021 to identify and promote innovative cleanliness practices. The session, held on 14th September 2021, saw Ms. Shipra Bhalla Chaudhary guide students and staff on modern and effective methods of e-waste management, raising awareness about responsible disposal and sustainable practices.'
    ],
    images: [
      'https://www.iiitp.ac.in/sites/default/files/inline-images/swachbharat.png'
    ]
  },
  {
    id: 'unity',
    name: 'Unity Day (Rashtriya Ekta Diwas)',
    paragraphs: [
      'Under the aegis of "Azadi Ka Amrit Mahotsav", IIIT Pune organized an Integrity Pledge taking ceremony to mark National Unity Day. This campaign celebrates the spirit of integration and focuses on self-reliance with integrity across the country.',
      'The ceremony was held on 2nd October 2021 via Google Meet, bringing together faculty members, administrative staff, and students. By taking the integrity pledge, participants committed themselves to support transparency, moral principles, and a corruption-free society, contributing collectively toward a self-reliant and strong India.'
    ],
    images: [
      'https://www.iiitp.ac.in/sites/default/files/inline-images/unityPledge.png'
    ]
  },
  {
    id: 'yoga',
    name: 'Yoga Day (International Yoga Day)',
    paragraphs: [
      'Every year on June 21st, IIIT Pune observes International Yoga Day. The institute understands the invaluable gift of the ancient Indian tradition of Yoga and is committed to emerge as a beacon for a holistic approach to health and well-being. Yoga provides a balanced way of life, striking a harmony between mental calmness and physical vitality.',
      'For the Yoga Day celebrations, Mrs. Neha Parakhe, an experienced instructor from Yoga Vidya Gurukul, was invited to the campus to guide students and staff. She conducted an interactive yoga and pranayama session, demonstrating postures that enhance concentration and relieve stress for academic excellence.'
    ],
    images: [
      { src: '/assets/activities/yoga_day_group.jpg', caption: 'Yoga Day Participants Group Photo' },
      { src: '/assets/activities/yoga_day_pranayama.jpg', caption: 'Pranayama & Breathing Exercises' },
      { src: '/assets/activities/yoga_day_vrikshasana.jpg', caption: 'Vrikshasana (Tree Pose) Practice' }
    ]
  },
  {
    id: 'youth',
    name: 'Youth Day (National Youth Day)',
    paragraphs: [
      'India celebrates National Youth Day on 12th January every year to honour the birth anniversary of Swami Vivekananda, one of India\'s greatest spiritual leaders and believers in youth power. Popularly known as "Yuva Diwas", the day encourages the youth in the country to channelize their potential for the nation\'s constructive development.',
      'The celebration at IIIT Pune was organized under the theme "Channelizing Youth Power for Nation Building". The institute hosted motivational speech contests, lectures, and group discussions aimed at sharing the vital and empowering thoughts of Swami Vivekananda among the student community, inspiring them to lead purposeful lives.'
    ],
    images: [
      'https://www.iiitp.ac.in/sites/default/files/inline-images/y1.png',
      'https://www.iiitp.ac.in/sites/default/files/inline-images/y2.png',
      'https://www.iiitp.ac.in/sites/default/files/inline-images/3.png',
      'https://www.iiitp.ac.in/sites/default/files/inline-images/4.png'
    ]
  },
  {
    id: 'ai-talent',
    name: 'AI Talent Hackathon (Thinking Machine)',
    paragraphs: [
      'IIIT Pune successfully hosted the national-level “Thinking Machine” Hackathon from 10–13 February 2026. The technical extravaganza witnessed an overwhelming response with more than 330 registrations from colleges across India. After rigorous evaluation rounds, 8 finalist teams advanced to present their innovative AI-driven solutions during the grand finale.',
      'The event was inaugurated by Dr. Sushant Kumar, Associate Dean (R&D), with valuable guidance extended by Dr. Sanjeev Sharma and Dr. Bhupendra Singh. Dr. Priyank Jain coordinated the hackathon, and the jury panel comprised internal faculty members Dr. Priyank Jain, Dr. Shrikant Salve, Dr. Sonam Maurya, alongside external industry veteran Mr. Manoj Mishra from Zensar Technologies.',
      'After highly competitive rounds, Team Bit Misfit from VIT secured 1st Place. Cypherforce from MMCOE, Mumbai and Dev Sters from IIIT Pune were jointly awarded 2nd Place, while Team Weights of Sin from DJSCE, Mumbai secured 3rd Place out of the prize pool of over ₹20,000.'
    ],
    images: [
      'https://www.iiitp.ac.in/sites/default/files/2026-02/1_0.jpg',
      'https://www.iiitp.ac.in/sites/default/files/2026-02/2.jpg',
      'https://www.iiitp.ac.in/sites/default/files/2026-02/3.jpg',
      'https://www.iiitp.ac.in/sites/default/files/2026-02/4.jpg',
      'https://www.iiitp.ac.in/sites/default/files/2026-02/5_0.jpg'
    ]
  }
];

// Photo Gallery Data
const GALLERY_ITEMS = [
  {
    title: 'Traditional Day Celebration',
    category: 'Cultural',
    imgUrl: 'https://iiitp.ac.in/sites/default/files/2023-03/DSC_0845%20%281%29%20%281%29.jpg'
  },
  {
    title: 'Mridangam Performance & Fest',
    category: 'Cultural',
    imgUrl: 'https://iiitp.ac.in/sites/default/files/2023-03/DSC_3082%20%281%29%20%281%29.jpg'
  },
  {
    title: 'Republic Day Celebration Flag Hoisting',
    category: 'National Day',
    imgUrl: 'https://www.iiitp.ac.in/sites/default/files/inline-images/1.jpg'
  },
  {
    title: 'IIIT Pune Campus Life Highlights',
    category: 'Campus Life',
    imgUrl: 'https://www.iiitp.ac.in/sites/default/files/inline-images/1_2.jpg'
  },
  {
    title: 'Fit India Movement Athletic Drive',
    category: 'Sports',
    imgUrl: 'https://www.iiitp.ac.in/sites/default/files/inline-images/Picture%20%281%29.jpeg'
  },
  {
    title: 'Republic Day March & Gatherings',
    category: 'National Day',
    imgUrl: 'https://www.iiitp.ac.in/sites/default/files/inline-images/repub.jpg'
  }
];

const LifePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const activeTab = searchParams.get('tab') || 'overview';
  const activeClubKey = searchParams.get('club') || 'blueprint';
  const activeActKey = searchParams.get('act') || 'azadi';

  // Synchronize title on load & redirect for SAAZ
  useEffect(() => {
    window.scrollTo(0, 0);
    if (activeTab === 'clubs' && activeClubKey === 'saaz') {
      window.location.href = 'https://saaz-iiitp.vercel.app/';
    }
  }, [activeTab, activeClubKey]);

  const handleTabChange = (tabKey) => {
    setSearchParams({ tab: tabKey });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'clubs': {
        const club = CLUBS[activeClubKey] || CLUBS['blueprint'];

        return (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Club Selector */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm lg:sticky lg:top-24 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                  <h3 className="text-gray-800 dark:text-white font-bold font-serif text-base">
                    Student Clubs
                  </h3>
                  <a
                    href="https://www.iiitp.ac.in/sites/default/files/2025-09/Club%20Head%20and%20Co%20Head-2025-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:hidden text-xs font-bold text-accent dark:text-accent-dark flex items-center gap-1 hover:underline"
                  >
                    <span>Heads</span>
                    <ExternalLink size={11} />
                  </a>
                </div>

                {/* Horizontal scrollable on mobile, vertical list on desktop */}
                <div className="flex flex-row overflow-x-auto gap-2 no-scrollbar lg:flex-col lg:max-h-[60vh] lg:overflow-y-auto lg:pr-1 pb-2 lg:pb-0">
                  {Object.keys(CLUBS).map((key) => {
                    const c = CLUBS[key];
                    const isSelected = activeClubKey === key;
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          if (key === 'saaz') {
                            window.location.href = 'https://saaz-iiitp.vercel.app/';
                          } else {
                            setSearchParams({ tab: 'clubs', club: key });
                          }
                        }}
                        className={`shrink-0 lg:shrink lg:w-full flex flex-row lg:flex-col items-center lg:items-start gap-2 lg:gap-0 px-4 py-2 lg:px-3.5 lg:py-3 rounded-full lg:rounded-xl text-left transition-all duration-250 border ${isSelected
                            ? 'bg-primary text-white border-primary shadow-sm'
                            : 'text-gray-700 dark:text-gray-300 bg-transparent border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-850 hover:border-gray-200 dark:hover:border-gray-700'
                          }`}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-white' : 'bg-primary'}`} />
                          <span className="font-bold text-xs lg:text-sm truncate">{c.name}</span>
                        </div>
                        {c.tags && c.tags.length > 0 && (
                          <span className={`hidden lg:block text-[10px] mt-1.5 truncate w-full ${isSelected ? 'text-white/80' : 'text-gray-400 dark:text-gray-500'}`}>
                            {c.tags.slice(0, 2).join(' • ')}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <a
                  href="https://www.iiitp.ac.in/sites/default/files/2025-09/Club%20Head%20and%20Co%20Head-2025-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:flex w-full items-center justify-between gap-3 px-3.5 py-3 rounded-xl text-left text-xs font-bold text-accent dark:text-accent-dark hover:bg-gray-50 dark:hover:bg-gray-850 mt-3 border border-dashed border-gray-200 dark:border-gray-700 transition-colors"
                >
                  <span>View Club Heads</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Club Details Panel */}
            <div className="flex-1">
              <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                {/* Visual Accent Top Bar */}
                <div className="h-1.5 bg-primary" />

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="border-b border-gray-100 dark:border-gray-800 pb-5 mb-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-primary dark:text-white">
                      {club.name}
                    </h2>
                  </div>

                  {/* About Section */}
                  <div className="mb-8">
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-justify leading-relaxed whitespace-pre-line">
                      {club.desc}
                    </p>
                  </div>

                  {/* Two-Column Details Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (2/3 width) for events & workshops */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Flagship Initiatives */}
                      {club.flagship && club.flagship.length > 0 && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold font-serif text-primary dark:text-white border-b pb-2 border-gray-100 dark:border-gray-800">
                            Flagship Initiatives &amp; Events
                          </h3>
                          <div className="grid grid-cols-1 gap-4">
                            {club.flagship.map((item, idx) => (
                              <div key={idx} className="relative overflow-hidden bg-gray-50 dark:bg-gray-850/50 p-5 rounded-2xl border-l-4 border-l-primary/60 dark:border-l-primary/60 border-y border-r border-gray-100 dark:border-gray-800/80 shadow-sm hover:shadow-md transition-all duration-200">
                                <span className="absolute top-4 right-4 text-[9px] font-bold text-gray-450 dark:text-gray-500 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded uppercase tracking-wider">
                                  Flagship Event
                                </span>
                                <h4 className="font-bold text-sm text-gray-800 dark:text-white mb-2 pr-20">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-gray-650 dark:text-gray-400 text-justify leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Workshops & Training */}
                      {club.workshops && club.workshops.length > 0 && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold font-serif text-primary dark:text-white border-b pb-2 border-gray-100 dark:border-gray-800">
                            Workshops &amp; Technical Training
                          </h3>
                          <div className="grid grid-cols-1 gap-4">
                            {club.workshops.map((item, idx) => (
                              <div key={idx} className="pl-4 border-l-2 border-primary/20 py-1">
                                <h4 className="text-sm font-bold text-gray-850 dark:text-white mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-650 dark:text-gray-400 text-justify leading-relaxed">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column (1/3 width) for Leadership & Connect */}
                    <div className="space-y-6">
                      {/* Club Leadership */}
                      <div className="bg-gray-50/50 dark:bg-gray-850/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                        <h3 className="text-sm font-bold text-primary dark:text-white pb-2 border-b border-gray-200/60 dark:border-gray-800">
                          Club Leadership
                        </h3>
                        {club.leadership.heads && club.leadership.heads.length > 0 ? (
                          <div className="space-y-3">
                            {club.leadership.heads.map((head, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800/80 shadow-xs">
                                <div className={`w-8 h-8 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary dark:text-primary-dark text-[10px] font-bold shrink-0 shadow-xs`}>
                                  {head.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-xs font-bold text-gray-850 dark:text-gray-300 truncate">{head.name}</span>
                                  <span className="text-[9px] text-gray-500 dark:text-gray-450 truncate">{head.role}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-gray-500 dark:text-gray-455 italic">
                            Leadership contacts are managed via the student welfare registry.
                          </p>
                        )}
                      </div>

                      {/* Reach Out / Connect */}
                      <div className="bg-gray-50/50 dark:bg-gray-850/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                        <h3 className="text-sm font-bold text-primary dark:text-white pb-2 border-b border-gray-200/60 dark:border-gray-800">
                          Reach Out &amp; Connect
                        </h3>
                        <div className="flex flex-col gap-2">
                          {club.leadership.email && (
                            <a
                              href={`mailto:${club.leadership.email}`}
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white dark:bg-surface-dark text-xs text-gray-650 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:shadow-xs transition-all border border-gray-100 dark:border-gray-800/80"
                            >
                              <Mail size={14} className="text-gray-400 shrink-0" />
                              <span className="truncate">{club.leadership.email}</span>
                            </a>
                          )}
                          {club.leadership.instagram && (
                            <a
                              href={`https://instagram.com/${club.leadership.instagram.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white dark:bg-surface-dark text-xs text-gray-650 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:shadow-xs transition-all border border-gray-100 dark:border-gray-800/80"
                            >
                              <Instagram size={14} className="text-gray-400 shrink-0" />
                              <span className="truncate">{club.leadership.instagram}</span>
                            </a>
                          )}
                          {club.leadership.website && (
                            <a
                              href={club.leadership.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white dark:bg-surface-dark text-xs text-gray-655 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:shadow-xs transition-all border border-gray-100 dark:border-gray-800/80 font-bold"
                            >
                              <ExternalLink size={14} className="text-gray-400 shrink-0" />
                              <span>Visit Website</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activities Gallery (Full Width at Bottom) */}
                  {activeClubKey === 'eclectic' ? (
                    <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8 flex items-center justify-center">
                      <a
                        href="https://eclectic-iiitp.github.io/eclectic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                      >
                        <span>Visit Eclectic Website</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  ) : (
                    <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8">
                      <h3 className="text-lg font-bold font-serif text-primary dark:text-white mb-4">
                        Activities Gallery
                      </h3>
                      {club.images && club.images.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {club.images.map((imgUrl, idx) => (
                            <div
                              key={idx}
                              onClick={() => setSelectedImage(imgUrl)}
                              className="group relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800/80 shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                              <img
                                src={imgUrl}
                                alt={`${club.name} Activity ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => { e.target.closest('.group').style.display = 'none'; }}
                              />
                              {/* Glassmorphic hover overlay */}
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                  <Image size={18} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-gray-50/50 dark:bg-gray-900/10">
                          <div className={`w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3 shadow-xs`}>
                            <Image size={22} />
                          </div>
                          <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Gallery Updates in Progress</h4>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
                            We are currently updating visual highlights for {club.name}. Check back soon to see snapshots of our fests, workshops, and competitions!
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'activities': {
        return (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Activity Selector */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm lg:sticky lg:top-24 space-y-4">
                <h3 className="text-gray-800 dark:text-white font-bold font-serif px-2 pb-2 border-b border-gray-100 dark:border-gray-800 text-base">
                  National Initiatives
                </h3>
                {/* Horizontal scrollable on mobile, vertical list on desktop */}
                <div className="flex flex-row overflow-x-auto gap-2 no-scrollbar lg:flex-col lg:max-h-[60vh] lg:overflow-y-auto lg:pr-1 pb-2 lg:pb-0">
                  {ACTIVITIES.map((act) => {
                    const isSelected = activeActKey === act.id;
                    return (
                      <button
                        key={act.id}
                        onClick={() => setSearchParams({ tab: 'activities', act: act.id })}
                        className={`shrink-0 lg:shrink lg:w-full flex items-center gap-2 px-4 py-2 lg:px-3.5 lg:py-3 rounded-full lg:rounded-xl text-left transition-all border ${isSelected
                            ? 'bg-primary text-white border-primary shadow-sm'
                            : 'text-gray-700 dark:text-gray-300 bg-transparent border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-855 hover:border-gray-200 dark:hover:border-gray-700'
                          }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-white' : 'bg-primary'}`} />
                        <span className="font-bold text-xs lg:text-sm truncate">{act.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Activity details panel */}
            <div className="flex-1">
              {(() => {
                const act = ACTIVITIES.find(a => a.id === activeActKey) || ACTIVITIES[0];
                return (
                  <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm space-y-8">
                    <div>
                      <div className="border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
                        <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-primary dark:text-white">
                          {act.name}
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {act.paragraphs.map((para, idx) => (
                          <p key={idx} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {act.images && act.images.length > 0 && (
                      <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
                        <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-4">Event Gallery</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {act.images.map((imgItem, idx) => {
                            const isObj = typeof imgItem === 'object';
                            const src = isObj ? imgItem.src : imgItem;
                            const caption = isObj ? imgItem.caption : `${act.name} Photo ${idx + 1}`;
                            return (
                              <div
                                key={idx}
                                onClick={() => setSelectedImage(src)}
                                className="group relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800/80 shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                              >
                                <img
                                  src={src}
                                  alt={caption}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  onError={(e) => { e.target.closest('.group').style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 backdrop-blur-[1px]">
                                  <span className="text-white text-[11px] font-bold tracking-wide line-clamp-2">{caption}</span>
                                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                    <Image size={14} />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        );
      }

      case 'gallery': {
        return (
          <div className="space-y-8">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold font-serif text-gray-800 dark:text-white mb-2">Photo Gallery</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">A visual look into campus infrastructure, academic life, and student activities at IIIT Pune.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {GALLERY_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(item.imgUrl)}
                  className="group relative overflow-hidden bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer transition-all duration-300"
                >
                  <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-850">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.closest('.group').style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Image size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-50 dark:border-gray-850 flex flex-col gap-1 bg-white dark:bg-surface-dark">
                    <span className="text-[10px] font-bold text-accent dark:text-accent-dark uppercase tracking-wider">{item.category}</span>
                    <h4 className="text-sm font-bold text-gray-800 dark:text-white truncate">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'events': {
        const EVENTS = [
          {
            name: "iConclave 2026",
            type: "Tech-Cultural Extravaganza",
            typeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
            desc: "iConclave is IIIT Pune's flagship annual fest — a seamless blend of technology, culture, and community. The 2026 edition featured the Thinking Machine AI Hackathon, the Hashiriya Bot Racing Championship by ROFIES, the Zokei Poster Design Contest by Blueprint, Nritya Nova dance battles by Vanity Crew, and more. Thousands of students from colleges across Pune and India participated, making it the biggest edition yet.",
            images: [
              'https://www.iiitp.ac.in/sites/default/files/2026-05/R.O.FI_.E.S_2.jpeg',
              'https://www.iiitp.ac.in/sites/default/files/2026-05/rang12.JPG',
              'https://www.iiitp.ac.in/sites/default/files/2026-02/1.jpg',
            ],
            highlights: ["AI Hackathon — 330+ teams", "Bot Racing Championship", "Poster Design + Dance Battles", "Intercollegiate Participation"]
          },
          {
            name: "Ananta Cultural Fest",
            type: "Cultural Extravaganza",
            typeColor: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
            desc: "Ananta is the annual socio-cultural festival of IIIT Pune. Spanning three vibrant days, it features group dance battles, fashion pageants (like Halo Runway by RANG), vocal showcases by SAAZ, nukkad natak street plays by Abhinay, quiz nights by Q-riocity, acoustic unplugged evenings, rangoli installations, and a grand closing concert with star performances. It draws participants from top colleges across Maharashtra.",
            images: [
              'https://www.iiitp.ac.in/sites/default/files/2026-05/rang6.jpg',
              'https://www.iiitp.ac.in/sites/default/files/2026-05/rang8.jpeg',
              'https://www.iiitp.ac.in/sites/default/files/2026-05/Picture2.jpg',
            ],
            highlights: ["Dance Battles", "Fashion Showcase", "Star Night Concert", "Literary Events"]
          },
          {
            name: "Eklavya Sports Fest",
            type: "Annual Sports Meet",
            typeColor: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
            desc: "Eklavya is the annual three-day sports festival organized by the IIIT Pune Sports Club. It features competitive tournaments in football, cricket, volleyball, basketball, badminton, kabaddi, chess, and carrom. The 2024 edition also added an Esports tournament featuring FIFA, Valorant, Clash Royale, and Fall Guys with live screenings on campus. Eklavya is a celebration of sportsmanship, fitness, and team spirit.",
            images: [
              'https://www.iiitp.ac.in/sites/default/files/inline-images/image042.jpg',
              'https://www.iiitp.ac.in/sites/default/files/inline-images/image043.jpg',
              'https://iiitp.ac.in/sites/default/files/2023-03/DSC_3082%20%281%29%20%281%29.jpg',
            ],
            highlights: ["Football, Cricket, Volleyball", "Basketball, Kabaddi", "Esports Tournament", "Inter-Batch Leagues"]
          },
          {
            name: "InfInITy Coding Contest",
            type: "Technical Event",
            typeColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
            desc: "InfInITy is the flagship competitive programming contest organized by Bit Legion in collaboration with CodeChef. Rated as a 6-star global event, it attracted 1,28,000+ submissions and 25,000+ participants worldwide. The contest featured algorithmic challenges across multiple difficulty levels, drawing top-rated competitive programmers including grandmasters and masters from around the globe.",
            images: [
              'https://www.iiitp.ac.in/sites/default/files/inline-images/image001.jpg',
              'https://www.iiitp.ac.in/sites/default/files/inline-images/image003.jpg',
              'https://www.iiitp.ac.in/sites/default/files/inline-images/image005.jpg',
            ],
            highlights: ["1,28,000+ Submissions", "25K+ Global Participants", "CodeChef 6-Star Rated", "Grandmaster Participation"]
          },
        ];

        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-primary dark:text-white mb-2">
                College Events & Festivals
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Fests are the heartbeat of campus life at IIIT Pune. From flagship national hackathons to three-day cultural extravaganzas, every event provides students the platform to showcase technical prowess, cultural talents, and organizational skills.
              </p>
            </div>

            {/* Events List */}
            <div className="space-y-8">
              {EVENTS.map((event, idx) => (
                <div key={idx} className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
                  {/* Images Strip */}
                  <div className="grid grid-cols-3 gap-0.5 h-48">
                    {event.images.map((img, i) => (
                      <div key={i} className="overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={img}
                          alt={`${event.name} ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${event.typeColor}`}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold font-serif text-gray-800 dark:text-white mb-3">{event.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{event.desc}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((h, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg text-[11px] font-semibold bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'hr-summit': {
        // Redirect to external HR Summit site
        window.location.replace('https://placements.iiitp.ac.in/HrSummit/');
        return (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <ExternalLink size={26} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Redirecting to HR Summit...</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Taking you to the official HR Summit portal at IIIT Pune.
            </p>
            <a
              href="https://placements.iiitp.ac.in/HrSummit/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              Open HR Summit Portal <ExternalLink size={14} />
            </a>
          </div>
        );
      }

      case 'magazine': {
        const EDITIONS = [
          {
            year: "2024–25",
            embedUrl: "https://online.fliphtml5.com/jpsva/pmdk/",
            cover: "https://www.iiitp.ac.in/sites/default/files/inline-images/frontpage.png",
            desc: "The latest edition captures research breakthroughs, creative writing, student artwork, faculty interviews, club highlights, and the vibrant spirit of campus life at IIIT Pune."
          },
          {
            year: "2023–24",
            embedUrl: "https://online.fliphtml5.com/wscmc/peim/",
            cover: "https://www.iiitp.ac.in/sites/default/files/inline-images/aygycs_blue.png",
            desc: "Celebrated IIIT Pune's growing research culture with features on funded projects, PhD scholar spotlights, club achievements, and an artistic tribute to campus life."
          },
        ];

        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-28 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-950 flex flex-col items-center justify-center shadow-lg border border-blue-800 text-white shrink-0">
                  <BookOpen size={28} className="text-accent mb-1.5" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-accent/90">Eminence</span>
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                    Annual Publication
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-primary dark:text-white mt-2 mb-2">
                    Eminence — Annual Magazine
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong>Eminence</strong> is the official annual student publication of IIIT Pune. It is a creative canvas for the entire campus community — capturing tech research reviews, literary poetry, student artwork, opinion pieces, interview series, and highlights of student and faculty achievements throughout the academic year. Published by the joint efforts of the Literary and Arts societies, Eminence reflects the intellectual and creative spirit of IIIT Pune.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase block">Published by</span>
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-300">IIIT Pune Literary & Arts Societies</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase block">Frequency</span>
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-300">Annual</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase block">Language</span>
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-300">English</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Flipbook Embeds */}
            <div className="space-y-10">
              {EDITIONS.map((ed, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold font-serif text-gray-800 dark:text-white">
                      Eminence {ed.year}
                    </h3>
                    <a
                      href={ed.embedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-accent dark:text-accent-dark hover:underline"
                    >
                      Open fullscreen <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                    <iframe
                      allowFullScreen={true}
                      allowTransparency={true}
                      className="inner w-full"
                      frameBorder="0"
                      scrolling="no"
                      seamless="seamless"
                      src={ed.embedUrl}
                      title={`Eminence ${ed.year}`}
                      style={{ height: '520px' }}
                    />
                  </div>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2 text-center">
                    Academic Year {ed.year} · Use the arrows inside to turn pages
                  </p>
                </div>
              ))}
            </div>

            {/* What's Inside */}
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold font-serif text-gray-800 dark:text-white mb-4">What's Inside Eminence</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Research Articles",
                  "Creative Writing & Poetry",
                  "Student Artwork",
                  "Faculty Interviews",
                  "Club Highlights",
                  "Campus Photography"
                ].map((label, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      case 'campus': {
        const CAMPUS_IMAGES = [
          { src: '/assets/girls_hostel.jpg', caption: 'Girls Hostel' },
          { src: '/assets/lecture_hall.jpg', caption: 'Academic Building (AC) - Lecture Hall' },
          { src: '/assets/bh1.jpg', caption: 'Boys Hostel 1 (BH)' },
          { src: '/assets/bh2.jpg', caption: 'Boys Hostel 2 (BH)' },
          { src: '/assets/conference_room.jpg', caption: 'Academic Building (AC) - Conference Room' },
          { src: 'https://www.iiitp.ac.in/sites/default/files/inline-images/image042.jpg', caption: 'Campus Sports Ground' },
          { src: 'https://www.iiitp.ac.in/sites/default/files/inline-images/_THC3794.JPG', caption: 'Campus Life' },
          { src: 'https://www.iiitp.ac.in/sites/default/files/inline-images/Frame%20780.png', caption: 'IIIT Pune Events' },
          { src: 'https://www.iiitp.ac.in/sites/default/files/2026-02/2.jpg', caption: 'Thinking Machine Hackathon' },
          { src: 'https://www.iiitp.ac.in/sites/default/files/2026-02/3.jpg', caption: 'Innovation at IIIT Pune' },
          { src: 'https://iiitp.ac.in/sites/default/files/2023-03/DSC_0845%20%281%29%20%281%29.jpg', caption: 'Campus Cultural Day' },
        ];

        const FACILITIES = [
          { title: "Smart Classrooms", desc: "Fully equipped smart classrooms and seminar halls with multimedia projection systems, interactive boards, and high-speed internet connectivity for a modern learning experience." },
          { title: "Advanced Laboratories", desc: "State-of-the-art CS, ECE, and IoT laboratories with industry-grade hardware, VLSI design tools, embedded systems rigs, robotics platforms, and high-performance computing clusters." },
          { title: "Student Hostels", desc: "Separate hostel blocks for boys and girls with 24/7 high-speed Wi-Fi, laundry facilities, round-the-clock security, and a hygienic mess serving balanced and nutritious meals." },
          { title: "Central Library", desc: "A well-stocked library with thousands of technical books, journals, international e-resources, IEEE and Springer digital subscriptions, and dedicated reading rooms for focused study." },
          { title: "Sports Facilities", desc: "Dedicated grounds for football, cricket, volleyball, basketball, badminton, and a fully-equipped indoor gymnasium to promote physical fitness and wellness among students." },
          { title: "High-Speed Connectivity", desc: "Campus-wide optical fibre network with gigabit internet access in all academic blocks, hostels, and common areas, enabling seamless academic and research activities." },
        ];

        return (
          <div className="space-y-8">
            {/* Hero Header */}
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-primary dark:text-white mb-1">
                Permanent Campus
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mb-4">
                <MapPin size={14} className="text-primary" />
                Gat No. 5 & 6, Village Nanoli-Tathawade, Tal. Maval, Pune — 412106
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Spread across a scenic expanse in the pristine Maval valley near Chakan, the permanent campus of IIIT Pune offers a calm, green, and intellectually stimulating environment. Located close to the Talegaon MIDC and the Pune–Mumbai Expressway, it connects students directly to major IT hubs, automobile clusters, and tech startups. The campus is designed to foster innovation, research, and holistic student development within a modern infrastructure that combines academic excellence with comfortable living.
              </p>
            </div>

            {/* Photo Gallery */}
            <div>
              <h3 className="text-lg font-bold font-serif text-gray-800 dark:text-white mb-4">Campus Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {CAMPUS_IMAGES.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img.src)}
                    className="group relative aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 cursor-pointer border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.target.closest('.group').style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 backdrop-blur-[2px]">
                      <span className="text-white text-[11px] font-semibold">{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities Grid */}
            <div>
              <h3 className="text-lg font-bold font-serif text-gray-800 dark:text-white mb-4">Campus Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {FACILITIES.map((f, i) => (
                  <div key={i} className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all border-t-4 border-t-primary">
                    <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-2">{f.title}</h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-450 text-justify leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Box */}
            <div className="bg-gradient-to-br from-primary/5 to-blue-50 dark:from-primary/10 dark:to-blue-900/10 border border-blue-100/30 dark:border-blue-900/30 rounded-2xl p-6">
              <h3 className="text-base font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> Location & Connectivity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Address</span>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">Gat No. 5 & 6, Village Nanoli-Tathawade, Tal. Maval, Dist. Pune — 412106</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Nearest Highway</span>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Pune–Mumbai Expressway (NH-48)</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Nearest City</span>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Pune City (~35 km) | Talegaon MIDC (~5 km)</p>
                </div>
              </div>
            </div>
          </div>
        );
      }


      default:
      case 'overview':
        return (
          <div className="space-y-12">
            {/* Quick Links Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm flex flex-col justify-between border-t-4 border-t-blue-600">
                <div>
                  <h3 className="text-lg font-bold font-serif text-gray-800 dark:text-white mb-2">Student Clubs</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    15+ student-run clubs covering competitive programming, design, dramatics, arts, quiz, music, robotics, and astronomy.
                  </p>
                </div>
                <button onClick={() => handleTabChange('clubs')} className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent dark:text-accent-dark hover:underline text-left">
                  Explore Clubs <ChevronRight size={14} />
                </button>
              </div>

              <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm flex flex-col justify-between border-t-4 border-t-emerald-600">
                <div>
                  <h3 className="text-lg font-bold font-serif text-gray-800 dark:text-white mb-2">National Activities</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Celebration of national initiatives like EBSB, Fit India, Swachh Bharat, Yoga Day, and annual hackathons.
                  </p>
                </div>
                <button onClick={() => handleTabChange('activities')} className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent dark:text-accent-dark hover:underline text-left">
                  Explore Activities <ChevronRight size={14} />
                </button>
              </div>

              <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm flex flex-col justify-between border-t-4 border-t-indigo-600">
                <div>
                  <h3 className="text-lg font-bold font-serif text-gray-800 dark:text-white mb-2">Permanent Campus</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    100-acre modern campus located in Nanoli, Tal. Maval, Pune with advanced labs and comfortable residential blocks.
                  </p>
                </div>
                <button onClick={() => handleTabChange('campus')} className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent dark:text-accent-dark hover:underline text-left">
                  Explore Campus Details <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Quick overview of hostels / facilities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="h-1.5 bg-primary" />
                <div className="p-6">
                  <h3 className="text-lg font-bold font-serif text-primary dark:text-white mb-3">Hostel &amp; Mess</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-justify leading-relaxed">Comfortable housing with high-speed Wi-Fi, common recreational halls, and a mess serving nutritious and hygienic food.</p>
                </div>
              </div>
              <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="h-1.5 bg-primary" />
                <div className="p-6">
                  <h3 className="text-lg font-bold font-serif text-primary dark:text-white mb-3">Sports Facilities</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-justify leading-relaxed">Equipped gymnasium, courts for basketball, volleyball, badminton, table-tennis, and open grounds for cricket and football.</p>
                </div>
              </div>
              <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="h-1.5 bg-primary" />
                <div className="p-6">
                  <h3 className="text-lg font-bold font-serif text-primary dark:text-white mb-3">Clubs &amp; Societies</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-justify leading-relaxed">Various active student clubs representing competitive coding, robotics, cultural fests, dramatics, music, and quiz leagues.</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Life @ IIIT Pune" />

      {/* Main Tabs Navigation Bar */}
      <div className="bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
            {[
              { key: 'overview', label: 'Overview' },
              { key: 'clubs', label: 'Professional Clubs' },
              { key: 'activities', label: 'Activities' },
              { key: 'gallery', label: 'Photo Gallery' },
              { key: 'events', label: 'College Events' },
              { key: 'hr-summit', label: 'HR Summit (2021)' },
              { key: 'magazine', label: 'Magazine' },
              { key: 'campus', label: 'Permanent Campus' }
            ].map((tab) => {
              const isActive = activeTab === tab.key;
              if (tab.key === 'hr-summit') {
                return (
                  <a
                    key={tab.key}
                    href="https://placements.iiitp.ac.in/HrSummit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 border text-gray-600 dark:text-gray-350 bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800`}
                  >
                    {tab.label}
                  </a>
                );
              }
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 border ${isActive
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'text-gray-600 dark:text-gray-350 bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Contents Pane */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderTabContent()}
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl border border-white/15">
            <img
              src={selectedImage}
              alt="Club Activity Fullscreen"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LifePage;
