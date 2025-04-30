declare const _default: {
    name: string;
    invalidatePaths: (_: {
        initialPath: string;
        rawPath: string;
        resolvedRoutes: import("../../types/open-next").ResolvedRoute[];
    }[]) => Promise<void>;
};
export default _default;
