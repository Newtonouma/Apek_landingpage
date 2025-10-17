import './Navbar.css';

import { useState } from 'react';

const Navbar = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/images/APEK White.png" alt="Apek Logo" className="navbar-logo-img" />
        </div>
        <button className="navbar-menu-btn" aria-label="Menu" onClick={() => setMenuOpen((open) => !open)}>
          <span className="navbar-menu-icon">☰</span>
        </button>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
        </ul>
        <div className="navbar-auth">
          <button
            className="auth-btn"
            onClick={() => setAuthOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={authOpen}
          >
            Account ▾
          </button>
          {authOpen && (
            <div className="auth-dropdown">
              <a href="#signin" className="auth-link">Sign In</a>
              <a href="#signup" className="auth-link">Sign Up</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
