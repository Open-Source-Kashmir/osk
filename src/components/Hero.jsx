import React from 'react';

export default function Hero() {
  return (
    <header className="py-14 px-5">
      <div className="max-w-[1200px] mx-auto flex items-center gap-8 flex-wrap">
        <div className="flex-1 basis-[520px] min-w-[280px]">
          <h1 className="text-4xl md:text-5xl m-0 mb-4 leading-tight font-extrabold text-white">
            Empowering Kashmir's <span className="text-blue-500">Open Source</span> Future
          </h1>

          <p className="text-gray-200 mb-5 max-w-4xl text-lg">
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

        <div className="flex-0 basis-[360px] flex justify-center">
          <div className="flex flex-wrap justify-center gap-4" role="list" aria-label="Highlights">
            <div className="w-30 h-30 bg-gray-900/95 text-white rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-gray-900/80 text-center p-2 transition-all duration-150 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/90" role="listitem">
              <div className="text-4xl mb-1" aria-hidden="true">🚀</div>
              <h3 className="text-base m-0 font-bold">Innovation</h3>
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