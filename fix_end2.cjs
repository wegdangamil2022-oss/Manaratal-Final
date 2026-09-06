const fs = require('fs');
let code = fs.readFileSync('src/components/MajorDetailModal.tsx', 'utf8');

const targetEnd = `            {/* Bottom Padding */}
            <div className="h-6"></div>
      </div>
    </div>
  );
};`;

const newEnd = `            {/* Bottom Padding */}
            <div className="h-6"></div>
          </div>
        </div>
      </div>
  );
};`;

code = code.replace(targetEnd, newEnd);
fs.writeFileSync('src/components/MajorDetailModal.tsx', code);
