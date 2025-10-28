import React from "react";
import contributors from "../data/contributors.json";

export default function ContributorCard({ name, role, avatar, github, contributions }) {
  const avatarSrc = avatar || "/assets/github.png";
  return (
    <article className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <img
        src={avatarSrc}
        alt={`${name} avatar`}
        className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-gray-200 dark:border-slate-600"
      />
      <h3 className="mt-4 text-gray-900 dark:text-white font-semibold">{name}</h3>
      {role && <div className="text-sm text-gray-600 dark:text-slate-300 mt-1">{role}</div>}
      <div className="text-sm text-gray-600 dark:text-slate-300 mt-2">{contributions ?? 0} contribution{(contributions ?? 0) !== 1 ? "s" : ""}</div>
      <div className="mt-3">
        <a
          href={github || "#"}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white text-sm transition-all duration-300 hover:scale-105"
        >
          Profile
        </a>
      </div>
    </article>
  );
}