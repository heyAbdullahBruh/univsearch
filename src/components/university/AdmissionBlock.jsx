import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";
import StatBar from "@/components/ui/StatBar";
import Badge from "@/components/ui/Badge";

export default function AdmissionBlock({ requirements }) {
  if (!requirements) return null;

  return (
    <div className="space-y-4">
      {/* HSC Score Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-mono font-medium mb-1 block">
            Minimum HSC %
          </label>
          <StatBar
            value={requirements.minHSCPercent || 0}
            max={100}
            color="bg-brand-green"
          />
          <span className="text-xs font-mono text-[var(--text-muted)] mt-1">
            {requirements.minHSCPercent || 0}%
          </span>
        </div>
        <div>
          <label className="text-xs font-mono font-medium mb-1 block">
            Competitive HSC %
          </label>
          <StatBar
            value={requirements.competitiveHSCPercent || 0}
            max={100}
            color="bg-brand-pinkDeep"
          />
          <span className="text-xs font-mono text-[var(--text-muted)] mt-1">
            {requirements.competitiveHSCPercent || 0}%
          </span>
        </div>
      </div>

      {/* English Requirement */}
      <div>
        <label className="text-xs font-mono font-medium mb-2 block">
          English Requirement
        </label>
        <p className="text-sm font-mono p-2 bg-[var(--tag-bg)] rounded-lg">
          {requirements.englishRequirement || "N/A"}
        </p>
      </div>

      {/* YÖS Required */}
      <div className="flex items-center space-x-2">
        <span className="text-xs font-mono font-medium">YÖS Required:</span>
        <Badge type={requirements.yosRequired ? "turkish" : "noYos"}>
          {requirements.yosRequired ? "Yes" : "No"}
        </Badge>
        {requirements.yosNote && (
          <span className="text-xs font-mono text-[var(--text-muted)]">
            ({requirements.yosNote})
          </span>
        )}
      </div>

      {/* Required Documents */}
      {requirements.requiredDocs && requirements.requiredDocs.length > 0 && (
        <div>
          <label className="text-xs font-mono font-medium mb-2 block">
            Required Documents
          </label>
          <div className="space-y-1.5">
            {requirements.requiredDocs.map((doc, index) => (
              <motion.div
                key={`doc-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-sm font-mono"
              >
                <CheckCircle
                  size={14}
                  className="mr-2 text-brand-green flex-shrink-0"
                />
                {doc}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Apply Button */}
      {requirements.applicationPortal && (
        <a
          href={requirements.applicationPortal}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-brand-pinkDeep text-white rounded-lg text-sm font-mono hover:bg-brand-pink transition-colors"
        >
          Apply Now <ExternalLink size={14} className="ml-1" />
        </a>
      )}
    </div>
  );
}
