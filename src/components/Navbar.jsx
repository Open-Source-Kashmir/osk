import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./shared/ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark } = useTheme();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-700 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-400/10"
      : "text-gray-900 dark:text-gray-100";

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md z-[1000]">
      <div className="max-w-[1200px] mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="no-underline text-3xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent hover:scale-105 transform transition-all"
          onClick={closeMenu}
        >
          OSK
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/programs", label: "Programs" },
            { to: "/mentors", label: "Mentors" },
            { to: "/contributors", label: "Contributors" },
            { to: "/community", label: "Community" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`${isActive(
                item.to
              )} no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://github.com/Open-Source-Kashmir"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all"
            onClick={closeMenu}
          >
            GitHub
          </a>
          <a
            href="https://discord.gg/gEHBwfDX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={closeMenu}
          >
            Discord
          </a>
          <ThemeToggle />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center p-2 focus:outline-none"
        >
          <span
            className={`w-6 h-0.5 my-0.5 transition-all duration-300 ${
              isDark ? "bg-gray-100" : "bg-gray-800"
            } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 my-0.5 transition-all duration-300 ${
              isDark ? "bg-gray-100" : "bg-gray-800"
            } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`w-6 h-0.5 my-0.5 transition-all duration-300 ${
              isDark ? "bg-gray-100" : "bg-gray-800"
            } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white/98 dark:bg-gray-900/98 backdrop-blur-sm shadow-lg flex flex-col items-center py-8 gap-4 transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/programs", label: "Programs" },
          { to: "/mentors", label: "Mentors" },
          { to: "/contributors", label: "Contributors" },
          { to: "/community", label: "Community" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`${isActive(
              item.to
            )} no-underline font-medium py-3 w-4/5 text-center rounded-lg transition-all duration-300`}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}

        <a
          href="https://github.com/Open-Source-Kashmir"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-3 w-4/5 text-center rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all"
          onClick={closeMenu}
        >
          GitHub
        </a>
        <a
          href="https://discord.gg/gEHBwfDX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-gray-100 font-medium py-3 w-4/5 text-center rounded-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
          onClick={closeMenu}
        >
          Discord
        </a>

        <div className="w-4/5 flex justify-center mt-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;