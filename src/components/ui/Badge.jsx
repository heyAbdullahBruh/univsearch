import { motion } from "framer-motion";

const badgeStyles = {
  public: "bg-brand-blue/15 text-brand-blue border border-brand-blue/30",
  private:
    "bg-brand-pinkDeep/15 text-brand-pinkDeep border border-brand-pinkDeep/30",
  english: "bg-brand-green/15 text-brand-green border border-brand-green/30",
  turkish:
    "bg-brand-greenDark/20 text-brand-green border border-brand-green/30",
  tb: "bg-brand-green text-white border border-brand-green",
  noYos:
    "bg-brand-pink text-brand-greenDark dark:bg-brand-pinkDeep dark:text-white border border-brand-pinkDeep/30",
  febIntake: "bg-brand-blue text-white border border-brand-blue",
  default:
    "bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--border)]",
};

export default function Badge({ type, children, className = "" }) {
  const style = badgeStyles[type] || badgeStyles.default;

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-medium ${style} ${className}`}
    >
      {children}
    </motion.span>
  );
}
