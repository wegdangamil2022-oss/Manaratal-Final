const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

// 1. Change the flex wrapper to items-start (right aligned)
code = code.replace(/className="flex flex-col items-center justify-center mb-3 pt-0\.5"/g, 'className="flex flex-col items-start justify-center mb-3 pt-0.5 pr-2"');

// 2. Change the inner flex row to justify-start
code = code.replace(/className="flex items-center justify-center gap-2 mb-2"/g, 'className="flex items-center justify-start gap-2 mb-1.5"');

// 3. Remove mx-auto from the glowing underline
code = code.replace(/className="w-32 mx-auto h-\[1\.5px\]/g, 'className="w-32 h-[1.5px] ml-auto"'); // Wait, no, ml-auto pushes it to left. Wait, in RTL, items-start puts it on the right. Just remove mx-auto and ml-auto!
// Actually, let's just use `className="w-[120px] h-[1.5px]`
code = code.replace(/className="w-32 mx-auto h-\[1\.5px\] bg-gradient-to-r from-transparent via-\[#C8A24A\] to-transparent/g, 'className="w-[120px] h-[1.5px] bg-gradient-to-r from-[#C8A24A] to-transparent');

// Also update the glowing drop shadow so it looks good when aligned
// No need to change the shadow, it's fine.

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
