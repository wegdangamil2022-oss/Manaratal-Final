const fs = require('fs');
let code = fs.readFileSync('src/types.ts', 'utf8');

const oldMajor = `export interface Major {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  degreeLevels?: DegreeLevel[];
  iconName: string;
  code?: string;
  duration?: string;
  commonDegrees?: string;
  description: string;
  averageScholarships: number;
  futureDemand: 'مرتفع جداً' | 'مرتفع' | 'متوسط';
  topCountries: string[];
  popularCareers: string[];
}`;

const newMajor = `export interface Major {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  degreeLevels?: DegreeLevel[];
  iconName: string;
  code?: string;
  duration?: string;
  commonDegrees?: string;
  description: string;
  averageScholarships: number;
  futureDemand: 'مرتفع جداً' | 'مرتفع' | 'متوسط';
  topCountries: string[];
  popularCareers: string[];
  
  // Detailed Information
  natureOfStudy?: string;
  aboutMajor?: string;
  whatYouWillStudy?: string[];
  foundationSubjects?: string[];
  coreSubjects?: string[];
  practicalSide?: string[];
  acquiredSkills?: string[];
  subSpecialties?: string[];
  workFields?: string[];
  postgraduateOpportunities?: string[];
  similarMajors?: { name: string; difference: string }[];
  academicAlert?: string;
}`;

code = code.replace(oldMajor, newMajor);
fs.writeFileSync('src/types.ts', code);
