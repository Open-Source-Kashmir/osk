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

          <div className="flex gap-3 flex-wrap mt-2.5" role="group" aria-label="Call to action">
            <a className="inline-flex items-center justify-center py-2.5 px-5 rounded-xl no-underline font-semibold text-sm min-h-[44px] transition-all duration-150 bg-gradient-to-r from-blue-600 to-blue-400 text-white border-none shadow-lg shadow-blue-600/30 hover:-translate-y-1" href="#programs">Explore Programs</a>
            <a
              className="inline-flex items-center justify-center py-2.5 px-5 rounded-xl no-underline font-semibold text-sm min-h-[44px] transition-all duration-150 bg-white/5 text-white border-2 border-white/20 hover:-translate-y-1"
              href="https://github.com/Open-Source-Kashmir"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join GitHub
            </a>
            <a className="inline-flex items-center justify-center py-2.5 px-5 rounded-xl no-underline font-semibold text-sm min-h-[44px] transition-all duration-150 bg-white/5 text-white border-2 border-white/20 hover:-translate-y-1" href="#discord">Join Discord</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="feature-cards" role="list" aria-label="Highlights">
            <div className="card" role="listitem">
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