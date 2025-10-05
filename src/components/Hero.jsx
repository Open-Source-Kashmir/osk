import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            Empowering Kashmir's <span className="hero-accent">Open Source</span> Future
          </h1>

          <p className="hero-subtitle">
            Join our vibrant community of developers, contributors, and mentors working together to build the future of technology through open source collaboration.
          </p>

// At the top of src/components/Hero.jsx
import { Link } from 'react-router-dom';
import './Hero.css';

...

// In the JSX render (around lines 17–28)
<div className="hero-buttons" role="group" aria-label="Call to action">
  <Link className="btn primary" to="/programs">
    Explore Programs
  </Link>
  <a
    className="btn outline"
    href="https://github.com/Open-Source-Kashmir"
    target="_blank"
    rel="noopener noreferrer"
  >
    Join GitHub
  </a>
  <a
    className="btn outline"
    href="https://discord.gg/gEHBwfDX"
    target="_blank"
    rel="noopener noreferrer"
  >
    Join Discord
  </a>
</div>
        </div>

        <div className="hero-right">
          <div className="feature-cards">
            <div className="card">
              <div className="card-icon" aria-hidden="true">🚀</div>
              <h3 className="card-title">Innovation</h3>
            </div>

            <div className="card">
              <div className="card-icon" aria-hidden="true">💡</div>
              <h3 className="card-title">Learning</h3>
            </div>

            <div className="card">
              <div className="card-icon" aria-hidden="true">🤝</div>
              <h3 className="card-title">Collaboration</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}