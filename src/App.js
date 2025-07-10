import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import GetHelp from './pages/GetHelp';
import JoinUs from './pages/JoinUs';
import Dashboard from './pages/Dashboard';
import HelpedPeople from './pages/HelpedPeople';
import aasraLogo from './assets/images/aasra_logo.jpg';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from './hooks/useTranslation';

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-root">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={aasraLogo} alt="AASRA WELFARE FOUNDATION" className="navbar-logo-img" />
          <span className="site-title">AASRA WELFARE FOUNDATION</span>
        </div>
        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.home')}</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.dashboard')}</NavLink>
          <NavLink to="/get-help" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.getHelp')}</NavLink>
          <NavLink to="/join-us" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.joinUs')}</NavLink>
          <NavLink to="/helped-people" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.helpedPeople')}</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.about')}</NavLink>
          <LanguageSwitcher />
        </div>
        <button 
          className={`navbar-hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo">
                <img src={aasraLogo} alt="AASRA WELFARE FOUNDATION" className="mobile-logo-img" />
                <span className="site-title">AASRA WELFARE FOUNDATION</span>
              </div>
              <button className="mobile-menu-close" onClick={closeMobileMenu}>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="mobile-menu-links">
              <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.home')}</NavLink>
              <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.dashboard')}</NavLink>
              <NavLink to="/get-help" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.getHelp')}</NavLink>
              <NavLink to="/join-us" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.joinUs')}</NavLink>
              <NavLink to="/helped-people" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.helpedPeople')}</NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMobileMenu}>{t('nav.about')}</NavLink>
              <div className="mobile-language-switcher">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content with Routing */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/helped-people" element={<HelpedPeople />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-copy">&copy; {new Date().getFullYear()} AASRA WELFARE FOUNDATION. All rights reserved.</div>
          <div className="footer-social">
            <button className="social-btn" aria-label="Instagram">Instagram</button>
            <button className="social-btn" aria-label="X">X</button>
            <button className="social-btn" aria-label="Facebook">Facebook</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
