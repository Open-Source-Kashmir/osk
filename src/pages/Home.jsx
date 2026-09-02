import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Lightbulb,
  Handshake,
  Globe,
  GitBranch,
  Rocket,
  Sparkles,
  Quote,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import Contact from "../components/Contact_Form/Contact";
import { programs } from "../data/programs";
import { mentors } from "../data/mentors";
import contributors from "../data/contributors.json";

const stats = [
  { value: "50+", label: "Contributors" },
  { value: "10+", label: "Programs" },
  { value: "15+", label: "Mentors" },
  { value: "8+", label: "Community projects" },
];

const features = [
  {
    title: "Expert Mentorship",
    description:
      "Learn directly from experienced developers who guide your open source journey.",
    icon: Lightbulb,
    color: "bg-brand-lighter text-brand",
  },
  {
    title: "Real Projects",
    description:
      "Work on meaningful projects that solve real-world problems.",
    icon: GitBranch,
    color: "bg-emerald-100 text-forest",
  },
  {
    title: "Global Network",
    description:
      "Connect with developers worldwide and build lasting relationships.",
    icon: Globe,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Career Growth",
    description:
      "Gain experience and skills that boost your career in tech.",
    icon: Rocket,
    color: "bg-fuchsia-100 text-wine",
  },
];

const Home = () => {
  const featuredPrograms = programs.filter((p) => p.featured).slice(0, 3);
  const topMentors = mentors.slice(0, 4);

  return (
    <div className="pt-16">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b-4 border-brand">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 right-0 h-80 w-80 -rotate-12 rounded-full bg-brand-lighter blur-3xl dark:bg-brand/10" />
          <div className="absolute bottom-0 -left-20 h-80 w-80 rotate-12 rounded-full bg-emerald-100 blur-3xl dark:bg-forest/10" />
          <div className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-sky-100 blur-2xl" />
        </div>

        <div className="container-page grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-2">
          {/* Copy */}
          <div className="animate-fade-up">
            <span className="tag">
              <Sparkles size={13} className="text-brand" />
              A community for everyone
            </span>

            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Open source,{" "}
              <span className="underline-brush text-brand">made for</span>{" "}
              Kashmir
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600 dark:text-stone-300">
              Whether you&apos;re fixing your first typo or leading your first
              project, you&apos;ve got a home here. Learn, collaborate, and
              contribute with a community that&apos;s got your back.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/programs" className="btn-primary">
                Explore programs
                <ArrowRight size={17} />
              </Link>
              <Link to="/learn" className="btn-secondary">
                Start learning
              </Link>
              <a
                href="https://github.com/Open-Source-Kashmir"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                View on GitHub
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {contributors.slice(0, 5).map((c) => (
                  <img
                    key={c.login}
                    src={c.avatar}
                    alt={c.login}
                    className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-night"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="flex items-center gap-1 font-bold text-stone-900 dark:text-white">
                  120+ members
                </p>
                <p className="text-stone-500 dark:text-stone-400">
                  building together since 2025
                </p>
              </div>
            </div>
          </div>

          {/* Visual - sticky note collage */}
          <div className="animate-fade-up hidden lg:block">
            <div className="relative mx-auto max-w-md">
              {/* Old OSK sticker */}
              <div className="rotate-3 rounded-xl bg-brand p-6 text-white shadow-lift animate-float">
                <p className="font-display text-2xl font-black">OSK</p>
                <p className="mt-1 text-sm text-white/85">
                  Your open source home in the valley
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["Learn", "Build", "Ship"].map((w) => (
                    <div key={w} className="rounded-lg bg-white/15 text-center text-sm font-bold">
                      {w}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote sticky note */}
              <div className="absolute -bottom-6 -left-10 w-52 -rotate-6 rounded-lg bg-yellow-200 p-4 shadow-lift dark:bg-yellow-300 dark:text-stone-900 animate-wiggle">
                <Quote size={18} className="opacity-40" />
                <p className="mt-1 font-display text-sm font-semibold leading-snug">
                  &ldquo;Got my first PR merged in a day.&rdquo;
                </p>
                <p className="mt-2 text-xs font-bold opacity-70">
                  — first-time contributor
                </p>
              </div>

              {/* Stats sticker */}
              <div className="absolute -top-4 -right-6 rotate-3 rounded-lg bg-white p-4 shadow-lift dark:bg-stone-800">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-brand" />
                  <p className="text-sm font-bold text-stone-900 dark:text-white">
                    15+ mentors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-black text-brand">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="container-page section-pad">
        <SectionHeading
          eyebrow="Why OSK"
          title="More than just code"
          description="A community centered on people — mentors, projects, and friendships that carry your career forward."
        />
        <div className="stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card card-lift relative overflow-hidden ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}>
                <f.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PROGRAMS ===== */}
      <section className="border-y-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page section-pad">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Programs"
              title="Programs worth your time"
            />
            <Link to="/programs" className="btn-ghost group inline-flex items-center gap-1.5">
              View all
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="stagger mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.slug} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== MENTORS ===== */}
      <section className="container-page section-pad">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Mentorship"
            title="Learn from people who've been there"
          />
          <Link to="/community" className="btn-ghost group inline-flex items-center gap-1.5">
            Meet all mentors
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="card card-lift text-center"
            >
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="mx-auto h-20 w-20 rounded-full border-4 border-white object-cover shadow-md dark:border-stone-700"
              />
              <h3 className="mt-4 font-display text-xl font-bold">{mentor.name}</h3>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                {mentor.title}
              </p>
              <p className="text-sm font-bold text-brand">@ {mentor.company}</p>
              <div className="mt-4 flex justify-center gap-2">
                {mentor.expertise.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-cream-deep px-2.5 py-0.5 text-[11px] font-semibold text-stone-600 dark:bg-stone-700 dark:text-stone-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container-page section-pad">
        <div className="relative overflow-hidden -rotate-0 rounded-3xl border-4 border-stone-900 bg-stone-900 px-6 py-16 text-center dark:border-white sm:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-brand/40 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>
          <div className="relative">
            <span className="tag !border-stone-600 !bg-stone-800 !text-stone-200">
              Your move
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
              Ready to ship your <span className="text-brand">first PR</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-stone-300">
              Join us and get support from day one — no experience required,
              just a willingness to try.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/learn" className="btn bg-brand text-white hover:bg-brand-hover">
                Start learning free
                <ArrowUpRight size={17} />
              </Link>
              <a
                href="https://discord.gg/hgnUsqAmMT"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-2 border-stone-500 text-white hover:bg-stone-800"
              >
                Join the Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <Contact />
    </div>
  );
};

export default Home;
