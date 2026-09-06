const fs = require('fs');

let pageCode = fs.readFileSync('src/components/MajorsSearchPage.tsx', 'utf8');

// Revert the container back to flex column
pageCode = pageCode.replace(
  '<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">',
  '<div className="flex flex-col gap-2.5 sm:gap-3 w-full">'
);

// Replace the card
const oldCardRegex = /<div\n\s*key=\{major\.id\}\n\s*className="relative group bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"[\s\S]*?(?=\n\s*\)\)\n\s*\)\}\n\s*<\/div>\n\s*<\/div>)/;

const newCard = `<div
                key={major.id}
                onClick={() => onSelectMajor && onSelectMajor(major)}
                className="group flex flex-row items-center justify-between p-2.5 sm:p-3 bg-white border border-slate-200 hover:border-[#0F4B3A]/40 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Right side: Icon + Info */}
                <div className="flex items-center gap-3 overflow-hidden flex-1">
                   {/* Icon */}
                   <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0F4B3A] shadow-inner group-hover:scale-105 transition-transform">
                      {getIcon(major.iconName)}
                   </div>
                   {/* Info */}
                   <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[13px] sm:text-[15px] font-black text-slate-900 truncate font-['Cairo',sans-serif] group-hover:text-[#0F4B3A] transition-colors">{major.name}</h3>
                        {major.code && (
                          <span className="shrink-0 bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold hidden sm:inline-block">{major.code}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5 text-[10px] sm:text-[11px] font-['Cairo',sans-serif]">
                         <span className="text-slate-500 font-semibold truncate max-w-[120px] sm:max-w-[180px]">{major.nameEn}</span>
                         <span className="text-slate-300 shrink-0">•</span>
                         <span className="text-emerald-700 font-bold truncate shrink-0">{major.category}</span>
                      </div>
                   </div>
                </div>

                {/* Left side: Buttons */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 mr-2 border-r border-slate-100 pr-2 sm:pr-3">
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       if (onToggleFavorite) onToggleFavorite(major.id);
                     }} 
                     className="p-1.5 sm:p-2 rounded-full hover:bg-red-50 text-slate-300 hover:text-red-500 transition-colors active:scale-90"
                     title="أضف إلى المفضلة"
                   >
                      <Heart className={\`w-4 h-4 sm:w-5 sm:h-5 \${favoriteIds && favoriteIds.includes(major.id) ? 'fill-red-500 text-red-500' : ''}\`} />
                   </button>
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       if (onSelectMajor) onSelectMajor(major);
                     }} 
                     className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0F4B3A] text-white text-[10px] sm:text-[11px] font-bold rounded-xl hover:bg-[#0A3528] transition-colors shadow-sm font-['Cairo',sans-serif] active:scale-95"
                   >
                      التفاصيل
                   </button>
                </div>
              </div>`;

pageCode = pageCode.replace(oldCardRegex, newCard);
fs.writeFileSync('src/components/MajorsSearchPage.tsx', pageCode);
