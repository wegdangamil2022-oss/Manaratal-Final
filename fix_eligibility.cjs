const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

// Update Eligibility boxes
code = code.replace(
  /className="flex items-start gap-2\.5 p-3 rounded-2xl bg-slate-50\/80 hover:bg-slate-50 border border-slate-100\/90 transition-colors"/g,
  'className="flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-100/90 transition-colors"'
);

// Remove mt-0.5 from the dot container and adjust size to w-4 h-4
code = code.replace(
  /className="w-5 h-5 mt-0\.5 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs"/g,
  'className="w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs"'
);

// Decrease the gap of the list container from gap-2 to gap-1.5 for the Eligibility list
code = code.replace(
  /<div className="flex flex-col gap-2">\s*\{\[\s*'ألا يكون/g,
  '<div className="flex flex-col gap-1.5">\n            {[\n              \'ألا يكون'
);

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
