// This is an error that can be totally ignored
// It don't even need to be logged, or only in debug mode
export class IgnorableError extends Error {
    __openNextInternal = true;
    canIgnore = true;
    logLevel = 0;
    constructor(message) {
        super(message);
        this.name = "IgnorableError";
    }
}
// This is an error that can be recovered from
// It should be logged but the process can continue
export class RecoverableError extends Error {
    __openNextInternal = true;
    canIgnore = true;
    logLevel = 1;
    constructor(message) {
        super(message);
        this.name = "RecoverableError";
    }
}
// We should not continue the process if this error is thrown
export class FatalError extends Error {
    __openNextInternal = true;
    canIgnore = false;
    logLevel = 2;
    constructor(message) {
        super(message);
        this.name = "FatalError";
    }
}
export function isOpenNextError(e) {
    try {
        return "__openNextInternal" in e;
    }
    catch {
        return false;
    }
}
