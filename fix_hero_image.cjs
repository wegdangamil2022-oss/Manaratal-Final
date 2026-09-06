const fs = require('fs');
let code = fs.readFileSync('src/components/HeroBanner.tsx', 'utf8');

// Replace the broken local image with a reliable Unsplash image of graduating students
code = code.replace(
  /src="\/hero-bg\.jpg"/,
  'src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"'
);

// Tweak the gradient a bit to make it blend nicely with the new image
code = code.replace(
  /className="absolute inset-0 bg-gradient-to-l from-black\/90 via-black\/40 to-transparent pointer-events-none"/,
  'className="absolute inset-0 bg-gradient-to-l from-[#0F4B3A]/95 via-[#0F4B3A]/70 to-transparent pointer-events-none"'
);

fs.writeFileSync('src/components/HeroBanner.tsx', code);
