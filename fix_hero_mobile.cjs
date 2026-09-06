const fs = require('fs');
let code = fs.readFileSync('src/components/HeroBanner.tsx', 'utf8');

code = code.replace(
  /className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700 filter brightness-95"/,
  'className="w-full h-full object-cover object-[20%_center] sm:object-center transform group-hover:scale-102 transition-transform duration-700 filter brightness-95"'
);

code = code.replace(
  /className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-black\/80 via-black\/30 to-transparent pointer-events-none"/,
  'className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent pointer-events-none"'
);

fs.writeFileSync('src/components/HeroBanner.tsx', code);
