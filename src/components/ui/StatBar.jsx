import { motion } from "framer-motion";

export default function StatBar({
  value,
  max = 100,
  color = "bg-brand-green",
}) {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className={`h-full ${color} rounded-full`}
      />
    </div>
  );
}
