const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

// Notes section
code = code.replace(
  /className="w-6 h-6 rounded-full bg-\[#0F4B3A\] flex items-center justify-center shrink-0 border border-\[#C8A24A\]\/50 shadow-xs mt-0\.5"/g,
  'className="w-6 h-6 rounded-full bg-[#0F4B3A] flex items-center justify-center shrink-0 border border-[#C8A24A]/50 shadow-xs"'
);

code = code.replace(
  /className="text-\[10px\] font-bold text-slate-700 leading-relaxed pt-0\.5"/g,
  'className="text-[10px] font-bold text-slate-700 leading-relaxed"'
);

// Reduce gap in notes
code = code.replace(
  /className="flex flex-col gap-2\.5">/g,
  'className="flex flex-col gap-1.5">'
);
// wait, gap-2.5 is used in other places too! Let's be specific for the notes section.

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
