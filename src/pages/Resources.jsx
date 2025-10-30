import React from "react";
import gsocLogo from "../assets/GSoc.png";
import githubLogo from "../assets/github.png";
import linuxLogo from "../assets/linux.png";
import { ArrowUpRight } from "lucide-react";
const vscodeLogo =
  "https://code.visualstudio.com/assets/images/code-stable.png"; // fallback online icon for VS Code
const postmanLogo =
  "https://logos-world.net/wp-content/uploads/2021/02/Postman-Logo.png"; // fallback online icon

const guides = [
  {
    title: "What is Open Source? (The Linux Foundation)",
    url: "https://opensource.com/resources/what-open-source",
    desc: "A beginner-friendly introduction to the principles of open source.",
    icon: linuxLogo,
  },
  {
    title: "How to Contribute to Open Source (GitHub Docs)",
    url: "https://docs.github.com/en/get-started/quickstart/contributing-to-projects",
    desc: "GitHub’s official guide on finding and making your first contribution.",
    icon: githubLogo,
  },
  {
    title: "First Contributions (Interactive Tutorial)",
    url: "https://firstcontributions.github.io/",
    desc: "Hands-on practice: fork, clone, and open a Pull Request in minutes.",
    icon: githubLogo,
  },
  {
    title: "Open Source Guides by GitHub",
    url: "https://opensource.guide/",
    desc: "In-depth guides covering all aspects of open source, including etiquette and best practices.",
    icon: githubLogo,
  },
];

const gitResources = [
  {
    title: "Pro Git Book (free)",
    url: "https://git-scm.com/book/en/v2",
    desc: "Comprehensive, beginner-to-advanced reference on Git.",
    icon: githubLogo,
  },
  {
    title: "GitHub Learning Lab",
    url: "https://lab.github.com/",
    desc: "Interactive courses to master GitHub workflows.",
    icon: githubLogo,
  },
  {
    title: "Git Handbook",
    url: "https://guides.github.com/introduction/git-handbook/",
    desc: "Quick, practical Git basics straight from GitHub.",
    icon: githubLogo,
  },
];

const programs = [
  {
    title: "Google Summer of Code (GSoC)",
    url: "https://summerofcode.withgoogle.com/",
    desc: "Spend the summer contributing to major open source organizations as a student.",
    icon: gsocLogo,
  },
  {
    title: "Linux Foundation LFX Mentorship",
    url: "https://lfx.linuxfoundation.org/tools/mentorship/",
    desc: "Mentorship program for working on critical open source projects in the Linux ecosystem.",
    icon: linuxLogo,
  },
  {
    title: "C4GT (Code for Good Together)",
    url: "https://c4gt.org/",
    desc: "Open source and civic tech program connecting contributors with impactful projects.",
    icon: null,
  },
];

const tools = [
  {
    title: "VS Code",
    url: "https://code.visualstudio.com/",
    desc: "A powerful, free code editor for building open source projects.",
    icon: vscodeLogo,
  },
  {
    title: "GitHub Desktop",
    url: "https://desktop.github.com/",
    desc: "A simple way to git: clone, branch, commit & push from a friendly UI.",
    icon: githubLogo,
  },
  {
    title: "Postman",
    url: "https://www.postman.com/",
    desc: "Collaborative API platform for testing, documenting, and sharing backends.",
    icon: postmanLogo,
  },
];

