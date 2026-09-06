with open('src/components/UniversityDetailModal.tsx', 'r') as f:
    content = f.read()

import re

old_section = re.search(r'\{\/\* القسم الثاني: التصنيفات العالمية \*\/\}.*?<\/section>\n        \)\}', content, re.DOTALL)

if old_section:
    new_section = """{/* القسم الثاني: التصنيفات العالمية */}
        {university.rankings && university.rankings.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-4 sm:h-5 bg-[#C8A24A] rounded-full"></div>
              <h2 className="text-xs sm:text-[13px] font-black text-[#0F4B3A] leading-tight font-['Cairo',sans-serif]">التصنيفات العالمية</h2>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              {university.rankings.map((ranking, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-row items-center justify-between p-3.5 sm:p-4 transition-colors hover:bg-slate-50/80 ${
                    idx !== university.rankings!.length - 1 ? 'border-b border-slate-100/80' : ''
                  }`}
                >
                  <div className="flex flex-col gap-1 text-right flex-1 pr-1">
                    {ranking.link ? (
                      <a href={ranking.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1.5 w-fit">
                        <h3 className="text-[11px] sm:text-xs font-bold text-slate-800 group-hover/link:text-[#C8A24A] transition-colors font-['Cairo',sans-serif] leading-tight">
                          {ranking.name}
                        </h3>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-[#C8A24A] transition-colors shrink-0" />
                      </a>
                    ) : (
                      <h3 className="text-[11px] sm:text-xs font-bold text-slate-800 font-['Cairo',sans-serif] leading-tight">
                        {ranking.name}
                      </h3>
                    )}
                    <span className="text-[9.5px] sm:text-[10px] text-slate-400 font-semibold font-['Cairo',sans-serif]">
                      إصدار {ranking.year}
                    </span>
                  </div>
                  
                  <div className="shrink-0 pl-1">
                    <div className="bg-gradient-to-l from-[#C8A24A]/10 to-transparent border border-[#C8A24A]/20 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-[#C8A24A]" />
                      <span className="text-[11px] sm:text-xs font-black text-[#997728] tracking-wide" dir="ltr">{ranking.rank}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}"""
    
    content = content.replace(old_section.group(0), new_section)
    
    with open('src/components/UniversityDetailModal.tsx', 'w') as f:
        f.write(content)
    print("Successfully replaced.")
else:
    print("Could not find the section.")
