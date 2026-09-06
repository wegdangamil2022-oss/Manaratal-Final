const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

code = code.replace(/ChevronLeft,/g, 'ArrowUpLeft,');
code = code.replace(/ChevronLeft/g, 'ArrowUpLeft');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
