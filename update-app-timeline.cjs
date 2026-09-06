const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');
const original = content;

const scheme = {
  'FeaturedScholarships': '#C8A24A',
  'FeaturedMajors': '#0F4B3A',
  'FeaturedUniversities': '#C8A24A',
  'FeaturedCountries': '#0F4B3A',
  'AIToolsBanner': '#C8A24A',
  'RoadmapPreview': '#0F4B3A',
  'FeaturedExams': '#C8A24A',
  'FeaturedCourses': '#0F4B3A',
  'FeaturedJobs': '#C8A24A',
  'FeaturedArticles': '#0F4B3A',
  'FeaturedServices': '#C8A24A',
  'ContactSection': '#0F4B3A',
  'FaqPreview': '#C8A24A'
};

for (const [comp, color] of Object.entries(scheme)) {
  // Regex to find the timeline dot div that immediately precedes the component
  const regex = new RegExp(`(bg-\\[#[0-9A-Fa-f]{6}\\])( ring-4 ring-white shadow-sm z-10"></div>\\s*<${comp})`, 'g');
  content = content.replace(regex, `bg-[${color}]$2`);
}

if (content !== original) {
  fs.writeFileSync('src/App.tsx', content);
  console.log('Updated App.tsx timeline colors');
} else {
  console.log('No changes in App.tsx');
}
