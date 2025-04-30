import * as buildHelper from "./helper.js";
/**
 * Compiles the middleware bundle.
 *
 * @param options Build Options.
 * @param forceOnlyBuildOnce force to build only once.
 */
export declare function createMiddleware(options: buildHelper.BuildOptions, { forceOnlyBuildOnce }?: {
    forceOnlyBuildOnce?: boolean | undefined;
}): Promise<void>;
