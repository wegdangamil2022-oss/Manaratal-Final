const fs = require('fs');

let code = fs.readFileSync('src/components/MajorDetailModal.tsx', 'utf8');

const oldBlock = `          {/* Table Section */}
          <section className="px-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-1.5 h-5 sm:h-6 bg-[#C8A24A] rounded-full shadow-[0_0_8px_rgba(200,162,74,0.6)]"></div>
              <h2 className="text-base sm:text-lg font-black text-[#0F4B3A] tracking-tight">معلومات التخصص الأساسية</h2>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-[24px] sm:rounded-[32px] border border-slate-200/60 overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.02]">
              {/* Header Row */}
              <div className="grid grid-cols-12 bg-[#0F4B3A]/[0.03] border-b border-slate-200/60 py-3.5 px-5 sm:px-6">
                <div className="col-span-4 sm:col-span-3 text-[12px] font-black text-[#0F4B3A]/60 uppercase tracking-widest">العنصر</div>
                <div className="col-span-8 sm:col-span-9 text-[12px] font-black text-[#0F4B3A]/60 uppercase tracking-widest">التفاصيل</div>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-slate-100/80">
                
                {major.code && (
                  <div className="grid grid-cols-12 py-4 px-5 sm:px-6 hover:bg-[#C8A24A]/[0.02] transition-colors items-center group">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-black text-[#0F4B3A] group-hover:text-[#C8A24A] transition-colors">الرمز المرجعي</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700  tracking-wider">{major.code}</div>
                  </div>
                )}

                <div className="grid grid-cols-12 py-4 px-5 sm:px-6 hover:bg-[#C8A24A]/[0.02] transition-colors items-center group">
                  <div className="col-span-4 sm:col-span-3 text-[12px] font-black text-[#0F4B3A] group-hover:text-[#C8A24A] transition-colors">الاسم</div>
                  <div className="col-span-8 sm:col-span-9 text-[11px] font-black text-[#C8A24A]  tracking-wide drop-shadow-sm">{major.nameEn}</div>
                </div>

                <div className="grid grid-cols-12 py-4 px-5 sm:px-6 hover:bg-[#C8A24A]/[0.02] transition-colors items-center group">
                  <div className="col-span-4 sm:col-span-3 text-[12px] font-black text-[#0F4B3A] group-hover:text-[#C8A24A] transition-colors">الكلية</div>
                  <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700">{major.category}</div>
                </div>

                {(major.commonDegrees || (major.degreeLevels && major.degreeLevels.length > 0)) && (
                  <div className="grid grid-cols-12 py-4 px-5 sm:px-6 hover:bg-[#C8A24A]/[0.02] transition-colors group">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-black text-[#0F4B3A] group-hover:text-[#C8A24A] transition-colors mt-0.5">الدرجة الشائعة</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700 leading-relaxed">
                      {major.commonDegrees || major.degreeLevels?.join('، ')}
                    </div>
                  </div>
                )}

                {major.duration && (
                  <div className="grid grid-cols-12 py-4 px-5 sm:px-6 hover:bg-[#C8A24A]/[0.02] transition-colors group">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-black text-[#0F4B3A] group-hover:text-[#C8A24A] transition-colors mt-0.5">المدة الشائعة</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700 leading-relaxed">
                      {major.duration}
                    </div>
                  </div>
                )}

                {major.natureOfStudy && (
                  <div className="grid grid-cols-12 py-4 px-5 sm:px-6 hover:bg-[#C8A24A]/[0.02] transition-colors group">
                    <div className="col-span-4 sm:col-span-3 text-[12px] font-black text-[#0F4B3A] group-hover:text-[#C8A24A] transition-colors mt-0.5">طبيعة التخصص</div>
                    <div className="col-span-8 sm:col-span-9 text-[11px] font-bold text-slate-700 leading-relaxed">
                      {major.natureOfStudy}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Description Section */}
          <section className="px-1">
            <div className="bg-white/60 backdrop-blur-md rounded-[24px] sm:rounded-[32px] border border-slate-200/60 p-6 sm:p-7 shadow-[inset_0_2px_15px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.02] relative overflow-hidden">
               {/* Decorative element */}
               <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-[#C8A24A] to-[#0F4B3A]"></div>
               
               <h3 className="text-[14px] font-black text-[#0F4B3A] mb-3  tracking-wide">الوصف المختصر:</h3>
               <p className="text-[13.5px] sm:text-[14.5px] leading-[1.8] text-slate-700 font-medium">
                 {major.description}
               </p>
            </div>
          </section>`;

const newBlock = `          {/* Table Section */}
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

code = code.replace(oldBlock, newBlock);
// also let's change bg-[#FAFAFA] to bg-white to perfectly match the screenshot's plain white background
code = code.replace('bg-[#FAFAFA]', 'bg-white');
fs.writeFileSync('src/components/MajorDetailModal.tsx', code);
