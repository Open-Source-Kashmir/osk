import React from "react";
import ContributorCard from "../components/ContributorCard";
import contributors from "../data/contributors.json";


export default function CommunityPage() {
  const highlights = [
    {
      id: 1,
      title: "Mentorship",
      body: "Pair with experienced contributors to ship your first PRs and grow real-world skills.",
      icon: "🤝",
    },
    {
      id: 2,
      title: "Real Projects",
      body: "Contribute to meaningful OSS projects used by the community — learn by doing.",
      icon: "🚀",
    },
    {
      id: 3,
      title: "Workshops",
      body: "Weekly office hours and workshops to teach workflows, Git, and good PR practices.",
      icon: "🎓",
    },
    {
      id: 4,
      title: "Inclusive Space",
      body: "Welcoming contributors of all backgrounds — docs, design, code, and mentorship welcome.",
      icon: "💙",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Weekly Office Hours",
      date: "Wednesdays • 7:00 PM IST",
      details: "Drop in to get help on issues, pair with mentors, and ask quick questions.",
    },
    {
      id: 2,
      title: "Beginner Workshop: First PR",
      date: "Nov 02, 2025 • 4:00 PM IST",
      details: "Hands-on walkthrough: find a good-first-issue, create a branch, and open your PR.",
    },
    {
      id: 3,
      title: "Sprint Day",
      date: "Nov 15, 2025 • 10:00 AM IST",
      details: "Ship small issues together during a focused community sprint.",
    },
  ];

  const resources = [
    { id: 1, label: "Repository", href: "https://github.com/Open-Source-Kashmir/osk" },
    { id: 2, label: "Good-first-issues", href: "#" },
    { id: 3, label: "Contribution Guide", href: "/CONTRIBUTING.md" },
    { id: 4, label: "Discord (Invite)", href: "#" },
  ];

  const faqs = [
    { q: "How do I start?", a: "Join Discord, introduce yourself, and look for issues labeled good-first-issue." },
    { q: "I’m not a coder — can I still help?", a: "Absolutely. Docs, design, testing and triage are all valuable contributions." },
    { q: "Where can I ask for mentorship?", a: "Post in the #mentorship or #help channels on Discord and maintainers will assist." },
  ];

  return (
    <main id="community" className="px-6 md:px-12 lg:px-20 py-12 bg-white dark:bg-gray-900">
      {/* big hero */}
      <section className="max-w-6xl mx-auto text-center py-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">Join the OSK Community</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
          Collaborate, learn, and contribute — whether you fix a typo, design an icon, or build a feature. OSK is
          friendly to new contributors and focused on mentorship and real outcomes.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://github.com/Open-Source-Kashmir/osk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            View on GitHub
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-white shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Join Discord
          </a>
        </div>
      </section>

      {/* highlights - large card grid */}
      <section className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <article
              key={h.id}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800/60 dark:to-slate-800/20 border border-gray-200 dark:border-slate-700 shadow-lg"
            >
              <div className="text-3xl">{h.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{h.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-slate-300 text-sm">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* upcoming events - larger cards */}
      <section className="mt-12 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Upcoming events</h2>
          <a href="#events" className="text-sm text-gray-600 dark:text-slate-300 hover:underline">
            View calendar →
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.id} className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
              <div className="text-sm text-gray-600 dark:text-slate-300">{e.date}</div>
              <div className="mt-2 text-lg font-medium text-gray-900 dark:text-white">{e.title}</div>
              <div className="mt-3 text-gray-700 dark:text-slate-300 text-sm">{e.details}</div>

              <div className="mt-5">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-white text-sm transition-all duration-300"
                  aria-label={`Details for ${e.title}`}
                >
                  Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to contribute + Resources side-by-side */}
      <section className="mt-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">How to contribute</h2>
          <ol className="mt-4 list-decimal list-inside space-y-3 text-gray-700 dark:text-slate-300">
            <li>Join the Discord and introduce yourself in #welcome.</li>
            <li>Pick an issue labeled <strong>good-first-issue</strong> or <strong>help-wanted</strong>.</li>
            <li>Create a small PR (docs, typos, tiny UI tweak) and request review.</li>
            <li>Iterate with maintainers; celebrate your merged PR 🎉</li>
          </ol>
        </div>

        <aside className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick links</h3>
          <ul className="mt-3 space-y-2">
            {resources.map((r) => (
              <li key={r.id}>
                <a
                  href={r.href}
                  className="text-gray-700 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:underline"
                  target={r.href.startsWith("http") ? "_blank" : "_self"}
                  rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  • {r.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Contributors Section */}
      <section className="mt-12 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Contributors</h2>
          <a href="/contributors" className="text-sm text-gray-600 dark:text-slate-300 hover:underline">
            View all contributors →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contributors.slice(0, 8).map((contributor) => (
            <ContributorCard
              key={contributor.login}
              name={contributor.login}
              avatar={contributor.avatar}
              github={contributor.url}
              contributions={contributor.contributions}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">FAQ</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 shadow-lg">
              <summary className="cursor-pointer text-gray-900 dark:text-white font-medium">{f.q}</summary>
              <div className="mt-2 text-gray-700 dark:text-slate-300 text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* refined Ready to contribute CTA (no repetition) */}
      <section className="mt-12 max-w-6xl mx-auto text-center pb-20">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-800/70 dark:to-slate-700/60 shadow-lg border border-gray-200 dark:border-slate-700">
          <div className="max-w-4xl mx-auto">
            <div className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Ready to contribute to OSK?</div>
            <p className="mt-2 text-gray-700 dark:text-slate-300">
              Choose a path below — everything else (how-to steps and guides) is available above and in the contribution guide.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-gray-300 dark:border-slate-700 shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">Find</div>
                <div className="font-semibold text-gray-900 dark:text-white mt-2">Pick an issue</div>
                <div className="mt-1 text-sm text-gray-700 dark:text-slate-300">
                  Browse issues labeled <span className="font-medium text-gray-900 dark:text-white">good-first-issue</span> to start.
                </div>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                >
                  View issues
                </a>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-gray-300 dark:border-slate-700 shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">Connect</div>
                <div className="font-semibold text-gray-900 dark:text-white mt-2">Office hours</div>
                <div className="mt-1 text-sm text-gray-700 dark:text-slate-300">Attend weekly drop-in sessions to get hands-on help from maintainers.</div>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm px-3 py-2 rounded bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-white transition-all duration-300"
                >
                  Event details
                </a>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-gray-300 dark:border-slate-700 shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">Support</div>
                <div className="font-semibold text-gray-900 dark:text-white mt-2">Request help</div>
                <div className="mt-1 text-sm text-gray-700 dark:text-slate-300">Ask for pairing, reviews, or mentorship in our Discord channels.</div>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm px-3 py-2 rounded bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-white transition-all duration-300"
                >
                  Join Discord
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://github.com/Open-Source-Kashmir/osk"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Contribute on GitHub
              </a>

              <a
                href="/CONTRIBUTING.md"
                className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-white font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Contribution guide
              </a>
            </div>

            <div className="mt-4 text-sm text-gray-700 dark:text-slate-300">
              Want a direct intro? <a href="#" className="text-blue-600 dark:text-white underline">Request pairing in Discord</a>.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
// ...existing code...