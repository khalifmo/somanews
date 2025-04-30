/**
 * This function makes it easier to use Cloudflare with OpenNext.
 * All options are already restricted to Cloudflare compatible options.
 * @example
 * ```ts
 export default withCloudflare({
  default: {
    placement: "regional",
    runtime: "node",
  },
  functions: {
    api: {
      placement: "regional",
      runtime: "node",
      routes: ["app/api/test/route", "page/api/otherApi"],
      patterns: ["/api/*"],
    },
    global: {
      placement: "global",
      runtime: "edge",
      routes: "app/test/page",
      patterns: "/page",
    },
  },
});
 * ```
 */
export function withCloudflare(config) {
    const functions = Object.entries(config.functions ?? {}).reduce((acc, [name, fn]) => {
        const _name = name;
        acc[_name] =
            fn.placement === "global"
                ? {
                    placement: "global",
                    runtime: "edge",
                    routes: [fn.routes],
                    patterns: [fn.patterns],
                    override: {
                        wrapper: "cloudflare-edge",
                        converter: "edge",
                    },
                }
                : { ...fn, placement: "regional" };
        return acc;
    }, {});
    return {
        default: config.default,
        functions: functions,
        middleware: {
            external: true,
            originResolver: "pattern-env",
            override: {
                wrapper: "cloudflare-edge",
                converter: "edge",
            },
        },
    };
}
