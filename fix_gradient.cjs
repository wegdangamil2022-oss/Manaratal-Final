const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

code = code.replace(/bg-gradient-to-r from-\[#C8A24A\] to-transparent/g, 'bg-gradient-to-l from-[#C8A24A] to-transparent');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
