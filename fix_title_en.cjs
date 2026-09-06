const fs = require('fs');

let code = fs.readFileSync('src/components/MajorDetailModal.tsx', 'utf8');

const oldHeroTitle = `<h1 className="text-sm sm:text-base font-black text-white leading-tight truncate drop-shadow-sm">
                {major.name}
              </h1>
              <p className="text-[11px] sm:text-[11px] font-bold text-[#C8A24A] font-sans mt-0.5 tracking-wider truncate">
                {major.nameEn}
              </p>`;
              
const newHeroTitle = `<h1 className="text-sm sm:text-base font-black text-white leading-tight truncate drop-shadow-sm">
                {major.name}
              </h1>`;              

code = code.replace(oldHeroTitle, newHeroTitle);
fs.writeFileSync('src/components/MajorDetailModal.tsx', code);
