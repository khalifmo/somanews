/**
 * This function makes it more straightforward to use SST with OpenNext.
 * All options are already restricted to SST compatible options only.
 * Some options not present here can be used in SST, but it's an advanced use case that
 * can easily break the deployment. If you need to use those options, you should just provide a
 * compatible OpenNextConfig inside your `open-next.config.ts` file.
 * @example
 * ```ts
  export default withSST({
    default: {
      override: {
        wrapper: "aws-lambda-streaming",
      },
    },
    functions: {
      "api/*": {
        routes: ["app/api/test/route", "page/api/otherApi"],
        patterns: ["/api/*"],
      },
    },
  });
 * ```
 */
export function withSST(config) {
    return {
        ...config,
    };
}
