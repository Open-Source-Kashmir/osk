import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ThemeToggle from "./shared/ThemeToggle";
import { useTheme } from "../context/ThemeContext";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };
  

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg z-1000`}>
      <div className="max-w-[1200px] w-full mx-auto py-4 pl-6 pr-8 flex justify-between items-center box-border">
        <Link to="/" className="no-underline text-blue-700 dark:text-blue-400 text-3xl font-extrabold transition-colors duration-300 hover:scale-105 transform">
          <span className="bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">OSK</span>
        </Link>
        
        <div className={`hidden md:flex items-center gap-8`}>
          <Link to="/" className={`${isActive('/') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative ml-8`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/programs" className={`${isActive('/programs') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`} onClick={() => setIsMenuOpen(false)}>
            Programs
          </Link>
          <Link to="/mentors" className={`${isActive('/mentors') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`} onClick={() => setIsMenuOpen(false)}>
            Mentors
          </Link>
          <Link to="/contributors" className={`${isActive('/contributors') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`} onClick={() => setIsMenuOpen(false)}>
            Contributors
          </Link>
          <Link to="/community" className={`${isActive('/community') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`} onClick={() => setIsMenuOpen(false)}>
            Community
          </Link>
          <Link to="/learning" className={`${isActive('/learning') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`} onClick={() => setIsMenuOpen(false)}>
            Learning
          </Link>

          <a 
            href="https://github.com/Open-Source-Kashmir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="no-underline bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub
          </a>
          <a 
            href="https://discord.gg/hgnUsqAmMT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link discord-link no-underline bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Discord
          </a>
           <ThemeToggle />
        </div>

        <div className="md:hidden flex flex-col cursor-pointer p-2" onClick={toggleMenu}>
          <span className={`w-6 h-0.5 ${isDark ? 'bg-gray-100' : 'bg-gray-700'} my-0.5 transition-transform duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 ${isDark ? 'bg-gray-100' : 'bg-gray-700'} my-0.5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 ${isDark ? 'bg-gray-100' : 'bg-gray-700'} my-0.5 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed top-16 left-0 w-full transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-sm shadow-xl py-8 gap-4 flex flex-col text-center z-50`}>
        <Link to="/" className={`${isActive('/') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-4 w-4/5 mx-auto rounded-xl`} onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/programs" className={`${isActive('/programs') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-4 w-4/5 mx-auto rounded-xl`} onClick={() => setIsMenuOpen(false)}>
          Programs
        </Link>
        <Link to="/mentors" className={`${isActive('/mentors') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-4 w-4/5 mx-auto rounded-xl`} onClick={() => setIsMenuOpen(false)}>
          Mentors
        </Link>
        <Link to="/contributors" className={`${isActive('/contributors') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-4 w-4/5 mx-auto rounded-xl`} onClick={() => setIsMenuOpen(false)}>
          Contributors
        </Link>
        <Link to="/community" className={`${isActive('/community') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-4 w-4/5 mx-auto rounded-xl`} onClick={() => setIsMenuOpen(false)}>
          Community
        </Link>
        <Link to="/learning" className={`${isActive('/learning') === 'nav-link active' ? 'text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12' : 'text-gray-900 dark:text-gray-100'} no-underline font-medium py-4 w-4/5 mx-auto rounded-xl`} onClick={() => setIsMenuOpen(false)}>
          Learning
        </Link>
        
        <a 
          href="https://github.com/Open-Source-Kashmir" 
          target="_blank" 
          rel="noopener noreferrer"
          className="no-underline bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-4 w-4/5 mx-auto rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
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
        <div className="w-4/5 mx-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
