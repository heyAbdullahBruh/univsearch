/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  DollarSign,
  Calendar,
  Clock,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

const TAB_LABELS = {
  CSE: "CSE",
  CS: "CS",
  CyberSecurity: "Cyber",
  IT: "IT",
  DataScience: "DS",
};

export default function DepartmentTab({
  departments,
  activeTab,
  setActiveTab,
}) {
  // Guard against null/undefined departments
  if (!departments) return null;

  const deptEntries = Object.entries(departments);
  const availableTabs = deptEntries.filter(([_, dept]) => dept?.available);

  // Return null if no available tabs
  if (availableTabs.length === 0) {
    return (
      <p className="text-sm font-mono text-[var(--text-muted)]">
        No programs available
      </p>
    );
  }

  const activeDepartment = departments[activeTab];

  // Guard against invalid active tab
  if (!activeDepartment || !activeDepartment.available) {
    // Set to first available tab
    const firstAvailable = availableTabs[0]?.[0];
    if (firstAvailable && firstAvailable !== activeTab) {
      setActiveTab(firstAvailable);
      return null;
    }
    return null;
  }

  return (
    <div>
      {/* Tab Bar */}
      {availableTabs.length > 1 && (
        <div className="flex space-x-1 bg-[var(--tag-bg)] rounded-lg p-1 mb-4">
          {availableTabs.map(([key]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative flex-1 px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-colors ${
                activeTab === key
                  ? "text-white"
                  : "hover:text-[var(--text-primary)]"
              }`}
            >
              {activeTab === key && (
                <motion.div
                  layoutId="dept-tab-indicator"
                  className="absolute inset-0 bg-brand-pinkDeep rounded-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{TAB_LABELS[key] || key}</span>
            </button>
          ))}
        </div>
      )}

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {/* Program Header */}
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-display font-bold text-base">
              {activeDepartment.programName || "Program"}
            </h4>
            <p className="text-sm font-mono text-[var(--text-muted)]">
              {activeDepartment.degreeLevel || ""}
            </p>
          </div>
          <Badge
            type={
              activeDepartment.language?.includes("English")
                ? "english"
                : "turkish"
            }
          >
            {activeDepartment.language?.includes("English")
              ? "🌐 English"
              : "🇹🇷 Turkish"}
          </Badge>
        </div>

        {/* Tuition */}
        <div className="flex items-center space-x-4 text-sm font-mono">
          <span className="flex items-center">
            <DollarSign size={14} className="mr-1" />$
            {activeDepartment.annualTuitionUSD?.toLocaleString() || "N/A"}/yr
          </span>
          <span className="text-[var(--text-muted)]">
            (TRY {activeDepartment.annualTuitionTRY?.toLocaleString() || "N/A"})
          </span>
        </div>

        {/* Course Overview */}
        {activeDepartment.courseOverview && (
          <p className="text-sm font-mono leading-relaxed">
            {activeDepartment.courseOverview}
          </p>
        )}

        {/* Course Highlights */}
        {activeDepartment.courseHighlights &&
          activeDepartment.courseHighlights.length > 0 && (
            <div>
              <h5 className="font-display font-bold text-sm mb-2">
                Course Highlights
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {activeDepartment.courseHighlights.map((course, index) => (
                  <span
                    key={`course-${index}`}
                    className="px-2 py-0.5 bg-[var(--tag-bg)] rounded text-xs font-mono"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

        {/* Intake & Deadline */}
        <div className="flex items-center justify-between text-sm font-mono">
          <div className="space-y-1">
            {activeDepartment.intakeMonths &&
              activeDepartment.intakeMonths.length > 0 && (
                <span className="flex items-center text-[var(--text-muted)]">
                  <Calendar size={14} className="mr-1" />
                  Intake: {activeDepartment.intakeMonths.join(", ")}
                </span>
              )}
            {activeDepartment.applicationDeadline && (
              <span className="flex items-center text-[var(--text-muted)]">
                <Clock size={14} className="mr-1" />
                Deadline: {activeDepartment.applicationDeadline}
              </span>
            )}
          </div>
          {activeDepartment.courseLink && (
            <a
              href={activeDepartment.courseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-brand-blue hover:text-brand-pinkDeep transition-colors"
            >
              Visit Program <ExternalLink size={14} className="ml-1" />
            </a>
          )}
        </div>

        {/* Department Contact */}
        {activeDepartment.contact && (
          <div className="border-t border-[var(--border)] pt-3 text-sm font-mono space-y-1">
            {activeDepartment.contact.departmentEmail && (
              <span className="flex items-center text-[var(--text-muted)]">
                <Mail size={12} className="mr-1" />
                {activeDepartment.contact.departmentEmail}
              </span>
            )}
            {activeDepartment.contact.departmentPhone && (
              <span className="flex items-center text-[var(--text-muted)]">
                <Phone size={12} className="mr-1" />
                {activeDepartment.contact.departmentPhone}
              </span>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
