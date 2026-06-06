import { motion } from "framer-motion";

const FILTERS = [
  "All",
  "Public",
  "Private",
  "English-medium",
  "No YÖS",
  "Feb Intake",
  "Cyber Security",
  "Data Science",
];

export default function FilterBar({ activeFilters, setActiveFilters }) {
  const handleFilter = (filter) => {
    setActiveFilters((prev) => {
      if (filter === "All") return [];
      if (prev.includes(filter)) return prev.filter((f) => f !== filter);
      return [...prev, filter];
    });
  };

  const isActive = (filter) => {
    if (filter === "All") return activeFilters.length === 0;
    return activeFilters.includes(filter);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilter(filter)}
          className={`relative px-3 py-1 rounded-full text-xs font-mono border border-[var(--border)] transition-colors ${
            isActive(filter) ? "text-white" : "hover:bg-[var(--tag-bg)]"
          }`}
        >
          {isActive(filter) && (
            <motion.div
              layoutId="filter-active"
              className="absolute inset-0 bg-brand-pinkDeep rounded-full"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{filter}</span>
        </button>
      ))}
    </div>
  );
}
