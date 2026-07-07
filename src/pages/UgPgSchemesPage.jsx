import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import { Clock, Users, Mail, Phone, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import facultyDetails from "../data/faculty_details.json";

const UgPgSchemesPage = () => {
  const [activeSemester, setActiveSemester] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

    /*
  Previous Data:
  const cseCurriculum = [
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
        { name: "Environmental Science", hours: "2-0-0", credits: 2 },
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
        { name: "Consciousness and Values", hours: "2-0-0", credits: 2 },
      ]
    },
    {
      semester: 3,
      totalCredits: 21,
      courses: [
        { name: "Analysis & Design of Algorithm", hours: "3-0-2", credits: 4 },
        { name: "Computer Organization and Architecture", hours: "3-0-0", credits: 3 },
        { name: "Theory of Computation", hours: "3-0-0", credits: 3 },
        { name: "Database Management System", hours: "3-0-2", credits: 4 },
        { name: "Python Programming", hours: "3-0-2", credits: 4 },
        { name: "Probability and Random Process", hours: "3-0-0", credits: 3 },
      ]
    },
    {
      semester: 4,
      totalCredits: 22,
      courses: [
        { name: "Computer Network", hours: "3-0-2", credits: 4 },
        { name: "Artificial Intelligence", hours: "3-0-0", credits: 3 },
        { name: "Operating System", hours: "3-0-2", credits: 4 },
        { name: "Java Programming", hours: "2-0-2", credits: 3 },
        { name: "Compiler Design", hours: "3-0-2", credits: 4 },
        { name: "Minor Project-I", hours: "0-0-2", credits: 1 },
        { name: "Discrete Structure", hours: "3-0-0", credits: 3 },
      ]
    },
    {
      semester: 5,
      totalCredits: 23,
      courses: [
        { name: "Machine Learning", hours: "3-0-2", credits: 4 },
        { name: "Software Engineering", hours: "3-0-2", credits: 4 },
        { name: "Cryptography and Network Security", hours: "3-0-0", credits: 3 },
        { name: "Elective 1 (DE)", hours: "3-0-0", credits: 3 },
        { name: "Elective 2 (OE)", hours: "3-0-0", credits: 3 },
        { name: "Linear and Nonlinear Optimization", hours: "3-0-0", credits: 3 },
        { name: "Minor Project-II", hours: "0-0-6", credits: 3 },
      ]
    },
    {
      semester: 6,
      totalCredits: 23,
      courses: [
        { name: "Computer Graphics", hours: "3-0-2", credits: 4 },
        { name: "Cloud Computing", hours: "3-0-2", credits: 4 },
        { name: "Internet of Things", hours: "3-0-0", credits: 3 },
        { name: "Elective 1 (DE)", hours: "3-0-0", credits: 3 },
        { name: "Elective 2 (OE)", hours: "3-0-0", credits: 3 },
        { name: "Elective 3 (OE)", hours: "3-0-0", credits: 3 },
        { name: "Minor Project-III", hours: "0-0-6", credits: 3 },
      ]
    },
    {
      semester: 7,
      totalCredits: 17,
      courses: [
        { name: "Big Data Analytics", hours: "3-0-0", credits: 3 },
        { name: "High Performance Computing", hours: "3-0-0", credits: 3 },
        { name: "Elective 1 (DE)", hours: "3-0-0", credits: 3 },
        { name: "Elective 2 (OE)", hours: "3-0-0", credits: 3 },
        { name: "Major Project-I", hours: "0-0-6", credits: 3 },
        { name: "Internship", hours: "0-0-4", credits: 2 },
      ]
    },
    {
      semester: 8,
      totalCredits: 16,
      courses: [
        { name: "Major Project-II", hours: "0-0-32", credits: 16 },
      ]
    }
  ];
  */

  const cseCurriculum = [
    {
      semester: 1,
      totalCredits: 20,
      courses: [
        { name: "Basic Electronics Engineering", hours: "3-0-2", credits: 4 },
        { name: "Introduction to Emerging Technologies", hours: "3-0-0", credits: 3 },
        { name: "Computer Programming Concept and Practices", hours: "3-0-2", credits: 4 },
        { name: "Calculus and Differential Equations", hours: "3-1-0", credits: 4 },
        { name: "Language and Writing Skills", hours: "2-0-0", credits: 2 },
        { name: "Indian Knowledge System (IKS)", hours: "1-0-0", credits: 1 },
        { name: "Environmental Science", hours: "2-0-0", credits: 2 },
      ]
    },
    {
      semester: 2,
      totalCredits: 20,
      courses: [
        { name: "Digital Logic and Design", hours: "3-0-2", credits: 4 },
        { name: "Data Structures", hours: "3-0-2", credits: 4 },
        { name: "Object Oriented Programming using Java", hours: "3-0-2", credits: 4 },
        { name: "Linear Algebra and Discrete Structure", hours: "3-1-0", credits: 4 },
        { name: "Humanities and Social Ethics", hours: "2-0-0", credits: 2 },
        { name: "Innovation and Entrepreneurship Studies", hours: "2-0-0", credits: 2 },
      ]
    },
    {
      semester: 3,
      totalCredits: 22,
      courses: [
        { name: "Artificial Intelligence", hours: "3-0-2", credits: 4 },
        { name: "Design and Analysis of Algorithms", hours: "3-0-2", credits: 4 },
        { name: "Database Management System", hours: "3-0-2", credits: 4 },
        { name: "Python Programming", hours: "3-0-2", credits: 4 },
        { name: "Computer Organization and Architecture", hours: "3-0-0", credits: 3 },
        { name: "Probability and Random Process", hours: "3-0-0", credits: 3 },
      ]
    },
    {
      semester: 4,
      totalCredits: 21,
      courses: [
        { name: "Computer Network", hours: "3-0-2", credits: 4 },
        { name: "Machine Learning", hours: "3-0-2", credits: 4 },
        { name: "Operating System", hours: "3-0-2", credits: 4 },
        { name: "Theory of Computation", hours: "3-0-0", credits: 3 },
        { name: "Linear and Non-Linear Optimization", hours: "3-0-0", credits: 3 },
        { name: "Software Engineering and System Design", hours: "3-0-0", credits: 3 },
      ]
    },
    {
      semester: 5,
      totalCredits: 24,
      courses: [
        { name: "Deep Learning", hours: "3-0-2", credits: 4 },
        { name: "Compiler Design", hours: "3-0-2", credits: 4 },
        { name: "Cryptography and Network Security", hours: "3-0-2", credits: 4 },
        { name: "Advanced Data Structures", hours: "3-0-2", credits: 4 },
        { name: "Elective 1", hours: "3-0-0", credits: 3 },
        { name: "Elective 2", hours: "3-0-0", credits: 3 },
        { name: "Minor Project-I", hours: "0-0-4", credits: 2 },
      ]
    },
    {
      semester: 6,
      totalCredits: 23,
      courses: [
        { name: "Generative Artificial Intelligence", hours: "3-0-2", credits: 4 },
        { name: "Artificial Intelligence and Big Data Analytics", hours: "3-0-2", credits: 4 },
        { name: "Internet of Things", hours: "3-0-0", credits: 3 },
        { name: "Elective 1", hours: "3-0-0", credits: 3 },
        { name: "Elective 2", hours: "3-0-0", credits: 3 },
        { name: "Elective 3", hours: "3-0-0", credits: 3 },
        { name: "Minor Project-II", hours: "0-0-6", credits: 3 },
      ]
    },
    {
      semester: 7,
      totalCredits: 17,
      courses: [
        { name: "Elective 1 / MOOC", hours: "3-0-0", credits: 3 },
        { name: "Elective 2 / MOOC", hours: "3-0-0", credits: 3 },
        { name: "Elective 3 / MOOC", hours: "3-0-0", credits: 3 },
        { name: "Elective 4 / MOOC", hours: "3-0-0", credits: 3 },
        { name: "Major Project-I", hours: "0-0-6", credits: 3 },
        { name: "Internship-I", hours: "0-0-4", credits: 2 },
      ]
    },
    {
      semester: 8,
      totalCredits: 16,
      courses: [
        { name: "Major Project-II", hours: "0-0-32", credits: 16 },
      ]
    }
  ];
  const [activeSemesteraids, setActiveSemesteraids] = useState(1);

    const aidsCurriculum = [
    {
      semester: 1,
      totalCredits: 20,
      courses: [
        { name: "Basic Electronics Engineering", hours: "3-0-2", credits: 4 },
        { name: "Introduction to Emerging Technologies", hours: "3-0-0", credits: 3 },
        { name: "Computer Programming Concept & Practice", hours: "3-0-2", credits: 4 },
        { name: "Calculus and Differential Equations", hours: "3-1-0", credits: 4 },
        { name: "Language & Writing Skills", hours: "2-0-0", credits: 2 },
        { name: "Indian Knowledge System", hours: "1-0-0", credits: 1 },
        { name: "Environmental Science", hours: "2-0-0", credits: 2 },
      ]
    },
    {
      semester: 2,
      totalCredits: 20,
      courses: [
        { name: "Data Structure", hours: "3-0-2", credits: 4 },
        { name: "Object Oriented Programming Using Java", hours: "3-0-2", credits: 4 },
        { name: "Digital Logic & Design", hours: "3-0-2", credits: 4 },
        { name: "Linear Algebra and Discrete Structures ", hours: "3-1-0", credits: 4 },
        { name: "Humanities and Social Ethics", hours: "2-0-0", credits: 2 },
        { name: "Innovation & Entrepreneurship studies ", hours: "2-0-0", credits: 2 },
        ]
    },
    {
      semester: 3,
      totalCredits: 22,
      courses: [
        { name: "Artificial Intelligence", hours: "3-0-2", credits: 4 },
        { name: "Design and Analysis of Algorithms", hours: "3-0-2", credits: 4 },
        { name: "Database Management System", hours: "3-0-2", credits: 4 },
        { name: "Python Programming", hours: "3-0-2", credits: 4 },
        { name: "Computer Organization and Architecture", hours: "3-0-0", credits: 3 },
        { name: "Probability and Random Process", hours: "3-0-0", credits: 3 },
      ]
    },
    {
      semester: 4,
      totalCredits: 22,
      courses: [
        { name: "Computer Network", hours: "3-0-2", credits: 4 },
        { name: "Machine Learning", hours: "3-0-2", credits: 4 },
        { name: "Operating System", hours: "3-0-2", credits: 4 },
        { name: "Theory of Computation", hours: "3-0-0", credits: 3 },
        { name: "Exploratory Data Analysis", hours: "3-0-2", credits: 4 },
        { name: "Software Engineering and System Design ", hours: "3-0-0", credits: 3 },
      ]
    },
    {
      semester: 5,
      totalCredits: 23,
      courses: [
        { name: "Deep Learning", hours: "3-0-2", credits: 4 },
        { name: "Artificial Intelligence for Cyber Security", hours: "3-0-2", credits: 4 },
        { name: "Advanced Data Structures", hours: "3-0-2", credits: 4 },
        { name: "Cloud Computing", hours: "3-0-0", credits: 3 },
        { name: "Elective 1", hours: "3-0-0", credits: 3 },
        { name: "Elective 2", hours: "3-0-0", credits: 3 },
        { name: "Minor Project-I", hours: "0-0-4", credits: 2 },
      ]
    },
    {
      semester: 6,
      totalCredits: 24,
      courses: [
        { name: "Generative Artificial Intelligence", hours: "3-0-2", credits: 4 },
        { name: "Artificial Intelligence and Big Data Analytics", hours: "3-0-2", credits: 4 },
        { name: "Reinforcement Learning", hours: "3-0-2", credits: 4 },
        { name: "Elective 1", hours: "3-0-0", credits: 3 },
        { name: "Elective 2", hours: "3-0-0", credits: 3 },
        { name: "Elective 3", hours: "3-0-0", credits: 3 },
        { name: "Minor Project-II", hours: "0-0-6", credits: 3 },
      ]
    },
    {
      semester: 7,
      totalCredits: 17,
      courses: [
        { name: "Elective 1 / MOOC ", hours: "3-0-0", credits: 3 },
        { name: "Elective 2 / MOOC ", hours: "3-0-0", credits: 3 },
        { name: "Elective 3 / MOOC ", hours: "3-0-0", credits: 3 },
        { name: "Elective 4 / MOOC ", hours: "3-0-0", credits: 3 },
        { name: "Major Project-I", hours: "0-0-6", credits: 3 },
        { name: "Internship-I", hours: "0-0-4", credits: 2 },
      ]
    },
    {
      semester: 8,
      totalCredits: 16,
      courses: [
        { name: "Major Project-II", hours: "0-0-32", credits: 16 },
      ]
    }
  ];

  const [activeSemestercyber, setActiveSemestercyber] = useState(1);

  const cybersecurityCurriculum = [
    {
      semester: 1,
      totalCredits: 20,
      courses: [
        { name: "Basic Electronics Engineering", hours: "3-0-2", credits: 4 },
        { name: "Introduction to Emerging Technologies", hours: "3-0-0", credits: 3 },
        { name: "Computer Programming Concept and Practices", hours: "3-0-2", credits: 4 },
        { name: "Calculus and Differential Equations", hours: "3-1-0", credits: 4 },
        { name: "Language and Writing Skills", hours: "2-0-0", credits: 2 },
        { name: "Indian Knowledge System (IKS)", hours: "1-0-0", credits: 1 },
        { name: "Environmental Science", hours: "2-0-0", credits: 2 },
      ]
    },
    {
      semester: 2,
      totalCredits: 20,
      courses: [
        { name: "Digital Logic and Design", hours: "3-0-2", credits: 4 },
        { name: "Data Structures", hours: "3-0-2", credits: 4 },
        { name: "Object Oriented Programming using Java", hours: "3-0-2", credits: 4 },
        { name: "Linear Algebra and Discrete Structure", hours: "3-1-0", credits: 4 },
        { name: "Humanities and Social Ethics", hours: "2-0-0", credits: 2 },
        { name: "Innovation and Entrepreneurship Studies", hours: "2-0-0", credits: 2 },
      ]
    },
    {
      semester: 3,
      totalCredits: 21,
      courses: [
        { name: "Design and Analysis of Algorithms", hours: "3-0-2", credits: 4 },
        { name: "Computer Organisation and Architecture", hours: "3-0-0", credits: 3 },
        { name: "Theory of Computation", hours: "3-0-0", credits: 3 },
        { name: "Database Management System", hours: "3-0-2", credits: 4 },
        { name: "Python Programming", hours: "3-0-2", credits: 4 },
        { name: "Probability and Random Process", hours: "3-0-0", credits: 3 },
      ]
    },
    {
      semester: 4,
      totalCredits: 22,
      courses: [
        { name: "Computer Networks", hours: "3-0-2", credits: 4 },
        { name: "Artificial Intelligence and Machine Learning", hours: "3-0-2", credits: 4 },
        { name: "Operating System", hours: "3-0-2", credits: 4 },
        { name: "Foundations of Cyber Security", hours: "3-0-0", credits: 3 },
        { name: "Compiler Design", hours: "3-0-2", credits: 4 },
        { name: "Cyber Security and Cyber Laws", hours: "3-0-0", credits: 3 },
      ]
    },
    {
      semester: 5,
      totalCredits: 24,
      courses: [
        { name: "Cryptography and Network Security", hours: "3-0-2", credits: 4 },
        { name: "Blockchain Technology", hours: "3-0-2", credits: 4 },
        { name: "Cyber Forensics", hours: "3-0-2", credits: 4 },
        { name: "Advanced Data Structures", hours: "3-0-2", credits: 4 },
        { name: "Elective 1", hours: "3-0-0", credits: 3 },
        { name: "Elective 2", hours: "3-0-0", credits: 3 },
        { name: "Minor Project - I", hours: "0-0-4", credits: 2 },
      ]
    },
    {
      semester: 6,
      totalCredits: 23,
      courses: [
        { name: "Reverse Engineering and Malware Analysis", hours: "3-0-2", credits: 4 },
        { name: "Vulnerability Analysis and Penetration Testing", hours: "3-0-2", credits: 4 },
        { name: "Cloud Computing Security", hours: "3-0-0", credits: 3 },
        { name: "Elective 1", hours: "3-0-0", credits: 3 },
        { name: "Elective 2", hours: "3-0-0", credits: 3 },
        { name: "Elective 3", hours: "3-0-0", credits: 3 },
        { name: "Minor Project-II", hours: "0-0-6", credits: 3 },
      ]
    },
    {
      semester: 7,
      totalCredits: 17,
      courses: [
        { name: "Elective 1 / MOOC", hours: "3-0-0", credits: 3 },
        { name: "Elective 2 / MOOC", hours: "3-0-0", credits: 3 },
        { name: "Elective 3 / MOOC", hours: "3-0-0", credits: 3 },
        { name: "Elective 4 / MOOC", hours: "3-0-0", credits: 3 },
        { name: "Major Project - I", hours: "0-0-6", credits: 3 },
        { name: "Internship - I", hours: "0-0-4", credits: 2 },
      ]
    },
    {
      semester: 8,
      totalCredits: 16,
      courses: [
        { name: "Major Project - II", hours: "0-0-32", credits: 16 },
      ]
    }
  ];

  const [activeSemester1, setActiveSemester1] = useState(1);

    const curriculum1 = [
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
const [activeSemestermcse, setActiveSemestermcse] = useState(1);

  const mcsecurriculum = [
    {
      semester: 1,
      totalCredits: 16,
      courses: [
        { name: "IoT and Sensor Data Visualization", hours: "3-0-0", credits: 3 },
        { name: "Artificial Intelligence (Program Elective)", hours: "3-0-0", credits: 3 },
        { name: "Linear and Nonlinear Optimization (Institute Core)", hours: "3-0-0", credits: 3 },
        { name: "Machine Learning (Open Elective)", hours: "3-0-2", credits: 4 },
        { name: "Research Methodology (Institute Core)", hours: "1-0-0", credits: 1 },
        { name: "Minor Project", hours: "0-0-4", credits: 2 }
      ]
    },
    {
      semester: 2,
      totalCredits: 14,
      courses: [
        { name: "Big Data Analytics", hours: "3-0-0", credits: 3 },
        { name: "Cloud Architecture and Computing", hours: "3-0-0", credits: 3 },
        { name: "Swarm Intelligence (Program Elective)", hours: "3-0-0", credits: 3 },
        { name: "Deep Learning", hours: "3-0-0", credits: 3 },
        { name: "Minor Project", hours: "0-0-4", credits: 2 }
      ]
    },
    {
      semester: 3,
      totalCredits: 12,
      courses: [
        { name: "Major Project-I / Internship-I", hours: "0-0-24", credits: 12 }
      ]
    },
    {
      semester: 4,
      totalCredits: 12,
      courses: [
        { name: "Major Project-II / Internship-II", hours: "0-0-24", credits: 12 }
      ]
    }
  ];
  const [activeSemestermec, setActiveSemestermec] = useState(1);
  
    const meccurriculum = [
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

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="UG and PG Schemes" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 md:p-12 space-y-16">
        <h2 className="text-3xl font-bold font-serif text-primary dark:text-white mt-2">
                    Curriculum & Syllabus
                  </h2>

          {/* Curriculum & Syllabus */}
          <section id="btech-cse" className="w-full">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 md:p-10 overflow-hidden">
              <div className="flex justify-between items-end mb-8 border-b pb-4 border-gray-200 dark:border-gray-800">
                <div>
                  <h4 className="text-2xl font-bold font-serif text-primary dark:text-white">
                    B. Tech. (Computer Science & Engineering)
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Explore the semester-wise course structure.</p>
                </div>
              </div>

              {/* Semester Tabs */}
              <div className="flex overflow-x-auto gap-2 mb-6 pb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setActiveSemester(sem)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${activeSemester === sem
                      ? "bg-brand-red text-white shadow-md dark:bg-brand-red-dark"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                      }`}
                  >
                    Semester {sem}
                  </button>
                ))}
              </div>

              {/* Course Table */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300">
                        <th className="w-[60%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700">Course Name</th>
                        <th className="w-[25%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700 text-center whitespace-nowrap">Hours/Week(L-T-P)</th>
                        <th className="w-[15%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700 text-center">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence mode="wait">
                        {cseCurriculum.find(c => c.semester === activeSemester)?.courses.map((course, idx) => (
                          <motion.tr
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                            key={course.name}
                            className="border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors"
                          >
                            <td className="py-2.5 px-4 text-gray-800 dark:text-gray-200 font-medium">{course.name}</td>
                            <td className="py-2.5 px-4 text-center text-gray-700 dark:text-gray-300 font-bold">{course.hours}</td>
                            <td className="py-2.5 px-4 text-center text-accent-dark font-bold">{course.credits}</td>
                          </motion.tr>
                        )) || (
                            <tr>
                              <td colSpan="3" className="py-12 text-center text-gray-500 dark:text-gray-400 italic">
                                Curriculum details for Semester {activeSemester} will be updated soon.
                              </td>
                            </tr>
                          )}
                        {cseCurriculum.find(c => c.semester === activeSemester)?.totalCredits && (
                          <motion.tr
                            key="total"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-blue-50/80 dark:bg-blue-900/20 border-t-2 border-blue-200 dark:border-blue-800"
                          >
                            <td className="py-2.5 px-4 text-center font-bold text-gray-800 dark:text-gray-200" colSpan="2">
                              Total Credits
                            </td>
                            <td className="py-2.5 px-4 text-center text-accent-dark font-black text-lg">
                              {cseCurriculum.find(c => c.semester === activeSemester).totalCredits}
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section id="btech-aids" className="w-full">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 md:p-10 overflow-hidden">
              <div className="flex justify-between items-end mb-8 border-b pb-4 border-gray-200 dark:border-gray-800">
                <div>
                  <h4 className="text-2xl font-bold font-serif text-primary dark:text-white">
                    B. Tech. (Artificial Intelligence and Data Science)
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Explore the semester-wise course structure.</p>
                </div>
              </div>

              {/* Semester Tabs */}
              <div className="flex overflow-x-auto gap-2 mb-6 pb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setActiveSemesteraids(sem)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${activeSemesteraids === sem
                      ? "bg-brand-red text-white shadow-md dark:bg-brand-red-dark"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                      }`}
                  >
                    Semester {sem}
                  </button>
                ))}
              </div>

              {/* Course Table */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300">
                        <th className="w-[60%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700">Course Name</th>
                        <th className="w-[25%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700 text-center whitespace-nowrap">Hours/Week(L-T-P)</th>
                        <th className="w-[15%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700 text-center">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence mode="wait">
                        {aidsCurriculum.find(c => c.semester === activeSemesteraids)?.courses.map((course, idx) => (
                          <motion.tr
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                            key={course.name}
                            className="border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors"
                          >
                            <td className="py-2.5 px-4 text-gray-800 dark:text-gray-200 font-medium">{course.name}</td>
                            <td className="py-2.5 px-4 text-center text-gray-700 dark:text-gray-300 font-bold">{course.hours}</td>
                            <td className="py-2.5 px-4 text-center text-accent-dark font-bold">{course.credits}</td>
                          </motion.tr>
                        )) || (
                            <tr>
                              <td colSpan="3" className="py-12 text-center text-gray-500 dark:text-gray-400 italic">
                                Curriculum details for Semester {activeSemesteraids} will be updated soon.
                              </td>
                            </tr>
                          )}
                        {aidsCurriculum.find(c => c.semester === activeSemesteraids)?.totalCredits && (
                          <motion.tr
                            key="total"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-blue-50/80 dark:bg-blue-900/20 border-t-2 border-blue-200 dark:border-blue-800"
                          >
                            <td className="py-2.5 px-4 text-center font-bold text-gray-800 dark:text-gray-200" colSpan="2">
                              Total Credits
                            </td>
                            <td className="py-2.5 px-4 text-center text-accent-dark font-black text-lg">
                              {aidsCurriculum.find(c => c.semester === activeSemesteraids).totalCredits}
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Cybersecurity Curriculum & Syllabus */}
          <section id="btech-cybersecurity" className="w-full">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 md:p-10 overflow-hidden">
              <div className="flex justify-between items-end mb-8 border-b pb-4 border-gray-200 dark:border-gray-800">
                <div>
                  <h4 className="text-2xl font-bold font-serif text-primary dark:text-white">
                    B. Tech. (Cybersecurity)
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Explore the semester-wise course structure.</p>
                </div>
              </div>

              {/* Semester Tabs */}
              <div className="flex overflow-x-auto gap-2 mb-6 pb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setActiveSemestercyber(sem)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${activeSemestercyber === sem
                      ? "bg-brand-red text-white shadow-md dark:bg-brand-red-dark"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                      }`}
                  >
                    Semester {sem}
                  </button>
                ))}
              </div>

              {/* Course Table */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300">
                        <th className="w-[60%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700">Course Name</th>
                        <th className="w-[25%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700 text-center whitespace-nowrap">Hours/Week(L-T-P)</th>
                        <th className="w-[15%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700 text-center">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence mode="wait">
                        {cybersecurityCurriculum.find(c => c.semester === activeSemestercyber)?.courses.map((course, idx) => (
                          <motion.tr
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                            key={course.name}
                            className="border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors"
                          >
                            <td className="py-2.5 px-4 text-gray-800 dark:text-gray-200 font-medium">{course.name}</td>
                            <td className="py-2.5 px-4 text-center text-gray-700 dark:text-gray-300 font-bold">{course.hours}</td>
                            <td className="py-2.5 px-4 text-center text-accent-dark font-bold">{course.credits}</td>
                          </motion.tr>
                        )) || (
                            <tr>
                              <td colSpan="3" className="py-12 text-center text-gray-500 dark:text-gray-400 italic">
                                Curriculum details for Semester {activeSemestercyber} will be updated soon.
                              </td>
                            </tr>
                          )}
                        {cybersecurityCurriculum.find(c => c.semester === activeSemestercyber)?.totalCredits && (
                          <motion.tr
                            key="total"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-blue-50/80 dark:bg-blue-900/20 border-t-2 border-blue-200 dark:border-blue-800"
                          >
                            <td className="py-2.5 px-4 text-center font-bold text-gray-800 dark:text-gray-200" colSpan="2">
                              Total Credits
                            </td>
                            <td className="py-2.5 px-4 text-center text-accent-dark font-black text-lg">
                              {cybersecurityCurriculum.find(c => c.semester === activeSemestercyber).totalCredits}
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* ECE Curriculum & Syllabus */}
          <section id="btech-ece" className="mt-12 w-full">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 md:p-10 overflow-hidden">
              <div className="flex justify-between items-end mb-8 border-b pb-4 border-gray-200 dark:border-gray-800">
                <div>
                  <h2 className="text-2xl font-bold font-serif text-primary dark:text-white">
                    B. Tech. (Electronics & Communication Engineering)
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Explore the semester-wise course structure.</p>
                </div>
              </div>

              {/* Semester Tabs */}
              <div className="flex overflow-x-auto gap-2 mb-6 pb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setActiveSemester1(sem)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                      activeSemester1 === sem
                        ? "bg-brand-red text-white shadow-md dark:bg-brand-red-dark"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    }`}
                  >
                  Semester {sem}
                  </button>
                ))}
              </div>

              {/* Course Table */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300">
                        <th className="w-[60%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700">Course Name</th>
                        <th className="w-[25%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700 text-center whitespace-nowrap">Hours/Week(L-T-P)</th>
                        <th className="w-[15%] py-2.5 px-4 font-bold text-sm tracking-wider border-b border-gray-200 dark:border-gray-700 text-center">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence mode="wait">
                        {curriculum1.find(c => c.semester === activeSemester1)?.courses.map((course, idx) => (
                          <motion.tr
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                            key={course.name}
                            className="border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors"
                          >
                            <td className="py-2.5 px-4 text-gray-800 dark:text-gray-200 font-medium">{course.name}</td>
                            <td className="py-2.5 px-4 text-center text-gray-700 dark:text-gray-300 font-bold">{course.hours}</td>
                            <td className="py-2.5 px-4 text-center text-accent-dark font-bold">{course.credits}</td>
                          </motion.tr>
                        )) || (
                          <tr>
                            <td colSpan="3" className="py-12 text-center text-gray-500 dark:text-gray-400 italic">
                              Curriculum details for Semester {activeSemester1} will be updated soon.
                            </td>
                          </tr>
                        )}
                        {curriculum1.find(c => c.semester === activeSemester1)?.totalCredits && (
                          <motion.tr
                            key="total"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-blue-50/80 dark:bg-blue-900/20 border-t-2 border-blue-200 dark:border-blue-800"
                          >
                            <td colSpan="2" className="py-2.5 px-4 text-center font-bold text-gray-800 dark:text-gray-200">
                              Total Credits
                            </td>
                            <td className="py-2.5 px-4 text-center text-accent-dark font-black text-lg">
                              {curriculum1.find(c => c.semester === activeSemester1).totalCredits}
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section id="mtech-cse" className="mt-12 w-full">
                    <div className="flex justify-between items-end mb-8 border-b pb-4 border-gray-200 dark:border-gray-800">
                      <div>
                         <h2 className="text-2xl font-bold font-serif text-primary dark:text-white">
                          M.Tech (Computer Science & Engineering)
                        </h2>
                        
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Explore the semester-wise course structure (Total Credits: 54).</p>
                      </div>
                    </div>
          
                    <div className="flex overflow-x-auto gap-2 mb-6 pb-4">
                      {[1, 2, 3, 4].map((sem) => (
                        <button
                          key={sem}
                          onClick={() => setActiveSemestermcse(sem)}
                          className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                            activeSemestermcse === sem
                              ? "bg-brand-red text-white shadow-md dark:bg-brand-red-dark"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                          }`}
                        >
                          Semester {sem}
                        </button>
                      ))}
                    </div>
          
                    <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden relative min-h-[300px]">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800/50">
                              <th className="py-2.5 px-4 font-bold text-gray-700 dark:text-gray-300 border-b dark:border-gray-700 w-16">
                                S.No
                              </th>
                              <th className="py-2.5 px-4 font-bold text-gray-700 dark:text-gray-300 border-b dark:border-gray-700 w-[60%]">
                                Course Title
                              </th>
                              <th className="py-2.5 px-4 font-bold text-gray-700 dark:text-gray-300 border-b dark:border-gray-700 w-[25%] text-center">
                                Hours/Week(L-T-P)
                              </th>
                              <th className="py-2.5 px-4 font-bold text-gray-700 dark:text-gray-300 border-b dark:border-gray-700 w-[15%] text-center">
                                Credits
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <AnimatePresence mode="wait">
                              {mcsecurriculum.find(c => c.semester === activeSemestermcse)?.courses.map((course, index) => (
                                <motion.tr
                                  key={`${activeSemestermcse}-${course.name}`}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2, delay: index * 0.05 }}
                                  className="group border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors"
                                >
                                  <td className="py-2.5 px-4 text-gray-500 dark:text-gray-400 font-medium">
                                    {index + 1}.
                                  </td>
                                  <td className="py-2.5 px-4 font-medium text-gray-800 dark:text-gray-200 group-hover:text-accent-dark dark:group-hover:text-blue-400 transition-colors">
                                    {course.name}
                                  </td>
                                  <td className="py-2.5 px-4 text-gray-600 dark:text-gray-400 text-center font-medium">
                                    {course.hours}
                                  </td>
                                  <td className="py-2.5 px-4 text-center text-accent-dark font-bold">
                                    {course.credits}
                                  </td>
                                </motion.tr>
                              ))}
                              {!mcsecurriculum.find(c => c.semester === activeSemestermcse)?.courses && (
                                <tr>
                                  <td colSpan="4" className="py-12 text-center text-gray-500 dark:text-gray-400 italic">
                                    Curriculum details for Semester {activeSemestermcse} will be updated soon.
                                  </td>
                                </tr>
                              )}
                              {mcsecurriculum.find(c => c.semester === activeSemestermcse)?.totalCredits && (
                                <motion.tr
                                  key="total"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="bg-blue-50/80 dark:bg-blue-900/20 border-t-2 border-blue-200 dark:border-blue-800"
                                >
                                  <td colSpan="3" className="py-2.5 px-4 text-center font-bold text-gray-800 dark:text-gray-200">
                                    Total Credits
                                  </td>
                                  <td className="py-2.5 px-4 text-center text-accent-dark font-black text-lg">
                                    {mcsecurriculum.find(c => c.semester === activeSemestermcse).totalCredits}
                                  </td>
                                </motion.tr>
                              )}
                            </AnimatePresence>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                  <section id="mtech-ece" className="mt-12 w-full">
                    <div className="flex justify-between items-end mb-8 border-b pb-4 border-gray-200 dark:border-gray-800">
                      <div>
                         <h2 className="text-2xl font-bold font-serif text-primary dark:text-white">
                          M.Tech (Electronics and Communication Engineering)
                        </h2>
                        
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Explore the semester-wise course structure (Total Credits: 54).</p>
                      </div>
                    </div>
          
                    <div className="flex overflow-x-auto gap-2 mb-6 pb-4">
                      {[1, 2, 3, 4].map((sem) => (
                        <button
                          key={sem}
                          onClick={() => setActiveSemestermec(sem)}
                          className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                            activeSemestermec === sem
                              ? "bg-brand-red text-white shadow-md dark:bg-brand-red-dark"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                          }`}
                        >
                          Semester {sem}
                        </button>
                      ))}
                    </div>
          
                    <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden relative min-h-[300px]">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800/50">
                              <th className="py-2.5 px-4 font-bold text-gray-700 dark:text-gray-300 border-b dark:border-gray-700 w-16">
                                S.No
                              </th>
                              <th className="py-2.5 px-4 font-bold text-gray-700 dark:text-gray-300 border-b dark:border-gray-700 w-[60%]">
                                Course Title
                              </th>
                              <th className="py-2.5 px-4 font-bold text-gray-700 dark:text-gray-300 border-b dark:border-gray-700 w-[25%] text-center">
                                Hours/Week(L-T-P)
                              </th>
                              <th className="py-2.5 px-4 font-bold text-gray-700 dark:text-gray-300 border-b dark:border-gray-700 w-[15%] text-center">
                                Credits
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <AnimatePresence mode="wait">
                              {meccurriculum.find(c => c.semester === activeSemestermec)?.courses.map((course, index) => (
                                <motion.tr
                                  key={`${activeSemestermec}-${course.name}`}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2, delay: index * 0.05 }}
                                  className="group border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors"
                                >
                                  <td className="py-2.5 px-4 text-gray-500 dark:text-gray-400 font-medium">
                                    {index + 1}.
                                  </td>
                                  <td className="py-2.5 px-4 font-medium text-gray-800 dark:text-gray-200 group-hover:text-accent-dark dark:group-hover:text-blue-400 transition-colors">
                                    {course.name}
                                  </td>
                                  <td className="py-2.5 px-4 text-gray-600 dark:text-gray-400 text-center font-medium">
                                    {course.hours}
                                  </td>
                                  <td className="py-2.5 px-4 text-center text-accent-dark font-bold">
                                    {course.credits}
                                  </td>
                                </motion.tr>
                              ))}
                              {!meccurriculum.find(c => c.semester === activeSemestermec)?.courses && (
                                <tr>
                                  <td colSpan="4" className="py-12 text-center text-gray-500 dark:text-gray-400 italic">
                                    Curriculum details for Semester {activeSemestermec} will be updated soon.
                                  </td>
                                </tr>
                              )}
                              {meccurriculum.find(c => c.semester === activeSemestermec)?.totalCredits && (
                                <motion.tr
                                  key="total"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="bg-blue-50/80 dark:bg-blue-900/20 border-t-2 border-blue-200 dark:border-blue-800"
                                >
                                  <td colSpan="3" className="py-2.5 px-4 text-center font-bold text-gray-800 dark:text-gray-200">
                                    Total Credits
                                  </td>
                                  <td className="py-2.5 px-4 text-center text-accent-dark font-black text-lg">
                                    {meccurriculum.find(c => c.semester === activeSemestermec).totalCredits}
                                  </td>
                                </motion.tr>
                              )}
                            </AnimatePresence>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
        </div>
      </div>
    </div>
  );
};

export default UgPgSchemesPage;
