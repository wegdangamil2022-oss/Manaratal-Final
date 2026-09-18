import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

process.env.MANARATAK_GOOGLE_AI_STUDIO = 'true';
process.env.MANARATAK_RUNTIME_PROFILE = 'google-ai-studio';

const [target, action] = process.argv.slice(2);
const appDir = target === 'admin' ? 'apps/admin' : 'apps/web';

if (action === 'build') {
  const child = spawn('npx', ['vite', 'build', '--config', `${appDir}/vite.config.ts`], { stdio: 'inherit', shell: true, env: process.env });
  child.on('exit', code => {
    if (code === 0) {
      const sourceDist = path.resolve(process.cwd(), `${appDir}/dist`);
      const targetDist = path.resolve(process.cwd(), 'dist');
      if (fs.existsSync(sourceDist)) {
        try {
          fs.cpSync(sourceDist, targetDist, { recursive: true });
        } catch (e) {
          console.error('Failed to sync dist:', e);
        }
      }
    }
    process.exit(code || 0);
  });
} else {
  const child = spawn('npx', ['vite', '--config', `${appDir}/vite.config.ts`], { stdio: 'inherit', shell: true, env: process.env });
  child.on('exit', code => process.exit(code || 0));
}
