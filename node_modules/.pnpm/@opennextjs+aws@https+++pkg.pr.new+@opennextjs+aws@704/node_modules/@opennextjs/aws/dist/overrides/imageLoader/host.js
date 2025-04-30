import { Readable } from "node:stream";
import { FatalError } from "../../utils/error";
const hostLoader = {
    name: "host",
    load: async (key) => {
        const host = process.env.HOST;
        if (!host) {
            throw new FatalError("Host must be defined!");
        }
        const url = `https://${host}${key}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new FatalError(`Failed to fetch image from ${url}`);
        }
        if (!response.body) {
            throw new FatalError("No body in response");
        }
        const body = Readable.fromWeb(response.body);
        const contentType = response.headers.get("content-type") ?? "image/jpeg";
        const cacheControl = response.headers.get("cache-control") ??
            "private, max-age=0, must-revalidate";
        return {
            body,
            contentType,
            cacheControl,
        };
    },
};
export default hostLoader;
