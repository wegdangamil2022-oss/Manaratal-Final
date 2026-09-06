const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

// Fix eligibility boxes to be more compact and perfectly aligned
code = code.replace(
  /className="flex items-center gap-2\.5 px-3 py-2 rounded-2xl bg-slate-50\/80 hover:bg-slate-50 border border-slate-100\/90 transition-colors"/g,
  'className="flex items-start gap-2.5 px-3 py-1.5 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-100/90 transition-colors"'
);

code = code.replace(
  /className="w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs"/g,
  'className="w-3.5 h-3.5 mt-0.5 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs"'
);

code = code.replace(
  /<span className="text-\[10px\] font-bold text-slate-700 leading-tight">\s*\{condition\}\s*<\/span>/g,
  '<span className="text-[10px] font-bold text-slate-700 leading-tight pt-[1px]">\n                  {condition}\n                </span>'
);

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
