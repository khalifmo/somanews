//#override imports
import { imageOptimizer } from "next/dist/server/image-optimizer";
import { debug } from "../../logger.js";
//#override optimizeImage
export async function optimizeImage(headers, imageParams, nextConfig, handleRequest) {
    const result = await imageOptimizer({ headers }, {}, // res object is not necessary as it's not actually used.
    imageParams, nextConfig, false, // not in dev mode
    handleRequest);
    debug("optimized result", result);
    return result;
}
//#endOverride
