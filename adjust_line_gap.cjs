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

for (const file of files) {
  if (fs.existsSync(file)) {
    let code = fs.readFileSync(file, 'utf8');
    // Change mt-3 (12px) to mt-1.5 (6px) to bring it right under the text
    code = code.replace(/shadow-\[0_0_8px_rgba\(200,162,74,0\.7\)\] mt-3 mb-2/g, 'shadow-[0_0_8px_rgba(200,162,74,0.7)] mt-1.5 mb-2.5');
    fs.writeFileSync(file, code);
  }
}
