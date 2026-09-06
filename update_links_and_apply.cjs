const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

// 1. Update the Majors & Fellowships Buttons
// We need to replace the button classes for the linkable majors.
const oldMajorBtn = 'className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#C8A24A]/10 hover:border-[#C8A24A]/40 active:scale-95 transition-all cursor-pointer group"';
const newMajorBtn = 'className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#C8A24A]/10 to-transparent border border-[#C8A24A]/50 text-[#0F4B3A] text-[10px] font-bold rounded-xl shadow-[0_0_10px_rgba(200,162,74,0.2)] hover:shadow-[0_0_15px_rgba(200,162,74,0.4)] hover:bg-[#C8A24A]/10 active:scale-95 transition-all cursor-pointer group relative overflow-hidden"';

code = code.replace(new RegExp(oldMajorBtn.replace(/[.*+?^$\\{}()|[\\]\\\\]/g, '\\\\$&'), 'g'), newMajorBtn);

// Also we need to add a glow effect to the text or the arrow. Let's keep the new classes.
// 2. Update the Document Link (IELTS/HSK4)
const oldDocBtn = 'className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-[#C8A24A]/5 hover:border-[#C8A24A]/40 active:scale-95 transition-all group cursor-pointer text-right w-fit"';
const newDocBtn = 'className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-[#C8A24A]/10 to-transparent border border-[#C8A24A]/50 text-[#0F4B3A] rounded-xl shadow-[0_0_10px_rgba(200,162,74,0.2)] hover:shadow-[0_0_15px_rgba(200,162,74,0.4)] hover:bg-[#C8A24A]/10 active:scale-95 transition-all group cursor-pointer text-right w-fit relative overflow-hidden"';
code = code.replace(oldDocBtn, newDocBtn);

// To fix the text color in Doc link which might be hardcoded to slate-700:
// "text-[10px] font-bold text-slate-700 group-hover:text-[#0F4B3A]"
// Let's replace the inner text class of the Doc link if needed. We can just do a regex for the specific one.
// But first, let's fix the Application section.

// 3. Update the Application Boxes to look "inset" (اشفطهم)
const oldAppBox1 = 'className="flex items-center justify-between gap-3 bg-white rounded-2xl p-3 border border-[#C8A24A]/40 shadow-sm transition-all hover:border-[#C8A24A] hover:bg-[#C8A24A]/5 active:scale-95 group"';
const newAppBox1 = 'className="flex items-center justify-between gap-3 bg-[#fafafa] rounded-2xl p-3 border border-slate-200/50 shadow-[inset_0_2px_6px_rgba(0,0,0,0.04)] transition-all hover:bg-slate-100 active:scale-95 group"';
code = code.replace(oldAppBox1, newAppBox1);

const oldAppBox2 = 'className="flex items-center justify-between gap-3 bg-gradient-to-l from-[#0F4B3A] to-[#166551] rounded-2xl p-3 shadow-md shadow-[#0F4B3A]/20 transition-all hover:scale-[0.99] active:scale-95 group cursor-pointer"';
const newAppBox2 = 'className="flex items-center justify-between gap-3 bg-[#0F4B3A]/5 rounded-2xl p-3 border border-[#0F4B3A]/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.04)] transition-all hover:bg-[#0F4B3A]/10 active:scale-95 group cursor-pointer"';
code = code.replace(oldAppBox2, newAppBox2);

// Since we changed Box 2 to a light background, we need to fix its text colors
// From: className="w-4 h-4 text-white" -> text-[#0F4B3A]
// From: text-white leading-tight -> text-[#0F4B3A] leading-tight
// From: text-white/80 leading-tight -> text-slate-500 leading-tight
// From: bg-white/10 ... border-white/20 -> bg-white ... border-slate-200
code = code.replace('className="w-4 h-4 text-white"', 'className="w-4 h-4 text-[#0F4B3A]"');
code = code.replace('text-[11px] font-black text-white leading-tight mb-0.5">التقديم عن طريق منصة منارتك', 'text-[11px] font-black text-[#0F4B3A] leading-tight mb-0.5">التقديم عن طريق منصة منارتك');
code = code.replace('text-[9.5px] font-bold text-white/80 leading-tight">تقديم سهل وموثوق بملف احترافي', 'text-[9.5px] font-bold text-slate-500 leading-tight">تقديم سهل وموثوق بملف احترافي');
code = code.replace('className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"', 'className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm"');
code = code.replace('className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white/20 transition-colors"', 'className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-slate-50 transition-colors"');
code = code.replace('className="w-3 h-3 text-white"', 'className="w-3 h-3 text-[#0F4B3A]"');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
