import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Youtube, Mail, Heart } from "lucide-react";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Programs", to: "/programs" },
      { label: "Community", to: "/community" },
      { label: "Learn", to: "/learn" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Google Summer of Code", to: "https://summerofcode.withgoogle.com/" },
      { label: "LFX Mentorship", to: "https://lfx.linuxfoundation.org/tools/mentorship/" },
      { label: "Outreachy", to: "https://www.outreachy.org/" },
      { label: "MLH Fellowship", to: "https://fellowship.mlh.io/" },
    ],
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Open-Source-Kashmir", icon: Github },
  { label: "Twitter", href: "https://twitter.com/OpenSourceKashmir", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com/company/open-source-kashmir", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/", icon: Youtube },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-brand bg-stone-900 text-stone-300">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 -rotate-3 items-center justify-center rounded-lg bg-brand text-base font-black text-white">
              <span className="rotate-3">OSK</span>
            </span>
            <span className="font-display text-xl font-bold text-white">
              Open Source Kashmir
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
            Empowering Kashmir to code, collaborate, and contribute to global
            open source projects. A community for everyone — from first PRs to
            leading projects.
          </p>
          <div className="mt-6 flex gap-2">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-lg font-semibold text-white">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.to.startsWith("http") ? (
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-stone-400 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-sm text-stone-400 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-800">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-stone-500">
            &copy; {year} Open Source Kashmir. Built with{" "}
            <Heart size={13} className="inline text-brand" /> in Kashmir.
          </p>
          <a
            href="mailto:opensourcekashmir@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-brand"
          >
            <Mail size={14} />
            opensourcekashmir@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
