export abstract class ValueObject<T = any> {
  protected constructor(protected readonly props: T) {}
  public equals(vo?: ValueObject<T>): boolean {
    if (vo == null || vo == undefined) return false;
    if (vo.props === undefined) return false;
    return JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
}

export abstract class Identifier<T> {
  constructor(private value: T) {
    this.value = value;
  }
  equals(id?: Identifier<T>): boolean {
    if (id == null || id == undefined) return false;
    if (!(id instanceof this.constructor)) return false;
    return id.toValue() === this.value;
  }
  toString() { return String(this.value); }
  toValue(): T { return this.value; }
}

export class UniqueEntityID extends Identifier<string> {
  constructor(id?: string | number) {
    super(String(id || Math.random().toString(36).substring(2, 9)));
  }
}

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityID;
  public readonly props: T;
  constructor(props: T, id?: Identifier<string | number>) {
    this._id = id ? new UniqueEntityID(id.toValue()) : new UniqueEntityID();
    this.props = props;
  }
  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) return false;
    if (this === object) return true;
    if (!(object instanceof Entity)) return false;
    return this._id.equals(object._id);
  }
}

export interface ISpecification<T> {
  isSatisfiedBy(candidate: T): boolean;
}

export interface IDomainEvent {
  dateTimeOccurred: Date;
  getAggregateId(): any;
}

export class ValidationException extends Error {
  constructor(message: string, public readonly errors: { field: string; message: string; }[] = []) {
    super(message);
  }
}

export interface IPrincipalAccessValidator {
  isAuthenticationAllowed(principalId: string): Promise<boolean>;
}
export interface ISessionManager {
  isSessionActive(sessionId: string): Promise<boolean>;
  revokeAllSessions(principalId: string): Promise<void>;
}
export interface ITokenProvider {
  verifyAccessToken(token: string): Promise<any>;
}
export enum ErrorCode {
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  CONFLICT = 'CONFLICT',
  INFRASTRUCTURE_ERROR = 'INFRASTRUCTURE_ERROR',
  UNEXPECTED_ERROR = 'UNEXPECTED_ERROR'
}
export interface SerializedError {
  code: string;
  message: string;
  details?: any;
  traceId?: string;
}
export interface ApiResponse<T = any> {
  data?: T;
  error?: SerializedError;
  meta?: any;
}
export interface ApiError extends Error {
  code: ErrorCode;
  statusCode: number;
}
export class UnauthorizedException extends Error {}
export interface IAuthorizationService {
  checkPermission(principalId: string, permission: string, resourceId?: string): Promise<boolean>;
}
export interface Permission {}
export class ForbiddenException extends Error {}
export interface ILogger {
  error(msg: string, ...meta: any[]): void;
  info(msg: string, ...meta: any[]): void;
  warn(msg: string, ...meta: any[]): void;
  debug(msg: string, ...meta: any[]): void;
}
export interface ILogContext {
  getCorrelationId(): string;
  runWithContext(context: any, fn: () => void): void;
}
export interface IErrorSerializer {
  serialize(error: Error, foo?: any): SerializedError;
}
export interface IRequestLogger {
  logRequest(req: any, foo?: any, bar?: any, baz?: any): void;
  logResponse(res: any, foo?: any, bar?: any, baz?: any): void;
}
export interface IMonitoringService {
  getMetrics(): Promise<any>;
  startSpan(name: string, foo?: any): any;
  setGauge(name: string, value: any): void;
  incrementCounter(name: string, value?: any): void;
  recordHistogram(name: string, value: any): void;
}
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
export interface ISecurityService {
  getRateLimiter(a?: any, b?: any, c?: any): IRateLimiter;
  validateCsrfToken(token: string, foo?: any): Promise<boolean>;
  generateCsrfToken(): Promise<string>;
  isProductionReady(): boolean;
  kind: string;
}
export interface IRateLimiter {
  isProductionReady(): boolean;
  kind: string;
  consume(key: string, points: number): Promise<void>;
}

export interface UseCase<IRequest, IResponse> {
  execute(request?: IRequest): Promise<IResponse> | IResponse;
}

export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: T | string;
  private _value: T;

  private constructor(isSuccess: boolean, error?: T | string, value?: T) {
    if (isSuccess && error) {
      throw new Error("InvalidOperation: A result cannot be successful and contain an error");
    }
    if (!isSuccess && !error) {
      throw new Error("InvalidOperation: A failing result needs to contain an error message");
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error as T | string;
    this._value = value as T;
    
    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      console.log(this.error);
      throw new Error("Can't get the value of an error result. Use 'error' instead.");
    }

    return this._value;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  public static fail<U>(error: any): Result<U> {
    return new Result<U>(false, error);
  }
}

export class ResultFactory {
  static ok<T>(value?: T) { return Result.ok(value); }
  static fail<T>(error: any) { return Result.fail<T>(error); }
}

export function generateOpaqueIdentifier() { return "opaque-" + Math.random().toString(); }
