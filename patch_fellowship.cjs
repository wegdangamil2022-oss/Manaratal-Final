const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

code = code.replace(
  "const [activeMajorTab, setActiveMajorTab] = useState<'bachelor' | 'master' | 'phd'>('bachelor');",
  "const [activeMajorTab, setActiveMajorTab] = useState<'bachelor' | 'master' | 'phd' | 'fellowship'>('bachelor');"
);

code = code.replace(
  "              دكتوراه\n            </button>\n          </div>",
  `              دكتوراه
            </button>
            <button 
              onClick={() => setActiveMajorTab('fellowship')} 
              className={\`px-4 py-2 text-[10px] font-bold rounded-xl transition-all whitespace-nowrap border \${activeMajorTab === 'fellowship' ? 'bg-[#0F4B3A] text-white border-[#0F4B3A] shadow-md' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'}\`}
            >
              الزمالات
            </button>
          </div>`
);

const targetMajors = `{activeMajorTab === 'phd' && (
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

const replacementMajors = `{activeMajorTab === 'phd' && (
              <>
                {['أبحاث النانو تكنولوجي', 'علوم الحاسوب المتقدمة', 'الهندسة الوراثية', 'السياسات العامة'].map(major => (
                  <button key={major} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#C8A24A]/10 hover:border-[#C8A24A]/40 active:scale-95 transition-all cursor-pointer group">
                    {major}
                    <ArrowLeft className="w-2.5 h-2.5 text-[#C8A24A] opacity-0 group-hover:opacity-100 transition-opacity -mr-1" />
                  </button>
                ))}
              </>
            )}
            {activeMajorTab === 'fellowship' && (
              <>
                {['زمالة البحث العلمي', 'زمالة الطب السريري', 'زمالة الدراسات المتقدمة', 'الزمالة البحثية لما بعد الدكتوراه'].map(major => (
                  <button key={major} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-xl hover:bg-[#C8A24A]/10 hover:border-[#C8A24A]/40 active:scale-95 transition-all cursor-pointer group">
                    {major}
                    <ArrowLeft className="w-2.5 h-2.5 text-[#C8A24A] opacity-0 group-hover:opacity-100 transition-opacity -mr-1" />
                  </button>
                ))}
              </>
            )}
          </div>`;

code = code.replace(targetMajors, replacementMajors);

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
