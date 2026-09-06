const fs = require('fs');
let code = fs.readFileSync('src/components/MajorDetailModal.tsx', 'utf8');

const splitToken = '            {/* Bottom Padding */}';
const parts = code.split(splitToken);

const newEnd = `${splitToken}
            <div className="h-6"></div>
          </div>
        </div>
      </div>
  );
};
`;

fs.writeFileSync('src/components/MajorDetailModal.tsx', parts[0] + newEnd);
