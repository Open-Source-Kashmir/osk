import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ThemeToggle from "./shared/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg z-50`}
    >
      <div className="max-w-[1200px] w-full mx-auto py-4 pl-6 pr-8 flex justify-between items-center box-border">
        <Link
          to="/"
          className="no-underline text-blue-700 dark:text-blue-400 text-3xl font-extrabold transition-colors duration-300 hover:scale-105 transform"
        >
          <span className="bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            OSK
          </span>
        </Link>

        {/* Nav & actions split for desktop */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-6">
          {/* Nav links */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`${
                isActive("/") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12"
                  : "text-gray-900 dark:text-gray-100"
              } no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/programs"
              className={`${
                isActive("/programs") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12"
                  : "text-gray-900 dark:text-gray-100"
              } no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`}
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              to="/mentors"
              className={`${
                isActive("/mentors") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12"
                  : "text-gray-900 dark:text-gray-100"
              } no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`}
              onClick={() => setIsMenuOpen(false)}
            >
              Mentors
            </Link>
            <Link
              to="/contributors"
              className={`${
                isActive("/contributors") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12"
                  : "text-gray-900 dark:text-gray-100"
              } no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contributors
            </Link>
            <Link
              to="/community"
              className={`${
                isActive("/community") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12"
                  : "text-gray-900 dark:text-gray-100"
              } no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`}
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              to="/learning"
              className={`${
                isActive("/learning") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12"
                  : "text-gray-900 dark:text-gray-100"
              } no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`}
              onClick={() => setIsMenuOpen(false)}
            >
              Learning
            </Link>
            <Link
              to="/resources"
              className={`${
                isActive("/resources") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-500/12 dark:bg-blue-400/12"
                  : "text-gray-900 dark:text-gray-100"
              } no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
          </div>
          {/* Actions (desktop) */}
          <div className="flex items-center gap-4 ml-6">
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
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isMenuOpen
                ? "bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400"
                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div
        className={`md:hidden fixed top-16 left-0 w-full transition-all duration-300 transform ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        } bg-white/95 dark:bg-gray-900/95 shadow-xl z-50 overflow-y-auto`}
        style={{ maxHeight: "calc(100vh - 4rem)" }}
      >
        <div className="px-3 sm:px-4 py-6 sm:py-8 flex flex-col gap-4 sm:gap-6">
          {/* Navigation Links Section */}
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 sm:px-4 mb-2 sm:mb-3">
              Navigation
            </p>
            <Link
              to="/"
              className={`${
                isActive("/") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-700 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              } no-underline font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 block text-sm sm:text-base`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/programs"
              className={`${
                isActive("/programs") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-700 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              } no-underline font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 block text-sm sm:text-base`}
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              to="/mentors"
              className={`${
                isActive("/mentors") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-700 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              } no-underline font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 block text-sm sm:text-base`}
              onClick={() => setIsMenuOpen(false)}
            >
              Mentors
            </Link>
            <Link
              to="/contributors"
              className={`${
                isActive("/contributors") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-700 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              } no-underline font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 block text-sm sm:text-base`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contributors
            </Link>
            <Link
              to="/community"
              className={`${
                isActive("/community") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-700 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              } no-underline font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 block text-sm sm:text-base`}
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              to="/learning"
              className={`${
                isActive("/learning") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-700 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              } no-underline font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 block text-sm sm:text-base`}
              onClick={() => setIsMenuOpen(false)}
            >
              Learning
            </Link>
            <Link
              to="/resources"
              className={`${
                isActive("/resources") === "nav-link active"
                  ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-700 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              } no-underline font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 block text-sm sm:text-base`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

          {/* Social & Action Buttons Section */}
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 sm:px-4 mb-2 sm:mb-3">
              Connect
            </p>
            <a
              href="https://github.com/Open-Source-Kashmir"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-200 block text-center active:scale-95 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/hgnUsqAmMT"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-200 block text-center active:scale-95 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Discord
            </a>
            <div className="pt-2 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
