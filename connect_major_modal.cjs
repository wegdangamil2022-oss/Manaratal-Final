const fs = require('fs');
let appCode = fs.readFileSync('src/App.tsx', 'utf8');

if (!appCode.includes('import { MajorDetailModal }')) {
  appCode = appCode.replace(
    "import { ScholarshipDetailModal } from './components/ScholarshipDetailModal';",
    "import { ScholarshipDetailModal } from './components/ScholarshipDetailModal';\nimport { MajorDetailModal } from './components/MajorDetailModal';"
  );
}

if (!appCode.includes('const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);')) {
  appCode = appCode.replace(
    "const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);",
    "const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);\n  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);"
  );
}

// In MajorsSearchPage call we need to set selectedMajor instead of console.log
appCode = appCode.replace(
  "onSelectMajor={(m) => console.log('Selected major', m)}",
  "onSelectMajor={setSelectedMajor}"
);

// We need to render the modal below ScholarshipDetailModal
if (!appCode.includes('<MajorDetailModal')) {
  const scholarshipModalRender = `<ScholarshipDetailModal
            scholarship={selectedScholarship}
            onClose={() => setSelectedScholarship(null)}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favoriteIds.includes(selectedScholarship.id)}
            onAddToTracker={handleAddToTracker}
            onOpenAiLetter={(title) => {
              setPresetAiScholarship(title);
              setAiToolsInitialTab('letter');
              setIsAiToolsOpen(true);
            }}
          />`;
          
  const addMajorModalRender = `${scholarshipModalRender}
        ) : selectedMajor ? (
          <MajorDetailModal
            major={selectedMajor}
            onClose={() => setSelectedMajor(null)}
          />`;
          
  appCode = appCode.replace(scholarshipModalRender, addMajorModalRender);
}

fs.writeFileSync('src/App.tsx', appCode);
