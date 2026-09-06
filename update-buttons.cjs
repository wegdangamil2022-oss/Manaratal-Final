const fs = require('fs');
const path = require('path');

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let updatedCount = 0;

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  content = content.replace(/bg-emerald-50 hover:bg-emerald-100 text-\[#0F4B3A\] border border-emerald-200\/80/g, "bg-white hover:bg-[#C8A24A]/10 text-[#0F4B3A] border border-[#C8A24A]/50");
  
  content = content.replace(/shadow-\[0_0_15px_rgba\(16,185,129,0\.15\)\] hover:shadow-\[0_0_20px_rgba\(16,185,129,0\.25\)\]/g, "shadow-[0_0_15px_rgba(200,162,74,0.3)] hover:shadow-[0_0_25px_rgba(200,162,74,0.5)]");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${f}`);
    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} files.`);
