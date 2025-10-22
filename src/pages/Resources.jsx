import React from "react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Awesome Open Source Resources
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          A curated list for beginners from Kashmir to kickstart their open-source journey.
        </p>
      </header>

      <section className="max-w-6xl mx-auto space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
        {/* Getting Started */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">🚀 Getting Started</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://opensource.guide/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                What is Open Source?
              </a>
            </li>
            <li>
              <a 
                href="https://www.freecodecamp.org/news/git-and-github-for-beginners/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Git and GitHub for Beginners
              </a>
            </li>
            <li>
              <a 
                href="https://firstcontributions.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                First Contributions Guide
              </a>
            </li>
          </ul>
        </div>

        {/* Programs to Explore */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">🌍 Programs to Explore</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://mentorship.lfx.linuxfoundation.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Linux Foundation LFX Mentorship
              </a>
            </li>
            <li>
              <a 
                href="https://summerofcode.withgoogle.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Google Summer of Code
              </a>
            </li>
            <li>
              <a 
                href="https://www.c4gt.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                C4GT
              </a>
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">🛠 Tools</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://code.visualstudio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                VS Code
              </a>
            </li>
            <li>
              <a 
                href="https://desktop.github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub Desktop
              </a>
            </li>
            <li>
              <a 
                href="https://www.postman.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Postman
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>© All Rights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default Resources;
