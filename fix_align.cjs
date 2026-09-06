const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

// 1. Shift container slightly right from center using padding-left (which pushes content right in RTL)
code = code.replace(/className="flex flex-col items-start justify-center mb-3 pt-0\.5 pr-2"/g, 'className="flex flex-col items-center justify-center mb-3 pt-0.5 pl-12 sm:pl-16"');

// 2. Center the inner row
code = code.replace(/className="flex items-center justify-start gap-2 mb-1\.5"/g, 'className="flex items-center justify-center gap-2 mb-1.5"');

// 3. Center the gradient line
code = code.replace(/className="w-\[120px\] h-\[1\.5px\] bg-gradient-to-l from-\[#C8A24A\] to-transparent shadow-\[0_0_8px_rgba\(200,162,74,0\.8\)\]" \/>/g, 'className="w-[140px] h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent shadow-[0_0_8px_rgba(200,162,74,0.7)]" />');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
