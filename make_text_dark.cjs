const fs = require('fs');

const files = [
  'src/components/FeaturedScholarships.tsx',
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
    // Change from text-slate-400 font-light to text-slate-700 font-medium
    code = code.replace(/text-slate-400 font-light/g, 'text-slate-600 font-medium');
    // Just in case some were left as slate-500
    code = code.replace(/text-slate-500 mt-1 max-w-xs/g, 'text-slate-600 font-medium mt-1 max-w-xs');
    fs.writeFileSync(file, code);
  }
}
