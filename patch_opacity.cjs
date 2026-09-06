const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

code = code.replace(/opacity-0 group-hover:opacity-100/g, 'opacity-40 group-hover:opacity-100');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
