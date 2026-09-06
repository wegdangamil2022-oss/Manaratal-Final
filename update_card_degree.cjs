const fs = require('fs');

let pageCode = fs.readFileSync('src/components/MajorsSearchPage.tsx', 'utf8');

const oldInfoBlock = `<div className="flex items-center gap-1.5 flex-wrap">
                         <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold font-['Cairo',sans-serif] truncate">
                           {major.category}
                         </span>
                         {major.duration && (
                           <span className="flex items-center gap-1 bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold font-['Cairo',sans-serif] truncate max-w-[130px] sm:max-w-[200px]">
                             <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                             <span className="truncate">{major.duration}</span>
                           </span>
                         )}
                      </div>`;

const newInfoBlock = `<div className="flex items-center gap-1.5 flex-wrap">
                         <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold font-['Cairo',sans-serif] truncate">
                           {major.category}
                         </span>
                         {major.degreeLevels && major.degreeLevels.length > 0 && (
                           <span className="flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold font-['Cairo',sans-serif] truncate">
                             <GraduationCap className="w-3 h-3 text-blue-500 shrink-0" />
                             <span className="truncate">{major.degreeLevels.join('، ')}</span>
                           </span>
                         )}
                         {major.duration && (
                           <span className="flex items-center gap-1 bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold font-['Cairo',sans-serif] truncate max-w-[130px] sm:max-w-[200px]">
                             <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                             <span className="truncate">{major.duration}</span>
                           </span>
                         )}
                      </div>`;

pageCode = pageCode.replace(oldInfoBlock, newInfoBlock);
fs.writeFileSync('src/components/MajorsSearchPage.tsx', pageCode);
