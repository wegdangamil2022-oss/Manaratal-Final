const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

const target = `{/* Majors List (Horizontal flex-wrap) */}
          <div className="flex flex-wrap gap-2 animate-in fade-in duration-300">
            {activeMajorTab === 'bachelor' && (
              <>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">الطب والجراحة</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">هندسة البرمجيات</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">الذكاء الاصطناعي</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">إدارة الأعمال</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">العمارة والتصميم</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">العلاقات الدولية</span>
              </>
            )}
            {activeMajorTab === 'master' && (
              <>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">علوم البيانات والذكاء الاصطناعي</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">الهندسة الطبية الحيوية</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">إدارة المشاريع الهندسية</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">الاقتصاد الرقمي</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">الصحة العامة</span>
              </>
            )}
            {activeMajorTab === 'phd' && (
              <>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">أبحاث النانو تكنولوجي</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">علوم الحاسوب المتقدمة</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">الهندسة الوراثية</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#0F4B3A]/5 transition-colors cursor-default">السياسات العامة</span>
              </>
            )}
          </div>`;

const replacement = `{/* Majors List (Horizontal flex-wrap) */}
          <div className="flex flex-wrap gap-2 animate-in fade-in duration-300">
            {activeMajorTab === 'bachelor' && (
              <>
                {['الطب والجراحة', 'هندسة البرمجيات', 'الذكاء الاصطناعي', 'إدارة الأعمال', 'العمارة والتصميم', 'العلاقات الدولية'].map(major => (
                  <button key={major} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#C8A24A]/10 hover:border-[#C8A24A]/40 active:scale-95 transition-all cursor-pointer group">
                    {major}
                    <ArrowLeft className="w-2.5 h-2.5 text-[#C8A24A] opacity-0 group-hover:opacity-100 transition-opacity -mr-1" />
                  </button>
                ))}
              </>
            )}
            {activeMajorTab === 'master' && (
              <>
                {['علوم البيانات والذكاء الاصطناعي', 'الهندسة الطبية الحيوية', 'إدارة المشاريع الهندسية', 'الاقتصاد الرقمي', 'الصحة العامة'].map(major => (
                  <button key={major} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#C8A24A]/10 hover:border-[#C8A24A]/40 active:scale-95 transition-all cursor-pointer group">
                    {major}
                    <ArrowLeft className="w-2.5 h-2.5 text-[#C8A24A] opacity-0 group-hover:opacity-100 transition-opacity -mr-1" />
                  </button>
                ))}
              </>
            )}
            {activeMajorTab === 'phd' && (
              <>
                {['أبحاث النانو تكنولوجي', 'علوم الحاسوب المتقدمة', 'الهندسة الوراثية', 'السياسات العامة'].map(major => (
                  <button key={major} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#C8A24A]/10 hover:border-[#C8A24A]/40 active:scale-95 transition-all cursor-pointer group">
                    {major}
                    <ArrowLeft className="w-2.5 h-2.5 text-[#C8A24A] opacity-0 group-hover:opacity-100 transition-opacity -mr-1" />
                  </button>
                ))}
              </>
            )}
          </div>`;

code = code.replace(target, replacement);
fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
