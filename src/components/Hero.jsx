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

          <div className="hero-buttons" role="group" aria-label="Call to action">
            <a className="btn primary" href="#programs">Explore Programs</a>
            <a
              className="btn outline"
              href="https://github.com/Open-Source-Kashmir"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join GitHub
            </a>
            <a className="btn outline" href="#discord">Join Discord</a>
          </div>
        </div>

        <div className="hero-right">
          <ul className="feature-cards" aria-label="Highlights">
            <li className="card">
              <div className="card-icon" aria-hidden="true">🚀</div>
              <h3 className="card-title">Innovation</h3>
            </li>

            <li className="card">
              <div className="card-icon" aria-hidden="true">💡</div>
              <h3 className="card-title">Learning</h3>
            </li>

            <li className="card">
              <div className="card-icon" aria-hidden="true">🤝</div>
              <h3 className="card-title">Collaboration</h3>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}