/**
 * Turkey Top 20 Universities — CS / IT Programs for Bangladeshi HSC Students
 * QS World University Rankings 2026 | Last updated: June 2026
 * Sources: Official university websites · QS Rankings 2026 · Türkiye Bursları (YTB)
 *
 * Türkiye Bursları apply portal : https://tbbs.meb.gov.tr
 * Application window            : 10 Jan – 20 Feb each year
 * Coverage (UG)                 : Full tuition + dormitory + ~3,500 TRY/month stipend
 *                                 + health insurance + one return airfare
 *                                 + 1-year free Turkish language course (TÖMER)
 * Acceptance rate               : ~2–5 % (≈5,000 spots from 250,000+ global applicants)
 * Age limit (UG)                : Under 21 at time of application
 * IELTS                         : NOT required for the TB application itself
 * Placement                     : YTB assigns universities; first choice not guaranteed
 *
 * TRY exchange rate used        : 1 USD ≈ 34 TRY (verify before use)
 * DISCLAIMER: Fees, deadlines & scholarship terms change annually.
 *             Always verify with the official university website before applying.
 */

// ─── SHARED SCHOLARSHIP TEMPLATES ─────────────────────────────────────────────

export const TÜRKIYE_BURSLARI = {
  name: "Türkiye Bursları (Turkish Government Scholarship)",
  coverage:
    "Full tuition + university dormitory + ~3,500 TRY/month stipend (UG) + health insurance + one return airfare + 1-year free TÖMER Turkish language course",
  eligibility:
    "Bangladeshi HSC graduates under 21; minimum 70% overall marks; apply 10 Jan – 20 Feb each year",
  applyLink: "https://tbbs.meb.gov.tr",
};
// ─── DEPARTMENT SCHEMA (null = program not offered) ───────────────────────────
//
// Each department key: CSE | CS | CyberSecurity | IT | DataScience
//
// Available program shape:
// {
//   available       : true,
//   programName     : string,
//   degreeLevel     : "Bachelor's (4 years)",
//   language        : "English" | "Turkish" | "English & Turkish",
//   annualTuitionUSD: number,
//   annualTuitionTRY: number,
//   courseOverview  : string,
//   courseLink      : string,
//   applicationDeadline: string,
//   intakeMonths    : string[],
//   contact         : { departmentEmail, departmentPhone, departmentWebsite } | null,
// }
//
// Unavailable program shape: { available: false }

// ─── UNIVERSITIES ──────────────────────────────────────────────────────────────

