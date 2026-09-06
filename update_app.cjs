const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  "import { MajorsList } from './components/MajorsList';",
  "import { MajorsSearchPage } from './components/MajorsSearchPage';"
);

code = code.replace(
  /<MajorsList majors=\{MOCK_MAJORS\} \/>/g,
  "<MajorsSearchPage majors={MOCK_MAJORS} onSelectMajor={(m) => console.log('Selected major', m)} />"
);

fs.writeFileSync('src/App.tsx', code);
