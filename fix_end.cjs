const fs = require('fs');

let code = fs.readFileSync('src/components/MajorDetailModal.tsx', 'utf8');
code = code.replace(
  `            {/* Bottom Padding */}\n            <div className="h-6"></div>      </div>    </div>  );};`,
  `            {/* Bottom Padding */}\n            <div className="h-6"></div>\n      </div>\n    </div>\n  );\n};`
);

fs.writeFileSync('src/components/MajorDetailModal.tsx', code);
