/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import DepartmentTab from "./DepartmentTab";
import AdmissionBlock from "./AdmissionBlock";
import ScholarshipBanner from "./ScholarshipBanner";

export default function UniversityModal({ university, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(() => {
    const depts = Object.entries(university?.departments || {});
    const firstAvailable = depts.find(([_, dept]) => dept?.available);
    return firstAvailable ? firstAvailable[0] : "CSE";
  });

  useEffect(() => {
    if (!university) return;

    const depts = Object.entries(university.departments || {});
    const firstAvailable = depts.find(([_, dept]) => dept?.available);
    setActiveTab(firstAvailable ? firstAvailable[0] : "CSE");
  }, [university]);

  // Guard against null university
  if (!university) return null;

  return (
    <AnimatePresence>
      {isOpen && university && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-[var(--bg-card)] z-50 overflow-y-auto border-l border-[var(--border)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[var(--tag-bg)] transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-6 pt-16">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge type="public">#{university.qsWorldRank2026}</Badge>
                  <Badge type={university.universityType?.toLowerCase()}>
                    {university.universityType}
                  </Badge>
                  {university.turkiyeBurslarıEligible && (
                    <Badge type="tb">TB ✓</Badge>
                  )}
                </div>

                <h2 className="font-display font-bold text-2xl mb-2">
                  {university.universityName}
                </h2>

                <div className="flex items-center text-sm font-mono text-[var(--text-muted)]">
                  <MapPin size={14} className="mr-1" />
                  {university.location?.city}, {university.location?.country}
                </div>

                <div className="mt-3 space-y-1 text-sm font-mono">
                  <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-brand-blue hover:text-brand-pinkDeep transition-colors"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    {university.website}
                  </a>
                  <span className="flex items-center text-[var(--text-muted)]">
                    <Mail size={14} className="mr-1" />
                    {university.contact?.email}
                  </span>
                  <span className="flex items-center text-[var(--text-muted)]">
                    <Phone size={14} className="mr-1" />
                    {university.contact?.phone}
                  </span>
                </div>
              </div>

              {/* Department Tabs */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-lg mb-3">
                  Programs
                </h3>
                <DepartmentTab
                  departments={university.departments}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>

              {/* Admission Requirements */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-lg mb-3">
                  Admission Requirements
                </h3>
                <AdmissionBlock
                  requirements={university.admissionRequirements}
                />
              </div>

              {/* Scholarships */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-lg mb-3">
                  Scholarships
                </h3>
                {university.scholarships?.map((scholarship, index) => (
                  <ScholarshipBanner
                    key={`scholarship-${index}`}
                    scholarship={scholarship}
                  />
                ))}
              </div>

              {/* Campus Highlights */}
              {university.campusHighlights && (
                <div className="bg-brand-pink/10 border border-brand-pink/30 rounded-xl p-4 mb-4">
                  <h4 className="font-display font-bold text-sm mb-2">
                    Campus Highlights
                  </h4>
                  <p className="text-sm font-mono text-[var(--text-muted)]">
                    {university.campusHighlights}
                  </p>
                </div>
              )}

              {/* Notes */}
              {university.notes && (
                <div className="bg-[var(--tag-bg)] rounded-xl p-4">
                  <p className="text-sm font-mono">{university.notes}</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
