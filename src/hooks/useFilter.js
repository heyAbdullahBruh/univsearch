import { useMemo } from "react";
import { getAvailablePrograms } from "../data/turkey_universities_cs_it";

// Helper: Check if university has any English programs
const hasEnglishPrograms = (university) => {
  return getAvailablePrograms(university).some((p) =>
    p.language.includes("English"),
  );
};

// Helper: Get minimum tuition across available programs
const getMinimumTuition = (university) => {
  const programs = getAvailablePrograms(university);
  if (programs.length === 0) return null;
  return Math.min(
    ...programs
      .filter((p) => p.annualTuitionUSD !== null)
      .map((p) => p.annualTuitionUSD),
  );
};

export const useFilter = (
  universities,
  { searchQuery, activeFilters, sortOption },
) => {
  return useMemo(() => {
    let filtered = [...universities];

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((uni) => {
        const searchable = [
          uni.universityName,
          uni.location.city,
          uni.location.country,
          ...Object.values(uni.departments)
            .filter((d) => d.available)
            .map((d) => d.programName),
        ]
          .join(" ")
          .toLowerCase();
        return searchable.includes(query);
      });
    }

    // Apply filters
    activeFilters.forEach((filter) => {
      switch (filter) {
        case "Public":
          filtered = filtered.filter((u) => u.universityType === "Public");
          break;
        case "Private":
          filtered = filtered.filter((u) => u.universityType === "Private");
          break;
        case "English-medium":
          filtered = filtered.filter((u) => hasEnglishPrograms(u));
          break;
        case "No YÖS":
          filtered = filtered.filter(
            (u) => !u.admissionRequirements.yosRequired,
          );
          break;
        case "Feb Intake":
          filtered = filtered.filter((u) =>
            getAvailablePrograms(u).some((p) =>
              p.intakeMonths.includes("February"),
            ),
          );
          break;
        case "Cyber Security":
          filtered = filtered.filter(
            (u) => u.departments.CyberSecurity?.available,
          );
          break;
        case "Data Science":
          filtered = filtered.filter(
            (u) => u.departments.DataScience?.available,
          );
          break;
      }
    });

    // Apply sorting
    switch (sortOption) {
      case "qs-rank-asc":
        filtered.sort((a, b) => {
          const rankA =
            typeof a.qsWorldRank2026 === "number" ? a.qsWorldRank2026 : 9999;
          const rankB =
            typeof b.qsWorldRank2026 === "number" ? b.qsWorldRank2026 : 9999;
          return rankA - rankB;
        });
        break;
      case "tuition-low":
        filtered.sort(
          (a, b) =>
            (getMinimumTuition(a) || Infinity) -
            (getMinimumTuition(b) || Infinity),
        );
        break;
      case "tuition-high":
        filtered.sort(
          (a, b) => (getMinimumTuition(b) || 0) - (getMinimumTuition(a) || 0),
        );
        break;
      case "name-asc":
        filtered.sort((a, b) =>
          a.universityName.localeCompare(b.universityName),
        );
        break;
      case "public-first":
        filtered.sort((a, b) => {
          if (a.universityType === "Public" && b.universityType === "Private")
            return -1;
          if (a.universityType === "Private" && b.universityType === "Public")
            return 1;
          return 0;
        });
        break;
    }

    return filtered;
  }, [universities, searchQuery, activeFilters, sortOption]);
};
