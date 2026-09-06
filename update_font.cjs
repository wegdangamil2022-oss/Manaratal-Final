const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

// Change text-[10px] to text-[11px] for better readability while keeping it compact
code = code.replace(/text-\[10px\]/g, 'text-[11px]');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
