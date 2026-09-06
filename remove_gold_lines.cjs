const fs = require('fs');

const files = [
  'src/components/FeaturedScholarships.tsx',
  'src/components/FeaturedServices.tsx',
  'src/components/FeaturedExams.tsx',
  'src/components/FeaturedUniversities.tsx',
  'src/components/FeaturedCourses.tsx',
  'src/components/FeaturedCountries.tsx',
  'src/components/FeaturedMajors.tsx',
  'src/components/AIToolsBanner.tsx',
  'src/components/FeaturedArticles.tsx',
  'src/components/FeaturedJobs.tsx'
];

const regex = /\s*\{\/\* Glowing Underline \*\/\}\s*<div className="w-\[140px\][^"]*bg-gradient-to-r from-transparent via-\[#C8A24A\] to-transparent shadow-\[0_0_8px_rgba\(200,162,74,0\.7\)\][^"]*" \/>/g;

for (const file of files) {
  if (fs.existsSync(file)) {
    let code = fs.readFileSync(file, 'utf8');
    code = code.replace(regex, '');
    fs.writeFileSync(file, code);
  }
}
