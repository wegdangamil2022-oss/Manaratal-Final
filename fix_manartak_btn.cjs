const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

const targetStr = `{/* Secondary Apply Button (Manartak Platform - Green Style) */}
            <div className="flex items-center justify-between gap-3 bg-[#0F4B3A]/5 rounded-2xl p-3 border border-[#0F4B3A]/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.04)] transition-all hover:bg-[#0F4B3A]/10 active:scale-95 group cursor-pointer" onClick={(e) => {
              // Placeholder for future Manartak platform application flow
              e.preventDefault();
            }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <MousePointerClick className="w-4 h-4 text-[#0F4B3A]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-[#0F4B3A] leading-tight mb-0.5">التقديم عن طريق منصة منارتك</span>
                  <span className="text-[9.5px] font-bold text-slate-500 leading-tight">تقديم سهل وموثوق بملف احترافي (قريباً)</span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-slate-50 transition-colors">
                <Link className="w-3 h-3 text-[#0F4B3A]" />
              </div>
            </div>`;

const replacementStr = `{/* Secondary Apply Button (Manartak Platform - Green Style) */}
            <div className="flex items-center justify-between gap-3 bg-gradient-to-l from-[#0F4B3A] to-[#166551] rounded-2xl p-3 shadow-md shadow-[#0F4B3A]/20 transition-all hover:scale-[0.99] active:scale-95 group cursor-pointer" onClick={(e) => {
              // Placeholder for future Manartak platform application flow
              e.preventDefault();
            }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <MousePointerClick className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-white leading-tight mb-0.5">التقديم عن طريق منصة منارتك</span>
                  <span className="text-[9.5px] font-bold text-white/80 leading-tight">تقديم سهل وموثوق بملف احترافي (قريباً)</span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white/20 transition-colors">
                <Link className="w-3 h-3 text-white" />
              </div>
            </div>`;

code = code.replace(targetStr, replacementStr);
fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
