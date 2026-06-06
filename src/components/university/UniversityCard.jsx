import { motion } from "framer-motion";
import { MapPin, DollarSign, Globe, ArrowRight, Award } from "lucide-react";
import Badge from "../ui/Badge";
import ProgramTag from "../ui/ProgramTag";
import {
  getAvailablePrograms,
  getMinimumTuition,
  hasEnglishPrograms,
} from "../../data/turkey_universities_cs_it";

export default function UniversityCard({ university, onViewDetails }) {
  const programs = getAvailablePrograms(university);
  const minTuition = getMinimumTuition(university);
  const hasEnglish = hasEnglishPrograms(university);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 32 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 shadow-card-light dark:shadow-card-dark hover:shadow-glow-pink dark:hover:shadow-glow-green transition-shadow duration-300 cursor-pointer group"
      onClick={() => onViewDetails(university)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Badge type="public">
            <Award size={12} className="mr-1" />#{university.qsWorldRank2026}
          </Badge>
          <Badge type={university.universityType.toLowerCase()}>
            {university.universityType}
          </Badge>
        </div>
        {university.turkiyeBurslarıEligible && <Badge type="tb">TB ✓</Badge>}
      </div>

      {/* University Name */}
      <h3 className="font-display font-bold text-lg mb-2 leading-tight line-clamp-2">
        {university.universityName}
      </h3>

      {/* Location & Rank */}
      <div className="flex items-center text-sm text-[var(--text-muted)] mb-3 space-x-3 font-mono">
        <span className="flex items-center">
          <MapPin size={14} className="mr-1" />
          {university.location.city}
        </span>
        <span>⭐ QS #{university.qsWorldRank2026}</span>
      </div>

      {/* Program Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {programs.map((program) => (
          <ProgramTag key={program.key} program={program} />
        ))}
      </div>

      {/* Quick Info */}
      <div className="flex items-center justify-between text-sm font-mono mb-4">
        <span className="flex items-center text-[var(--text-muted)]">
          <DollarSign size={14} className="mr-1" />
          From ${minTuition?.toLocaleString()}/yr
        </span>
        {hasEnglish && (
          <span className="flex items-center text-brand-green">
            <Globe size={14} className="mr-1" />
            English
          </span>
        )}
        {!university.admissionRequirements.yosRequired && (
          <span className="text-xs bg-brand-pink text-brand-greenDark dark:bg-brand-pinkDeep dark:text-white px-2 py-0.5 rounded-full font-mono">
            No YÖS
          </span>
        )}
      </div>

      {/* View Details Button */}
      <div className="flex items-center justify-end text-sm font-mono text-brand-blue group-hover:text-brand-pinkDeep transition-colors">
        <span>View Details</span>
        <ArrowRight
          size={16}
          className="ml-1 transition-transform group-hover:translate-x-1"
        />
      </div>
    </motion.div>
  );
}
