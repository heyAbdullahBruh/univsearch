import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import FilterBar from "@/components/filters/FilterBar";
import SearchInput from "@/components/filters/SearchInput";
import SortDropdown from "@/components/filters/SortDropdown";
import UniversityCard from "@/components/university/UniversityCard";
import { universities } from "@/data/turkey_universities_cs_it";
import { useFilter } from "@/hooks/useFilter";

const UniversityModal = lazy(
  () => import("@/components/university/UniversityModal"),
);

export default function CountryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortOption, setSortOption] = useState("qs-rank-asc");
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredUniversities = useFilter(universities, {
    searchQuery,
    activeFilters,
    sortOption,
  });

  const handleViewDetails = (university) => {
    setSelectedUniversity(university);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // Don't clear selectedUniversity immediately to allow exit animation
    setTimeout(() => setSelectedUniversity(null), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen pt-20"
    >
      {/* Filters Bar */}
      <div className="sticky top-16 z-30 bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex-1">
              <SearchInput value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="w-full md:w-48">
              <SortDropdown value={sortOption} onChange={setSortOption} />
            </div>
          </div>
          <FilterBar
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </div>
      </div>

      {/* Results Info */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <p className="text-sm font-mono text-[var(--text-muted)]">
          // showing {filteredUniversities.length} of {universities.length}{" "}
          universities
        </p>
      </div>

      {/* University Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {filteredUniversities.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredUniversities.map((university) => (
              <UniversityCard
                key={university.universityName}
                university={university}
                onViewDetails={handleViewDetails}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="font-display font-bold text-xl mb-2">
              // no results found
            </p>
            <p className="text-sm font-mono text-[var(--text-muted)]">
              Try adjusting your search or filters
            </p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <Suspense fallback={null}>
        {selectedUniversity && (
          <UniversityModal
            university={selectedUniversity}
            isOpen={modalOpen}
            onClose={handleCloseModal}
          />
        )}
      </Suspense>
    </motion.div>
  );
}