export const universities = [
  // ── 1. METU ──────────────────────────────────────────────────────────────────
  {
    universityName: "Middle East Technical University (METU / ODTÜ)",
    qsWorldRank2026: 269,
    location: { city: "Ankara", country: "Turkey" },
    universityType: "Public",
    website: "https://www.metu.edu.tr",
    contact: {
      email: "intl@metu.edu.tr",
      phone: "+90-312-210-2834",
      internationalAdmissionsPortal: "https://iso.metu.edu.tr/en",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 3000,
        annualTuitionTRY: 102000,
        courseOverview:
          "ABET-accredited program covering algorithms, systems, AI, software engineering, robotics, NLP, and HPC. Entirely in English. Consistently ranked among Turkey's top 3 CE programs for research output.",
        courseLink: "https://ceng.metu.edu.tr",
        applicationDeadline:
          "June 2026 for 2026–27 intake (YÖS or SAT/ACT route)",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "ceng@ceng.metu.edu.tr",
          departmentPhone: "+90-312-210-5576",
          departmentWebsite: "https://ceng.metu.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 70,
      competitiveHSCPercent: 85,
      englishRequirement:
        "IELTS 6.0 / TOEFL iBT 87 (waived if prior education was in English)",
      yosRequired: true,
      yosNote: "YÖS required unless applicant holds SAT/ACT scores",
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "Motivation letter",
        "English proficiency certificate",
        "YÖS result or SAT/ACT score",
        "Passport-size photos",
      ],
      applicationPortal: "https://oidb.metu.edu.tr/en",
    },
    campusHighlights:
      "4,500-acre forested campus in Ankara. Home to METU MEMS research centre, the Informatics Institute, and METUTECH — Turkey's first science park.",
    notes:
      "Türkiye Bursları covers 100 % tuition. Self-pay international UG tuition ≈ $1,500/semester. Computer Engineering is 100 % English — ideal for Bangladeshi students. High competition; apply early.",
  },

  // ── 2. Istanbul Technical University (ITU) ───────────────────────────────────
  {
    universityName: "Istanbul Technical University (ITU)",
    qsWorldRank2026: 298,
    location: { city: "Istanbul", country: "Turkey" },
    universityType: "Public",
    website: "https://www.itu.edu.tr",
    contact: {
      email: "foreign@itu.edu.tr",
      phone: "+90-212-285-3223",
      internationalAdmissionsPortal:
        "https://www.sis.itu.edu.tr/EN/student/foreign-students/foreign-students.php",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 2800,
        annualTuitionTRY: 94500,
        courseOverview:
          "ABET-accredited curriculum covering software systems, algorithms, computer networks, AI, and microcontrollers. Core instruction in English; strong ties to Istanbul's tech industry and startup ecosystem.",
        courseLink: "https://www.bbb.itu.edu.tr",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "bbb@itu.edu.tr",
          departmentPhone: "+90-212-285-3590",
          departmentWebsite: "https://www.bbb.itu.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: {
        available: true,
        programName: "Information Systems Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 2800,
        annualTuitionTRY: 94500,
        courseOverview:
          "Integrates software systems design with business technologies, database development, and corporate network operations.",
        courseLink: "https://www.sis.itu.edu.tr/EN",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "sis@itu.edu.tr",
          departmentPhone: "+90-212-285-3030",
          departmentWebsite: "https://www.itu.edu.tr",
        },
      },
      DataScience: {
        available: true,
        programName: "Artificial Intelligence and Data Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 2800,
        annualTuitionTRY: 94500,
        courseOverview:
          "Covers machine learning algorithms, deep learning, big data architectures, and statistical modelling. Taught in English.",
        courseLink: "https://www.sis.itu.edu.tr/EN",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "sis@itu.edu.tr",
          departmentPhone: "+90-212-285-3030",
          departmentWebsite: "https://www.itu.edu.tr",
        },
      },
    },
    admissionRequirements: {
      minHSCPercent: 80,
      competitiveHSCPercent: 85,
      englishRequirement:
        "TOEFL iBT 79 (IELTS not accepted; pass ITU English Proficiency Exam if no TOEFL). Minimum SAT 1200 or high TR-YÖS.",
      yosRequired: true,
      yosNote: "TR-YÖS accepted; ITU may also administer its own exam",
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "YÖS or SAT result",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://sis.itu.edu.tr/EN",
    },
    campusHighlights:
      "Maslak campus sits in Istanbul's financial centre, hosting supercomputers, aerospace research centres, and a highly connected tech incubator (ITU Çekirdek). Top 100 QS for Engineering — Mineral & Mining.",
    notes:
      "Türkiye Bursları covers 100 % tuition. One of Turkey's oldest and most prestigious technical universities. Highly competitive; strong quantitative credentials required.",
  },

  // ── 3. Koç University ────────────────────────────────────────────────────────
  {
    universityName: "Koç University",
    qsWorldRank2026: 323,
    location: { city: "Istanbul", country: "Turkey" },
    universityType: "Private",
    website: "https://www.ku.edu.tr",
    contact: {
      email: "intladmission@ku.edu.tr",
      phone: "+90-212-338-1000",
      internationalAdmissionsPortal: "https://international.ku.edu.tr",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [
      TÜRKIYE_BURSLARI,
      {
        name: "Koç University International Student Merit Scholarship",
        coverage:
          "25 %–100 % tuition waiver; awarded automatically during admissions review",
        eligibility:
          "All international applicants considered automatically; based on GPA and exam scores. No separate application needed.",
        applyLink:
          "https://international.ku.edu.tr/undergraduate-programs/tuition-and-scholarships/",
      },
    ],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Science and Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 38000,
        annualTuitionTRY: 1292000,
        courseOverview:
          "Covers theory, algorithms, machine learning, software systems, and hardware. 100 % English. Graduates regularly pursue postgraduate studies at top European and US universities. Active research in AI, cybersecurity, and data systems.",
        courseLink: "https://cs.ku.edu.tr/undergraduate/",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "cs@ku.edu.tr",
          departmentPhone: "+90-212-338-1779",
          departmentWebsite: "https://cs.ku.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 85,
      competitiveHSCPercent: 90,
      englishRequirement:
        "TOEFL iBT 80 (IELTS not accepted; pass Koç English Proficiency Exam if no TOEFL). SAT ≥ 1400 or ACT ≥ 31 recommended.",
      yosRequired: false,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "Motivation letter",
        "2 reference letters",
        "English proficiency certificate",
        "SAT/ACT score (optional but strongly recommended)",
        "Passport-size photos",
      ],
      applicationPortal:
        "https://international.ku.edu.tr/undergraduate-programs/how-to-apply/",
    },
    campusHighlights:
      "Elite forest-enclosed Rumelifeneri campus overlooking the Black Sea north of Istanbul. World-class molecular and computational research laboratories. Ranked #1 in Turkey overall.",
    notes:
      "Full tuition ≈ $38,000/year without scholarship. Türkiye Bursları covers it entirely. Koç also auto-awards 25–100 % merit scholarships. Very competitive admissions. No YÖS required.",
  },

  // ── 4. Boğaziçi University ───────────────────────────────────────────────────
  {
    universityName: "Boğaziçi University",
    qsWorldRank2026: 371,
    location: { city: "Istanbul", country: "Turkey" },
    universityType: "Public",
    website: "https://www.boun.edu.tr",
    contact: {
      email: "international.students@boun.edu.tr",
      phone: "+90-212-359-7600",
      internationalAdmissionsPortal: "https://intl.boun.edu.tr",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 2488,
        annualTuitionTRY: 85000,
        courseOverview:
          "100 % English-medium. Covers algorithms, networks, AI, software engineering, and computer systems. Consistently ranks among Turkey's strongest CE departments. Strong industry links and excellent graduate placement.",
        courseLink: "https://www.cmpe.boun.edu.tr",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "cmpe@boun.edu.tr",
          departmentPhone: "+90-212-359-7054",
          departmentWebsite: "https://www.cmpe.boun.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 75,
      competitiveHSCPercent: 90,
      englishRequirement:
        "TOEFL iBT 79 / IELTS 6.5 / BUEPT (Boğaziçi English proficiency exam) passing score. SAT ≥ 1350 recommended.",
      yosRequired: true,
      yosNote: "TR-YÖS accepted; high scores required",
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "YÖS result",
        "Motivation letter",
        "English proficiency certificate",
        "Passport-size photos",
      ],
      applicationPortal:
        "https://intl.boun.edu.tr/content/undergraduate-admission",
    },
    campusHighlights:
      "Historic Bebek campus on the European shore of the Bosphorus — one of the most scenic campuses in the world. 100 % English-medium public university. Rich student activism and pioneering computing research labs.",
    notes:
      "Türkiye Bursları covers 100 % tuition. Self-pay tuition ≈ $2,488/year (very low as a public university). Historically the most prestigious public university in Turkey. Very high competition.",
  },

  // ── 5. Sabancı University ────────────────────────────────────────────────────
  {
    universityName: "Sabancı University",
    qsWorldRank2026: 404,
    location: { city: "Istanbul", country: "Turkey" },
    universityType: "Private",
    website: "https://www.sabanciuniv.edu",
    contact: {
      email: "admissions@sabanciuniv.edu",
      phone: "+90-216-483-9000",
      internationalAdmissionsPortal:
        "https://www.sabanciuniv.edu/en/international-student-admissions",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [
      TÜRKIYE_BURSLARI,
      {
        name: "Sabancı University International Merit Scholarship",
        coverage:
          "25 %–75 % tuition discount; awarded automatically during admissions",
        eligibility:
          "All international applicants; merit-based. Strong HSC GPA and test scores improve chances. No dormitory support included.",
        applyLink:
          "https://www.sabanciuniv.edu/en/undergraduate-admissions-international-students",
      },
    ],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Science and Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 36500,
        annualTuitionTRY: 1241000,
        courseOverview:
          "Interdisciplinary program integrating CS, software engineering, and AI. Project-based learning, entrepreneurship focus, and industry collaboration. Flexible curriculum — students choose their major at the end of Year 1 or 2. 100 % English.",
        courseLink: "https://cs.sabanciuniv.edu/en",
        applicationDeadline:
          "August 2026 for 2026–27 intake (early decision available)",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "cs@sabanciuniv.edu",
          departmentPhone: "+90-216-483-9571",
          departmentWebsite: "https://cs.sabanciuniv.edu/en",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 80,
      competitiveHSCPercent: 85,
      englishRequirement:
        "TOEFL iBT 78 / PTE Academic 48 / CAE Grade C. Exempt if passing Sabancı's SFL Exam. SAT ≥ 1250 recommended.",
      yosRequired: false,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "Motivation letter",
        "2 reference letters",
        "English proficiency certificate",
        "Passport-size photos",
      ],
      applicationPortal: "https://applyundergrad.sabanciuniv.edu",
    },
    campusHighlights:
      "Modern self-contained Tuzla campus with state-of-the-art CS labs, fab lab, and startup incubation programmes. Internationally ranked for Engineering & Technology.",
    notes:
      "Full tuition ≈ $36,500/year — covered entirely by Türkiye Bursları. Sabancı also auto-awards 25–75 % merit scholarships. All programmes in English. No YÖS required.",
  },

  // ── 6. Bilkent University ────────────────────────────────────────────────────
  {
    universityName: "Bilkent University",
    qsWorldRank2026: 415,
    location: { city: "Ankara", country: "Turkey" },
    universityType: "Private",
    website: "https://www.bilkent.edu.tr",
    contact: {
      email: "intlstudents@bilkent.edu.tr",
      phone: "+90-312-290-1021",
      internationalAdmissionsPortal:
        "https://w3.bilkent.edu.tr/bilkent/international-students/",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [
      TÜRKIYE_BURSLARI,
      {
        name: "Bilkent University Merit Scholarship",
        coverage:
          "25 %–100 % tuition discount; merit-based, no separate application",
        eligibility:
          "All international applicants considered automatically during admissions based on academic record.",
        applyLink: "https://w3.bilkent.edu.tr/bilkent/international-students/",
      },
    ],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 17600,
        annualTuitionTRY: 598400,
        courseOverview:
          "One of Turkey's most respected CE programmes. 100 % English-medium. Covers theory, algorithms, AI, operating systems, software engineering, cybersecurity, ML, and distributed systems. Active alumni network in global tech companies.",
        courseLink: "https://w3.bilkent.edu.tr/www/departments/cs-engineering/",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "cs@cs.bilkent.edu.tr",
          departmentPhone: "+90-312-290-1218",
          departmentWebsite:
            "https://w3.bilkent.edu.tr/www/departments/cs-engineering/",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: {
        available: true,
        programName: "Computer Technology and Information Systems (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 17600,
        annualTuitionTRY: 598400,
        courseOverview:
          "Designed to meet IT industry needs. Covers database management, systems administration, web development, and cloud computing. 100 % English.",
        courseLink: "https://www.ctis.bilkent.edu.tr",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "ctis@bilkent.edu.tr",
          departmentPhone: "+90-312-290-5050",
          departmentWebsite: "https://www.ctis.bilkent.edu.tr",
        },
      },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 80,
      competitiveHSCPercent: 90,
      englishRequirement:
        "IELTS 6.5 / TOEFL iBT 87 / BUEPT (Bilkent English Proficiency Exam) passing grade. SAT/ACT or TR-YÖS required.",
      yosRequired: false,
      yosNote: "SAT/ACT or TR-YÖS accepted in lieu of YÖS",
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "Motivation letter",
        "English proficiency certificate",
        "Passport-size photos",
        "Reference letters (optional but helpful)",
      ],
      applicationPortal: "https://stars.bilkent.edu.tr/intapp",
    },
    campusHighlights:
      "Self-contained campus in Bilkent district of Ankara. Advanced computer labs, concert hall, sports facilities, and rich digital library. Research ties to MIT and Cambridge.",
    notes:
      "Türkiye Bursları covers 100 % tuition (≈$17,600/year). Entirely English-medium. Highly prestigious and competitive. Generous scholarship packages for strong applicants.",
  },

  // ── 7. Hacettepe University ──────────────────────────────────────────────────
  {
    universityName: "Hacettepe University",
    qsWorldRank2026: 571,
    location: { city: "Ankara", country: "Turkey" },
    universityType: "Public",
    website: "https://www.hacettepe.edu.tr",
    contact: {
      email: "international@hacettepe.edu.tr",
      phone: "+90-312-305-1000",
      internationalAdmissionsPortal:
        "https://internationalstudent.hacettepe.edu.tr",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 530,
        annualTuitionTRY: 18020,
        courseOverview:
          "Technology-driven curriculum covering software engineering, embedded systems, networks, AI, and advanced theoretical CS. Strong research output, particularly in biomedical informatics. Taught in English.",
        courseLink: "https://www.cs.hacettepe.edu.tr",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "bilgisayar@hacettepe.edu.tr",
          departmentPhone: "+90-312-297-7500",
          departmentWebsite: "https://www.cs.hacettepe.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: {
        available: true,
        programName: "Artificial Intelligence Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 530,
        annualTuitionTRY: 18020,
        courseOverview:
          "The first AI Engineering programme in Turkey. Covers machine learning, statistical modelling, data visualisation, and NLP. Taught in English.",
        courseLink: "https://www.cs.hacettepe.edu.tr",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "bilgisayar@hacettepe.edu.tr",
          departmentPhone: "+90-312-297-7500",
          departmentWebsite: "https://www.cs.hacettepe.edu.tr",
        },
      },
    },
    admissionRequirements: {
      minHSCPercent: 70,
      competitiveHSCPercent: 80,
      englishRequirement:
        "TOEFL iBT 79 / IELTS 6.5. Exempt if previous education was fully in English. SAT ≥ 1200 or TR-YÖS.",
      yosRequired: true,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "YÖS result",
        "English proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://internationalstudent.hacettepe.edu.tr",
    },
    campusHighlights:
      "Vast Beytepe campus in Ankara with high-tech laboratories and diverse research hubs. Premier research university — strong option for students targeting postgraduate studies.",
    notes:
      "Türkiye Bursları covers 100 % tuition. Self-pay tuition extremely low (≈$530/year). Offers Turkey's first AI Engineering degree. CE programme taught in English. YÖS required.",
  },

  // ── 8. Istanbul University ───────────────────────────────────────────────────
  {
    universityName: "Istanbul University",
    qsWorldRank2026: 628,
    location: { city: "Istanbul", country: "Turkey" },
    universityType: "Public",
    website: "https://www.istanbul.edu.tr",
    contact: {
      email: "international@istanbul.edu.tr",
      phone: "+90-212-440-0000",
      internationalAdmissionsPortal:
        "https://www.istanbul.edu.tr/en/uluslararasi-ogrenci",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 1000,
        annualTuitionTRY: 34000,
        courseOverview:
          "Strong focus on programming, networking systems, algorithms, database design, and hardware architectures. One of Turkey's oldest and largest universities (founded 1453).",
        courseLink: "https://bilgisayar.istanbul.edu.tr",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "bilgisayarmuh@istanbul.edu.tr",
          departmentPhone: "+90-212-473-7070",
          departmentWebsite: "https://bilgisayar.istanbul.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: {
        available: true,
        programName: "Information Systems and Technologies (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "Turkish",
        annualTuitionUSD: 1800,
        annualTuitionTRY: 61200,
        courseOverview:
          "Covers database management, enterprise systems, information security, and IT infrastructure. Taught in Turkish with some English electives.",
        courseLink: "https://www.istanbul.edu.tr/en",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: null,
      },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 60,
      competitiveHSCPercent: 75,
      englishRequirement:
        "TOEFL iBT 79 / IELTS 6.0 for English-medium programmes. Turkish proficiency (TÖMER B2) required for Turkish-medium programmes.",
      yosRequired: true,
      yosNote: "Requires Istanbul University's own İÜYÖS exam or TR-YÖS",
      requiredDocs: [
        "HSC certificate & transcript (with notarised Turkish translation)",
        "Passport copy",
        "YÖS / İÜYÖS result",
        "English or Turkish proficiency certificate (as applicable)",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://yos.istanbul.edu.tr",
    },
    campusHighlights:
      "Turkey's oldest university. Historic main campus in Beyazıt / Fatih, Istanbul. Rich libraries and large student community.",
    notes:
      "Türkiye Bursları covers 100 % tuition. CE programme taught in English. IT programme in Turkish — 1-year TÖMER course (included in TB scholarship) required. Lower entry requirements make this more accessible. Very affordable even without scholarship.",
  },

  // ── 9. Ankara University ─────────────────────────────────────────────────────
  {
    universityName: "Ankara University",
    qsWorldRank2026: 697,
    location: { city: "Ankara", country: "Turkey" },
    universityType: "Public",
    website: "https://www.ankara.edu.tr",
    contact: {
      email: "international@ankara.edu.tr",
      phone: "+90-312-203-3000",
      internationalAdmissionsPortal:
        "https://erasmus.ankara.edu.tr/international-students/",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 1800,
        annualTuitionTRY: 61200,
        courseOverview:
          "Covers software engineering paradigms, computer architecture, algorithms, embedded systems, and database engineering. Research connections in cybersecurity and data management.",
        courseLink: "https://comp.eng.ankara.edu.tr",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "comp@eng.ankara.edu.tr",
          departmentPhone: "+90-312-203-3300",
          departmentWebsite: "https://comp.eng.ankara.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 60,
      competitiveHSCPercent: 75,
      englishRequirement:
        "TOEFL iBT 79 / IELTS 6.0. SAT ≥ 1200 or TR-YÖS accepted.",
      yosRequired: true,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "YÖS result",
        "English proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://ugadmissions.ankara.edu.tr",
    },
    campusHighlights:
      "Turkey's first modern public university (est. 1946). Central Ankara location with extensive library and research facilities in cybersecurity and computing.",
    notes:
      "Türkiye Bursları covers 100 % tuition. CE programme taught in English. Lower admission threshold — accessible for students with moderate grades. Self-pay tuition ≈ $1,800/year.",
  },

  // ── 10. Yıldız Technical University (YTU) ───────────────────────────────────
  {
    universityName: "Yıldız Technical University (YTU)",
    qsWorldRank2026: 741,
    location: { city: "Istanbul", country: "Turkey" },
    universityType: "Public",
    website: "https://www.yildiz.edu.tr",
    contact: {
      email: "foreign@yildiz.edu.tr",
      phone: "+90-212-383-4000",
      internationalAdmissionsPortal: "http://www.admissions.yildiz.edu.tr",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 1500,
        annualTuitionTRY: 51000,
        courseOverview:
          "Accredited programme covering programming paradigms, data structures, computer networks, AI, and microprocessors. Research groups in computer vision and intelligent systems. Strong industry internship connections across Istanbul.",
        courseLink: "https://ce.yildiz.edu.tr",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "komuh@yildiz.edu.tr",
          departmentPhone: "+90-212-383-5700",
          departmentWebsite: "https://bilgisayar.yildiz.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 65,
      competitiveHSCPercent: 80,
      englishRequirement:
        "TOEFL iBT 79 / IELTS 6.0 / YTU English Proficiency Exam. YTUYÖS / TR-YÖS / SAT or ACT required.",
      yosRequired: true,
      yosNote: "YTUYÖS or TR-YÖS accepted",
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "YÖS result",
        "English proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://admissions.yildiz.edu.tr",
    },
    campusHighlights:
      "Historic Beşiktaş campus and modern Davutpaşa campus (hosts YTU Technopark — one of Istanbul's largest technology parks). Engineering tradition dating to 1911.",
    notes:
      "Türkiye Bursları covers 100 % tuition. Self-pay tuition ≈ $1,500/year. CE programme taught in English. YÖS required. Good prospects for students with moderate grades.",
  },

  // ── 11. Gazi University ──────────────────────────────────────────────────────
  {
    universityName: "Gazi University",
    qsWorldRank2026: 915,
    location: { city: "Ankara", country: "Turkey" },
    universityType: "Public",
    website: "https://www.gazi.edu.tr",
    contact: {
      email: "international@gazi.edu.tr",
      phone: "+90-312-202-1000",
      internationalAdmissionsPortal:
        "https://www.gazi.edu.tr/posts/category/view/id/3",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "Turkish",
        annualTuitionUSD: 715,
        annualTuitionTRY: 24310,
        courseOverview:
          "Comprehensive curriculum covering database systems, microprocessors, software architecture, algorithms, AI, and networking. Active research in computer vision and machine learning. Taught in Turkish.",
        courseLink: "https://bm.gazi.edu.tr",
        applicationDeadline: "June 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "bm@gazi.edu.tr",
          departmentPhone: "+90-312-582-3000",
          departmentWebsite: "https://bm.gazi.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: {
        available: true,
        programName: "Information Systems Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "Turkish",
        annualTuitionUSD: 715,
        annualTuitionTRY: 24310,
        courseOverview:
          "Covers IT infrastructure, systems management, enterprise applications, and information security. Practical focus with industry projects. Taught in Turkish.",
        courseLink: "https://www.gazi.edu.tr",
        applicationDeadline: "June 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: null,
      },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 60,
      competitiveHSCPercent: 80,
      englishRequirement:
        "Not applicable — programmes taught in Turkish. Requires Gazi TÖMER C1 proficiency. TR-YÖS minimum 400 points.",
      yosRequired: true,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "YÖS result",
        "Turkish proficiency certificate (TÖMER C1)",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://obs.gazi.edu.tr/oibs/foa_app/login.aspx",
    },
    campusHighlights:
      "One of Ankara's largest universities (30+ faculties). State-of-the-art manufacturing engineering and computational research facilities in the city centre.",
    notes:
      "Türkiye Bursları covers 100 % tuition. Programmes in Turkish — mandatory TÖMER year (included in TB). YÖS required. One of the more accessible public universities for students with average grades.",
  },

  // ── 12. Dokuz Eylül University (DEU) ─────────────────────────────────────────
  {
    universityName: "Dokuz Eylül University (DEU)",
    qsWorldRank2026: "1001–1200",
    location: { city: "Izmir", country: "Turkey" },
    universityType: "Public",
    website: "https://www.deu.edu.tr",
    contact: {
      email: "international@deu.edu.tr",
      phone: "+90-232-412-1212",
      internationalAdmissionsPortal: "https://international.deu.edu.tr",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English & Turkish",
        annualTuitionUSD: 800,
        annualTuitionTRY: 27200,
        courseOverview:
          "State engineering curriculum covering data structures, software development methodologies, embedded systems, AI, and machine learning. Strong regional tech industry connections in Izmir.",
        courseLink: "https://bilgisayar.deu.edu.tr",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "ceng@deu.edu.tr",
          departmentPhone: "+90-232-412-7010",
          departmentWebsite: "https://bilgisayar.deu.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 60,
      competitiveHSCPercent: 75,
      englishRequirement:
        "TOEFL iBT 78. For Turkish-medium sections: TÖMER B2 required. TR-YÖS / SAT or DEYÖS accepted.",
      yosRequired: true,
      yosNote: "DEYÖS (DEU's own exam) or TR-YÖS accepted",
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "YÖS / DEYÖS result",
        "English or Turkish proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://ogr.deu.edu.tr",
    },
    campusHighlights:
      "Large, active campus in coastal Izmir (Turkey's third-largest city). Mediterranean lifestyle, growing international student community, strong computing research environment.",
    notes:
      "Türkiye Bursları covers 100 % tuition. Izmir is very affordable compared to Istanbul or Ankara. Good option for students seeking a public university outside the two major cities.",
  },

  // ── 13. Ege University ────────────────────────────────────────────────────────
  {
    universityName: "Ege University",
    qsWorldRank2026: "1001–1200",
    location: { city: "Izmir", country: "Turkey" },
    universityType: "Public",
    website: "https://www.ege.edu.tr",
    contact: {
      email: "uluslararasi@ege.edu.tr",
      phone: "+90-232-311-1111",
      internationalAdmissionsPortal: "https://international.ege.edu.tr",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "Turkish",
        annualTuitionUSD: 470,
        annualTuitionTRY: 15980,
        courseOverview:
          "Established state programme covering algorithms, data structures, AI, networks, and software engineering. Research active in medical informatics and data processing. Taught in Turkish.",
        courseLink: "https://bilmuh.ege.edu.tr",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "bilgisayar@ege.edu.tr",
          departmentPhone: "+90-232-388-4000",
          departmentWebsite: "https://bilmuh.ege.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 60,
      competitiveHSCPercent: 75,
      englishRequirement:
        "Not applicable — programme taught in Turkish. Requires Ege TÖMER C1 proficiency. EGEYÖS (Ege University's own exam) exclusively accepted.",
      yosRequired: true,
      yosNote: "EGEYÖS only — TR-YÖS not accepted",
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "EGEYÖS result",
        "Turkish proficiency certificate (TÖMER C1)",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://oidb.ege.edu.tr",
    },
    campusHighlights:
      "One of Turkey's largest and most beautiful campuses in Bornova, Izmir (7 km²). Botanical gardens, highly active International Computer Institute, diverse research presence.",
    notes:
      "Türkiye Bursları covers 100 % tuition. Requires EGEYÖS — its own exclusive exam. Programme in Turkish — mandatory TÖMER year. Affordable Izmir living costs. Lower competition than Ankara/Istanbul universities.",
  },

  // ── 14. Istanbul Medipol University ─────────────────────────────────────────
  {
    universityName: "Istanbul Medipol University",
    qsWorldRank2026: "QS Europe 601–650 (2026)",
    location: { city: "Istanbul", country: "Turkey" },
    universityType: "Private",
    website: "https://www.medipol.edu.tr",
    contact: {
      email: "international@medipol.edu.tr",
      phone: "+90-212-444-1453",
      internationalAdmissionsPortal:
        "https://www.medipol.edu.tr/en/international-students",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [
      TÜRKIYE_BURSLARI,
      {
        name: "Medipol University Merit Scholarship",
        coverage: "25 %–75 % tuition waiver based on academic achievement",
        eligibility:
          "International students with strong HSC results; assessed through university admissions portal.",
        applyLink: "https://www.medipol.edu.tr/en/international-students",
      },
    ],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 7000,
        annualTuitionTRY: 238000,
        courseOverview:
          "Modern curriculum covering programming, AI, data structures, networks, and software engineering. Benefits from Medipol's strong healthcare-tech research environment. 100 % English.",
        courseLink:
          "https://www.medipol.edu.tr/en/faculty-of-engineering-and-natural-sciences",
        applicationDeadline:
          "August 2026 for 2026–27 intake; rolling admissions",
        intakeMonths: ["September", "February"],
        contact: {
          departmentEmail: "bilgisayar@medipol.edu.tr",
          departmentPhone: "+90-216-681-5300",
          departmentWebsite:
            "https://www.medipol.edu.tr/en/faculty-of-engineering-and-natural-sciences",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: {
        available: true,
        programName: "Artificial Intelligence Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 10000,
        annualTuitionTRY: 340000,
        courseOverview:
          "Covers predictive modelling, big data architectures, automated control, and deep learning platforms. Taught in English.",
        courseLink:
          "https://www.medipol.edu.tr/en/faculty-of-engineering-and-natural-sciences",
        applicationDeadline:
          "August 2026 for 2026–27 intake; rolling admissions",
        intakeMonths: ["September", "February"],
        contact: {
          departmentEmail: "ai@medipol.edu.tr",
          departmentPhone: "+90-212-444-1453",
          departmentWebsite:
            "https://www.medipol.edu.tr/en/faculty-of-engineering-and-natural-sciences",
        },
      },
    },
    admissionRequirements: {
      minHSCPercent: 60,
      competitiveHSCPercent: 80,
      englishRequirement:
        "TOEFL iBT 84 / IELTS 5.5. Or pass Medipol English Proficiency Exam.",
      yosRequired: false,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "English proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://mebis.medipol.edu.tr",
    },
    campusHighlights:
      "Kavacık / Beykoz campus with state-of-the-art technological labs and extensive engineering design complexes. One of the fastest-growing private universities in Turkey, popular with South Asian and African international students.",
    notes:
      "Türkiye Bursları covers 100 % tuition. CE and AI programmes in English. February intake available. No YÖS required. Lower admission requirements — very accessible for Bangladeshi students.",
  },

  // ── 15. Bahçeşehir University (BAU) ──────────────────────────────────────────
  {
    universityName: "Bahçeşehir University (BAU)",
    qsWorldRank2026: "THE 801–1000 (2026)",
    location: { city: "Istanbul", country: "Turkey" },
    universityType: "Private",
    website: "https://www.bau.edu.tr",
    contact: {
      email: "international@bau.edu.tr",
      phone: "+90-212-381-0200",
      internationalAdmissionsPortal: "https://apply.bau.edu.tr",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [
      TÜRKIYE_BURSLARI,
      {
        name: "BAU International Merit Scholarship",
        coverage: "25 %–100 % tuition waiver; applied at time of admission",
        eligibility:
          "International students with strong HSC GPA; assessed automatically during admission review. No separate application.",
        applyLink: "https://apply.bau.edu.tr",
      },
    ],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 8500,
        annualTuitionTRY: 289000,
        courseOverview:
          "English-medium programme covering AI, algorithms, software engineering, mobile development, and cybersecurity fundamentals. Strong European exchange partnerships and active career placement in Istanbul.",
        courseLink: "https://engineering.bau.edu.tr/computer-engineering",
        applicationDeadline:
          "August 2026 for 2026–27 intake; rolling admissions",
        intakeMonths: ["September", "February"],
        contact: {
          departmentEmail: "ce@bau.edu.tr",
          departmentPhone: "+90-212-381-0205",
          departmentWebsite:
            "https://engineering.bau.edu.tr/computer-engineering",
        },
      },
      CS: { available: false },
      CyberSecurity: {
        available: true,
        programName: "Cyber Security Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 8500,
        annualTuitionTRY: 289000,
        courseOverview:
          "One of Turkey's few undergraduate Cyber Security Engineering programmes in English. Covers network security, cryptography, ethical hacking, digital forensics, and information security management.",
        courseLink: "https://engineering.bau.edu.tr/cyber-security-engineering",
        applicationDeadline:
          "August 2026 for 2026–27 intake; rolling admissions",
        intakeMonths: ["September", "February"],
        contact: {
          departmentEmail: "ce@bau.edu.tr",
          departmentPhone: "+90-212-381-0205",
          departmentWebsite:
            "https://engineering.bau.edu.tr/cyber-security-engineering",
        },
      },
      IT: { available: false },
      DataScience: {
        available: true,
        programName: "Artificial Intelligence Engineering / Data Science (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 8500,
        annualTuitionTRY: 289000,
        courseOverview:
          "AI Engineering with tracks in data science, machine learning, and big data analytics. Covers Python, statistical modelling, deep learning, and data engineering pipelines. 100 % English.",
        courseLink: "https://engineering.bau.edu.tr",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September", "February"],
        contact: {
          departmentEmail: "ce@bau.edu.tr",
          departmentPhone: "+90-212-381-0205",
          departmentWebsite: "https://engineering.bau.edu.tr",
        },
      },
    },
    admissionRequirements: {
      minHSCPercent: 55,
      competitiveHSCPercent: 80,
      englishRequirement:
        "IELTS 5.5 / TOEFL iBT 60. Or BAU English Proficiency Exam.",
      yosRequired: false,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "English proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://apply.bau.edu.tr",
    },
    campusHighlights:
      "Beşiktaş campus steps from the Bosphorus. Campuses also in Berlin, Washington DC, and Miami. CO-OP programme integrates industry placements into the curriculum.",
    notes:
      "Türkiye Bursları covers 100 % tuition. BAU also offers 25–100 % own merit scholarships. Offers CE, Cyber Security, and Data Science — all in English. February intake. No YÖS required. Very popular with South Asian students. Lowest HSC entry threshold among private universities listed.",
  },

  // ── 16. Atılım University ─────────────────────────────────────────────────────
  {
    universityName: "Atılım University",
    qsWorldRank2026: "QS Europe 651–700 (2026)",
    location: { city: "Ankara", country: "Turkey" },
    universityType: "Private",
    website: "https://www.atilim.edu.tr",
    contact: {
      email: "international@atilim.edu.tr",
      phone: "+90-312-586-8000",
      internationalAdmissionsPortal:
        "https://www.atilim.edu.tr/en/international",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [
      TÜRKIYE_BURSLARI,
      {
        name: "Atılım University Full Scholarship",
        coverage: "100 % tuition waiver for qualifying international students",
        eligibility:
          "International students with outstanding academic records; assessed during admission.",
        applyLink: "https://www.atilim.edu.tr/en/international",
      },
    ],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 9800,
        annualTuitionTRY: 333200,
        courseOverview:
          "100 % English-medium. Covers algorithms, software systems, AI, embedded systems, and cybersecurity. Research-active in robotics and intelligent systems. Small cohort sizes allow personalised mentorship.",
        courseLink: "https://ce.atilim.edu.tr/en",
        applicationDeadline:
          "August 2026 for 2026–27 intake; rolling admissions",
        intakeMonths: ["September", "February"],
        contact: {
          departmentEmail: "cse@atilim.edu.tr",
          departmentPhone: "+90-312-586-8200",
          departmentWebsite: "https://ce.atilim.edu.tr/en",
        },
      },
      CS: { available: false },
      CyberSecurity: {
        available: true,
        programName: "Cyber Security Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 9800,
        annualTuitionTRY: 333200,
        courseOverview:
          "One of Turkey's few standalone undergraduate cybersecurity programmes. Covers network security, ethical hacking, cryptography, malware analysis, and digital forensics. 100 % English.",
        courseLink: "https://www.atilim.edu.tr/en/cyber-security-engineering",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September", "February"],
        contact: {
          departmentEmail: "cyber@atilim.edu.tr",
          departmentPhone: "+90-312-586-8000",
          departmentWebsite:
            "https://www.atilim.edu.tr/en/cyber-security-engineering",
        },
      },
      IT: {
        available: true,
        programName: "Information Systems Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 9800,
        annualTuitionTRY: 333200,
        courseOverview:
          "Integrates software systems design with business networks, covering database management, systems administration, and enterprise software architectures. 100 % English.",
        courseLink:
          "https://www.atilim.edu.tr/en/information-systems-engineering",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September", "February"],
        contact: {
          departmentEmail: "ise@atilim.edu.tr",
          departmentPhone: "+90-312-586-8000",
          departmentWebsite: "https://www.atilim.edu.tr",
        },
      },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 60,
      competitiveHSCPercent: 80,
      englishRequirement:
        "TOEFL iBT 75 / IELTS 6.0. Or pass Atılım English Proficiency Exam.",
      yosRequired: false,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "English proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://apply.atilim.edu.tr",
    },
    campusHighlights:
      "Modern self-contained Ankara campus with state-of-the-art engineering labs, flight training hangars, and metal forming facilities. Strong practical internship focus.",
    notes:
      "Türkiye Bursları eligible. Offers CE, Cyber Security, and IT — all in English. February intake. No YÖS required. One of the most affordable private universities for English-medium CS/Cybersecurity in Turkey. Highly recommended for Bangladeshi students.",
  },

  // ── 17. TED University (TEDU) ─────────────────────────────────────────────────
  {
    universityName: "TED University (TEDU)",
    qsWorldRank2026: "QS presence pending",
    location: { city: "Ankara", country: "Turkey" },
    universityType: "Private",
    website: "https://www.tedu.edu.tr",
    contact: {
      email: "international@tedu.edu.tr",
      phone: "+90-312-585-0000",
      internationalAdmissionsPortal:
        "https://www.tedu.edu.tr/en/international-students",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [
      TÜRKIYE_BURSLARI,
      {
        name: "TEDU Merit Scholarship",
        coverage:
          "25 %–100 % tuition waiver; assessed automatically during admissions",
        eligibility:
          "All international applicants; merit-based. No separate application required.",
        applyLink: "https://www.tedu.edu.tr/en/international-students",
      },
    ],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 9500,
        annualTuitionTRY: 323000,
        courseOverview:
          "100 % English-medium programme built around software engineering, AI, human-computer interaction, and systems programming. Unique liberal arts–engineering model — critical thinking integrated with technical skills. Small classes (avg. 25–30 students).",
        courseLink: "https://ceng.tedu.edu.tr/en/",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "ceng@tedu.edu.tr",
          departmentPhone: "+90-312-585-0120",
          departmentWebsite: "https://ceng.tedu.edu.tr/en/",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: {
        available: true,
        programName: "Data Science (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 9500,
        annualTuitionTRY: 323000,
        courseOverview:
          "One of Turkey's few standalone Data Science bachelor's degrees. Covers statistical methods, machine learning, big data tools, Python/R programming, and data visualisation. 100 % English.",
        courseLink: "https://www.tedu.edu.tr/en/data-science",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "ceng@tedu.edu.tr",
          departmentPhone: "+90-312-585-0000",
          departmentWebsite: "https://www.tedu.edu.tr/en/data-science",
        },
      },
    },
    admissionRequirements: {
      minHSCPercent: 65,
      competitiveHSCPercent: 80,
      englishRequirement:
        "TOEFL iBT 79 / IELTS 6.0. Or pass TEDU English Proficiency Exam.",
      yosRequired: false,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "English proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://apply.tedu.edu.tr",
    },
    campusHighlights:
      "Compact modern campus in central Ankara. International atmosphere, small class sizes, active student organisations. Founded by the Turkish Education Association (TED).",
    notes:
      "Türkiye Bursları eligible. Self-pay tuition ≈ $9,500/year. Offers both CE and a standalone Data Science degree in English — rare in Turkey. No YÖS required. Personalised attention. Highly suitable for Bangladeshi students.",
  },

  // ── 18. TOBB University of Economics and Technology (TOBB ETU) ───────────────
  {
    universityName: "TOBB University of Economics and Technology (TOBB ETU)",
    qsWorldRank2026: "QS Europe 651–700 (2026)",
    location: { city: "Ankara", country: "Turkey" },
    universityType: "Private",
    website: "https://www.etu.edu.tr",
    contact: {
      email: "international@etu.edu.tr",
      phone: "+90-312-292-4000",
      internationalAdmissionsPortal: "https://www.etu.edu.tr/en/uluslararasi",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [
      TÜRKIYE_BURSLARI,
      {
        name: "TOBB ETU University Scholarship",
        coverage:
          "Full / partial tuition waiver (tuition only — no dormitory support for international students)",
        eligibility:
          "All international applicants considered; strong academic record required for full scholarship.",
        applyLink:
          "https://www.etu.edu.tr/en/uluslararasi/sayfa/tuition-fees-and-scholarship-opportunities",
      },
    ],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 16500,
        annualTuitionTRY: 561000,
        courseOverview:
          "Industry-connected English-medium programme backed by TOBB (Union of Chambers of Commerce). Covers software engineering, AI, embedded systems, and computer networks. Unique 3-semester academic calendar with mandatory CO-OP internship programme.",
        courseLink: "https://ceng.etu.edu.tr/en",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "ceng@etu.edu.tr",
          departmentPhone: "+90-312-292-4133",
          departmentWebsite: "https://ceng.etu.edu.tr/en",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: {
        available: true,
        programName: "Artificial Intelligence Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 16500,
        annualTuitionTRY: 561000,
        courseOverview:
          "Covers machine learning, statistical computing, neural systems, and data science methodologies. 100 % English. Part of TOBB ETU's 3-semester CO-OP model.",
        courseLink:
          "https://www.etu.edu.tr/en/department/artificial-intelligence-engineering",
        applicationDeadline: "July 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "ai@etu.edu.tr",
          departmentPhone: "+90-312-292-4000",
          departmentWebsite:
            "https://www.etu.edu.tr/en/department/artificial-intelligence-engineering",
        },
      },
    },
    admissionRequirements: {
      minHSCPercent: 70,
      competitiveHSCPercent: 80,
      englishRequirement:
        "TOEFL iBT 79 / IELTS 6.0. Or pass TOBB ETU English Proficiency Exam. SAT or TR-YÖS recommended.",
      yosRequired: false,
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "English proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://www.etu.edu.tr/en/uluslararasi",
    },
    campusHighlights:
      "Stunning modern campus in Söğütözü, Ankara, funded by Turkey's largest business federation. Active startup incubation centre. Exceptional industry links with leading Turkish companies.",
    notes:
      "Türkiye Bursları covers 100 % tuition (≈$16,500/year). Own scholarships are tuition-only. Mandatory 3-semester CO-OP integrates internships. CE and AI programmes in English. No YÖS required. Excellent for students prioritising industry connections.",
  },

  // ── 19. Izmir Institute of Technology (IZTECH) ───────────────────────────────
  {
    universityName: "Izmir Institute of Technology (IZTECH)",
    qsWorldRank2026: "QS Europe 444 (2026)",
    location: { city: "Izmir (Urla)", country: "Turkey" },
    universityType: "Public",
    website: "https://www.iyte.edu.tr",
    contact: {
      email: "international@iyte.edu.tr",
      phone: "+90-232-750-6000",
      internationalAdmissionsPortal: "https://international.iyte.edu.tr",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English",
        annualTuitionUSD: 900,
        annualTuitionTRY: 30600,
        courseOverview:
          "Science-focused curriculum covering software paradigms, database security, computer architecture, algorithms, and microelectronics. English-medium public university — exceptional value. Strong research output relative to size. Adjacent to Izmir Technology Development Zone (Teknopark Izmir).",
        courseLink: "https://ceng.iyte.edu.tr/en",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "ceng@iyte.edu.tr",
          departmentPhone: "+90-232-750-7860",
          departmentWebsite: "https://ceng.iyte.edu.tr/en",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 65,
      competitiveHSCPercent: 80,
      englishRequirement:
        "TOEFL iBT 78 / IELTS 6.0. Or pass IZTECH English Proficiency Exam. IZTECH is a fully English-medium institution. TR-YÖS or SAT ≥ 1200 required.",
      yosRequired: true,
      yosNote: "TR-YÖS or SAT accepted",
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "YÖS or SAT result",
        "English proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://international.iyte.edu.tr",
    },
    campusHighlights:
      "Beautiful Aegean Sea campus in Urla, Izmir. Specialised technology institute model (similar to IITs). Exceptional lab facilities, strong research culture, tight-knit international community. Teknopark Izmir on-site.",
    notes:
      "Türkiye Bursları covers 100 % tuition. Self-pay tuition ≈ $900/year — extraordinary value as an English-medium public university. YÖS required. Ranked QS Europe top 500. Izmir offers affordable living. Turkey's premier research-focused institute of technology.",
  },

  // ── 20. Gebze Technical University (GTU) ─────────────────────────────────────
  {
    universityName: "Gebze Technical University (GTU)",
    qsWorldRank2026: "QS Europe 375 (2026)",
    location: { city: "Kocaeli (near Istanbul)", country: "Turkey" },
    universityType: "Public",
    website: "https://www.gtu.edu.tr",
    contact: {
      email: "international@gtu.edu.tr",
      phone: "+90-262-605-1000",
      internationalAdmissionsPortal: "https://international.gtu.edu.tr",
    },
    turkiyeBurslarıEligible: true,
    scholarships: [TÜRKIYE_BURSLARI],
    departments: {
      CSE: {
        available: true,
        programName: "Computer Engineering (BS)",
        degreeLevel: "Bachelor's (4 years)",
        language: "English & Turkish",
        annualTuitionUSD: 700,
        annualTuitionTRY: 23800,
        courseOverview:
          "Research-intensive programme covering algorithms, systems programming, AI, networks, and software engineering. Adjacent to TÜBİTAK Marmara Research Centre and GOSB Technology Park — unique industry-research collaboration for students.",
        courseLink: "https://bilgisayar.gtu.edu.tr/en",
        applicationDeadline: "August 2026 for 2026–27 intake",
        intakeMonths: ["September"],
        contact: {
          departmentEmail: "cse@gtu.edu.tr",
          departmentPhone: "+90-262-605-2200",
          departmentWebsite: "https://cse.gtu.edu.tr",
        },
      },
      CS: { available: false },
      CyberSecurity: { available: false },
      IT: { available: false },
      DataScience: { available: false },
    },
    admissionRequirements: {
      minHSCPercent: 65,
      competitiveHSCPercent: 80,
      englishRequirement:
        "TOEFL iBT 78. Or pass GTU English Proficiency Exam. For Turkish-medium sections: TÖMER B2 required. TR-YÖS or SAT ≥ 1200 required.",
      yosRequired: true,
      yosNote: "TR-YÖS accepted",
      requiredDocs: [
        "HSC certificate & transcript",
        "Passport copy",
        "YÖS result",
        "English or Turkish proficiency certificate",
        "Motivation letter",
        "Passport-size photos",
      ],
      applicationPortal: "https://www.gtu.edu.tr/ogrenci",
    },
    campusHighlights:
      "Located in Kocaeli, Turkey's industrial heartland, ≈50 km from Istanbul. Adjacent to TÜBİTAK Marmara Research Centre and GOSB Technology Park. Top research university with outstanding industry internship pipeline.",
    notes:
      "Türkiye Bursları covers 100 % tuition. Self-pay tuition ≈ $700/year — among the cheapest. Ranked QS Europe top 500 (375th). YÖS required. Proximity to Istanbul and industrial parks gives excellent employment opportunities. Best value for research-oriented Bangladeshi students.",
  },
];

