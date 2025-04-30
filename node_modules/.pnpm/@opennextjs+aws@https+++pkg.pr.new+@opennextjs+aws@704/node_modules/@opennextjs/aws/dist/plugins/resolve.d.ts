import type { Plugin } from "esbuild";
import type { DefaultOverrideOptions, IncludedImageLoader, IncludedOriginResolver, IncludedWarmer, LazyLoadedOverride, OverrideOptions } from "../types/open-next";
import type { ImageLoader, OriginResolver, Warmer } from "../types/overrides";
export interface IPluginSettings {
    overrides?: {
        wrapper?: DefaultOverrideOptions<any, any>["wrapper"];
        converter?: DefaultOverrideOptions<any, any>["converter"];
        tagCache?: OverrideOptions["tagCache"];
        queue?: OverrideOptions["queue"];
        incrementalCache?: OverrideOptions["incrementalCache"];
        imageLoader?: LazyLoadedOverride<ImageLoader> | IncludedImageLoader;
        originResolver?: LazyLoadedOverride<OriginResolver> | IncludedOriginResolver;
        warmer?: LazyLoadedOverride<Warmer> | IncludedWarmer;
        proxyExternalRequest?: OverrideOptions["proxyExternalRequest"];
        cdnInvalidation?: OverrideOptions["cdnInvalidation"];
    };
    fnName?: string;
}
/**
 * @param opts.overrides - The name of the overrides to use
 * @returns
 */
export declare function openNextResolvePlugin({ overrides, fnName, }: IPluginSettings): Plugin;
