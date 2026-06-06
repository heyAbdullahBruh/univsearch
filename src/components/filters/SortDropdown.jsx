import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "qs-rank-asc", label: "QS Rank (Low → High)" },
  { value: "tuition-low", label: "Tuition (Low → High)" },
  { value: "tuition-high", label: "Tuition (High → Low)" },
  { value: "name-asc", label: "Name (A → Z)" },
  { value: "public-first", label: "Public First" },
];

export default function SortDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = SORT_OPTIONS.find((opt) => opt.value === value);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-sm font-mono hover:border-brand-pinkDeep transition-colors"
      >
        <span className="truncate">
          {selectedOption?.label || "Sort by..."}
        </span>
        <ChevronDown
          size={16}
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg shadow-card-light dark:shadow-card-dark overflow-hidden z-20"
          >
            {SORT_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm font-mono hover:bg-[var(--tag-bg)] transition-colors ${
                  value === option.value ? "text-brand-pinkDeep font-bold" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
