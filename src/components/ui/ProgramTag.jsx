const tagStyles = {
  CSE: "bg-blue-900/20 text-blue-400 border-blue-400/30",
  CS: "bg-purple-900/20 text-purple-400 border-purple-400/30",
  CyberSecurity: "bg-red-900/20 text-red-400 border-red-400/30",
  DataScience: "bg-green-900/20 text-green-400 border-green-400/30",
  IT: "bg-yellow-900/20 text-yellow-400 border-yellow-400/30",
};

const tagLabels = {
  CSE: "CSE",
  CS: "CS",
  CyberSecurity: "Cyber",
  DataScience: "DS",
  IT: "IT",
};

export default function ProgramTag({ program }) {
  const key = program.key;
  const style = tagStyles[key] || tagStyles.CSE;
  const label = tagLabels[key] || key;

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono border ${style}`}
    >
      {label}
    </span>
  );
}
