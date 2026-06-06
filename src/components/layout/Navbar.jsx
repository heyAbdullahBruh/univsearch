import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";
import { GitBranch, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MobileDrawer from "./MobileDrawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const NAV_COUNTRIES = [
  { name: "Turkey", flag: "🇹🇷", slug: "turkey", active: true },
  { name: "Germany", flag: "🇩🇪", slug: "germany", active: false },
  { name: "Malaysia", flag: "🇲🇾", slug: "malaysia", active: false },
  { name: "Hungary", flag: "🇭🇺", slug: "hungary", active: false },
  { name: "China", flag: "🇨🇳", slug: "china", active: false },
  { name: "Russia", flag: "🇷🇺", slug: "russia", active: false },
  { name: "Italy", flag: "🇮🇹", slug: "italy", active: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 glass-nav bg-[var(--bg-nav)] border-b border-[var(--border)] transition-shadow duration-300 ${
          scrolled ? "shadow-card-light dark:shadow-card-dark" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-display text-brand-pinkDeep">
              &lt;/&gt;
            </span>
            <span className="text-lg font-display font-bold hidden sm:block">
              UniExplorer
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_COUNTRIES.map((country) =>
              country.active ? (
                <NavLink
                  key={country.slug}
                  to={`/country/${country.slug}`}
                  className={({ isActive }) =>
                    `relative px-3 py-1.5 rounded-full text-sm font-mono transition-colors duration-200 ${
                      isActive ? "text-white" : "hover:bg-[var(--tag-bg)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-brand-pinkDeep rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">
                        {country.flag} {country.name}
                      </span>
                    </>
                  )}
                </NavLink>
              ) : (
                <span
                  key={country.slug}
                  className="relative px-3 py-1.5 rounded-full text-sm font-mono opacity-50 cursor-not-allowed group"
                  title="Coming Soon"
                >
                  {country.flag} {country.name}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[var(--bg-card)] border border-[var(--border)] px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Coming Soon 🚧
                  </span>
                </span>
              ),
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/heyAbdullahBruh/univsearch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[var(--tag-bg)] transition-colors"
            >
              <GitBranch size={20} />
            </a>
            <ThemeToggle />
            {isMobile && (
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-lg hover:bg-[var(--tag-bg)] transition-colors md:hidden"
              >
                <Menu size={20} />
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        countries={NAV_COUNTRIES}
      />
    </>
  );
}
