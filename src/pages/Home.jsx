import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  ArrowRight,
  GraduationCap,
  Globe,
  Shield,
  Database,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  universities as turkeyUniversities,
  getUniversityStats,
} from "@/data/turkey_universities_cs_it";

const COUNTRY_CARDS = [
  { name: "Turkey", flag: "🇹🇷", slug: "turkey", active: true, count: 20 },
  {
    name: "Germany",
    flag: "🇩🇪",
    slug: "germany",
    active: false,
    count: "Coming",
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    slug: "malaysia",
    active: false,
    count: "Coming",
  },
  {
    name: "Hungary",
    flag: "🇭🇺",
    slug: "hungary",
    active: false,
    count: "Coming",
  },
  { name: "China", flag: "🇨🇳", slug: "china", active: false, count: "Coming" },
  {
    name: "Russia",
    flag: "🇷🇺",
    slug: "russia",
    active: false,
    count: "Coming",
  },
];

export default function Home() {
  const stats = getUniversityStats(turkeyUniversities);

  const typewriterText = "explore_universities(country='Turkey')";
  const subtitle = "// 20 universities · CS/IT programs · Scholarships";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-dot-grid">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display font-bold text-3xl md:text-5xl mb-4"
          >
            {typewriterText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-6 bg-current ml-1"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[var(--text-muted)] font-mono text-sm mb-12"
          >
            {subtitle}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4">
              <GraduationCap className="text-brand-pinkDeep mb-2" size={24} />
              <div className="text-2xl">
                <AnimatedCounter value={stats.total} />
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)]">
                Universities
              </div>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4">
              <Shield className="text-brand-green mb-2" size={24} />
              <div className="text-2xl">
                <AnimatedCounter value={stats.tbEligible} />
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)]">
                TB Eligible
              </div>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4">
              <Globe className="text-brand-blue mb-2" size={24} />
              <div className="text-2xl">
                <AnimatedCounter value={stats.englishMedium} />
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)]">
                English-medium
              </div>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4">
              <Database className="text-brand-pink mb-2" size={24} />
              <div className="text-2xl">
                <AnimatedCounter value={stats.cyberSecurity} />
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)]">
                Cyber Security
              </div>
            </div>
          </motion.div>

          {/* Country Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {COUNTRY_CARDS.map((country) =>
              country.active ? (
                <Link
                  key={country.slug}
                  to={`/country/${country.slug}`}
                  className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 hover:shadow-glow-pink dark:hover:shadow-glow-green transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{country.flag}</div>
                  <h3 className="font-display font-bold text-lg mb-1">
                    {country.name}
                  </h3>
                  <p className="text-sm font-mono text-[var(--text-muted)]">
                    {country.count} Universities
                  </p>
                  <ArrowRight className="mt-3 text-brand-pinkDeep opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ) : (
                <div
                  key={country.slug}
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 opacity-50 cursor-not-allowed"
                >
                  <div className="text-4xl mb-3">{country.flag}</div>
                  <h3 className="font-display font-bold text-lg mb-1">
                    {country.name}
                  </h3>
                  <p className="text-sm font-mono text-[var(--text-muted)]">
                    Coming Soon
                  </p>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
