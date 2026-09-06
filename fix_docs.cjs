const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

const target = `          <div className="flex flex-wrap gap-2">
            {[
              { name: 'جواز السفر', icon: Globe },
              { name: 'آخر شهادة دراسية', icon: GraduationCap },
              { name: 'كشف الدرجات', icon: FileText },
              { name: 'خطة الدراسة أو البحث', icon: PenTool },
              { name: 'خطابات توصية للدراسات العليا', icon: Users },
              { name: 'إثبات اللغة HSK4', icon: Languages },
              { name: 'خطاب قبول مبدئي إذا كان مطلوبًا في مسار التقديم', icon: Building2 },
              { name: 'الفحص الطبي', icon: Activity },
              { name: 'شهادة خلو سوابق', icon: Shield },
              { name: 'نموذج طلب منحة CSC', icon: FileCheck }
            ].map((doc, idx) => (
              <button key={idx} className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-[#C8A24A]/5 hover:border-[#C8A24A]/40 active:scale-95 transition-all group cursor-pointer text-right w-fit">
                <div className="text-slate-400 group-hover:text-[#C8A24A] transition-colors shrink-0">
                  <doc.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-slate-700 group-hover:text-[#0F4B3A] transition-colors leading-tight">
                  {doc.name}
                </span>
                <ArrowLeft className="w-2.5 h-2.5 text-[#C8A24A] opacity-40 group-hover:opacity-100 transition-opacity -mr-1 mr-1" />
              </button>
            ))}
          </div>`;

const replacement = `          <div className="flex flex-wrap gap-2">
            {[
              { name: 'جواز السفر', icon: Globe },
              { name: 'آخر شهادة دراسية', icon: GraduationCap },
              { name: 'كشف الدرجات', icon: FileText },
              { name: 'خطة الدراسة أو البحث', icon: PenTool },
              { name: 'خطابات توصية للدراسات العليا', icon: Users },
              { name: 'إثبات اللغة HSK4 أو IELTS', icon: Languages, isLink: true },
              { name: 'خطاب قبول مبدئي إذا كان مطلوبًا في مسار التقديم', icon: Building2 },
              { name: 'الفحص الطبي', icon: Activity },
              { name: 'شهادة خلو سوابق', icon: Shield },
              { name: 'نموذج طلب منحة CSC', icon: FileCheck }
            ].map((doc, idx) => (
              doc.isLink ? (
                <button key={idx} className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-[#C8A24A]/5 hover:border-[#C8A24A]/40 active:scale-95 transition-all group cursor-pointer text-right w-fit">
                  <div className="text-slate-400 group-hover:text-[#C8A24A] transition-colors shrink-0">
                    <doc.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 group-hover:text-[#0F4B3A] transition-colors leading-tight">
                    {doc.name}
                  </span>
                  <ArrowLeft className="w-2.5 h-2.5 text-[#C8A24A] opacity-40 group-hover:opacity-100 transition-opacity -mr-1 mr-1" />
                </button>
              ) : (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-white hover:border-[#C8A24A]/50 hover:shadow-sm transition-all group cursor-default text-right w-fit">
                  <div className="text-slate-400 group-hover:text-[#C8A24A] transition-colors shrink-0">
                    <doc.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 group-hover:text-[#0F4B3A] transition-colors leading-tight">
                    {doc.name}
                  </span>
                </div>
              )
            ))}
          </div>`;

code = code.replace(target, replacement);
fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
