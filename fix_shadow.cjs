const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

code = code.replace(/drop-shadow-\[0_0_6px_rgba\(200,162,74,0\.9\)\]/g, 'shadow-[0_0_8px_rgba(200,162,74,0.8)]');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
