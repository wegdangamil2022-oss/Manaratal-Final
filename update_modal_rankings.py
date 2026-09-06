with open('src/components/UniversityDetailModal.tsx', 'r') as f:
    content = f.read()

rankings_section = """        </section>

        {/* القسم الثاني: التصنيفات العالمية */}
        {university.rankings && university.rankings.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-4 sm:h-5 bg-[#C8A24A] rounded-full"></div>
              <h2 className="text-xs sm:text-[13px] font-black text-[#0F4B3A] leading-tight font-['Cairo',sans-serif]">التصنيفات العالمية</h2>
            </div>
            
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {university.rankings.map((ranking, idx) => (
                <div key={idx} className="shrink-0 w-52 sm:w-60 bg-white border border-slate-100 hover:border-[#C8A24A]/40 rounded-xl p-3 sm:p-4 shadow-sm snap-start relative overflow-hidden group transition-colors flex flex-col justify-between min-h-[100px]">
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#C8A24A]/5 rounded-bl-full -z-10" />
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                      {ranking.year}
                    </span>
                    <span className="text-xs sm:text-[13px] font-black text-[#C8A24A] flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5" />
                      <span dir="ltr">{ranking.rank}</span>
                    </span>
                  </div>

                  <div>
                    {ranking.link ? (
                      <a href={ranking.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1 group/link cursor-pointer">
                        <h3 className="text-[11px] sm:text-[11.5px] font-black text-[#0F4B3A] leading-snug group-hover/link:text-[#C8A24A] transition-colors line-clamp-2 font-['Cairo',sans-serif]">
                          {ranking.name}
                        </h3>
                        <ExternalLink className="w-3 h-3 text-[#C8A24A] shrink-0 mt-0.5 transform group-hover/link:-translate-y-0.5 group-hover/link:-translate-x-0.5 transition-all" />
                      </a>
                    ) : (
                      <h3 className="text-[11px] sm:text-[11.5px] font-black text-[#0F4B3A] leading-snug line-clamp-2 font-['Cairo',sans-serif]">
                        {ranking.name}
                      </h3>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>"""

content = content.replace("        </section>\n\n      </div>", rankings_section)

with open('src/components/UniversityDetailModal.tsx', 'w') as f:
    f.write(content)
