import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DirectorDeskPage from "./pages/DirectorDeskPage";
import VisionMissionPage from "./pages/VisionMissionPage";
import AboutPlaceholderPage from "./pages/AboutPlaceholderPage";
import AdministrationPage from "./pages/AdministrationPage";
import BtechCsePage from "./pages/BtechCsePage";
import BtechEcePage from "./pages/BtechEcePage";
import BtechHonorsPage from "./pages/BtechHonorsPage";
import MtechCsePage from "./pages/MtechCsePage";
import MtechEcePage from "./pages/MtechEcePage";
import PhdPage from "./pages/PhdPage";
import AcademicCalendarPage from "./pages/AcademicCalendarPage";
import OrdinancePage from "./pages/OrdinancePage";
import ResearchPage from "./pages/ResearchPage";
import PeoplePage from "./pages/PeoplePage";
import LifePage from "./pages/LifePage";
import NoticePage from "./pages/NoticePage";
import CareersPage from "./pages/CareersPage";
import ETenderPage from "./pages/ETenderPage";
import PlacementPage from "./pages/PlacementPage";
import ContactPage from "./pages/ContactPage";
import NIRFPage from "./pages/NIRFPage";
import NotFoundPage from "./pages/NotFoundPage";
import FeesPage from './pages/FeesPage';
import LibraryPage from './pages/LibraryPage';
import StudentAchievementsPage from './pages/StudentAchievementsPage';
import FacultyAchievementsPage from './pages/FacultyAchievementsPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="w-full overflow-x-hidden min-h-screen flex flex-col font-sans text-gray-900 dark:text-gray-100 bg-bg dark:bg-bg-dark transition-colors duration-200">
        {/* <TopBar /> */}
        <Navbar />
        <main className="flex-grow w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/director-desk" element={<DirectorDeskPage />} />
            <Route path="/about/vision-mission" element={<VisionMissionPage />} />
            <Route path="/about/student-achievements" element={<StudentAchievementsPage />} />
            <Route path="/about/faculty-achievements" element={<FacultyAchievementsPage />} />
            <Route path="/about/act" element={<AboutPlaceholderPage title="ACT(PPP)" />} />
            <Route path="/about/statute" element={<AboutPlaceholderPage title="STATUTE" />} />
            <Route path="/about/overview" element={<AboutPlaceholderPage title="Overview" />} />
            <Route path="/about/ariia" element={<AboutPlaceholderPage title="ARIIA Ranking" />} />
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/academics/btech/cse" element={<BtechCsePage />} />
            <Route path="/academics/btech/ece" element={<BtechEcePage />} />
            <Route path="/academics/btech/honors" element={<BtechHonorsPage />} />
            <Route path="/academics/mtech/cse" element={<MtechCsePage />} />
            <Route path="/academics/mtech/ece" element={<MtechEcePage />} />
            <Route path="/academics/phd" element={<PhdPage />} />
            <Route path="/academics/calendar" element={<AcademicCalendarPage />} />
            <Route path="/academics/Calendar" element={<AcademicCalendarPage />} />
            <Route path="/academics/ordinance" element={<OrdinancePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/life" element={<LifePage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/e-tender" element={<ETenderPage />} />
            <Route path="/placement" element={<PlacementPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/nirf" element={<NIRFPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
