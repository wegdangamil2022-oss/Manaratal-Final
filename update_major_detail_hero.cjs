const fs = require('fs');

let code = fs.readFileSync('src/components/MajorDetailModal.tsx', 'utf8');

// 1. Remove the fixed overlay wrapper and make it a full page component
const oldWrapperStart = `<div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/40 backdrop-blur-sm opacity-100 transition-opacity"
      onClick={onClose}
      dir="rtl"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* ===================================================================== */}
        {/* HERO HEADER */}
        {/* ===================================================================== */}
        <div className="relative shrink-0 bg-gradient-to-b from-[#083024] to-[#0A3528] text-white px-5 sm:px-8 pt-6 pb-8 overflow-hidden">
          
          {/* Decorative Background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" preserveAspectRatio="none">
              <path d="M-50,50 Q100,-20 250,60 T550,40" stroke="#C8A24A" strokeWidth="1.5" fill="none" />
              <path d="M-20,120 Q150,40 300,140 T600,100" stroke="#C8A24A" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 bg-black/20 hover:bg-black/30 backdrop-blur-md rounded-full transition-all text-white/80 hover:text-white z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:items-end">
            {/* Icon Block */}
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              {getIcon(major.iconName, "w-8 h-8 text-[#C8A24A]")}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {major.code && (
                  <span className="bg-[#C8A24A]/20 text-[#C8A24A] border border-[#C8A24A]/30 px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                    {major.code}
                  </span>
                )}
                <span className="bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold font-['Cairo',sans-serif]">
                  {major.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-['Cairo',sans-serif] tracking-tight leading-tight">
                {major.name}
              </h2>
              <p className="text-emerald-100/70 text-xs sm:text-sm font-semibold mt-1 font-sans">
                {major.nameEn}
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* SCROLLABLE CONTENT BODY */}
        {/* ===================================================================== */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-5 sm:p-8 bg-[#f8fafc] text-slate-800">`;

const newWrapperStart = `<div className="w-full max-w-3xl mx-auto pt-0 pb-12 text-right font-['Cairo',sans-serif] animate-in fade-in duration-200 bg-[#FAFAFA] min-h-screen">
      
      {/* 1. TOP HERO CONTAINER (Compact horizontal layout with glowing gold graduation emblem on the right + arrow + title) */}
      <div className="relative w-full overflow-hidden">
        
        {/* Close Button overlaying the hero */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 bg-black/20 hover:bg-black/30 backdrop-blur-md rounded-full transition-all text-white/80 hover:text-white z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SVG background with matching vibrant 3-stop emerald gradient, subtle gold waves */}
        <div className="relative w-full h-[115px] sm:h-[120px]">
          <svg 
            viewBox="0 0 500 115" 
            preserveAspectRatio="none" 
            className="w-full h-full absolute inset-0 block"
          >
            <defs>
              <linearGradient id="heroGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#083024" />
                <stop offset="50%" stopColor="#0F4B3A" />
                <stop offset="100%" stopColor="#0A3528" />
              </linearGradient>
            </defs>
            {/* Main base background */}
            <path 
              d="M 0,0 L 500,0 L 500,90 Q 250,112 0,90 Z" 
              fill="url(#heroGreenGrad)" 
            />
            {/* Decorative Gold Waves (stays high in the background, nothing dipping low) */}
            <g opacity="0.25">
              <path d="M -50,30 Q 120,-10 260,35 T 550,20" stroke="#C8A24A" strokeWidth="1.5" fill="none" />
              <path d="M -30,60 Q 150,20 320,55 T 560,35" stroke="#C8A24A" strokeWidth="1" fill="none" />
              
              {/* Gold Sparkle Dots */}
              <circle cx="35" cy="25" r="1.5" fill="#C8A24A" />
              <circle cx="50" cy="18" r="1" fill="#C8A24A" />
              <circle cx="42" cy="38" r="1.2" fill="#C8A24A" />
              <circle cx="445" cy="22" r="1.5" fill="#C8A24A" />
              <circle cx="460" cy="35" r="1" fill="#C8A24A" />
              <circle cx="430" cy="42" r="1.2" fill="#C8A24A" />
            </g>
            {/* The gold accent border following the bottom curve */}
            <path 
              d="M 0,90 Q 250,112 500,90" 
              fill="none" 
              stroke="#C8A24A" 
              strokeWidth="2.2" 
              strokeLinecap="round"
            />
          </svg>
          {/* Hero Content: Horizontal Row (Glowing Gold Graduation Badge Right -> Title Left) */}
          <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 pt-1 pb-4 z-10" dir="rtl">
            
            {/* Right Side: Icon */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-11 h-11 rounded-full border-2 border-[#C8A24A] flex items-center justify-center p-1.5 shadow-[0_0_12px_rgba(200,162,74,0.5)] bg-gradient-to-br from-[#0F4B3A] to-[#062018] shrink-0 text-[#C8A24A]">
                {getIcon(major.iconName, "w-6 h-6")}
              </div>
            </div>

            {/* Left Side (in RTL): Major Title & English Subtitle */}
            <div className="flex flex-col text-right min-w-0 flex-1 pr-3">
              <h1 className="text-sm sm:text-base font-black text-white leading-tight truncate drop-shadow-sm">
                {major.name}
              </h1>
              <p className="text-[11px] sm:text-[11px] font-bold text-[#C8A24A] font-sans mt-0.5 tracking-wider truncate">
                {major.nameEn}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* CONTENT BODY */}
      {/* ===================================================================== */}
      <div className="px-4 sm:px-6 pt-6 pb-12 bg-[#FAFAFA] text-slate-800">`;

code = code.replace(oldWrapperStart, newWrapperStart);

// Remove the closing tags from the end
const oldWrapperEnd = `          </div>
        </div>
      </div>
    </div>
  );
};`;
const newWrapperEnd = `      </div>
    </div>
  );
};`;

code = code.replace(oldWrapperEnd, newWrapperEnd);

fs.writeFileSync('src/components/MajorDetailModal.tsx', code);
