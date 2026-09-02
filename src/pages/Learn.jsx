import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles,
  ArrowUpRight,
  Target,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import learningTracks from "../data/learningTracks.json";

const Learn = () => {
  const [activeTrackId, setActiveTrackId] = useState(learningTracks[0].id);

  const active = learningTracks.find((t) => t.id === activeTrackId) || learningTracks[0];

  return (
    <div className="pt-16">
      {/* ===== HERO ===== */}
      <section className="border-b-4 border-brand bg-cream-deep dark:bg-stone-900/50">
        <div className="container-page py-16 text-center sm:py-20">
          <span className="tag">
            <Sparkles size={13} className="text-brand" />
            Learn at your own pace
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-black tracking-tight sm:text-6xl">
            Your path to <span className="text-brand">open source</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            From your very first commit to leading a maintainer team —
            structured tracks, curated lessons, and mentorship along the way.
          </p>
        </div>
      </section>

      {/* ===== LEARNING TRACKS ===== */}
      <section className="container-page section-pad">
        {/* Track switcher */}
        <div className="mx-auto flex flex-wrap justify-center gap-3">
          {learningTracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setActiveTrackId(track.id)}
              className={`rounded-2xl border-2 px-5 py-3 text-left transition-all ${
                activeTrackId === track.id
                  ? "border-brand bg-brand text-white shadow-lg shadow-brand/30"
                  : "border-stone-300 bg-white text-stone-700 hover:border-brand/50 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
              }`}
            >
              <span className="mr-2">{track.icon}</span>
              <span className="font-display text-base font-bold">{track.title}</span>
            </button>
          ))}
        </div>

        {/* Active track */}
        <div className="stagger mx-auto mt-12 max-w-4xl">
          <div className="card rounded-3xl border-4 border-stone-200 dark:border-stone-700">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand">
                  <span className="text-2xl">{active.icon}</span>
                  {active.difficulty} Track
                </p>
                <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">
                  {active.title}
                </h2>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-lighter px-3 py-1 text-xs font-bold text-brand">
                  <BookOpen size={12} />
                  {active.modules.length} modules
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-forest">
                  <Clock size={12} />
                  {active.duration}
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-600 dark:text-stone-300">
              {active.description}
            </p>

            {/* Prerequisites */}
            {active.prerequisites.length > 0 && (
              <p className="mt-3 text-sm font-semibold text-stone-500 dark:text-stone-400">
                Prerequisites: {active.prerequisites.join(", ")}
              </p>
            )}

            <ol className="mt-8 space-y-3">
              {active.modules.map((mod, i) => (
                <li key={mod.id}>
                  <a
                    href={`/learn/${active.id}/${mod.id}`}
                    className="group flex items-center gap-4 rounded-2xl border-2 border-stone-200 p-4 transition-all hover:-translate-x-1 hover:border-brand dark:border-stone-700"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-lighter font-display text-lg font-black text-brand">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-lg font-bold text-stone-900 group-hover:text-brand dark:text-white">
                        {mod.title}
                      </h4>
                      <p className="truncate text-sm text-stone-500 dark:text-stone-400">
                        {mod.description}
                      </p>
                    </div>
                    <span className="hidden items-center gap-1 rounded-full bg-cream-deep px-2.5 py-1 text-xs font-bold text-stone-500 sm:inline-flex dark:bg-stone-700 dark:text-stone-300">
                      <Target size={11} />
                      {mod.challenges.length} challenges
                    </span>
                    <ArrowRight
                      size={20}
                      className="flex-shrink-0 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-brand"
                    />
                  </a>
                </li>
              ))}
            </ol>

            {/* Rewards */}
            {active.rewards.length > 0 && (
              <div className="mt-8 rounded-2xl border-2 border-dashed border-brand/40 bg-brand-lighter/40 p-5 dark:bg-brand/10">
                <p className="text-sm font-bold uppercase tracking-widest text-brand">
                  Track rewards
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.rewards.map((r) => (
                    <span
                      key={r}
                      className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-stone-700 shadow-sm dark:bg-stone-800 dark:text-stone-200"
                    >
                      <Sparkles size={11} className="text-brand" />
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-4xl font-black">Need a hand along the way?</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-stone-600 dark:text-stone-300">
            Our mentors are here to help you through every lesson and challenge.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="https://discord.gg/hgnUsqAmMT" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join our Discord
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
