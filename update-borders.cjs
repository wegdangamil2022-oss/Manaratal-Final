const fs = require('fs');
const path = require('path');

const updates = {
  'FeaturedScholarships.tsx': '#C8A24A',
  'FeaturedMajors.tsx': '#0F4B3A',
  'FeaturedUniversities.tsx': '#C8A24A',
  'FeaturedCountries.tsx': '#0F4B3A',
  'AIToolsBanner.tsx': '#C8A24A',
  'RoadmapPreview.tsx': '#0F4B3A',
  'FeaturedExams.tsx': '#C8A24A',
  'FeaturedCourses.tsx': '#0F4B3A',
  'FeaturedJobs.tsx': '#C8A24A',
  'FeaturedArticles.tsx': '#0F4B3A',
  'FeaturedServices.tsx': '#C8A24A',
  'ContactSection.tsx': '#0F4B3A',
  'FaqPreview.tsx': '#C8A24A',
};

for (const [filename, color] of Object.entries(updates)) {
  const filePath = path.join('src/components', filename);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace any border-t-[#XXXXXX] with the new color
  content = content.replace(/border-t-\[#[0-9A-Fa-f]{6}\]/g, `border-t-[${color}]`);
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filename} to ${color}`);
  }
}
