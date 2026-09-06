const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

// Replace ArrowLeft import with ChevronLeft, ArrowLeft
code = code.replace(/ArrowLeft,/, 'ArrowLeft,\n  ChevronLeft,');

// Replace ArrowLeft with ChevronLeft in the tags (but keep the one in the header)
code = code.replace(/<ArrowLeft className="w-2.5 h-2.5/g, '<ChevronLeft className="w-3.5 h-3.5');

fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
