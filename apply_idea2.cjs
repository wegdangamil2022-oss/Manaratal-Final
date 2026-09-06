const fs = require('fs');

let pageCode = fs.readFileSync('src/components/MajorsSearchPage.tsx', 'utf8');

// Replace the grid container
pageCode = pageCode.replace(
  '<div className="flex flex-col gap-2.5 sm:gap-3 w-full">',
  '<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">'
);

// We need to replace the entire card inside the map loop.
// From `<div key={major.id}` to the end of the card.
const oldCardRegex = /<div\n\s*key=\{major\.id\}\n\s*onClick=\{[\s\S]*?(?=\n\s*\)\)\n\s*\)\}\n\s*<\/div>\n\s*<\/div>)/;

const newCard = `<div
                key={major.id}
                className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                {/* Top Half: Content (Clickable) */}
                <div 
                  className="p-4 sm:p-5 flex-1 cursor-pointer group"
                  onClick={() => onSelectMajor && onSelectMajor(major)}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                     <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0F4B3A] shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                       {getIcon(major.iconName)}
                     </div>
                     {major.code && (
                       <span className="bg-slate-50 text-slate-400 px-2 py-1 rounded-lg text-[10px] font-mono font-bold shrink-0">{major.code}</span>
                     )}
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight font-['Cairo',sans-serif] group-hover:text-[#0F4B3A] transition-colors mb-1.5">
                    {major.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-semibold font-sans mb-3 truncate">
                    {major.nameEn}
                  </p>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-1 rounded-lg text-[10px] font-bold font-['Cairo',sans-serif]">
                      طلب: {major.futureDemand}
                    </span>
                    <span className="bg-slate-50 text-slate-600 border border-slate-100 px-2 py-1 rounded-lg text-[10px] font-bold font-['Cairo',sans-serif] truncate max-w-[150px]">
                      {major.category}
                    </span>
                  </div>
                </div>

                {/* Bottom Half: Dual Actions */}
                <div className="grid grid-cols-2 border-t border-slate-100 divide-x divide-x-reverse divide-slate-100 bg-slate-50/50 mt-auto">
                  <button
                    onClick={(e) => {
                       e.stopPropagation();
                       if (onToggleFavorite) onToggleFavorite(major.id);
                    }}
                    className="py-3 sm:py-3.5 flex items-center justify-center gap-2 text-slate-500 hover:text-red-500 hover:bg-slate-100 transition-colors cursor-pointer group"
                  >
                    <Heart className={\`w-4 h-4 \${favoriteIds.includes(major.id) ? 'fill-red-500 text-red-500' : 'group-hover:scale-110 transition-transform'}\`} />
                    <span className="text-[11px] sm:text-xs font-bold font-['Cairo',sans-serif] mt-0.5">حفظ</span>
                  </button>
                  <button
                    onClick={(e) => {
                       e.stopPropagation();
                       if (onSelectMajor) onSelectMajor(major);
                    }}
                    className="py-3 sm:py-3.5 flex items-center justify-center gap-2 text-[#0F4B3A] hover:bg-[#0F4B3A]/5 transition-colors cursor-pointer group"
                  >
                    <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] sm:text-xs font-bold font-['Cairo',sans-serif] mt-0.5">التفاصيل</span>
                  </button>
                </div>
              </div>`;

pageCode = pageCode.replace(oldCardRegex, newCard);
fs.writeFileSync('src/components/MajorsSearchPage.tsx', pageCode);
