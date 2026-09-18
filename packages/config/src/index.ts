export interface IConfigurationService {
  getString(key: string): string;
  getNumber(key: string): number;
  getBoolean(key: string): boolean;
  getOptional<T>(key: string): T | undefined;
  getRequired<T>(key: string): T;
  getAll(): Record<string, any>;
}

export class ConfigurationService implements IConfigurationService {
  private readonly config: any;
  constructor(initialConfig?: Record<string, any>) { this.config = initialConfig || {}; }
  getString(key: string): string { return String(this.config[key] || ""); }
  getNumber(key: string): number { return Number(this.config[key] || 0); }
  getBoolean(key: string): boolean { return Boolean(this.config[key]); }
  getOptional<T>(key: string): T | undefined { return this.config[key]; }
  getRequired<T>(key: string): T { return this.config[key]; }
  getAll(): Record<string, any> { return this.config; }
}

export class EnvironmentConfigurationProvider {
  private readonly env: any;
  constructor(env?: Record<string, any>) { this.env = env || {}; }
  load(): Record<string, any> { return this.env; }
}

export class EnvironmentLoader {
  private readonly providers: any;
  constructor(providers?: Array<{ load(): Record<string, any> }>) { this.providers = providers; }
  load(): Record<string, any> { return {}; }
}

export class ZodEnvironmentValidator {
  validate(raw: Record<string, any>): Record<string, any> { return raw; }
}

export interface ProductionReadinessReport {
  isReady: boolean;
  blockerCount: number;
  warningCount: number;
  issues: string[];
  strict?: boolean;
  details?: Record<string, any>;
}

export class ProductionReadinessValidator {
  validate(config: Record<string, any>): ProductionReadinessReport { return { isReady: true, blockerCount: 0, warningCount: 0, issues: [] }; }
}

export class ConfigurationRegistry {
  private static instance: any;
  static _reset(): void {}
  static getInstance(): ConfigurationService { return new ConfigurationService(); }
  static getOptionalInstance(): ConfigurationService | null { return null; }
  static async bootstrap(loader: EnvironmentLoader, validator?: any): Promise<ConfigurationService> { return new ConfigurationService(); }
}

export function loadAppConfig(env?: Record<string, any>): Record<string, any> { return {}; }
