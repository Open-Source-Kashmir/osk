import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./shared/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Community", to: "/community" },
  { label: "Learn", to: "/learn" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-stone-200 bg-cream/90 backdrop-blur-lg dark:border-stone-800 dark:bg-night/90"
          : "border-b-2 border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 -rotate-3 items-center justify-center rounded-lg bg-brand text-base font-black text-white shadow-md shadow-brand/30">
            <span className="rotate-3">OSK</span>
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-stone-900 dark:text-white">
            Open Source <span className="text-brand">Kashmir</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(link.to)
                  ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                  : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://discord.gg/hgnUsqAmMT"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex !px-5 !py-2"
          >
            Join us
            <ArrowUpRight size={16} />
          </a>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t-2 border-stone-200 bg-cream dark:border-stone-800 dark:bg-night md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive(link.to)
                    ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                    : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://discord.gg/hgnUsqAmMT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 w-full"
            >
              Join our community
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
