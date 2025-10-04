import { useState } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import './Navbar.css';

import ThemeToggle from "./shared/ThemeToggle";
import { useTheme } from "../context/ThemeContext";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };
  

  return (
    <nav className={`navbar ${isDark ? "dark" : "light"} ` }>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">OSK</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/programs" className={isActive('/programs')} onClick={() => setIsMenuOpen(false)}>
            Programs
          </Link>
          <Link to="/mentors" className={isActive('/mentors')} onClick={() => setIsMenuOpen(false)}>
            Mentors
          </Link>
          <Link to="/contributors" className={isActive('/contributors')} onClick={() => setIsMenuOpen(false)}>
            Contributors
          </Link>
          

          <a 
            href="https://github.com/Open-Source-Kashmir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link github-link"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub
          </a>
          <a 
            href="https://discord.gg/gEHBwfDX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link discord-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Discord
          </a>
           <ThemeToggle />
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;