// ─── QUICK-REFERENCE SUMMARY ───────────────────────────────────────────────────

// Helper functions
export const getAvailablePrograms = (university) => {
  const programs = [];
  const deptKeys = Object.keys(university.departments);

  deptKeys.forEach((key) => {
    if (university.departments[key].available) {
      programs.push({
        key,
        ...university.departments[key],
      });
    }
  });

  return programs;
};

export const getMinimumTuition = (university) => {
  const programs = getAvailablePrograms(university);
  if (programs.length === 0) return null;
  return Math.min(
    ...programs
      .filter((p) => p.annualTuitionUSD !== null)
      .map((p) => p.annualTuitionUSD),
  );
};

export const hasEnglishPrograms = (university) => {
  const programs = getAvailablePrograms(university);
  return programs.some((p) => p.language.includes("English"));
};

export const getUniversityStats = (universities) => {
  const stats = {
    total: universities.length,
    tbEligible: universities.filter((u) => u.turkiyeBurslarıEligible).length,
    englishMedium: universities.filter((u) => hasEnglishPrograms(u)).length,
    cyberSecurity: universities.filter(
      (u) => u.departments.CyberSecurity?.available,
    ).length,
    dataScience: universities.filter(
      (u) => u.departments.DataScience?.available,
    ).length,
    publicCount: universities.filter((u) => u.universityType === "Public")
      .length,
    privateCount: universities.filter((u) => u.universityType === "Private")
      .length,
    noYos: universities.filter((u) => !u.admissionRequirements.yosRequired)
      .length,
    lowestTuition: Math.min(
      ...universities
        .map((u) => getMinimumTuition(u))
        .filter((t) => t !== null),
    ),
    febIntakeAvailable: universities.filter((u) =>
      getAvailablePrograms(u).some((p) => p.intakeMonths.includes("February")),
    ).length,
  };
  return stats;
};

