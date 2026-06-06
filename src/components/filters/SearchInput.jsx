import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

export default function SearchInput({ value, onChange }) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <motion.div
      className={`relative ${
        focused ? "shadow-glow-pink" : ""
      } transition-shadow duration-300 rounded-lg`}
    >
      <Search
        size={18}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]"
      />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search universities, cities, programs..."
        className="w-full pl-10 pr-10 py-2.5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-sm font-mono focus:outline-none focus:border-brand-pinkDeep transition-colors"
      />
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0.5 rounded hover:bg-[var(--tag-bg)] transition-colors"
          >
            <X size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