// Section icons
const sectionIcons = {
  gettingStarted: "💡",
  programs: "🚀",
  tools: "🛠️",
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-24 pb-10 animate-fade-in">
      {/* HERO HEADER */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-blue-900 shadow-inner py-12 mb-10 border-b-2 border-blue-200 dark:border-blue-900 animate-fade-in">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-5xl mb-2">📚</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 to-cyan-400 dark:from-blue-200 dark:to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Resources
          </h1>
          <p className="mb-0 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Curated guides, programs, and tools to jumpstart and excel in your
            open source journey.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GETTING STARTED SECTION */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-2 mb-3 animate-fade-in">
            <span className="text-2xl">{sectionIcons.gettingStarted}</span>
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 tracking-tight">
              Getting Started
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 animate-fade-in">
            Guides and tutorials to help you make your first open source
            contributions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Open Source Guides */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950 border border-blue-100 dark:border-blue-900 shadow hover:shadow-xl transition-all duration-300 animate-fade-in">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-600 dark:text-blue-300">
                <span>Open Source Guides</span>
              </h3>
              <ul className="space-y-4">
                {guides.map((guide) => (
                  <li
                    key={guide.url}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    {guide.icon && (
                      <img
                        src={guide.icon}
                        alt="icon"
                        className="w-8 h-8 rounded-md shadow bg-white/90 dark:bg-gray-800/90 object-contain border-2 border-blue-100 dark:border-blue-900 group-hover:scale-110 transition-transform"
                      />
                    )}
                    <div className="flex-1">
                      <a
                        href={guide.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-700 dark:text-blue-200 group-hover:underline flex items-center gap-2"
                      >
                        {guide.title}
                        <ArrowUpRight className="inline-block w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-2" />
                      </a>
                      <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {guide.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Git & GitHub */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950 border border-blue-100 dark:border-blue-900 shadow hover:shadow-xl transition-all duration-300 animate-fade-in">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-600 dark:text-blue-300">
                <span>Git & GitHub Resources</span>
              </h3>
              <ul className="space-y-4">
                {gitResources.map((git) => (
                  <li
                    key={git.url}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    {git.icon && (
                      <img
                        src={git.icon}
                        alt="icon"
                        className="w-8 h-8 rounded-md shadow bg-white/90 dark:bg-gray-800/90 object-contain border-2 border-blue-100 dark:border-blue-900 group-hover:scale-110 transition-transform"
                      />
                    )}
                    <div className="flex-1">
                      <a
                        href={git.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-700 dark:text-blue-200 group-hover:underline flex items-center gap-2"
                      >
                        {git.title}
                        <ArrowUpRight className="inline-block w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-2" />
                      </a>
                      <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {git.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="w-16 h-1 rounded-full mx-auto bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-300 dark:to-cyan-400 mb-14 opacity-70 animate-fade-in"></div>

        {/* PROGRAMS SECTION */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-2 mb-3 animate-fade-in">
            <span className="text-2xl">{sectionIcons.programs}</span>
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 tracking-tight">
              Programs to Explore
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 animate-fade-in">
            Top open source programs that you can apply to as a contributor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <a
                key={program.url}
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-start p-6 rounded-2xl border border-blue-100 dark:border-blue-900 bg-gradient-to-br from-white to-blue-50 dark:from-blue-900 dark:to-gray-900 shadow group hover:shadow-2xl hover:scale-[1.025] focus:shadow-2xl focus:scale-[1.025] transition-transform transition-shadow duration-300 min-h-[168px] cursor-pointer relative ${
                  i === 0 ? "border-2 border-blue-400 dark:border-cyan-400" : ""
                } animate-fade-in`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {program.icon && (
                    <img
                      src={program.icon}
                      alt="icon"
                      className="w-8 h-8 rounded-md"
                    />
                  )}
                  <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded bg-blue-200/30 text-blue-700 dark:bg-blue-700/20 dark:text-blue-200 font-semibold">
                    {"Program"}
                  </span>
                  {i === 0 && (
                    <span className="ml-1 px-2 py-0.5 bg-yellow-100 dark:bg-yellow-800/50 text-yellow-800 dark:text-yellow-200 rounded text-xs font-bold uppercase">
                      Top Pick
                    </span>
                  )}
                </div>
                <span className="font-semibold text-blue-700 dark:text-blue-200 hover:underline text-lg mb-1 flex items-center gap-2">
                  {program.title}
                  <ArrowUpRight className="inline-block w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-2" />
                </span>
                <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                  {program.desc}
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="w-16 h-1 rounded-full mx-auto bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-300 dark:to-cyan-400 mb-14 opacity-70 animate-fade-in"></div>

        {/* TOOLS SECTION */}
        <section className="mb-6 animate-fade-in">
          <div className="flex items-center gap-2 mb-3 animate-fade-in">
            <span className="text-2xl">{sectionIcons.tools}</span>
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 tracking-tight">
              Essential Tools
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 animate-fade-in">
            Best tools to boost your productivity as an open source contributor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <a
                key={tool.url}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl border border-cyan-100 dark:border-cyan-700 bg-gradient-to-tl from-cyan-50 via-white to-blue-50 dark:from-blue-950 dark:to-gray-800 shadow group hover:shadow-2xl hover:scale-[1.025] focus:shadow-2xl focus:scale-[1.025] transition-transform transition-shadow duration-300 cursor-pointer min-h-[168px] relative animate-fade-in"
              >
                <div className="flex items-center gap-2 mb-2">
                  {tool.icon && (
                    <img
                      src={tool.icon}
                      alt="icon"
                      className="w-8 h-8 rounded-sm border-2 border-cyan-100 dark:border-cyan-700 bg-white/95 dark:bg-gray-900/90 object-contain"
                    />
                  )}
                  <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-200/30 text-cyan-700 dark:bg-cyan-700/20 dark:text-cyan-200 font-semibold">
                    Tool
                  </span>
                </div>
                <span className="font-semibold text-blue-700 dark:text-blue-200 hover:underline text-lg mb-1 flex items-center gap-2">
                  {tool.title}
                  <ArrowUpRight className="inline-block w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-2" />
                </span>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {tool.desc}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SUGGEST A RESOURCE */}
        <section className="pt-10 animate-fade-in">
          <div className="mx-auto text-center text-gray-500 dark:text-gray-400 text-sm">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-100 dark:from-blue-900 dark:to-blue-950 px-4 py-3 rounded-xl border border-blue-100 dark:border-blue-800">
              Want to suggest a resource?{" "}
              <a
                href="mailto:opensourcekashmir@gmail.com"
                className="underline font-semibold hover:text-blue-700 dark:hover:text-blue-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