export const summary = {
  totalUniversities: 20,
  allTurkiyeBurslarıEligible: true,
  englishMediumCSPrograms: [
    "METU",
    "ITU",
    "Koç",
    "Boğaziçi",
    "Sabancı",
    "Bilkent",
    "Hacettepe",
    "Istanbul University",
    "Ankara University",
    "Yıldız Technical",
    "Medipol",
    "BAU",
    "Atılım",
    "TED",
    "TOBB ETU",
    "IZTECH",
  ],
  standaloneCyberSecurityEnglish: ["BAU (Istanbul)", "Atılım (Ankara)"],
  dataScienceAIEnglish: [
    "BAU",
    "TED University",
    "ITU",
    "Hacettepe",
    "Medipol",
    "TOBB ETU",
  ],
  publicUniversities: [
    "METU",
    "ITU",
    "Boğaziçi",
    "Hacettepe",
    "Istanbul University",
    "Ankara University",
    "Yıldız Technical",
    "Gazi",
    "DEU",
    "Ege",
    "IZTECH",
    "GTU",
  ],
  privateUniversities: [
    "Koç",
    "Bilkent",
    "Sabancı",
    "Medipol",
    "BAU",
    "Atılım",
    "TED",
    "TOBB ETU",
  ],
  noYosRequired: [
    "Koç",
    "Sabancı",
    "Bilkent*",
    "Medipol",
    "BAU",
    "Atılım",
    "TED",
    "TOBB ETU",
  ],
  februaryIntakeAvailable: ["Medipol", "BAU", "Atılım"],
};
