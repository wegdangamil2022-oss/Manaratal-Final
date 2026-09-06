const fs = require('fs');

let pageCode = fs.readFileSync('src/components/MajorsSearchPage.tsx', 'utf8');

const oldCardRegex = /<div\n\s*key=\{major\.id\}\n\s*className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"[\s\S]*?(?=\n\s*\)\)\n\s*\)\}\n\s*<\/div>\n\s*<\/div>)/;

const newCard = `<div
                key={major.id}
                className="relative group bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Base Content */}
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center text-[#0F4B3A] shadow-inner mb-4 transition-all duration-300 group-hover:scale-95 group-hover:opacity-20">
                    {getIcon(major.iconName)}
                  </div>
                  <h3 className="text-base font-black text-slate-900 leading-tight font-['Cairo',sans-serif] mb-1.5 transition-all duration-300 group-hover:opacity-20">
                    {major.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-semibold font-sans mb-4 transition-all duration-300 group-hover:opacity-20">
                    {major.nameEn}
                  </p>
                  <div className="bg-slate-50 text-slate-600 border border-slate-100 px-3 py-1 rounded-full text-[10px] font-bold font-['Cairo',sans-serif] transition-all duration-300 group-hover:opacity-20 truncate max-w-full">
                    {major.category}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4 z-10 pointer-events-none group-hover:pointer-events-auto">
                  <button
                    onClick={(e) => {
                       e.stopPropagation();
                       if (onSelectMajor) onSelectMajor(major);
                    }}
                    className="w-full max-w-[200px] py-2.5 bg-[#0F4B3A] text-white rounded-xl text-xs font-bold shadow-md hover:bg-[#0A3528] hover:scale-105 active:scale-95 transition-all font-['Cairo',sans-serif] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    عرض التفاصيل
                  </button>
                  
                  <button
                    onClick={(e) => {
                       e.stopPropagation();
                       if (onToggleFavorite) onToggleFavorite(major.id);
                    }}
                    className={\`w-full max-w-[200px] py-2.5 rounded-xl text-xs font-bold shadow-sm hover:scale-105 active:scale-95 transition-all font-['Cairo',sans-serif] flex items-center justify-center gap-2 border cursor-pointer \${favoriteIds.includes(major.id) ? 'bg-red-50 text-red-600 border-red-200' : 'bg-white text-slate-700 border-slate-200 hover:text-red-600 hover:border-red-200'}\`}
                  >
                    <Heart className={\`w-4 h-4 \${favoriteIds.includes(major.id) ? 'fill-red-500 text-red-500' : ''}\`} />
                    {favoriteIds.includes(major.id) ? 'محفوظ في المفضلة' : 'حفظ في المفضلة'}
                  </button>
                </div>
              </div>`;

pageCode = pageCode.replace(oldCardRegex, newCard);
fs.writeFileSync('src/components/MajorsSearchPage.tsx', pageCode);
