const fs = require('fs');

// 1. Update Types
let typesCode = fs.readFileSync('src/types.ts', 'utf8');
if (!typesCode.includes('code?: string;')) {
  typesCode = typesCode.replace(
    /iconName: string;/g,
    "iconName: string;\n  code?: string;\n  duration?: string;\n  commonDegrees?: string;"
  );
  fs.writeFileSync('src/types.ts', typesCode);
}

// 2. Update Mock Data with the new Medical Major
let mockCode = fs.readFileSync('src/data/mockData.ts', 'utf8');
if (!mockCode.includes('mjr-0001')) {
  const newMajor = `  {
    id: 'mjr-0001',
    code: 'MJR-0001',
    name: 'الطب والجراحة',
    nameEn: 'Medicine and Surgery',
    category: 'كلية الطب والعلوم الطبية الأساسية',
    iconName: 'Activity',
    description: 'برنامج يجمع العلوم الطبية الأساسية بالتدريب السريري لفهم جسم الإنسان والمرض والتشخيص والعلاج والوقاية والرعاية الصحية.',
    averageScholarships: 120,
    futureDemand: 'مرتفع جداً',
    topCountries: ['الولايات المتحدة', 'المملكة المتحدة', 'كندا', 'ألمانيا'],
    popularCareers: ['طبيب عام', 'طبيب مقيم', 'طبيب امتياز'],
    degreeLevels: ['بكالوريوس'],
    duration: '5–6 سنوات',
    commonDegrees: 'MBBS، MBChB، MD'
  },
`;
  mockCode = mockCode.replace(/export const MOCK_MAJORS: Major\[\] = \[/g, "export const MOCK_MAJORS: Major[] = [\n" + newMajor);
  fs.writeFileSync('src/data/mockData.ts', mockCode);
}

// 3. Update MajorsSearchPage.tsx for Compact Card Layout
let pageCode = fs.readFileSync('src/components/MajorsSearchPage.tsx', 'utf8');

// Ensure Clock is imported
if (!pageCode.includes('Clock,')) {
  pageCode = pageCode.replace(/Briefcase,/g, "Briefcase,\n  Clock,");
}

const oldCardRegex = /<div\s+key=\{major\.id\}[\s\S]*?(?=<\/div>\s*\}\)\)\}\s*<\/div>\s*\) : \()/;
const newCard = `<div
                key={major.id}
                onClick={() => onSelectMajor && onSelectMajor(major)}
                className="group relative w-full bg-white border border-slate-200/70 hover:border-[#C8A24A]/60 rounded-xl shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden active:scale-[0.99] select-none flex items-stretch h-auto"
              >
                {/* RIGHT WING / PILLAR - Ultra Slim */}
                <div className="w-6 sm:w-7 bg-[#0F4B3A] flex flex-col items-center justify-center relative shrink-0">
                  <div className="text-white/90 scale-75">
                    {getIcon(major.iconName)}
                  </div>
                </div>

                {/* MAIN BODY OF THE CARD */}
                <div className="flex-1 py-2 px-2.5 flex flex-col gap-1 min-w-0 bg-gradient-to-l from-transparent to-slate-50/50">
                  
                  {/* Top: Titles & Code */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                      <h3 className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight group-hover:text-[#0F4B3A] transition-colors font-['Cairo',sans-serif] truncate">
                        {major.name}
                      </h3>
                      <p className="text-[8px] sm:text-[9px] text-slate-400 font-semibold font-['Cairo',sans-serif] truncate">
                        {major.nameEn}
                      </p>
                    </div>
                    {major.code && (
                      <div className="shrink-0 bg-slate-50 border border-slate-200 rounded px-1 py-0.5 flex items-center justify-center">
                        <span className="text-[7px] font-mono font-bold text-slate-400">{major.code}</span>
                      </div>
                    )}
                  </div>

                  {/* Middle: Brief Description (Max 2 lines) */}
                  <p className="text-[9px] text-slate-500 font-medium font-['Cairo',sans-serif] line-clamp-2 leading-relaxed">
                    {major.description}
                  </p>

                  {/* Bottom: Micro Info Pills */}
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {major.duration && (
                      <div className="flex items-center gap-1 text-[7px] sm:text-[8px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                        <Clock className="w-2 h-2 text-emerald-600" />
                        <span className="font-bold">{major.duration}</span>
                      </div>
                    )}
                    {major.commonDegrees && (
                      <div className="flex items-center gap-1 text-[7px] sm:text-[8px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded max-w-[130px]">
                        <GraduationCap className="w-2 h-2 text-blue-500" />
                        <span className="font-bold truncate">{major.commonDegrees}</span>
                      </div>
                    )}
                    {major.popularCareers && major.popularCareers.length > 0 && (
                      <div className="flex items-center gap-1 text-[7px] sm:text-[8px] text-slate-700 bg-[#C8A24A]/10 px-1.5 py-0.5 rounded max-w-[140px] border border-[#C8A24A]/20">
                        <Briefcase className="w-2 h-2 text-[#b58f38]" />
                        <span className="font-bold truncate text-[#8a6d27]">{major.popularCareers.join(' • ')}</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>\n`;

pageCode = pageCode.replace(oldCardRegex, newCard);
fs.writeFileSync('src/components/MajorsSearchPage.tsx', pageCode);

