import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

export default function MobileDrawer({ isOpen, onClose, countries }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-72 bg-[var(--bg-card)] z-50 overflow-y-auto border-r border-[var(--border)]"
          >
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold font-display text-brand-pinkDeep">
                    &lt;/&gt;
                  </span>
                  <span className="text-lg font-display font-bold">
                    UniExplorer
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[var(--tag-bg)] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Country Links */}
              <nav className="space-y-1">
                {countries.map((country, index) => (
                  <motion.div
                    key={country.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {country.active ? (
                      <NavLink
                        to={`/country/${country.slug}`}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-3 rounded-lg text-sm font-mono transition-all duration-200 ${
                            isActive
                              ? "border-l-4 border-brand-pinkDeep bg-brand-pink/20"
                              : "hover:bg-[var(--tag-bg)] border-l-4 border-transparent"
                          }`
                        }
                      >
                        <span className="mr-2 text-lg">{country.flag}</span>
                        {country.name}
                      </NavLink>
                    ) : (
                      <div className="flex items-center px-4 py-3 rounded-lg text-sm font-mono opacity-50 cursor-not-allowed">
                        <span className="mr-2 text-lg">{country.flag}</span>
                        {country.name}
                        <span className="ml-auto text-xs bg-[var(--border)] px-2 py-0.5 rounded-full">
                          Soon
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <ThemeToggle />
                <span className="text-xs text-[var(--text-muted)]">v1.0.0</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
