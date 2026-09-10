import { afterEach, describe, expect, it, vi } from 'vitest';
import { loadConfigFromFile } from 'vite';
import { resolve } from 'node:path';
import { FRONTEND_SECURITY_HEADERS } from '../../apps/frontend-security/ViteFrontendSecurityHeaders';
import { frontendHeadersForDevelopment } from '../../apps/frontend-security/GoogleAiStudioPreview';
import { isPreviewDatabaseProbeEnabled } from '../../apps/api/src/infrastructure/runtime/PreviewDatabaseProbe.js';

afterEach(() => vi.unstubAllEnvs());

describe('Google AI Studio compatibility boundaries', () => {
  it('relaxes iframe and HMR headers only for development, never production', () => {
    expect(frontendHeadersForDevelopment(false)).toEqual(FRONTEND_SECURITY_HEADERS);
    expect(FRONTEND_SECURITY_HEADERS['X-Frame-Options']).toBe('DENY');
    expect(FRONTEND_SECURITY_HEADERS['Content-Security-Policy']).not.toContain('unsafe-inline');
    const dev = frontendHeadersForDevelopment(true);
    expect(dev['X-Frame-Options']).toBeUndefined();
    expect(dev['Content-Security-Policy']).toContain('https://aistudio.google.com');
    expect(dev['Content-Security-Policy']).toContain("script-src 'self' 'unsafe-inline'");
    expect(dev['Content-Security-Policy']).toContain("script-src-attr 'none'");
  });

  it.each(['web', 'admin'])('uses source aliases and Web-only middleware for %s without dist artifacts', async (app) => {
    vi.stubEnv('MANARATAK_GOOGLE_AI_STUDIO', 'true');
    const result = await loadConfigFromFile({ command: 'serve', mode: 'aistudio' }, resolve('apps', app, 'vite.config.ts'));
    expect(result).not.toBeNull();
    const plugins = result!.config.plugins?.flat().filter(Boolean) as Array<{ name: string }>;
    expect(plugins.map((plugin) => plugin.name)).toContain('manaratak-google-ai-studio-web-only');
    expect(plugins.map((plugin) => plugin.name)).not.toContain('express-api-plugin');
    expect(result!.config.server?.hmr).toBe(true);
    const aliases = result!.config.resolve?.alias as Record<string, string>;
    expect(aliases['@manaratak/shared'].replaceAll('\\', '/')).toMatch(/packages\/shared\/src\/index\.ts$/);
    expect(aliases['@manaratak/domain'].replaceAll('\\', '/')).toMatch(/packages\/domain\/src\/index\.ts$/);
  });

  it('keeps the existing API plugin outside Google AI Studio', async () => {
    vi.stubEnv('MANARATAK_GOOGLE_AI_STUDIO', 'false');
    vi.stubEnv('MANARATAK_RUNTIME_PROFILE', '');
    const result = await loadConfigFromFile({ command: 'serve', mode: 'development' }, resolve('apps/web/vite.config.ts'));
    const plugins = result!.config.plugins?.flat().filter(Boolean) as Array<{ name: string }>;
    expect(plugins.map((plugin) => plugin.name)).toContain('express-api-plugin');
  });

  it('passes an external API base through to the browser unchanged', async () => {
    vi.stubEnv('MANARATAK_GOOGLE_AI_STUDIO', 'true');
    vi.stubEnv('VITE_API_URL', 'https://experimental.example.invalid/api/v1');
    const { resolveConfig } = await import('vite');
    const config = await resolveConfig({ configFile: resolve('apps/web/vite.config.ts'), mode: 'aistudio' }, 'serve');
    expect(config.env.VITE_API_URL).toBe('https://experimental.example.invalid/api/v1');
  });

  it('prevents accidental Preview database probing with the Web-only profile', () => {
    const preview = { VERCEL: '1', VERCEL_ENV: 'preview', MANARATAK_PREVIEW_DATABASE_PROBE: 'true' };
    expect(isPreviewDatabaseProbeEnabled(preview)).toBe(true);
    expect(isPreviewDatabaseProbeEnabled({ ...preview, MANARATAK_RUNTIME_PROFILE: 'google-ai-studio' })).toBe(false);
    expect(isPreviewDatabaseProbeEnabled({ ...preview, MANARATAK_GOOGLE_AI_STUDIO: 'true' })).toBe(false);
  });
});
