import { useState } from "react";
import "./App.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Top Navigation */}
      <nav className="navbar" aria-label="Primary">
        <div className="nav-brand">OSK</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#mentors">Mentors</a>
          </li>
          <li>
            <a href="#programs">Programs</a>
          </li>
          <li>
            <a href="#contributors">Contributors</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
        </ul>
      </nav>
      {/* Theme Toggle Button */}
      <button
        className="toggle-button"
        onClick={toggleMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Hero Section */}
      <h1 id="home" className="title">
        Open Source Kashmir
      </h1>
      <p className="subtitle">
        Empowering Kashmir to code, collaborate, and contribute to global open
        source projects.
      </p>
      <a
        href="https://github.com/Open-Source-Kashmir"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Join Us on GitHub
      </a>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We are building an open source ecosystem in Kashmir to help developers
          learn, build, and contribute to global projects. Through projects,
          mentorship, and events, we connect local talent with opportunities
          like LFX, GSoC, and C4GT.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Open Source Kashmir
      </footer>
    </div>
  );
}
