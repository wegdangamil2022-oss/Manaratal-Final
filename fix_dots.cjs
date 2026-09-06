const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

code = code.replace(
  /<div key=\{idx\} className="flex items-start gap-2\.5 px-3 py-1\.5 rounded-xl bg-slate-50\/80 hover:bg-slate-50 border border-slate-100\/90 transition-colors">[\s\S]*?<\/span>\s*<\/div>/g,
  `<div key={idx} className="flex items-start gap-2 px-2.5 py-1.5 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-100/90 transition-colors">
                <div className="w-3.5 h-3.5 mt-[2px] rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8A24A]" />
                </div>
                <span className="text-[10px] font-bold text-slate-700 leading-snug">
                  {condition}
                </span>
              </div>`
);

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
