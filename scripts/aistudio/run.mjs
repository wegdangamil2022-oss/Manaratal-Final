import { spawn } from 'node:child_process';

const [target, action] = process.argv.slice(2);
const appDir = target === 'admin' ? 'apps/admin' : 'apps/web';

if (action === 'build') {
  const child = spawn('npx', ['vite', 'build', '--config', `${appDir}/vite.config.ts`], { stdio: 'inherit', shell: true });
  child.on('exit', code => process.exit(code || 0));
} else {
  const child = spawn('npx', ['vite', '--config', `${appDir}/vite.config.ts`], { stdio: 'inherit', shell: true });
  child.on('exit', code => process.exit(code || 0));
}
