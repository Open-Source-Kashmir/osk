import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight } from "lucide-react";
import ProgramCard from "../components/ProgramCard";
import { programs, programCategories } from "../data/programs";

const Programs = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return programs.filter((p) => {
      const matchCat = filter === "all" || p.category === filter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.organization.toLowerCase().includes(q) ||
        p.skills.some((s) => s.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="border-b-4 border-brand bg-cream-deep dark:bg-stone-900/50">
        <div className="container-page py-16 sm:py-20">
          <span className="tag">Opportunities</span>
          <h1 className="mt-5 font-display text-5xl font-black tracking-tight sm:text-6xl">
            Open Source <span className="text-brand">Programs</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Paid internships, fellowships, and mentorship programs to
            accelerate your open source journey.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b-2 border-stone-200 bg-cream/95 backdrop-blur-lg dark:border-stone-800 dark:bg-night/95">
        <div className="container-page flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-xs flex-1 lg:max-w-sm">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search programs..."
              className="input pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {programCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                  filter === cat.value
                    ? "bg-brand text-white shadow-md shadow-brand/30"
                    : "border-2 border-stone-300 text-stone-600 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-page section-pad">
        <p className="mb-6 font-semibold text-stone-500 dark:text-stone-400">
          {filtered.length} program{filtered.length !== 1 ? "s" : ""} found
        </p>
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((program) => (
              <ProgramCard key={program.slug} {...program} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center rounded-3xl border-4 border-dashed border-stone-300 py-20 text-center dark:border-stone-700">
            <p className="font-display text-2xl font-bold text-stone-900 dark:text-white">
              Nothing matches that — yet
            </p>
            <p className="mt-2 text-stone-500 dark:text-stone-400">
              Try a different search or category.
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setSearch("");
              }}
              className="btn-secondary mt-6"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-4xl font-black">Not sure where to start?</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-stone-600 dark:text-stone-300">
            Our mentors can help you prepare applications and boost your odds.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="https://discord.gg/hgnUsqAmMT" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join our Discord
              <ArrowUpRight size={16} />
            </a>
            <Link to="/community" className="btn-secondary">
              Get mentorship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
