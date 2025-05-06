import React, { useEffect, useState } from 'react';
import './App.css';

import LoanCalculator from './Components/LoanCalculator';
import ErrorPage from './Components/errorpage';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="App">
      {location.pathname !== '/error' && (
        <header className="navbar">
  <div className="logo">Loan Calculator</div>

  <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
  </button>

  {/* Desktop Nav */}
  <nav className="desktop-nav">
    <button className="nav-button" onClick={() => handleNavigation('/')}>HOME</button>
    <button className="nav-button" onClick={() => handleNavigation('/exchange')}>EXCHANGE RATES (LIVE)</button>
    <button className="nav-button" onClick={() => handleNavigation('/about')}>ABOUT</button>
    <button className="nav-button" onClick={() => handleNavigation('/error')}>ERROR PAGE</button>
    <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌙' : '☀️'}
    </button>
  </nav>

  {/* Sidebar for small screens */}
  <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
    <button onClick={() => handleNavigation('/')}>HOME</button>
    <button onClick={() => handleNavigation('/exchange')}>EXCHANGE RATES (LIVE)</button>
    <button onClick={() => handleNavigation('/about')}>ABOUT</button>
    <button onClick={() => handleNavigation('/error')}>ERROR PAGE</button>
    <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? '🌙' : '☀️'}</button>
  </div>

  {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
</header>

      )}

      <main>
        <Routes>
          <Route path="/" element={<LoanCalculator />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
