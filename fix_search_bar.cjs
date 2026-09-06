const fs = require('fs');
let code = fs.readFileSync('src/components/MajorsSearchPage.tsx', 'utf8');

const oldSearch = `{/* Integrated Search Bar in Hero */}
          <div className="relative max-w-md mx-auto mt-4 px-2">
            <div className="relative group">
              <input
                type="text"
                placeholder="ابحث باسم التخصص، الكلية، الوظيفة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-2xl pr-11 pl-12 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-[#C8A24A]/60 focus:ring-4 focus:ring-[#C8A24A]/20 transition-all font-['Cairo',sans-serif] shadow-lg"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#0F4B3A]" />
              
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>`;

const newSearch = `{/* Integrated Search Bar in Hero */}
          <div className="pt-1 max-w-md mx-auto px-2">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث باسم التخصص، الكلية، الوظيفة..."
                className="w-full py-2.5 pl-4 pr-10 bg-[#06261C]/85 hover:bg-[#06261C] focus:bg-[#06261C] border border-[#C8A24A]/40 focus:border-[#C8A24A] rounded-full text-xs sm:text-[13px] font-bold text-white placeholder-white focus:outline-none shadow-inner transition-all text-center font-['Cairo',sans-serif]"
              />
              <Search className="w-4 h-4 text-[#C8A24A] absolute right-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 p-1 text-emerald-200 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>`;

code = code.replace(oldSearch, newSearch);
fs.writeFileSync('src/components/MajorsSearchPage.tsx', code);
