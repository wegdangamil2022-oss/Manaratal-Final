import React from 'react';
import {
  ArrowLeft,
  Award,
  BadgeCheck,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  ChevronLeft,
  CreditCard,
  ExternalLink,
  Globe2,
  GraduationCap,
  Layers3,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Tag,
  TrendingUp,
} from 'lucide-react';

type CourseTrack = 'imported' | 'native' | 'paid';

type PathFeature = {
  label: string;
  icon: React.ElementType;
};

interface CoursesLandingPageProps {
  onBack?: () => void;
  onOpenTrack?: (track: CourseTrack) => void;
}

interface CoursePathCardProps {
  title: string;
  eyebrow?: string;
  badge?: string;
  description: string;
  icon: React.ElementType;
  features: PathFeature[];
  footer?: string;
  cta: string;
  onClick?: () => void;
}

function CoursePathCard({ title, eyebrow, description, icon: Icon, features, cta, onClick }: CoursePathCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
      onClick={onClick}
      className="bg-[var(--mn-surface)] rounded-2xl border border-[#142B5F] dark:border-[#D6A43B]/60 hover:border-[#142B5F] dark:hover:border-[#D6A43B] shadow-sm hover:shadow-md transition-all relative overflow-hidden group mn-panel text-right cursor-pointer select-none w-full block active:scale-[0.99]"
    >
      {/* Prominent Golden Top Line (خط ذهبي واضح أعلى كل بطاقة) */}
      <div className="h-1 sm:h-1.5 w-full bg-gradient-to-r from-[#D6A43B] via-[#F3CE74] to-[#D6A43B] shadow-2xs" />

      {/* Subtle Right Hover Strip */}
      <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-[#142B5F] dark:from-[#D6A43B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-3.5 sm:p-4 space-y-3">
        {/* Centered Title & Icon Header with Golden Line Underneath */}
        <div className="flex flex-col items-center justify-center text-center gap-2 pt-1">
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-full p-0.5 bg-gradient-to-tr from-[var(--mn-accent)] via-[var(--mn-accent)] to-[var(--mn-hero-secondary)] shadow-xs shrink-0 flex items-center justify-center mn-gold">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--mn-primary)] border border-white/40 flex items-center justify-center text-white shadow-inner">
                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#E5B54F]" />
              </div>
            </div>

            <h3 className="text-[15.5px] sm:text-base font-bold text-[var(--mn-heading)] font-['Cairo',sans-serif] leading-tight group-hover:text-[var(--mn-primary)] dark:group-hover:text-[var(--mn-accent)] transition-colors">
              {title}
            </h3>
          </div>

          {/* Golden Line Under Title */}
          <div className="flex items-center justify-center gap-2 w-full pt-0.5 pb-1">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#D6A43B] dark:to-[#E5B54F]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D6A43B] dark:bg-[#E5B54F] shadow-xs" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#D6A43B] dark:to-[#E5B54F]" />
          </div>
        </div>

        {/* Middle: Balanced & Clear Description */}
        <p className="text-[11.5px] sm:text-xs text-[var(--mn-text-muted)] font-medium leading-5 text-right">
          {description}
        </p>

        {/* Feature Tags List in Vertical Layout (ألوان هادئة وغامقة ومريحة للعين) */}
        <div className="space-y-1.5 pt-0.5">
          {features.map(({ label, icon: FeatureIcon }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-100/70 dark:bg-slate-900/50 px-3 py-1.5 flex items-center gap-2.5 text-[10.5px] sm:text-[11px] font-bold text-[var(--mn-heading)] transition-colors"
            >
              <FeatureIcon className="w-3.5 h-3.5 shrink-0 text-[#142B5F] dark:text-[#E5B54F]" />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Action Button (استكشف الدورات) */}
        <div className="pt-2 border-t border-[var(--mn-border)]/50 dark:border-white/10">
          <button
            type="button"
            className="w-full bg-[var(--mn-primary)] hover:bg-[#1a3777] text-white rounded-xl py-2 px-3.5 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-2xs mn-inverse hover:mn-inverse group/btn"
            data-mn-font="11" data-mn-bold="true" data-mn-cairo="true"
          >
            <span>{cta}</span>
            <ChevronLeft className="w-3.5 h-3.5 text-white/90 group-hover/btn:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export const CoursesLandingPage: React.FC<CoursesLandingPageProps> = ({ onBack, onOpenTrack }) => {
  return (
    <div
      className="min-h-screen bg-[var(--mn-page)] text-[var(--mn-heading)] pb-24 font-['Cairo',sans-serif] select-none mn-panel "
      dir="rtl"
    >
      {/* ========================================================================= */}
      {/* HERO SECTION - ELEGANT TRAINING COURSES THEME */}
      {/* ========================================================================= */}
      <div className="relative mn-search-hero text-white px-3 sm:px-4 pt-4 pb-12 sm:pb-14 overflow-hidden shadow-xs border-b border-[var(--mn-accent)]/20 mn-inverse ">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Background Decorative Gold Waves & Dot Patterns */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 200"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M-50,50 Q100,-20 250,60 T550,40"
                stroke="var(--mn-accent)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M-20,120 Q150,40 300,140 T600,100"
                stroke="var(--mn-accent)"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="30" cy="30" r="1" fill="var(--mn-accent)" />
              <circle cx="45" cy="30" r="1" fill="var(--mn-accent)" />
              <circle cx="60" cy="30" r="1" fill="var(--mn-accent)" />
              <circle cx="30" cy="45" r="1" fill="var(--mn-accent)" />
              <circle cx="45" cy="45" r="1" fill="var(--mn-accent)" />
              <circle cx="60" cy="45" r="1" fill="var(--mn-accent)" />
            </svg>
          </div>

          {/* Glowing Ambient Orbs */}
          <div className="absolute top-0 right-10 w-64 h-64 bg-[var(--mn-accent)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 mn-gold " />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[var(--mn-primary)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 mn-inverse " />

          {/* Subtle Floating Elements: Training Icons */}

          <PlayCircle
            className="course-float mn-anim-10 w-16 h-16 left-[15%] top-[60%]"
          />
          <TrendingUp
            className="course-float mn-anim-12-delay-4 w-12 h-12 left-[80%] top-[40%]"
          />
          <Briefcase
            className="course-float mn-anim-14-delay-2 w-10 h-10 left-[40%] top-[70%]"
          />
          <Sparkles
            className="course-float mn-anim-9-delay-7 w-8 h-8 left-[60%] top-[30%]"
          />
        </div>

        {/* Top-Right Circular Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-8 h-8 bg-black/25 hover:bg-black/40 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-30 cursor-pointer text-white shadow-xs active:scale-95"
            title="العودة"
            aria-label="العودة"
          >
            <ChevronLeft className="w-4 h-4 rotate-180 text-white" />
          </button>
        )}

        {/* Content */}
        <div className="max-w-md sm:max-w-xl mx-auto text-center relative z-10 space-y-3 pt-6">
          {/* Main Title Container */}
          <div className="relative inline-block mb-2">
            <div className="absolute -inset-x-6 -inset-y-3 bg-[var(--mn-accent)]/10 blur-xl rounded-full" />
            <h1 className="relative text-2xl sm:text-3xl font-bold text-white font-['Cairo',sans-serif] tracking-tight leading-tight">
              دليل الدورات{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--mn-accent-soft)] to-[var(--mn-accent-soft)] mn-gold ">
                التدريبية
              </span>
            </h1>
          </div>

          {/* Divider */}
          <div className="flex justify-center items-center gap-2 pt-1 pb-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[var(--mn-accent-soft)]/50" />
            <PlayCircle className="w-4 h-4 text-[var(--mn-accent-text)]" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[var(--mn-accent-soft)]/50" />
          </div>

          {/* Subtitle / Beautiful Copywriting */}
          <p className="text-[13px] sm:text-sm text-[var(--mn-on-dark-muted)] font-medium font-['Cairo',sans-serif] leading-relaxed max-w-[90%] mx-auto drop-shadow-md">
            طور مهاراتك، ارتقِ بمسيرتك المهنية، واكتشف برامج تدريبية عالمية تضعك في صدارة المنافسة
            في سوق العمل المتجدد.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* COURSE PATHS LANDING — NO COURSE LISTS OR FILTERS HERE                    */}
      {/* ========================================================================= */}
      <div className="max-w-md sm:max-w-xl mx-auto mn-inline-gutter -mt-5 relative z-20 pb-24">
        {/* Compact & Sleek Section Header Box */}
        <div className="bg-[var(--mn-surface)] rounded-[18px] border border-[var(--mn-border)] dark:border-white/10 shadow-sm px-3.5 py-2.5 mb-3 mn-panel ">
          <div className="flex items-center justify-between gap-3">
            <div className="text-right min-w-0">
              <h2 className="text-[13.5px] sm:text-[14.5px] font-bold text-[var(--mn-heading)] font-['Cairo',sans-serif]">اختر نوع دورتك</h2>
              <p className="mt-0.5 text-[10px] sm:text-[10.5px] leading-4 text-[var(--mn-text-muted)] font-medium font-['Cairo',sans-serif]">
                اختر المسار المناسب لك، وستجد كافة أدوات البحث والتصفية داخله
              </p>
            </div>
            <div className="w-8.5 h-8.5 rounded-[12px] bg-[#142B5F] dark:bg-[#182f63] border border-[#E5B54F]/35 flex items-center justify-center shrink-0 shadow-xs">
              <BookOpen className="w-4 h-4 text-[#E5B54F] dark:text-[#ffd375]" />
            </div>
          </div>
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          <CoursePathCard
            title="الدورات العالمية"
            description="استكشف مئات الدورات والبرامج المعتمدة التي تجمعها لك منصة منارتك من كبرى الجامعات والمنصات التعليمية العالمية، مع توجيهك المباشر للتسجيل والدراسة من المصدر الرسمي بكل موثوقية."
            icon={Globe2}
            features={[
              { label: 'منصات عالمية', icon: Layers3 },
              { label: 'شهادات معتمدة', icon: BadgeCheck },
              { label: 'مصدر رسمي', icon: ExternalLink },
            ]}
            cta="استكشف الدورات"
            onClick={() => onOpenTrack?.('imported')}
          />

          <CoursePathCard
            title="دورات منارتك"
            description="برامج تعليمية ودورات تدريبية متكاملة مصممة ومبنية حصرياً داخل منصة منارتك، مقسمة إلى وحدات وفصول تفاعلية مع حفظ تقدمك الأكاديمي أولاً بأول وتوفير شهادات إتمام رقمية."
            icon={GraduationCap}
            features={[
              { label: 'وحدات تفاعلية', icon: BookOpenCheck },
              { label: 'حفظ التقدم', icon: TrendingUp },
              { label: 'شهادة إنجاز', icon: Award },
            ]}
            cta="استكشف الدورات"
            onClick={() => onOpenTrack?.('native')}
          />

          <CoursePathCard
            title="الدورات المدفوعة"
            description="مسار مخصص للبرامج التدريبية الاحترافية والماستر كلاس المتقدم، يقدم لك تفاصيل شفافة لرسوم الاشتراك والمميزات الحصرية وإمكانية معاينة محاور الدورة ونبذة المدربين قبل الانضمام."
            icon={CreditCard}
            features={[
              { label: 'تسعير واضح', icon: Tag },
              { label: 'مستوى متقدم', icon: Sparkles },
              { label: 'ضمان الوصول', icon: ShieldCheck },
            ]}
            cta="استكشف الدورات"
            onClick={() => onOpenTrack?.('paid')}
          />
        </div>
      </div>
    </div>
  );
}

