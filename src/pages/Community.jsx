import { useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { mentors as mentorData, mentorCategories } from "../data/mentors";
import contributorsData from "../data/contributors.json";

const FAQS = [
  { q: "How do I start contributing?", a: "Join the Discord, introduce yourself, and look for issues labeled good-first-issue or help-wanted." },
  { q: "I'm not a coder, can I still help?", a: "Absolutely. Documentation, design, testing, and triage are all valuable contributions." },
  { q: "Where can I ask for mentorship?", a: "Post in the #mentorship or #help channels on Discord and our maintainers will assist." },
];

const Community = () => {
  const [mentorCategory, setMentorCategory] = useState("all");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [search, setSearch] = useState("");
  const [showAllContributors, setShowAllContributors] = useState(false);

  const filteredMentors = mentorData.filter((m) => {
    const matchCat = mentorCategory === "all" || m.category === mentorCategory;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.title.toLowerCase().includes(q) ||
      m.company.toLowerCase().includes(q) ||
      m.expertise.some((s) => s.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const visibleContributors = showAllContributors
    ? contributorsData
    : contributorsData.slice(0, 8);

  return (
    <div className="pt-16">
      {/* ===== HERO ===== */}
      <section className="border-b-4 border-emerald-600 bg-cream-deep dark:bg-stone-900/50">
        <div className="container-page py-16 text-center sm:py-20">
          <span className="tag">
            <span className="text-emerald-600">Community</span>
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-black tracking-tight sm:text-6xl">
            It takes a <span className="text-emerald-600">village</span> to
            build software
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Fix a typo, design an icon, or build a feature — everyone has a
            place here. Mentors, contributors, and friends on your side.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <a href="https://discord.gg/hgnUsqAmMT" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join the Discord
            </a>
            <a href="https://github.com/Open-Source-Kashmir/osk" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ===== MENTORS ===== */}
      <section className="container-page section-pad">
        <SectionHeading
          eyebrow="Mentorship"
          title="Meet the people who'll guide you"
          description="Experienced professionals across engineering, design, and every step in between."
        />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {mentorCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setMentorCategory(cat.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                  mentorCategory === cat.value
                    ? "bg-brand text-white shadow-md shadow-brand/30"
                    : "border-2 border-stone-300 text-stone-600 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search mentors..."
            className="input max-w-xs"
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMentors.map((mentor, i) => (
            <div
              key={mentor.id}
              className={`card card-lift flex h-full flex-col rounded-2xl border-2 ${
                i % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-md dark:border-stone-700"
                  />
                  {mentor.online && (
                    <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-stone-800" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold">{mentor.name}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{mentor.title}</p>
                  <p className="text-sm font-bold text-brand">@ {mentor.company}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-around rounded-xl bg-cream-deep py-3 dark:bg-stone-700/50">
                <div className="text-center">
                  <p className="font-display text-lg font-black text-brand">{mentor.experience}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-lg font-black text-emerald-600">{mentor.mentees}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Mentees</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {mentor.expertise.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-cream-deep px-2.5 py-0.5 text-[11px] font-semibold text-stone-600 dark:bg-stone-700 dark:text-stone-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedMentor(mentor)}
                className="btn-secondary mt-5 w-full"
              >
                View profile
              </button>
            </div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <p className="mt-10 text-center font-semibold text-stone-500">
            No mentors match your search.
          </p>
        )}
      </section>

      {/* ===== MENTOR MODAL ===== */}
      {selectedMentor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedMentor(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border-4 border-stone-200 bg-white p-8 dark:border-stone-700 dark:bg-stone-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMentor(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-400 hover:bg-stone-100 dark:border-stone-600 dark:hover:bg-stone-800"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-5">
              <img
                src={selectedMentor.avatar}
                alt={selectedMentor.name}
                className="h-20 w-20 rounded-full border-4 border-brand object-cover"
              />
              <div>
                <h3 className="font-display text-2xl font-bold">{selectedMentor.name}</h3>
                <p className="text-stone-500 dark:text-stone-400">{selectedMentor.title}</p>
                <p className="font-bold text-brand">@ {selectedMentor.company}</p>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <h4 className="font-display text-base font-bold text-stone-900 dark:text-white">About</h4>
                <p className="mt-1 leading-relaxed text-stone-600 dark:text-stone-300">
                  {selectedMentor.bio}
                </p>
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-stone-900 dark:text-white">Expertise</h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selectedMentor.expertise.map((s) => (
                    <span key={s} className="rounded-full bg-cream-deep px-2.5 py-0.5 text-xs font-semibold text-stone-600 dark:bg-stone-700 dark:text-stone-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-display text-base font-bold text-stone-900 dark:text-white">Location</h4>
                  <p className="mt-1 text-stone-600 dark:text-stone-300">{selectedMentor.location}</p>
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-stone-900 dark:text-white">Availability</h4>
                  <p className="mt-1 text-stone-600 dark:text-stone-300">{selectedMentor.availability}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="btn-primary flex-1">Request mentorship</button>
              {selectedMentor.socials?.github && (
                <a
                  href={selectedMentor.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="GitHub profile"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===== CONTRIBUTORS ===== */}
      <section className="border-y-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page section-pad">
          <SectionHeading
            eyebrow="Contributors"
            title="The folks behind the project"
            description="Every single person helped make OSK what it is — from docs to drama-free deploys."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {visibleContributors.map((c, i) => (
              <a
                key={c.login}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card card-lift flex flex-col items-center rounded-2xl border-2 p-5 text-center ${
                  i % 5 === 1 || i % 5 === 3 ? "rotate-1" : "-rotate-1"
                }`}
              >
                <img
                  src={c.avatar}
                  alt={c.login}
                  className="h-16 w-16 rounded-full border-4 border-brand-lighter object-cover dark:border-stone-700"
                />
                <p className="mt-3 w-full truncate font-display text-base font-bold text-stone-900 dark:text-white">
                  {c.login}
                </p>
                <p className="text-xs font-semibold text-stone-500">
                  {c.contributions} {c.contributions === 1 ? "contribution" : "contributions"}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand">
                  View GitHub <ExternalLink size={12} />
                </span>
              </a>
            ))}
          </div>

          {!showAllContributors && contributorsData.length > 8 && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAllContributors(true)}
                className="btn-secondary"
              >
                Show all contributors
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="container-page section-pad">
        <SectionHeading eyebrow="FAQ" title="Good questions, honest answers" />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="card group cursor-pointer rounded-2xl border-2 border-stone-200 dark:border-stone-700"
            >
              <summary className="flex items-center justify-between font-display text-lg font-bold text-stone-900 dark:text-white [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl font-light text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Community;
