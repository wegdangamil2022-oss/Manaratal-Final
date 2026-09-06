const fs = require('fs');
let code = fs.readFileSync('src/components/ScholarshipDetailModal.tsx', 'utf8');

const notesSectionRegex = /\s*\{\/\* 7\. IMPORTANT NOTES SECTION \(ملاحظات مهمة\) \*\/\}[\s\S]*?<\/p>\s*<\/div>\s*<\/div>\s*<\/div>/;

const notesMatch = code.match(notesSectionRegex);
if (!notesMatch) {
  console.log("Could not find notes section");
  process.exit(1);
}

const notesSection = notesMatch[0];

// Remove the section from its current location
code = code.replace(notesSectionRegex, '');

// Insert it before the Required Documents section
const docsRegex = /(\s*\{\/\* 7\. REQUIRED DOCUMENTS SECTION)/;
code = code.replace(docsRegex, notesSection + '\n$1');

// Update section numbers
// Let's just fix the numbering manually in the script:
code = code.replace(/\{\/\* 7\. IMPORTANT NOTES SECTION/g, '{/* 7. IMPORTANT NOTES SECTION');
code = code.replace(/\{\/\* 7\. REQUIRED DOCUMENTS SECTION/g, '{/* 8. REQUIRED DOCUMENTS SECTION');
code = code.replace(/\{\/\* 8\. APPLICATION LINKS SECTION/g, '{/* 9. APPLICATION LINKS SECTION');
code = code.replace(/\{\/\* 9\. SIMILAR SCHOLARSHIPS SECTION/g, '{/* 10. SIMILAR SCHOLARSHIPS SECTION');


fs.writeFileSync('src/components/ScholarshipDetailModal.tsx', code);
console.log("Success");
