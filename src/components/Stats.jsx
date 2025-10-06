// src/components/Stats.jsx
import React from "react";

/**
 * Stats card component
 * - Uses Tailwind utility classes for a compact, responsive grid.
 * - If you don't have the icon files, replace src with emoji strings or heroicons.
 */

const stats = [
  { icon: "/icons/contributors.svg", value: "50+", label: "Contributors" },
  { icon: "/icons/rocket.svg", value: "25+", label: "Projects" },
  { icon: "/icons/mentor.svg", value: "15+", label: "Mentors" },
  { icon: "/icons/programs.svg", value: "5+", label: "Programs" },
];

export default function Stats() {
  return (
    <section className="bg-[#0b1220] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl p-3 flex items-center justify-center bg-gradient-to-tr from-slate-800 to-slate-700 shadow-lg">
                {/* if icon files are missing, replace <img .../> with an emoji fallback */}
                <img
                  src={s.icon}
                  alt={s.label}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    // fallback: show nothing if icon missing (keeps layout)
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="mt-4">
                <div className="text-3xl md:text-4xl font-extrabold text-white">
                  {s.value}
                </div>
                <div className="text-sm text-slate-400 mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
