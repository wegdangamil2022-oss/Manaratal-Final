const fs = require('fs');

let code = fs.readFileSync('src/components/MajorDetailModal.tsx', 'utf8');

// Replace table header sizes
code = code.replace(
  '<div className="col-span-4 sm:col-span-3 text-[11px] sm:text-xs font-black text-[#0F4B3A]/60 uppercase tracking-widest">العنصر</div>',
  '<div className="col-span-4 sm:col-span-3 text-[12px] font-black text-[#0F4B3A]/60 uppercase tracking-widest">العنصر</div>'
);
code = code.replace(
  '<div className="col-span-8 sm:col-span-9 text-[11px] sm:text-xs font-black text-[#0F4B3A]/60 uppercase tracking-widest">التفاصيل</div>',
  '<div className="col-span-8 sm:col-span-9 text-[12px] font-black text-[#0F4B3A]/60 uppercase tracking-widest">التفاصيل</div>'
);

// Replace row label sizes
code = code.replace(/text-\[12\.5px\] sm:text-\[13\.5px\]/g, 'text-[12px]');

// Replace row value sizes (normal)
code = code.replace(/text-\[13px\] sm:text-\[14px\]/g, 'text-[11px]');

// Replace row value size (nameEn)
code = code.replace(/text-\[14px\] sm:text-\[15px\]/g, 'text-[11px]');

fs.writeFileSync('src/components/MajorDetailModal.tsx', code);
