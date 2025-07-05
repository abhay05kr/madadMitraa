import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import GetHelp from './pages/GetHelp';
import JoinUs from './pages/JoinUs';
import Dashboard from './pages/Dashboard';
import HelpedPeople from './pages/HelpedPeople';

function App() {
  return (
    <div className="app-root">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="logo-placeholder">M</div>
          <span className="site-title">MadadMitra</span>
        </div>
        <div className="navbar-links">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>Dashboard</NavLink>
          <NavLink to="/get-help" className={({isActive}) => isActive ? 'active' : ''}>Get Help</NavLink>
          <NavLink to="/join-us" className={({isActive}) => isActive ? 'active' : ''}>Join Us</NavLink>
          <NavLink to="/helped-people" className={({isActive}) => isActive ? 'active' : ''}>Helped People</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        </div>
        <button className="navbar-hamburger" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

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
          <div className="footer-copy">&copy; {new Date().getFullYear()} MadadMitra. All rights reserved.</div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
