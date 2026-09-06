with open('src/components/ScholarshipsSearchPage.tsx', 'r') as f:
    lines = f.readlines()

# find start line
start_idx = 0
for i, line in enumerate(lines):
    if '{/* ========================================================================= */}' in line and 'HERO EMERALD BANNER' in lines[i+1]:
        start_idx = i
        break

# find end line
end_idx = 0
for i, line in enumerate(lines):
    if '{/* 4. SCHOLARSHIP CARDS LIST                                                 */}' in line:
        end_idx = i - 2  # Go above the top comment
        break

new_banner = """      {/* ========================================================================= */}
      {/* HERO EMERALD BANNER - COMPACT LUXURY ARABIC DESIGN WITH GOLD ACCENTS       */}
      {/* ========================================================================= */}
      <div className="relative bg-gradient-to-b from-[#05241b] via-[#0b3c2e] to-[#082e23] text-white px-3 sm:px-4 pt-4 pb-12 sm:pb-14 overflow-hidden shadow-xs">
        
        {/* Top-Right Circular Back Button */}
        {onBack && (
          <button 
            onClick={onBack}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-black/25 hover:bg-black/40 border border-white/15 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-30 cursor-pointer text-white shadow-md active:scale-95"
            title="العودة"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 rotate-180 text-white" />
          </button>
        )}

        {/* Background Decorative Mosque Silhouettes, Dot Grid & Gold Arcs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-left dot grid */}
          <div className="absolute top-3 left-5 grid grid-cols-5 gap-1.5 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#C8A24A]" />
            ))}
          </div>

          {/* Thin gold curved orbital line on left */}
          <div className="absolute -top-12 -left-12 w-56 h-56 rounded-full border border-[#C8A24A]/25 pointer-events-none" />
          <div className="absolute -top-6 -left-6 w-72 h-72 rounded-full border border-[#C8A24A]/15 pointer-events-none" />

          {/* Mosque / Architectural silhouette on right in dark shade */}
          <svg className="absolute -right-4 bottom-0 h-40 w-40 text-[#041a13]/40 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
            {/* Minaret 1 */}
            <rect x="140" y="50" width="16" height="150" />
            <polygon points="148,25 138,50 158,50" />
            <circle cx="148" cy="20" r="3" />
            {/* Dome */}
            <path d="M 80,130 Q 115,70 150,130 Z" />
            <circle cx="115" cy="65" r="4" />
            {/* Minaret 2 */}
            <rect x="70" y="80" width="12" height="120" />
            <polygon points="76,60 68,80 84,80" />
          </svg>

          {/* Lower Curved Gold Swirl */}
          <svg className="absolute bottom-0 inset-x-0 w-full h-12 opacity-30" viewBox="0 0 500 80" fill="none" preserveAspectRatio="none">
            <path d="M-20,70 Q250,-20 520,70" stroke="#C8A24A" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="max-w-md sm:max-w-xl mx-auto text-center relative z-10 space-y-2 pt-1">
          
          {/* Top 4-pointed Gold Sparkle Star */}
          <div className="flex justify-center">
            <span className="text-[#C8A24A] text-lg sm:text-xl drop-shadow-[0_0_8px_rgba(200,162,74,0.8)] animate-pulse">✦</span>
          </div>

          {/* Main Title */}
          <div className="space-y-0.5">
            <h1 className="text-xl sm:text-2xl font-black text-white font-['Cairo',sans-serif] tracking-tight leading-tight">
              ابحث عن <span className="text-[#D4AF37]">منحتك الدراسية</span>
            </h1>
            
            {/* Small Gold Horizontal Divider */}
            <div className="flex justify-center pt-1 pb-0.5">
              <div className="w-10 h-0.5 bg-[#D4AF37] rounded-full" />
            </div>

            {/* Subtitle */}
            <p className="text-[11px] sm:text-xs text-white/90 font-medium font-['Cairo',sans-serif] leading-relaxed max-w-xs sm:max-w-sm mx-auto">
              اكتشف أفضل المنح الدراسية حول العالم وابنِ مستقبلك بثقة.
            </p>
          </div>

          {/* Integrated Clean White Search Bar in Hero */}
          <div className="pt-1 max-w-sm sm:max-w-md mx-auto px-1">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="اكتب اسم المنحة، التخصص، أو الدولة..."
                className="w-full py-2.5 pl-4 pr-10 bg-white text-slate-800 rounded-full text-xs font-semibold placeholder:text-slate-400 focus:outline-none shadow-md border border-slate-100 focus:border-[#C8A24A] transition-all text-center font-['Cairo',sans-serif]"
              />
              <Search className="w-4 h-4 text-[#C8A24A] absolute right-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {activeFiltersCount > 0 && (
          <div className="flex justify-center mt-2 relative z-10">
            <button
              onClick={handleResetFilters}
              className="text-[10px] font-bold text-red-600 hover:text-red-700 bg-white/95 px-2.5 py-0.5 rounded-full shadow-xs transition-colors flex items-center gap-1 cursor-pointer font-['Cairo',sans-serif]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>إعادة ضبط الفلاتر ({activeFiltersCount})</span>
            </button>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3 SEPARATE FLOATING FILTER TILES */}
      {/* ========================================================================= */}
      <div className="max-w-lg mx-auto px-4 -mt-7 sm:-mt-8 relative z-20 pb-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          
          {/* Tile 1: الدولة */}
          <div className="relative bg-white hover:bg-amber-50/40 border-1.5 border-[#C8A24A]/70 hover:border-[#C8A24A] rounded-xl sm:rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all h-[58px] sm:h-[64px] cursor-pointer">
            <div className="flex items-center justify-center gap-1 text-slate-900 font-extrabold text-[11px] sm:text-xs font-['Cairo',sans-serif] w-full">
              <span className="truncate">{selectedCountry === 'الكل' ? 'الدولة' : selectedCountry}</span>
              <Globe2 className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 mt-0.5" />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              title="اختر الدولة"
            >
              {countries.map(c => (
                <option key={c} value={c}>
                  {c === 'الكل' ? '🌍 جميع الدول' : c}
                </option>
              ))}
            </select>
          </div>

          {/* Tile 2: نوع التمويل */}
          <div className="relative bg-white hover:bg-amber-50/40 border-1.5 border-[#C8A24A]/70 hover:border-[#C8A24A] rounded-xl sm:rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all h-[58px] sm:h-[64px] cursor-pointer">
            <div className="flex items-center justify-center gap-1 text-slate-900 font-extrabold text-[11px] sm:text-xs font-['Cairo',sans-serif] w-full">
              <span className="truncate">{selectedFunding === 'الكل' ? 'التمويل' : selectedFunding}</span>
              <Coins className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 mt-0.5" />
            <select
              value={selectedFunding}
              onChange={(e) => setSelectedFunding(e.target.value)}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              title="اختر نوع التمويل"
            >
              <option value="الكل">💰 التمويل</option>
              <option value="ممولة بالكامل">ممولة بالكامل</option>
              <option value="ممولة جزئياً">ممولة جزئياً</option>
              <option value="إعفاء من الرسوم">إعفاء من الرسوم</option>
              <option value="نفقة خاصة">نفقة خاصة</option>
            </select>
          </div>

          {/* Tile 3: الدرجة العلمية */}
          <div className="relative bg-white hover:bg-amber-50/40 border-1.5 border-[#C8A24A]/70 hover:border-[#C8A24A] rounded-xl sm:rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all h-[58px] sm:h-[64px] cursor-pointer">
            <div className="flex items-center justify-center gap-1 text-slate-900 font-extrabold text-[11px] sm:text-xs font-['Cairo',sans-serif] w-full">
              <span className="truncate">{selectedDegree === 'الكل' ? 'الدرجة' : selectedDegree}</span>
              <GraduationCap className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 mt-0.5" />
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              title="اختر الدرجة العلمية"
            >
              <option value="الكل">🎓 الدرجات</option>
              <option value="بكالوريوس">بكالوريوس</option>
              <option value="ماجستير">ماجستير</option>
              <option value="دكتوراه">دكتوراه</option>
            </select>
          </div>

        </div>
      </div>\n"""

print(f"Replacing from line {start_idx} to {end_idx}")
lines[start_idx:end_idx] = [new_banner]

with open('src/components/ScholarshipsSearchPage.tsx', 'w') as f:
    f.writelines(lines)
