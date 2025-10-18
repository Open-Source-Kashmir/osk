import React from "react";
import contributors from "../data/contributors.json";

export default function ContributorCard({ name, role, avatar, github, contributions }) {
  const avatarSrc = avatar || "/assets/github.png";
  return (
    <article className="p-5 rounded-xl bg-slate-800 border border-slate-700 text-center">
      <img
        src={avatarSrc}
        alt={`${name} avatar`}
        className="w-20 h-20 rounded-full mx-auto object-cover"
      />
      <h3 className="mt-4 text-white font-semibold">{name}</h3>
      {role && <div className="text-sm text-slate-300 mt-1">{role}</div>}
      <div className="text-sm text-slate-300 mt-2">{contributions ?? 0} contribution{(contributions ?? 0) !== 1 ? "s" : ""}</div>
      <div className="mt-3">
        <a
          href={github || "#"}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
        >
          Profile
        </a>
      </div>
    </article>
  );
}