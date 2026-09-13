import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

const read = (file) => readFileSync(new URL(`../../${file}`, import.meta.url), 'utf8');

test('branch policy accepts scoped Dependabot updates but rejects arbitrary branch names', () => {
  for (const [name, status] of [
    ['dependabot/github_actions/github/codeql-action/analyze-4.38.0', 0],
    ['dependabot/npm_and_yarn/vite-6.4.3', 0],
    ['main', 0], ['fix/ci-closure', 0], ['dependabot/arbitrary/change', 1], ['random', 1],
  ]) {
    assert.equal(spawnSync(process.execPath, ['scripts/git/validate-branch-name.mjs', name]).status, status, name);
  }
});

test('source-only Prisma job uses the isolated validation gate, never deployment credentials', () => {
  const workflow = read('.github/workflows/imported-courses-runtime-closure.yml');
  assert.match(workflow, /run: npm run db:source:verify/);
  assert.doesNotMatch(workflow, /npx prisma validate/);
  const gate = read('scripts/ci/prisma-source-gate.mjs');
  assert.match(gate, /DATABASE_URL: sourceDatabaseUrl, DIRECT_URL: sourceDatabaseUrl/);
  assert.match(gate, /\['validate', 'generate'\]/);
});

test('translation builds runtime artifacts before behavioral tests', () => {
  const manifest = JSON.parse(read('package.json'));
  assert.match(manifest.scripts['translation:ci'], /^tsc -b packages\/domain packages\/shared &&/);
  assert.match(manifest.scripts['translation:ci'], /npm run translation:test$/);
});

test('CodeQL init/analyze stay on the same immutable revision and Dependabot updates them together', () => {
  const workflow = read('.github/workflows/security.yml');
  const init = workflow.match(/github\/codeql-action\/init@([a-f0-9]{40})/)[1];
  const analyze = workflow.match(/github\/codeql-action\/analyze@([a-f0-9]{40})/)[1];
  assert.equal(init, analyze);
  assert.match(read('.github/dependabot.yml'), /groups:[\s\S]*codeql:[\s\S]*github\/codeql-action\/\*/);
});

test('Preview Prisma ownership remains in resource authority and operational verifier is explicitly classified', () => {
  assert.doesNotMatch(read('apps/api/src/infrastructure/runtime/PreviewDatabaseProbe.ts'), /from ['"]@prisma\/client['"]|new PrismaClient/);
  const policy = JSON.parse(read('scripts/architecture/operational-tooling-boundary.json'));
  assert.ok(policy.classifiedDirectPrismaScripts.includes('scripts/verify-vercel-api-handler.mjs'));
});
