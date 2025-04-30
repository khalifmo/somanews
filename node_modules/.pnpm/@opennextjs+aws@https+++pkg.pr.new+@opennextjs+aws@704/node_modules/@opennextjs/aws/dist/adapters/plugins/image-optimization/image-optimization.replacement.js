//#override imports
import { fetchExternalImage, fetchInternalImage, imageOptimizer, } from "next/dist/server/image-optimizer";
import { debug } from "../../logger.js";
//#override optimizeImage
export async function optimizeImage(headers, imageParams, nextConfig, handleRequest) {
    const { isAbsolute, href } = imageParams;
    const imageUpstream = isAbsolute
        ? await fetchExternalImage(href)
        : await fetchInternalImage(href, 
        // @ts-expect-error - It is supposed to be an IncomingMessage object, but only the headers are used.
        { headers }, {}, // res object is not necessary as it's not actually used.
        handleRequest);
    const result = await imageOptimizer(imageUpstream, imageParams, 
    // @ts-ignore
    nextConfig, false);
    debug("optimized result", result);
    return result;
}
//#endOverride
