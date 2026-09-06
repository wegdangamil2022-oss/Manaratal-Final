const fs = require('fs');

// 1. Update MajorsSearchPage.tsx
let pageCode = fs.readFileSync('src/components/MajorsSearchPage.tsx', 'utf8');

if (!pageCode.includes('Heart,')) {
  pageCode = pageCode.replace(/RotateCcw\n} from 'lucide-react';/, "RotateCcw,\n  Heart\n} from 'lucide-react';");
}

pageCode = pageCode.replace(
  "interface MajorsSearchPageProps {",
  "interface MajorsSearchPageProps {\n  favoriteIds?: string[];\n  onToggleFavorite?: (id: string) => void;"
);

pageCode = pageCode.replace(
  "export const MajorsSearchPage: React.FC<MajorsSearchPageProps> = ({ \n  majors = MOCK_MAJORS,\n  onBack,\n  onSelectMajor\n}) => {",
  "export const MajorsSearchPage: React.FC<MajorsSearchPageProps> = ({ \n  majors = MOCK_MAJORS,\n  onBack,\n  onSelectMajor,\n  favoriteIds = [],\n  onToggleFavorite\n}) => {"
);

// We need to replace the entire <div ref={resultsRef} ...> list of cards
// To be safe, I'll replace everything from `filteredMajors.map((major) => (` to `))}</div></div></div>);};`
// Actually, I'll just use regex to replace the card.

const oldCardRegex = /<div\n\s*key=\{major\.id\}\n\s*onClick=\{[\s\S]*?(?=\n\s*\)\)\n\s*\)\}\n\s*<\/div>\n\s*<\/div>)/;

const newCard = `<div
                key={major.id}
                onClick={() => onSelectMajor && onSelectMajor(major)}
                className="group flex flex-row items-center justify-between p-2.5 sm:p-3 bg-white border border-slate-200 hover:border-[#0F4B3A]/40 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Right side: Icon + Info */}
                <div className="flex items-center gap-3 overflow-hidden flex-1">
                   {/* Icon */}
                   <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0F4B3A] shadow-inner group-hover:scale-105 transition-transform">
                      {getIcon(major.iconName, "w-5 h-5 sm:w-6 sm:h-6")}
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
                      <Heart className={\`w-4 h-4 sm:w-5 sm:h-5 \${favoriteIds.includes(major.id) ? 'fill-red-500 text-red-500' : ''}\`} />
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

// 2. Update App.tsx
let appCode = fs.readFileSync('src/App.tsx', 'utf8');

if (!appCode.includes('favoriteIds={favoriteIds}')) {
  appCode = appCode.replace(
    "<MajorsSearchPage \n              majors={MOCK_MAJORS}\n              onBack={() => {\n                setActiveTab('home');\n                setSelectedCategory('all');\n              }}\n              onSelectMajor={setSelectedMajor}\n            />",
    "<MajorsSearchPage \n              majors={MOCK_MAJORS}\n              onBack={() => {\n                setActiveTab('home');\n                setSelectedCategory('all');\n              }}\n              onSelectMajor={setSelectedMajor}\n              favoriteIds={favoriteIds}\n              onToggleFavorite={handleToggleFavorite}\n            />"
  );
}

fs.writeFileSync('src/App.tsx', appCode);
