export declare function debug(...args: any[]): void;
export declare function warn(...args: any[]): void;
export declare function error(...args: any[]): void;
export declare const awsLogger: {
    trace: () => void;
    debug: () => void;
    info: typeof debug;
    warn: typeof warn;
    error: typeof error;
};
