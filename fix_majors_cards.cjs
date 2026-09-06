const fs = require('fs');
let code = fs.readFileSync('src/components/MajorsSearchPage.tsx', 'utf8');

const oldCardRegex = /<div\s+key=\{major\.id\}[\s\S]*?(?=<\/div>\s*\}\)\)\}\s*<\/div>\s*\) : \()/;

const newCard = `<div
                key={major.id}
                onClick={() => onSelectMajor && onSelectMajor(major)}
                className="group relative w-full bg-white border-2 border-[#C8A24A]/75 hover:border-[#C8A24A] rounded-2xl sm:rounded-3xl shadow-[0_2px_10px_rgba(200,162,74,0.15)] hover:shadow-[0_4px_18px_rgba(200,162,74,0.28)] transition-all duration-300 cursor-pointer overflow-hidden active:scale-[0.99] select-none flex items-stretch"
              >
                {/* RIGHT WING / PILLAR */}
                <div className="w-8 sm:w-9 bg-[#0A3528] flex flex-col items-center justify-between py-2 px-0.5 relative shrink-0">
                  <div className="mt-2 text-white/90">
                    {getIcon(major.iconName)}
                  </div>
                  {/* Subtle Diagonal Gold Line Accent at Bottom */}
                  <div className="w-full relative h-4 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 30 20" fill="none">
                      <line x1="30" y1="20" x2="0" y2="0" stroke="#C8A24A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* MAIN BODY OF THE CARD */}
                <div className="flex-1 py-2.5 px-3 sm:px-3.5 flex flex-col justify-between gap-1.5 min-w-0">
                  
                  {/* Top Row: Badges */}
                  <div className="flex items-center justify-between gap-1.5 w-full">
                    <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                      <div className="bg-white border border-slate-200/80 rounded-lg px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-slate-800 shadow-2xs font-['Cairo',sans-serif]">
                        {major.category}
                      </div>
                      <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-emerald-800 shadow-2xs font-['Cairo',sans-serif]">
                        طلب: {major.futureDemand}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Title & Description */}
                  <div className="mt-1">
                    <h3 className="text-[13px] sm:text-[15px] font-black text-slate-900 leading-tight group-hover:text-[#0F4B3A] transition-colors font-['Cairo',sans-serif]">
                      {major.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium font-['Cairo',sans-serif] mt-0.5 truncate">
                      {major.nameEn}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 font-semibold font-['Cairo',sans-serif] mt-1.5 line-clamp-2 leading-relaxed">
                      {major.description}
                    </p>
                  </div>

                  {/* Badges/Tags for Degrees */}
                  {major.degreeLevels && major.degreeLevels.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {major.degreeLevels.map((lvl) => (
                        <span key={lvl} className="bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md text-[9px] font-bold">
                          {lvl}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom Row: Countries & Careers */}
                  <div className="flex flex-col gap-1.5 mt-2">
                    <div className="flex items-center gap-2 text-[10px] text-slate-700 bg-slate-50/80 p-2 rounded-xl border border-slate-100">
                      <Globe2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="font-bold text-[#0F4B3A] shrink-0">أفضل الوجهات:</span>
                      <span className="truncate">{major.topCountries.join(' • ')}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[10px] text-slate-700 bg-[#C8A24A]/5 p-2 rounded-xl border border-[#C8A24A]/10">
                      <Briefcase className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                      <span className="font-bold text-[#b58f38] shrink-0">الوظائف المستهدفة:</span>
                      <span className="truncate">{major.popularCareers.join(' • ')}</span>
                    </div>
                  </div>

                </div>
              </div>
`;

code = code.replace(oldCardRegex, newCard);
fs.writeFileSync('src/components/MajorsSearchPage.tsx', code);
