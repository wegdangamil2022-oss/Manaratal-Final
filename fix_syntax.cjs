const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

code = code.replace(/className="w-32 h-\[1\.5px\] ml-auto" bg-gradient-to-r from-transparent via-\[#C8A24A\] to-transparent/g, 'className="w-[120px] h-[1.5px] bg-gradient-to-l from-[#C8A24A] to-transparent');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
