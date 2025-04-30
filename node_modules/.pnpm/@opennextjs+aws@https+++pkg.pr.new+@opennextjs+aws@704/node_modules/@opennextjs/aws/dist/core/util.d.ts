import type { MiddlewareManifest } from "../types/next-types.js";
export declare const requestHandler: any;
export declare function getMiddlewareMatch(middlewareManifest: MiddlewareManifest): RegExp[];
export declare function loadMiddlewareManifest(nextDir: string): MiddlewareManifest;
export declare function setNextjsPrebundledReact(rawPath: string): void;
