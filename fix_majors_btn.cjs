const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

const oldStr = 'className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#C8A24A]/10 hover:border-[#C8A24A]/40 active:scale-95 transition-all cursor-pointer group"';
const newStr = 'className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#C8A24A]/10 to-transparent border border-[#C8A24A]/50 text-[#0F4B3A] text-[10px] font-bold rounded-xl shadow-[0_0_10px_rgba(200,162,74,0.2)] hover:shadow-[0_0_15px_rgba(200,162,74,0.4)] hover:bg-[#C8A24A]/10 active:scale-95 transition-all cursor-pointer group relative overflow-hidden"';

code = code.split(oldStr).join(newStr);

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
