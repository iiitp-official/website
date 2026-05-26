import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/shared/ScrollToTop';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdministrationPage from './pages/AdministrationPage';
import AcademicsPage from './pages/AcademicsPage';
import ResearchPage from './pages/ResearchPage';
import PeoplePage from './pages/PeoplePage';
import LifePage from './pages/LifePage';
import NoticePage from './pages/NoticePage';
import CareersPage from './pages/CareersPage';
import ETenderPage from './pages/ETenderPage';
import PlacementPage from './pages/PlacementPage';
import ContactPage from './pages/ContactPage';
import FeesPage from './pages/FeesPage';
import LibraryPage from './pages/LibraryPage';
import NIRFPage from './pages/NIRFPage';
import NotFoundPage from './pages/NotFoundPage';

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
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/life" element={<LifePage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/e-tender" element={<ETenderPage />} />
            <Route path="/placement" element={<PlacementPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/library" element={<LibraryPage />} />
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
