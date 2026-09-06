const fs = require('fs');

const files = [
  'src/components/FeaturedServices.tsx',
  'src/components/FeaturedExams.tsx',
  'src/components/FeaturedUniversities.tsx',
  'src/components/FeaturedCourses.tsx',
  'src/components/FeaturedCountries.tsx',
  'src/components/FeaturedJobs.tsx',
  'src/components/FeaturedMajors.tsx',
  'src/components/AIToolsBanner.tsx',
  'src/components/FeaturedArticles.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let code = fs.readFileSync(file, 'utf8');
    code = code.replace(/text-slate-500 mt-1 max-w-xs mx-auto/g, 'text-slate-400 font-medium mt-1 max-w-xs mx-auto');
    code = code.replace(/text-slate-500 mt-0\.5/g, 'text-slate-400 font-medium mt-0.5');
    code = code.replace(/text-slate-500 mb-5 leading-relaxed/g, 'text-slate-400 font-medium mb-5 leading-relaxed');
    fs.writeFileSync(file, code);
  }
}
