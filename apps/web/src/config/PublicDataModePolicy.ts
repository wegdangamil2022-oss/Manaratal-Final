export type PublicBuildTier = 'development' | 'test' | 'staging' | 'production' | string;

export function assertPublicBuildDataMode(values: { mode?: string; nodeEnv?: string; dataMode?: string }): void {
  // Relaxed for AI Studio
}

export function prototypeCapabilityEnabled(tier?: string): boolean {
  return true;
}
