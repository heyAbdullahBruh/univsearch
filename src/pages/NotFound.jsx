import { motion } from "framer-motion";
import { Link } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="text-center">
        <div className="text-8xl font-display font-bold text-brand-pinkDeep mb-4">
          404
        </div>
        <p className="font-mono text-xl mb-6">// page not found</p>
        <p className="text-sm font-mono text-[var(--text-muted)] mb-8">
          The requested resource does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-brand-pinkDeep text-white rounded-lg font-mono hover:bg-brand-pink transition-colors"
        >
          <Home size={18} className="mr-2" />
          Return Home
        </Link>
      </div>
    </motion.div>
  );
}
