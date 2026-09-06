const fs = require('fs');

let code = fs.readFileSync('src/components/MajorDetailModal.tsx', 'utf8');

const oldBody = `      {/* Rest of the page (Empty for now) */}
      <div className="flex flex-col items-center justify-center p-12 text-slate-400 mt-20">
        <p className="text-sm font-semibold">بقية التفاصيل سوف نضيفها لاحقاً...</p>
      </div>`;

const newBody = `      {/* ===================================================================== */}
      {/* CONTENT BODY */}
      {/* ===================================================================== */}
      <div className="px-4 sm:px-6 pt-6 pb-12 bg-[#FAFAFA] text-slate-800">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">

          {/* Table Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-5 sm:h-6 bg-[#C8A24A] rounded-full"></div>
              <h2 className="text-base sm:text-lg font-black text-[#0F4B3A]">معلومات التخصص الأساسية</h2>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              {/* Header Row */}
              <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-5">
                <div className="col-span-4 sm:col-span-3 text-xs sm:text-sm font-bold text-slate-700">العنصر</div>
                <div className="col-span-8 sm:col-span-9 text-xs sm:text-sm font-bold text-slate-700">التفاصيل</div>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-slate-100">
                
                {major.code && (
                  <div className="grid grid-cols-12 py-3.5 px-4 sm:px-5 hover:bg-slate-50/50 transition-colors items-center">
                    <div className="col-span-4 sm:col-span-3 text-[12px] sm:text-[13px] font-bold text-slate-500">الرمز المرجعي</div>
                    <div className="col-span-8 sm:col-span-9 text-[13px] sm:text-[14px] font-semibold text-slate-800 font-sans tracking-wide">{major.code}</div>
                  </div>
                )}

                <div className="grid grid-cols-12 py-3.5 px-4 sm:px-5 hover:bg-slate-50/50 transition-colors items-center">
                  <div className="col-span-4 sm:col-span-3 text-[12px] sm:text-[13px] font-bold text-slate-500">الاسم</div>
                  <div className="col-span-8 sm:col-span-9 text-[13px] sm:text-[14px] font-bold text-[#0F4B3A] font-sans">{major.nameEn}</div>
                </div>

                <div className="grid grid-cols-12 py-3.5 px-4 sm:px-5 hover:bg-slate-50/50 transition-colors items-center">
                  <div className="col-span-4 sm:col-span-3 text-[12px] sm:text-[13px] font-bold text-slate-500">الكلية</div>
                  <div className="col-span-8 sm:col-span-9 text-[13px] sm:text-[14px] font-semibold text-slate-800">{major.category}</div>
                </div>

                {(major.commonDegrees || (major.degreeLevels && major.degreeLevels.length > 0)) && (
                  <div className="grid grid-cols-12 py-3.5 px-4 sm:px-5 hover:bg-slate-50/50 transition-colors">
                    <div className="col-span-4 sm:col-span-3 text-[12px] sm:text-[13px] font-bold text-slate-500 mt-0.5">الدرجة الشائعة</div>
                    <div className="col-span-8 sm:col-span-9 text-[13px] sm:text-[14px] font-semibold text-slate-800 leading-relaxed">
                      {major.commonDegrees || major.degreeLevels?.join('، ')}
                    </div>
                  </div>
                )}

                {major.duration && (
                  <div className="grid grid-cols-12 py-3.5 px-4 sm:px-5 hover:bg-slate-50/50 transition-colors">
                    <div className="col-span-4 sm:col-span-3 text-[12px] sm:text-[13px] font-bold text-slate-500 mt-0.5">المدة الشائعة</div>
                    <div className="col-span-8 sm:col-span-9 text-[13px] sm:text-[14px] font-semibold text-slate-800 leading-relaxed">
                      {major.duration}
                    </div>
                  </div>
                )}

                {major.natureOfStudy && (
                  <div className="grid grid-cols-12 py-3.5 px-4 sm:px-5 hover:bg-slate-50/50 transition-colors">
                    <div className="col-span-4 sm:col-span-3 text-[12px] sm:text-[13px] font-bold text-slate-500 mt-0.5">طبيعة التخصص</div>
                    <div className="col-span-8 sm:col-span-9 text-[13px] sm:text-[14px] font-semibold text-slate-700 leading-relaxed">
                      {major.natureOfStudy}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Description Section */}
          <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500/20"></div>
             
             <h3 className="text-[13px] font-black text-[#C8A24A] mb-2 font-sans tracking-wide">الوصف المختصر:</h3>
             <p className="text-[13px] sm:text-[14px] leading-[1.8] text-slate-700 font-medium">
               {major.description}
             </p>
          </section>

        </div>
      </div>`;

code = code.replace(oldBody, newBody);
fs.writeFileSync('src/components/MajorDetailModal.tsx', code);
