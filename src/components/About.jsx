import React from "react";
import { Globe, GraduationCap, Users } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 px-6 flex justify-center">
      <div className="max-w-4xl bg-white dark:bg-gray-900/95 rounded-2xl py-10 px-8 text-center shadow-2xl shadow-gray-300/50 dark:shadow-black/60 border border-gray-200 dark:border-transparent">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">About Us</h2>
        <p className="text-gray-700 dark:text-gray-200 text-lg mb-10 leading-relaxed">
          Open Source Kashmir (OSK) is building a thriving open-source ecosystem
          in Kashmir by helping developers <strong>learn</strong>,{" "}
          <strong>collaborate</strong>, and <strong>contribute</strong> to global
          projects. We provide mentorship, guidance, and opportunities to grow as
          contributors in real-world projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800/95 p-6  flex flex-col  items-center rounded-xl shadow-lg shadow-gray-300/50 dark:shadow-gray-900/80 text-center transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-300/60 dark:hover:shadow-gray-900/90 border border-gray-200 dark:border-transparent">
            <span className="text-3xl block mb-3"><Globe color="#22c55e" size={40} /></span>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Global Exposure</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Connect with programs like <strong>LFX</strong>,{" "}
              <strong>GSoC</strong>, and <strong>C4GT</strong> to contribute to
              large-scale projects worldwide.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/95 p-6 flex flex-col items-center rounded-xl shadow-lg shadow-gray-300/50 dark:shadow-gray-900/80 text-center transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-300/60 dark:hover:shadow-gray-900/90 border border-gray-200 dark:border-transparent">
            <span className="text-3xl block mb-3"><GraduationCap color="#6366f1" size={40} /></span>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Mentorship</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Learn directly from experienced mentors and industry leaders who
              guide your open-source journey.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/95 p-6 flex flex-col items-center rounded-xl shadow-lg shadow-gray-300/50 dark:shadow-gray-900/80 text-center transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-300/60 dark:hover:shadow-gray-900/90 border border-gray-200 dark:border-transparent">
            <span className="text-3xl block mb-3"><Users color="#14b8a6" size={40} /></span>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Collaboration</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Work with a vibrant community of developers on real projects,
              building both skills and networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}