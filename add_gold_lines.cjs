const fs = require('fs');

const centeredFiles = [
  'src/components/FeaturedScholarships.tsx',
  'src/components/FeaturedServices.tsx',
  'src/components/FeaturedExams.tsx',
  'src/components/FeaturedUniversities.tsx',
  'src/components/FeaturedCourses.tsx',
  'src/components/FeaturedCountries.tsx',
  'src/components/FeaturedMajors.tsx',
  'src/components/AIToolsBanner.tsx',
  'src/components/FeaturedArticles.tsx'
];

for (const file of centeredFiles) {
  if (fs.existsSync(file)) {
    let code = fs.readFileSync(file, 'utf8');
    // Ensure we don't add it multiple times
    if (!code.includes('shadow-[0_0_8px_rgba(200,162,74,0.7)] mt-3')) {
      code = code.replace(/<\/h3>/g, '</h3>\n            {/* Glowing Underline */}\n            <div className="w-[140px] mx-auto h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent shadow-[0_0_8px_rgba(200,162,74,0.7)] mt-3 mb-2" />');
      fs.writeFileSync(file, code);
    }
  }
}

// Special case for Jobs which might not be strictly centered on desktop
const jobsFile = 'src/components/FeaturedJobs.tsx';
if (fs.existsSync(jobsFile)) {
  let code = fs.readFileSync(jobsFile, 'utf8');
  if (!code.includes('shadow-[0_0_8px_rgba(200,162,74,0.7)] mt-3')) {
    code = code.replace(/<\/h3>/g, '</h3>\n              {/* Glowing Underline */}\n              <div className="w-[140px] mx-auto md:mx-0 md:mr-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent shadow-[0_0_8px_rgba(200,162,74,0.7)] mt-3 mb-2" />');
    fs.writeFileSync(jobsFile, code);
  }
}
