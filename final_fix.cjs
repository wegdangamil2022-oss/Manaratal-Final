const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

// 1. Revert Major Buttons Style
const oldMajorBtn = 'className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#C8A24A]/10 to-transparent border border-[#C8A24A]/50 text-[#0F4B3A] text-[10px] font-bold rounded-xl shadow-[0_0_10px_rgba(200,162,74,0.2)] hover:shadow-[0_0_15px_rgba(200,162,74,0.4)] hover:bg-[#C8A24A]/10 active:scale-95 transition-all cursor-pointer group relative overflow-hidden"';
const newMajorBtn = 'className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-white hover:border-[#C8A24A]/40 hover:shadow-sm active:scale-95 transition-all cursor-pointer group"';
code = code.split(oldMajorBtn).join(newMajorBtn);

// 2. Revert Language Button Style
const oldDocBtn = 'className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-[#C8A24A]/10 to-transparent border border-[#C8A24A]/50 text-[#0F4B3A] rounded-xl shadow-[0_0_10px_rgba(200,162,74,0.2)] hover:shadow-[0_0_15px_rgba(200,162,74,0.4)] hover:bg-[#C8A24A]/10 active:scale-95 transition-all group cursor-pointer text-right w-fit relative overflow-hidden"';
const newDocBtn = 'className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-white hover:border-[#C8A24A]/40 hover:shadow-sm active:scale-95 transition-all group cursor-pointer text-right w-fit"';
code = code.split(oldDocBtn).join(newDocBtn);

// 3. Arrow Style update
const oldArrow = '<ArrowUpLeft className="w-2.5 h-2.5 text-[#C8A24A] opacity-40 group-hover:opacity-100 transition-opacity -mr-1" />';
// We use a dark green text with a gold drop shadow for that mixed glowing effect. Also size w-4 h-4
const newArrow = '<ArrowUpLeft className="w-4 h-4 text-[#0F4B3A] drop-shadow-[0_0_3px_#C8A24A] opacity-80 group-hover:opacity-100 group-hover:text-[#C8A24A] group-hover:drop-shadow-[0_0_5px_#0F4B3A] group-hover:scale-110 transition-all duration-300 -mr-1" />';
code = code.split(oldArrow).join(newArrow);

const oldLangArrow = '<ArrowUpLeft className="w-2.5 h-2.5 text-[#C8A24A] opacity-40 group-hover:opacity-100 transition-opacity -mr-1 mr-1" />';
const newLangArrow = '<ArrowUpLeft className="w-4 h-4 text-[#0F4B3A] drop-shadow-[0_0_3px_#C8A24A] opacity-80 group-hover:opacity-100 group-hover:text-[#C8A24A] group-hover:drop-shadow-[0_0_5px_#0F4B3A] group-hover:scale-110 transition-all duration-300 -mr-1 mr-1" />';
code = code.split(oldLangArrow).join(newLangArrow);

// 4. Add the Missing Fellowship list if it's missing
if (!code.includes("activeMajorTab === 'fellowship' && (")) {
  const phdTarget = `{activeMajorTab === 'phd' && (
              <>
                {['أبحاث النانو تكنولوجي', 'علوم الحاسوب المتقدمة', 'الهندسة الوراثية', 'السياسات العامة'].map(major => (
                  <button key={major} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-white hover:border-[#C8A24A]/40 hover:shadow-sm active:scale-95 transition-all cursor-pointer group">
                    {major}
                    ${newArrow}
                  </button>
                ))}
              </>
            )}`;

  const fellowshipAddition = `
            {activeMajorTab === 'fellowship' && (
              <>
                {['زمالة البحث العلمي', 'زمالة الطب السريري', 'زمالة الدراسات المتقدمة', 'الزمالة البحثية لما بعد الدكتوراه'].map(major => (
                  <button key={major} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-white hover:border-[#C8A24A]/40 hover:shadow-sm active:scale-95 transition-all cursor-pointer group">
                    {major}
                    ${newArrow}
                  </button>
                ))}
              </>
            )}`;
            
  code = code.replace(phdTarget, phdTarget + fellowshipAddition);
}

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
