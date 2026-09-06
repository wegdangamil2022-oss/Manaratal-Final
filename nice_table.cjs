const fs = require('fs');

let code = fs.readFileSync('src/components/MajorDetailModal.tsx', 'utf8');

if (!code.includes('BookOpen')) {
  code = code.replace(/import { (.*) } from 'lucide-react';/, "import { $1, BookOpen, Info } from 'lucide-react';");
} else if (!code.includes('Info')) {
  code = code.replace(/import { (.*) } from 'lucide-react';/, "import { $1, Info } from 'lucide-react';");
}

const oldBlock = `          {/* Table Section */}
          <section className="px-2 sm:px-4">
            <h2 className="text-[16px] sm:text-[18px] font-black text-slate-900 mb-6 font-['Cairo',sans-serif]">
              1. معلومات التخصص الأساسية
            </h2>

            <div className="w-full">
              {/* Header Row */}
              <div className="grid grid-cols-12 py-3 border-b border-slate-300">
                <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-slate-900">العنصر</div>
                <div className="col-span-8 sm:col-span-9 text-[12px] font-bold text-slate-900">التفاصيل</div>
              </div>

              {/* Data Rows */}
              <div className="flex flex-col divide-y divide-slate-200">
                
                {major.code && (
                  <div className="grid grid-cols-12 py-4 items-center">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-slate-900">الرمز المرجعي</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700">{major.code}</div>
                  </div>
                )}

                <div className="grid grid-cols-12 py-4 items-center">
                  <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-slate-900">الاسم</div>
                  <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-900">{major.nameEn}</div>
                </div>

                <div className="grid grid-cols-12 py-4 items-center">
                  <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-slate-900">الكلية</div>
                  <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-900">{major.category}</div>
                </div>

                {(major.commonDegrees || (major.degreeLevels && major.degreeLevels.length > 0)) && (
                  <div className="grid grid-cols-12 py-4 items-start">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-slate-900 pt-0.5">الدرجة الشائعة</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-900 leading-relaxed">
                      {major.commonDegrees || major.degreeLevels?.join('، ')}
                    </div>
                  </div>
                )}

                {major.duration && (
                  <div className="grid grid-cols-12 py-4 items-start">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-slate-900 pt-0.5">المدة الشائعة</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-900 leading-relaxed">
                      {major.duration}
                    </div>
                  </div>
                )}

                {major.natureOfStudy && (
                  <div className="grid grid-cols-12 py-4 items-start">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-slate-900 pt-0.5">طبيعة التخصص</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-900 leading-relaxed">
                      {major.natureOfStudy}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Description Section */}
          <section className="px-2 sm:px-4 mt-8">
             <p className="text-[11px] leading-[1.8] text-slate-900 font-medium">
               الوصف المختصر في ملف المشروع: {major.description}
             </p>
          </section>`;

const newBlock = `          {/* Table Section */}
          <section className="px-3 sm:px-5">
            <div className="flex items-center gap-3 mb-5 mt-2">
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 border border-emerald-100 shadow-sm">
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0F4B3A]" />
              </div>
              <h2 className="text-[15px] sm:text-[17px] font-black text-[#0F4B3A] tracking-tight">
                معلومات التخصص الأساسية
              </h2>
            </div>

            <div className="bg-white rounded-[20px] sm:rounded-[24px] border border-slate-200/80 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] overflow-hidden">
              {/* Header Row */}
              <div className="grid grid-cols-12 bg-slate-50/80 border-b border-slate-100 py-3 px-4 sm:px-6">
                <div className="col-span-4 sm:col-span-3 text-[11.5px] font-black text-slate-400 uppercase tracking-widest">العنصر</div>
                <div className="col-span-8 sm:col-span-9 text-[11.5px] font-black text-slate-400 uppercase tracking-widest">التفاصيل</div>
              </div>

              {/* Data Rows */}
              <div className="flex flex-col divide-y divide-slate-100">
                
                {major.code && (
                  <div className="grid grid-cols-12 py-3.5 px-4 sm:px-6 items-center hover:bg-slate-50/60 transition-colors">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-[#0F4B3A]">الرمز المرجعي</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-600 tracking-wider">{major.code}</div>
                  </div>
                )}

                <div className="grid grid-cols-12 py-3.5 px-4 sm:px-6 items-center hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-[#0F4B3A]">الاسم</div>
                  <div className="col-span-8 sm:col-span-9 text-[11px] font-black text-[#C8A24A]">{major.nameEn}</div>
                </div>

                <div className="grid grid-cols-12 py-3.5 px-4 sm:px-6 items-center hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-[#0F4B3A]">الكلية</div>
                  <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700">{major.category}</div>
                </div>

                {(major.commonDegrees || (major.degreeLevels && major.degreeLevels.length > 0)) && (
                  <div className="grid grid-cols-12 py-3.5 px-4 sm:px-6 items-start hover:bg-slate-50/60 transition-colors">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-[#0F4B3A] pt-0.5">الدرجة الشائعة</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700 leading-relaxed">
                      {major.commonDegrees || major.degreeLevels?.join('، ')}
                    </div>
                  </div>
                )}

                {major.duration && (
                  <div className="grid grid-cols-12 py-3.5 px-4 sm:px-6 items-start hover:bg-slate-50/60 transition-colors">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-[#0F4B3A] pt-0.5">المدة الشائعة</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700 leading-relaxed">
                      {major.duration}
                    </div>
                  </div>
                )}

                {major.natureOfStudy && (
                  <div className="grid grid-cols-12 py-3.5 px-4 sm:px-6 items-start hover:bg-slate-50/60 transition-colors">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-bold text-[#0F4B3A] pt-0.5">طبيعة التخصص</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700 leading-relaxed">
                      {major.natureOfStudy}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Description Section */}
          <section className="px-3 sm:px-5 mt-6">
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-[20px] p-5 sm:p-6 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.02)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[5px] h-full bg-[#C8A24A] rounded-r-[20px]"></div>
              <h3 className="text-[12px] font-black text-[#0F4B3A] mb-3 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#C8A24A]" />
                الوصف المختصر:
              </h3>
              <p className="text-[11px] leading-[1.85] text-slate-700 font-bold">
                {major.description}
              </p>
            </div>
          </section>`;

code = code.replace(oldBlock, newBlock);
// switch wrapper background back to FAFAFA for subtle contrast
code = code.replace('bg-white text-slate-800', 'bg-[#FAFAFA] text-slate-800');

fs.writeFileSync('src/components/MajorDetailModal.tsx', code);
