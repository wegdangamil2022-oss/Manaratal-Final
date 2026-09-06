const fs = require('fs');

const code = `import React, { useState, useMemo, useRef } from 'react';
import { 
  Search, 
  X, 
  ChevronLeft, 
  ChevronDown,
  Layers,
  Activity,
  Cpu,
  Zap,
  TrendingUp,
  BookOpen,
  Globe2,
  Briefcase,
  GraduationCap,
  RotateCcw
} from 'lucide-react';
import { Major, DegreeLevel } from '../types';
import { MOCK_MAJORS } from '../data/mockData';

interface MajorsSearchPageProps {
  majors?: Major[];
  onBack?: () => void;
  onSelectMajor?: (major: Major) => void;
}

export const MajorsSearchPage: React.FC<MajorsSearchPageProps> = ({ 
  majors = MOCK_MAJORS,
  onBack,
  onSelectMajor
}) => {
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('الكل');
  const [selectedDegree, setSelectedDegree] = useState('الكل');

  const resultsRef = useRef<HTMLDivElement>(null);

  // Extract unique faculties (categories)
  const faculties = useMemo(() => {
    const set = new Set<string>();
    majors.forEach(m => {
      if (m.category) set.add(m.category);
    });
    return ['الكل', ...Array.from(set)];
  }, [majors]);

  // Degrees filter list
  const degreeLevels = ['الكل', 'بكالوريوس', 'ماجستير', 'دكتوراه', 'زمالة أبحاث', 'دورات تدريبية'];

  // Filter majors
  const filteredMajors = useMemo(() => {
    return majors.filter(m => {
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery = !q || (
        m.name.toLowerCase().includes(q) ||
        (m.nameEn && m.nameEn.toLowerCase().includes(q)) ||
        (m.description && m.description.toLowerCase().includes(q))
      );

      const matchesFaculty = selectedFaculty === 'الكل' || m.category === selectedFaculty;
      const matchesDegree = selectedDegree === 'الكل' || (m.degreeLevels && m.degreeLevels.includes(selectedDegree as DegreeLevel));

      return matchesQuery && matchesFaculty && matchesDegree;
    });
  }, [majors, searchQuery, selectedFaculty, selectedDegree]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedFaculty('الكل');
    setSelectedDegree('الكل');
  };

  const activeFiltersCount = 
    (selectedFaculty !== 'الكل' ? 1 : 0) + 
    (selectedDegree !== 'الكل' ? 1 : 0) + 
    (searchQuery.trim() !== '' ? 1 : 0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#C8A24A]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-red-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#C8A24A]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-300" />;
      default: return <BookOpen className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-24 font-sans select-none" dir="rtl">
      
      {/* ========================================================================= */}
      {/* HERO EMERALD CURVED BANNER */}
      {/* ========================================================================= */}
      <div className="relative bg-gradient-to-b from-[#083024] via-[#0F4B3A] to-[#0A3528] text-white px-4 pt-4 pb-6 overflow-hidden shadow-sm">
        
        {/* Back Button */}
        {onBack && (
          <button 
            onClick={onBack}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/30 backdrop-blur-md rounded-full transition-all z-20 cursor-pointer text-white"
            title="العودة"
          >
            <ChevronLeft className="w-5 h-5 rotate-180" />
          </button>
        )}

        {/* Background Decorative Gold Waves & Dot Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" preserveAspectRatio="none">
            <path d="M-50,50 Q100,-20 250,60 T550,40" stroke="#C8A24A" strokeWidth="1.5" fill="none" />
            <path d="M-20,120 Q150,40 300,140 T600,100" stroke="#C8A24A" strokeWidth="1" fill="none" />
            <circle cx="30" cy="30" r="1" fill="#C8A24A" />
            <circle cx="45" cy="30" r="1" fill="#C8A24A" />
            <circle cx="60" cy="30" r="1" fill="#C8A24A" />
            <circle cx="30" cy="45" r="1" fill="#C8A24A" />
            <circle cx="45" cy="45" r="1" fill="#C8A24A" />
            <circle cx="60" cy="45" r="1" fill="#C8A24A" />
          </svg>
        </div>

        <div className="max-w-xl mx-auto text-center relative z-10 space-y-2.5">
          
          {/* Little 4-pointed Gold Sparkle Star */}
          <div className="flex justify-center -mb-1">
            <span className="text-[#C8A24A] text-sm animate-pulse">✦</span>
          </div>

          {/* Headline with Gold Curve */}
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white font-['Cairo',sans-serif] tracking-tight">
              <span>ابحث عن </span>
              <span className="relative inline-block text-white">
                تخصصك الأكاديمي
                {/* Gold brush accent line underneath */}
                <svg className="absolute -bottom-1.5 inset-x-0 w-full h-2 text-[#C8A24A]" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                  <path d="M2,9 Q50,2 98,6" stroke="#C8A24A" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[11px] sm:text-xs text-emerald-100/90 font-medium font-['Cairo',sans-serif] mt-1.5 leading-relaxed max-w-xs sm:max-w-sm mx-auto">
              تصفح التخصصات المتاحة وتعرف على الكليات والدرجات العلمية المناسبة لطموحك
            </p>
          </div>

          {/* Integrated Search Bar in Hero */}
          <div className="relative max-w-md mx-auto mt-4 px-2">
            <div className="relative group">
              <input
                type="text"
                placeholder="ابحث باسم التخصص، الكلية، الوظيفة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-2xl pr-11 pl-12 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-[#C8A24A]/60 focus:ring-4 focus:ring-[#C8A24A]/20 transition-all font-['Cairo',sans-serif] shadow-lg"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#0F4B3A]" />
              
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {activeFiltersCount > 0 && (
          <div className="flex justify-center mt-3">
            <button
              onClick={handleResetFilters}
              className="text-[10px] sm:text-[11px] font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-full transition-colors flex items-center gap-1 cursor-pointer font-['Cairo',sans-serif]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>إعادة ضبط الفلاتر ({activeFiltersCount})</span>
            </button>
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* FLOATING FILTER CARD WITH 2 TILES (الكلية • الدرجة)  */}
      {/* ========================================================================= */}
      <div className="max-w-xl mx-auto px-3 sm:px-4 -mt-3.5 relative z-20 space-y-2.5">
        
        {/* Outer Framed Box with Gold Border */}
        <div className="bg-white border border-[#C8A24A]/50 rounded-3xl p-2 sm:p-2.5 shadow-md">
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            
            {/* Tile 1: الكلية */}
            <div className="relative bg-white hover:bg-slate-50/80 border border-slate-200/80 rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-2xs transition-colors">
              <div className="flex items-center gap-1 text-slate-800 font-bold text-[10px] sm:text-[11px] font-['Cairo',sans-serif] leading-tight">
                <Layers className="w-3 h-3 text-[#C8A24A]" />
                <span className="truncate">{selectedFaculty === 'الكل' ? 'اختر الكلية' : selectedFaculty}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 mt-1" />
              <select
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                title="اختر الكلية"
              >
                {faculties.map(c => (
                  <option key={c} value={c}>
                    {c === 'الكل' ? '🏛️ جميع الكليات' : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Tile 2: الدرجة العلمية */}
            <div className="relative bg-white hover:bg-slate-50/80 border border-slate-200/80 rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-2xs transition-colors">
              <div className="flex items-center gap-1 text-slate-800 font-bold text-[10px] sm:text-[11px] font-['Cairo',sans-serif] leading-tight">
                <GraduationCap className="w-3 h-3 text-[#C8A24A]" />
                <span className="truncate">{selectedDegree === 'الكل' ? 'الدرجة العلمية' : selectedDegree}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 mt-1" />
              <select
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                title="اختر الدرجة العلمية"
              >
                {degreeLevels.map(lvl => (
                  <option key={lvl} value={lvl}>
                    {lvl === 'الكل' ? '🎓 جميع الدرجات' : lvl}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* RESULTS LIST SECTION */}
      {/* ========================================================================= */}
      <div ref={resultsRef} className="w-full max-w-4xl mx-auto px-2 sm:px-3 pt-3 space-y-2.5">
        
        {/* Section Header: التخصصات المتاحة */}
        <div className="flex items-center justify-between px-1">
          <span className="text-xs sm:text-sm font-black text-slate-900 font-['Cairo',sans-serif]">
            التخصصات المتاحة ({filteredMajors.length})
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#C8A24A] font-bold font-['Cairo',sans-serif]">
            محدثة باستمرار
          </span>
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
          {filteredMajors.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center flex flex-col items-center justify-center gap-2 shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-black text-slate-800 font-['Cairo',sans-serif]">لا توجد تخصصات مطابقة للبحث</h3>
              <p className="text-xs text-slate-500 max-w-xs font-['Cairo',sans-serif]">
                جرب تغيير خيارات التصفية أو البحث باسم تخصص آخر.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-2 px-4 py-1.5 bg-[#0F4B3A] text-white rounded-xl text-xs font-bold cursor-pointer font-['Cairo',sans-serif]"
              >
                إلغاء التصفية وعرض الكل
              </button>
            </div>
          ) : (
            filteredMajors.map((major) => (
              <div
                key={major.id}
                onClick={() => onSelectMajor && onSelectMajor(major)}
                className="group relative w-full bg-white border-2 border-[#C8A24A]/75 hover:border-[#C8A24A] rounded-2xl sm:rounded-3xl shadow-[0_2px_10px_rgba(200,162,74,0.15)] hover:shadow-[0_4px_18px_rgba(200,162,74,0.28)] transition-all duration-300 cursor-pointer overflow-hidden active:scale-[0.99] select-none flex items-stretch"
              >
                {/* RIGHT WING / PILLAR */}
                <div className="w-8 sm:w-9 bg-[#0A3528] flex flex-col items-center justify-between py-2 px-0.5 relative shrink-0">
                  <div className="mt-2 text-white/90">
                    {getIcon(major.iconName)}
                  </div>
                  {/* Subtle Diagonal Gold Line Accent at Bottom */}
                  <div className="w-full relative h-4 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 30 20" fill="none">
                      <line x1="30" y1="20" x2="0" y2="0" stroke="#C8A24A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* MAIN BODY OF THE CARD */}
                <div className="flex-1 py-2.5 px-3 sm:px-3.5 flex flex-col justify-between gap-1.5 min-w-0">
                  
                  {/* Top Row: Badges */}
                  <div className="flex items-center justify-between gap-1.5 w-full">
                    <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                      <div className="bg-white border border-slate-200/80 rounded-lg px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-slate-800 shadow-2xs font-['Cairo',sans-serif]">
                        {major.category}
                      </div>
                      <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-emerald-800 shadow-2xs font-['Cairo',sans-serif]">
                        طلب: {major.futureDemand}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Title & Description */}
                  <div className="mt-1">
                    <h3 className="text-[13px] sm:text-[15px] font-black text-slate-900 leading-tight group-hover:text-[#0F4B3A] transition-colors font-['Cairo',sans-serif]">
                      {major.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium font-['Cairo',sans-serif] mt-0.5 truncate">
                      {major.nameEn}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 font-semibold font-['Cairo',sans-serif] mt-1.5 line-clamp-2 leading-relaxed">
                      {major.description}
                    </p>
                  </div>

                  {/* Badges/Tags for Degrees */}
                  {major.degreeLevels && major.degreeLevels.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {major.degreeLevels.map((lvl) => (
                        <span key={lvl} className="bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md text-[9px] font-bold">
                          {lvl}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom Row: Countries & Careers */}
                  <div className="flex flex-col gap-1.5 mt-2">
                    <div className="flex items-center gap-2 text-[10px] text-slate-700 bg-slate-50/80 p-2 rounded-xl border border-slate-100">
                      <Globe2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="font-bold text-[#0F4B3A] shrink-0">أفضل الوجهات:</span>
                      <span className="truncate">{major.topCountries.join(' • ')}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[10px] text-slate-700 bg-[#C8A24A]/5 p-2 rounded-xl border border-[#C8A24A]/10">
                      <Briefcase className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                      <span className="font-bold text-[#b58f38] shrink-0">الوظائف المستهدفة:</span>
                      <span className="truncate">{major.popularCareers.join(' • ')}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
`

fs.writeFileSync('src/components/MajorsSearchPage.tsx', code);
