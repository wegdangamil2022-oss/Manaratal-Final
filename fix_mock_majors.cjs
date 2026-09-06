const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf8');

code = code.replace(/category: 'التكنولوجيا والهندسة',/g, "category: 'كلية الهندسة والتكنولوجيا',\n    degreeLevels: ['بكالوريوس', 'ماجستير', 'دكتوراه'],");
code = code.replace(/category: 'العلوم الطبية',/g, "category: 'كلية الطب والعلوم الصحية',\n    degreeLevels: ['بكالوريوس', 'ماجستير', 'دكتوراه', 'زمالة أبحاث'],");
code = code.replace(/category: 'الهندسة والبيئة',/g, "category: 'كلية الهندسة والبيئة',\n    degreeLevels: ['بكالوريوس', 'ماجستير'],");
code = code.replace(/category: 'المال والأعمال',/g, "category: 'كلية إدارة الأعمال',\n    degreeLevels: ['بكالوريوس', 'ماجستير', 'دورات تدريبية'],");
code = code.replace(/category: 'الآداب واللغات',/g, "category: 'كلية الآداب واللغات',\n    degreeLevels: ['بكالوريوس', 'ماجستير', 'دكتوراه'],");

fs.writeFileSync('src/data/mockData.ts', code);
