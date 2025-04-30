declare const _default: {
    name: string;
    invalidatePaths: (paths: {
        initialPath: string;
        rawPath: string;
        resolvedRoutes: import("../../types/open-next").ResolvedRoute[];
    }[]) => Promise<void>;
};
export default _default;
