import { debug } from "../adapters/logger";
import { resolveConverter, resolveWrapper } from "./resolve";
export async function createGenericHandler(handler) {
    // @ts-expect-error `./open-next.config.mjs` exists only in the build output
    const config = await import("./open-next.config.mjs").then((m) => m.default);
    globalThis.openNextConfig = config;
    const override = config[handler.type]
        ?.override;
    // From the config, we create the converter
    const converter = await resolveConverter(override?.converter);
    // Then we create the handler
    const { name, wrapper } = await resolveWrapper(override?.wrapper);
    debug("Using wrapper", name);
    return wrapper(handler.handler, converter);
}
