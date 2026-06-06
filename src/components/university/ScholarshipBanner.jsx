import { ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function ScholarshipBanner({ scholarship }) {
  const isTB = scholarship.type === "Government";

  return (
    <div
      className={`mb-3 border-l-4 rounded-r-lg p-4 ${
        isTB
          ? "bg-brand-green/10 border-brand-green"
          : "bg-brand-blue/10 border-brand-blue"
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-display font-bold text-sm">{scholarship.name}</h4>
          <Badge type={isTB ? "tb" : "english"}>{scholarship.type}</Badge>
        </div>
      </div>

      <div className="space-y-1 text-sm font-mono mb-3">
        <p>
          <strong>Coverage:</strong> {scholarship.coverage}
        </p>
        <p>
          <strong>Eligibility:</strong> {scholarship.eligibility}
        </p>
      </div>

      <a
        href={scholarship.applicationLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center text-sm font-mono ${
          isTB ? "text-brand-green" : "text-brand-blue"
        } hover:underline`}
      >
        Apply for Scholarship <ExternalLink size={14} className="ml-1" />
      </a>
    </div>
  );
}
