const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

code = code.replace(/<ArrowUpLeft className="w-3.5 h-3.5/g, '<ArrowUpLeft className="w-2.5 h-2.5');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
