export interface BaseOpenNextError {
    readonly __openNextInternal: true;
    readonly canIgnore: boolean;
    readonly logLevel: 0 | 1 | 2;
}
export declare class IgnorableError extends Error implements BaseOpenNextError {
    readonly __openNextInternal = true;
    readonly canIgnore = true;
    readonly logLevel = 0;
    constructor(message: string);
}
export declare class RecoverableError extends Error implements BaseOpenNextError {
    readonly __openNextInternal = true;
    readonly canIgnore = true;
    readonly logLevel = 1;
    constructor(message: string);
}
export declare class FatalError extends Error implements BaseOpenNextError {
    readonly __openNextInternal = true;
    readonly canIgnore = false;
    readonly logLevel = 2;
    constructor(message: string);
}
export declare function isOpenNextError(e: any): e is BaseOpenNextError & Error;
