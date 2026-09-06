const fs = require('fs');
let code = fs.readFileSync('src/components/MajorsSearchPage.tsx', 'utf8');

code = code.replace(
  /const getIcon = \(iconName: string\) => \{[\s\S]*?return <BookOpen className="w-5 h-5 text-emerald-700" \/>;\s*\}\s*\};/,
  `const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#C8A24A]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-red-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#C8A24A]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-300" />;
      default: return <BookOpen className="w-5 h-5 text-white" />;
    }
  };`
);
fs.writeFileSync('src/components/MajorsSearchPage.tsx', code);
