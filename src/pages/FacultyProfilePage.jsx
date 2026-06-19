import React, { useMemo, useState, useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import {
  FileText, ArrowLeft, Mail, Phone, BookOpen, GraduationCap,
  Link as LinkIcon, User, Award, Presentation, Briefcase, Users,
  ChevronRight, ChevronLeft
} from 'lucide-react';

const LinkedinIcon = ({ className }) => (
  <svg
    className={className}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 382.00 382.00"
    xmlSpace="preserve"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="3.056"></g>
    <g id="SVGRepo_iconCarrier">
      <path style={{ fill: '#0077B7' }} d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path>
    </g>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg
    className={className}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 408.788 408.788"
    xmlSpace="preserve"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path style={{ fill: '#475993' }} d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z"></path>
    </g>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="-166.42 -166.42 1442.34 1442.34"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M741 .2V0h52l19 3.8c12.667 2.467 24.167 5.7 34.5 9.7 10.334 4 20.334 8.667 30 14 9.667 5.333 18.434 10.767 26.301 16.3 7.8 5.467 14.8 11.267 21 17.4C929.933 67.4 939.5 69 952.5 66s27-7.167 42-12.5 29.834-11.333 44.5-18c14.667-6.667 23.601-10.9 26.801-12.7 3.133-1.866 4.8-2.866 5-3l.199-.3 1-.5 1-.5 1-.5 1-.5.2-.3.3-.2.301-.2.199-.3 1-.3 1-.2-.199 1.5-.301 1.5-.5 1.5-.5 1.5-.5 1-.5 1-.5 1.5c-.333 1-.666 2.333-1 4-.333 1.667-3.5 8.333-9.5 20S1051 73 1042 85s-17.066 21.066-24.199 27.2c-7.2 6.2-11.967 10.533-14.301 13-2.333 2.533-5.166 4.866-8.5 7l-5 3.3-1 .5-1 .5-.199.3-.301.2-.3.2-.2.3-1 .5-1 .5-.199.3-.301.2-.3.2-.2.3-.199.3-.301.2-.3.2-.2.3h5l28-6c18.667-4 36.5-8.833 53.5-14.5l27-9 3-1 1.5-.5 1-.5 1-.5 1-.5 1-.5 2-.3 2-.2v2l-.5.2-.5.3-.199.3-.301.2-.3.2-.2.3-.199.3-.301.2-.3.2-.2.3-.199.3-.301.2-.5 1-.5 1-.3.2c-.133.2-4.366 5.866-12.7 17-8.333 11.2-12.833 16.866-13.5 17-.666.2-1.6 1.2-2.8 3-1.133 1.866-8.2 9.3-21.2 22.3s-25.732 24.566-38.199 34.7c-12.533 10.2-18.867 22.733-19 37.6-.2 14.8-.967 31.534-2.301 50.2-1.333 18.667-3.833 38.833-7.5 60.5-3.666 21.667-9.333 46.167-17 73.5-7.666 27.333-17 54-28 80s-22.5 49.333-34.5 70-23 38.167-33 52.5-20.166 27.833-30.5 40.5c-10.333 12.667-23.399 26.934-39.199 42.8-15.867 15.8-24.533 24.467-26 26-1.533 1.467-8.066 6.934-19.601 16.4-11.466 9.533-23.8 19.066-37 28.6-13.133 9.467-25.2 17.367-36.2 23.7s-24.266 13.566-39.8 21.7C630.734 840.4 614 848 596 855s-37 13.5-57 19.5-39.333 10.667-58 14c-18.666 3.333-39.833 6.167-63.5 8.5l-35.5 3.5v.5h-65v-.5l-8.5-.5c-5.666-.333-10.333-.667-14-1-3.666-.333-17.5-2.167-41.5-5.5s-42.833-6.667-56.5-10c-13.666-3.333-34-9.667-61-19s-50.1-18.767-69.3-28.3c-19.133-9.467-31.133-15.467-36-18-4.8-2.467-10.2-5.533-16.2-9.2l-9-5.5-.199-.3-.301-.2-.3-.2-.2-.3-1-.5-1-.5-.199-.3-.301-.2-.3-.2-.2-.3-.199-.3L.5 800H0v-2l1 .2 1 .3 4.5.5c3 .333 11.167.833 24.5 1.5 13.334.667 27.5.667 42.5 0s30.334-2.167 46-4.5c15.667-2.333 34.167-6.333 55.5-12 21.334-5.667 40.934-12.4 58.801-20.2 17.8-7.866 30.466-13.733 38-17.6 7.466-3.8 18.866-10.867 34.199-21.2l23-15.5.2-.3.3-.2.301-.2.199-.3.2-.3.3-.2.301-.2.199-.3 1-.3 1-.2.2-1 .3-1 .301-.2.199-.3-8-.5c-5.333-.333-10.5-.667-15.5-1s-12.833-1.833-23.5-4.5c-10.666-2.667-22.166-6.667-34.5-12-12.333-5.333-24.333-11.667-36-19-11.666-7.333-20.1-13.434-25.3-18.3-5.133-4.801-11.8-11.6-20-20.4-8.133-8.866-15.2-17.967-21.2-27.3s-11.733-20.101-17.199-32.3L124.5 551l-.5-1.5-.5-1.5-.3-1-.2-1 1.5.2 1.5.3 11 1.5c7.334 1 18.834 1.333 34.5 1 15.667-.333 26.5-1 32.5-2s9.667-1.667 11-2l2-.5 2.5-.5 2.5-.5.2-.3.3-.2.301-.2.199-.3-2-.5-2-.5-2-.5-2-.5-2-.5c-1.333-.333-3.666-1-7-2-3.333-1-12.333-4.667-27-11-14.666-6.333-26.333-12.5-35-18.5a241.7 241.7 0 0 1-24.8-19.7c-7.8-7.2-16.366-16.467-25.7-27.8-9.333-11.333-17.666-24.5-25-39.5-7.333-15-12.833-29.333-16.5-43a232.143 232.143 0 0 1-7.199-41.5L43 316l1 .2 1 .3 1 .5 1 .5 1 .5 1 .5 15.5 7c10.334 4.667 23.167 8.667 38.5 12 15.334 3.333 24.5 5.167 27.5 5.5l4.5.5h9l-.199-.3-.301-.2-.3-.2-.2-.3-.199-.3-.301-.2-.3-.2-.2-.3-1-.5-1-.5-.199-.3-.301-.2-.3-.2-.2-.3-1-.5-1-.5-.199-.3c-.2-.134-3.067-2.267-8.601-6.4-5.467-4.2-11.2-9.633-17.2-16.3s-12-13.667-18-21A162.158 162.158 0 0 1 77 271c-4.666-8.333-9.6-18.934-14.8-31.8-5.133-12.8-9.033-25.7-11.7-38.7-2.666-13-4.166-25.833-4.5-38.5-.333-12.667 0-23.5 1-32.5s3-19.167 6-30.5 7.334-23.333 13-36l8.5-19 .5-1.5.5-1.5.301-.2.199-.3.2-.3.3-.2.301.2.199.3.2.3.3.2.301.2.199.3.2.3.3.2.5 1 .5 1 .301.2.199.3 13.5 15c9 10 19.667 21.167 32 33.5 12.334 12.333 19.167 18.733 20.5 19.2 1.334.533 3 2.066 5 4.6 2 2.467 8.667 8.367 20 17.7 11.334 9.333 26.167 20.167 44.5 32.5 18.334 12.333 38.667 24.5 61 36.5 22.334 12 46.334 22.833 72 32.5 25.667 9.667 43.667 16 54 19 10.334 3 28 6.833 53 11.5s43.834 7.667 56.5 9c12.667 1.333 21.334 2.1 26 2.3l7 .2-.199-1.5-.301-1.5-2-12.5c-1.333-8.333-2-20-2-35s1.167-28.833 3.5-41.5c2.334-12.667 5.834-25.5 10.5-38.5 4.667-13 9.234-23.434 13.7-31.3 4.534-7.8 10.467-16.7 17.8-26.7 7.334-10 16.834-20.333 28.5-31 11.667-10.667 25-20.167 40-28.5s28.834-14.667 41.5-19c12.667-4.333 23.334-7.167 32-8.5 8.667-1.333 13-2.1 13-2.3z" fill="#5da8dc" stroke="#5da8dc" strokeWidth=".5"></path>
      <path d="M0 399V0h741v.2c0 .2-4.333.966-13 2.3-8.666 1.333-19.333 4.167-32 8.5-12.666 4.333-26.5 10.667-41.5 19s-28.333 17.833-40 28.5c-11.666 10.667-21.166 21-28.5 31-7.333 10-13.266 18.9-17.8 26.7-4.466 7.866-9.033 18.3-13.7 31.3-4.666 13-8.166 25.833-10.5 38.5-2.333 12.667-3.5 26.5-3.5 41.5s.667 26.667 2 35l2 12.5.301 1.5.199 1.5-7-.2c-4.666-.2-13.333-.966-26-2.3-12.666-1.333-31.5-4.333-56.5-9s-42.666-8.5-53-11.5c-10.333-3-28.333-9.333-54-19-25.666-9.667-49.666-20.5-72-32.5-22.333-12-42.666-24.167-61-36.5-18.333-12.333-33.166-23.167-44.5-32.5-11.333-9.333-18-15.233-20-17.7-2-2.533-3.666-4.066-5-4.6-1.333-.467-8.166-6.867-20.5-19.2-12.333-12.333-23-23.5-32-33.5L80 44.5l-.199-.3-.301-.2-.5-1-.5-1-.3-.2-.2-.3-.199-.3-.301-.2-.3-.2-.2-.3-.199-.3-.301-.2-.3.2-.2.3-.199.3-.301.2-.5 1.5-.5 1.5L66 63c-5.666 12.667-10 24.667-13 36s-5 21.5-6 30.5-1.333 19.833-1 32.5c.334 12.667 1.834 25.5 4.5 38.5 2.667 13 6.567 25.9 11.7 38.7 5.2 12.866 10.134 23.466 14.8 31.8 4.667 8.333 10 16.167 16 23.5 6 7.333 12 14.333 18 21s11.733 12.1 17.2 16.3c5.533 4.134 8.4 6.267 8.601 6.4l.199.3 1 .5 1 .5.2.3.3.2.301.2.199.3 1 .5 1 .5.2.3.3.2.301.2.199.3.2.3.3.2.301.2.199.3h-9l-4.5-.5c-3-.333-12.166-2.167-27.5-5.5-15.333-3.333-28.166-7.333-38.5-12l-15.5-7-1-.5-1-.5-1-.5-1-.5-1-.3-1-.2 1.801 21c1.133 14 3.533 27.833 7.199 41.5 3.667 13.667 9.167 28 16.5 43 7.334 15 15.667 28.167 25 39.5 9.334 11.333 17.9 20.6 25.7 27.8a241.7 241.7 0 0 0 24.8 19.7c8.667 6 20.334 12.167 35 18.5 14.667 6.333 23.667 10 27 11 3.334 1 5.667 1.667 7 2l2 .5 2 .5 2 .5 2 .5 2 .5-.199.3-.301.2-.3.2-.2.3-2.5.5-2.5.5-2 .5c-1.333.333-5 1-11 2s-16.833 1.667-32.5 2c-15.666.333-27.166 0-34.5-1l-11-1.5-1.5-.3-1.5-.2.2 1 .3 1 .5 1.5.5 1.5 8.301 18.2C138.266 581.399 144 592.167 150 601.5s13.067 18.434 21.2 27.3c8.2 8.801 14.867 15.6 20 20.4 5.2 4.866 13.634 10.967 25.3 18.3 11.667 7.333 23.667 13.667 36 19 12.334 5.333 23.834 9.333 34.5 12 10.667 2.667 18.5 4.167 23.5 4.5s10.167.667 15.5 1l8 .5-.199.3-.301.2-.3 1-.2 1-1 .2-1 .3-.199.3-.301.2-.3.2-.2.3-.199.3-.301.2-.3.2-.2.3-23 15.5c-15.333 10.333-26.733 17.4-34.199 21.2-7.534 3.866-20.2 9.733-38 17.6-17.867 7.8-37.467 14.533-58.801 20.2-21.333 5.667-39.833 9.667-55.5 12-15.666 2.333-31 3.833-46 4.5s-29.166.667-42.5 0c-13.333-.667-21.5-1.167-24.5-1.5l-4.5-.5-1-.3-1-.2V399zM1107.801 109.8l.199-.3.5-.3.5-.2v792H382v-.5l35.5-3.5c23.667-2.333 44.834-5.167 63.5-8.5 18.667-3.333 38-8 58-14s39-12.5 57-19.5 34.734-14.6 50.2-22.8c15.534-8.134 28.8-15.367 39.8-21.7s23.067-14.233 36.2-23.7c13.2-9.533 25.534-19.066 37-28.6 11.534-9.467 18.067-14.934 19.601-16.4 1.467-1.533 10.133-10.2 26-26 15.8-15.866 28.866-30.133 39.199-42.8 10.334-12.667 20.5-26.167 30.5-40.5s21-31.833 33-52.5 23.5-44 34.5-70 20.334-52.667 28-80c7.667-27.333 13.334-51.833 17-73.5 3.667-21.667 6.167-41.833 7.5-60.5 1.334-18.667 2.101-35.4 2.301-50.2.133-14.866 6.467-27.4 19-37.6 12.467-10.134 25.199-21.7 38.199-34.7s20.067-20.434 21.2-22.3c1.2-1.8 2.134-2.8 2.8-3 .667-.134 5.167-5.8 13.5-17 8.334-11.134 12.567-16.8 12.7-17l.3-.2.5-1 .5-1 .301-.2.199-.3.2-.3.3-.2.301-.2.199-.3.2-.3.3-.2.301-.2zM812 3.8L793 0h316v107l-2 .2-2 .3-1 .5-1 .5-1 .5-1 .5-1.5.5-3 1-27 9c-17 5.667-34.833 10.5-53.5 14.5l-28 6h-5l.2-.3.3-.2.301-.2.199-.3.2-.3.3-.2.301-.2.199-.3 1-.5 1-.5.2-.3.3-.2.301-.2.199-.3 1-.5 1-.5 5-3.3c3.334-2.134 6.167-4.467 8.5-7 2.334-2.467 7.101-6.8 14.301-13C1024.933 106.066 1033 97 1042 85s16.5-23.833 22.5-35.5 9.167-18.333 9.5-20c.334-1.667.667-3 1-4l.5-1.5.5-1 .5-1 .5-1.5.5-1.5.301-1.5.199-1.5-1 .2-1 .3-.199.3-.301.2-.3.2-.2.3-1 .5-1 .5-1 .5-1 .5-.199.3c-.2.134-1.867 1.134-5 3-3.2 1.8-12.134 6.034-26.801 12.7-14.666 6.667-29.5 12.667-44.5 18s-29 9.5-42 12.5-22.566 1.4-28.699-4.8c-6.2-6.134-13.2-11.934-21-17.4-7.867-5.533-16.634-10.966-26.301-16.3a245.399 245.399 0 0 0-30-14c-10.333-4-21.833-7.233-34.5-9.7zM0 850.5V800h.5l.301.2.199.3.2.3.3.2.301.2.199.3 1 .5 1 .5.2.3.3.2.301.2.199.3 9 5.5c6 3.667 11.4 6.733 16.2 9.2 4.867 2.533 16.867 8.533 36 18 19.2 9.533 42.3 18.967 69.3 28.3s47.334 15.667 61 19c13.667 3.333 32.5 6.667 56.5 10s37.834 5.167 41.5 5.5c3.667.333 8.334.667 14 1l8.5.5v.5H0v-50.5z" fill="#ffffff" stroke="#ffffff" strokeWidth=".5"></path>
    </g>
  </svg>
);
import facultyDetails from '../data/faculty_details.json';

const FacultyProfilePage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('biography');
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Tab Scrolling Logic
  const tabsRef = useRef(null);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [showLeftScroll, setShowLeftScroll] = useState(false);

  const handleScroll = () => {
    if (!tabsRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
    setShowLeftScroll(scrollLeft > 0);
    // 5px threshold to account for rounding errors
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    // Initial check
    setTimeout(handleScroll, 100);
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scrollTabs = (dir) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' });
    }
  };

  const profile = useMemo(() => {
    const details = facultyDetails[slug];
    if (!details) return null;

    // Guess department from text if not provided
    let department = 'Faculty Member';
    const textToCheck = (details.bio || '').toLowerCase();
    if (textToCheck.includes('computer science') || textToCheck.includes('cse')) {
      department = 'Computer Science & Engineering';
    } else if (textToCheck.includes('electronics') || textToCheck.includes('ece') || textToCheck.includes('vlsi')) {
      department = 'Electronics & Communication Engineering';
    } else if (textToCheck.includes('applied science') || textToCheck.includes('humanities') || textToCheck.includes('mathematics') || textToCheck.includes('physics')) {
      department = 'Applied Science & Humanities';
    }

    const nameParts = slug.split('-');
    const formattedName = nameParts.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    // Filter out Google Scholar, ORCID, and Scopus from researchLinks as they are already displayed in the top section
    const otherLinks = (details.researchLinks || []).filter(link => {
      const lower = link.toLowerCase();
      return !lower.includes('scholar.google') && !lower.includes('orcid') && !lower.includes('scopus');
    });

    return {
      ...details,
      name: formattedName,
      designation: details.designation || 'Faculty Member',
      department,
      email: details.email || '',
      phone: details.phone || '',
      linkedin: details.linkedin || '',
      facebook: details.facebook || '',
      twitter: details.twitter || '',
      researchLinks: [...new Set(otherLinks)],
      books_chapters: details.books_chapters || '',
      publications: details.publications || '',
      patents: details.patents || '',
      seminars: details.seminars || '',
      projects: details.projects || '',
      supervisions: details.supervisions || '',
    };
  }, [slug]);

  if (!profile) {
    return <Navigate to="/people/faculty" replace />;
  }

  const tabs = [
    { id: 'biography', label: 'Biography', icon: <User className="w-4 h-4 mr-2" /> },
    { id: 'books', label: 'Book/Chapter', icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { id: 'publications', label: 'Publications', icon: <FileText className="w-4 h-4 mr-2" /> },
    { id: 'patents', label: 'Patent', icon: <Award className="w-4 h-4 mr-2" /> },
    { id: 'seminars', label: 'Seminars/Workshops', icon: <Presentation className="w-4 h-4 mr-2" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { id: 'supervisions', label: 'Supervisions', icon: <Users className="w-4 h-4 mr-2" /> },
    { id: 'research', label: 'Research & Links', icon: <LinkIcon className="w-4 h-4 mr-2" /> },
  ];

  const renderListContent = (content) => {
    if (!content) return null;

    let items = [];
    if (Array.isArray(content)) {
      items = content;
    } else if (typeof content === 'string') {
      items = content.split(/\n\n+/).filter(Boolean).map(text => ({ title: text.trim() }));
    }

    return (
      <ul className="space-y-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex flex-col relative pl-6">
            <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-brand-red"></span>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-900 dark:text-white hover:text-brand-red dark:hover:text-brand-red-dark transition-colors">
                {item.title}
              </a>
            ) : (
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-relaxed">{item.title}</h3>
            )}
            {item.authors && <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">{item.authors}</span>}
            {item.journal && <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{item.journal}</span>}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen pb-20">

      <PageHeader
        title="Faculty Profile"
        backgroundImage="/campus-image.jpg"
        compact={true}
      >
        <Link
          to="/people/faculty"
          className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wide font-medium group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all faculty
        </Link>
      </PageHeader>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* TOP SECTION: Photo and Info side-by-side on desktop */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-8 items-center md:items-stretch relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800/50 pointer-events-none"></div>

          {/* Profile Image */}
          <div className="rounded-xl border-4 border-white dark:border-gray-800 shadow-md bg-white dark:bg-gray-800 shrink-0 relative z-10 overflow-hidden flex items-center justify-center">
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="w-auto h-auto max-h-40 md:max-h-64 max-w-[14rem] md:max-w-[18rem] object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(profile.name) + "&background=1B3A6B&color=fff&size=512";
                }}
              />
            ) : (
              <div className="w-40 h-40 md:w-56 md:h-56 flex items-center justify-center text-5xl text-primary font-serif">
                {profile.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Profile Details */}
          <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:h-full">
            <div className="flex w-full justify-between items-start">
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
                <h1 className="text-xl md:text-2xl font-bold font-serif text-gray-900 dark:text-white mb-2">
                  {profile.name}
                </h1>
                <div className="text-xs text-brand-red font-semibold mb-2 flex flex-col space-y-0.5">
                  {profile.designation.split('\n').map((desig, idx) => (
                    <span key={idx}>{desig.trim()}</span>
                  ))}
                </div>
                {profile.department !== 'Faculty Member' && (
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 uppercase tracking-wider text-xs">
                    {profile.department}
                  </p>
                )}
              </div>

              {/* Social Icons */}
              <div className="flex flex-col gap-3 ml-4 shrink-0 mt-1">
                {(profile.linkedin && profile.linkedin !== "#") ? (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="hover:opacity-80"
                  >
                    <LinkedinIcon className="w-8 h-8" />
                  </a>
                ) : (
                  <div title="LinkedIn" className="opacity-40 cursor-not-allowed grayscale">
                    <LinkedinIcon className="w-8 h-8" />
                  </div>
                )}
                {(profile.facebook && profile.facebook !== "#") ? (
                  <a
                    href={profile.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    className="hover:opacity-80"
                  >
                    <FacebookIcon className="w-8 h-8" />
                  </a>
                ) : (
                  <div title="Facebook" className="opacity-40 cursor-not-allowed grayscale">
                    <FacebookIcon className="w-8 h-8" />
                  </div>
                )}
                {(profile.twitter && profile.twitter !== "#") ? (
                  <a
                    href={profile.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                    className="hover:opacity-80"
                  >
                    <TwitterIcon className="w-8 h-8" />
                  </a>
                ) : (
                  <div title="Twitter" className="opacity-40 cursor-not-allowed grayscale">
                    <TwitterIcon className="w-8 h-8" />
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-gray-700 dark:text-gray-300 mt-auto pt-4">

              {/* Education */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center mr-3 shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Educational Qualification</h4>
                  {profile.education ? (
                    <ul className="space-y-1">
                      {profile.education.split('\n').filter(line => line.trim() !== '').map((line, idx) => (
                        <li key={idx} className="text-sm">{line.trim()}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-sm italic text-gray-500">Not provided</span>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center mr-3 shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Email Address</h4>
                  {profile.email ? (
                    <a href={`mailto:${profile.email}`} className="text-sm text-primary hover:underline">{profile.email}</a>
                  ) : (
                    <span className="text-sm italic text-gray-500">Not provided</span>
                  )}
                </div>
              </div>

              {/* Research Profiles */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center mr-3 shrink-0">
                  <LinkIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Research Profiles</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Google Scholar', 'ORCID', 'Scopus'].map((type, idx) => {
                      let href = '#';
                      if (type === 'Google Scholar' && profile.google_scholar) href = profile.google_scholar;
                      if (type === 'ORCID' && profile.orcid) href = profile.orcid;
                      if (type === 'Scopus' && profile.scopus) href = profile.scopus;

                      return (
                        <a
                          key={idx}
                          href={href}
                          target={href !== '#' ? "_blank" : undefined}
                          rel={href !== '#' ? "noopener noreferrer" : undefined}
                          className="px-3 py-1.5 bg-gray-50 hover:bg-red-50 dark:bg-gray-800/50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-brand-red rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-brand-red-dark transition-colors inline-flex items-center"
                        >
                          {type}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center mr-3 shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Phone Number</h4>
                  {profile.phone ? (
                    <div className="flex items-center">
                      <span
                        onClick={() => {
                          navigator.clipboard.writeText(profile.phone);
                          setCopiedPhone(true);
                          setTimeout(() => setCopiedPhone(false), 2000);
                        }}
                        className="text-sm cursor-pointer hover:text-brand-red transition-colors group relative"
                        title="Click to copy"
                      >
                        {profile.phone}
                      </span>
                      {copiedPhone && <span className="ml-2 text-xs text-green-600 dark:text-green-400 font-medium">Copied!</span>}
                    </div>
                  ) : (
                    <span className="text-sm italic text-gray-500">Not provided</span>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Sticky Tabs & Content */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 min-h-[400px] relative">

          {/* Sticky Tab Bar */}
          <div className="sticky top-20 z-30 bg-white dark:bg-surface-dark rounded-t-2xl border-b border-gray-200 dark:border-gray-800 shadow-sm relative group overflow-hidden">

            {showLeftScroll && (
              <button
                onClick={() => scrollTabs('left')}
                className="absolute left-0 top-0 bottom-0 z-10 w-12 flex items-center justify-start pl-2 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-surface-dark dark:via-surface-dark/90 text-gray-500 hover:text-brand-red transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div
              ref={tabsRef}
              onScroll={handleScroll}
              className="hide-scrollbar overflow-x-auto flex relative scroll-smooth"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center whitespace-nowrap px-6 py-4 font-medium text-xs transition-colors relative ${activeTab === tab.id
                    ? 'text-brand-red dark:text-brand-red-dark bg-red-50/50 dark:bg-gray-800/50'
                    : 'text-gray-600 hover:text-brand-red dark:text-gray-400 dark:hover:text-brand-red-dark hover:bg-red-50/30 dark:hover:bg-gray-800/30'
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red dark:bg-brand-red-dark"></span>
                  )}
                </button>
              ))}
            </div>

            {showRightScroll && (
              <button
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-0 bottom-0 z-10 w-16 flex items-center justify-end pr-3 bg-gradient-to-l from-white via-white/90 to-transparent dark:from-surface-dark dark:via-surface-dark/90 text-gray-500 hover:text-brand-red transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 animate-pulse group-hover:animate-none" />
              </button>
            )}
          </div>

          {/* Tab Content Area */}
          <div className="p-8">

            {activeTab === 'biography' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Biography</h2>
                <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {profile.bio || "No biography provided."}
                </p>
                {profile.resume && (
                  <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-6">
                    <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-brand-red" />
                      Detailed Resume
                    </h3>
                    <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline break-all inline-flex items-center">
                      {profile.resume}
                    </a>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'books' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Books & Book Chapters</h2>
                {profile.books_chapters && profile.books_chapters.length > 0 ? renderListContent(profile.books_chapters) : (
                  <p className="text-sm text-gray-500 italic">No book or chapter details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'publications' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Publications</h2>
                {profile.publications && profile.publications.length > 0 ? renderListContent(profile.publications) : (
                  <p className="text-sm text-gray-500 italic">No publication details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'patents' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Patents</h2>
                {profile.patents && profile.patents.length > 0 ? renderListContent(profile.patents) : (
                  <p className="text-sm text-gray-500 italic">No patent details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'seminars' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Seminars & Workshops</h2>
                {profile.seminars && profile.seminars.length > 0 ? renderListContent(profile.seminars) : (
                  <p className="text-sm text-gray-500 italic">No seminar or workshop details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
                {profile.projects && profile.projects.length > 0 ? renderListContent(profile.projects) : (
                  <p className="text-sm text-gray-500 italic">No project details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'supervisions' && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">Supervisions</h2>
                {profile.supervisions && profile.supervisions.length > 0 ? renderListContent(profile.supervisions) : (
                  <p className="text-sm text-gray-500 italic">No supervision details provided yet.</p>
                )}
              </div>
            )}

            {activeTab === 'research' && (
              <div className="animate-fade-in-up">
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Research Profiles & Links</h2>
                {profile.researchLinks && profile.researchLinks.length > 0 ? (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.researchLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link}
                          target="_blank" rel="noopener noreferrer"
                          className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
                        >
                          <div className="overflow-hidden">
                            <p className="text-sm text-gray-900 dark:text-white font-medium truncate w-full group-hover:text-primary transition-colors">{link}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 italic">No external research links available.</p>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfilePage;
