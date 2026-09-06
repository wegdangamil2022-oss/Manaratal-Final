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
    code = code.replace(/text-slate-400 font-medium/g, 'text-slate-400 font-light');
    fs.writeFileSync(file, code);
  }
}
