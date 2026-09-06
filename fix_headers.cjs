const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

let count = 0;
code = code.replace(/<div className="flex items-center justify-center gap-2 mb-3 pt-0\.5">([\s\S]*?)<\/h3>\s*<\/div>/g, (match, inner) => {
  count++;
  return `<div className="flex flex-col items-center justify-center mb-3 pt-0.5">\n            <div className="flex items-center justify-center gap-2 mb-2">\n  ${inner}</h3>\n            </div>\n            {/* Glowing Underline */}\n            <div className="w-32 mx-auto h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent drop-shadow-[0_0_6px_rgba(200,162,74,0.9)]" />\n          </div>`;
});

console.log(`Replaced ${count} occurrences.`);
fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
