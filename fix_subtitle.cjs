const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedScholarships.tsx', 'utf8');

code = code.replace(
  /className="text-\[10px\] sm:text-xs text-slate-500 mt-1 max-w-xs mx-auto font-\['Cairo',sans-serif\]"/g,
  'className="text-[10px] sm:text-xs text-slate-400 font-medium mt-1 max-w-xs mx-auto font-[\'Cairo\',sans-serif]"'
);

fs.writeFileSync('src/components/FeaturedScholarships.tsx', code);
