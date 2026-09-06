const fs = require('fs');

let mockCode = fs.readFileSync('src/data/mockData.ts', 'utf8');

const regex = /export const MOCK_MAJORS: Major\[\] = \[[\s\S]*?\];/;

const newMockMajors = `export const MOCK_MAJORS: Major[] = [
  {
    id: 'mjr-0001',
    code: 'MJR-0001',
    name: 'الطب والجراحة',
    nameEn: 'Medicine and Surgery',
    category: 'كلية الطب والعلوم الطبية الأساسية',
    iconName: 'Activity',
    description: 'برنامج يجمع العلوم الطبية الأساسية بالتدريب السريري لفهم جسم الإنسان والمرض والتشخيص والعلاج والوقاية والرعاية الصحية.',
    averageScholarships: 120,
    futureDemand: 'مرتفع جداً',
    topCountries: ['الولايات المتحدة', 'المملكة المتحدة', 'كندا', 'ألمانيا'],
    popularCareers: ['طبيب عام', 'طبيب مقيم', 'طبيب امتياز'],
    degreeLevels: ['بكالوريوس'],
    duration: '5–6 سنوات',
    commonDegrees: 'MBBS، MBChB، MD'
  }
];`;

mockCode = mockCode.replace(regex, newMockMajors);
fs.writeFileSync('src/data/mockData.ts', mockCode);
